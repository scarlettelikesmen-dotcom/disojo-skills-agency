import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductModal from './ProductModal';
import { flyToCart } from '../utils/flyToCart';
import './ProductCard.css';

// One primary action (open the product) and one quiet secondary (quick add).
export default function ProductCard({ product }) {
  const { dispatch, setIsOpen } = useCart();
  const [showModal, setShowModal] = useState(false);

  const addToCart = (e) => {
    dispatch({ type: 'ADD_ITEM', item: product });
    setIsOpen(true);
    if (e?.currentTarget) flyToCart(e.currentTarget);
  };

  return (
    <>
      <article className="pcard">
        <button type="button" className="pcard-open" onClick={() => setShowModal(true)}>
          <span className="pcard-media">
            <img src={product.image} alt={product.name} loading="lazy" />
          </span>
          <span className="pcard-row">
            <span className="pcard-name">
              <span className="pcard-num">{product.number}</span>
              {product.name}
            </span>
            <span className="pcard-price">{product.currency}{product.price}</span>
          </span>
          <span className="pcard-place">{product.subtitle}</span>
        </button>

        <button
          type="button"
          className="pcard-add"
          aria-label={`Add ${product.name} to cart`}
          onClick={addToCart}
        >
          <Plus size={18} strokeWidth={1.6} />
        </button>
      </article>

      {showModal && (
        <ProductModal
          product={product}
          onClose={() => setShowModal(false)}
          onAddToCart={() => addToCart()}
        />
      )}
    </>
  );
}
