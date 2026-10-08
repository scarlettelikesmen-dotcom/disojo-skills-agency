import { useEffect, useRef, useState } from 'react';
import { X, ArrowUpRight } from '@phosphor-icons/react';
import { CHATS, CAL_URL } from '../data/content.js';
import useScrollProgress from '../lib/useScrollProgress.js';
import { useReduced } from '../lib/motion.js';
import { lockScroll } from '../lib/smoothScroll.js';
import './Proof.css';

// Real chats, unedited. Desktop: the section pins and the row of chats slides sideways as you scroll.
// Phones and reduced motion: a normal swipeable row. Tap or press any chat to read it full size.
export default function Proof() {
  const root = useRef(null);
  const track = useRef(null);
  const dlg = useRef(null);
  const reduced = useReduced();
  const [pinned, setPinned] = useState(false);
  const [open, setOpen] = useState(null);
  const lastFocus = useRef(null);

  // pin only where there is room for it
  useEffect(() => {
    const q = matchMedia('(min-width: 981px) and (min-height: 560px)');
    const set = () => setPinned(q.matches && !reduced);
    set(); q.addEventListener('change', set);
    return () => q.removeEventListener('change', set);
  }, [reduced]);

  useScrollProgress(root, (p) => {
    const t = track.current;
    if (!t || !pinned) return;
    const dist = Math.max(0, t.offsetLeft + t.offsetWidth - t.parentElement.clientWidth);
    t.style.transform = `translate3d(${(-dist * p).toFixed(1)}px,0,0)`;
  }, [pinned]);

  // section height = one screen + the sideways distance, so the slide ends exactly as the pin releases
  useEffect(() => {
    const el = root.current; const t = track.current;
    if (!el || !t) return undefined;
    if (!pinned) { t.style.transform = ''; el.style.height = ''; return undefined; }
    const size = () => { const dist = Math.max(0, t.offsetLeft + t.offsetWidth - t.parentElement.clientWidth); el.style.height = `${innerHeight + dist * 1.08}px`; };
    size();
    const ro = new ResizeObserver(size); ro.observe(t);
    addEventListener('resize', size);
    return () => { ro.disconnect(); removeEventListener('resize', size); el.style.height = ''; };
  }, [pinned]);

  useEffect(() => {
    const d = dlg.current;
    if (!d) return undefined;
    if (open !== null && !d.open) { lastFocus.current = document.activeElement; d.showModal(); lockScroll(true); }
    if (open === null && d.open) { d.close(); }
    return undefined;
  }, [open]);

  const onClose = () => { lockScroll(false); setOpen(null); lastFocus.current?.focus?.(); };
  const chat = open !== null ? CHATS[open] : null;

  return (
    <section className={`proof${pinned ? ' is-pinned' : ''}`} id="proof" ref={root} aria-label="What clients wrote to us">
      <div className="pin">
        <div className="wrap head-row">
          <div className="head">
            <h2>Straight from the chats.</h2>
            <p>Six real screenshots from clients and prospects, select one to read it full size.</p>
          </div>
        </div>
        <div className="viewport">
          <ul className="track" ref={track}>
            {CHATS.map((c, i) => (
              <li key={c.id} className="chat" style={{ '--ar': c.w / c.h }}>
                <button className="bezel" onClick={() => setOpen(i)} aria-label={`Read ${c.name}'s message full size`}>
                  <span className="core">
                    <img src={c.src} width={c.w} height={c.h} alt={c.alt} loading="lazy" decoding="async" />
                  </span>
                </button>
                <p className="who"><b>{c.name}</b><span className="mono">Chat {i + 1} of {CHATS.length}</span></p>
              </li>
            ))}
            <li className="chat last">
              <div className="endcard">
                <p>Two of these clients mention the portfolio of past work we walk through on the call.</p>
                <a className="btn" href={CAL_URL} target="_blank" rel="noopener noreferrer">Book a call <span className="ico"><ArrowUpRight size={20} weight="light" /></span></a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <dialog ref={dlg} className="lightbox" onClose={onClose} onClick={(e) => { if (e.target === dlg.current) dlg.current.close(); }} aria-label={chat ? `${chat.name}'s message` : 'Message'}>
        {chat && (
          <div className="lb-inner">
            <button className="lb-x" onClick={() => dlg.current.close()} aria-label="Close"><X size={22} weight="light" /></button>
            <img src={chat.src} width={chat.w} height={chat.h} alt={chat.alt} />
            <p className="mono">{chat.name}</p>
          </div>
        )}
      </dialog>
    </section>
  );
}
