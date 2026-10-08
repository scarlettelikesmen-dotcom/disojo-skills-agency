import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

export const reducedQuery = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)');
export const prefersReduced = () => !!reducedQuery()?.matches;

export function useReduced() {
  return useSyncExternalStore(
    (cb) => { const q = reducedQuery(); q?.addEventListener('change', cb); return () => q?.removeEventListener('change', cb); },
    () => prefersReduced(),
    () => false,
  );
}

// Adds `.in` once the element is on screen. One observer per element, released after it fires.
export function useInView(opts = { rootMargin: '0px 0px -12% 0px', threshold: 0.01 }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return undefined;
    if (prefersReduced() || !('IntersectionObserver' in window)) { setSeen(true); return undefined; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, opts);
    io.observe(el);
    return () => io.disconnect();
  }, [seen]); // eslint-disable-line react-hooks/exhaustive-deps
  return [ref, seen];
}

// True while the element is within the viewport (used to pause looping animation off-screen).
export function useOnScreen(margin = '120px') {
  const ref = useRef(null);
  const [on, setOn] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { rootMargin: margin });
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);
  return [ref, on];
}
