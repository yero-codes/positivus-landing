import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Заполните все поля');
      return;
    }
    alert(`Спасибо, ${name}! Мы свяжемся с вами.`);
    setName('');
    setEmail('');
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        {/* Заголовок */}
        <div className="contact-header">
          <h2>Let's get in touch!</h2>
          <p>Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly support.</p>
        </div>

        <div className="contact-content">
          {/* Левая часть - контакты */}
          <div className="contact-details">
            <div className="contact-item">
              <span>📞</span> +012 345 6789
            </div>
            <div className="contact-item">
              <span>✉️</span> Hello@animaapp.com
            </div>
            
            <div className="connect-with-us">
              <h3>Connect with us</h3>
              <div className="social-icons">
                <span>📸</span>
                <span>💼</span>
                <span>🐦</span>
              </div>
            </div>
          </div>

          {/* Правая часть - форма */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Full Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;