import { useMemo, useEffect } from 'react';
import { LatheGeometry, Vector2, CylinderGeometry, AdditiveBlending, DoubleSide, BackSide } from 'three';

// Local units, bottle ~4.2 tall x 1.0 wide (about 4.2:1 as in the supplied photos).
// y: base -2.1, glass top 0.8, cap 0.78..2.1. Glass is a closed thick-walled shell.
const GLASS = [
  [0, -2.1], [0.34, -2.1], [0.46, -2.06], [0.5, -1.95], [0.5, 0.7], [0.47, 0.78], [0.4, 0.82],
  [0.38, 0.8], [0.44, 0.72], [0.44, -1.8], [0.4, -1.86], [0.28, -1.88], [0, -1.88],
];
// Outer skin only: the reflection layer must not light up the inner wall.
const OUTER = [[0, -2.1], [0.34, -2.1], [0.46, -2.06], [0.5, -1.95], [0.5, 0.7], [0.47, 0.78], [0.4, 0.82]];
const OIL = [[0, -1.86], [0.4, -1.84], [0.43, -1.78], [0.43, 0.68], [0, 0.68]];
const CAP = [[0, 0.78], [0.46, 0.78], [0.47, 0.84], [0.47, 2.02], [0.44, 2.08], [0.36, 2.1], [0, 2.1]];
const LABEL_R = 0.515;
const LABEL_H = 2.5;
const LABEL_Y = -0.64;

const lathe = (pts, seg) => new LatheGeometry(pts.map(([x, y]) => new Vector2(x, y)), seg);

export default function Bottle({ groupRef, labelMatRef, oilMatRef, initialLabel, oilColor, quality = 'high' }) {
  const seg = quality === 'high' ? 96 : 48;
  const geo = useMemo(
    () => ({
      glass: lathe(GLASS, seg),
      outer: lathe(OUTER, seg),
      oil: lathe(OIL, seg),
      cap: lathe(CAP, seg),
      label: new CylinderGeometry(LABEL_R, LABEL_R, LABEL_H, seg, 1, true, -Math.PI, Math.PI * 2),
      ring: new CylinderGeometry(0.485, 0.485, 0.045, seg),
    }),
    [seg],
  );
  useEffect(() => () => Object.values(geo).forEach((g) => g.dispose()), [geo]);

  return (
    <group ref={groupRef}>
      <mesh geometry={geo.label} position={[0, LABEL_Y, 0]}>
        <meshStandardMaterial
          ref={labelMatRef}
          map={initialLabel}
          bumpMap={initialLabel}
          bumpScale={1.4}
          roughness={0.9}
          side={DoubleSide}
        />
      </mesh>
      <mesh geometry={geo.oil} renderOrder={1}>
        <meshPhysicalMaterial ref={oilMatRef} color={oilColor} transparent opacity={0.26} roughness={0.1} depthWrite={false} />
      </mesh>
      <mesh geometry={geo.glass} renderOrder={2}>
        <meshPhysicalMaterial color="#dfeaee" transparent opacity={0.14} roughness={0.02} side={BackSide} depthWrite={false} />
      </mesh>
      <mesh geometry={geo.outer} renderOrder={3}>
        <meshStandardMaterial
          color="#7d8890"
          metalness={1}
          roughness={0.3}
          envMapIntensity={0.6}
          transparent
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh geometry={geo.ring} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#c9ccd0" metalness={1} roughness={0.25} />
      </mesh>
      <mesh geometry={geo.cap}>
        <meshPhysicalMaterial color="#09090b" roughness={0.2} clearcoat={1} clearcoatRoughness={0.04} envMapIntensity={1.7} />
      </mesh>
    </group>
  );
}
