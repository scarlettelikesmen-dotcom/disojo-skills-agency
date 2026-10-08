import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { setLoad } from '../lib/loadStore';
import useScrollProgress from '../lib/useScrollProgress';
import Seal from './Seal';
import { brand } from '../brand.config';
import './Hero.css';

const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const ease = (t) => t * t * (3 - 2 * t);
const fade = (p, a, b) => clamp((p - a) / 0.05) * (1 - clamp((p - b) / 0.05));

// A circle opens onto the real rotating-slice film as you scroll; the wordmark parts to make room, then the film plays out full-bleed.
export default function Hero() {
  const sec = useRef(null);
  const vid = useRef(null);
  const win = useRef(null);
  const left = useRef(null);
  const right = useRef(null);
  const lines = useRef(null);
  const endEl = useRef(null);
  const hint = useRef(null);
  const target = useRef(0);
  const cur = useRef(0);
  const raf = useRef(0);

  // The whole film is downloaded behind the loader (real progress), then played from memory so every scroll
  // position seeks instantly. Without this the turn only follows the scroll once the stream has caught up.
  useEffect(() => {
    const v = vid.current;
    let dead = false; let url = '';
    const done = () => setLoad({ progress: 1, ready: true });
    const src = innerWidth <= 820 || navigator.connection?.saveData ? '/film/hero-sm.mp4' : '/film/hero.mp4';
    (async () => {
      try {
        const res = await fetch(src);
        const total = Number(res.headers.get('content-length')) || 0;
        const reader = res.body.getReader(); const chunks = []; let got = 0;
        for (;;) {
          const { done: end, value } = await reader.read();
          if (end) break;
          chunks.push(value); got += value.length;
          if (total) setLoad({ progress: Math.min(0.97, got / total) });
        }
        if (dead) return;
        url = URL.createObjectURL(new Blob(chunks, { type: 'video/mp4' }));
        v.addEventListener('loadeddata', () => { v.currentTime = 0; done(); }, { once: true });
        v.src = url; v.load();
      } catch { v.src = src; done(); }
    })();
    return () => { dead = true; if (url) URL.revokeObjectURL(url); };
  }, []);

  const paint = (p) => {
    const open = ease(clamp(p / 0.4));
    win.current.style.clipPath = `circle(${(11 + open * 56).toFixed(2)}vmax at 50% 50%)`;
    const shift = ease(clamp(p / 0.36)) * 62;
    left.current.style.transform = `translate3d(${-shift}vw,0,0)`; right.current.style.transform = `translate3d(${shift}vw,0,0)`;
    left.current.style.opacity = right.current.style.opacity = 1 - clamp((p - 0.24) / 0.14);
    hint.current.style.opacity = 1 - clamp(p / 0.06);
    const v = vid.current; // film stays on frame 1 until the circle has fully opened (p 0.44), then turns with the scroll
    if (v.duration) { const t = clamp((p - 0.44) / 0.5) * v.duration; if (Math.abs(v.currentTime - t) > 1 / 36) v.currentTime = t; }
    const l = brand.hero.lines[0];
    lines.current.style.opacity = fade(p, l.from, l.to); lines.current.style.transform = `translate3d(0,${(1 - fade(p, l.from, l.to)) * 18}px,0)`;
    const e = clamp((p - brand.hero.end.from) / 0.05);
    endEl.current.style.opacity = e; endEl.current.style.transform = `translate3d(0,${(1 - e) * 18}px,0)`; endEl.current.style.pointerEvents = e > 0.5 ? 'auto' : 'none';
  };
  const tick = () => {
    raf.current = 0;
    cur.current += (target.current - cur.current) * 0.16;
    if (Math.abs(target.current - cur.current) < 0.0005) cur.current = target.current;
    paint(cur.current);
    if (cur.current !== target.current) raf.current = requestAnimationFrame(tick);
  };
  const reduced = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  useScrollProgress(sec, (p) => { target.current = reduced ? 1 : p; if (!raf.current) raf.current = requestAnimationFrame(tick); }, []);

  return (
    <section ref={sec} className="hero">
      <div className="hero-stage" data-nav="light">
        <h1 className="hero-word display" aria-label={brand.name}>
          <span ref={left} className="hero-w hero-w--l" aria-hidden="true">Mochi</span>
          <span ref={right} className="hero-w hero-w--r" aria-hidden="true">&amp; Midori</span>
        </h1>
        <div ref={win} className="hero-win">
          <video ref={vid} poster="/film/hero-poster.jpg" muted playsInline preload="auto" aria-hidden="true" />
          <div className="hero-shade" />
        </div>
        <p className="hero-kicker label">{brand.hero.kicker}</p>
        <p className="hero-jp" aria-hidden="true">{brand.jp}</p>
        <Seal className="hero-seal" size={52} />
        <p ref={hint} className="hero-hint label" aria-hidden="true">Scroll</p>
        <p ref={lines} className="hero-line display" style={{ opacity: 0 }}>{brand.hero.lines[0].text}</p>
        <div ref={endEl} className="hero-end" style={{ opacity: 0 }}>
          <p className="hero-end-text display">{brand.hero.end.text}</p>
          <Link to={brand.hero.end.cta.to} className="btn">{brand.hero.end.cta.label} <span aria-hidden="true">↓</span></Link>
        </div>
      </div>
    </section>
  );
}
