import React from 'react';
import './LogoBar.css';

const LogoBar = () => {
  return (
    <section className="logo-bar">
      <div className="logo-container">
        <span className="logo-item">airbnb</span>
        <span className="logo-item">Google</span>
        <span className="logo-item">amazon</span>
        <span className="logo-item">Microsoft</span>
        <span className="logo-item">FedEx</span>
        <span className="logo-item">HubSpot</span>
      </div>
    </section>
  );
};

export default LogoBar;