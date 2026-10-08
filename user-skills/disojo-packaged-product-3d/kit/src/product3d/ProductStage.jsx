import { useEffect, useRef, useState } from 'react';

function hasWebGL() {
  try { const c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); } catch { return false; }
}

// <ProductStage shape="can" label="/labels/mango.png" rotation={1.2} tilt={0.1} lift={0} content="#e8a21a" fallback="/img/can.png" />
// The host page drives rotation/tilt/lift (scroll, hover, pointer) and swaps `label` (the product spins once while the art changes).
// No WebGL -> the fallback image. The three.js chunk is loaded lazily so it never blocks first paint.
export default function ProductStage({ shape = 'can', label, rotation = 0.5, tilt = 0, lift = 0, scale = 1, content, fallback, className = '', onReady, ariaLabel }) {
  const canvas = useRef(null);
  const api = useRef(null);
  const [mode, setMode] = useState('webgl');
  const first = useRef(true);

  useEffect(() => {
    if (!hasWebGL()) { setMode('still'); return undefined; }
    let dead = false; let ro;
    import('./stage').then(({ createStage }) => {
      if (dead) return;
      const low = innerWidth < 820 || (navigator.hardwareConcurrency || 8) <= 4;
      const s = createStage(canvas.current, { shape, low, content });
      api.current = s;
      ro = new ResizeObserver(() => s.resize(canvas.current.clientWidth, canvas.current.clientHeight)); ro.observe(canvas.current);
      s.resize(canvas.current.clientWidth, canvas.current.clientHeight);
      s.set({ ry: rotation, rx: tilt, lift, scale });
      if (label) s.setLabel(label, { animate: false }).then(() => { s.renderNow(); onReady?.(); }); else onReady?.();
    }).catch(() => setMode('still'));
    return () => { dead = true; ro?.disconnect(); api.current?.dispose(); api.current = null; };
  }, [shape]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { api.current?.set({ ry: rotation, rx: tilt, lift, scale }); }, [rotation, tilt, lift, scale]);
  useEffect(() => { if (!api.current || !label) return; api.current.setLabel(label, { animate: !first.current }); first.current = false; }, [label]);
  useEffect(() => { if (content) api.current?.setContent(content); }, [content]);

  return mode === 'webgl'
    ? <canvas ref={canvas} className={className} role="img" aria-label={ariaLabel || `${shape} product`} style={{ width: '100%', height: '100%', display: 'block' }} />
    : <img className={className} src={fallback} alt={ariaLabel || `${shape} product`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />;
}
