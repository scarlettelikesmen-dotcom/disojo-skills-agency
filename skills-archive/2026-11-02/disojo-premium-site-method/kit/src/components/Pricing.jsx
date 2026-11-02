import { useState } from 'react';
import { ArrowUpRight, Check } from '@phosphor-icons/react';
import { PLANS, CAL_URL } from '../data/content.js';
import { useInView } from '../lib/motion.js';
import { setPlan } from '../lib/planStore.js';
import './Pricing.css';

// One plan at a time, shown properly. The selector carries all three prices. USD, per month.
export default function Pricing() {
  const [ref, seen] = useInView();
  const [sel, setSel] = useState('growth');
  const plan = PLANS.find((p) => p.id === sel);
  const pick = (id) => { setSel(id); setPlan(id); };
  const onKey = (e) => {
    const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!k) return;
    e.preventDefault();
    const i = PLANS.findIndex((p) => p.id === sel);
    const n = PLANS[(i + k + PLANS.length) % PLANS.length];
    pick(n.id);
    document.getElementById(`plan-${n.id}`)?.focus();
  };
  return (
    <section className="sec pricing" id="pricing" ref={ref}>
      <div className="wrap">
        <div className={`head rv${seen ? ' in' : ''}`}>
          <h2>Pricing.</h2>
          <p>Cheaper, faster and calmer than hiring a full-time editor. US dollars, per month.</p>
        </div>

        <div className={`sel rv${seen ? ' in' : ''}`} style={{ '--d': 120 }} role="tablist" aria-label="Plans" onKeyDown={onKey}>
          {PLANS.map((p) => (
            <button key={p.id} id={`plan-${p.id}`} role="tab" aria-selected={sel === p.id} aria-controls="plan-panel" tabIndex={sel === p.id ? 0 : -1} className={sel === p.id ? 'on' : ''} onClick={() => pick(p.id)}>
              <span className="n">{p.name}</span>
              <span className="p num">${p.price}</span>
            </button>
          ))}
        </div>

        <div className={`panel rv${seen ? ' in' : ''}`} style={{ '--d': 200 }} id="plan-panel" role="tabpanel" aria-labelledby={`plan-${plan.id}`}>
          <div className="pv" key={plan.id}>
            <div className="left">
              <h3>{plan.name}{plan.popular ? <span className="pop">Most popular</span> : null}</h3>
              <p className="price"><span className="cur">$</span><span className="amt num">{plan.price}</span><span className="per">/month</span></p>
              <p className="p-who">{plan.who}</p>
              <p className="best"><b>Best for</b> {plan.best}</p>
              <a className="btn" href={CAL_URL} target="_blank" rel="noopener noreferrer" aria-label={`Book a call about the ${plan.name} plan`}>
                Book a call <span className="ico"><ArrowUpRight size={20} weight="light" /></span>
              </a>
            </div>
            <div className="right">
              <dl className="specs">
                {plan.specs.map(([k, v]) => <div key={k}><dt>{k}</dt><dd className="num">{v}</dd></div>)}
              </dl>
              <ul className="inc">
                {plan.includes.map((t) => <li key={t}><Check size={18} weight="bold" aria-hidden="true" /><span>{t}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
