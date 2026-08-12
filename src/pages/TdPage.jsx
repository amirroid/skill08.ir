import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { OFFICIAL_TD_INFO, WSOS_SECTIONS } from '../data/competitionData';
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
      {sub && <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.75, maxWidth: 600 }}>{sub}</p>}
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
  const isRtl = lang === 'fa';

  const meta = isRtl
    ? [
        { label: 'کد سند',       value: OFFICIAL_TD_INFO.documentCode },
        { label: 'شماره رشته',   value: OFFICIAL_TD_INFO.skillNumber  },
        { label: 'بروزرسانی',    value: OFFICIAL_TD_INFO.lastUpdated  },
        { label: 'ویرایش',       value: 'WSC2026'                     },
      ]
    : [
        { label: 'Document Code', value: OFFICIAL_TD_INFO.documentCode },
        { label: 'Skill Number',  value: OFFICIAL_TD_INFO.skillNumber  },
        { label: 'Last Updated',  value: OFFICIAL_TD_INFO.lastUpdated  },
        { label: 'Edition',       value: 'WSC2026'                     },
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

  return (
    <div style={{ paddingBottom: 80 }} className="page-enter">
      <PageHeader
        eyebrow={OFFICIAL_TD_INFO.documentCode}
        title={isRtl ? 'سند مشخصات فنی (Technical Description)' : 'Technical Description (TD)'}
        sub={isRtl
          ? 'سند رسمی استانداردهای شغلی WorldSkills برای رشته توسعه برنامه‌های کاربردی موبایل (Skill 08).'
          : 'Official WorldSkills Occupational Standards for Mobile Applications Development (Skill 08).'}
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
      <div className="grid-auto-4" style={{ marginBottom: 44 }}>
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

      {/* WSOS Accordion */}
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>
          {isRtl ? 'استانداردهای شغلی WorldSkills (WSOS) — ۷ بخش' : 'WorldSkills Occupational Standards — 7 Sections'}
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-2)', marginBottom: 16 }}>
          {isRtl ? 'کلیک کنید تا جزئیات هر بخش را مشاهده کنید.' : 'Click any section to expand its knowledge items.'}
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
