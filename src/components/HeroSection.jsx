import React, { useState, useEffect } from 'react';
import { Sparkles, Award, ArrowLeft, Download, Layers, Clock, MapPin, Code2, ChevronDown, CheckCircle2 } from 'lucide-react';
import { COMPETITION_INFO } from '../data/competitionData';
import { toPersianDigits } from '../utils/persianUtils';

export default function HeroSection({ onOpenRegisterModal }) {
  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 94,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = COMPETITION_INFO.stats;

  const techBadges = [
    { label: "Android Kotlin", color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10" },
    { label: "iOS SwiftUI", color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10" },
    { label: "Clean Architecture", color: "border-purple-500/30 text-purple-400 bg-purple-500/10" },
    { label: "REST & GraphQL API", color: "border-blue-500/30 text-blue-400 bg-blue-500/10" },
    { label: "Unit & UI Testing", color: "border-amber-500/30 text-amber-400 bg-amber-500/10" }
  ];

  return (
    <section id="overview" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-dark">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-brand-emerald/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Official Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-brand-cyan/30 text-xs text-slate-200 shadow-glow-cyan animate-pulse-slow">
            <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-ping" />
            <span className="font-semibold text-brand-cyan">{COMPETITION_INFO.skillNumber}</span>
            <span className="text-slate-500">|</span>
            <span>{COMPETITION_INFO.organization}</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2]">
            میدان رقابت برترین توسعه‌دهندگان <br className="hidden sm:inline" />
            <span className="gradient-text-cyan-emerald">موبایل ایران و جهان</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            {COMPETITION_INFO.description}
          </p>

          {/* Technical Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {techBadges.map((badge, idx) => (
              <span
                key={idx}
                className={`text-xs font-mono px-3 py-1.5 rounded-lg border font-semibold ${badge.color}`}
              >
                {badge.label}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={onOpenRegisterModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-cyan via-teal-500 to-brand-emerald hover:from-cyan-400 hover:to-emerald-400 shadow-glow-cyan transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-5 h-5" />
              <span>ثبت‌نام و سنجش آمادگی متسابقین</span>
              <ArrowLeft className="w-5 h-5" />
            </button>

            <a
              href="#modules"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 glass-panel glass-panel-hover border border-slate-700/80 hover:text-brand-cyan transition-all duration-200"
            >
              <Layers className="w-4 h-4 text-brand-cyan" />
              <span>پودمان‌های آزمون (Test Project)</span>
            </a>
          </div>
        </div>

        {/* Live Countdown Component */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="glass-panel rounded-2xl p-6 border border-slate-800/80 shadow-glass relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="text-center md:text-right">
                <div className="flex items-center justify-center md:justify-start gap-2 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-1">
                  <Clock className="w-4 h-4 animate-spin-slow" />
                  <span>شمارش معکوس تا آزمون انتخابی بعدی</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  مسابقات مرحله استانی و انتخابی تیم ملی
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  مهلت ارسال مدارک و شرکت در آزمون‌های آزمایشی
                </p>
              </div>

              {/* Countdown Digits */}
              <div className="flex items-center gap-3 dir-ltr" dir="ltr">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl sm:text-2xl font-bold font-mono text-brand-cyan shadow-inner">
                    {toPersianDigits(String(timeLeft.days).padStart(2, '0'))}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 font-sans">روز</span>
                </div>
                <span className="text-xl font-bold text-slate-600">:</span>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl sm:text-2xl font-bold font-mono text-white shadow-inner">
                    {toPersianDigits(String(timeLeft.hours).padStart(2, '0'))}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 font-sans">ساعت</span>
                </div>
                <span className="text-xl font-bold text-slate-600">:</span>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl sm:text-2xl font-bold font-mono text-white shadow-inner">
                    {toPersianDigits(String(timeLeft.minutes).padStart(2, '0'))}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 font-sans">دقیقه</span>
                </div>
                <span className="text-xl font-bold text-slate-600">:</span>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl sm:text-2xl font-bold font-mono text-brand-emerald shadow-inner">
                    {toPersianDigits(String(timeLeft.seconds).padStart(2, '0'))}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 font-sans">ثانیه</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-brand-cyan/40 transition-colors text-center group"
            >
              <div className="text-2xl sm:text-3xl font-black text-white group-hover:text-brand-cyan transition-colors mb-1 font-mono">
                {toPersianDigits(stat.value)}
              </div>
              <div className="text-xs font-bold text-slate-300">{stat.label}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{stat.suffix}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
