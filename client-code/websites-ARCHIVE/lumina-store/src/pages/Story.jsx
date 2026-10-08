import useScrollReveal from '../hooks/useScrollReveal';
import './Story.css';

export default function Story() {
  useScrollReveal();

  return (
    <main className="story-page">

      {/* Half-height hero — same image as homepage, no text */}
      <div className="story-hero">
        <img
          src="/images/hero-postcards.jpg"
          alt="Postcards Perfumes"
          className="story-hero-img"
        />
        <div className="story-hero-overlay" aria-hidden="true" />
      </div>

      {/* Philosophy body */}
      <div className="story-body">
        <div className="container story-container reveal">

          <h2 className="story-philosophy-heading">Our Philosophy</h2>
          <div className="story-divider" />

          <div className="story-paragraphs">
            <p>
              We believe places stay with us. Not as photographs. Not as souvenirs. But as feelings - the kind that live somewhere beneath the surface, waiting for the right trigger to pull them back.
            </p>
            <p>
              The smell of rain outside a centuries-old haveli. The crisp air of a Himalayan morning before the rest of the trail wakes up. The salt carried by the Malabar breeze. The quiet, particular elegance of a palace garden at dusk.
            </p>
            <p>
              Long after we've left, these places continue to exist within us. Some memories are seen. The most unforgettable ones are smelled.
            </p>
            <p>
              <strong>POSTCARDS</strong> was created to capture those moments in fragrance. Every scent is inspired by a real place, a specific feeling, and a memory that deserves to be revisited. We work backwards - starting with the emotion a place gives you, then building a perfume around it.
            </p>
            <p>
              Because a fragrance shouldn't just smell beautiful. It should remind you of somewhere you've been, somewhere you dream of going, or somewhere you'll never forget.
            </p>
            <p className="story-closing">
              Carry a place. Wear a memory.
            </p>
          </div>

        </div>
      </div>

    </main>
  );
}
