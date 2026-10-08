import { useState } from 'react';
import { Send } from 'lucide-react';
import './ContactSection.css';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info animate-fade-up">
            <p className="section-eyebrow">Get in Touch</p>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Questions? We're here.</h2>
            <p className="contact-subtitle">
              Have a question about a scent or need help with an order? Reach out and we'll respond as soon as we can.
            </p>
            
            <div className="contact-details-list">
              <div className="contact-detail">
                <strong>Email</strong>
                <a href="mailto:care@postcardsperfumes.in">care@postcardsperfumes.in</a>
              </div>
              <div className="contact-detail">
                <strong>Instagram</strong>
                <a href="#" target="_blank" rel="noopener noreferrer">@postcards.scents</a>
              </div>
              <div className="contact-detail">
                <strong>Orders</strong>
                <span>Currently accepting reservations for the debut collection.</span>
              </div>
            </div>
          </div>

          <form className="contact-form animate-fade-up delay-200" onSubmit={handleSubmit}>
            {sent ? (
              <div className="contact-sent">
                <Send size={32} style={{ color: 'var(--color-accent)' }} />
                <h3>Message Sent</h3>
                <p>Thank you for reaching out. A memory is on its way back to you.</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input id="contact-name" name="name" required placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input id="contact-email" name="email" type="email" required placeholder="you@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" required placeholder="How can we help?" rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                </div>
                <button type="submit" id="contact-submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
