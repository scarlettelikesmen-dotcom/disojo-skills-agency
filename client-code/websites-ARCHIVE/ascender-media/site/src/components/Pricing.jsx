import { ArrowUpRight, Check } from '@phosphor-icons/react';
import { PLANS, CAL_URL } from '../data/content.js';
import { useInView } from '../lib/motion.js';
import { setPlan } from '../lib/planStore.js';
import './Pricing.css';

// Export presets: each plan is a preset with its own settings. Prices are USD per month.
export default function Pricing() {
  const [ref, seen] = useInView();
  return (
    <section className="sec pricing" id="pricing" ref={ref}>
      <div className="wrap">
        <div className={`head rv${seen ? ' in' : ''}`}>
          <h2>Pick a preset.</h2>
          <p>Every plan is designed to be cheaper, faster and calmer than hiring a full-time editor. Prices are in US dollars, per month.</p>
        </div>
        <div className="presets">
          {PLANS.map((p, i) => (
            <article key={p.id} className={`preset${p.popular ? ' hot' : ''} rv${seen ? ' in' : ''}`} style={{ '--d': 150 + i * 110 }} aria-labelledby={`plan-${p.id}`}>
              <div className="bezel">
                <div className="core">
                  <header>
                    <h3 id={`plan-${p.id}`}>{p.name}</h3>
                    {p.popular && <span className="pill mono">Most popular</span>}
                  </header>
                  <p className="price"><span className="cur">$</span><span className="num amt">{p.price}</span><span className="per">/mo</span></p>
                  <p className="p-who">{p.who}</p>
                  <dl className="specs">
                    {p.specs.map(([k, v]) => (
                      <div key={k}><dt className="mono">{k}</dt><dd>{v}</dd></div>
                    ))}
                  </dl>
                  <ul className="inc">
                    {p.includes.map((t) => <li key={t}><Check size={18} weight="light" aria-hidden="true" /><span>{t}</span></li>)}
                  </ul>
                  <p className="best"><span className="mono">Best for</span>{p.best}</p>
                  <a className={`btn${p.popular ? '' : ' ghost'}`} href={CAL_URL} target="_blank" rel="noopener noreferrer" onClick={() => setPlan(p.id)} aria-label={`Book a call about the ${p.name} plan`}>
                    Book a call <span className="ico"><ArrowUpRight size={20} weight="light" /></span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
