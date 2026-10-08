import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowUpRight, CaretUp } from '@phosphor-icons/react';
import { SECTIONS, TOTAL_SECONDS, CAL_URL } from '../data/content.js';
import { timecode } from '../lib/time.js';
import { scrollToId } from '../lib/smoothScroll.js';
import './Transport.css';

// The page reads as a timeline. This dock is the transport bar: timecode, current clip, scrub track with one tick per
// section. Timecode and fill are written straight to the DOM from one rAF handler (no React state per frame).
export function Brand() {
  return (
    <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); scrollToId('top'); }} aria-label="Ascender Media, back to the top">
      <img src="/img/mark.png" width="34" height="34" alt="" />
      <span>Ascender Media</span>
    </a>
  );
}

export default function Transport() {
  const tc = useRef(null);
  const fill = useRef(null);
  const [active, setActive] = useState(0);
  const [ticks, setTicks] = useState(SECTIONS.map(() => 0));
  const [open, setOpen] = useState(false);
  const activeRef = useRef(0);
  const dock = useRef(null);

  const measure = useCallback(() => {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    setTicks(SECTIONS.map((s) => {
      const el = document.getElementById(s.id);
      return el ? Math.min(1, Math.max(0, (el.getBoundingClientRect().top + scrollY) / max)) : 0;
    }));
  }, []);

  useEffect(() => {
    let raf = 0;
    const run = () => {
      raf = 0;
      const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
      const p = Math.min(1, Math.max(0, scrollY / max));
      if (tc.current) tc.current.textContent = timecode(p * TOTAL_SECONDS);
      if (fill.current) fill.current.style.transform = `scaleX(${p})`;
      let idx = 0;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.getBoundingClientRect().top <= innerHeight * 0.5) { idx = i; break; }
      }
      if (idx !== activeRef.current) { activeRef.current = idx; setActive(idx); }
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(run); };
    run();
    addEventListener('scroll', kick, { passive: true });
    addEventListener('resize', kick);
    const ro = new ResizeObserver(() => { measure(); kick(); });
    ro.observe(document.body);
    const t = setTimeout(measure, 600);
    document.fonts?.ready.then(measure);
    return () => { cancelAnimationFrame(raf); clearTimeout(t); removeEventListener('scroll', kick); removeEventListener('resize', kick); ro.disconnect(); };
  }, [measure]);

  // close the clip list on outside click / Escape
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onDown = (e) => { if (dock.current && !dock.current.contains(e.target)) setOpen(false); };
    addEventListener('keydown', onKey);
    addEventListener('pointerdown', onDown);
    return () => { removeEventListener('keydown', onKey); removeEventListener('pointerdown', onDown); };
  }, [open]);

  const go = (id) => { setOpen(false); scrollToId(id); };
  const atBook = SECTIONS[active].id === 'book';

  return (
    <div className="dock" ref={dock} data-open={open}>
      <div className="clips" id="clip-list" role="menu" hidden={!open} aria-label="Sections">
        {SECTIONS.map((s, i) => (
          <button key={s.id} role="menuitem" className={i === active ? 'on' : ''} onClick={() => go(s.id)} tabIndex={open ? 0 : -1}>
            <span className="mono n">{String(i + 1).padStart(2, '0')}</span>
            <span>{s.label}</span>
            <span className="mono t">{timecode(ticks[i] * TOTAL_SECONDS).slice(3, 8)}</span>
          </button>
        ))}
      </div>
      <div className="bar">
        <span className="mono tc" ref={tc} aria-hidden="true">00:00:00:00</span>
        <button className="cur" aria-haspopup="menu" aria-expanded={open} aria-controls="clip-list" onClick={() => setOpen((v) => !v)}>
          <span className="sr">Section: </span>
          <span className="lab" key={active}>{SECTIONS[active].label}</span>
          <CaretUp size={16} weight="light" aria-hidden="true" />
        </button>
        <div className="scrub" aria-hidden="true">
          <i className="fill" ref={fill} />
          {ticks.map((t, i) => <b key={SECTIONS[i].id} className={i === active ? 'on' : ''} style={{ left: `${t * 100}%` }} />)}
        </div>
        <a className={`btn sm${atBook ? ' is-away' : ''}`} href={CAL_URL} target="_blank" rel="noopener noreferrer" tabIndex={atBook ? -1 : 0}>
          Book a call <span className="ico"><ArrowUpRight size={18} weight="light" /></span>
        </a>
      </div>
    </div>
  );
}
