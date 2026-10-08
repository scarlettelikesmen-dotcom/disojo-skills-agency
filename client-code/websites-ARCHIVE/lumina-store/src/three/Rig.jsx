import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import { Color, MathUtils } from 'three';
import { radialTexture, shadowTexture } from './softTextures';
import Bottle from './Bottle';
import Postcard from './Postcard';
import { journey, stage, stampProgress } from './journey';
import { setLoad } from './loadStore';
import { LOOK } from './scentLook';

const CAM_Z = 8.8;
const FOV = 32;
const TAU = Math.PI * 2;
const bg = new Color();
const bgB = new Color();
const easeOut = (x) => 1 - (1 - x) * (1 - x) * (1 - x);

export default function Rig({ scents, labels, arts, stamps, pointer, quality, reduced }) {
  const root = useRef();
  const bottle = useRef();
  const labelMat = useRef();
  const pivot = useRef();
  const stampMesh = useRef();
  const frontArt = useRef();
  const backArt = useRef();
  const lastLabel = useRef(0);
  const lastFront = useRef(-1);
  const lastBack = useRef(-1);
  const drawn = useRef(false);
  const { scene } = useThree();
  const oilMat = useRef();
  const soft = useMemo(() => ({ glow: radialTexture(), shadow: shadowTexture() }), []);

  useFrame((state, dt) => {
    try {
    // journey.p drives every index below; if it's ever NaN/out of range, clamp it here
    // so the scene keeps rendering instead of throwing and freezing the whole frame loop.
    const lastIdx = scents.length - 1;
    const safeP = Number.isFinite(journey.p) ? Math.min(lastIdx, Math.max(0, journey.p)) : 0;
    const { a: rawA, b: rawB, t, dwell: rawDwell } = stage(safeP, reduced);
    const a = Math.min(lastIdx, Math.max(0, rawA));
    const b = Math.min(lastIdx, Math.max(0, rawB));
    const dwell = Math.min(lastIdx, Math.max(0, rawDwell));

    // layout: bottle on the right on landscape, up top on portrait
    const aspect = state.size.width / state.size.height;
    const wide = aspect > 1;
    const visW = 2 * CAM_Z * Math.tan(MathUtils.degToRad(FOV / 2)) * aspect;
    const s = wide ? 1 : MathUtils.clamp(aspect * 1.1, 0.46, 0.8);
    root.current.position.set(wide ? visW * 0.2 : 0, wide ? -0.35 : 2.2 - 2.1 * s * 0.78 - 0.7, 0);
    root.current.scale.setScalar(wide ? 0.84 : s * 0.78);
    const face = -Math.atan2(root.current.position.x, CAM_Z); // turn towards the camera

    // bottle: full turn across the flip, label swapped while its back faces the camera
    const spin = reduced ? 0 : t * TAU;
    const sway = reduced ? 0 : pointer.current.x * 0.45;
    const g = bottle.current;
    g.rotation.y += (face + spin + sway - g.rotation.y) * (1 - Math.exp(-dt * (t > 0 ? 30 : 5)));
    g.rotation.x += (-pointer.current.y * 0.15 - g.rotation.x) * (1 - Math.exp(-dt * 5));
    g.position.y = reduced || quality !== 'high' ? 0 : Math.sin(state.clock.elapsedTime * 0.9) * 0.05;
    const want = t < 0.5 ? a : b;
    if (want !== lastLabel.current) {
      lastLabel.current = want;
      labelMat.current.map = labels[want];
      labelMat.current.bumpMap = labels[want];
      oilMat.current.color.set(LOOK[scents[want].id].oil);
      labelMat.current.needsUpdate = true;
    }

    // postcard flip + stamp landing
    const p = pivot.current;
    p.rotation.y = t * Math.PI;
    p.rotation.z = -0.08;
    p.position.set(wide ? 0.25 : 0, 0.3, -1.5);
    p.scale.setScalar(wide ? 1 : 0.62);
    if (a !== lastFront.current) {
      lastFront.current = a;
      stampMesh.current.material.map = stamps[a];
      frontArt.current.map = arts[a];
    }
    if (b !== lastBack.current) {
      lastBack.current = b;
      backArt.current.map = arts[b];
    }
    const sp = t > 0 ? 1 : easeOut(stampProgress(safeP, dwell));
    const st = stampMesh.current;
    st.visible = sp > 0.01;
    st.scale.setScalar(1.7 - 0.7 * sp);
    st.material.opacity = sp;

    // scene colour tracks the scent
    bg.set(scents[a].gradientFrom);
    bgB.set(scents[b].gradientFrom);
    scene.background = scene.background || new Color();
    scene.background.copy(bg).lerp(bgB, t);

    // On phones render on demand: keep drawing only while something is still moving.
    const settling =
      Math.abs(journey.target - journey.p) > 0.0005 ||
      t > 0 ||
      Math.abs(face + spin + sway - g.rotation.y) > 0.002 ||
      Math.abs(-pointer.current.y * 0.15 - g.rotation.x) > 0.002;
    if (settling || !drawn.current) state.invalidate();

    if (!drawn.current) {
      drawn.current = true;
      setLoad({ progress: 1, ready: true });
    }
    } catch (err) {
      // Never let a single bad frame kill the Three.js render loop — surface it in dev
      // and keep going, instead of freezing the whole scene on the next frame forever.
      if (import.meta.env.DEV) console.error('Rig useFrame error:', err);
    }
  });

  return (
    <group ref={root}>
      <mesh position={[0.2, 0.1, -3]} scale={13}>
        <planeGeometry />
        <meshBasicMaterial map={soft.glow} transparent opacity={0.45} depthWrite={false} toneMapped={false} />
      </mesh>
      <Postcard
        pivotRef={pivot}
        frontArt={arts[0]}
        backArt={arts[1]}
        frontArtRef={frontArt}
        backArtRef={backArt}
        frontStamp={stamps[0]}
        stampRef={stampMesh}
      />
      <mesh position={[0.45, -0.25, -0.7]} scale={[1.6, 4.6, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={soft.shadow} transparent opacity={0.4} depthWrite={false} toneMapped={false} />
      </mesh>
      <Bottle groupRef={bottle} labelMatRef={labelMat} oilMatRef={oilMat} oilColor={LOOK[scents[0].id].oil} initialLabel={labels[0]} quality={quality} />
    </group>
  );
}
