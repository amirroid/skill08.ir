import React from 'react';
import { Award, Trophy, Star, Quote } from 'lucide-react';
import { HALL_OF_FAME } from '../data/competitionData';

export default function HallOfFameSection() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Trophy className="w-3.5 h-3.5" />
            <span>تالار افتخارات ایران در مسابقات مهارت</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            مدال‌آوران و قهرمانان توسعه موبایل کشور
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            روایت تجربه نخبگانی که توانایی فنی برنامه‌نویسان ایرانی را در عرصه جهانی به اثبات رساندند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HALL_OF_FAME.map((champion) => (
            <div
              key={champion.id}
              className="glass-panel p-6 rounded-3xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 space-y-5 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-slate-900 text-amber-400 border border-slate-800">
                    {champion.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {champion.name}
                  </h3>
                  <p className="text-xs text-amber-300 font-semibold mt-0.5">
                    {champion.title}
                  </p>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    {champion.category}
                  </span>
                </div>

                <div className="relative pt-2">
                  <Quote className="w-6 h-6 text-slate-700 absolute -top-1 right-0 opacity-50" />
                  <p className="text-xs text-slate-300 leading-relaxed pr-6 italic">
                    "{champion.quote}"
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1 text-[11px] text-slate-400">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>الگوی الهام‌بخش متسابقین دوره جدید</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
