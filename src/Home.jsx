import { ArrowRight, Leaf, Sprout, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-image" role="img" aria-label="Sunlit indoor plants" />
        <div className="hero-overlay" />
        <div className="hero-content container">
          <div className="eyebrow eyebrow-light"><Leaf size={16} /> BRING NATURE HOME</div>
          <h1>Make room for<br /><em>something growing.</em></h1>
          <p>Beautiful plants. Slower moments. A happier home starts with a little green.</p>
          <Link className="button button-hero" to="/plants">Explore our plants <ArrowRight size={18} /></Link>
          <div className="hero-note"><Sprout size={17} /> Carefully chosen plants for everyday living</div>
        </div>
      </section>
      <section className="container home-values">
        <div><span className="feature-icon"><Leaf /></span><div><h3>Bring your space to life</h3><p>Easy ways to make home feel a little more natural.</p></div></div>
        <div><span className="feature-icon"><Sun /></span><div><h3>Find your kind of green</h3><p>From fragrant herbs to leafy companions.</p></div></div>
        <div><span className="feature-icon"><Sprout /></span><div><h3>Grow at your own pace</h3><p>Start small and enjoy every new leaf.</p></div></div>
      </section>
      <section className="home-cta">
        <div className="container home-cta-inner"><div><span className="section-kicker">YOUR NEXT LITTLE JOY</span><h2>There's a plant with your name on it.</h2></div><Link to="/plants" className="button">Find your plant <ArrowRight size={17} /></Link></div>
      </section>
    </main>
  );
}