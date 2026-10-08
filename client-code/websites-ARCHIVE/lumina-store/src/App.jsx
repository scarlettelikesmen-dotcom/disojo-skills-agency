import { useEffect } from 'react';
import { startSmoothScroll } from './lib/smoothScroll';
import { CartProvider } from './context/CartContext';
import useScrollReveal from './hooks/useScrollReveal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import CartDrawer from './components/CartDrawer';
import MarqueeStrip from './components/MarqueeStrip';
import Footer from './components/Footer';
import Story from './pages/Story';
import Combos from './pages/Combos';
import Rakhi from './pages/Rakhi';
import Home3D from './pages/Home3D';
import Curtain from './components/Curtain';

function AppInner() {
  // Wire up scroll-reveal for all .reveal elements site-wide
  useScrollReveal();
  useEffect(() => startSmoothScroll(), []);

  return (
    <BrowserRouter>
      <Navbar />
      <CursorGlow />
      <CartDrawer />
      <Curtain />

      <Routes>
        <Route path="/" element={<Home3D />} />
        <Route path="/story" element={<Story />} />
        <Route path="/combos" element={<Combos />} />
        <Route path="/rakhi" element={<Rakhi />} />
      </Routes>

      <MarqueeStrip />
      <Footer />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppInner />
    </CartProvider>
  );
}
