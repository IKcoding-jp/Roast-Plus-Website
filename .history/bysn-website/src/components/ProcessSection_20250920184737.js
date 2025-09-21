import React, { useState } from 'react';
import './ProcessSection.css';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      step: 1,
      title: "厳選された豆の調達",
      description: "世界中から最高品質のコーヒー豆を厳選して仕入れます。一粒一粒、手作業で品質を確認し、最高のものを選び抜きます。",
      details: "産地：エチオピア、コロンビア、グアテマラなどから直輸入。標高1,500m以上の高地で栽培されたスペシャルティコーヒーを中心に。",
      color: "#8B4513"
    },
    {
      step: 2,
      title: "ハンドピッキング",
      description: "スタッフが一粒一粒手作業で丁寧に不良豆を取り除きます。この工程でコーヒーのクオリティを高めています。",
      details: "丁寧な選別により、品質の高いコーヒー豆を選び出します。スタッフ一同で協力して作業を進めています。",
      color: "#A0522D"
    },
    {
      step: 3,
      title: "丁寧な焙煎",
      description: "コーヒー豆の個性を大切に、丁寧に焙煎します。温度と時間を調整しながら、理想的な味わいを引き出します。",
      details: "焙煎温度：180-220℃、時間：12-18分。スタッフが心を込めて、豆の個性を活かした焙煎を行っています。",
      color: "#D2B48C"
    },
    {
      step: 4,
      title: "新鮮なパック詰め",
      description: "焙煎後24時間以内にドリップパックに詰めます。新鮮さを保ちながら、使いやすい形状に仕上げます。",
      details: "窒素充填パックを使用し、酸化を防ぎます。個包装で持ち運びやすく、いつでも新鮮なコーヒーをお楽しみいただけます。",
      color: "#DAA520"
    },
    {
      step: 5,
      title: "最終検査と発送",
      description: "全品丁寧に検査を行い、品質の高いものだけを出荷します。お客様の元へ最高の状態でお届けします。",
      details: "外観、香り、重量の確認を徹底。スタッフ一同で品質管理を行い、丁寧な発送を心がけています。",
      color: "#228B22"
    }
  ];

  return (
    <section id="process" className="process-section">
      <div className="section">
        <h2 className="title">製造工程</h2>
        <p className="subtitle">BYSNドリップパックの製造工程を詳しくご紹介します</p>

        <div className="process-container">
          {/* ステップ表示 */}
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`process-step ${index === activeStep ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div
                  className="step-number"
                  style={{ backgroundColor: step.color }}
                >
                  {step.step}
                </div>
                <h3 className="step-title">{step.title}</h3>
              </div>
            ))}
          </div>

          {/* 詳細表示 */}
          <div className="process-details">
            <div className="process-detail-card slide-up">
              <div className="detail-header">
                <span className="detail-step">STEP {processSteps[activeStep].step}</span>
                <h3 className="detail-title">{processSteps[activeStep].title}</h3>
              </div>
              <p className="detail-description">{processSteps[activeStep].description}</p>
              <div className="detail-more">
                <p>{processSteps[activeStep].details}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 品質保証メッセージ */}
        <div className="quality-message card">
          <h3 className="quality-title">品質へのこだわり</h3>
          <p className="quality-text">
            BYSNでは、コーヒー豆の選定からパック詰めまで、すべての工程で丁寧な品質管理を行っています。
            スタッフ一同の想いが込められた一杯を、ぜひお楽しみください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
