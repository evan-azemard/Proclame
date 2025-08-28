import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './GradientDesigner.module.scss';
import { useGradientAnimator } from '@hooks/useGradientAnimator';

interface Frame {
  id: string;
  colors: Record<string,string>; // baseVar -> hex
}

const DEFAULT_BASE_VARS = ['--color-primary','--color-prune'];

function hexToRgbTuple(hex: string): [number,number,number] {
  let h = hex.replace('#','').trim();
  if (h.length === 3) h = h.split('').map(c=>c+c).join('');
  const r = parseInt(h.slice(0,2),16);
  const g = parseInt(h.slice(2,4),16);
  const b = parseInt(h.slice(4,6),16);
  return [r,g,b];
}

function randomColor() {
  return '#'+Math.floor(Math.random()*0xffffff).toString(16).padStart(6,'0');
}

export default function GradientDesigner() {
  const [baseVars, setBaseVars] = useState<string[]>(DEFAULT_BASE_VARS);
  const [frames, setFrames] = useState<Frame[]>(() => [
    { id: 'f1', colors: Object.fromEntries(baseVars.map(v=>[v, '#6757cf'])) },
    { id: 'f2', colors: Object.fromEntries(baseVars.map(v=>[v, '#dbd2bb'])) },
    { id: 'f3', colors: Object.fromEntries(baseVars.map(v=>[v, '#4357cf'])) },
  ]);
  const [duration, setDuration] = useState(12000);
  const [paused, setPaused] = useState(false);
  const latest = useRef({ frames, baseVars });
  latest.current = { frames, baseVars };

  // Recalcule sets pour le hook
  const sets = useMemo(() => {
    return frames.map(f => {
      const entry: Record<string,[number,number,number]> = {};
      baseVars.forEach(v => entry[v] = hexToRgbTuple(f.colors[v]));
      return entry;
    });
  }, [frames, baseVars]);

  useGradientAnimator({ sets, duration, pause: paused });

  const updateFrameColor = useCallback((frameId: string, varName:string, value:string) => {
    setFrames(fs => fs.map(f => f.id === frameId ? { ...f, colors: { ...f.colors, [varName]: value } } : f));
  }, []);

  const addFrame = () => {
    setFrames(fs => [...fs, { id: 'f'+(fs.length+1), colors: Object.fromEntries(baseVars.map(v=>[v, randomColor()])) }]);
  };
  const removeFrame = (id: string) => {
    setFrames(fs => fs.length <=2 ? fs : fs.filter(f => f.id !== id));
  };

  const addBaseVar = () => {
    const name = prompt('Nom de variable (sans --) ex: color-accent');
    if (!name) return;
    const full = name.startsWith('--') ? name : `--${name}`;
    if (baseVars.includes(full)) return;
    setBaseVars(vs => [...vs, full]);
    setFrames(fs => fs.map(f => ({ ...f, colors: { ...f.colors, [full]: randomColor() } })));
  };

  const exportJSON = () => {
    const json = JSON.stringify(sets, null, 2);
    navigator.clipboard?.writeText(json).catch(()=>{});
    alert('Copié dans le presse-papiers');
  };

  useEffect(() => {
    const root = document.documentElement;
    if (sets[0]) {
      Object.entries(sets[0]).forEach(([varName, rgb]) => {
        const value = `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`;
        root.style.setProperty(varName, value);
      });
    }
  }, [sets]);

  return (
    <div className={styles.designer}>
      <div className={styles.previewBar} title="Aperçu live (gradient-header)"></div>
      <div className={styles.row}>
        <label>Durée (ms transition)</label>
        <input type="number" value={duration} min={500} step={500} onChange={e=>setDuration(Number(e.target.value)||1000)} />
        <button className={styles.smallBtn} onClick={()=>setPaused(p=>!p)}>{paused? 'Reprendre':'Pause'}</button>
        <button className={styles.smallBtn} onClick={addFrame}>+ Frame</button>
        <button className={styles.smallBtn} onClick={addBaseVar}>+ Var</button>
        <button className={styles.smallBtn} onClick={exportJSON}>Exporter JSON</button>
      </div>
      {frames.map((frame, idx) => (
        <div key={frame.id} className={styles.frameBox}>
          <header>Frame {idx+1}</header>
          {baseVars.map(v => (
            <div key={v}>
              <input
                aria-label={`${v} frame ${idx+1}`}
                className={styles.colorInput}
                type="color"
                value={frame.colors[v]}
                onChange={e=>updateFrameColor(frame.id, v, e.target.value)}
              />
            </div>
          ))}
          {frames.length>2 && <button className={styles.smallBtn} onClick={()=>removeFrame(frame.id)}>✕</button>}
        </div>
      ))}
      <small>Astuce: clique Exporter pour coller ensuite les sets directement dans ton code.</small>
    </div>
  );
}
