import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Логотип (текстовый или картинка) */}
      <div className="logo">Positivus</div>
      
      {/* Ссылки навигации */}
      <ul className="nav-links">
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Enterprise</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      
      {/* Кнопки справа (Вход/Регистрация) */}
      <div className="nav-buttons">
        <button className="btn-login">Sign In</button>
        <button className="btn-register">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;