import React from 'react';
import './StaffSection.css';

const StaffSection = () => {
  const staffVoices = [
    {
      message: "今日も丁寧に作業を進めています。コーヒー豆一つ一つに想いを込めて。",
      icon: "☕",
      theme: "丁寧さ"
    },
    {
      message: "チームで協力しながらコーヒーを作っています。一緒に頑張る仲間がいることが嬉しいです。",
      icon: "🤝",
      theme: "協力"
    },
    {
      message: "毎日の仕事を通じて、少しずつ成長を感じています。お客様に喜んでいただけることが何よりの励みです。",
      icon: "🌱",
      theme: "成長"
    },
    {
      message: "コーヒーの香りに囲まれて仕事ができる幸せを感じています。心を込めて、今日も一袋一袋。",
      icon: "💝",
      theme: "想い"
    }
  ];

  const testimonials = [
    {
      name: "コーヒー好きのAさん",
      rating: 5,
      message: "BYSNのドリップパックに出会ってから、毎朝のコーヒータイムが楽しみになりました。本格的な味わいに感動！",
      location: "東京都"
    },
    {
      name: "オフィスワーカーBさん",
      rating: 5,
      message: "職場で飲むのにぴったり。香りが良くて、午後の仕事も頑張れます。パックが個包装なのも便利。",
      location: "大阪府"
    },
    {
      name: "主婦Cさん",
      rating: 5,
      message: "家事の合間に飲むのに最適。豆から挽く手間がなく、いつも新鮮なコーヒーが飲めるのが嬉しいです。",
      location: "福岡県"
    }
  ];

  return (
    <section id="staff" className="staff-section">
      <div className="section">
        <h2 className="title">スタッフの声</h2>
        <p className="subtitle">BYSNで一緒に働いている仲間たちの想いを紹介します</p>

        {/* スタッフの声 */}
        <div className="staff-voices-grid">
          {staffVoices.map((voice, index) => (
            <div key={index} className="staff-voice-card slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="voice-header">
                <div className="voice-icon">{voice.icon}</div>
                <div className="voice-theme">{voice.theme}</div>
              </div>
              <div className="voice-message">
                <p>{voice.message}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 試飲感想 */}
        <div className="testimonials-section">
          <h3 className="testimonials-title">お客様の声</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card slide-up" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="testimonial-header">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <span className="testimonial-location">{testimonial.location}</span>
                </div>
                <p className="testimonial-message">{testimonial.message}</p>
                <div className="testimonial-author">— {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* メッセージ */}
        <div className="staff-message-card card">
          <h3 className="message-title">お客様へのメッセージ</h3>
          <p className="message-text">
            私たちBYSNのスタッフは、一杯のコーヒーに心を込めて製造しています。
            厳選された豆から丁寧な工程を経て、あなたの元へお届けします。
            毎日のコーヒータイムが、ちょっと特別な時間になりますように。
          </p>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
