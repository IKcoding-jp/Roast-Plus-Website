import React from 'react';
import './StaffSection.css';

const StaffSection = () => {
  const staffMembers = [
    {
      name: "田中 花子",
      role: "チーフロースター",
      experience: "15年",
      message: "毎朝、コーヒー豆の香りに包まれながら仕事ができる幸せを感じています。一杯のコーヒーに、私たちの想いを込めて焙煎しています。",
      specialty: "シングルオリジンの焙煎",
      icon: "👩‍🍳",
      quote: "「コーヒーは生き物。豆の声に耳を傾けながら、最高の味わいを引き出します。」"
    },
    {
      name: "佐藤 次郎",
      role: "品質管理責任者",
      experience: "12年",
      message: "厳しい基準で品質をチェックするのは、コーヒーを愛するお客様のため。少しの妥協も許しません。",
      specialty: "カッピングと品質評価",
      icon: "👨‍🔬",
      quote: "「小さな欠陥が、大きな違いを生む。細部にこそ真価が宿る。」"
    },
    {
      name: "鈴木 美咲",
      role: "パック詰め担当",
      experience: "8年",
      message: "新鮮さを保ちながら丁寧にパック詰めをする。毎日の積み重ねが、お客様の笑顔につながると思っています。",
      specialty: "手作業によるパック詰め",
      icon: "👩‍🏭",
      quote: "「手間をかけるほど、愛情が伝わる。心を込めて、今日も一袋一袋。」"
    },
    {
      name: "山田 健太",
      role: "配送管理",
      experience: "10年",
      message: "新鮮な状態でコーヒーをお届けするため、温度・湿度管理に細心の注意を払っています。お客様の元へ最高の状態で。",
      specialty: "物流最適化",
      icon: "👨‍🚚",
      quote: "「時間との勝負。焙煎したての香りを、できる限り早くお届けしたい。」"
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
        <p className="subtitle">製造に携わるスタッフたちの想いをお伝えします</p>

        {/* スタッフ紹介 */}
        <div className="staff-grid">
          {staffMembers.map((staff, index) => (
            <div key={index} className="staff-card slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="staff-header">
                <div className="staff-avatar">
                  <span className="staff-icon">{staff.icon}</span>
                </div>
                <div className="staff-info">
                  <h3 className="staff-name">{staff.name}</h3>
                  <p className="staff-role">{staff.role}</p>
                  <span className="staff-experience">経験 {staff.experience}</span>
                </div>
              </div>

              <div className="staff-quote">
                <p>"{staff.quote}"</p>
              </div>

              <p className="staff-message">{staff.message}</p>

              <div className="staff-specialty">
                <span className="specialty-label">専門分野:</span>
                <span className="specialty-value">{staff.specialty}</span>
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
