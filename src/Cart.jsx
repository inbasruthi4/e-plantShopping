import { useState } from 'react';
import { ArrowLeft, CheckCircle2, Leaf, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from "./CartItem.jsx";
import { clearCart } from './CartSlice.js';

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [checkedOut, setCheckedOut] = useState(false);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function checkout() {
    setCheckedOut(true);
    dispatch(clearCart());
  }

  if (checkedOut) {
    return <main className="container page-section"><div className="success-panel"><CheckCircle2 size={54} /><h1>Thank you for your order!</h1><p>Your little green friends are getting ready for their new home.</p><Link className="button" to="/plants" onClick={() => setCheckedOut(false)}>Continue exploring</Link></div></main>;
  }

  return (
    <main className="container page-section">
      <div className="eyebrow"><ShoppingBag size={16} /> YOUR BASKET</div>
      <h1 className="page-title">A little green <em>on its way.</em></h1>
      {items.length === 0 ? (
        <div className="empty-cart"><span className="empty-icon"><Leaf size={32} /></span><h2>Your cart is taking a little breather.</h2><p>Find a plant that makes you smile and it will show up here.</p><Link to="/plants" className="button">Explore plants <ArrowLeft size={17} /></Link></div>
      ) : (
        <div className="cart-layout">
          <section className="cart-list">
            <div className="cart-list-heading"><span>{totalQuantity} item{totalQuantity !== 1 ? 's' : ''} in your cart</span><Link to="/plants">Keep browsing</Link></div>
            {items.map((item) => <CartItem key={item.id} item={item} />)}
          </section>
          <aside className="order-summary">
            <span className="section-kicker">YOUR ORDER</span><h2>Order summary</h2>
            <div className="summary-line"><span>Items ({totalQuantity})</span><span>₹{totalPrice}</span></div>
            <div className="summary-line"><span>Delivery</span><span className="free-label">FREE</span></div>
            <div className="summary-line total-line"><strong>Total</strong><strong>₹{totalPrice}</strong></div>
            <p className="summary-note">Plants make everything a little better. Delivery is on us.</p>
            <button className="button checkout-button" onClick={checkout}>Checkout <span>→</span></button>
            <Link className="continue-link" to="/plants"><ArrowLeft size={15} /> Continue shopping</Link>
          </aside>
        </div>
      )}
    </main>
  );
}