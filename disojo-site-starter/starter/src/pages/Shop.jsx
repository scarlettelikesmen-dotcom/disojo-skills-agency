import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Lines from '../components/Lines';
import { products } from '../data/products';
import { brand } from '../brand.config';
import './Pages.css';

// Full catalogue. Product popups, quick-add and the cart all work from here too.
export default function Shop() {
  const b = brand.bundle;
  return (
    <main className="page ed-gutter">
      <header className="page-head">
        <p className="ed-label">{brand.name}</p>
        <h1 className="ed-title"><Lines text={brand.curtain.titles['/shop'] || 'The shop'} /></h1>
        {b.enabled && (
          <p className="page-lead">
            {b.text} {b.offers.map((o) => `${o.label} ${o.price}`).join(' · ')}.
          </p>
        )}
      </header>
      <div className="shop-grid">
        {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
      </div>
      <p style={{ marginTop: '3rem' }}><Link className="text-link" to="/#faq">Shipping &amp; returns</Link></p>
    </main>
  );
}
