import React from 'react';
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

const SPECS_FA = [
  { label: 'ساختار رقابت',    value: 'انفرادی (Single Competitor)' },
  { label: 'حداکثر سن',       value: '۲۲ سال در سال برگزاری' },
  { label: 'مدت رقابت',       value: '۱۸ ساعت — ۴ پودمان' },
  { label: 'محیط سیستم',      value: 'کاملاً آفلاین' },
  { label: 'سیستم‌عامل',       value: 'macOS (Workstation)' },
  { label: 'مرجع رسمی',       value: 'Technical Description 2026' },
];

const SPECS_EN = [
  { label: 'Competition Format', value: 'Single Competitor' },
  { label: 'Age Limit',          value: 'Max 22 years in competition year' },
  { label: 'Duration',           value: '18 hours — 4 modules' },
  { label: 'Environment',        value: 'Fully offline — no internet' },
  { label: 'Operating System',   value: 'macOS (Workstation)' },
  { label: 'Reference',          value: 'Technical Description 2026' },
];

/* Stages — no time field */
const STAGES_FA = [
  { num: '۱', title: 'مرحله استانی',           desc: 'انتخاب نفرات برتر از هر استان توسط سازمان آموزش فنی و حرفه‌ای استانی.' },
  { num: '۲', title: 'مرحله کشوری (ملی)',       desc: 'رقابت نمایندگان استان‌ها در سطح ملی برای انتخاب متسابق اصلی تیم ملی.' },
  { num: '۳', title: 'اردوی آماده‌سازی (۳ مرحله)',          desc: 'متسابقینی که در دوره‌های قبل مدال گرفته‌اند، بین دو رقابت جهانی سه دوره با هم رقابت می‌کنند. هر دوره تعدادشان کمتر می‌شود تا در پایان یک نفر به عنوان نماینده ایران انتخاب می‌شود.' },
  { num: '۴', title: 'مسابقات جهانی WorldSkills', desc: 'رقابت با نمایندگان بیش از ۸۰ کشور در مسابقات دوسالانه WorldSkills International.' },
];

const STAGES_EN = [
  { num: '1', title: 'Provincial Selection',    desc: 'Top competitors selected from each province by provincial TVTO offices.' },
  { num: '2', title: 'National Championship',   desc: 'Provincial representatives compete nationally to select the main national team competitor.' },
  { num: '3', title: 'Training Camp (3 Rounds)',        desc: 'Medalists from previous competition cycles compete over 3 elimination rounds between the two WorldSkills events. The field narrows each round until one competitor remains as Iran\'s representative.' },
  { num: '4', title: 'WorldSkills International', desc: 'Competing against representatives from 80+ countries in the biennial WorldSkills competition.' },
];

function StageRow({ num, title, desc, index }) {
  const [ref, visible] = useReveal();
  const [hov, setHov] = React.useState(false);

  return (
    <div
      ref={ref}
      className="card"
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 16, padding: '18px 20px',
        borderRadius: index === 0 ? '10px 10px 4px 4px' : index === 3 ? '4px 4px 10px 10px' : 4,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-16px)',
        transition: `opacity 0.45s ease ${index * 0.08}s, transform 0.45s ease ${index * 0.08}s, border-color 0.2s ease`,
        borderColor: hov ? 'var(--accent-border)' : undefined,
        cursor: 'default',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        width: 30, height: 30, borderRadius: 8, flexShrink: 0,
        background: hov ? 'var(--accent-subtle)' : 'var(--bg)',
        border: `1px solid ${hov ? 'var(--accent-border)' : 'var(--border)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, fontWeight: 800, color: 'var(--accent)',
        transition: 'all 0.2s ease',
      }}>
        {num}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 5, transition: 'color 0.15s ease', color: hov ? 'var(--accent)' : 'var(--text)' }}>
          {title}
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.7 }}>{desc}</div>
      </div>
    </div>
  );
}

function SpecRow({ label, value, index }) {
  const [ref, visible] = useReveal();
  return (
    <tr ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(8px)', transition: `opacity 0.4s ease ${index * 0.06}s, transform 0.4s ease ${index * 0.06}s` }}>
      <td style={{ width: '40%', fontWeight: 600, color: 'var(--text)', fontSize: 13, padding: '13px 16px', borderBottom: '1px solid var(--border)' }}>{label}</td>
      <td style={{ fontSize: 13, color: 'var(--text-2)', padding: '13px 16px', borderBottom: '1px solid var(--border)' }}>{value}</td>
    </tr>
  );
}

export default function CompetitionPage({ lang }) {
  const isRtl = lang === 'fa';
  const stages = isRtl ? STAGES_FA : STAGES_EN;
  const specs  = isRtl ? SPECS_FA  : SPECS_EN;

  return (
    <div style={{ paddingBottom: 80 }} className="page-enter">
      <PageHeader
        eyebrow="WorldSkills — Skill 08"
        title={isRtl ? 'ساختار مسابقات توسعه برنامه‌های کاربردی موبایل' : 'Competition Structure & Overview'}
        sub={isRtl
          ? 'دامنه مهارتی، نقش شغلی و مراحل انتخاب نماینده ایران در مسابقات.'
          : 'Skill scope, work role, and the full selection roadmap for Iran.'}
      />

      {/* Specs */}
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 14 }}>
          {isRtl ? 'مشخصات کلی' : 'Competition Specifications'}
        </div>
        <div className="card" style={{ overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {specs.map((row, i) => (
                <SpecRow key={i} label={row.label} value={row.value} index={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stages — no time */}
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 14 }}>
          {isRtl ? 'مراحل انتخابی در ایران' : 'Iran Selection Roadmap'}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {stages.map((stg, i) => (
            <StageRow key={i} num={stg.num} title={stg.title} desc={stg.desc} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
