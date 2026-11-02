import { useEffect, useRef } from 'react';
import './fx.css';

// Generic pinned horizontal row: the section locks, vertical scroll slides `children` sideways, then it releases.
// Use for galleries (property photos), process steps, timelines. <PinnedRow title="Inside"><img/>...</PinnedRow>
// Each child becomes a column; give them a width via CSS (.fx-pinned-row > * { flex: 0 0 min(70vw, 560px) }).
export default function PinnedRow({ title, children, className = '' }) {
  const sec = useRef(null);
  const row = useRef(null);
  useEffect(() => {
    const s = sec.current; const r = row.current;
    if (!s || !r) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let max = 0; let raf = 0;
    const update = () => {
      raf = 0;
      if (reduce.matches) return;
      const travel = s.offsetHeight - innerHeight;
      const p = travel > 0 ? Math.min(1, Math.max(0, -s.getBoundingClientRect().top / travel)) : 0;
      r.style.transform = `translate3d(${-p * max}px,0,0)`;
    };
    const queue = () => { if (!raf) raf = requestAnimationFrame(update); };
    const measure = () => {
      if (reduce.matches) { s.style.height = ''; r.style.transform = ''; return; }
      max = Math.max(0, r.scrollWidth - r.clientWidth + parseFloat(getComputedStyle(r).paddingRight));
      s.style.height = `${innerHeight + max}px`;
      queue();
    };
    measure();
    addEventListener('scroll', queue, { passive: true });
    addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    const imgs = [...r.querySelectorAll('img')]; imgs.forEach((i) => i.addEventListener('load', measure));
    return () => { cancelAnimationFrame(raf); removeEventListener('scroll', queue); removeEventListener('resize', measure); imgs.forEach((i) => i.removeEventListener('load', measure)); };
  }, [children]);
  return (
    <section ref={sec} className={`fx-pinned ${className}`}>
      <div className="fx-pinned-stage">
        {title && <h2 className="ed-title ed-gutter fx-pinned-title">{title}</h2>}
        <div ref={row} className="fx-pinned-row ed-gutter">{children}</div>
      </div>
    </section>
  );
}
