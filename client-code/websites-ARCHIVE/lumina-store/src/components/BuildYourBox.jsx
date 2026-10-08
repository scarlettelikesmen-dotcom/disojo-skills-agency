import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import './BuildYourBox.css';

const FRAGRANCES = products.filter(p => p.id <= 4);
const BOX_TOTAL = 4;
const BOX_PRICE = 849;

export default function BuildYourBox() {
  const { dispatch, setIsOpen } = useCart();
  const [quantities, setQuantities] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 });
  const [added, setAdded] = useState(false);

  const totalSelected = Object.values(quantities).reduce((a, b) => a + b, 0);
  const remaining = BOX_TOTAL - totalSelected;
  const isReady = totalSelected === BOX_TOTAL;

  const change = (id, delta) => {
    const next = (quantities[id] || 0) + delta;
    if (next < 0) return;
    if (delta > 0 && totalSelected >= BOX_TOTAL) return;
    setQuantities(q => ({ ...q, [id]: next }));
  };

  const handleAddToCart = () => {
    if (!isReady) return;

    // Build a summary of what's in the box
    const selection = FRAGRANCES
      .filter(p => quantities[p.id] > 0)
      .map(p => `${quantities[p.id]}× ${p.name}`)
      .join(', ');

    const boxItem = {
      id: 'custom-box',
      name: 'Build Your Box',
      tagline: selection,
      notes: selection,
      price: BOX_PRICE,
      currency: '₹',
      size: '4 × 10 ml Perfume Oils',
      image: null,
      gradientFrom: '#D8D0C4',
      gradientTo: '#A89880',
      badge: 'Custom',
    };

    dispatch({ type: 'ADD_ITEM', item: boxItem });
    setIsOpen(true);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const progressPct = (totalSelected / BOX_TOTAL) * 100;

  return (
    <section id="build-box" className="build-box-section">
      <div className="container">
        {/* Header */}
        <div className="build-box-header reveal">
          <p className="section-eyebrow">Compose Your Collection</p>
          <h2 className="section-title">Build Your Box</h2>
          <p className="build-box-subtitle">
            Pick any 4 bottles in any combination. One price, your perfect set.
          </p>
          <div className="build-box-price-badge">₹849 · Free Shipping</div>
        </div>

        {/* Progress bar */}
        <div className="build-box-progress reveal" style={{ '--delay': '80ms' }}>
          <div className="progress-track">
            <div
              className={`progress-fill ${isReady ? 'progress-fill--done' : ''}`}
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="progress-label">
            {isReady
              ? '✦ Your box is complete!'
              : `${remaining} bottle${remaining !== 1 ? 's' : ''} left to choose`}
          </p>
        </div>

        {/* Fragrance grid */}
        <div className="build-box-grid reveal" style={{ '--delay': '120ms' }}>
          {FRAGRANCES.map(p => {
            const qty = quantities[p.id];
            const atMax = totalSelected >= BOX_TOTAL && qty === 0;

            return (
              <div
                key={p.id}
                className={`box-card ${qty > 0 ? 'box-card--selected' : ''} ${atMax ? 'box-card--disabled' : ''}`}
              >
                {/* Visual */}
                <div className="box-card-visual">
                  {p.image
                    ? <img src={p.image} alt={p.name} loading="lazy" />
                    : <div className="box-card-gradient" style={{ background: `linear-gradient(145deg, ${p.gradientFrom}, ${p.gradientTo})` }} />
                  }
                  {qty > 0 && (
                    <div className="box-card-qty-badge">{qty}</div>
                  )}
                </div>

                {/* Info */}
                <div className="box-card-body">
                  <p className="box-card-mood">{p.mood}</p>
                  <h3 className="box-card-name">{p.name}</h3>
                  <p className="box-card-notes">{p.notes}</p>
                </div>

                {/* Stepper */}
                <div className="box-card-stepper">
                  <button
                    className="stepper-btn"
                    onClick={() => change(p.id, -1)}
                    disabled={qty === 0}
                    aria-label={`Remove one ${p.name}`}
                  >
                    <Minus size={14} strokeWidth={2} />
                  </button>
                  <span className="stepper-count">{qty}</span>
                  <button
                    className="stepper-btn"
                    onClick={() => change(p.id, +1)}
                    disabled={totalSelected >= BOX_TOTAL}
                    aria-label={`Add one ${p.name}`}
                  >
                    <Plus size={14} strokeWidth={2} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="build-box-cta reveal" style={{ '--delay': '160ms' }}>
          <button
            id="build-box-add"
            className={`build-box-submit ${isReady ? 'build-box-submit--ready' : ''}`}
            onClick={handleAddToCart}
            disabled={!isReady}
          >
            {added ? (
              <><Check size={16} strokeWidth={2} /> Added to Cart</>
            ) : (
              <><ShoppingBag size={16} strokeWidth={1.5} /> Add Box to Cart - ₹{BOX_PRICE}</>
            )}
          </button>
          <p className="build-box-hint">
            {isReady ? 'Your custom box is ready.' : `Choose ${remaining} more fragrance${remaining !== 1 ? 's' : ''} to unlock checkout`}
          </p>
        </div>
      </div>
    </section>
  );
}
