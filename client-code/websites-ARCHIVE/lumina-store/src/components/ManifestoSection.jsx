import './ManifestoSection.css';

export default function ManifestoSection() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="manifesto-section section-dark">
      <div className="manifesto-inner container">
        <div className="manifesto-line" aria-hidden="true" />
        <blockquote className="manifesto-text reveal">
          We don&apos;t bottle places.
          <br />
          <em>We bottle the feeling you take back from them.</em>
        </blockquote>
        <div className="manifesto-line" aria-hidden="true" />
        <button
          className="manifesto-cta reveal"
          style={{ '--delay': '100ms' }}
          onClick={() => scrollTo('story')}
        >
          Read Our Story →
        </button>
      </div>
      <div className="airmail-border-dark" style={{ position: 'absolute', bottom: 0, left: 0 }} aria-hidden="true" />
      <div className="postmark-decoration" style={{ top: '-40px', right: '-40px' }} aria-hidden="true" />
      <div className="postmark-decoration" style={{ bottom: '-40px', left: '-40px', transform: 'scale(0.7)' }} aria-hidden="true" />
    </section>
  );
}
