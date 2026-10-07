import SplitWords from '../fx/SplitWords';
import Counter from '../fx/Counter';
import WaveDivider from '../fx/WaveDivider';
import Floaters from '../fx/Floaters';
import VideoScrub from '../fx/VideoScrub';
import PinnedRow from '../fx/PinnedRow';
import ConsentCard from '../fx/ConsentCard';

// Test bench for the fx kit (route /__fx, not linked or in the sitemap). Replace sample assets in /public/fx-demo/.
const STICKERS = [
  { src: '/fx-demo/sticker-1.png', x: '6%', y: '12%', size: 130, speed: 0.25, rotate: -10 },
  { src: '/fx-demo/sticker-2.png', x: '78%', y: '18%', size: 110, speed: -0.2, rotate: 12 },
  { src: '/fx-demo/sticker-3.png', x: '70%', y: '62%', size: 150, speed: 0.35, rotate: -6 },
];

export default function FxDemo() {
  return (
    <main>
      <section className="ed-gutter" style={{ padding: '14vh 0 8vh', background: '#F5E3CD' }}>
        <SplitWords as="h1" className="ed-title" text={'Words rise\nout of masks.'} />
        <p style={{ display: 'flex', gap: '3rem', marginTop: '3rem', fontFamily: 'var(--font-serif)', fontSize: '3rem' }}>
          <Counter to={97} suffix="%" /> <Counter to={7} /> <Counter to={12.5} decimals={1} prefix="₹" suffix="k" />
        </p>
      </section>
      <WaveDivider from="#F5E3CD" to="#F91814" variant="scallop" />
      <section style={{ position: 'relative', overflow: 'clip', minHeight: '70vh', background: '#F91814', color: '#F5E3CD', display: 'grid', placeItems: 'center' }}>
        <Floaters items={STICKERS} />
        <SplitWords as="h2" className="ed-title" text={'Stickers drift\nat different speeds.'} />
      </section>
      <WaveDivider from="#F91814" to="#FFD65A" variant="wave" />
      <section style={{ background: '#FFD65A', padding: '10vh 0', textAlign: 'center' }} className="ed-gutter">
        <h2 className="ed-title">Zigzag next</h2>
      </section>
      <WaveDivider from="#FFD65A" to="#0b0b0a" variant="zigzag" />
      <VideoScrub src="/fx-demo/scrub.mp4" height="260vh">
        <h2 className="ed-title">This film is scrubbed by scroll.</h2>
      </VideoScrub>
      <PinnedRow title="Pinned gallery">
        {[1, 2, 3, 4, 5].map((n) => <img key={n} src={`/fx-demo/gallery-${n}.jpg`} alt={`Sample ${n}`} />)}
      </PinnedRow>
      <section style={{ height: '40vh' }} />
      <ConsentCard onAccept={() => { /* load analytics here */ }} />
    </main>
  );
}
