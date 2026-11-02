import { Fragment, useEffect, useState } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { HERO, CAL_URL, CHATS } from '../data/content.js';
import './Hero.css';

function Cut({ words, start = 0 }) {
  return words.map((w, i) => (
    <Fragment key={i}>
      <span className="w"><span style={{ '--i': start + i }}>{w}</span></span>{' '}
    </Fragment>
  ));
}

const byId = Object.fromEntries(CHATS.map((c) => [c.id, c]));
const CAST = [
  { id: 'anna', cls: 'p2' },
  { id: 'jaylen', cls: 'p1' },
  { id: 'nasir', cls: 'p3' },
];

// One statement, one action. The picture is what clients actually wrote to us.
export default function Hero() {
  const [go, setGo] = useState(false);
  useEffect(() => {
    let done = false;
    const start = () => { if (!done) { done = true; requestAnimationFrame(() => setGo(true)); } };
    document.fonts?.ready.then(start);
    const t = setTimeout(start, 600);
    return () => clearTimeout(t);
  }, []);
  const a = HERO.line[0].split(' ');
  const b = HERO.line[1].split(' ');
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 className={`cut${go ? ' in' : ''}`}>
            <span className="ln"><Cut words={a} start={0} /></span>
            <span className="ln"><Cut words={b} start={a.length} /></span>
          </h1>
          <p className="sub">{HERO.sub}</p>
          <div className={`rv${go ? ' in' : ''}`} style={{ '--d': 250, marginTop: 'clamp(28px, 3.4vw, 40px)' }}>
            <a className="btn" href={CAL_URL} target="_blank" rel="noopener noreferrer">
              Book a call <span className="ico"><ArrowUpRight size={20} weight="light" /></span>
            </a>
          </div>
        </div>
        <div className={`cast${go ? ' in' : ''}`}>
          {CAST.map(({ id, cls }, i) => {
            const c = byId[id];
            return (
              <figure className={`phone ${cls}`} key={id} style={{ '--k': i }}>
                <img src={c.src} width={c.w} height={c.h} alt={c.alt} decoding="async" />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
