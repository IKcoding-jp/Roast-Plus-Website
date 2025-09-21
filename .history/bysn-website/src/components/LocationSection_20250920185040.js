import React from 'react';
import './LocationSection.css';

const LocationSection = () => {
  const locations = [
    {
      name: "株式会社スタートライン BYSN HANNO ROASTERY",
      address: "〒357-0036 埼玉県飯能市南町７−１７",
      phone: "042-123-4567",
      hours: "平日 9:00-18:00",
      description: "BYSNコーヒーの製造を行う施設です。厳選されたコーヒー豆から丁寧な焙煎、パック詰めまで一貫して行っています。",
      features: ["焙煎設備", "パック詰めライン", "品質検査室", "豆保管庫"],
      icon: "🏭"
    }
  ];

  return (
    <section id="location" className="location-section">
      <div className="section">
        <h2 className="title">製造場所</h2>
        <p className="subtitle">私たちのコーヒーが生まれる場所をご案内します</p>

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

        {/* アクセス情報 */}
        <div className="access-info card">
          <h3 className="access-title">アクセス情報</h3>
          <div className="access-grid">
            <div className="access-item">
              <h4>🚆 電車でお越しの場合</h4>
              <p>西武池袋線 飯能駅から徒歩15分、またはバスで5分です。</p>
            </div>
            <div className="access-item">
              <h4>🚗 お車でお越しの場合</h4>
              <p>専用駐車場をご用意しております。お気軽にお越しください。</p>
            </div>
            <div className="access-item">
              <h4>👥 施設見学について</h4>
              <p>事前予約制で施設見学を承っております。ご希望の方はお電話ください。</p>
            </div>
            <div className="access-item">
              <h4>📧 お問い合わせ</h4>
              <p>見学やお問い合わせは下記電話番号までお気軽にご連絡ください。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
