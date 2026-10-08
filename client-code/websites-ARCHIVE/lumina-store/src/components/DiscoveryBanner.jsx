import './DiscoveryBanner.css';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

export default function DiscoveryBanner() {
  const { dispatch, setIsOpen } = useCart();
  const discoverySet = products.find(p => p.id === 5);

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', item: discoverySet });
    setIsOpen(true);
  };

  return (
    <section className="discovery-banner section-dark">
      <div className="discovery-banner-inner container">
        <div className="discovery-text">
          <p className="section-eyebrow section-eyebrow--light">The Full Set</p>
          <h2 className="section-title section-title--light">
            Can't pick just one?<br />
            Start with all of them.
          </h2>
          <div className="section-divider section-divider--light" />
          <p className="discovery-sub">
            All four memories. One giftable box. The complete Postcards collection, together.
          </p>
          <div className="discovery-scents">
            {products.filter(p => p.id !== 5).map(p => (
              <span key={p.id} className="discovery-scent-tag">
                {p.name}
              </span>
            ))}
          </div>
          <div className="discovery-actions">
            <button id="discovery-preorder-btn" className="btn-primary" style={{ background: 'var(--gold)', borderColor: 'var(--gold)', color: 'var(--ink)' }} onClick={addToCart}>
              <ShoppingBag size={14} strokeWidth={1.5} />
              Order Discovery Set - ₹849
            </button>
          </div>
        </div>

        <div className="discovery-visual">
          {/* Four stacked roll-on bottles */}
          {products.filter(p => p.id !== 5).map((p, i) => (
            <div
              key={p.id}
              className="discovery-bottle"
              style={{
                background: `linear-gradient(145deg, ${p.gradientFrom}, ${p.gradientTo})`,
                transform: `rotate(${-12 + i * 8}deg) translateY(${i * -6}px)`,
                zIndex: i,
              }}
            >
              <div className="discovery-bottle-label" style={{ color: p.textColor }}>
                <span>POSTCARDS</span>
                <span>{p.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
