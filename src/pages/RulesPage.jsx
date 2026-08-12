import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { OFFICIAL_RULES } from '../data/competitionData';
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

const EQ_FA = [
  { sec: '8.3', title: 'جعبه ابزار متسابقین',     body: 'آوردن هرگونه جعبه ابزار به سالن ممنوع است. تمام تجهیزات سخت‌افزاری توسط برگزارکننده تأمین می‌شود.' },
  { sec: '8.4', title: 'وسایل شخصی مجاز',         body: 'تنها کیبورد سیم‌دار و موس سیم‌دار شخصی در روز آشنایی (Familiarization Day) مجاز است.' },
  { sec: '9.2', title: 'ایستگاه اینترنت مشترک',   body: 'هر متسابق حداکثر ۲ نوبت ۱۰ دقیقه‌ای در روز (۸ نوبت در ۴ روز مسابقه). نوبت‌ها قابل جمع نیستند.' },
];

const EQ_EN = [
  { sec: '8.3', title: 'Competitor Toolbox',        body: 'Bringing any toolbox to the hall is prohibited. All hardware equipment is provided by the organiser.' },
  { sec: '8.4', title: 'Permitted Personal Items',  body: 'Only a wired keyboard and wired mouse are permitted on Familiarization Day.' },
  { sec: '9.2', title: 'Shared Internet Station',   body: 'Each competitor may use the shared internet station up to 2 × 10 min sessions per day (8 total across 4 days). Sessions cannot be combined.' },
];

const PROH_FA = ['حافظه USB و هارد اکسترنال', 'لپ‌تاپ و تبلت شخصی', 'گوشی تلفن همراه', 'ساعت هوشمند', 'دوربین عکاسی و فیلم‌برداری', 'کیبورد یا موس بی‌سیم'];
const PROH_EN = ['USB drives & external hard drives', 'Personal laptops & tablets', 'Mobile phones', 'Smartwatches', 'Cameras & recording devices', 'Wireless keyboards or mice'];

function EquipRow({ item, index }) {
  const [ref, visible] = useReveal();
  const [hov, setHov] = React.useState(false);
  return (
    <div
      ref={ref}
      style={{
        padding: '16px 20px',
        borderBottom: index < 2 ? '1px solid var(--border)' : 'none',
        display: 'flex', alignItems: 'flex-start', gap: 14,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-12px)',
        transition: `opacity 0.4s ease ${index * 0.08}s, transform 0.4s ease ${index * 0.08}s, background 0.15s ease`,
        background: hov ? 'var(--surface-hover)' : undefined,
        cursor: 'default',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <span style={{
        flexShrink: 0, fontSize: 10, fontWeight: 800, color: 'var(--accent)',
        padding: '2px 8px', borderRadius: 5,
        background: hov ? 'var(--accent-subtle)' : 'var(--bg)',
        border: `1px solid ${hov ? 'var(--accent-border)' : 'var(--border)'}`,
        transition: 'all 0.2s ease',
      }}>
        {item.sec}
      </span>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 5 }}>{item.title}</div>
        <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.7 }}>{item.body}</div>
      </div>
    </div>
  );
}

function RuleCard({ rule, index }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className="card"
      style={{
        padding: '18px 20px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(14px)',
        transition: `opacity 0.4s ease ${index * 0.08}s, transform 0.4s ease ${index * 0.08}s`,
      }}
    >
      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{rule.title}</div>
      <div style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.7 }}>{rule.desc}</div>
    </div>
  );
}

export default function RulesPage({ lang }) {
  const isRtl = lang === 'fa';
  const equipment = isRtl ? EQ_FA : EQ_EN;
  const prohibited = isRtl ? PROH_FA : PROH_EN;

  return (
    <div style={{ paddingBottom: 80 }} className="page-enter">
      <PageHeader
        eyebrow="Sections 8 & 9 — Equipment & Skill-Specific Rules"
        title={isRtl ? 'مقررات خاص رشته و ضوابط کارگاه' : 'Workshop Rules & Equipment Regulations'}
        sub={isRtl
          ? 'ضوابط رسمی تجهیزات مجاز، موارد ممنوعه و مقررات ویژه کارگاه مسابقات.'
          : 'Official regulations on permitted equipment, prohibited items, and competition workshop rules.'}
      />

      {/* Rule cards from data */}
      {OFFICIAL_RULES && OFFICIAL_RULES.length > 0 && (
        <div className="grid-auto-2" style={{ marginBottom: 44 }}>
          {OFFICIAL_RULES.map((rule, i) => (
            <RuleCard key={i} rule={rule} index={i} />
          ))}
        </div>
      )}

      {/* Equipment detail */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 14 }}>
          {isRtl ? 'تجهیزات و ایستگاه کارگاه' : 'Equipment & Workshop Station'}
        </div>
        <div className="card" style={{ overflow: 'hidden' }}>
          {equipment.map((item, i) => (
            <EquipRow key={i} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Prohibited */}
      <div className="card anim-fade-up" style={{ padding: '22px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 18 }}>
          <AlertTriangle size={15} style={{ color: 'var(--gold)', flexShrink: 0 }} />
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>
            {isRtl ? 'تجهیزات اکیداً ممنوع در کارگاه (Section 9.2)' : 'Strictly Prohibited Equipment (Section 9.2)'}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
          {prohibited.map((item, i) => (
            <div
              key={i}
              className={`anim-fade-up delay-${Math.min(i + 1, 6)}`}
              style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, color: 'var(--text-2)' }}
            >
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
