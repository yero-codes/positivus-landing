import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import Features from './components/Features';
import Metrics from './components/Metrics';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LogoBar />
      <Features /> 
      <Metrics />
    </div>
  );
}

export default App;