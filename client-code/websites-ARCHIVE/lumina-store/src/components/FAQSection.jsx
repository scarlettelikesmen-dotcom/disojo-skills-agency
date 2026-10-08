import { useState } from 'react';
import './FAQSection.css';

const faqs = [
  {
    q: 'Do you ship across India?',
    a: 'Yes! We offer delivery pan-India via Delhivery. Wherever you are, your memory is on its way.',
  },
  {
    q: 'How does ordering work?',
    a: 'Order now. You will receive a confirmation as we ship.',
  },
  {
    q: 'When will my order be shipped?',
    a: 'Your order will typically ship within 5-7 working days of confirmation.',
  },
  {
    q: 'How long does the fragrance last?',
    a: 'Our premium perfume oils are designed to stay with you for 8-10 hours on average, sometimes longer, depending on your skin and the scent.',
  },
  {
    q: 'Are the perfumes alcohol-free?',
    a: 'Yes. All Postcards scents are 100% alcohol-free perfume oils - gentle on the skin, no overspray, and ideal for all skin types.',
  },
  {
    q: 'Do you accept returns?',
    a: "Since fragrance is a personal experience, all sales are final once dispatched. However, if something goes wrong with your order, reach out to us at care@postcardsperfumes.in and we'll make it right.",
  },
];

// Heading left, hairline list right. Answers open to their real height (no clipping).
export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq ed-gutter" id="faq">
      <div className="faq-side">
        <h2 className="ed-title">Questions.</h2>
        <p className="faq-contact">
          Anything else? <a className="text-link" href="mailto:care@postcardsperfumes.in">care@postcardsperfumes.in</a>
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
