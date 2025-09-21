import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "厳選されたコーヒー豆",
      description: "世界中から届いた上質な豆を、スタッフみんなで丁寧に選別しています。"
    },
    {
      title: "心を込めた焙煎",
      description: "豆の個性を活かしながら、みんなで協力して焙煎作業を行っています。"
    },
    {
      title: "新鮮なドリップパック",
      description: "焙煎したての香り高いコーヒーを、すぐにパック詰めして新鮮なままお届けします。"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // 3秒後に自動再生を再開
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="title fade-in">BYSN Coffee</h1>
        <p className="subtitle slide-up">
          障害者雇用の就労支援施設で、心を込めて作ったドリップパックコーヒーです
        </p>

        <div className="slide-show" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
          <div className="slide-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="slide bounce-in">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            ))}
          </div>

          {/* スライドインジケーター */}
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="hero-actions slide-up">
          <a href="#process" className="btn-primary">製造工程を見る</a>
          <a href="#location" className="btn-secondary">製造場所を探す</a>
        </div>
      </div>

      {/* デコレーション要素 */}
      <div className="hero-decoration">
        <div className="floating-coffee-bean coffee-bean-1">☕</div>
        <div className="floating-coffee-bean coffee-bean-2">🌰</div>
        <div className="floating-coffee-bean coffee-bean-3">☕</div>
      </div>
    </section>
  );
};

export default HeroSection;
