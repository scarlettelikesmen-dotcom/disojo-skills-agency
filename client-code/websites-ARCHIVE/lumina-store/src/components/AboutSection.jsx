import { Minimize2, Droplets, Clock, Leaf } from 'lucide-react';
import './AboutSection.css';

const features = [
  {
    icon: <Minimize2 size={20} strokeWidth={1.5} />,
    label: 'Pocket-Sized',
    desc: '10 ml roll-on. Fits in any pocket, bag, or wallet.',
  },
  {
    icon: <Droplets size={20} strokeWidth={1.5} />,
    label: 'Precision Application',
    desc: 'No overspray. Apply exactly where you want it.',
  },
  {
    icon: <Clock size={20} strokeWidth={1.5} />,
    label: '6–8 Hours',
    desc: 'Premium fragrance oil that stays with you all day.',
  },
  {
    icon: <Leaf size={20} strokeWidth={1.5} />,
    label: 'Alcohol-Free',
    desc: 'Clean formula. Gentle on skin. No burn, no dryness.',
  },
];

export default function AboutSection() {
  return (
    <section id="story" className="about-section">
      <div className="container">
        <div className="about-grid">

          <div className="about-text reveal">
            <p className="section-eyebrow">Our Philosophy</p>
            <h2 className="section-title">
              We don't sell perfume.<br />
              We sell a place.
            </h2>
            <div className="section-divider" />
            <div className="about-body">
              <p>
                This started with a question: why does India - a country so full of smell and memory - have almost no perfume that actually smells like it?
              </p>
              <p>
                Not the idea of India. The real thing. The cold of a Himalayan morning before the rest of the trail wakes up. The thick rose-and-suede air of a Rajasthan palace courtyard. The particular saltiness of a Kerala beach in the afternoon. The oud and cardamom of a century-old haveli.
              </p>
              <p className="about-closing">
                Each Postcards fragrance is an answer to a place. Pocket-sized. Alcohol-free. Made to carry everywhere you’ve been, and everywhere you’re going.
              </p>
            </div>
          </div>

          <div className="features-grid reveal" style={{ '--delay': '100ms' }}>
            {features.map((f, i) => (
              <div key={i} className="feature-item stamp-edge">
                <div className="feature-icon-wrap">{f.icon}</div>
                <strong>{f.label}</strong>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
