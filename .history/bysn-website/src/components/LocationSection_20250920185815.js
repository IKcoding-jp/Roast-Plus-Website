import React from 'react';
import './LocationSection.css';

const LocationSection = () => {
  const locations = [
    {
      name: "株式会社スタートライン BYSN HANNO ROASTERY",
      address: "〒357-0036 埼玉県飯能市南町７−１７",
      phone: "042-454-2730",
      hours: "平日 9:00-18:00",
      description: "BYSNコーヒーの製造を行う施設です。厳選されたコーヒー豆から丁寧な焙煎、パック詰めまで一貫して行っています。",
      features: ["焙煎設備", "パック詰め", "豆保管庫"],
      icon: "🏭"
    }
  ];

  return (
    <section id="location" className="location-section">
      <div className="section">
        <h2 className="title">製造場所</h2>
        <p className="subtitle">私たちが毎日働いているBYSNの施設について紹介します</p>

        <div className="locations-grid">
          {locations.map((location, index) => (
            <div key={index} className="location-card slide-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="location-header">
                <div className="location-icon">{location.icon}</div>
                <h3 className="location-name">{location.name}</h3>
              </div>

              <div className="location-info">
                <div className="info-item">
                  <span className="info-label">住所:</span>
                  <span className="info-value">{location.address}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">電話:</span>
                  <span className="info-value">{location.phone}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">営業時間:</span>
                  <span className="info-value">{location.hours}</span>
                </div>
              </div>

              <p className="location-description">{location.description}</p>

              <div className="location-features">
                <h4>設備・特徴</h4>
                <div className="features-list">
                  {location.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>

              <div className="location-actions">
                <a href={`tel:${location.phone}`} className="btn-phone">
                  📞 電話する
                </a>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="btn-map">
                  🗺️ 地図で見る
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 基本情報 */}
        <div className="access-info card">
          <h3 className="access-title">BYSNについて</h3>
          <div className="access-grid">
            <div className="access-item">
              <h4>🏢 施設について</h4>
              <p>埼玉県飯能市にある障害者雇用の就労支援施設です。コーヒー豆の焙煎からパック詰めまで、丁寧に作業しています。</p>
            </div>
            <div className="access-item">
              <h4>🌱 私たちの想い</h4>
              <p>障害の有無に関わらず、誰もが活躍できる職場を目指しています。一杯のコーヒーに、みんなの想いを込めてお届けします。</p>
            </div>
            <div className="access-item">
              <h4>☕ 作業内容</h4>
              <p>コーヒー豆の選別、焙煎、パック詰め、品質チェックなど、さまざまな工程でスタッフが協力して作業しています。</p>
            </div>
            <div className="access-item">
              <h4>💪 仕事のやりがい</h4>
              <p>自分の手で作ったコーヒーがお客様に届くこと、そしてチームで協力して目標を達成することに大きな喜びを感じています。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
