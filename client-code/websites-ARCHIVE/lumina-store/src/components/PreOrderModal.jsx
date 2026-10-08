import { useState } from 'react';
import { X, CheckCircle, Loader } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './PreOrderModal.css';

export default function PreOrderModal({ onClose, onSuccess }) {
  const { items, totalPrice, dispatch } = useCart();
  const [status, setStatus] = useState('form'); // form | loading | success
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call / pre-order processing
    await new Promise(r => setTimeout(r, 1800));
    dispatch({ type: 'CLEAR_CART' });
    setStatus('success');
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="preorder-modal-box animate-fade-in">
        <button className="preorder-modal-close" onClick={onClose} aria-label="Close"><X size={18} /></button>

        {status === 'form' && (
          <>
            <div className="preorder-modal-header">
              <h2>Confirm Order</h2>
              <p>We will confirm your order before dispatch.</p>
            </div>

            {/* Order Summary */}
            <div className="preorder-modal-summary">
              {items.map(item => (
                <div key={item.id} className="preorder-modal-line">
                  <span>{item.name} × {item.qty}</span>
                  <span>{item.currency}{(item.price * item.qty).toLocaleString()}</span>
                </div>
              ))}
              <div className="preorder-modal-total">
                <span>Total</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <form className="preorder-modal-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="po-name">Full Name</label>
                  <input id="po-name" name="name" required placeholder="Your name" value={form.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="po-phone">Phone</label>
                  <input id="po-phone" name="phone" required placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="po-email">Email Address</label>
                <input id="po-email" name="email" type="email" required placeholder="you@email.com" value={form.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="po-address">Delivery Address</label>
                <textarea id="po-address" name="address" required placeholder="Full delivery address" rows={3} value={form.address} onChange={handleChange} />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem', padding: '1rem' }}>
                Place Order
              </button>
            </form>
          </>
        )}

        {status === 'loading' && (
          <div className="preorder-modal-loading">
            <Loader size={40} className="spin" />
            <p>Processing your order...</p>
          </div>
        )}

        {status === 'success' && (
          <div className="preorder-modal-success">
            <CheckCircle size={56} className="success-icon" />
            <h2>Order Placed Successfully!</h2>
            <p>Thank you! We've received your order and will be in touch on your email to confirm details before shipping.</p>
            <button className="btn-primary" onClick={onSuccess} style={{ marginTop: '1.5rem', padding: '1rem' }}>
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
