import ProductCard from './ProductCard';
import { products } from '../data/products';
import './ProductsSection.css';

// Image-led collection: one photo, one name, one price per scent. Everything else
// (notes, best-for, description) lives in the product popup a click away.
export default function ProductsSection() {
  return (
    <section id="collection" className="collection">
      <header className="collection-head">
        <h2 className="collection-title">Four places.<br />One brand.</h2>
        <p className="collection-meta">10 ml perfume oils</p>
      </header>

      <div className="collection-grid">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
