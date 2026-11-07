import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">© 2023 Anima's Landing Page UI Kit.</p>
        
        <div className="social-icons">
          <a href="#" className="social-icon">▶</a> {/* YouTube */}
          <a href="#" className="social-icon">📸</a> {/* Instagram */}
          <a href="#" className="social-icon">🐙</a> {/* GitHub */}
          <a href="#" className="social-icon">💼</a> {/* LinkedIn */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;