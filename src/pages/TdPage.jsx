import React, { useState } from 'react';
import { ChevronDown, Download, Layers, Calendar, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';
import { OFFICIAL_TD_INFO, WSOS_SECTIONS, TD_EDITIONS_COMPARISON } from '../data/competitionData';
import { useReveal } from '../hooks/useReveal';

function PageHeader({ eyebrow, title, sub }) {
  return (
    <div className="anim-fade-up" style={{ paddingTop: 52, paddingBottom: 32, borderBottom: '1px solid var(--border)', marginBottom: 44 }}>
      {eyebrow && (
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-3)', display: 'block', marginBottom: 12 }}>
          {eyebrow}
        </span>
      )}
      <h1 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 900, color: 'var(--text)', marginBottom: sub ? 12 : 0, letterSpacing: '-0.025em' }}>
        {title}
      </h1>
      {sub && <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.75, maxWidth: 650 }}>{sub}</p>}
    </div>
  );
}

function AccordionItem({ sec, isRtl, index, isOpen, onToggle }) {
  const [ref, visible] = useReveal();
  const isFirst = index === 0;
  const isLast  = index === WSOS_SECTIONS.length - 1;

  return (
    <div
      ref={ref}
      className="card"
      style={{
        overflow: 'hidden',
        borderRadius: isFirst ? '10px 10px 4px 4px' : isLast ? '4px 4px 10px 10px' : 4,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity 0.4s ease ${index * 0.06}s, transform 0.4s ease ${index * 0.06}s`,
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '15px 18px', gap: 14, cursor: 'pointer',
          background: isOpen ? 'var(--surface-hover)' : 'none', border: 'none', textAlign: 'inherit',
          transition: 'background 0.15s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, minWidth: 0 }}>
          <span style={{
            width: 28, height: 28, borderRadius: 7, flexShrink: 0,
            background: isOpen ? 'var(--accent-subtle)' : 'var(--bg)',
            border: `1px solid ${isOpen ? 'var(--accent-border)' : 'var(--border)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 800, color: 'var(--accent)',
            transition: 'all 0.2s ease',
          }}>
            {sec.section}
          </span>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: isOpen ? 'var(--accent)' : 'var(--text)', transition: 'color 0.15s ease' }}>
              {isRtl ? sec.title : sec.englishTitle}
            </div>
            {isRtl && (
              <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 1 }}>{sec.englishTitle}</div>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <span className="badge badge-blue" style={{ fontSize: 12 }}>{sec.weighting}%</span>
          <ChevronDown
            size={15}
            style={{
              color: 'var(--text-3)',
              transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1)',
              transform: isOpen ? 'rotate(180deg)' : 'none',
            }}
          />
        </div>
      </button>

      {/* Expandable content */}
      <div style={{
        maxHeight: isOpen ? '600px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div style={{ borderTop: '1px solid var(--border)', padding: '18px 18px 20px', background: 'var(--bg)' }}>
          {/* Weight bar */}
          <div style={{ marginBottom: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontSize: 11, color: 'var(--text-3)' }}>
                {isRtl ? 'وزن ارزیابی' : 'Assessment Weight'}
              </span>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent)' }}>{sec.weighting}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: isOpen ? `${sec.weighting * 2.5}%` : '0%' }} />
            </div>
          </div>

          {/* Knowledge items */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 8 }}>
            {sec.knowledge.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 8,
                  padding: '10px 12px', borderRadius: 8,
                  border: '1px solid var(--border)', background: 'var(--surface)',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(6px)',
                  transition: `opacity 0.3s ease ${idx * 0.04 + 0.1}s, transform 0.3s ease ${idx * 0.04 + 0.1}s`,
                }}
              >
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', marginTop: 5, flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TdPage({ lang }) {
  const [expanded, setExpanded] = useState(1);
  const [selectedYear, setSelectedYear] = useState('2026');
  const isRtl = lang === 'fa';

  const meta = isRtl
    ? [
        { label: 'سند استاندارد',  value: 'Technical Description 2026' },
        { label: 'شماره رشته',    value: 'مهارت ۰۸ (Skill 08)' },
        { label: 'وضعیت آیین‌نامه', value: 'به‌روزشده برای مسابقات ۲۰۲۶' },
        { label: 'ویرایش',        value: 'نسخه رسمی ۲۰۲۶' },
      ]
    : [
        { label: 'Standard Document', value: 'Technical Description 2026' },
        { label: 'Skill Number',      value: 'Skill 08' },
        { label: 'Status',            value: 'Updated for 2026 Competition' },
        { label: 'Edition',           value: 'Official 2026 Edition' },
      ];

  const quickFacts = isRtl
    ? [
        { ref: '1.1.3', title: 'ساختار رقابت',    body: 'انفرادی — Single Competitor' },
        { ref: '1.1.4', title: 'حداکثر سن',        body: 'حداکثر ۲۲ سال در سال مسابقات' },
        { ref: '5.3',   title: 'مدت پروژه آزمون', body: '۱۸ ساعت — ۴ پودمان' },
        { ref: '5.3.4', title: 'محیط رقابت',       body: 'کاملاً آفلاین — بدون اینترنت' },
      ]
    : [
        { ref: '1.1.3', title: 'Format',      body: 'Single Competitor' },
        { ref: '1.1.4', title: 'Age Limit',   body: 'Max 22 years in competition year' },
        { ref: '5.3',   title: 'Duration',    body: '18 hours — 4 modules' },
        { ref: '5.3.4', title: 'Environment', body: 'Fully offline — no internet' },
      ];

  const activeEd = TD_EDITIONS_COMPARISON.find(e => e.year === selectedYear) || TD_EDITIONS_COMPARISON[2];

  return (
    <div style={{ paddingBottom: 80 }} className="page-enter">
      <PageHeader
        eyebrow={isRtl ? 'مشخصات فنی و استانداردهای جهانی' : 'Technical Description & Global Standards'}
        title={isRtl ? 'سند مشخصات فنی (Technical Description)' : 'Technical Description (TD)'}
        sub={isRtl
          ? 'سند رسمی استانداردهای شغلی WorldSkills برای رشته توسعه برنامه‌های کاربردی موبایل (Skill 08) به‌همراه تحلیل تکامل فنی در دوره‌های مختلف مسابقات.'
          : 'Official WorldSkills Occupational Standards for Mobile Applications Development (Skill 08) along with technical evolution across competition editions.'}
      />

      {/* Meta strip */}
      <div className="card anim-fade-up" style={{ padding: '16px 20px', marginBottom: 36, display: 'flex', flexWrap: 'wrap', gap: 28 }}>
        {meta.map((m, i) => (
          <div key={i}>
            <div style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{m.label}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{m.value}</div>
          </div>
        ))}
      </div>

      {/* Quick fact cards */}
      <div className="grid-auto-4" style={{ marginBottom: 48 }}>
        {quickFacts.map((f, i) => (
          <div
            key={i}
            className={`card anim-fade-up delay-${Math.min(i + 1, 6)}`}
            style={{ padding: '16px 18px' }}
          >
            <div style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>{f.ref}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{f.title}</div>
            <div style={{ fontSize: 12, color: 'var(--text-2)' }}>{f.body}</div>
          </div>
        ))}
      </div>

      {/* ── Section: Technical Evolution Across TD Editions (2022, 2024, 2026) ── */}
      <section style={{ marginBottom: 56 }}>
        <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: 16, marginBottom: 20 }}>
          <div style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, marginBottom: 4 }}>
            {isRtl ? 'تحلیل اسناد فنی ادوار مسابقات' : 'Technical Evolution & Revisions'}
          </div>
          <div className="section-title">
            {isRtl ? 'تکامل و مقایسه Technical Description در سال‌های مختلف' : 'Technical Description Evolution (2022 / 2024 / 2026)'}
          </div>
          <p style={{ fontSize: 13, color: 'var(--text-2)', marginTop: 6, lineHeight: 1.7 }}>
            {isRtl
              ? 'بررسی تغییرات استانداردها، ابزارهای طراحی، نیازمندی‌های معماری نرم‌افزار و شیوه‌های ارزیابی در ۳ دوره رسمی مسابقات جهانی مهارت.'
              : 'Detailed comparison of occupational standards, UI design tools, software architecture requirements, and assessment methods across 3 official WorldSkills editions.'}
          </p>
        </div>

        {/* Year Select Tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
          {TD_EDITIONS_COMPARISON.map(ed => {
            const isActive = ed.year === selectedYear;
            return (
              <button
                key={ed.year}
                onClick={() => setSelectedYear(ed.year)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
                  background: isActive ? 'var(--accent-subtle)' : 'var(--surface)',
                  color: isActive ? 'var(--accent)' : 'var(--text-2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'all 0.15s ease',
                  fontFamily: 'IRANSansX, sans-serif'
                }}
              >
                <Calendar size={13} />
                <span>{isRtl ? `ویرایش ${ed.year}` : `${ed.year} Edition`}</span>
                {ed.year === '2026' && (
                  <span className="badge badge-blue" style={{ fontSize: 10, padding: '1px 6px' }}>
                    {isRtl ? 'فعال' : 'Active'}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Year Detail Card */}
        <div className="card anim-fade-in" style={{ padding: 26, marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 14, marginBottom: 20, borderBottom: '1px solid var(--border)', paddingBottom: 16 }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 4 }}>
                {isRtl ? activeEd.editionTitleFa : activeEd.editionTitleEn}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>
                {isRtl ? `وضعیت سند: ${activeEd.statusFa}` : `Document Status: ${activeEd.statusEn}`}
              </div>
            </div>

            {/* Direct Real PDF Download Button */}
            <a
              href={activeEd.pdfFile}
              download
              className="btn btn-primary btn-sm"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}
            >
              <Download size={13} />
              <span>{isRtl ? `دانلود فایل رسمی TD ${activeEd.year} (${activeEd.fileSize})` : `Download Official TD ${activeEd.year} PDF (${activeEd.fileSize})`}</span>
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
            <div style={{ padding: 14, borderRadius: 8, background: 'var(--bg)', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: 11, color: 'var(--text-3)', fontWeight: 600, marginBottom: 4 }}>{isRtl ? 'ساختار استانداردهای WSOS' : 'WSOS Standard Structure'}</div>
              <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.6 }}>{isRtl ? activeEd.wsosStructureFa : activeEd.wsosStructureEn}</div>
            </div>

            <div style={{ padding: 14, borderRadius: 8, background: 'var(--bg)', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: 11, color: 'var(--text-3)', fontWeight: 600, marginBottom: 4 }}>{isRtl ? 'فناوری‌های رابط کاربری و لایوت' : 'UI Frameworks & Layout Tech'}</div>
              <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.6 }}>{isRtl ? activeEd.uiTechFa : activeEd.uiTechEn}</div>
            </div>

            <div style={{ padding: 14, borderRadius: 8, background: 'var(--bg)', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: 11, color: 'var(--text-3)', fontWeight: 600, marginBottom: 4 }}>{isRtl ? 'توسعه پایدار و کدنویسی سبز' : 'Sustainable Software Development'}</div>
              <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.6 }}>{isRtl ? activeEd.sustainableSectionFa : activeEd.sustainableSectionEn}</div>
            </div>

            <div style={{ padding: 14, borderRadius: 8, background: 'var(--bg)', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: 11, color: 'var(--text-3)', fontWeight: 600, marginBottom: 4 }}>{isRtl ? 'ابزار استاندارد طراحی UI/UX' : 'Standard Design Tools'}</div>
              <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.6 }}>{isRtl ? activeEd.designToolFa : activeEd.designToolEn}</div>
            </div>

            <div style={{ padding: 14, borderRadius: 8, background: 'var(--bg)', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: 11, color: 'var(--text-3)', fontWeight: 600, marginBottom: 4 }}>{isRtl ? 'رویکرد تست و ارزیابی کد' : 'Testing Focus & QA Scope'}</div>
              <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.6 }}>{isRtl ? activeEd.testingFocusFa : activeEd.testingFocusEn}</div>
            </div>

            <div style={{ padding: 14, borderRadius: 8, background: 'var(--bg)', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: 11, color: 'var(--text-3)', fontWeight: 600, marginBottom: 4 }}>{isRtl ? 'ضوابط محیط آفلاین و کارگاه' : 'Offline Environment Rules'}</div>
              <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.6 }}>{isRtl ? activeEd.offlineRulesFa : activeEd.offlineRulesEn}</div>
            </div>
          </div>
        </div>
      </section>

      {/* WSOS Accordion (Active 2026 Specification) */}
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>
          {isRtl ? 'استانداردهای شغلی WorldSkills (WSOS) — ۷ بخش نسخه ۲۰۲۶' : 'WorldSkills Occupational Standards (WSOS) — 7 Sections (2026 Edition)'}
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-2)', marginBottom: 16 }}>
          {isRtl ? 'برای مشاهده جزئیات دانش و مهارت‌های هر بخش کلیک فرمایید.' : 'Click any section to inspect the required knowledge and competencies.'}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {WSOS_SECTIONS.map((sec, i) => (
            <AccordionItem
              key={sec.section}
              sec={sec}
              isRtl={isRtl}
              index={i}
              isOpen={expanded === sec.section}
              onToggle={() => setExpanded(expanded === sec.section ? null : sec.section)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
