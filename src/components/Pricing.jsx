import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing-header">
        <h2>Pick Your Perfect Plan</h2>
        <p>Find the perfect plan for your business with our flexible pricing options.</p>
      </div>

      <div className="pricing-grid">
        {/* Карточка 1 (Белая) */}
        <div className="pricing-card">
          <h3>Free</h3>
          <div className="price">$0 <span>/ month</span></div>
          <p className="plan-desc">Best for Small Teams or Individuals.</p>
          <ul className="features-list">
            <li>✓ Write feature details here</li>
            <li>✓ Write feature details here</li>
            <li>✓ Write feature details here</li>
          </ul>
          <button className="btn-pricing outline">Get Started</button>
        </div>

        {/* Карточка 2 (Белая) */}
        <div className="pricing-card">
          <h3>Professional</h3>
          <div className="price">$19 <span>/ month</span></div>
          <p className="plan-desc">Ideal for Growing Companies.</p>
          <ul className="features-list">
            <li>✓ Write feature details here</li>
            <li>✓ Write feature details here</li>
            <li>✓ Write feature details here</li>
          </ul>
          <button className="btn-pricing outline">Get Started</button>
        </div>

        {/* Карточка 3 (Зеленая, выделенная) */}
        <div className="pricing-card highlighted">
          <h3>Enterprise</h3>
          <div className="price">$49 <span>/ month</span></div>
          <p className="plan-desc">Ultimate for Enterprise Solutions.</p>
          <ul className="features-list">
            <li>✓ Write feature details here</li>
            <li>✓ Write feature details here</li>
            <li>✓ Write feature details here</li>
          </ul>
          <button className="btn-pricing solid">Get Started →</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;