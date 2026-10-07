import { Link } from 'react-router-dom';
import Lines from './Lines';
import { scrollToTop } from '../lib/smoothScroll';
import { brand } from '../brand.config';
import './BundleBanner.css';

// Offer copy must mirror the real pricing on the shop page. Edit it in brand.config.js (bundle).
export default function BundleBanner() {
  const b = brand.bundle;
  return (
    <section className="byob ed-gutter">
      <div className="byob-copy">
        <h2 className="ed-title"><Lines text={b.title} /></h2>
        <p className="byob-text">{b.text}</p>
        <dl className="byob-offers">
          {b.offers.map((o) => (
            <div key={o.label}><dt className="ed-label">{o.label}</dt><dd>{o.price} <span>{o.save}</span></dd></div>
          ))}
        </dl>
        <Link to={b.to} className="pill-link" onClick={() => scrollToTop({ immediate: true })}>
          {b.cta} <span className="pill-link-dot" aria-hidden="true" />
        </Link>
      </div>
      <div className="byob-media">
        <img src={b.image} alt={b.imageAlt} loading="lazy" />
      </div>
    </section>
  );
}
