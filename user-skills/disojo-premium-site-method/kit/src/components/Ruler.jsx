import { useEffect, useRef, useState } from 'react';
import { RULER, STATS } from '../data/content.js';
import { useInView, prefersReduced } from '../lib/motion.js';
import './Ruler.css';

// The page's one marquee: a timeline ruler listing the formats and jobs. The stat ledger sits under it.
function Count({ to, on }) {
  const [v, setV] = useState(prefersReduced() ? to : 0);
  const ran = useRef(false);
  useEffect(() => {
    if (!on || ran.current) return undefined;
    ran.current = true;
    if (prefersReduced()) { setV(to); return undefined; }
    const t0 = performance.now(); const dur = 1400; let raf;
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      setV(Math.round(to * (1 - Math.pow(1 - k, 4))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [on, to]);
  return <>{v}</>;
}

export default function Ruler() {
  const [ref, seen] = useInView();
  const items = [...RULER, ...RULER];
  return (
    <section className="ruler-sec" aria-label="What we work on">
      <div className="ruler" aria-hidden="true">
        <div className="ticks" />
        <div className="run">
          {items.map((t, i) => <span key={i}><i className="mono">{String((i % RULER.length) + 1).padStart(2, '0')}</i>{t}</span>)}
        </div>
      </div>
      <ul className="sr">{RULER.map((t) => <li key={t}>{t}</li>)}</ul>
      <div className="wrap ledger" ref={ref}>
        {STATS.map((s, i) => (
          <div className={`stat rv${seen ? ' in' : ''}`} style={{ '--d': i * 120 }} key={s.label}>
            <p className="big num"><Count to={s.n} on={seen} />{s.suffix}</p>
            <p className="cap">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
