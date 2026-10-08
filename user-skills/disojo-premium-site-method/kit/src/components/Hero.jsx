import { Fragment, useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDown } from '@phosphor-icons/react';
import { HERO, CAL_URL } from '../data/content.js';
import { scrollToId } from '../lib/smoothScroll.js';
import Stage from './Stage.jsx';
import './Hero.css';

function Cut({ words, start = 0 }) {
  return words.map((w, i) => (
    <Fragment key={i}>
      <span className="w"><span style={{ '--i': start + i }}>{w}</span></span>{' '}
    </Fragment>
  ));
}

export default function Hero() {
  const [go, setGo] = useState(false);
  useEffect(() => {
    // Start the cut once fonts are in (or after 600 ms), so the headline never swaps mid-reveal.
    let done = false;
    const start = () => { if (!done) { done = true; requestAnimationFrame(() => setGo(true)); } };
    document.fonts?.ready.then(start);
    const t = setTimeout(start, 600);
    return () => clearTimeout(t);
  }, []);

  const first = HERO.line[0].split(' ');
  const second = HERO.line[1].split(' ');

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 className={`cut${go ? ' in' : ''}`} style={{ '--base': 150 }}>
            <span className="ln"><Cut words={first} start={0} /></span>
            <span className="ln"><Cut words={second} start={first.length} /></span>
          </h1>
          <p className={`sub rv${go ? ' in' : ''}`} style={{ '--d': 700 }}>{HERO.sub}</p>
          <div className={`ctas rv${go ? ' in' : ''}`} style={{ '--d': 850 }}>
            <a className="btn" href={CAL_URL} target="_blank" rel="noopener noreferrer">
              Book a call <span className="ico"><ArrowUpRight size={20} weight="light" /></span>
            </a>
            <a className="btn ghost" href="#pricing" onClick={(e) => { e.preventDefault(); scrollToId('pricing'); }}>
              See pricing <span className="ico"><ArrowDown size={18} weight="light" /></span>
            </a>
          </div>
        </div>
        <Stage go={go} />
      </div>
    </section>
  );
}
