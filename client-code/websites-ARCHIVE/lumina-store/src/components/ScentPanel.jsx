import { useEffect, useRef, useState } from 'react';
import { useCart } from '../context/CartContext';
import './ScentPanel.css';

export default function ScentPanel({ product, first, fallback }) {
  const { dispatch, setIsOpen } = useCart();
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { threshold: 0.45 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const add = () => {
    dispatch({ type: 'ADD_ITEM', item: product });
    setIsOpen(true);
  };

  const style = { color: product.textColor };
  if (fallback) style.background = `linear-gradient(160deg, ${product.gradientFrom}, ${product.gradientTo})`;

  return (
    <section ref={ref} className={`scent-panel${seen ? ' is-in' : ''}`} style={style} aria-label={product.name}>
      <div className="scent-copy">
        {first && <h1 className="scent-hero">Carry a place. Wear a memory.</h1>}
        <p className="scent-eyebrow">{product.number} · {product.inspiredBy}</p>
        <h2 className="scent-name">{product.name}</h2>
        <p className="scent-tagline">{product.tagline}</p>
        <p className="scent-notes">{product.notes}</p>
        <p className="scent-price">{product.currency}{product.price} · {product.size}</p>
        <div className="scent-actions">
          <button type="button" className="scent-btn" onClick={add}>Add to cart</button>
          <a className="scent-link" href="#collection" style={{ color: product.textColor }}>See the collection</a>
        </div>
      </div>
      {fallback && <img className="scent-fallback-img" src={product.image} alt={product.name} loading="lazy" />}
    </section>
  );
}
