import React from 'react';
import './StaffSection.css';

const StaffSection = () => {
  const staffVoices = [
    "今日も丁寧に作業を進めています。コーヒー豆一つ一つに想いを込めて。",
    "チームで協力しながらコーヒーを作っています。一緒に頑張る仲間がいることが嬉しいです。",
    "毎日の仕事を通じて、少しずつ成長を感じています。お客様に喜んでいただけることが何よりの励みです。",
    "コーヒーの香りに囲まれて仕事ができる幸せを感じています。心を込めて、今日も一袋一袋。"
  ];


  return (
    <section id="staff" className="staff-section">
      <div className="section">
        <h2 className="title">スタッフの声</h2>
        <p className="subtitle">BYSNで一緒に働いている仲間たちの想いを紹介します</p>

        {/* スタッフの声 */}
        <div className="staff-voices-list">
          <ul>
            {staffVoices.map((voice, index) => (
              <li key={index} className="voice-item slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <p className="voice-message">{voice}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* メッセージ */}
        <div className="staff-message-card card">
          <h3 className="message-title">社員さんへのメッセージ</h3>
          <p className="message-text">
            BYSNで一緒に働いている仲間たちへ。
            毎日一緒に作業できることが本当に嬉しいです。
            みんなで協力して作ったコーヒーがお客様に喜んでいただけるよう、
            これからも一緒に頑張りましょう！
          </p>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
