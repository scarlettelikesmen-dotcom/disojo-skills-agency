import React, { useLayoutEffect, useMemo } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { ThreeCanvas } from "@remotion/three";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { SP, clamp, sp } from "./theme";

/* One set of nine modules that re-forms for every idea. Formations are pure functions of time. */
type B = { p: number[]; r: number[]; s: number[] };
type Cam = { pos: number[]; look: number[] };
type Form = { blocks: B[]; cam: Cam };
const CREAM_I = 4;

const messy: B[] = [
  { p: [-2.1, 0.23, 0.4], r: [0, 0.6, 0.1], s: [1.3, 1, 1] },
  { p: [-0.5, 0.23, -0.9], r: [0, -0.35, 0], s: [1.0, 1, 1] },
  { p: [1.4, 0.23, 0.7], r: [0, 1.2, 0], s: [1.5, 1, 1] },
  { p: [2.3, 0.23, -0.6], r: [0, -0.8, 0], s: [0.9, 1, 1] },
  { p: [-0.9, 0.74, 0.0], r: [0.15, 0.9, 0.28], s: [1.2, 1, 1] },
  { p: [0.7, 0.8, -0.2], r: [-0.1, -0.5, -0.3], s: [1.1, 1, 1] },
  { p: [-2.4, 0.23, -1.3], r: [0, 0.2, 0], s: [1.0, 1, 1] },
  { p: [0.2, 0.23, 1.6], r: [0, -1.1, 0], s: [1.4, 1, 1] },
  { p: [1.8, 0.78, 0.1], r: [0.2, 0.3, 0.45], s: [1.0, 1, 1] },
];
const cleanForm = (): Form => {
  const order = [0, 1, 2, 3, 8, 5, 6, 7, 4]; // index 4 (cream) ends at the centre of the wall
  const blocks: B[] = new Array(9);
  order.forEach((bi, k) => { const col = k % 3, row = Math.floor(k / 3); blocks[bi] = { p: [(col - 1) * 1.38, 0.23 + row * 0.52, 0], r: [0, 0, 0], s: [1, 1, 1] }; });
  // put cream in the true centre (col1,row1 => k=4)
  const c = blocks[CREAM_I], mid = blocks[order[4]]; blocks[CREAM_I] = mid; blocks[order[4]] = c;
  return { blocks, cam: { pos: [2.6, 2.6, 8.8], look: [0, 0.9, 0] } };
};
const balanceForm = (tl: number): Form => {
  const a = clamp(sp(Math.round(tl * 30), 30, 0.15, { damping: 9, stiffness: 70, mass: 1.2 }), 0, 1.2);
  const ang = 0.12 - 0.34 * a; // starts leaning to the money side, settles tipped toward the business side
  const pv = [0, 1.95, 0];
  const rot = (lx: number, ly: number) => [pv[0] + Math.cos(ang) * lx - Math.sin(ang) * ly, pv[1] + Math.sin(ang) * lx + Math.cos(ang) * ly, 0];
  const onBeam = (lx: number, k: number, s: number[] = [0.9, 1, 1]): B => ({ p: rot(lx, 0.1 + 0.23 + k * 0.5), r: [0, 0, ang], s });
  const blocks: B[] = [
    { p: [pv[0], pv[1], 0], r: [0, 0, ang], s: [3.4, 0.4, 1] },                          // 0 beam
    { p: [0, 0.95, 0], r: [0, 0, Math.PI / 2], s: [1.3, 1, 1] },                           // 1 pillar
    onBeam(-1.55, 0), onBeam(-1.55, 1),                                                    // 2,3 money
    onBeam(1.55, 3),                                                                       // 4 cream: top of the business stack
    onBeam(1.55, 0), onBeam(1.55, 1), onBeam(1.55, 2),                                     // 5,6,7 business
    { p: [0, 0.14, 0], r: [0, 0, 0], s: [1.7, 0.55, 1.3] },                                // 8 base
  ];
  return { blocks, cam: { pos: [0, 2.6, 9.6], look: [0, 1.55, 0] } };
};
const loopForm = (tl: number): Form => {
  const blocks: B[] = []; const R = 2.0;
  for (let i = 0; i < 9; i++) { const th = (i / 9) * Math.PI * 2 + tl * 0.8; const c = i === CREAM_I; blocks.push({ p: [R * Math.cos(th), 0.23 + (c ? 0.18 : 0), R * Math.sin(th)], r: [0, -th, 0], s: [0.78, 1, 1] }); }
  return { blocks, cam: { pos: [0, 5.6, 7.2], look: [0, 0.2, 0] } };
};
const riseForm = (): Form => {
  const order = [0, 1, 2, 3, 8, 5, 6, 7, 4]; // cream takes the top step
  const blocks: B[] = new Array(9);
  order.forEach((bi, i) => { blocks[bi] = { p: [-3.0 + i * 0.78, 0.23 + i * 0.4, 0], r: [0, 0, 0], s: [0.6, 1, 1] }; });
  return { blocks, cam: { pos: [3.4, 2.9, 9.4], look: [0.2, 1.8, 0] } };
};
const hookForm = (): Form => ({ blocks: messy, cam: { pos: [0, 5.4, 8.6], look: [0, 0.5, 0] } });

