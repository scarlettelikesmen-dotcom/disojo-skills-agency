import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { scrollToId, scrollToTop, lockScroll } from '../lib/smoothScroll';
import { brand } from '../brand.config';
import './CornerNav.css';

// No bar: a logo in one corner, a round Menu button in the other (both blend with whatever is behind them),
// and a full-screen menu with big numbered links.
export default function CornerNav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const { pathname } = useLocation();
  useEffect(() => {
    let raf = 0;
    const read = () => { raf = 0; const el = document.elementsFromPoint(innerWidth * 0.5, 30).find((n) => !n.closest('.cnav, .menu') && n.closest('[data-nav]'))?.closest('[data-nav]'); if (el) setTheme(el.dataset.nav); };
    let later = [];
    const kick = () => { if (!raf) raf = requestAnimationFrame(read); later.forEach(clearTimeout); later = [120, 320, 700].map((ms) => setTimeout(read, ms)); };
    kick(); addEventListener('scroll', kick, { passive: true }); addEventListener('resize', kick);
    const t = setTimeout(kick, 400);
    return () => { cancelAnimationFrame(raf); clearTimeout(t); later.forEach(clearTimeout); removeEventListener('scroll', kick); removeEventListener('resize', kick); };
  }, [pathname]);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    lockScroll(open);
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); lockScroll(false); };
  }, [open]);

  const go = (e, l) => {
    if (l.scrollId && pathname === '/') { e.preventDefault(); setOpen(false); setTimeout(() => scrollToId(l.scrollId), 350); }
    else setOpen(false);
  };
  return (
    <>
      <header className={`cnav cnav--${open ? 'light' : theme}`}>
        <Link to="/" className="cnav-logo" aria-label={`${brand.name}, home`} onClick={() => scrollToTop()}>
          <span className="cnav-mark" aria-hidden="true" />
          <span className="cnav-name display">{brand.name}</span>
        </Link>
        <button type="button" className="cnav-btn" aria-expanded={open} aria-controls="menu-panel" onClick={() => setOpen((o) => !o)}>
          <span className="label">{open ? 'Close' : 'Menu'}</span>
          <span className="cnav-lines" aria-hidden="true"><i /><i /></span>
        </button>
      </header>
      <div id="menu-panel" className={`menu${open ? ' is-open' : ''}`} aria-hidden={!open} inert={!open}>
        <nav className="menu-links gutter" aria-label="Main">
          {brand.nav.map((l) => (
            <Link key={l.label} to={l.to} className="menu-link" onClick={(e) => go(e, l)}>
              <span className="menu-num" aria-hidden="true">{l.n}</span><span className="display">{l.label}</span>
            </Link>
          ))}
        </nav>
        <div className="menu-foot gutter label">
          <span>{brand.hours.map((h) => `${h.days} ${h.time}`).join(' · ')}</span>
          <span>{brand.address[0]}</span>
          <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={brand.instagram} target="_blank" rel="noreferrer">{brand.instagramHandle}</a>
        </div>
      </div>
    </>
  );
}
