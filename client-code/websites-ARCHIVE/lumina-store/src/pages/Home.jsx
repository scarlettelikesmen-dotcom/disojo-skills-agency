import useScrollReveal from '../hooks/useScrollReveal';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import ComboHomeCTA from '../components/ComboHomeCTA';
import BYOBBanner from '../components/BYOBBanner';
import StoryHomeCTA from '../components/StoryHomeCTA';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import B2BSection from '../components/B2BSection';

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <HeroSection />
      <ProductsSection />
      <BYOBBanner />
      <StoryHomeCTA />
      <TestimonialsSection />
      <FAQSection />
      <B2BSection />
    </main>
  );
}
