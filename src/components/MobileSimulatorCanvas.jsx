import React, { useState } from 'react';
import { Smartphone, Code2, Play, Cpu, CheckCircle2, Layers, Wifi, Battery, RefreshCw, Terminal, Eye, ShieldCheck } from 'lucide-react';
import { DEMO_SIMULATOR_APPS } from '../data/competitionData';
import { toPersianDigits } from '../utils/persianUtils';

export default function MobileSimulatorCanvas() {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('preview'); // 'preview' | 'code' | 'architecture'
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const currentApp = DEMO_SIMULATOR_APPS[activeAppIndex];
  const currentScreen = currentApp.screens[activeScreenIndex];

  return (
    <section id="simulator" className="py-20 bg-slate-950 relative overflow-hidden border-y border-slate-800/80">
      
      {/* Background Ambient Lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>شبیه‌ساز زنده محیط مسابقات</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            بررسی تعاملی پروژه‌های عملی مسابقات
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            نمونه‌ای از پروژه‌های واقعی دوره‌های گذشته را در شبیه‌ساز زنده موبایل زیر اجرا، دیباگ و ساختار معماری آن را تحلیل کنید.
          </p>
        </div>

        {/* App Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {DEMO_SIMULATOR_APPS.map((app, index) => (
            <button
              key={app.id}
              onClick={() => {
                setActiveAppIndex(index);
                setActiveScreenIndex(0);
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeAppIndex === index
                  ? 'bg-slate-800 text-white border border-brand-cyan/50 shadow-glow-cyan'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:bg-slate-800/60'
              }`}
            >
              <Smartphone className={`w-4 h-4 ${activeAppIndex === index ? 'text-brand-cyan' : 'text-slate-500'}`} />
              <span>{app.name}</span>
            </button>
          ))}
        </div>

        {/* Main Interactive Canvas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Phone Device Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/18] bg-slate-900 rounded-[48px] p-3 border-4 border-slate-700 phone-mockup-shadow group">
              
              {/* Phone Speaker Notch & Camera Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-950 rounded-full z-30 flex items-center justify-center gap-2 border border-slate-800">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/80 animate-pulse" />
              </div>

              {/* Phone Display Screen */}
              <div className="w-full h-full bg-slate-950 rounded-[38px] overflow-hidden flex flex-col justify-between relative border border-slate-800">
                
                {/* Phone Status Bar */}
                <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] text-slate-400 font-mono z-20 bg-slate-950/80 backdrop-blur-sm">
                  <span>۰۹:۴۱</span>
                  <div className="flex items-center gap-1.5">
                    <Wifi className="w-3 h-3 text-brand-emerald" />
                    <Battery className="w-3.5 h-3.5 text-brand-cyan" />
                  </div>
                </div>

                {/* Live Screen Content */}
                <div className="p-4 flex-1 flex flex-col justify-between relative z-10 overflow-y-auto">
                  
                  {/* Top Bar of Mobile App */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                        {currentApp.techBadge}
                      </span>
                      <span className="text-[10px] text-brand-emerald font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-ping" />
                        {currentApp.status}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1">
                      {currentScreen.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      {currentApp.description}
                    </p>
                  </div>

                  {/* Dynamic Screen View Simulation */}
                  <div className="my-4 p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/60 shadow-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-300 font-medium">وضعیت کنونی:</span>
                      <span className="text-xs font-bold text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/30">
                        {currentScreen.status}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <span className="text-xs text-slate-400 block mb-0.5">مقدار ارزیابی شده:</span>
                      <span className="text-base font-extrabold text-white font-mono">
                        {currentScreen.value}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-cyan to-brand-emerald h-full w-3/4 animate-pulse" />
                    </div>
                  </div>

                  {/* Interactive Screen Switcher inside Phone */}
                  <div className="space-y-2">
                    <span className="text-[10px] text-slate-400 font-semibold block text-center">
                      صفحات پیاده‌سازی شده در ماژول:
                    </span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {currentApp.screens.map((screen, sIdx) => (
                        <button
                          key={screen.id}
                          onClick={() => setActiveScreenIndex(sIdx)}
                          className={`p-2 rounded-xl text-[10px] font-medium transition-all ${
                            activeScreenIndex === sIdx
                              ? 'bg-brand-cyan text-slate-950 font-bold shadow-glow-cyan'
                              : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white'
                          }`}
                        >
                          {screen.title.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Phone Bottom Home Indicator */}
                <div className="pb-2 pt-1 flex justify-center z-20">
                  <div className="w-28 h-1 bg-slate-700 rounded-full" />
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Code Inspector & Architecture Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* View Switcher Controls */}
            <div className="flex items-center justify-between bg-slate-900 p-1.5 rounded-xl border border-slate-800">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'preview'
                      ? 'bg-slate-800 text-brand-cyan shadow-sm border border-slate-700'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>توضیحات و مشخصات</span>
                </button>

                <button
                  onClick={() => setActiveTab('code')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'code'
                      ? 'bg-slate-800 text-brand-cyan shadow-sm border border-slate-700'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>سورس کد (Kotlin / Swift)</span>
                </button>

                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'architecture'
                      ? 'bg-slate-800 text-brand-cyan shadow-sm border border-slate-700'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>معماری پروژه</span>
                </button>
              </div>

              <span className="text-[11px] font-mono text-slate-500 px-3 hidden sm:inline">
                WorldSkills Skill 08 Sandbox
              </span>
            </div>

            {/* Tab 1: Project Overview */}
            {activeTab === 'preview' && (
              <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-5 animate-fadeIn">
                <div>
                  <span className="text-xs text-brand-cyan font-mono font-semibold uppercase">
                    {currentApp.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {currentApp.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5 dir-ltr" dir="ltr">
                    {currentApp.englishName}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentApp.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <span className="text-xs text-slate-400 font-medium">فریم‌ورک و فضا:</span>
                    <p className="text-xs font-bold text-brand-cyan">{currentApp.techBadge}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <span className="text-xs text-slate-400 font-medium">وضعیت ارزیابی:</span>
                    <p className="text-xs font-bold text-brand-emerald flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span>تأیید شده برای آزمون کشوری</span>
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2">
                  <span className="text-xs font-bold text-slate-200">نیازمندی‌های کلیدی ماژول:</span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald" />
                      <span>رعایت دقیق گرید و فاصله‌گذاری مطابق با فایل طرح Figma</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald" />
                      <span>مدیریت خطا در قطع ارتباط شبکه و نمایش حالت‌های آفلاین</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald" />
                      <span>ذخیره‌سازی داده‌ها به صورت رمزشده در دیتابیس محلی دستگاه</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Tab 2: Live Code Preview */}
            {activeTab === 'code' && (
              <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden animate-fadeIn">
                <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs text-slate-400 font-mono ml-2">AppModule.kt / SwiftUI.swift</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">UT-8 | Clean Architecture</span>
                </div>
                <pre className="p-5 text-xs font-mono text-cyan-300 bg-slate-950 overflow-x-auto leading-relaxed dir-ltr" dir="ltr">
                  <code>{currentApp.sampleCode}</code>
                </pre>
              </div>
            )}

            {/* Tab 3: Architecture Diagram */}
            {activeTab === 'architecture' && (
              <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 animate-fadeIn">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-cyan" />
                  <span>معماری لایه‌ای استاندارد WorldSkills (Clean Architecture)</span>
                </h4>
                
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-brand-cyan/30 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-brand-cyan">Presentation Layer (UI)</span>
                      <p className="text-[11px] text-slate-400">Jetpack Compose / SwiftUI View & ViewModel State</p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-1 bg-brand-cyan/10 text-brand-cyan rounded">MVI / MVVM</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-purple-500/30 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-purple-400">Domain Layer (Use Cases)</span>
                      <p className="text-[11px] text-slate-400">Pure Business Logic, Domain Entities & Validation</p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-1 bg-purple-500/10 text-purple-400 rounded">Pure Kotlin/Swift</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-brand-emerald">Data Layer (Repository)</span>
                      <p className="text-[11px] text-slate-400">Room DB / CoreData & Retrofit Network API DataSource</p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-1 bg-emerald-500/10 text-brand-emerald rounded">Offline-First</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
