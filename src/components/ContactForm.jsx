import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    // Просто показываем сообщение, никуда не отправляем
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="contact-section">
        <div className="contact-card" style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h2 style={{ color: '#009379', marginBottom: '20px' }}>Спасибо!</h2>
          <p>Это демонстрационная форма. В реальном проекте здесь была бы отправка данных.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section">
      <div className="contact-card">
        <div className="contact-header">
          <h2>Let's get in touch!</h2>
          <p>Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly support.</p>
        </div>

        <div className="contact-content">
          <div className="contact-details">
            <div className="contact-item"><span>📞</span> +012 345 6789</div>
            <div className="contact-item"><span>✉️</span> Hello@animaapp.com</div>
            <div className="connect-with-us">
              <h3>Connect with us</h3>
              <div className="social-icons"><span>📸</span><span>💼</span><span>🐦</span></div>
            </div>
          </div>

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