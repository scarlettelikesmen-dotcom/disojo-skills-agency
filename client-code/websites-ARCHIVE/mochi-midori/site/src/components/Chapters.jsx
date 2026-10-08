import { useRef } from 'react';
import useScrollProgress from '../lib/useScrollProgress';
import SplitFacts from './SplitFacts';
import { products } from '../data/products';
import { brand } from '../brand.config';
import './Chapters.css';

const N = products.length;
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const ease = (t) => 1 - (1 - t) ** 3;
const reduced = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

// The counter: each bake takes over the whole screen in its own colour. A circle of the next colour opens from the lower middle;
// the plated cut-out floats, tilts and settles with the scroll.
export default function Chapters() {
  const sec = useRef(null);
  const layers = useRef([]);
  const count = useRef(null);
  const rail = useRef([]);
  const target = useRef(0); const cur = useRef(0); const raf = useRef(0);
  const static_ = reduced();

  const paint = (p) => {
    const q = p * (N - 1);
    layers.current.forEach((el, i) => {
      const reveal = i === 0 ? 1 : clamp(q - (i - 1));
      const next = i < N - 1 ? clamp(q - i) : 0;
      el.style.clipPath = i === 0 ? 'none' : `circle(${(ease(reveal) * 150).toFixed(1)}vmax at 50% 62%)`;
      el.style.setProperty('--in', i === 0 ? 1 : clamp((reveal - 0.35) / 0.55));
      el.style.setProperty('--out', clamp(next / 0.45));
      el.style.setProperty('--t', (q - i).toFixed(3));
    });
    const a = Math.round(q);
    count.current.textContent = `${String(a + 1).padStart(2, '0')} / ${String(N).padStart(2, '0')}`;
    rail.current.forEach((r, i) => r.classList.toggle('is-on', i === a));
    sec.current.style.setProperty('--live', products[a].fg);
  };
  const tick = () => {
    raf.current = 0;
    cur.current += (target.current - cur.current) * 0.14;
    if (Math.abs(target.current - cur.current) < 0.0004) cur.current = target.current;
    paint(cur.current);
    if (cur.current !== target.current) raf.current = requestAnimationFrame(tick);
  };
  useScrollProgress(sec, (p) => { if (static_) return; target.current = p; if (!raf.current) raf.current = requestAnimationFrame(tick); }, []);

  return (
    <section ref={sec} id="counter" data-nav="dark" className={`chapters${static_ ? ' chapters--static' : ''}`} style={static_ ? { '--live': products[0].fg } : { height: `${(N - 1) * 120 + 100}vh`, '--live': products[0].fg }} aria-label="The counter">
      <div className="chapters-stage">
        {products.map((p, i) => (
          <article key={p.id} ref={(el) => { layers.current[i] = el; }} className="ch" data-nav={p.nav} style={{ '--bg': p.bg, '--fg': p.fg, '--in': 1, '--out': 0, '--t': 0 }}>
            <p className="ch-kanji" aria-hidden="true">{p.kanji}</p>
            <div className="ch-img"><i className="ch-shadow" /><img src={p.cut} alt={`${p.name}: ${p.tagline}`} width="1400" height="900" loading={i < 2 ? 'eager' : 'lazy'} /></div>
            <div className="ch-text">
              <p className="label ch-kind">{p.kind}</p>
              <h2 className="display ch-name">{p.name}</h2>
              <p className="ch-desc">{p.description}</p>
              <SplitFacts p={p} />
            </div>
          </article>
        ))}
        <p ref={count} className="ch-count label" aria-hidden="true">01 / 06</p>
        <ol className="ch-rail" aria-hidden="true">
          {products.map((p, i) => <li key={p.id} ref={(el) => { rail.current[i] = el; }} className={i === 0 ? 'is-on' : ''}>{p.kanji}</li>)}
        </ol>
        <p className="ch-intro label" aria-hidden="true">{brand.counter.title}</p>
      </div>
    </section>
  );
}
