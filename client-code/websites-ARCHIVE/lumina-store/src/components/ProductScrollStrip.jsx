import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './ProductScrollStrip.css';

export default function ProductScrollStrip() {
  const { dispatch, setIsOpen } = useCart();

  const addToCart = (product, e) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', item: product });
    setIsOpen(true);
  };

  // Duplicate for seamless loop
  const displayed = [...products, ...products];

  return (
    <section id="product-strip" className="product-strip">
      <div className="strip-header container">
        <p className="section-eyebrow">The Collection</p>
        <h2 className="strip-heading">A memory from somewhere.</h2>
      </div>
      <div className="strip-track-wrap">
        <div className="strip-track">
          {displayed.map((product, i) => (
            <div
              key={i}
              className="strip-card"
              onClick={() => {
                document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div
                className="strip-card-visual"
                style={{ background: `linear-gradient(145deg, ${product.gradientFrom}, ${product.gradientTo})` }}
              >
                <div className="strip-card-number" style={{ color: product.textColor }}>
                  {product.number}
                </div>
                {/* Roll-on silhouette */}
                <div className="strip-rollon">
                  <div className="strip-cap" style={{ background: `${product.textColor}30` }} />
                  <div className="strip-body" style={{ borderColor: `${product.textColor}20` }}>
                    <span className="strip-label-brand">POSTCARDS</span>
                    <span className="strip-label-name" style={{ color: product.textColor }}>{product.name}</span>
                  </div>
                </div>
              </div>
              <div className="strip-card-info">
                <span className="strip-card-name">{product.name}</span>
                <span className="strip-card-notes">{product.notes}</span>
                <span className="strip-card-price">{product.currency}{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="strip-cta container">
        <button
          className="btn-outline"
          onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View All Products
        </button>
      </div>
    </section>
  );
}
