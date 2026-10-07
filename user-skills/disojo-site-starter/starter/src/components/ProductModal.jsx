import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import BottleArt from './BottleArt';
import { brand } from '../brand.config';
import './ProductModal.css';

// Product popup: photo on the left, name, price, description and facts on the right, one action.
// Esc and the backdrop close it; focus goes to the close button on open and back on close.
export default function ProductModal({ product, onClose, onAddToCart }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const prev = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('no-scroll');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
      prev?.focus?.();
    };
  }, [onClose]);

  const add = () => { onAddToCart(); onClose(); };

  return (
    <div className="pm-overlay" data-lenis-prevent onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="pm-box" role="dialog" aria-modal="true" aria-labelledby="pm-title">
        <button ref={closeRef} type="button" className="pm-close" onClick={onClose} aria-label="Close"><X size={18} strokeWidth={1.6} /></button>

        <div className="pm-media" style={{ background: product.gradientFrom }}>
          {product.image
            ? <img src={product.image} alt={product.name} />
            : <div className="pm-art"><BottleArt product={product} /></div>}
        </div>

        <div className="pm-info">
          <p className="ed-label pm-eyebrow">{brand.name} {product.number}</p>
          <h2 id="pm-title" className="pm-title">{product.name}</h2>
          <p className="pm-tagline">{product.tagline}</p>
          <p className="pm-price">
            {product.originalPrice && <s>{product.currency}{product.originalPrice.toLocaleString()}</s>}
            {product.currency}{product.price.toLocaleString()}
          </p>
          <p className="pm-desc">{product.description}</p>

          <dl className="pm-facts">
            {(product.facts || []).map(({ label, value }) => (
              <div key={label}><dt className="ed-label">{label}</dt><dd>{value}</dd></div>
            ))}
            {product.size && <div><dt className="ed-label">Size</dt><dd>{product.size}</dd></div>}
          </dl>

          <button type="button" className="pill-link pm-add" onClick={add}>
            Add to cart · {product.currency}{product.price.toLocaleString()} <span className="pill-link-dot" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
