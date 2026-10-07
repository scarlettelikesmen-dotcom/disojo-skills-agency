import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { startSmoothScroll } from './lib/smoothScroll';
import { CartProvider } from './context/CartContext';
import useScrollReveal from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import MarqueeStrip from './components/MarqueeStrip';
import Footer from './components/Footer';
import Curtain from './components/Curtain';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import FxDemo from './pages/FxDemo';

function AppInner() {
  useScrollReveal();
  useEffect(() => startSmoothScroll(), []);

  return (
    <BrowserRouter>
      <Navbar />
      <CartDrawer />
      <Curtain />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/__fx" element={<FxDemo />} />
        <Route path="*" element={<Home />} />
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
