import React, { useState } from 'react';
import './GallerySection.css';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  // サンプル画像データ（実際の画像パスに置き換え可能）
  const galleryImages = [
    {
      id: 1,
      category: 'beans',
      title: '厳選コーヒー豆',
      description: '世界中から集められた最高品質の豆',
      src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" style="background: linear-gradient(135deg, %238B4513, %23D2B48C);"><rect width="400" height="300" fill="url(%23grad)"/><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23A0522D;stop-opacity:1" /><stop offset="100%" style="stop-color:%23F5F5DC;stop-opacity:1" /></linearGradient></defs><circle cx="200" cy="150" r="80" fill="%23654321" opacity="0.3"/><text x="200" y="160" text-anchor="middle" fill="%23FFF" font-size="18" font-family="serif">Coffee Beans</text></svg>',
      alt: '厳選されたコーヒー豆'
    },
    {
      id: 2,
      category: 'roasting',
      title: '焙煎工程',
      description: '職人による丁寧な焙煎作業',
      src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" style="background: linear-gradient(135deg, %23FF6B35, %23F7931E);"><rect width="400" height="300" fill="url(%23grad)"/><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23FF8C42;stop-opacity:1" /><stop offset="100%" style="stop-color:%23FFA726;stop-opacity:1" /></linearGradient></defs><circle cx="200" cy="150" r="60" fill="%23D84315" opacity="0.6"/><text x="200" y="160" text-anchor="middle" fill="%23FFF" font-size="18" font-family="serif">Roasting</text></svg>',
      alt: '焙煎工程の様子'
    },
    {
      id: 3,
      category: 'packing',
      title: 'パック詰め作業',
      description: '新鮮さを保つ丁寧なパック詰め',
      src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" style="background: linear-gradient(135deg, %23D2B48C, %23FDF5E6);"><rect width="400" height="300" fill="url(%23grad)"/><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23DEB887;stop-opacity:1" /><stop offset="100%" style="stop-color:%23F5F5DC;stop-opacity:1" /></linearGradient></defs><rect x="150" y="100" width="100" height="80" rx="10" fill="%23A0522D" opacity="0.7"/><text x="200" y="160" text-anchor="middle" fill="%233C2414" font-size="16" font-family="serif">Packing</text></svg>',
      alt: 'パック詰め作業'
    },
    {
      id: 4,
      category: 'factory',
      title: '製造工場',
      description: '清潔で近代的な製造環境',
      src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" style="background: linear-gradient(135deg, %23E8E8E8, %23F5F5F5);"><rect width="400" height="300" fill="url(%23grad)"/><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23F0F0F0;stop-opacity:1" /><stop offset="100%" style="stop-color:%23FFFFFF;stop-opacity:1" /></linearGradient></defs><rect x="50" y="150" width="300" height="100" fill="%23B0B0B0" opacity="0.5"/><rect x="100" y="100" width="50" height="50" fill="%236B6B6B" opacity="0.6"/><rect x="250" y="100" width="50" height="50" fill="%236B6B6B" opacity="0.6"/><text x="200" y="270" text-anchor="middle" fill="%23333" font-size="16" font-family="serif">Factory</text></svg>',
      alt: '製造工場の内観'
    },
    {
      id: 5,
      category: 'product',
      title: '完成品',
      description: '美しくパッケージされたドリップパック',
      src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" style="background: linear-gradient(135deg, %23DAA520, %23FFD700);"><rect width="400" height="300" fill="url(%23grad)"/><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23DAA520;stop-opacity:1" /><stop offset="100%" style="stop-color:%23FFE55C;stop-opacity:1" /></linearGradient></defs><rect x="160" y="120" width="80" height="60" rx="5" fill="%23B8860B" opacity="0.8"/><text x="200" y="160" text-anchor="middle" fill="%23FFF" font-size="14" font-family="serif">Product</text></svg>',
      alt: '完成したドリップパック'
    },
    {
      id: 6,
      category: 'staff',
      title: 'スタッフ',
      description: 'コーヒー作りに情熱を注ぐスタッフたち',
      src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" style="background: linear-gradient(135deg, %23FFDBAC, %23F4A460);"><rect width="400" height="300" fill="url(%23grad)"/><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23FFE4B5;stop-opacity:1" /><stop offset="100%" style="stop-color:%23DEB887;stop-opacity:1" /></linearGradient></defs><circle cx="200" cy="120" r="40" fill="%23D2B48C" opacity="0.6"/><rect x="170" y="160" width="60" height="80" rx="10" fill="%23A0522D" opacity="0.7"/><text x="200" y="270" text-anchor="middle" fill="%233C2414" font-size="16" font-family="serif">Staff</text></svg>',
      alt: 'スタッフの作業風景'
    }
  ];

  const categories = [
    { id: 'all', name: 'すべて', icon: '📸' },
    { id: 'beans', name: 'コーヒー豆', icon: '🌰' },
    { id: 'roasting', name: '焙煎', icon: '🔥' },
    { id: 'packing', name: 'パック詰め', icon: '📦' },
    { id: 'factory', name: '工場', icon: '🏭' },
    { id: 'product', name: '製品', icon: '☕' },
    { id: 'staff', name: 'スタッフ', icon: '👥' }
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="section">
        <h2 className="title">ギャラリー</h2>
        <p className="subtitle">製造現場や製品の写真をご覧いただけます</p>

        {/* カテゴリフィルター */}
        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-name">{category.name}</span>
            </button>
          ))}
        </div>

        {/* ギャラリーグリッド */}
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => openLightbox(image)}
            >
              <div className="gallery-image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h3 className="gallery-title">{image.title}</h3>
                    <p className="gallery-description">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ライトボックス */}
        {lightboxImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>×</button>
              <img src={lightboxImage.src} alt={lightboxImage.alt} className="lightbox-image" />
              <div className="lightbox-info">
                <h3 className="lightbox-title">{lightboxImage.title}</h3>
                <p className="lightbox-description">{lightboxImage.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* ギャラリー情報 */}
        <div className="gallery-info card">
          <h3 className="info-title">写真について</h3>
          <p className="info-text">
            これらの写真は、BYSNの製造工程や製品、スタッフの様子を撮影したものです。
            実際の製造現場の様子をありのままにお伝えしています。
            画像は定期的に更新され、より良いものに改善してまいります。
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
