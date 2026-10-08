import ScrollVideoHero from '../components/ScrollVideoHero';
import Loader from '../components/Loader';
import ProductsSection from '../components/ProductsSection';
import BYOBBanner from '../components/BYOBBanner';
import ScentWheel from '../components/ScentWheel';
import ScentQuiz from '../components/ScentQuiz';
import StoryHomeCTA from '../components/StoryHomeCTA';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import B2BSection from '../components/B2BSection';

// Homepage hero: a scroll-scrubbed video sequence (see ScrollVideoHero) instead of
// the earlier Three.js 3D journey — simpler, more robust, and the technique the
// founder specifically asked for after the 3D build didn't land.
export default function Home3D() {
  return (
    <main>
      <ScrollVideoHero />
      <Loader />
      <div className="after-journey">
        <ProductsSection />
        <BYOBBanner />
        <ScentWheel />
        <ScentQuiz />
        <StoryHomeCTA />
        <TestimonialsSection />
        <FAQSection />
        <B2BSection />
      </div>
    </main>
  );
}
