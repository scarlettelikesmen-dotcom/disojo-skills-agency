import { Link } from 'react-router-dom';
import { brand } from '../brand.config';
import './VisitTicket.css';

// Shopfront in an arched window beside a paper ticket with hours and address.
export default function VisitTicket({ cta = true }) {
  return (
    <section data-nav="light" className="visit gutter">
      <div className="visit-arch"><img src="/images/shopfront.jpg" alt="The Mochi & Midori shopfront: a wooden facade with glass doors and a maple tree" loading="lazy" width="2000" height="1030" /></div>
      <div className="ticket">
        <p className="label ticket-top">Admit one, every day we are open</p>
        <h2 className="display ticket-title">Come by the counter</h2>
        <address className="ticket-addr">{brand.address.map((l) => <span key={l}>{l}</span>)}</address>
        <ul className="ticket-hours">{brand.hours.map((h) => <li key={h.days}><span>{h.days}</span><span>{h.time}</span></li>)}</ul>
        <div className="ticket-actions">
          <a className="btn btn--solid" href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hi, I would like to set something aside for pickup.')}`} target="_blank" rel="noreferrer">WhatsApp us</a>
          {cta && <Link to="/visit" className="btn">Plan a visit</Link>}
        </div>
      </div>
    </section>
  );
}
