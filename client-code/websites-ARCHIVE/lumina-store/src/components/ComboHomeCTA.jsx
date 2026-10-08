import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ComboHomeCTA.css';

export default function ComboHomeCTA() {
  return (
    <section className="combo-cta-section reveal">
      <div className="container combo-cta-container">
        <div className="combo-cta-content">
          <h2 className="combo-cta-title">Selected By You</h2>
          <p className="combo-cta-desc">
            Experience the full journey. Save 25% when you order our thoughtfully paired combo sets.
          </p>
          <Link to="/combos" className="combo-cta-btn">
            Explore Combos <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
