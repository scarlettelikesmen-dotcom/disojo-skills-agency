import Hero from '../components/Hero';
import Loader from '../components/Loader';
import Chapters from '../components/Chapters';
import Hands from '../components/Hands';
import AllergenChart from '../components/AllergenChart';
import VisitTicket from '../components/VisitTicket';

// Hero (circle opens onto the film) -> the counter (six full-screen colour chapters) -> by hand -> what is in it -> visit.
export default function Home() {
  return (
    <main>
      <Hero />
      <Loader />
      <Chapters />
      <Hands />
      <AllergenChart />
      <VisitTicket />
    </main>
  );
}
