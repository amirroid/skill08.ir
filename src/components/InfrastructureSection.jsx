import React from 'react';
import { ShieldCheck, HardDrive, Monitor, Terminal, CheckCircle2, Lock, FileCheck } from 'lucide-react';
import { INFRASTRUCTURE_KIT } from '../data/competitionData';

export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
            <HardDrive className="w-3.5 h-3.5" />
            <span>تجهیزات و قوانین مسابقه (Infrastructure List)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            زیرساخت‌های سخت‌افزاری و نرم‌افزاری استاندارد
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            لیست رسمی ابزارها، نرم‌افزارها و سخت‌افزارهای مجاز در مسابقات استانی، کشوری و جهانی.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Hardware Card */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">تجهیزات سخت‌افزاری مجاز</h3>
                <span className="text-[11px] text-slate-400">Hardware Standard</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {INFRASTRUCTURE_KIT.hardware.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
                  <h4 className="text-xs font-bold text-slate-200">{item.title}</h4>
                  <p className="text-[11px] text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Software Card */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center text-brand-purple">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">نرم‌افزارها و IDEها</h3>
                <span className="text-[11px] text-slate-400">Software Environment</span>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              {INFRASTRUCTURE_KIT.software.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">{item.name}</h4>
                    <p className="text-[11px] text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rules & Guidelines Card */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center text-brand-emerald">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">قوانین و مقررات فنی</h3>
                <span className="text-[11px] text-slate-400">Technical Regulations</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {INFRASTRUCTURE_KIT.rules.map((rule, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-2.5">
                  <Lock className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-relaxed">{rule}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
