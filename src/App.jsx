import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import Features from './components/Features';
import Metrics from './components/Metrics';
import HighlightedCTA from './components/HighlightedCTA';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Team from './components/Team';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LogoBar />
      <Features /> 
      <Metrics />
      <HighlightedCTA />
      <Testimonials />
      <Pricing />
      <Team />
    </div>
  );
}

export default App;