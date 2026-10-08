import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { BUILDERS, HEIGHT, SPECS } from './shapes';
import { createMaterials } from './materials';

const WIDTH = { can: 0.66, jar: 1.06, bottle: 0.72, box: 0.9 };
const loader = new THREE.TextureLoader();
const cache = new Map();
export function loadLabel(src, renderer) {
  if (cache.has(src)) return cache.get(src);
  const p = new Promise((res, rej) => loader.load(src, (t) => {
    t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    t.offset.x = 0.5; // u = 0 is the front of the object: put the middle of the artwork there
    res(t);
  }, undefined, rej));
  cache.set(src, p); return p;
}

// Runtime for one product: renderer, light, camera, template shape, label swap. The host page decides rotation/tilt/label.
// Rendering is on demand (no idle loop): every setter marks the scene dirty and schedules one frame.
export function createStage(canvas, { shape = 'can', low = false, content, metal } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !low, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1.5 : 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.82;
  renderer.shadowMap.enabled = !low;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture; scene.environmentIntensity = 0.55;
  const key = new THREE.DirectionalLight('#ffffff', 1.5); key.position.set(-3, 5, 4); key.castShadow = !low; key.shadow.mapSize.set(1024, 1024); key.shadow.bias = -0.0005;
  Object.assign(key.shadow.camera, { left: -2, right: 2, top: 3, bottom: -1, near: 1, far: 14 });
  const rim = new THREE.DirectionalLight('#dfe8ff', 1.1); rim.position.set(4, 3, -3);
  scene.add(key, rim);

  const mats = createMaterials({ low, content, metal });
  const product = BUILDERS[shape](mats);
  const pivot = new THREE.Group(); pivot.add(product); scene.add(pivot);
  const h = HEIGHT[shape]; product.position.y = -h / 2; // pivot at the object's centre so tilt looks right

  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 2.2), new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, opacity: 0.3,
    map: (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'); const r = g.createRadialGradient(64, 64, 4, 64, 64, 62); r.addColorStop(0, 'rgba(0,0,0,0.9)'); r.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = r; g.fillRect(0, 0, 128, 128); return new THREE.CanvasTexture(c); })() }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = -h / 2 - 0.02; scene.add(shadow);

  const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 50);
  const st = { w: 1, h: 1, ry: 0.5, rx: 0, rz: 0, lift: 0, scale: 1, raf: 0, fit: 1, spin: null, dead: false };

  function frame(now) {
    st.raf = 0;
    if (st.spin) { // label swap: spin once, swap the artwork at the halfway point
      const t = Math.min(1, (now - st.spin.t0) / st.spin.ms); const e = t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) / 2;
      st.spin.angle = st.spin.from + e * Math.PI * 2;
      if (!st.spin.swapped && t >= 0.5) { st.spin.swapped = true; st.spin.apply(); }
      if (t >= 1) { st.ry = st.spin.from; st.spin = null; } else st.raf = requestAnimationFrame(frame);
    }
    pivot.rotation.set(st.rx, st.spin ? st.spin.angle : st.ry, st.rz);
    pivot.position.y = st.lift; pivot.scale.setScalar(st.scale);
    shadow.position.y = -h / 2 - 0.02 + Math.min(0, st.lift * 0.3);
    shadow.material.opacity = 0.35 * Math.max(0.15, 1 - Math.abs(st.lift) * 0.8);
    const aspect = st.w / st.h; const tan = Math.tan(THREE.MathUtils.degToRad(13));
    const dist = Math.max((h * 0.7) / tan, (WIDTH[shape] * 0.7) / (tan * aspect)) * st.fit; // fit height AND width
    camera.position.set(0, 0.25, dist); camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }
  const dirty = () => { if (!st.raf && !st.dead) st.raf = requestAnimationFrame(frame); };

  function applyTexture(tex, which) {
    if (shape === 'box') { mats.boxFaces[which].map = tex; mats.boxFaces[which].needsUpdate = true; } else { mats.label.map = tex; mats.label.needsUpdate = true; }
  }
  return {
    ready: Promise.resolve(),
    // src: one URL (cylinders) or { right, left, top, bottom, front, back } (box)
    async setLabel(src, { animate = true } = {}) {
      const tex = typeof src === 'string' ? await loadLabel(src, renderer) : null;
      const faces = typeof src === 'object' ? await Promise.all(['right', 'left', 'top', 'bottom', 'front', 'back'].map((k) => (src[k] ? loadLabel(src[k], renderer) : null))) : null;
      const apply = () => { if (tex) applyTexture(tex); else faces.forEach((t, i) => t && applyTexture(t, i)); dirty(); };
      if (!animate || !(mats.label.map || mats.boxFaces[4].map) || matchMedia('(prefers-reduced-motion: reduce)').matches) { apply(); return; }
      st.spin = { from: st.ry, angle: st.ry, t0: performance.now(), ms: 900, swapped: false, apply }; dirty();
    },
    setContent(color) { mats.content.color.set(color); dirty(); },
    set(v) { Object.assign(st, v); dirty(); },
    resize(w, hh) { st.w = w; st.h = hh; renderer.setSize(w, hh, false); camera.aspect = w / hh; camera.updateProjectionMatrix(); dirty(); },
    renderNow() { frame(performance.now()); },
    canvas,
    dispose() {
      st.dead = true; cancelAnimationFrame(st.raf);
      scene.traverse((o) => { o.geometry?.dispose?.(); [].concat(o.material || []).forEach((m) => { m.map?.dispose?.(); m.dispose?.(); }); });
      scene.environment?.dispose(); pmrem.dispose(); renderer.dispose();
    },
  };
}
export { SPECS };
