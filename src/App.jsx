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
import HighlightedCTA2 from './components/HighlightedCTA2';
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
      <HighlightedCTA2 />
    </div>
  );
}

export default App;