import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "厳選されたコーヒー豆",
      description: "世界中から集められた最高品質の豆を、一粒一粒丁寧に選別します。"
    },
    {
      title: "職人による焙煎",
      description: "経験豊富なロースターが、豆の個性を最大限に引き出す焙煎を施します。"
    },
    {
      title: "新鮮なドリップパック",
      description: "焙煎したてのコーヒーを、すぐにパック詰め。お家で本格的な味わいを。"
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
          プレミアムドリップパックで、本格的なコーヒー体験を
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
