import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.png';

const Hero = ({ onGetStarted }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Create Engaging Landing Pages</h1>
        <p>Build beautiful landing pages in record time with Anima's Landing Page UI Kit for Figma. No code required!</p>
        
        <div className="hero-buttons">
          <button className="btn-primary" onClick={onGetStarted}>Get Started</button>
          <button className="btn-secondary">How it works</button>
        </div>
      </div>

      {/* Блок для картинки справа (пока пустой) */}
      <div className="hero-image">
        {/* Сюда мы вставим картинку из Figma */}
        <img src={heroImage} alt="Dashboard preview" className="hero-img" />
      </div>
    </section>
  );
};

export default Hero;