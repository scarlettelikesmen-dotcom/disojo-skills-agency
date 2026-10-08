import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { scrollToId, scrollToTop } from '../lib/smoothScroll';
import './Navbar.css';

const LINKS = [
  { label: 'Collection', to: '/#collection', scrollId: 'collection' },
  { label: 'Combos', to: '/combos' },
  { label: 'Rakhi Gift', to: '/rakhi' },
  { label: 'Our Story', to: '/story' },
  { label: 'B2B', to: '/#b2b', scrollId: 'b2b' },
];

// Sits directly on the hero video (transparent) while the homepage hero is on screen,
// then picks up a solid backdrop once you scroll past it — and on every other page.
export default function Navbar() {
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const onHome = location.pathname === '/';
  const [overHero, setOverHero] = useState(onHome);

  useEffect(() => {
    if (!onHome) {
      setOverHero(false);
      return undefined;
    }
    const check = () => {
      const hero = document.querySelector('.scroll-video-hero');
      const end = hero ? hero.offsetTop + hero.offsetHeight - window.innerHeight : 0;
      setOverHero(window.scrollY < end - 1);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [onHome]);

  const handleScrollTo = (e, id) => {
    if (onHome && id) {
      e.preventDefault();
      scrollToId(id);
    }
  };

  const links = LINKS.map((l, i) => {
    const sep = i < LINKS.length - 1 ? ',' : '';
    return l.scrollId ? (
      <Link key={l.label} to={l.to} onClick={(e) => handleScrollTo(e, l.scrollId)}>
        {l.label}{sep}
      </Link>
    ) : (
      <NavLink key={l.label} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
        {l.label}{sep}
      </NavLink>
    );
  });

  return (
    <header className={`navbar${overHero ? ' navbar--overlay' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-wordmark" onClick={() => scrollToTop()}>
          Postcards
        </Link>

        <nav className="navbar-links" aria-label="Main">{links}</nav>

        <button
          id="cart-btn"
          type="button"
          className="navbar-pill"
          aria-label={totalItems > 0 ? `Order now, open cart, ${totalItems} items` : 'Order now, open cart'}
          onClick={() => setIsOpen(true)}
        >
          <span>Order now</span>
          <span className="navbar-pill-icon">
            <ShoppingBag size={14} strokeWidth={1.6} />
            {totalItems > 0 && <span key={totalItems} className="cart-badge">{totalItems}</span>}
          </span>
        </button>
      </div>

      <nav className="navbar-links-mobile" aria-label="Main">{links}</nav>
    </header>
  );
}
