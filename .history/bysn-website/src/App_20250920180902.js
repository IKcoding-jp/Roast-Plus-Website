import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import LocationSection from './components/LocationSection';
import StaffSection from './components/StaffSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProcessSection />
      <LocationSection />
      <StaffSection />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default App;
