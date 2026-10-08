import { useState } from 'react';
import './B2BSection.css';

const useCases = [
  { label: 'Corporate gifting', desc: 'Your message on the postcard insert, a branded kraft box, your logo on the label.' },
  { label: 'Bulk orders', desc: 'Wholesale pricing from 25 units. Mix and match scents freely.' },
  { label: 'Retail partnership', desc: 'Stock Postcards in your store. We handle fulfilment, you keep the margin.' },
];

const TO = 'care@postcardsperfumes.in';

export default function B2BSection() {
  const [form, setForm] = useState({ company: '', name: '', email: '', phone: '', qty: '', usecase: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // No backend yet: hand the enquiry to the visitor's email app, addressed and filled in,
  // so it actually reaches the team instead of showing a success message for nothing.
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = [
      `Company: ${form.company}`,
      `Contact: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Quantity: ${form.qty || '-'}`,
      `Type: ${form.usecase || '-'}`,
      '',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(`Business enquiry: ${form.company}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="b2b" className="b2b ed-gutter">
      <div className="b2b-info">
        <p className="ed-label b2b-kicker">For businesses</p>
        <h2 className="ed-title">Give your people<br />a place to remember.</h2>
        <p className="b2b-text">
          Diwali, annual day, new-joiner kits. A gift that tells a story about a place, shipped anywhere in India within 7 days.
        </p>
        <ol className="b2b-cases">
          {useCases.map((u, i) => (
            <li key={u.label}>
              <span className="ed-label b2b-num">0{i + 1}</span>
              <div>
                <h3>{u.label}</h3>
                <p>{u.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="b2b-form-wrap">
        {sent ? (
          <div className="b2b-sent" role="status">
            <h3>Almost there.</h3>
            <p>
              Your email app should have opened with your enquiry filled in. Hit send and we’ll reply within 24 hours.
              If nothing opened, write to <a className="text-link" href={`mailto:${TO}`}>{TO}</a>.
            </p>
            <button type="button" className="text-link b2b-again" onClick={() => setSent(false)}>Edit enquiry</button>
          </div>
        ) : (
          <form className="b2b-form" onSubmit={handleSubmit}>
            <div className="b2b-field"><label htmlFor="b2b-company">Company</label><input id="b2b-company" name="company" required autoComplete="organization" value={form.company} onChange={handleChange} /></div>
            <div className="b2b-field"><label htmlFor="b2b-name">Your name</label><input id="b2b-name" name="name" required autoComplete="name" value={form.name} onChange={handleChange} /></div>
            <div className="b2b-field"><label htmlFor="b2b-email">Email</label><input id="b2b-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange} /></div>
            <div className="b2b-field"><label htmlFor="b2b-phone">Phone</label><input id="b2b-phone" name="phone" type="tel" required autoComplete="tel" value={form.phone} onChange={handleChange} /></div>
            <div className="b2b-field"><label htmlFor="b2b-qty">Approx. quantity</label><input id="b2b-qty" name="qty" inputMode="numeric" value={form.qty} onChange={handleChange} /></div>
            <div className="b2b-field">
              <label htmlFor="b2b-usecase">Enquiry type</label>
              <select id="b2b-usecase" name="usecase" value={form.usecase} onChange={handleChange}>
                <option value="">Select one</option>
                <option value="Corporate gifting">Corporate gifting</option>
                <option value="Bulk order">Bulk order</option>
                <option value="Retail partnership">Retail partnership</option>
                <option value="Event / wedding favours">Event / wedding favours</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="b2b-field b2b-field--wide"><label htmlFor="b2b-message">Tell us more (optional)</label><textarea id="b2b-message" name="message" rows={3} value={form.message} onChange={handleChange} /></div>
            <button type="submit" className="pill-link b2b-submit">Send enquiry <span className="pill-link-dot" aria-hidden="true" /></button>
          </form>
        )}
      </div>
    </section>
  );
}
