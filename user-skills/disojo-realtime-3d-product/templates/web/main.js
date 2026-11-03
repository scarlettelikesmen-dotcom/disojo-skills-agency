// VÆL ONE live 3D proof, v2: the bottle built from the client sheet, with Blender-baked colour, roughness, normal and
// ambient-occlusion maps, lit live by a studio HDRI plus one soft key, driven by scroll through five beats.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
RectAreaLightUniformsLib.init();

const q = new URLSearchParams(location.search);
const HDR = q.get('env') || 'studio_small_09';
const canvas = document.getElementById('gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.toneMapping = THREE.NeutralToneMapping; renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.VSMShadowMap;

const scene = new THREE.Scene();
// warm grey studio like the client sheet: lighter in the middle, falling off to the edges
scene.background = (() => {
  const c = document.createElement('canvas'); c.width = 512; c.height = 512; const g = c.getContext('2d');
  const r = g.createRadialGradient(256, 230, 20, 256, 256, 400); r.addColorStop(0, '#d6d3ce'); r.addColorStop(.55, '#bfbbb5'); r.addColorStop(1, '#a29e98');
  g.fillStyle = r; g.fillRect(0, 0, 512, 512); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
const camera = new THREE.PerspectiveCamera(22, 1, 0.01, 20);

// key: a big soft box from the left raking across the powder coat (shows the grain), plus a shadow caster
const soft = new THREE.RectAreaLight(0xfffaf3, 5.5, 0.5, 0.9); soft.position.set(-0.55, 0.32, 0.35); soft.lookAt(0, 0.13, 0); scene.add(soft);
const rim = new THREE.RectAreaLight(0xffffff, 2.4, 0.08, 0.6); rim.position.set(0.32, 0.2, -0.3); rim.lookAt(0, 0.14, 0); scene.add(rim);
const key = new THREE.DirectionalLight(0xffffff, 0.9); key.position.set(-0.6, 1.0, 0.45); key.castShadow = true;
key.shadow.mapSize.set(2048, 2048); Object.assign(key.shadow.camera, { left: -.25, right: .25, top: .25, bottom: -.25, near: .1, far: 3 }); key.shadow.radius = 14; key.shadow.blurSamples = 24; key.shadow.bias = -0.0002;
scene.add(key);
const floorMat = new THREE.ShadowMaterial({ opacity: 0.22 });
const floor = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), floorMat); floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
// contact darkening right under the base (the sheet's soft occlusion on the floor)
const contact = new THREE.Mesh(new THREE.CircleGeometry(0.06, 64), new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, opacity: 0.55, map: (() => {
  const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d'); const r = g.createRadialGradient(128, 128, 60, 128, 128, 128);
  r.addColorStop(0, 'rgba(40,36,32,.9)'); r.addColorStop(1, 'rgba(40,36,32,0)'); g.fillStyle = r; g.fillRect(0, 0, 256, 256); return new THREE.CanvasTexture(c); })() }));
contact.rotation.x = -Math.PI / 2; contact.position.y = 0.0004; scene.add(contact);

const tl = new THREE.TextureLoader(); const maxAniso = renderer.capabilities.getMaxAnisotropy();
const tex = (name, srgb) => { const t = tl.load(`/tex/v2/${name}.webp`); t.flipY = false; t.anisotropy = maxAniso; if (srgb) t.colorSpace = THREE.SRGBColorSpace; return t; };
const WAYS = ['Mineral', 'Carbon', 'Slate'];
const bodyCol = Object.fromEntries(WAYS.map(w => [w, tex(`body-color-${w.toLowerCase()}`, true)]));
const bodyRough = Object.fromEntries(WAYS.map(w => [w, tex(`body-rough-${w.toLowerCase()}`)]));
const B = { normal: tex('body-normal'), ao: tex('body-ao') };
const C = { map: tex('cap-color', true), roughnessMap: tex('cap-rough'), normalMap: tex('cap-normal'), aoMap: tex('cap-ao') };
const K = { map: tex('core-color', true), roughnessMap: tex('core-rough'), alphaMap: tex('core-alpha') };

