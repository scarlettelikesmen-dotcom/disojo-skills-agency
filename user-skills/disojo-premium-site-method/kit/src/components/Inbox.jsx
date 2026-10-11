import { useInView } from '../lib/motion.js';
import './Inbox.css';

// What a month contains. Six cells for six real deliverables; all facts come from the client's plans.
export default function Inbox() {
  const [ref, seen] = useInView();
  const c = (cls, i) => `cell ${cls} rv${seen ? ' in' : ''}`;
  return (
    <section className="sec inbox" id="inbox" ref={ref}>
      <div className="wrap">
        <div className={`head rv${seen ? ' in' : ''}`}>
          <h2>What you get every month.</h2>
          <p>Finished posts, the plan behind them, and help getting them out.</p>
        </div>
        <div className="grid">
          <article className={c('cell-a')} style={{ '--d': 80 }}>
            <h3>Reels and shorts</h3>
            <p>Cut for pace, with the hook up front.</p>
            <dl className="vol">
              <div><dt>Starter</dt><dd className="num">20-30</dd></div>
              <div><dt>Growth</dt><dd className="num">60-70</dd></div>
              <div><dt>Scale</dt><dd className="num">90-100+</dd></div>
            </dl>
            <p className="note">videos a month</p>
          </article>
          <article className={c('cell-b')} style={{ '--d': 160 }}>
            <h3>Subtitles and captions</h3>
            <p>Formatted for each platform, so they read on a muted feed.</p>
          </article>
          <article className={c('cell-c')} style={{ '--d': 100 }}>
            <h3>Carousels</h3>
            <p>Ideas and packaging for slide posts.</p>
          </article>
          <article className={c('cell-d')} style={{ '--d': 180 }}>
            <h3>A content plan, every month</h3>
            <p><span className="big num">30+</span> content ideas planned for you each month.</p>
            <ul className="plan">
              <li>Content pillars</li><li>Weekly topics</li><li>Hook angles</li><li>Simple CTAs</li>
            </ul>
          </article>
          <article className={c('cell-e')} style={{ '--d': 120 }}>
            <h3>Motion graphics</h3>
            <p>Included on Growth. Advanced on Scale.</p>
          </article>
          <article className={c('cell-f')} style={{ '--d': 200 }}>
            <h3>Help posting</h3>
            <p>What to film, what to post, what to test and what to double down on.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
