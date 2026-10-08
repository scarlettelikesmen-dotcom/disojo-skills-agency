import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../lib/smoothScroll';
import './Footer.css';

const TO = 'care@postcardsperfumes.in';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  // No mailing-list service yet: send the sign-up to the team's inbox so it isn't lost.
  const subscribe = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${TO}?subject=${encodeURIComponent('Add me to the Postcards list')}&body=${encodeURIComponent(`Please add ${email} to the Postcards email list.`)}`;
    setSent(true);
  };

  const top = () => scrollToTop();

  return (
    <footer className="foot ed-gutter">
      <div className="foot-top">
        <h2 className="ed-title foot-title">Letters from<br />places we love.</h2>
        <form className="foot-form" onSubmit={subscribe}>
          <label htmlFor="foot-email" className="ed-label">New scents and offers, first</label>
          <div className="foot-input">
            <input
              id="foot-email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" aria-label="Subscribe"><ArrowRight size={18} strokeWidth={1.5} /></button>
          </div>
          {sent && <p className="foot-note" role="status">Your email app should have opened. Hit send and you’re on the list.</p>}
        </form>
      </div>

      <nav className="foot-links" aria-label="Footer">
        <div>
          <h3 className="ed-label">Shop</h3>
          <Link to="/#collection">The collection</Link>
          <Link to="/combos" onClick={top}>Build a box</Link>
          <Link to="/rakhi" onClick={top}>Rakhi gift</Link>
          <Link to="/#b2b">Business gifting</Link>
        </div>
        <div>
          <h3 className="ed-label">Help</h3>
          <Link to="/story" onClick={top}>Our story</Link>
          <Link to="/#faq">FAQ</Link>
          <Link to="/#faq">Shipping &amp; returns</Link>
        </div>
        <div>
          <h3 className="ed-label">Say hello</h3>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href={`mailto:${TO}`}>{TO}</a>
          <a href="tel:+917710866425">+91 77108 66425</a>
        </div>
      </nav>

      <p className="foot-wordmark" aria-hidden="true">Postcards</p>

      <div className="foot-bottom ed-label">
        <span>© {new Date().getFullYear()} Postcards Perfumes</span>
        <span>Made in India</span>
      </div>
    </footer>
  );
}
