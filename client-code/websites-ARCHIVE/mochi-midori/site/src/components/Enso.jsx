import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToTop } from '../lib/smoothScroll';
import './Enso.css';

const GROW = 700; const HOLD = 320; const SHRINK = 800;

// Page transition: a deep-green circle grows from the click point, the route swaps underneath, then it closes to the centre.
export default function Enso() {
  const root = useRef(null);
  const busy = useRef(false);
  const navigate = useNavigate();
  const go = useRef(navigate); go.current = navigate;
  const here = useRef(useLocation().pathname);
  here.current = useLocation().pathname;

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const timers = []; const later = (fn, ms) => timers.push(setTimeout(fn, ms));
    const el = root.current;
    const onClick = (e) => {
      if (reduced.matches || busy.current || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest?.('a[href]');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      const sameDoc = url.pathname === here.current;
      if (sameDoc) return; // hash links on the same page scroll normally
      e.preventDefault(); e.stopPropagation(); busy.current = true;
      el.style.setProperty('--x', `${e.clientX || innerWidth / 2}px`); el.style.setProperty('--y', `${e.clientY || innerHeight / 2}px`);
      el.className = 'enso is-grow';
      later(() => {
        go.current(url.pathname + url.search + url.hash); scrollToTop({ immediate: true });
        el.style.setProperty('--x', '50%'); el.style.setProperty('--y', '50%');
        later(() => { el.className = 'enso is-shrink'; later(() => { el.className = 'enso'; busy.current = false; }, SHRINK); }, HOLD);
      }, GROW);
    };
    document.addEventListener('click', onClick, true);
    return () => { document.removeEventListener('click', onClick, true); timers.forEach(clearTimeout); };
  }, []);
  return <div ref={root} className="enso" aria-hidden="true"><img src="/images/mark.png" alt="" width="96" height="96" /></div>;
}
