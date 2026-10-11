import { Leaf, ShoppingBag } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <NavLink to="/" className="brand" aria-label="Paradise Nursery home">
          <span className="brand-mark"><Leaf size={22} /></span>
          <span>paradise<span className="brand-light"> nursery</span></span>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/plants">Plants</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/cart" className="cart-link"><ShoppingBag size={19} /> Cart <span className="cart-badge">{count}</span></NavLink>
        </div>
      </nav>
    </header>
  );
}