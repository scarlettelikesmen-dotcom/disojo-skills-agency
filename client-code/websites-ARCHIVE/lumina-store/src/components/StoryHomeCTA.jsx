import { Link } from 'react-router-dom';
import { scrollToTop } from '../lib/smoothScroll';
import './StoryHomeCTA.css';

// One sentence, set big. The brand line does the work; nothing competes with it.
export default function StoryHomeCTA() {
  return (
    <section className="story-line ed-gutter">
      <p className="ed-label story-line-label">Our story</p>
      <h2 className="story-line-quote">
        We don’t bottle places. We bottle the feeling you take back from them.
      </h2>
      <Link to="/story" className="text-link" onClick={() => scrollToTop({ immediate: true })}>
        Read our story <span className="pill-link-dot" aria-hidden="true" />
      </Link>
    </section>
  );
}
