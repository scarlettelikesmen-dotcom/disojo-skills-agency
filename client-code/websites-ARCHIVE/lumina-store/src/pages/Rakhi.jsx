import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { Plus, Minus, ShoppingBag } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Combos.css';

export default function Rakhi() {
  useScrollReveal();
  const { dispatch, setIsOpen } = useCart();
  
  const [packSize, setPackSize] = useState(3);
  const [selections, setSelections] = useState({});

  // Get the 4 single perfumes
  const availableProducts = products.filter(p => p.id !== 5);

  const totalSelected = Object.values(selections).reduce((a, b) => a + b, 0);

  const handleAdd = (id) => {
    if (totalSelected < packSize) {
      setSelections(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    }
  };

  const handleRemove = (id) => {
    if (selections[id] > 0) {
      setSelections(prev => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };

  const handleAddToCart = () => {
    if (totalSelected !== packSize) return;

    const pricePerItem = discountedTotal / packSize; 

    Object.entries(selections).forEach(([id, qty]) => {
      if (qty > 0) {
        const product = availableProducts.find(p => p.id === parseInt(id));
        for(let i=0; i<qty; i++){
          dispatch({ type: 'ADD_ITEM', item: { 
            ...product, 
            price: pricePerItem,
            originalPrice: null,
          }});
        }
      }
    });

    setSelections({});
    setIsOpen(true);
  };

  // Pricing logic
  const originalTotal = packSize * 399;
  const discountedTotal = packSize === 3 ? 899 : 1099;

  return (
    <main className="combos-page">
      <div className="container">
        <header className="combos-header reveal">
          <p className="combos-eyebrow">CELEBRATE THE BOND</p>
          <h1 className="combos-title">Rakhi Gifting Box</h1>
          <p style={{ marginTop: '0.5rem', color: 'var(--color-text-light)' }}>
            Curate your own bundle. Every box includes a complimentary Rakhi!
          </p>
          <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/images/rakhi.jpeg" 
              alt="Rakhi Hamper" 
              style={{ maxWidth: '100%', width: '500px', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }} 
            />
          </div>
        </header>

        <div className="combos-tabs reveal">
          <button 
            className={`combo-tab ${packSize === 3 ? 'active' : ''}`}
            onClick={() => {
              setPackSize(3);
              if (totalSelected > 3) setSelections({}); // Reset if they downgrade
            }}
          >
            <h3>Pack of 3</h3>
            <p>Save up to 25%</p>
          </button>
          <button 
            className={`combo-tab ${packSize === 4 ? 'active' : ''}`}
            onClick={() => {
              setPackSize(4);
            }}
          >
            <span className="combo-badge">BEST VALUE</span>
            <h3>Pack of 4</h3>
            <p>Save up to 31%</p>
          </button>
        </div>

        <div className="combos-grid">
          {availableProducts.map((product, i) => {
            const count = selections[product.id] || 0;
            return (
              <div key={product.id} className="combo-card reveal" style={{ '--delay': `${i * 100}ms` }}>
                <div className="combo-card-visual" style={{ background: `linear-gradient(145deg, ${product.gradientFrom}, ${product.gradientTo})` }}>
                  {product.image && <img src={product.image} alt={product.name} />}
                </div>
                <div className="combo-card-body">
                  <h3>{product.name}</h3>
                  <p>{product.tagline}</p>
                  
                  <div className="combo-controls">
                    <span className="combo-price">₹399</span>
                    <div className="qty-selector">
                      <button onClick={() => handleRemove(product.id)} disabled={count === 0}><Minus size={14}/></button>
                      <span>{count}</span>
                      <button onClick={() => handleAdd(product.id)} disabled={totalSelected >= packSize}><Plus size={14}/></button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`combos-sticky-bar ${totalSelected > 0 ? 'visible' : ''}`}>
        <div className="sticky-bar-content container">
          <div className="sticky-progress-wrap">
            <div className="sticky-labels">
              <span>{totalSelected} of {packSize} selected</span>
            </div>
            <div className="sticky-progress-bg">
              <div className="sticky-progress-fill" style={{ width: `${(totalSelected / packSize) * 100}%` }} />
            </div>
          </div>

          <div className="sticky-action">
            <div className="sticky-pricing">
              <span className="sticky-original">₹{originalTotal}</span>
              <span className="sticky-discounted">₹{discountedTotal}</span>
            </div>
            <button 
              className="btn-primary sticky-btn" 
              disabled={totalSelected !== packSize}
              onClick={handleAddToCart}
            >
              <ShoppingBag size={14} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
