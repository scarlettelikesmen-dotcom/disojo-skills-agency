import { useEffect } from 'react';
import { startSmoothScroll } from './lib/smoothScroll.js';
import Transport, { Brand } from './components/Transport.jsx';
import Hero from './components/Hero.jsx';
import Ruler from './components/Ruler.jsx';
import Craft from './components/Craft.jsx';
import System from './components/System.jsx';
import Pricing from './components/Pricing.jsx';
import Proof from './components/Proof.jsx';
import Details from './components/Details.jsx';
import Book from './components/Book.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => startSmoothScroll(), []);
  return (
    <>
      <a className="skip" href="#edit">Skip to content</a>
      <Brand />
      <Transport />
      <main>
        <Hero />
        <Ruler />
        <Craft />
        <System />
        <Pricing />
        <Proof />
        <Details />
        <Book />
      </main>
      <Footer />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
