import { useDispatch, useSelector } from 'react-redux';
import { Leaf, ShoppingBag } from 'lucide-react';
import { addToCart } from './CartSlice.js';
import { plants } from './plants.js';

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector((state) => state.cart.items.some((item) => item.id === plant.id));

  return (
    <article className="plant-card">
      <div className="plant-image-wrap">
        <img src={plant.image} alt={plant.name} className="plant-image" loading="lazy"
          onError={(event) => { event.currentTarget.src = 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80'; }} />
        <span className="plant-tag">{plant.category.replace(' Plants', '')}</span>
      </div>
      <div className="plant-info">
        <h3>{plant.name}</h3>
        <p>{plant.description}</p>
        <div className="plant-card-bottom">
          <strong>₹{plant.price}</strong>
          <button className={`button ${inCart ? 'button-added' : 'button-small'}`} disabled={inCart}
            onClick={() => dispatch(addToCart(plant))}>
            {inCart ? 'Added ✓' : <><ShoppingBag size={15} /> Add to cart</>}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ProductList() {
  const categories = ['Aromatic Plants', 'Medicinal Plants'];
  return (
    <main className="container page-section">
      <div className="eyebrow"><Leaf size={16} /> THE GREENHOUSE</div>
      <h1 className="page-title">Find your <em>happy place.</em></h1>
      <p className="page-intro">Thoughtfully chosen greens to make your everyday spaces feel more alive.</p>
      {categories.map((category) => (
        <section className="plant-section" key={category}>
          <div className="section-heading"><div><span className="section-kicker">SHOP BY COLLECTION</span><h2>{category}</h2></div><span className="section-count">{plants.filter((p) => p.category === category).length} plants</span></div>
          <div className="plant-grid">{plants.filter((plant) => plant.category === category).map((plant) => <PlantCard key={plant.id} plant={plant} />)}</div>
        </section>
      ))}
    </main>
  );
}