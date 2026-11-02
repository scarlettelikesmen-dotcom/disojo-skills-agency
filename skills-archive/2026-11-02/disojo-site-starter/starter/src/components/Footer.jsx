import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Lines from './Lines';
import { scrollToTop } from '../lib/smoothScroll';
import { brand } from '../brand.config';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  // No mailing-list service yet: send the sign-up to the team's inbox so it isn't lost.
  // Replace with the client's real provider (Mailchimp, Klaviyo, Brevo...) before launch.
  const subscribe = (e) => {
    e.preventDefault();
    const subject = `Add me to the ${brand.name} list`;
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Please add ${email} to the ${brand.name} email list.`)}`;
    setSent(true);
  };

  const top = () => scrollToTop();

  return (
    <footer className="foot ed-gutter">
      <div className="foot-top">
        <h2 className="ed-title foot-title"><Lines text={brand.footer.title} /></h2>
        <form className="foot-form" onSubmit={subscribe}>
          <label htmlFor="foot-email" className="ed-label">{brand.footer.newsletterLabel}</label>
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
        {brand.footer.columns.map((col) => (
          <div key={col.title}>
            <h3 className="ed-label">{col.title}</h3>
            {col.links.map((l) => (
              <Link key={l.label} to={l.to} onClick={top}>{l.label}</Link>
            ))}
          </div>
        ))}
        <div>
          <h3 className="ed-label">Say hello</h3>
          <a href={brand.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <a href={`tel:${brand.phone.tel}`}>{brand.phone.display}</a>
        </div>
      </nav>

      <p className="foot-wordmark" aria-hidden="true" style={{ fontSize: `${Math.min(30, 236 / brand.name.length)}vw` }}>{brand.name}</p>

      <div className="foot-bottom ed-label">
        <span>© {new Date().getFullYear()} {brand.legalName}</span>
        <span>{brand.madeIn}</span>
      </div>
    </footer>
  );
}
