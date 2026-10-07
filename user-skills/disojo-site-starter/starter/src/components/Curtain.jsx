import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToTop } from '../lib/smoothScroll';
import { brand } from '../brand.config';
import './Curtain.css';

const CLOSE_MS = 850;
const HOLD_MS = 650;
const OPEN_MS = 1050;

const TITLES = brand.curtain.titles;

// Two velvet panels slide in from either side and meet in the middle, the route swaps while
// the stage is hidden, the destination name holds for a beat, then the panels part.
// Timer-driven (not rAF) and skipped entirely for reduced motion.
export default function Curtain() {
  const root = useRef(null);
  const title = useRef(null);
  const busy = useRef(false);
  const navigate = useNavigate();
  // react-router hands out a new `navigate` after every route change; keep the listener (and its
  // pending timers) alive across that by reading it through a ref.
  const go = useRef(navigate);
  go.current = navigate;
  const loc = useLocation();
  const here = useRef(loc.pathname);
  here.current = loc.pathname;

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const timers = [];
    const later = (fn, ms) => timers.push(setTimeout(fn, ms));
    const state = (s) => { root.current.className = `curtain${s ? ` is-${s}` : ''}`; };

    const onClick = (e) => {
      if (reduced.matches || busy.current || e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest?.('a[href]');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === here.current) return;

      e.preventDefault();
      e.stopPropagation();
      busy.current = true;
      title.current.textContent = TITLES[url.pathname] || brand.name;
      state('closing');
      later(() => {
        go.current(url.pathname + url.search + url.hash);
        scrollToTop({ immediate: true });
        state('closed');
        later(() => {
          state('opening');
          later(() => { state(''); busy.current = false; }, OPEN_MS);
        }, HOLD_MS);
      }, CLOSE_MS);
    };
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div ref={root} className="curtain" aria-hidden="true">
      <div className="curtain-panel curtain-panel--l" />
      <div className="curtain-panel curtain-panel--r" />
      <div className="curtain-mark">
        <span className="ed-label curtain-kicker">{brand.curtain.kicker}</span>
        <span ref={title} className="curtain-title">{brand.name}</span>
      </div>
    </div>
  );
}
