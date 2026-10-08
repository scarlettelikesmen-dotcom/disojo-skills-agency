import { DETAILS } from '../data/content.js';
import { useInView } from '../lib/motion.js';
import './Details.css';

// Replaces a FAQ: plain facts, grouped, nothing to open.
export default function Details() {
  const [ref, seen] = useInView();
  const [a, b, c] = DETAILS;
  return (
    <section className="sec details" id="details" ref={ref}>
      <div className="wrap">
        <div className={`head rv${seen ? ' in' : ''}`}>
          <h2>The details, plainly.</h2>
        </div>
        <div className="d-grid">
          <article className={`d-card d-a rv${seen ? ' in' : ''}`} style={{ '--d': 100 }}>
            <div className="bezel"><div className="core">
              <h3>{a.title}</h3>
              <dl className="two">
                {a.items.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
              </dl>
            </div></div>
          </article>
          <article className={`d-card d-b rv${seen ? ' in' : ''}`} style={{ '--d': 220 }}>
            <div className="bezel"><div className="core">
              <h3>{b.title}</h3>
              <ol className="flow">
                {b.items.map(([k, v], i) => (
                  <li key={k}><span className="mono n">{String(i + 1).padStart(2, '0')}</span><div><b>{k}</b><p>{v}</p></div></li>
                ))}
              </ol>
            </div></div>
          </article>
          <article className={`d-card d-c rv${seen ? ' in' : ''}`} style={{ '--d': 340 }}>
            <div className="bezel"><div className="core">
              <h3>{c.title}</h3>
              <dl className="stack">
                {c.items.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
              </dl>
            </div></div>
          </article>
        </div>
      </div>
    </section>
  );
}
