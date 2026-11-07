import React, { useState } from 'react';                
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import Features from './components/Features';
import Metrics from './components/Metrics';
import HighlightedCTA from './components/HighlightedCTA';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Team from './components/Team';
import HighlightedCTA2 from './components/HighlightedCTA2';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Modal from './components/Modal';
import './App.css';

function App() {
  // Состояние для открытия/закрытия модалки
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция для открытия модалки
  const openModal = () => setIsModalOpen(true);
  // Функция для закрытия
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      {/* Передаем openModal в Navbar и Hero, чтобы кнопки могли его вызывать */}
      <Navbar onGetStarted={openModal} />
      <Hero onGetStarted={openModal} />
      <LogoBar />
      <Features />
      <Metrics />
      <HighlightedCTA onGetStarted={openModal} />
      <HighlightedCTA2 onGetStarted={openModal} />
      <Testimonials />
      <Pricing />
      <Team />
      <ContactForm />
      <Footer />
      
      {/* Само модальное окно */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;