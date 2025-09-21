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

          {/* お客様サポート */}
          <div className="footer-section">
            <h3 className="footer-title">お客様サポート</h3>
            <div className="footer-links">
              <a href="#faq">よくある質問</a>
              <a href="#contact">お問い合わせ</a>
              <a href="#returns">返品について</a>
              <a href="#shipping">配送について</a>
              <a href="#quality">品質保証</a>
            </div>
          </div>

          {/* 連絡先情報 */}
          <div className="footer-section">
            <h3 className="footer-title">連絡先</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <p className="contact-label">住所</p>
                  <p className="contact-value">東京都渋谷区神南1-2-3<br />BYSNビル 3F</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <p className="contact-label">電話</p>
                  <p className="contact-value">03-1234-5678</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <p className="contact-label">メール</p>
                  <p className="contact-value">info@bysn-coffee.jp</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div>
                  <p className="contact-label">営業時間</p>
                  <p className="contact-value">平日 9:00-18:00</p>
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
