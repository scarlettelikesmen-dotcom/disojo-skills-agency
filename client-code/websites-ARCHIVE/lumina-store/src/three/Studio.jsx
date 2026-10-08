import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Scene, Color, Mesh, PlaneGeometry, MeshBasicMaterial, PMREMGenerator, DoubleSide } from 'three';

// Soft-box studio built from glowing rectangles, baked once into an environment map.
// [width, height, x, y, z, intensity, colour]
// Warmed slightly from the original rig: the left fill was a cool blue-white
// (#f2f6ff) that fought the cream/editorial palette; everything here now sits
// in the same warm-neutral family so the bottle's glass and metal pick up a
// consistent golden-hour cast instead of a mixed warm/cool split.
const BOXES = [
  [10, 12, -3, 3, 6, 0.8, '#fff6e8'],
  [1.4, 10, 5, 0, -1.6, 3, '#fffaf2'],
  [1.2, 10, -5, 0, -1.6, 2.4, '#fff3e4'],
  [9, 3, 0, 6, 0, 2, '#fffaf2'],
  [9, 2, 0, -5, 2, 1, '#ffe9cf'],
];

export default function Studio({ size = 256 }) {
  const gl = useThree((s) => s.gl);
  const scene = useThree((s) => s.scene);

  useEffect(() => {
    const env = new Scene();
    env.background = new Color('#000000');
    const geos = [];
    const mats = [];
    BOXES.forEach(([w, h, x, y, z, k, c]) => {
      const g = new PlaneGeometry(w, h);
      const m = new MeshBasicMaterial({ color: new Color(c).multiplyScalar(k), side: DoubleSide, toneMapped: false });
      const mesh = new Mesh(g, m);
      mesh.position.set(x, y, z);
      mesh.lookAt(0, 0, 0);
      env.add(mesh);
      geos.push(g);
      mats.push(m);
    });
    const pmrem = new PMREMGenerator(gl);
    const target = pmrem.fromScene(env, 0.02, 0.1, 100, { size });
    scene.environment = target.texture;
    geos.forEach((g) => g.dispose());
    mats.forEach((m) => m.dispose());
    pmrem.dispose();
    return () => {
      scene.environment = null;
      target.dispose();
    };
  }, [gl, scene, size]);

  return null;
}
