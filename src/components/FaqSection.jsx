import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Sparkles, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/competitionData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.includes(searchQuery) || faq.answer.includes(searchQuery)
  );

  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800/80">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>پاسخ به ابهامات و پرسش‌های متداول</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            سوالات متداول شرکت‌کنندگان و مربیان
          </h2>
          <p className="text-sm text-slate-400">
            پاسخ رسمی به پرسش‌های مربوط به شرایط ثبت‌نام، زبان‌های کدنویسی، آیین‌نامه و نمره‌دهی.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="جستجو در سوالات و قوانین (مثلا: سن، فلاتر، اینترنت)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3.5 pr-12 rounded-2xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
          />
          <Search className="w-5 h-5 text-slate-500 absolute top-1/2 right-4 -translate-y-1/2" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`glass-panel rounded-2xl border transition-colors ${
                    isOpen ? 'border-brand-cyan/50 bg-slate-900/90' : 'border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full p-5 text-right flex items-center justify-between gap-4 font-bold text-sm text-white"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-brand-cyan shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-slate-500 text-xs">
              هیچ سوالی با عبارت عبارت جستجو شده یافت نشد.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
