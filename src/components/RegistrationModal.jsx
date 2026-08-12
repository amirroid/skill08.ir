import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ChevronLeft, ChevronRight, User, Smartphone, Code2, Award, Printer, Download } from 'lucide-react';
import { toPersianDigits } from '../utils/persianUtils';

export default function RegistrationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    nationalId: '',
    phone: '',
    province: 'تهران',
    age: '20',
    primaryStack: 'Android Kotlin',
    experienceYears: '2',
    gitLevel: 'عالی',
    architectureLevel: 'خوب',
    testingLevel: 'متوسط'
  });

  const [trackingCode, setTrackingCode] = useState('');

  if (!isOpen) return null;

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      const code = 'WS-FA-' + Math.floor(100000 + Math.random() * 900000);
      setTrackingCode(code);
      setStep(4);
    }
  };

  const provinces = [
    'تهران', 'اصفهان', 'خراسان رضوی', 'فارس', 'آذربایجان شرقی', 'خوزستان',
    'مازندران', 'البرز', 'گیلان', 'کرمان', 'همدان', 'یزد', 'قم', 'مرکزی'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8">
        
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-cyan">
            <Sparkles className="w-4 h-4" />
            <span>پورتال پیش‌ثبت‌نام متسابقین - WorldSkills Skill 08</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            ثبت‌نام و ارزیابی سطح آمادگی فنی
          </h3>
          <p className="text-xs text-slate-400">
            گام {toPersianDigits(step)} از {toPersianDigits(4)}: {
              step === 1 ? 'مشخصات فردی و جغرافیایی' :
              step === 2 ? 'انتخاب پشته تکنولوژی اصلی' :
              step === 3 ? 'خودارزیابی مهارت‌های فنی' : 'دریافت کارت الکترونیکی آزمون'
            }
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-1.5 rounded-full mb-8 overflow-hidden">
          <div
            className="bg-gradient-to-r from-brand-cyan to-brand-emerald h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Form Body */}
        <form onSubmit={handleNextStep} className="space-y-6">
          
          {/* Step 1: Personal Details */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  نام و نام خانوادگی متسابق:
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثال: علی علوی"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    شماره ملی:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="۰۰۱۲۳۴۵۶۷۸"
                    value={formData.nationalId}
                    onChange={(e) => setFormData({ ...formData, nationalId: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    شماره همراه (جهت دریافت پیامک اطلاع‌رسانی):
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    استان محل سکونت / نمایندگی:
                  </label>
                  <select
                    value={formData.province}
                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-brand-cyan"
                  >
                    {provinces.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    سن متسابق:
                  </label>
                  <input
                    type="number"
                    min="16"
                    max="25"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-brand-cyan font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Tech Stack Selection */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                تخصص اصلی برنامه‌نویسی موبایل را انتخاب کنید:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { title: 'Android Kotlin', desc: 'Jetpack Compose & Clean Arch' },
                  { title: 'iOS Swift', desc: 'SwiftUI & Combine Framework' },
                  { title: 'Flutter / Cross', desc: 'Dart Native & State Management' }
                ].map((stack) => (
                  <button
                    type="button"
                    key={stack.title}
                    onClick={() => setFormData({ ...formData, primaryStack: stack.title })}
                    className={`p-4 rounded-2xl border text-right transition-all ${
                      formData.primaryStack === stack.title
                        ? 'bg-brand-cyan/10 border-brand-cyan text-white shadow-glow-cyan'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <Smartphone className="w-5 h-5 text-brand-cyan mb-2" />
                    <h4 className="text-xs font-bold">{stack.title}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{stack.desc}</p>
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  سابقه فعالیت تجاری یا پروژه‌ای (سال):
                </label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={formData.experienceYears}
                  onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-brand-cyan font-mono"
                />
              </div>
            </div>
          )}

          {/* Step 3: Self Assessment */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <span className="text-xs text-slate-300 block mb-2 font-medium">
                سطح تسلط خود بر مفاهیم کلیدی WorldSkills Skill 08 را مشخص کنید:
              </span>

              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">تسلط بر Git و کنترل نسخه آفلاین:</label>
                  <select
                    value={formData.gitLevel}
                    onChange={(e) => setFormData({ ...formData, gitLevel: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  >
                    <option value="عالی">عالی (مسلط به Rebase, Merge, Branching)</option>
                    <option value="خوب">خوب (مسلط به Commit, Push, Pull)</option>
                    <option value="مقدماتی">مقدماتی (اشنایی پایه)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">تسلط بر Clean Architecture و MVVM:</label>
                  <select
                    value={formData.architectureLevel}
                    onChange={(e) => setFormData({ ...formData, architectureLevel: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  >
                    <option value="عالی">عالی (پیاده‌سازی لایه‌ای استاندارد)</option>
                    <option value="خوب">خوب (آشنایی با الگوی MVVM)</option>
                    <option value="مقدماتی">مقدماتی</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">تسلط بر تست‌های واحد (Unit Testing):</label>
                  <select
                    value={formData.testingLevel}
                    onChange={(e) => setFormData({ ...formData, testingLevel: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  >
                    <option value="عالی">عالی (JUnit, Mockk, Espresso)</option>
                    <option value="متوسط">متوسط (آشنایی اولیه با Unit Test)</option>
                    <option value="مقدماتی">بدون سابقه نویسندگی تست</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Digital Confirmation Ticket */}
          {step === 4 && (
            <div className="space-y-5 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">پیش‌ثبت‌نام شما با موفقیت ثبت شد!</h4>
                <p className="text-xs text-slate-400 mt-1">
                  کارت ورود به جلسه آزمون آنلاین خودارزیابی صادر گردید.
                </p>
              </div>

              {/* Candidate Ticket Component */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-right space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-brand-cyan font-bold font-sans">کارت الکترونیکی متسابق</span>
                  <span className="text-slate-400">{trackingCode}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-300">
                  <div>نام: <span className="text-white font-sans">{formData.fullName || 'علی علوی'}</span></div>
                  <div>استان: <span className="text-white font-sans">{formData.province}</span></div>
                  <div>تخصص: <span className="text-brand-cyan">{formData.primaryStack}</span></div>
                  <div>وضعیت: <span className="text-brand-emerald font-sans">تأیید اولیه</span></div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => alert('چاپ کارت متسابق آغاز شد.')}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>چاپ کارت</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-brand-cyan hover:bg-cyan-400 shadow-glow-cyan"
                >
                  بستن و بازگشت
                </button>
              </div>
            </div>
          )}

          {/* Form Action Controls */}
          {step < 4 && (
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-950 border border-slate-800 flex items-center gap-1"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>گام قبلی</span>
                </button>
              ) : <div />}

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-emerald hover:from-cyan-400 hover:to-emerald-400 shadow-glow-cyan flex items-center gap-2"
              >
                <span>{step === 3 ? 'تأیید نهایی و صدور کارت' : 'گام بعدی'}</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          )}

        </form>

      </div>
    </div>
  );
}
