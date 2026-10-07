import ProductCard from './ProductCard';
import Lines from './Lines';
import { products } from '../data/products';
import { brand } from '../brand.config';
import './ProductsSection.css';

// Image-led collection: one photo, one name, one price per product. Everything else
// (facts, description) lives in the product popup a click away.
export default function ProductsSection() {
  return (
    <section id="collection" className="collection">
      <header className="collection-head">
        <h2 className="collection-title"><Lines text={brand.collection.title} /></h2>
        <p className="collection-meta">{brand.collection.meta}</p>
      </header>

      <div className="collection-grid">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
