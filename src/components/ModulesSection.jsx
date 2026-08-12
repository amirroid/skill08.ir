import React, { useState } from 'react';
import { Layers, Clock, Award, CheckCircle2, Code2, Download, FileText, ChevronLeft, Sparkles } from 'lucide-react';
import { MODULES_DATA } from '../data/competitionData';
import { toPersianDigits } from '../utils/persianUtils';

export default function ModulesSection() {
  const [activeModuleId, setActiveModuleId] = useState(MODULES_DATA[0].id);

  const activeModule = MODULES_DATA.find((m) => m.id === activeModuleId) || MODULES_DATA[0];

  return (
    <section id="modules" className="py-24 bg-brand-dark relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>ساختار پروژه آزمون (Test Project)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            پودمان‌های تخصصی رقابت Skill 08
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            رقابت‌های جهانی مهارت در ۴ پودمان جامع برگزار می‌شود که تمام چرخه حیات توسعه نرم‌افزارهای موبایل را پوشش می‌دهد.
          </p>
        </div>

        {/* Module Tab Grid Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {MODULES_DATA.map((module) => {
            const isActive = module.id === activeModuleId;
            return (
              <button
                key={module.id}
                onClick={() => setActiveModuleId(module.id)}
                className={`p-5 rounded-2xl text-right transition-all duration-300 relative overflow-hidden border ${
                  isActive
                    ? 'bg-slate-900 border-brand-cyan/60 shadow-glow-cyan transform -translate-y-1'
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                {/* Module Letter Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`w-8 h-8 rounded-xl font-bold font-mono text-sm flex items-center justify-center ${
                    isActive ? 'bg-brand-cyan text-slate-950 shadow-sm' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {module.letter}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{module.duration}</span>
                  </div>
                </div>

                <h3 className={`text-sm font-bold line-clamp-2 transition-colors ${
                  isActive ? 'text-white' : 'text-slate-300'
                }`}>
                  {module.title}
                </h3>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400">سهم از کل:</span>
                  <span className="font-bold text-brand-emerald font-mono">
                    {toPersianDigits(module.marks)} نمره
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Module Detail Panel */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800/90 shadow-glass relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left/Main Column: Specifications & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30">
                    ماژول {activeModule.letter}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {activeModule.englishTitle}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {activeModule.title}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                {activeModule.summary}
              </p>

              {/* Highlights List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  شاخص‌های کلیدی ارزیابی داوران:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModule.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-400 block mb-2">
                  ابزارها و تکنولوژی‌های این پودمان:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeModule.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-slate-900 text-brand-cyan border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Code Snippet & Specs Box */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-lg">
                <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-brand-cyan" />
                    <span className="text-xs font-mono text-slate-300">نمونه الگوی کد استاندارد</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">WorldSkills Criteria</span>
                </div>
                <pre className="p-4 text-[11px] font-mono text-emerald-300 bg-slate-950 overflow-x-auto leading-relaxed dir-ltr" dir="ltr">
                  <code>{activeModule.codeSnippet}</code>
                </pre>
              </div>

              {/* Download Spec Sheet Mock Callout */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/90 border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">سند مشخصات فنی (Technical Description)</h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">دانلود PDF نسخه فارسی استاندارد جهانی</p>
                  </div>
                </div>
                <button
                  onClick={() => alert('دانلود سند مشخصات فنی رسمی WorldSkills Skill 08 آغاز شد.')}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>دانلود</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
