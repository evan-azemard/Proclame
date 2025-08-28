import { useEffect, useRef } from "react";

/**
 * Anime en douceur des variables CSS (RGB) définies sous forme "r, g, b".
 * Permet de faire évoluer les dégradés qui se basent sur ces variables (via rgba(var(--color-x), opacité)).
 *
 * Exemple d'utilisation :
 * useGradientAnimator({
 *   sets: [
 *     { '--color-primary': [103,87,207], '--color-prune': [110,29,72] },
 *     { '--color-primary': [219,210,187], '--color-prune': [166,158,148] },
 *     { '--color-primary': [67,87,207],  '--color-prune': [110,29,72] }
 *   ],
 *   duration: 8000
 * });
 */
export interface GradientAnimatorOptions {
  /** Tableau de jeux de couleurs : chaque objet mappe une variable CSS -> tuple RGB */
  sets: Record<string, [number, number, number]>[];
  /** Durée (ms) d'une transition entre deux jeux (default 10000) */
  duration?: number;
  /** Pause (true pour suspendre l'animation) */
  pause?: boolean;
  /** Fonction d'interpolation custom (ease in/out). Par défaut linéaire. */
  easing?: (t: number) => number;
  /** Élément racine sur lequel appliquer les variables (default document.documentElement) */
  root?: HTMLElement | null;
}

export function useGradientAnimator(options: GradientAnimatorOptions) {
  const {
    sets,
    duration = 10000,
    pause = false,
    easing = (t) => t,
    root,
  } = options;
  const indexRef = useRef(0);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!sets || sets.length < 2) return; // rien à animer
    const el = root ?? document.documentElement;
    if (!el) return;

    function applySet(setObj: Record<string, [number, number, number]>) {
      Object.entries(setObj).forEach(([varName, rgb]) => {
        const value = `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`;
        el.style.setProperty(varName, value);
        // Si la variante RGB explicite existe on la met aussi (ex: --color-primaryRGB)
        if (!varName.endsWith("RGB")) {
          const rgbVar = `${varName}RGB`;
          el.style.setProperty(rgbVar, `rgb(${value})`);
        }
      });
    }

    function step(now: number) {
      if (pause) {
        frameRef.current = requestAnimationFrame(step);
        return;
      }
      if (startRef.current == null) startRef.current = now;
      const elapsed = now - startRef.current;
      const progressRaw = Math.min(elapsed / duration, 1);
      const t = easing(progressRaw);

      const fromIndex = indexRef.current;
      const toIndex = (fromIndex + 1) % sets.length;
      const fromSet = sets[fromIndex];
      const toSet = sets[toIndex];

      // Union des variables présentes dans l'un ou l'autre set
      const varNames = new Set<string>([
        ...Object.keys(fromSet),
        ...Object.keys(toSet),
      ]);

      varNames.forEach((name) => {
        const fromRGB = fromSet[name] ?? toSet[name];
        const toRGB = toSet[name] ?? fromSet[name];
        // Interpolation composante par composante
        const interp: [number, number, number] = [0, 1, 2].map((i) => {
          const a = fromRGB[i];
          const b = toRGB[i];
          return Math.round(a + (b - a) * t);
        }) as [number, number, number];
        const value = `${interp[0]}, ${interp[1]}, ${interp[2]}`;
        el.style.setProperty(name, value);
        if (!name.endsWith("RGB")) {
          el.style.setProperty(`${name}RGB`, `rgb(${value})`);
        }
      });

      if (progressRaw >= 1) {
        // Transition terminée, on prépare la suivante
        indexRef.current = (indexRef.current + 1) % sets.length;
        startRef.current = now;
        // la transition suivante démarre automatiquement
      }

      frameRef.current = requestAnimationFrame(step);
    }

    // Initialisation : appliquer le set courant pour éviter flash
    applySet(sets[indexRef.current]);
    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [sets, duration, pause, easing, root]);
}

// Petite fonction utilitaire prête à l'emploi spécifiquement pour le header
export function useHeaderGradientAnimation(pause = false) {
  useGradientAnimator({
    pause,
    duration: 12000,
    sets: [
      [
        {
          "--color-primary": [103, 40, 59],
          "--color-prune": [177, 37, 93],
        },
        {
          "--color-primary": [111, 37, 101],
          "--color-prune": [59, 15, 102],
        },
      ],
    ],
  });
}


