import { useState, useEffect } from 'react';
import './HeroSection.css';

const BASE_COUNT = 53;
const LAUNCH_DATE = new Date('2026-08-16T12:00:00+05:30');
const WAITLIST_ANCHOR_DATE = new Date('2026-08-08T14:00:00+05:30').getTime();

function getWaitlistCount() {
  const now = Date.now();
  const diffMs = Math.max(0, now - WAITLIST_ANCHOR_DATE);
  // Increases by 1 every 5 hours
  const additional = Math.floor(diffMs / (5 * 60 * 60 * 1000));
  return BASE_COUNT + additional;
}

function useCountdown(target) {
  const calc = () => {
    const diff = Math.max(0, target - Date.now());
    return {
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function HeroSection() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const [count, setCount] = useState(getWaitlistCount());
  const time = useCountdown(LAUNCH_DATE);

  // Update waitlist count periodically in case they leave the tab open
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(getWaitlistCount());
    }, 60 * 60 * 1000); // Check every hour
    return () => clearInterval(interval);
  }, []);

  // Parallax — sets --scroll-y CSS var on root for CSS to consume
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Image background with dark overlay */}
      <img src="/images/hero-postcards.jpg" alt="Postcards and Perfumes" className="hero-bg" />
      <div className="hero-overlay" aria-hidden="true" />

      {/* Slow shimmer sweep */}
      <div className="hero-shimmer-overlay" aria-hidden="true" />

      <div className="hero-content container">
        {/* Pre-order badge */}
        <div className="brand-logo-wrap animate-fade-up hero-parallax-title">
          <h1 className="brand-logo-title">POSTCARDS</h1>
          <p className="brand-logo-subtitle">
            <span className="brand-logo-line">—</span> PERFUMES <span className="brand-logo-line">—</span>
          </p>
          <p className="brand-tagline">Carry a place. Wear a memory.</p>
        </div>

        <div className="hero-bottom animate-fade-up delay-350">
          <div className="hero-urgency">
          <span className="urgency-dot" />
          <span><strong>{count.toLocaleString('en-IN')}</strong> people already on the waitlist</span>
          <span className="urgency-sep">·</span>
          <span className="hero-launch-label">Launching in</span>
          <div className="hero-countdown">
            <div className="countdown-unit">
              <span className="countdown-num">{String(time.days).padStart(2, '0')}</span>
              <span className="countdown-label">Days</span>
            </div>
            <span className="countdown-colon">:</span>
            <div className="countdown-unit">
              <span className="countdown-num">{String(time.hours).padStart(2, '0')}</span>
              <span className="countdown-label">Hrs</span>
            </div>
            <span className="countdown-colon">:</span>
            <div className="countdown-unit">
              <span className="countdown-num">{String(time.minutes).padStart(2, '0')}</span>
              <span className="countdown-label">Min</span>
            </div>
            <span className="countdown-colon">:</span>
            <div className="countdown-unit">
              <span className="countdown-num">{String(time.seconds).padStart(2, '0')}</span>
              <span className="countdown-label">Sec</span>
            </div>
          </div>
        </div>

        <div className="hero-actions animate-fade-up delay-400">
          <button id="hero-shop-btn" className="btn-primary" onClick={() => scrollTo('collection')}>
            Order Now
          </button>
        </div>

        </div>
      </div>
    </section>
  );
}
