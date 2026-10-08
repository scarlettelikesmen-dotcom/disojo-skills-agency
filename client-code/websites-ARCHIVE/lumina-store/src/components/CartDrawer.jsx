import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { lockScroll, scrollToId } from '../lib/smoothScroll';
import './CartDrawer.css';

const REMOVE_MS = 340;

// The order drawer. Editorial type, real product photos, items rise in on a stagger when it opens.
// Checkout logic is unchanged: Shopify cart permalink, with the PACK3/PACK4 discount code when a box is in the cart.
export default function CartDrawer() {
  const { items, isOpen, setIsOpen, dispatch, totalItems, totalPrice } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [removing, setRemoving] = useState(null);
  const closeRef = useRef(null);
  const lastFocus = useRef(null);

  const close = () => setIsOpen(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // close, then scroll to a home-page section (navigating home first if needed)
  const goTo = (id) => {
    setIsOpen(false);
    const go = () => setTimeout(() => scrollToId(id), 450);
    if (pathname === '/') go();
    else { navigate('/'); setTimeout(() => scrollToId(id), 1100); }
  };

  // reset the loading state when reopened, and on bfcache restore (browser back button)
  useEffect(() => { if (isOpen) setIsLoading(false); }, [isOpen]);
  useEffect(() => {
    const onShow = (e) => { if (e.persisted) setIsLoading(false); };
    window.addEventListener('pageshow', onShow);
    return () => window.removeEventListener('pageshow', onShow);
  }, []);

  // lock page scroll, close on Esc, move focus in and back out
  useEffect(() => {
    if (!isOpen) return undefined;
    lastFocus.current = document.activeElement;
    lockScroll(true);
    const t = setTimeout(() => closeRef.current?.focus(), 50);
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener('keydown', onKey);
      lockScroll(false);
      lastFocus.current?.focus?.();
    };
  }, [isOpen, setIsOpen]);

  const updateQty = (id, qty) => dispatch({ type: 'UPDATE_QTY', id, qty });
  const remove = (id) => {
    setRemoving(id);
    setTimeout(() => { dispatch({ type: 'REMOVE_ITEM', id }); setRemoving(null); }, REMOVE_MS);
  };

  const handleCheckout = () => {
    if (items.length === 0) return;
    const cartItems = items
      .filter((item) => item.shopifyVariantId)
      .map((item) => `${item.shopifyVariantId.split('/').pop()}:${item.qty}`) // gid://shopify/ProductVariant/123 -> 123
      .join(',');
    if (!cartItems) {
      alert('Sorry, one or more products are unavailable for checkout.');
      return;
    }
    let checkoutUrl = `https://checkout.postcardsperfumes.in/cart/${cartItems}`;
    // box pricing is applied at checkout with a discount code
    const original = items.reduce((sum, i) => sum + (i.originalPrice || i.price) * i.qty, 0);
    const discount = Math.round(original - totalPrice);
    if (discount === 198) checkoutUrl += '?discount=PACK3';
    else if (discount === 297) checkoutUrl += '?discount=PACK4';
    setIsLoading(true);
    window.location.href = checkoutUrl;
  };

  const savings = items.reduce((sum, i) => sum + ((i.originalPrice || i.price) - i.price) * i.qty, 0);
  const nudge = totalItems > 0 && totalItems < 3;

  return (
    <>
      <div className={`cart-backdrop${isOpen ? ' visible' : ''}`} onClick={close} aria-hidden="true" />
      <aside
        data-lenis-prevent
        className={`cart-drawer${isOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Your cart"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <header className="cart-head">
          <div>
            <p className="ed-label cart-kicker">Your order</p>
            <h2 className="cart-title">Cart{totalItems > 0 && <span> ({totalItems})</span>}</h2>
          </div>
          <button ref={closeRef} type="button" className="cart-close" onClick={close} aria-label="Close cart">
            <X size={18} strokeWidth={1.6} />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p className="cart-empty-title">Nothing here yet.</p>
            <p className="cart-empty-text">Pick a place to carry.</p>
            <button type="button" className="pill-link" onClick={() => goTo('collection')}>
              See the collection <span className="pill-link-dot" aria-hidden="true" />
            </button>
            <button type="button" className="text-link cart-quiz" onClick={() => goTo('quiz')}>Not sure? Take the quiz</button>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {items.map((item, i) => (
                <li key={item.id} className={`cart-item${removing === item.id ? ' is-removing' : ''}`} style={{ '--i': i }}>
                  <div className="cart-item-media" style={{ background: item.gradientFrom }}>
                    {item.image && <img src={item.image} alt="" />}
                  </div>
                  <div className="cart-item-body">
                    <div className="cart-item-top">
                      <div>
                        <p className="cart-item-name">{item.name}</p>
                        <p className="ed-label cart-item-sub">{item.size}</p>
                      </div>
                      <p className="cart-item-price">
                        {item.originalPrice && item.originalPrice !== item.price && (
                          <s>{item.currency}{(item.originalPrice * item.qty).toLocaleString()}</s>
                        )}
                        {item.currency}{(item.price * item.qty).toLocaleString()}
                      </p>
                    </div>
                    <div className="cart-item-bottom">
                      <div className="qty" role="group" aria-label={`Quantity of ${item.name}`}>
                        <button type="button" onClick={() => (item.qty > 1 ? updateQty(item.id, item.qty - 1) : remove(item.id))} aria-label="Decrease quantity">−</button>
                        <span aria-live="polite">{item.qty}</span>
                        <button type="button" onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase quantity">+</button>
                      </div>
                      <button type="button" className="cart-remove" onClick={() => remove(item.id)}>Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {nudge && (
              <Link to="/combos" className="cart-nudge" onClick={close}>
                <span className="ed-label">Build a box</span>
                <span>Any three scents are ₹899, all four ₹1,099.</span>
              </Link>
            )}

            <footer className="cart-foot">
              {savings > 0 && (
                <div className="cart-row"><span className="ed-label">You save</span><span>₹{savings.toLocaleString()}</span></div>
              )}
              <div className="cart-row cart-row--total">
                <span className="ed-label">Total</span>
                <span className="cart-total">₹{totalPrice.toLocaleString()}</span>
              </div>
              <p className="cart-note">Shipping calculated at checkout.</p>
              <button type="button" className="pill-link cart-checkout" onClick={handleCheckout} disabled={isLoading}>
                {isLoading ? 'Taking you to checkout…' : <>Checkout · ₹{totalPrice.toLocaleString()} <span className="pill-link-dot" aria-hidden="true" /></>}
              </button>
              <button type="button" className="text-link cart-continue" onClick={close}>Continue shopping</button>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}
