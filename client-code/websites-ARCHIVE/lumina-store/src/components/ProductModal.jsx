import { useEffect } from 'react';
import { X, ShoppingBag } from 'lucide-react';
import './ProductModal.css';

export default function ProductModal({ product, onClose, onAddToCart }) {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    };
  }, []);

  const handleAdd = () => {
    onAddToCart();
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('product-modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="product-modal-overlay" data-lenis-prevent onClick={handleOverlayClick}>
      <div className="product-modal-box animate-fade-up">
        <button className="product-modal-close" onClick={onClose} aria-label="Close"><X size={20} /></button>
        <div className="product-modal-grid">
          
          <div 
            className="product-modal-visual"
            style={
              product.image 
                ? {}
                : { background: `linear-gradient(145deg, ${product.gradientFrom}, ${product.gradientTo})` }
            }
          >
            {product.badge && <span className="product-badge">{product.badge}</span>}
            
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="product-modal-photo"
              />
            )}

            {!product.image && (
              <>
                <div className="product-card-number" style={{ color: product.textColor, opacity: 0.15 }}>
                  {product.number}
                </div>
                <div className="product-rollon" style={{ transform: 'scale(1.3) rotate(-5deg)' }}>
                  <div className="rollon-body" style={{ borderColor: `${product.textColor}25` }}>
                    <div className="rollon-label" style={{ color: product.textColor }}>
                      <span className="rollon-brand">POSTCARDS</span>
                      <span className="rollon-name">{product.name}</span>
                      <span className="rollon-size">10 ML PERFUME OIL</span>
                    </div>
                  </div>
                  <div className="rollon-cap" style={{ background: `${product.textColor}30` }} />
                </div>
              </>
            )}
          </div>

          <div className="product-modal-info">
            <span className="product-modal-eyebrow">POSTCARDS {product.number}</span>
            <h2>{product.name}</h2>
            <p className="product-modal-tagline">{product.mood} {product.story}</p>
            <p className="product-modal-price">
              {product.originalPrice && (
                <span style={{ textDecoration: 'line-through', opacity: 0.5, marginRight: '8px' }}>
                  {product.currency}{product.originalPrice.toLocaleString()}
                </span>
              )}
              {product.currency}{product.price.toLocaleString()}
            </p>
            <p className="product-modal-desc">{product.description}</p>

            <div className="product-modal-meta">
              <div>
                <span className="meta-label">Notes</span>
                <span className="meta-val">{product.notes}</span>
              </div>
              <div>
                <span className="meta-label">Best Worn</span>
                <span className="meta-val">{product.bestFor}</span>
              </div>
              <div>
                <span className="meta-label">Size</span>
                <span className="meta-val">{product.size}</span>
              </div>
            </div>

            <div className="product-modal-actions">
              <button
                id={`modal-preorder-${product.id}`}
                className="btn-primary"
                style={{ flex: 1, padding: '1rem' }}
                onClick={handleAdd}
              >
                <ShoppingBag size={15} strokeWidth={1.5} />
                Add to Order
              </button>
            </div>

            <p className="product-modal-note">We will confirm once we ship.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
