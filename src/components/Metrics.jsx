import React from 'react';
import './Metrics.css';

const Metrics = () => {
  return (
    <section className="metrics">
      <div className="metrics-header">
        <h2>Our Metrics Tell the Story</h2>
        <p>Our metrics component gives you the inside scoop on your success and helps you stay on top of your game in style.</p>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <h3>10k+</h3>
          <p>Website launched</p>
        </div>
        <div className="metric-card">
          <h3>931k+</h3>
          <p>Projects created with Anima</p>
        </div>
        <div className="metric-card">
          <h3>240k+</h3>
          <p>New users joined Anima</p>
        </div>
        <div className="metric-card">
          <h3>12k+</h3>
          <p>Teams used Anima</p>
        </div>
      </div>
    </section>
  );
};

export default Metrics;