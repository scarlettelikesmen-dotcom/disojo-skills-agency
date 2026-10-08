import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import './DiscountPopup.css';

export default function DiscountPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const hasShown = useRef(false);

  useEffect(() => {
    // Don't show if already seen this session
    if (sessionStorage.getItem('postcards_popup_seen')) return;

    const handleMouseLeave = (e) => {
      // Fire when mouse exits through the top of the viewport (exit intent)
      if (e.clientY <= 5 && !hasShown.current) {
        hasShown.current = true;
        setIsVisible(true);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    // Fallback: also show after 45s for mobile users who never trigger exit intent
    const fallbackTimer = setTimeout(() => {
      if (!hasShown.current && !sessionStorage.getItem('postcards_popup_seen')) {
        hasShown.current = true;
        setIsVisible(true);
      }
    }, 45000);

    // Small delay before listening so it doesn't fire on page load
    const initTimer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 8000);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(fallbackTimer);
      clearTimeout(initTimer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('postcards_popup_seen', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      sessionStorage.setItem('postcards_popup_seen', 'true');
      setTimeout(() => setIsVisible(false), 3000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`popup-overlay ${isVisible ? 'visible' : ''}`}>
      <div className="popup-content">
        <button className="popup-close" onClick={handleClose} aria-label="Close popup">
          <X size={20} strokeWidth={1.5} />
        </button>

        <div className="popup-inner">
          {isSubmitted ? (
            <div className="popup-success">
              <span className="popup-icon">✦</span>
              <h3>You're on the list.</h3>
              <p>Check your email for your 10% off code.</p>
            </div>
          ) : (
            <>
              <p className="popup-eyebrow">Wait - before you go</p>
              <h2 className="popup-title">10% Off Your First Order</h2>
              <p className="popup-desc">
                Sign up for early access, restock alerts, and 10% off your first purchase.
                No spam. Just memories.
              </p>
              <form className="popup-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.8rem' }}>
                  Claim 10% Off
                </button>
              </form>
              <button className="popup-decline" onClick={handleClose}>
                No thanks, I'll pay full price
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
