import { useEffect, useRef, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { TextureLoader, LoadingManager, SRGBColorSpace } from 'three';
import Studio from './Studio';
import { setLoad } from './loadStore';
import Rig from './Rig';
import { drawLabel, loadLabelFonts } from './labelTexture';
import { drawStamp } from './stampTexture';
import { LOOK } from './scentLook';
import { products } from '../data/products';

const ART = products.map((p) => `/postcards/${p.name.toLowerCase().replace(/ /g, '-')}.jpg`);

// With frameloop="demand" (phones) any scroll or pointer move wakes the renderer.
function Wake() {
  const invalidate = useThree((s) => s.invalidate);
  useEffect(() => {
    window.addEventListener('scroll', invalidate, { passive: true });
    window.addEventListener('pointermove', invalidate, { passive: true });
    window.addEventListener('resize', invalidate);
    return () => {
      window.removeEventListener('scroll', invalidate);
      window.removeEventListener('pointermove', invalidate);
      window.removeEventListener('resize', invalidate);
    };
  }, [invalidate]);
  return null;
}

function Loaded({ quality, reduced, pointer, onReady }) {
  const [arts, setArts] = useState(null);
  const [made, setMade] = useState(null);

  // Real events only: chunk executed (30%), postcards loading (up to 80%), first frame drawn (100%).
  useEffect(() => {
    let live = true;
    setLoad({ progress: 0.3 });
    const manager = new LoadingManager();
    manager.onProgress = (_u, done, total) => setLoad({ progress: 0.3 + 0.5 * (done / total) });
    const loader = new TextureLoader(manager);
    Promise.all(ART.map((u) => loader.loadAsync(u).then((t) => { t.colorSpace = SRGBColorSpace; return t; }))).then(
      (t) => live && setArts(t),
    );
    return () => { live = false; };
  }, []);

  useEffect(() => {
    let live = true;
    let built;
    loadLabelFonts().then(() => {
      if (!live) return;
      const scale = quality === 'high' ? 1 : 0.5;
      built = {
        labels: products.map((p) => drawLabel(p, LOOK[p.id], scale)),
        stamps: products.map((p) => drawStamp(p.number, p.inspiredBy, LOOK[p.id].stamp)),
      };
      setMade(built);
      onReady?.();
    });
    return () => {
      live = false;
      built?.labels.forEach((t) => t.dispose());
      built?.stamps.forEach((t) => t.dispose());
    };
  }, [quality, onReady]);

  if (!made || !arts) return null;
  return (
    <Rig
      scents={products}
      labels={made.labels}
      arts={arts}
      stamps={made.stamps}
      pointer={pointer}
      quality={quality}
      reduced={reduced}
    />
  );
}

export default function Scene({ quality = 'high', reduced = false, active = true, onReady }) {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <Canvas
      frameloop={!active ? 'never' : quality === 'high' ? 'always' : 'demand'}
      dpr={quality === 'high' ? [1, 2] : [1, 1.5]}
      camera={{ position: [0, 0, 8.8], fov: 32 }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={[products[0].gradientFrom]} />
      <Wake />
      <Studio size={quality === 'high' ? 256 : 64} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 5, 4]} intensity={1.1} />
      <Loaded quality={quality} reduced={reduced} pointer={pointer} onReady={onReady} />
    </Canvas>
  );
}
