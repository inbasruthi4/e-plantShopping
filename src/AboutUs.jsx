import { Leaf, Sun, HeartHandshake } from 'lucide-react';

export default function AboutUs() {
  return (
    <main className="container page-section">
      <div className="eyebrow"><Leaf size={16} /> OUR ROOTS</div>
      <h1 className="page-title">A little more green, <em>a little more joy.</em></h1>
      <p className="page-intro">Paradise Nursery helps make plant parenthood feel simple, joyful, and part of everyday life.</p>
      <div className="about-grid">
        <article className="about-card"><span className="feature-icon"><Leaf /></span><h3>Grown with care</h3><p>We choose beautiful plants that bring texture, calm, and life into your home.</p></article>
        <article className="about-card"><span className="feature-icon"><Sun /></span><h3>For every space</h3><p>From a sunny windowsill to a quiet corner, there is a plant for your space.</p></article>
        <article className="about-card"><span className="feature-icon"><HeartHandshake /></span><h3>Here to help</h3><p>Our goal is to make choosing and caring for your plants feel approachable.</p></article>
      </div>
    </main>
  );
}