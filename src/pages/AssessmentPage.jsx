import React, { useState } from 'react';
import { Award, CheckSquare, BarChart2, ShieldAlert, Layers } from 'lucide-react';
import { ASSESSMENT_RULES, WSOS_SECTIONS } from '../data/competitionData';
import { toPersianDigits } from '../utils/persianUtils';

export default function AssessmentPage() {
  const [userScores, setUserScores] = useState({
    1: 8,
    2: 7,
    3: 5,
    4: 20,
    5: 12,
    6: 25,
    7: 8
  });

  const handleScoreChange = (sectionId, value) => {
    setUserScores(prev => ({
      ...prev,
      [sectionId]: Number(value)
    }));
  };

  const totalCalculatedScore = Object.values(userScores).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="space-y-12 py-10">
      
      {/* Header */}
      <div className="space-y-3 border-b border-zinc-800 pb-6 max-w-4xl">
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
          Section 3 & 4 - Assessment Strategy and Practice
        </span>
        <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
          استراتژی و روش‌های ارزیابی (Assessment Strategy)
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
          نمره‌دهی در مسابقات مهارت بر اساس استانداردهای دقیق سازمان جهانی مهارت (WorldSkills Assessment Strategy) و از طریق سیستم نرم‌افزاری CIS انجام می‌شود.
        </p>
      </div>

      {/* Two Types of Assessment (Section 4.6 & 4.7) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Measurement Card */}
        <div className="vercel-card p-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <h2 className="text-sm font-bold text-white">{ASSESSMENT_RULES.measurement.title}</h2>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            {ASSESSMENT_RULES.measurement.description}
          </p>

          <div className="p-3 bg-zinc-950 rounded border border-zinc-800 text-xs text-zinc-300 space-y-1.5 font-mono">
            <div className="flex items-center justify-between">
              <span>شیوه نمره‌دهی:</span>
              <span className="text-white">باینری (کامل یا صفر)</span>
            </div>
            <div className="flex items-center justify-between">
              <span>تعداد داوران:</span>
              <span className="text-white">۳ کارشناس + ۱ سرپرست</span>
            </div>
          </div>
        </div>

        {/* Judgement Card */}
        <div className="vercel-card p-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <h2 className="text-sm font-bold text-white">{ASSESSMENT_RULES.judgement.title}</h2>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            {ASSESSMENT_RULES.judgement.description}
          </p>

          <div className="space-y-1.5 pt-1">
            {ASSESSMENT_RULES.judgement.scale.map((item) => (
              <div key={item.score} className="flex items-center gap-3 p-2 bg-zinc-950 rounded border border-zinc-800/80 text-xs">
                <span className="w-5 h-5 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center font-mono font-bold text-white shrink-0">
                  {item.score}
                </span>
                <span className="text-zinc-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Marking Team & Anti-Compatriot Rules (Section 4.5) */}
      <div className="vercel-card p-6 space-y-3">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-zinc-400" />
          <span>قوانین داوری غیرهم‌وطن و عدالت ارزیابی (Section 4.5 & 4.6)</span>
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          طبق قوانین رسمی WorldSkills، ارزیابی هر زیرمعیار (Sub-Criterion) توسط گروه‌های ۳ نفره از کارشناسان ارزیابی می‌شود. تحت هیچ شرایطی هیچ کارشناسی مجاز به ارزیابی متسابق کشور خود (Compatriot Marking) نمی‌باشد و کارشناس چهارم به عنوان ناظر ارزیابی صحت ثبت نمرات را کنترل می‌کند.
        </p>
      </div>

      {/* Interactive Marking Allocation Table */}
      <div className="space-y-4">
        <div className="border-b border-zinc-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-bold text-white">جدول توزیع نمرات بر اساس WSOS (CIS Score Distribution)</h2>
            <p className="text-xs text-zinc-400 mt-0.5">محاسبه آنلاین امتیازات فرضی متسابق بر اساس ۷ بخش اصلی استاندارد شغلی</p>
          </div>
          <div className="text-xs font-mono text-white bg-zinc-900 px-3 py-1.5 rounded border border-zinc-800 self-start sm:self-auto">
            مجموع نمره: <span className="font-bold text-white">{toPersianDigits(totalCalculatedScore)}</span> / ۱۰۰
          </div>
        </div>

        <div className="vercel-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead className="bg-zinc-900 text-zinc-400 font-mono border-b border-zinc-800">
                <tr>
                  <th className="p-3.5 w-16 text-center">بخش</th>
                  <th className="p-3.5">عنوان بخش استاندارد</th>
                  <th className="p-3.5 text-center w-28">حداکثر نمره (%)</th>
                  <th className="p-3.5 w-40 text-center">امتیاز فرضی متسابق</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {WSOS_SECTIONS.map((sec) => (
                  <tr key={sec.section} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="p-3.5 text-center font-mono text-zinc-500">{toPersianDigits(sec.section)}</td>
                    <td className="p-3.5 font-semibold text-white">{sec.title}</td>
                    <td className="p-3.5 text-center font-mono text-zinc-300 font-bold">{toPersianDigits(sec.weighting)}</td>
                    <td className="p-3.5 text-center">
                      <input
                        type="number"
                        min="0"
                        max={sec.weighting}
                        value={userScores[sec.section] || 0}
                        onChange={(e) => handleScoreChange(sec.section, e.target.value)}
                        className="w-20 px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-center font-mono text-white focus:outline-none focus:border-zinc-500"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
