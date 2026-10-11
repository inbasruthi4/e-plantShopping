import { Minus, Plus, Trash2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from './CartSlice.js';

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img className="cart-thumb" src={item.image} alt={item.name}
        onError={(event) => { event.currentTarget.src = 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&q=80'; }} />
      <div className="cart-item-details">
        <span className="section-kicker">{item.category}</span>
        <h3>{item.name}</h3>
        <p className="muted">₹{item.price} each</p>
        <button className="delete-button" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={15} /> Remove</button>
      </div>
      <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
        <button aria-label="Decrease quantity" disabled={item.quantity <= 1} onClick={() => dispatch(decreaseQuantity(item.id))}><Minus size={15} /></button>
        <span>{item.quantity}</span>
        <button aria-label="Increase quantity" onClick={() => dispatch(increaseQuantity(item.id))}><Plus size={15} /></button>
      </div>
      <strong className="item-subtotal">₹{item.price * item.quantity}</strong>
    </article>
  );
}