import { Link } from 'react-router-dom';
import Seal from './Seal';
import { scrollToTop } from '../lib/smoothScroll';
import { brand } from '../brand.config';
import './SiteFooter.css';

export default function SiteFooter() {
  return (
    <footer data-nav="light" className="foot gutter">
      <div className="foot-row">
        <Seal size={64} />
        <nav className="foot-nav label" aria-label="Footer">
          {brand.nav.map((l) => <Link key={l.label} to={l.to} onClick={() => scrollToTop({ immediate: true })}>{l.label}</Link>)}
          <a href={`mailto:${brand.email}`}>Email</a>
          <a href={brand.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </nav>
        <p className="foot-jp" aria-hidden="true">{brand.jp}</p>
      </div>
      <p className="foot-small label"><span>© {new Date().getFullYear()} {brand.legalName}</span><span>Website concept by <a href="https://disojo.in" target="_blank" rel="noreferrer">Disojo</a></span></p>
    </footer>
  );
}
