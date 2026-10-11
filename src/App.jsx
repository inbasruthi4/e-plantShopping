import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import ProductList from './ProductList.jsx';
import AboutUs from './AboutUs.jsx';
import Cart from './Cart.jsx';

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><span className="footer-brand">paradise nursery <span>✳</span></span><span>Grow a little happiness every day.</span><span>© {new Date().getFullYear()} Paradise Nursery</span></div></footer>;
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}