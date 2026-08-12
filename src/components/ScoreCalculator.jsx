import React, { useState } from 'react';
import { Award, Calculator, Sparkles, CheckCircle2, AlertCircle, RefreshCw, BarChart3, HelpCircle } from 'lucide-react';
import { toPersianDigits } from '../utils/persianUtils';

export default function ScoreCalculator() {
  const [criteria, setCriteria] = useState([
    { id: 'ui', title: 'دقت UI/UX و طراحی فریم‌ورک', maxScore: 15, current: 12, desc: 'تطابق با طرح Figma، تایپوگرافی، و انیمیشن‌ها' },
    { id: 'arch', title: 'معماری بومی و Clean Code', maxScore: 35, current: 28, desc: 'پیاده‌سازی MVVM/MVI، Compose/SwiftUI و SOLID' },
    { id: 'api', title: 'ارتباط شبکه و دیتابیس محلی', maxScore: 30, current: 24, desc: 'Retrofit/Alamofire، همگام‌سازی و Room/CoreData' },
    { id: 'test', title: 'تست‌های اتوماتیک (Unit & UI)', maxScore: 10, current: 7, desc: 'پوشش تست واحد با JUnit/XCTest و Espresso' },
    { id: 'speed', title: 'چالش سرعت و بهینه‌سازی', maxScore: 10, current: 8, desc: 'مصرف حافظه، رم و پیاده‌سازی سریع فیچر جدید' }
  ]);

  const handleSliderChange = (id, newValue) => {
    setCriteria((prev) =>
      prev.map((c) => (c.id === id ? { ...c, current: Number(newValue) } : c))
    );
  };

  const totalScore = criteria.reduce((sum, c) => sum + c.current, 0);

  const getResultBadge = (score) => {
    if (score >= 85) return { label: 'کاندیدای مدال طلا (Gold Medal)', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' };
    if (score >= 75) return { label: 'کاندیدای مدال نقره (Silver Medal)', color: 'text-slate-300 bg-slate-400/10 border-slate-400/30' };
    if (score >= 65) return { label: 'کاندیدای مدال برنز (Bronze Medal)', color: 'text-amber-600 bg-amber-700/10 border-amber-700/30' };
    if (score >= 50) return { label: 'دیپلم افتخار جهانی (Medallion for Excellence)', color: 'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/30' };
    return { label: 'نیازمند تمرین در پودمان‌ها (Standard Trainee)', color: 'text-slate-400 bg-slate-800 border-slate-700' };
  };

  const resultBadge = getResultBadge(totalScore);

  return (
    <section id="calculator" className="py-24 bg-slate-950 relative overflow-hidden border-y border-slate-800/80">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-brand-emerald/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>سیستم نمره‌دهی رسمی CIS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            محاسبه‌گر هوشمند آمادگی متسابقین
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            امتیازات فرضی خود را در ۵ معیار ارزیابی مسابقات وارد کنید تا نمره کل و شانس کسب مدال خود را مشاهده نمایید.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sliders Grid */}
          <div className="lg:col-span-7 space-y-4">
            {criteria.map((c) => (
              <div key={c.id} className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3">
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">{c.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{c.desc}</p>
                  </div>
                  <div className="text-left font-mono">
                    <span className="text-base font-extrabold text-brand-cyan">
                      {toPersianDigits(c.current)}
                    </span>
                    <span className="text-xs text-slate-500"> / {toPersianDigits(c.maxScore)}</span>
                  </div>
                </div>

                {/* Range Input Slider */}
                <input
                  type="range"
                  min="0"
                  max={c.maxScore}
                  value={c.current}
                  onChange={(e) => handleSliderChange(c.id, e.target.value)}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                />

              </div>
            ))}
          </div>

          {/* Result Score Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-cyan/40 shadow-glow-cyan space-y-6 sticky top-28">
              
              <div className="text-center space-y-2">
                <span className="text-xs text-slate-400 font-medium">مجموع امتیاز ارزیابی شده:</span>
                <div className="text-5xl font-black text-white font-mono tracking-tight">
                  {toPersianDigits(totalScore)}
                  <span className="text-lg text-slate-500 font-sans mr-1">/ ۱۰۰</span>
                </div>
              </div>

              {/* Progress Ring Bar */}
              <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-800">
                <div
                  className="bg-gradient-to-r from-brand-cyan via-teal-400 to-brand-emerald h-full transition-all duration-500"
                  style={{ width: `${totalScore}%` }}
                />
              </div>

              {/* Medal Rank Badge */}
              <div className={`p-4 rounded-2xl border text-center font-bold text-xs ${resultBadge.color}`}>
                <Award className="w-6 h-6 mx-auto mb-1 opacity-90" />
                <span>{resultBadge.label}</span>
              </div>

              {/* Recommendations List */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <span className="text-xs font-bold text-slate-300 block">پیشنهادات ارتقاء سطح:</span>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                    <span>تمرکز بر تست‌های Unit در ماژول D جهت کسب ۱۰ نمره کامل آن.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                    <span>رعایت دقیق معماری Clean در اندروید و iOS جهت تضمین نمره معماری.</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setCriteria(criteria.map(c => ({ ...c, current: Math.round(c.maxScore * 0.8) })))}
                className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>بازنشانی امتیازات پیش‌فرض</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
