import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './BackgroundInk.scss';

/* Three.js background: orbs (méduse style) primary color.
   - Lifecycle: grow (scale up) -> organic deform animation -> shrink -> respawn.
   - Deformation inspired by user snippet (sine/bell/ring waves).
   - No interaction / no pointer usage.
*/

interface Orb {
  mesh: THREE.Mesh;
  geom: THREE.SphereGeometry;
  basePositions: Float32Array;
  life: number;          // normalized 0->1 progression
  lifeSpeed: number;     // normalized increment per frame (scaled)
  baseScale: number;
  noiseSeed: number;
  rotAxis: THREE.Vector3;
  rotSpeed: number;
  driftPhase: number;
  motionType: 'drift' | 'static';
  fadeStart: number; // portion of life when fade begins
  growBias: number; // modifies ease shape
  maxScaleFactor: number; // cap scale relative to base
  startDelay: number; // absolute time (seconds) when growth begins
}

const ORB_COUNT = 16; // more orbs simultaneously

export default function BackgroundInk() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 300);
  camera.position.set(0, 0, 55);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    el.appendChild(renderer.domElement);
  renderer.setClearColor(0x000000, 1); // single dark base

  // Lighting: soft ambient + subtle point for gentle shading
  scene.add(new THREE.AmbientLight(0xffffff, 0.25));
  const point = new THREE.PointLight(0xffffff, 0.8, 260, 2.2);
  point.position.set(15, 22, 28);
  scene.add(point);

    // Extract primary color from CSS variable
    const style = getComputedStyle(document.documentElement);
    const prim = style.getPropertyValue('--color-primary').trim().split(',').map(s => parseFloat(s)) as [number, number, number];
    const primaryColor = new THREE.Color(prim[0] / 255, prim[1] / 255, prim[2] / 255);

  // Removed fog to avoid layering artifacts

    // Material reused
    const mat = new THREE.MeshStandardMaterial({
      color: primaryColor,
      roughness: 0.38,
      metalness: 0.08,
      transparent: true,
      opacity: 0.65,
      emissive: primaryColor.clone().multiplyScalar(0.35),
      emissiveIntensity: 0.55,
      depthWrite: false
    });

    function rand(min: number, max: number) { return Math.random() * (max - min) + min; }

    const orbs: Orb[] = [];

  const resetOrb = (orb?: Orb, now: number = 0) => {
      if (!orb) return;
      // Biased spawn: 65% left side, ensure separation
      let attempts = 0;
      const pos = new THREE.Vector3();
      const vh = window.innerHeight || 800;
      do {
        const leftBias = Math.random() < 0.65;
        const x = leftBias ? rand(-38, -4) : rand(-8, 36);
        // Map viewport height to world Y range (approx scaling factor 40 -> world units)
        const yWorldRange = 40; // covers top to bottom
        const y = (rand(0, vh) / vh - 0.5) * yWorldRange; // center at 0
        pos.set(x, y, rand(-28, 8));
        attempts++;
      } while (attempts < 10 && orbs.some(o => o !== orb && o.mesh.position.distanceTo(pos) < 7));
      orb.mesh.position.copy(pos);
      orb.baseScale = rand(2.8, 6.5);
      // Always restart from 0 (will grow after startDelay)
      orb.life = 0;
  // 50–110s active lifecycle approx (slower for smoother growth)
  orb.lifeSpeed = rand(0.00012, 0.00028);
      orb.noiseSeed = Math.random() * 1000;
      orb.rotAxis = new THREE.Vector3(rand(-1,1), rand(-1,1), rand(-1,1)).normalize();
      orb.rotSpeed = rand(0.0006, 0.0014);
      orb.driftPhase = Math.random() * Math.PI * 2;
      orb.motionType = Math.random() < 0.4 ? 'static' : 'drift';
      orb.fadeStart = rand(0.55, 0.92);
      orb.growBias = rand(0.5, 1.4);
      orb.maxScaleFactor = rand(0.8, 1.25);
      // Per-orb delay before growth begins (staggered appearance)
  orb.startDelay = now + rand(0, 2) + (Math.random() * 0.6) + (orbs.indexOf(orb) * 2.2); // progressive stagger
      orb.mesh.scale.setScalar(0.0001);
    };

    for (let i = 0; i < ORB_COUNT; i++) {
  const geom = new THREE.SphereGeometry(1, 72, 72);
      const mesh = new THREE.Mesh(geom, mat.clone()); // small color variance
      (mesh.material as THREE.MeshStandardMaterial).color = primaryColor.clone().offsetHSL(0, rand(-0.05, 0.05), rand(-0.08, 0.12));
      const basePositions = (geom.attributes.position.array as Float32Array).slice() as Float32Array;
      const orb: Orb = {
        mesh,
        geom,
        basePositions,
        life: 0,
  lifeSpeed: rand(0.00012, 0.00028),
        baseScale: rand(2.8, 6.5),
        noiseSeed: Math.random() * 1000,
        rotAxis: new THREE.Vector3(rand(-1,1), rand(-1,1), rand(-1,1)).normalize(),
        rotSpeed: rand(0.0006, 0.0014),
  driftPhase: Math.random() * Math.PI * 2,
  motionType: Math.random() < 0.4 ? 'static' : 'drift',
  fadeStart: rand(0.55, 0.92),
  growBias: rand(0.5, 1.4),
        maxScaleFactor: rand(0.8, 1.25),
  startDelay: rand(0, 2) + i * 2.2 + Math.random() * 0.6
      };
      scene.add(mesh);
      orbs.push(orb);
      // Ensure proper position & reset lifecycle state (startDelay preserved)
      resetOrb(orb, 0);
    }

    const clock = new THREE.Clock();

    // Smooth in-out with slower extremes (easeInOutCubic over life) then modulated by sine for organic fade
    function easeGrowth(p: number, bias: number) {
      // Pre-shape to slow initial growth strongly
      const shaped = Math.pow(p, 1.8); // very small at start
      const c = shaped < 0.5 ? 2 * Math.pow(shaped, bias) : 1 - Math.pow(-2 * shaped + 2, bias) / 2;
      const plateau = Math.pow(c, 0.7);
      return Math.sin(Math.PI * plateau);
    }
    function animate() {
      const dt = clock.getDelta();
      const t = clock.getElapsedTime();
      orbs.forEach(o => {
        // Wait for its personal start delay before advancing life
        if (t < o.startDelay) {
          // keep tiny until its start time
          return;
        }
        // advance after delay
        o.life += o.lifeSpeed * dt * 60;
        if (o.life >= 1) {
          resetOrb(o, t);
          return;
        }
        const p = Math.min(o.life, 1);
  const grow = easeGrowth(p, o.growBias);

        // Scale & opacity
  const scale = o.baseScale * grow * o.maxScaleFactor;
        o.mesh.scale.setScalar(Math.max(scale, 0.0001));
  const matLocal = o.mesh.material as THREE.MeshStandardMaterial;
  // Maintain visibility longer: fade after individual fadeStart
  const fadeStart = o.fadeStart;
  const fadeFactor = p < fadeStart ? 1 : 1 - (p - fadeStart) / (1 - fadeStart);
  matLocal.opacity = 0.65 * grow * fadeFactor;
  matLocal.emissiveIntensity = 0.4 + 0.3 * grow;

        // Deformation (reduced frequency for smoother motion)
        const posAttr = o.geom.attributes.position as THREE.BufferAttribute;
        const arr = posAttr.array as Float32Array;
        for (let i = 0; i < arr.length; i += 3) {
          const x0 = o.basePositions[i];
          const y0 = o.basePositions[i + 1];
            const z0 = o.basePositions[i + 2];
          const r0 = Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0) || 1;
          const nx = x0 / r0, ny = y0 / r0, nz = z0 / r0;
          const sineNoise = Math.sin(nx * 1.5 + t * 0.6 + o.noiseSeed) * Math.cos(ny * 1.5 + t * 0.7 + o.noiseSeed * 1.1);
          const bell = 0.5 + 0.5 * Math.sin(t * 0.9 + o.noiseSeed * 0.2);
          const theta = Math.atan2(z0, x0);
          const ring = 0.12 * Math.sin(3.0 * theta + t * 0.6) + 0.10 * Math.sin((ny * Math.PI * 2.0) + t * 0.55);
          let radius = 0.9 + 0.20 * sineNoise + 0.08 * bell + 0.08 * ring;
          radius *= 0.99 + 0.01 * Math.sin(t * 0.4);
          radius = Math.min(1.18, Math.max(0.7, radius));
          radius *= grow; // fade geometry at ends
          arr[i] = nx * radius;
          arr[i + 1] = ny * (radius * (1.0 - 0.08 * bell));
          arr[i + 2] = nz * radius;
        }
        posAttr.needsUpdate = true;
        // lighten cost: recompute normals less frequently
        if ((t * 60) % 6 < 1) o.geom.computeVertexNormals();

        // Drift: slow lissajous path + vertical float
        if (o.motionType === 'drift') {
          const driftT = t * 0.006 + o.driftPhase;
          o.mesh.position.x += Math.sin(driftT * 0.65 + o.noiseSeed) * 0.02;
          o.mesh.position.y += Math.cos(driftT * 0.7 + o.noiseSeed) * 0.018;
          o.mesh.position.z += Math.sin(driftT * 0.55 + o.noiseSeed) * 0.013;
        } else {
          // static: micro breathing jitter only
          o.mesh.position.x += Math.sin(t * 0.2 + o.noiseSeed) * 0.002;
          o.mesh.position.y += Math.cos(t * 0.25 + o.noiseSeed) * 0.002;
        }

        // Self rotation
  o.mesh.rotateOnAxis(o.rotAxis, o.rotSpeed); // slow continuous turning
      });
      renderer.render(scene, camera);
      if (!prefersReducedMotion) rafRef.current = requestAnimationFrame(animate);
    }

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      // Optional: if height change large, redistribute some orbs vertically
      const vh = window.innerHeight;
      if (vh > 0) {
        const yWorldRange = 40;
        orbs.forEach((o, idx) => {
          if (idx % 3 === 0) { // sparsely reposition to avoid jumpiness
            const y = (Math.random() * vh / vh - 0.5) * yWorldRange;
            o.mesh.position.y = y;
          }
        });
      }
    }
    window.addEventListener('resize', onResize);
    if (!prefersReducedMotion) animate();

    return () => {
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="background-ink three" ref={mountRef} aria-hidden="true" />;
}
