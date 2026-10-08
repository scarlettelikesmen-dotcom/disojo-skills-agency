import { Link } from 'react-router-dom';
import { scrollToTop } from '../lib/smoothScroll';
import './BYOBBanner.css';

// Offer copy mirrors the real combo pricing on /combos (3 for ₹899, 4 for ₹1,099).
export default function BYOBBanner() {
  return (
    <section className="byob ed-gutter">
      <div className="byob-copy">
        <h2 className="ed-title">Build your<br />own box.</h2>
        <p className="byob-text">
          Pick the places you want to carry. Any three scents or all four, packed in a kraft gift box.
        </p>
        <dl className="byob-offers">
          <div><dt className="ed-label">3 scents</dt><dd>₹899 <span>Save 25%</span></dd></div>
          <div><dt className="ed-label">4 scents</dt><dd>₹1,099 <span>Save 31%</span></dd></div>
        </dl>
        <Link to="/combos" className="pill-link" onClick={() => scrollToTop({ immediate: true })}>
          Build a box <span className="pill-link-dot" aria-hidden="true" />
        </Link>
      </div>
      <div className="byob-media">
        <img src="/kraft-box.jpg" alt="Postcards kraft gift box" loading="lazy" />
      </div>
    </section>
  );
}
