import ScrollVideoHero from '../components/ScrollVideoHero';
import Loader from '../components/Loader';
import ProductsSection from '../components/ProductsSection';
import BundleBanner from '../components/BundleBanner';
import ProductWheel from '../components/ProductWheel';
import ProductQuiz from '../components/ProductQuiz';
import StoryHomeCTA from '../components/StoryHomeCTA';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import BusinessSection from '../components/BusinessSection';
import { brand } from '../brand.config';

// Home = hero, collection, then whichever optional sections brand.config switches on.
export default function Home() {
  const t = brand.testimonials;
  return (
    <main>
      <ScrollVideoHero />
      <Loader />
      <div className="after-journey">
        <ProductsSection />
        {brand.bundle.enabled && <BundleBanner />}
        {brand.wheel.enabled && <ProductWheel />}
        {brand.quiz.enabled && <ProductQuiz />}
        <StoryHomeCTA />
        {t.enabled && t.items.length > 0 && <TestimonialsSection />}
        <FAQSection />
        {brand.business.enabled && <BusinessSection />}
      </div>
    </main>
  );
}
