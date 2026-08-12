import React from 'react';
import { Cpu, Calendar, MapPin, CheckCircle2, ChevronLeft, Flag, Globe } from 'lucide-react';
import { TIMELINE_STAGES } from '../data/competitionData';
import { toPersianDigits } from '../utils/persianUtils';

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-24 bg-brand-dark relative overflow-hidden">
      
      {/* Background Light */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>نقشه راه مسابقات مهارت</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            مسیر رسیدن از مسابقات استانی تا سکوی جهانی
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            مراحل پنج‌گانه سنجش، انتخابی و آماده‌سازی تیم ملی توسعه نرم‌افزارهای موبایل جمهوری اسلامی ایران.
          </p>
        </div>

        {/* Timeline Horizontal / Vertical Grid */}
        <div className="relative">
          
          {/* Vertical Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-0 bottom-0 right-1/2 w-0.5 bg-slate-800 -translate-x-1/2" />

          <div className="space-y-8 relative">
            {TIMELINE_STAGES.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={stage.step}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Stage Card */}
                  <div className="w-full lg:w-1/2">
                    <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-brand-cyan/40 transition-all space-y-4 group">
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-black font-mono text-brand-cyan group-hover:scale-110 transition-transform">
                          {toPersianDigits(stage.step)}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                            {stage.date}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30">
                            {stage.badge}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                          {stage.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          {stage.subtitle}
                        </p>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                        {stage.description}
                      </p>

                    </div>
                  </div>

                  {/* Circle Center Marker */}
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border-2 border-brand-cyan shadow-glow-cyan text-brand-cyan font-bold text-xs font-mono z-20 shrink-0">
                    {idx === 4 ? <Globe className="w-5 h-5" /> : <Flag className="w-5 h-5" />}
                  </div>

                  {/* Empty Spacer Column for Alignment */}
                  <div className="hidden lg:block w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
