import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import LocationSection from './components/LocationSection';
import StaffSection from './components/StaffSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProcessSection />
      <LocationSection />
      <StaffSection />

      <section id="gallery" className="section" style={{background: 'var(--warm-white)'}}>
        <div className="card text-center">
          <h2 className="title">ギャラリー</h2>
          <p className="subtitle">製造現場や製品の写真をご覧いただけます</p>
          <div className="btn-primary" style={{marginTop: '30px'}}>写真を見る</div>
        </div>
      </section>
    </div>
  );
}

export default App;
