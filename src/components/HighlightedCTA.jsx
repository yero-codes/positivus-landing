import React from 'react';
import './HighlightedCTA.css';
import ctaImage from '../assets/cta-image.png';

const HighlightedCTA = ({ onGetStarted }) => {
  return (
    <section className="highlighted-cta">
      <div className="cta-container">
        {/* Левая часть - картинка (пока заглушка) */}
        <div className="cta-image">
        <img src={ctaImage} alt="Landing Page UI Kit" className="cta-img" />
        </div>

        {/* Правая часть - текст и кнопка */}
        <div className="cta-content">
          <h2>Get Landing Page UI Kit Today!</h2>
          <p>Break the Figma limits and explore the endless possibilities with Anima.</p>
          <button className="btn-cta" onClick={onGetStarted}>Get Started →</button>
        </div>
      </div>
    </section>
  );
};

export default HighlightedCTA;