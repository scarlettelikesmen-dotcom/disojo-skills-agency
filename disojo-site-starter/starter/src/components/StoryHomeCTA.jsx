import { Link } from 'react-router-dom';
import { scrollToTop } from '../lib/smoothScroll';
import { brand } from '../brand.config';
import './StoryHomeCTA.css';

// One sentence, set big. The brand line does the work; nothing competes with it.
export default function StoryHomeCTA() {
  const { label, quote, cta, to } = brand.story;
  return (
    <section className="story-line ed-gutter">
      <p className="ed-label story-line-label">{label}</p>
      <h2 className="story-line-quote">{quote}</h2>
      <Link to={to} className="text-link" onClick={() => scrollToTop({ immediate: true })}>
        {cta} <span className="pill-link-dot" aria-hidden="true" />
      </Link>
    </section>
  );
}
