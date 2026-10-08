const W = 3.6;
const H = 2.4;
const PAPER = '#F6F1E7';

function Face({ art, artRef, stamp, stampRef, flip }) {
  return (
    <group rotation={[0, flip ? Math.PI : 0, 0]}>
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[W + 0.2, H + 0.2]} />
        <meshBasicMaterial color={PAPER} toneMapped={false} />
      </mesh>
      <mesh position={[0, 0, 0.004]}>
        <planeGeometry args={[W, H]} />
        <meshBasicMaterial ref={artRef} map={art} toneMapped={false} />
      </mesh>
      {stamp && (
        <mesh ref={stampRef} position={[W / 2 - 0.5, H / 2 - 0.45, 0.01]} rotation={[0, 0, -0.2]}>
          <planeGeometry args={[0.95, 0.95]} />
          <meshBasicMaterial map={stamp} transparent depthWrite={false} toneMapped={false} />
        </mesh>
      )}
    </group>
  );
}

// Two-sided card. Front shows scent a, back shows scent b; the rig rotates the
// pivot by PI during a transition and the stateless frame logic swaps them after.
export default function Postcard({ pivotRef, frontArt, backArt, frontArtRef, backArtRef, frontStamp, stampRef }) {
  return (
    <group ref={pivotRef}>
      <Face art={frontArt} artRef={frontArtRef} stamp={frontStamp} stampRef={stampRef} />
      <Face art={backArt} artRef={backArtRef} flip />
    </group>
  );
}
