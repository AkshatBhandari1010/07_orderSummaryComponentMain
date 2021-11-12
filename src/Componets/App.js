import React from 'react';
import './App.css';
import DetailSection from './DetailSection';
import HeroSection from './HeroSection';

function App() {
  return (
    <div className="bodyContainer">
      <div className="outerContainer">
      <HeroSection></HeroSection>
      <DetailSection></DetailSection>
    </div>
    </div>
  );
}

export default App;