const FORMS: Record<string, (tl: number) => Form> = { hook: hookForm, clean: cleanForm, balance: balanceForm, loop: loopForm, rise: riseForm };
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const mix = (A: number[], B: number[], t: number) => A.map((v, i) => lerp(v, B[i], t));

export const formationAt = (panels: any[], t: number): Form => {
  let idx = 0; panels.forEach((p, i) => { if (t >= p.t0 - 1e-6) idx = i; });
  const p = panels[idx]; const f = FORMS[p.type]; const tl = Math.max(0, t - p.t0);
  const cur = f(tl);
  if (idx === 0) return cur;
  const prev = panels[idx - 1]; const prevEnd = FORMS[prev.type](prev.t1 - prev.t0);
  const frame = Math.round(t * 30);
  const a = clamp(sp(frame, 30, p.t0 - 0.05, { damping: 18, stiffness: 110, mass: 1 }), 0, 1.04);
  return { blocks: cur.blocks.map((b, i) => ({ p: mix(prevEnd.blocks[i].p, b.p, a), r: mix(prevEnd.blocks[i].r, b.r, a), s: mix(prevEnd.blocks[i].s, b.s, a) })), cam: { pos: mix(prevEnd.cam.pos, cur.cam.pos, a), look: mix(prevEnd.cam.look, cur.cam.look, a) } };
};

const Env: React.FC = () => {
  const { gl, scene } = useThree();
  useLayoutEffect(() => {
    const pm = new THREE.PMREMGenerator(gl);
    const env = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = env; scene.environmentIntensity = 0.55;
    return () => { env.dispose(); pm.dispose(); };
  }, [gl, scene]);
  return null;
};

const Rig: React.FC<{ cam: Cam }> = ({ cam }) => {
  const { camera } = useThree();
  useLayoutEffect(() => {
    const k = 1.5; // pull back so the formation sits as a compact object in the lower half
    camera.position.set(cam.look[0] + (cam.pos[0] - cam.look[0]) * k, cam.look[1] + (cam.pos[1] - cam.look[1]) * k, cam.look[2] + (cam.pos[2] - cam.look[2]) * k);
    camera.lookAt(cam.look[0], cam.look[1], cam.look[2]);
    (camera as THREE.PerspectiveCamera).setViewOffset(1080, 880, 0, -240, 1080, 880); // shift the scene down toward the seam
    camera.updateProjectionMatrix();
  });
  return null;
};

export const Stage: React.FC<{ panels: any[]; theme: "dark" | "light" }> = ({ panels, theme }) => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig(); const t = frame / fps;
  const f = formationAt(panels, t);
  const geo = useMemo(() => new RoundedBoxGeometry(1.2, 0.46, 0.9, 6, 0.09), []);
  const light = theme === "light";
  const inkMat = useMemo(() => new THREE.MeshPhysicalMaterial({ color: light ? "#17171a" : "#34332e", roughness: 0.26, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.16 }), [light]);
  const creamMat = useMemo(() => new THREE.MeshPhysicalMaterial({ color: "#E8DFD5", roughness: 0.55, metalness: 0, clearcoat: 0.2 }), []);
  return (
    <ThreeCanvas width={1080} height={880} shadows gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: light ? 1.05 : 1.0 }} camera={{ fov: 30, near: 0.1, far: 60, position: [0, 4, 9] }}>
      <Env /><Rig cam={f.cam} />
      <directionalLight position={[-4, 8, 5]} intensity={light ? 2.4 : 1.8} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} shadow-camera-left={-7} shadow-camera-right={7} shadow-camera-top={7} shadow-camera-bottom={-7} shadow-radius={7} shadow-bias={-0.0005} />
      <directionalLight position={[5, 3, -6]} intensity={light ? 0.5 : 2.2} color={"#E8DFD5"} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} /><shadowMaterial opacity={light ? 0.28 : 0.55} />
      </mesh>
      {f.blocks.map((b, i) => (
        <mesh key={i} geometry={geo} material={i === CREAM_I ? creamMat : inkMat} position={b.p as any} rotation={b.r as any} scale={b.s as any} castShadow receiveShadow />
      ))}
    </ThreeCanvas>
  );
};
