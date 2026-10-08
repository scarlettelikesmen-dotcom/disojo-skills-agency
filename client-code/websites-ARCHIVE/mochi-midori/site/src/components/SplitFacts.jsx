// Allergen chips + storage + shelf life, shared by the counter chapters.
export default function SplitFacts({ p }) {
  return (
    <dl className="facts">
      <div><dt className="label">Contains</dt><dd className="facts-chips">{p.allergens.map((a) => <span key={a} className="chip">{a}</span>)}</dd></div>
      <div><dt className="label">Storage</dt><dd>{p.storage}</dd></div>
      <div><dt className="label">Keeps</dt><dd>{p.keeps}</dd></div>
    </dl>
  );
}
