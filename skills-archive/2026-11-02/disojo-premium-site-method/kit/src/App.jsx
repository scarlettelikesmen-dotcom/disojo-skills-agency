import { useEffect } from 'react';
import { startSmoothScroll } from './lib/smoothScroll.js';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Proof from './components/Proof.jsx';
import Inbox from './components/Inbox.jsx';
import Month from './components/Month.jsx';
import Pricing from './components/Pricing.jsx';
import Book from './components/Book.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => startSmoothScroll(), []);
  return (
    <>
      <a className="skip" href="#proof">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <Proof />
        <Inbox />
        <Month />
        <Pricing />
        <Book />
      </main>
      <Footer />
    </>
  );
}
