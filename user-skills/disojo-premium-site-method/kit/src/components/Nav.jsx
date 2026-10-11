import { useEffect, useState } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { CAL_URL } from '../data/content.js';
import { scrollToTop } from '../lib/smoothScroll.js';
import './Nav.css';

// Wordmark left, the one action right. The action steps aside while the hero or the booking section already shows it.
export default function Nav() {
  const [away, setAway] = useState(false);
  useEffect(() => {
    const ids = ['top', 'book'];
    const on = new Set();
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? on.add(e.target.id) : on.delete(e.target.id)));
      setAway(on.size > 0);
    }, { rootMargin: '-72px 0px -30% 0px' });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <header className="nav">
      <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); scrollToTop(); }} aria-label="Ascender Media, back to the top">
        <img src="/img/mark-ink.png" width="30" height="30" alt="" />
        <span>Ascender Media</span>
      </a>
      <a className={`btn sm cta${away ? ' away' : ''}`} href={CAL_URL} target="_blank" rel="noopener noreferrer" tabIndex={away ? -1 : 0}>
        Book a call <span className="ico"><ArrowUpRight size={18} weight="light" /></span>
      </a>
    </header>
  );
}
