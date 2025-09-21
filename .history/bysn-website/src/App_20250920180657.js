import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import LocationSection from './components/LocationSection';
import StaffSection from './components/StaffSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />

      {/* プレビュー用の追加セクション */}
      <section id="process" className="section">
        <div className="card text-center">
          <h2 className="title">製造工程</h2>
          <p className="subtitle">BYSNドリップパックの製造工程を詳しくご紹介します</p>
          <div className="btn-primary" style={{marginTop: '30px'}}>詳細を見る</div>
        </div>
      </section>

      <section id="location" className="section" style={{background: 'var(--warm-white)'}}>
        <div className="card text-center">
          <h2 className="title">製造場所</h2>
          <p className="subtitle">私たちのコーヒーが生まれる場所をご案内します</p>
          <div className="btn-primary" style={{marginTop: '30px'}}>地図を見る</div>
        </div>
      </section>

      <section id="staff" className="section">
        <div className="card text-center">
          <h2 className="title">スタッフの声</h2>
          <p className="subtitle">製造に携わるスタッフたちの想いをお伝えします</p>
          <div className="btn-primary" style={{marginTop: '30px'}}>スタッフ紹介</div>
        </div>
      </section>

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
