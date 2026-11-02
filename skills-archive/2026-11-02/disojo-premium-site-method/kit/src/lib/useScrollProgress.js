import { useEffect } from 'react';

// Calls onProgress(p, rect) with p = 0..1 across a pinned section (height - one viewport), on scroll/resize, only while near the viewport.
export default function useScrollProgress(ref, onProgress, deps = []) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let raf = 0;
    const run = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      if (r.bottom < -innerHeight || r.top > innerHeight * 2) return;
      const total = r.height - innerHeight;
      onProgress(total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0, r);
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(run); };
    run();
    addEventListener('scroll', kick, { passive: true });
    addEventListener('resize', kick);
    return () => { cancelAnimationFrame(raf); removeEventListener('scroll', kick); removeEventListener('resize', kick); };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
