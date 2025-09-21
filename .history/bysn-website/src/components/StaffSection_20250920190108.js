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
            BYSNで一緒に働いている仲間たちと、心を込めて作っているコーヒーです。
            私たちの想いが詰まった一杯を、ぜひ味わってみてください。
            毎日のコーヒータイムが、ちょっと特別な時間になりますように。
          </p>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
