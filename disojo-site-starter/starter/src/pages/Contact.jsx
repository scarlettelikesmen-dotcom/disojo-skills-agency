import { useState } from 'react';
import Lines from '../components/Lines';
import { brand } from '../brand.config';
import './Pages.css';

export default function Contact() {
  const c = brand.contact;
  const [f, setF] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const set = (e) => setF((x) => ({ ...x, [e.target.name]: e.target.value }));

  // mailto until the client has a form backend (Formspree, Resend, their own API). Say so when handing over.
  const submit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(`Message from ${f.name}`)}&body=${encodeURIComponent(`${f.message}\n\n${f.name} <${f.email}>`)}`;
    setSent(true);
  };

  return (
    <main className="page ed-gutter">
      <header className="page-head">
        <p className="ed-label">{brand.name}</p>
        <h1 className="ed-title"><Lines text={c.title} /></h1>
        <p className="page-lead">{c.text}</p>
      </header>
      <div className="contact-body">
        <div className="contact-details">
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <a href={`tel:${brand.phone.tel}`}>{brand.phone.display}</a>
          <a href={brand.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
        {sent ? (
          <p role="status" className="page-lead">Your email app should have opened with your message filled in. Hit send and we’ll reply soon.</p>
        ) : (
          <form className="contact-form" onSubmit={submit}>
            <label><span className="ed-label">Name</span><input name="name" required autoComplete="name" value={f.name} onChange={set} /></label>
            <label><span className="ed-label">Email</span><input name="email" type="email" required autoComplete="email" value={f.email} onChange={set} /></label>
            <label><span className="ed-label">Message</span><textarea name="message" rows={5} required value={f.message} onChange={set} /></label>
            <button type="submit" className="pill-link">{c.submitLabel} <span className="pill-link-dot" aria-hidden="true" /></button>
          </form>
        )}
      </div>
    </main>
  );
}
