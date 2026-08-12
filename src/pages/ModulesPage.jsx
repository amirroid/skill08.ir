import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { OFFICIAL_MODULES } from '../data/competitionData';
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

const TIMELINE_FA = [
  { time: '۱۵ ماه قبل',        action: 'انتخاب طراح مستقل پروژه آزمون (ITPD) و امضای توافق‌نامه محرمانگی.' },
  { time: '۹ ماه قبل',         action: 'پیشنهاد کتابخانه‌ها و ابزارهای مجاز در تالار گفتگوی کارشناسان.' },
  { time: '۲ ماه قبل',         action: 'ارسال اسناد نهایی پروژه به مدیر سازماندهی مسابقات.' },
  { time: '۱ ماه قبل',         action: 'اعلام رسمی مشخصات محیط توسعه در تالار گفتگو.' },
  { time: 'C-3',               action: 'ارائه اسناد پروژه به کارشناسان بدون اطلاعات اجرایی.' },
  { time: 'هر روز مسابقه',     action: 'تحویل پودمان مربوطه به متسابقین در ابتدای روز رقابت.' },
];

const TIMELINE_EN = [
  { time: '15 months prior', action: 'Independent Test Project Designer (ITPD) selected; NDA signed.' },
  { time: '9 months prior',  action: 'Allowed libraries and tools proposed on the experts forum.' },
  { time: '2 months prior',  action: 'Final test project documents sent to Competition Organiser.' },
  { time: '1 month prior',   action: 'Offline development environment specifications announced.' },
  { time: 'C-3 day',         action: 'Project documents distributed to experts (no technical details).' },
  { time: 'Each morning',    action: 'Daily module distributed to competitors at start of competition day.' },
];

function ModuleCard({ m, isActive, onClick, index }) {
  return (
    <button
      onClick={onClick}
      className={`card anim-fade-up delay-${index + 1}`}
      style={{
        padding: '16px 18px',
        cursor: 'pointer',
        textAlign: 'inherit',
        width: '100%',
        display: 'flex', flexDirection: 'column', gap: 8,
        borderColor: isActive ? 'var(--accent-border)' : undefined,
        background: isActive ? 'var(--surface-hover)' : undefined,
        transition: 'border-color 0.2s ease, background 0.2s ease, transform 0.18s ease, box-shadow 0.18s ease',
      }}
      onMouseEnter={e => { if (!isActive) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)'; }}}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{
          width: 24, height: 24, borderRadius: 6, flexShrink: 0,
          background: isActive ? 'var(--accent)' : 'var(--bg)',
          border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 900,
          color: isActive ? '#fff' : 'var(--accent)',
          transition: 'all 0.2s ease',
        }}>{m.letter}</span>
        <span style={{ fontSize: 13, fontWeight: 700, color: isActive ? 'var(--accent)' : 'var(--text)', transition: 'color 0.15s ease' }}>{m.title}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--text-3)' }}>
        <Clock size={11} />
        <span>{m.duration}</span>
      </div>
    </button>
  );
}

function TaskItem({ task, index }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 8,
        padding: '10px 12px', borderRadius: 8,
        border: '1px solid var(--border)', background: 'var(--bg)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: `opacity 0.35s ease ${index * 0.05}s, transform 0.35s ease ${index * 0.05}s`,
      }}
    >
      <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', marginTop: 5, flexShrink: 0 }} />
      <span style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.65 }}>{task}</span>
    </div>
  );
}

export default function ModulesPage({ lang }) {
  const isRtl = lang === 'fa';
  const [activeTab, setActiveTab] = useState(OFFICIAL_MODULES[0].id);
  const selected = OFFICIAL_MODULES.find(m => m.id === activeTab) || OFFICIAL_MODULES[0];
  const timeline = isRtl ? TIMELINE_FA : TIMELINE_EN;

  return (
    <div style={{ paddingBottom: 80 }} className="page-enter">
      <PageHeader
        eyebrow="Section 5.3 — Test Project Design Requirements"
        title={isRtl ? 'پودمان‌های پروژه آزمون' : 'Test Project Modules'}
        sub={isRtl
          ? 'پروژه آزمون شامل ۴ پودمان مستقل با مجموع ۱۸ ساعت رقابت عملی در محیط کاملاً آفلاین است.'
          : '4 independent modules totalling 18 hours of practical competition in an offline environment.'}
      />

      {/* Module selector cards */}
      <div className="grid-auto-4" style={{ marginBottom: 32 }}>
        {OFFICIAL_MODULES.map((m, i) => (
          <ModuleCard
            key={m.id}
            m={m}
            isActive={m.id === activeTab}
            onClick={() => setActiveTab(m.id)}
            index={i}
          />
        ))}
      </div>

      {/* Tab strip */}
      <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--border)', marginBottom: 28 }}>
        {OFFICIAL_MODULES.map(m => {
          const isActive = m.id === activeTab;
          return (
            <button
              key={m.id}
              onClick={() => setActiveTab(m.id)}
              style={{
                padding: '9px 18px', fontSize: 13, fontWeight: isActive ? 600 : 400,
                cursor: 'pointer', border: 'none', background: 'none',
                color: isActive ? 'var(--text)' : 'var(--text-3)',
                borderBottom: `2px solid ${isActive ? 'var(--accent)' : 'transparent'}`,
                marginBottom: -1,
                transition: 'color 0.15s ease, border-color 0.15s ease',
                fontFamily: 'IRANSansX, sans-serif',
              }}
            >
              {isRtl ? `پودمان ${m.letter}` : `Module ${m.letter}`}
            </button>
          );
        })}
      </div>

      {/* Module detail card */}
      <div className="card anim-scale-in" style={{ padding: 28, marginBottom: 56 }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start',
          justifyContent: 'space-between', gap: 12, marginBottom: 24,
          paddingBottom: 20, borderBottom: '1px solid var(--border)',
        }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 5 }}>{selected.englishTitle}</div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: 'var(--text)', margin: 0 }}>{selected.title}</h2>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span className="badge badge-blue">
              <Clock size={11} />
              {selected.duration}
            </span>
            <span className="badge badge-neutral">{selected.device}</span>
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-3)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 10 }}>
            {isRtl ? 'خلاصه وظایف' : 'Module Scope'}
          </div>
          <p style={{
            fontSize: 13, color: 'var(--text-2)', lineHeight: 1.8,
            padding: '14px 18px', background: 'var(--bg)',
            borderRadius: 10, border: '1px solid var(--border)', margin: 0,
          }}>
            {selected.summary}
          </p>
        </div>

        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-3)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 12 }}>
            {isRtl ? 'مهارت‌های ارزیابی‌شده' : 'Skills Assessed'}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 8 }}>
            {selected.tasks.map((task, idx) => (
              <TaskItem key={idx} task={task} index={idx} />
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>
          {isRtl ? 'زمان‌بندی توسعه اسناد پروژه آزمون' : 'Test Project Development Timeline'}
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-2)', marginBottom: 16 }}>
          {isRtl ? 'بخش 5.4.3 — فرآیند رسمی طراحی و توزیع پروژه آزمون' : 'Section 5.4.3 — Official process for designing and distributing the test project'}
        </div>
        <div className="card" style={{ overflow: 'hidden' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '32%' }}>{isRtl ? 'زمان‌بندی' : 'Time Frame'}</th>
                <th>{isRtl ? 'اقدام' : 'Action'}</th>
              </tr>
            </thead>
            <tbody>
              {timeline.map((row, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600, color: 'var(--accent)', fontSize: 12 }}>{row.time}</td>
                  <td style={{ fontSize: 13 }}>{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
