import React from 'react';
import './LocationSection.css';

const LocationSection = () => {
  const locations = [
    {
      name: "本社工場",
      address: "東京都渋谷区神南1-2-3 BYSNビル 3F",
      phone: "03-1234-5678",
      hours: "平日 9:00-18:00",
      description: "メインの製造工場。ドリップパックの全工程をここで行っています。",
      features: ["焙煎設備", "パック詰めライン", "品質検査室", "カフェスペース"],
      icon: "🏭"
    },
    {
      name: "焙煎工房",
      address: "神奈川県横浜市中区海岸通り4-5-6",
      phone: "045-876-5432",
      hours: "平日・土曜 8:00-17:00",
      description: "コーヒー豆の焙煎に特化した専門工房。少量多品種の焙煎に対応。",
      features: ["伝統的な焙煎機", "カッピングルーム", "豆保管庫", "試飲カウンター"],
      icon: "☕"
    },
    {
      name: "配送センター",
      address: "埼玉県川口市安行領家1234-5",
      phone: "048-901-2345",
      hours: "24時間稼働",
      description: "全国への配送を一括管理。温度・湿度管理された最新の物流施設。",
      features: ["自動倉庫システム", "温度管理庫", "高速仕分け機", "品質検査ライン"],
      icon: "🚚"
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
              <p>各工場とも最寄り駅から徒歩10分以内です。</p>
            </div>
            <div className="access-item">
              <h4>🚗 お車でお越しの場合</h4>
              <p>専用駐車場をご用意しております。</p>
            </div>
            <div className="access-item">
              <h4>👥 工場見学について</h4>
              <p>事前予約制で工場見学を承っております。</p>
            </div>
            <div className="access-item">
              <h4>📧 お問い合わせ</h4>
              <p>見学やお問い合わせは各施設まで直接お電話ください。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
