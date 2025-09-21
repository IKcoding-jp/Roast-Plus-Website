import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* 会社情報 */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-b">B</span>
              <span className="logo-ysn">YSN</span>
              <span className="logo-coffee">☕</span>
            </div>
            <p className="footer-description">
              障害者雇用の就労支援施設で働くスタッフが、
              心を込めて作っているドリップパックコーヒーです。
              みんなの想いが詰まった一杯をお楽しみください。
            </p>
            <div className="footer-social">
              <a href="https://www.start-line.jp/" className="social-link" target="_blank" rel="noopener noreferrer">🌐 スタートライン</a>
              <a href="https://www.minitt.jp/" className="social-link" target="_blank" rel="noopener noreferrer">🏢 ミニット</a>
            </div>
          </div>

          {/* BYSNについて */}
          <div className="footer-section">
            <h3 className="footer-title">BYSNについて</h3>
            <div className="footer-links">
              <a href="#process">製造工程</a>
              <a href="#location">製造場所</a>
              <a href="#staff">スタッフの声</a>
              <a href="#gallery">作業の様子</a>
            </div>
          </div>

          {/* 私たちの仕事 */}
          <div className="footer-section">
            <h3 className="footer-title">私たちの仕事</h3>
            <div className="footer-links">
              <a href="#process">日々の作業</a>
              <a href="#staff">チームワーク</a>
              <a href="#location">作業環境</a>
              <a href="#gallery">作業の記録</a>
            </div>
          </div>

          {/* 参考情報 */}
          <div className="footer-section">
            <h3 className="footer-title">参考情報</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">🌐</span>
                <div>
                  <p className="contact-label">運営会社</p>
                  <p className="contact-value">株式会社スタートライン<br />ミニット・アジア・パシフィック</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <p className="contact-label">施設</p>
                  <p className="contact-value">埼玉県飯能市南町7-17</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">👥</span>
                <div>
                  <p className="contact-label">運営形態</p>
                  <p className="contact-value">障害者雇用の<br />就労支援施設</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">☕</span>
                <div>
                  <p className="contact-label">主な作業</p>
                  <p className="contact-value">ドリップパック<br />コーヒーの製造</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* フッター下部 */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 BYSN Coffee Co., Ltd. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy">プライバシーポリシー</a>
              <a href="#terms">利用規約</a>
              <a href="#cookies">Cookieポリシー</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
