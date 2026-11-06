import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Start monitoring your website like a pro</h1>
        <p>Get a bird's eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!</p>
        
        <div className="hero-buttons">
          <button className="btn-primary">Try for free</button>
          <button className="btn-secondary">View Pricing</button>
        </div>
      </div>

      {/* Блок для картинки справа (пока пустой) */}
      <div className="hero-image">
        {/* Сюда мы вставим картинку из Figma */}
        <div className="image-placeholder">Здесь будет картинка</div>
      </div>
    </section>
  );
};

export default Hero;