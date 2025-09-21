import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // スムーズスクロール
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // モバイルメニューを閉じる
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo fade-in">
          <span className="logo-b">B</span>
          <span className="logo-ysn">YSN</span>
          <span className="logo-coffee">☕</span>
        </a>

        {/* モバイルメニュー */}
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>

        {/* ナビゲーションメニュー */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>ホーム</a>
          </div>
          <div className="nav-item">
            <a href="#process" onClick={() => setIsMenuOpen(false)}>製造工程</a>
          </div>
          <div className="nav-item">
            <a href="#location" onClick={() => setIsMenuOpen(false)}>製造場所</a>
          </div>
          <div className="nav-item">
            <a href="#staff" onClick={() => setIsMenuOpen(false)}>スタッフの声</a>
          </div>
          <div className="nav-item">
            <a href="#gallery" onClick={() => setIsMenuOpen(false)}>ギャラリー</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
