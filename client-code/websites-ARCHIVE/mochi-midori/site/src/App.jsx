import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { startSmoothScroll } from './lib/smoothScroll';
import CornerNav from './components/CornerNav';
import SiteFooter from './components/SiteFooter';
import Enso from './components/Enso';
import Home from './pages/Home';
import About from './pages/About';
import Visit from './pages/Visit';

export default function App() {
  useEffect(() => startSmoothScroll(), []);
  return (
    <BrowserRouter>
      <CornerNav />
      <Enso />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <SiteFooter />
    </BrowserRouter>
  );
}