const powder = new THREE.MeshPhysicalMaterial({ map: bodyCol.Mineral, roughnessMap: bodyRough.Mineral, normalMap: B.normal, aoMap: B.ao, roughness: 1, metalness: 0, sheen: 0.25, sheenRoughness: 0.8, sheenColor: new THREE.Color(0.9, 0.88, 0.85), normalScale: new THREE.Vector2(0.26, 0.26) });
const steel = new THREE.MeshPhysicalMaterial({ map: bodyCol.Mineral, roughnessMap: bodyRough.Mineral, roughness: 1, metalness: 1 });
const capM = new THREE.MeshPhysicalMaterial({ ...C, roughness: 1, metalness: 1 });
const coreM = new THREE.MeshPhysicalMaterial({ ...K, roughness: 1, metalness: 1, alphaTest: 0.5, side: THREE.DoubleSide });
const rubber = new THREE.MeshPhysicalMaterial({ color: 0x0b0b0b, roughness: 0.6 });

const parts = {}; const rig = new THREE.Group(); scene.add(rig);
const loader = new GLTFLoader().setDRACOLoader(new DRACOLoader().setDecoderPath('/draco/'));
Promise.all([loader.loadAsync('/model/vael-one-v2.glb'), new RGBELoader().loadAsync(`/env/${HDR}_2k.hdr`)]).then(([gltf, hdr]) => {
  hdr.mapping = THREE.EquirectangularReflectionMapping; scene.environment = hdr; scene.environmentIntensity = 0.5; scene.environmentRotation.y = 0.6;
  gltf.scene.traverse(o => {
    if (!o.isMesh) return; o.castShadow = true; o.receiveShadow = true;
    const n = o.material.name;
    o.material = /Powder/.test(n) ? powder : n === 'V2_SteelPolished' ? steel : /^V2_Cap/.test(n) ? capM : /^V2_Core/.test(n) ? coreM : rubber;
  });
  for (const n of ['V2_Body', 'V2_Cap', 'V2_Core', 'V2_ORing', 'V2_Seal']) { const o = gltf.scene.getObjectByName(n); parts[n] = { o, y: o.position.y, ry: o.rotation.y }; }
  rig.add(gltf.scene);
  window.__ready = true; frame();
});

// beats: camera, look-at, spin, part offsets (metres; bottle 0.275 m tall, base at y = 0)
const BEATS = [
  { cam: [0.0, 0.15, 1.0], at: [0.0, 0.137, 0], spin: -0.35, cap: 0, capR: 0, core: 0, x: 0.075, tilt: 0, lift: 0, env: 0.6 },
  { cam: [0.08, 0.36, 0.44], at: [0.0, 0.282, 0], spin: -0.1, cap: 0.045, capR: -1.2, core: 0, x: 0.03, tilt: 0, lift: 0, env: 1.4 },
  { cam: [-0.05, 0.32, 0.8], at: [0.0, 0.3, 0], spin: 0.35, cap: 0.13, capR: -2.0, core: 0.08, x: 0.04, tilt: 0, lift: 0, env: 2.1 },
  { cam: [0.05, 0.1, 0.72], at: [0.0, 0.11, 0], spin: 0.9, cap: 0, capR: 0, core: 0, x: 0.06, tilt: -0.7, lift: 0.07, env: 2.8 },
  { cam: [0.0, 0.15, 0.95], at: [0.0, 0.137, 0], spin: 2.2, cap: 0, capR: 0, core: 0, x: 0.0, tilt: 0, lift: 0, env: 3.6 },
];
const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const lerp = (a, b, t) => a + (b - a) * t;
const beatEls = [...document.querySelectorAll('.beat')]; const count = document.getElementById('count');
const sw = document.getElementById('sw'); const swEls = [...sw.children]; const cname = document.getElementById('cname'); const hint = document.getElementById('hint');
let target = 0, cur = 0, t0 = performance.now(), lastWay = -1;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const onScroll = () => { const m = document.documentElement.scrollHeight - innerHeight; target = m > 0 ? scrollY / m : 0; };
addEventListener('scroll', onScroll, { passive: true }); onScroll();
function resize() { renderer.setSize(innerWidth, innerHeight, false); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); }
addEventListener('resize', resize); resize();

