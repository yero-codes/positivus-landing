import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="features-header">
        <h2>Features</h2>
        <p>These are just a few features you'll get using Anima Landing Page UI Kit.</p>
      </div>

      <div className="features-grid">
        {/* Карточка 1 */}
        <div className="feature-card">
          <div className="icon-placeholder">⚡</div> {/* Заглушка для иконки */}
          <h3>Fast building</h3>
          <p>Tailor Anima's Landing Page UI Kit to your unique style and brand with customizable components, in no time!</p>
          <a href="#" className="learn-more">Learn More →</a>
        </div>

        {/* Карточка 2 */}
        <div className="feature-card">
          <div className="icon-placeholder">📱</div>
          <h3>Responsive Design</h3>
          <p>No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile.</p>
          <a href="#" className="learn-more">Learn More →</a>
        </div>

        {/* Карточка 3 */}
        <div className="feature-card">
          <div className="icon-placeholder">🚀</div>
          <h3>No Code Needed</h3>
          <p>Zero coding skills required. Anima's Landing Page UI Kit empowers you to create stunning landing pages with ease.</p>
          <a href="#" className="learn-more">Learn More →</a>
        </div>
      </div>
    </section>
  );
};

export default Features;