import { useEffect, useRef, useState } from 'react';
import useInView from './useInView';

// Counts up to `to` when scrolled into view. <Counter to={97} suffix="%" /> . Uses real numbers only: never animate a made-up stat.
export default function Counter({ to, from = 0, suffix = '', prefix = '', duration = 1600, decimals = 0 }) {
  const ref = useRef(null);
  const seen = useInView(ref);
  const [v, setV] = useState(from);
  useEffect(() => {
    if (!seen) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setV(to); return undefined; }
    let raf; const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const e = 1 - (1 - p) ** 3; // ease-out cubic
      setV(from + (to - from) * e);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, from, duration]);
  return <span ref={ref} className="fx-counter">{prefix}{v.toFixed(decimals)}{suffix}</span>;
}