// drag to spin the bottle a full 360 (horizontal drag; vertical touch still scrolls the page), with inertia
let spinU = 0, spinShown = 0, spinV = 0, drag = null;
canvas.style.touchAction = 'pan-y'; canvas.style.cursor = 'grab';
canvas.addEventListener('pointerdown', e => { drag = { x: e.clientX, t: performance.now() }; spinV = 0; canvas.setPointerCapture(e.pointerId); canvas.style.cursor = 'grabbing'; });
canvas.addEventListener('pointermove', e => {
  if (!drag) return;
  const now = performance.now(), d = (e.clientX - drag.x) / Math.min(innerWidth, 900) * Math.PI * 2;
  spinU += d; spinV = lerp(spinV, d / Math.max(0.008, (now - drag.t) / 1000), 0.5); drag.x = e.clientX; drag.t = now;
});
const endDrag = () => { if (!drag) return; if (performance.now() - drag.t > 80) spinV = 0; drag = null; canvas.style.cursor = 'grab'; };
canvas.addEventListener('pointerup', endDrag); canvas.addEventListener('pointercancel', endDrag);

const v = new THREE.Vector3(), a = new THREE.Vector3();
function frame() {
  requestAnimationFrame(frame);
  const now = performance.now(); const dt = Math.min(0.05, (now - t0) / 1000); t0 = now;
  cur += (target - cur) * (reduce ? 1 : 1 - Math.exp(-dt * 4.2));
  if (!drag) { spinU += spinV * dt; spinV *= Math.exp(-dt * 3); }
  spinShown += (spinU - spinShown) * (reduce ? 1 : 1 - Math.exp(-dt * 10));
  const f = cur * (BEATS.length - 1); const i = Math.min(BEATS.length - 2, Math.floor(f)); const local = f - i;
  const k = ease(Math.min(1, Math.max(0, (local - 0.15) / 0.7)));
  const A = BEATS[i], Bt = BEATS[i + 1]; const L = key => lerp(A[key], Bt[key], k);
  const narrow = innerWidth < 700;
  v.set(lerp(A.cam[0], Bt.cam[0], k), lerp(A.cam[1], Bt.cam[1], k), lerp(A.cam[2], Bt.cam[2], k)); if (narrow) v.multiplyScalar(1.5);
  a.set(lerp(A.at[0], Bt.at[0], k), lerp(A.at[1], Bt.at[1], k), lerp(A.at[2], Bt.at[2], k)); if (narrow) a.y += 0.035;
  camera.position.copy(v); camera.lookAt(a);
  rig.position.x = narrow ? 0 : L('x'); rig.position.y = L('lift');
  rig.rotation.y = L('spin') + spinShown + (reduce ? 0 : Math.sin(now / 3000) * 0.04); rig.rotation.x = L('tilt');
  const grounded = 1 - Math.min(1, L('lift') / 0.03); contact.material.opacity = 0.55 * grounded; floorMat.opacity = 0.22 * grounded; contact.position.x = rig.position.x;
  if (parts.V2_Cap) {
    parts.V2_Cap.o.position.y = parts.V2_Cap.y + L('cap'); parts.V2_Cap.o.rotation.y = parts.V2_Cap.ry + L('capR');
    parts.V2_Core.o.position.y = parts.V2_Core.y + L('core'); parts.V2_ORing.o.position.y = parts.V2_ORing.y + L('core');
  }
  scene.environmentRotation.y = L('env');
  beatEls.forEach((el, j) => { const d = Math.abs(f - j); el.style.opacity = Math.max(0, 1 - d * 2.6).toFixed(3); el.style.transform = narrow ? `translateY(${(f - j) * -24}px)` : `translateY(calc(-50% + ${(f - j) * -40}px))`; });
  count.textContent = `0${Math.min(5, Math.round(f) + 1)} / 05`;
  hint.style.opacity = Math.max(0, 1 - cur * 12).toFixed(2);
  const way = Math.min(2, Math.floor(Math.max(0, f - 3.55) / 0.45 * 3 * 0.999));
  sw.style.opacity = Math.max(0, 1 - Math.abs(f - 4) * 2.6).toFixed(3);
  if (way !== lastWay) { lastWay = way; const W = WAYS[way]; powder.map = bodyCol[W]; powder.roughnessMap = bodyRough[W]; powder.sheenColor.set(W === 'Mineral' ? 0xe6e1d9 : 0x3a3d40); powder.needsUpdate = true; cname.textContent = W; swEls.forEach((s, j) => s.classList.toggle('on', j === way)); }
  renderer.render(scene, camera);
}
