import { useState } from 'react';
import VisitTicket from '../components/VisitTicket';
import { brand } from '../brand.config';
import './Pages.css';

// Concept: the form opens a pre-filled email (no backend); WhatsApp opens a pre-filled chat to a placeholder number.
export default function Visit() {
  const [f, setF] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const set = (e) => setF((x) => ({ ...x, [e.target.name]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(`Message from ${f.name}`)}&body=${encodeURIComponent(`${f.message}\n\n${f.name} <${f.email}>`)}`;
    setSent(true);
  };
  return (
    <main data-nav="dark" className="page visit-page">
      <header className="page-head gutter">
        <p className="label page-kicker">Visit · <span aria-hidden="true">来店</span></p>
        <h1 className="display page-title">Come by,<br />or write.</h1>
        <p className="page-lead">Walk in, or message us to set something aside. A few lines is plenty.</p>
      </header>
      <VisitTicket cta={false} />
      <div className="contact-body gutter">
        <div className="contact-details">
          <a href={brand.mapsUrl} target="_blank" rel="noreferrer">Open in Maps</a>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <a href={`tel:${brand.phone.tel}`}>{brand.phone.display}</a>
          <a href={brand.instagram} target="_blank" rel="noreferrer">{brand.instagramHandle}</a>
        </div>
        {sent ? <p role="status" className="page-lead">Your email app should have opened with your message filled in. Hit send and we will reply soon.</p> : (
          <form className="contact-form" onSubmit={submit}>
            <label><span className="label">Name</span><input name="name" required autoComplete="name" value={f.name} onChange={set} /></label>
            <label><span className="label">Email</span><input name="email" type="email" required autoComplete="email" value={f.email} onChange={set} /></label>
            <label><span className="label">Message</span><textarea name="message" rows={5} required value={f.message} onChange={set} /></label>
            <button type="submit" className="btn btn--solid">Send message</button>
          </form>
        )}
      </div>
    </main>
  );
}
