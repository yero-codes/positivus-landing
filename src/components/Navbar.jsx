import React from 'react';
import './Navbar.css';

const Navbar = ({ onGetStarted }) => {
  return (
    <nav className="navbar">
      {/* Логотип (текстовый или картинка) */}
      <div className="logo">LandingPage</div>

      {/* Ссылки навигации */}
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Кнопки справа (Вход/Регистрация) */}
      <div className="nav-buttons">
        <button className="btn-login">Sign In</button>
        <button className="btn-register" onClick={onGetStarted}>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;