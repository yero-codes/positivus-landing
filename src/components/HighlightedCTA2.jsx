import React from 'react';
import './HighlightedCTA2.css';
import ctaBanner from '../assets/cta-banner.png'; // Проверьте имя файла!

const HighlightedCTA2 = ({ onGetStarted }) => {
  return (
    <section className="cta-banner-section">
      <div className="cta-banner-container">
        {/* Левая часть с текстом */}
        <div className="cta-banner-content">
          <h2>Get Landing Page UI Kit Today!</h2>
          <p>Break the Figma limits and explore the endless possibilities with Anima.</p>
          <button className="btn-cta-banner" onClick={onGetStarted}>Get Started →</button>
        </div>

        {/* Правая часть с картинкой */}
        <div className="cta-banner-image">
          <img src={ctaBanner} alt="Landing Page UI Kit" />
        </div>
      </div>
    </section>
  );
};

export default HighlightedCTA2;