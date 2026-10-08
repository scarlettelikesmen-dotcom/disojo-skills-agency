import { products, ALLERGENS } from '../data/products';
import { brand } from '../brand.config';
import './AllergenChart.css';

// Replaces a generic FAQ: one table that answers "what is in it, how do I keep it", then three plain steps for ordering.
export default function AllergenChart() {
  const g = brand.good;
  return (
    <section id="good" data-nav="dark" className="good gutter">
      <header className="good-head">
        <h2 className="display good-title">{g.title}</h2>
        <p className="good-note">{g.note}</p>
      </header>
      <div className="good-scroll">
        <table className="good-table">
          <thead>
            <tr><th scope="col" className="label">Bake</th>{ALLERGENS.map((a) => <th key={a} scope="col" className="label">{a}</th>)}<th scope="col" className="label">Storage</th><th scope="col" className="label">Keeps</th></tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <th scope="row"><span className="good-k" aria-hidden="true">{p.kanji}</span>{p.name}</th>
                {ALLERGENS.map((a) => { const has = p.allergens.includes(a); return <td key={a}><span className={`dot${has ? ' is-on' : ''}`} aria-hidden="true" /><span className="sr-only">{has ? 'Contains' : 'None'}</span></td>; })}
                <td className="good-txt">{p.storage}</td>
                <td className="good-txt">{p.keeps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="good-cards">
        {products.map((p) => (
          <li key={p.id}>
            <h3 className="display"><span className="good-k" aria-hidden="true">{p.kanji}</span>{p.name}</h3>
            <p className="good-chips">{p.allergens.map((a) => <span key={a} className="chip">{a}</span>)}</p>
            <p className="good-txt">{p.storage}. Keeps {p.keeps}.</p>
          </li>
        ))}
      </ul>
      <ol className="steps">
        {g.steps.map((s) => (
          <li key={s.n}><span className="display steps-n">{s.n}</span><h3 className="display">{s.title}</h3><p>{s.text}</p></li>
        ))}
      </ol>
    </section>
  );
}
