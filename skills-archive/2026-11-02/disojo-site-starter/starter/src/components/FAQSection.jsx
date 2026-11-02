import { useState } from 'react';
import { brand } from '../brand.config';
import './FAQSection.css';

const faqs = brand.faq.items;

// Heading left, hairline list right. Answers open to their real height (no clipping).
export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq ed-gutter" id="faq">
      <div className="faq-side">
        <h2 className="ed-title">{brand.faq.title}</h2>
        <p className="faq-contact">
          Anything else? <a className="text-link" href={`mailto:${brand.email}`}>{brand.email}</a>
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className={`faq-row${isOpen ? ' is-open' : ''}`}>
              <h3 className="faq-q">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-sign" aria-hidden="true" />
                </button>
              </h3>
              <div id={`faq-a-${i}`} className="faq-a" role="region" aria-hidden={!isOpen}>
                <div><p>{item.a}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
