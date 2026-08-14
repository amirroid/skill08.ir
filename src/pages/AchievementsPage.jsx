import React from 'react';
import { VERIFIED_ACHIEVEMENTS } from '../data/translations';
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

/* ── Clean minimal achievement card ── */
function AchCard({ ach, isRtl, delay }) {
  const [ref, visible] = useReveal();
  const [hov, setHov] = React.useState(false);

  return (
    <div
      ref={ref}
      style={{
        padding: '28px 0',
        borderBottom: '1px solid var(--border)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
        cursor: 'default',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Year + badge row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <span style={{
          fontSize: 11, fontWeight: 700, color: 'var(--text-3)',
          letterSpacing: '0.05em',
        }}>
          {ach.year}
        </span>
        <span style={{ width: 1, height: 12, background: 'var(--border)', display: 'inline-block' }} />
        <span style={{
          fontSize: 11, fontWeight: 600, color: 'var(--gold)',
          letterSpacing: '0.04em',
        }}>
          {isRtl ? ach.badgeFa : ach.badgeEn}
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap' }}>
        {/* Left: name + event */}
        <div>
          <div style={{
            fontSize: 'clamp(18px, 3vw, 24px)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            marginBottom: 6,
            transition: 'color 0.15s ease',
            color: hov ? 'var(--accent)' : 'var(--text)',
          }}>
            {isRtl ? ach.nameFa : ach.nameEn}
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-2)' }}>
            {isRtl ? ach.eventFa : ach.eventEn}
          </div>
        </div>

        {/* Right: CIS score */}
        <div style={{ textAlign: isRtl ? 'left' : 'right', flexShrink: 0 }}>
          <div style={{
            fontSize: 'clamp(32px, 5vw, 44px)',
            fontWeight: 900,
            color: hov ? 'var(--accent)' : 'var(--text)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            transition: 'color 0.2s ease',
          }}>
            {ach.score}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text-3)', marginTop: 4, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            CIS Score
          </div>
        </div>
      </div>

      {/* Result row */}
      <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{
          display: 'inline-block',
          width: 6, height: 6, borderRadius: '50%',
          background: 'var(--green)',
          flexShrink: 0,
          transition: 'transform 0.2s ease',
          transform: hov ? 'scale(1.4)' : 'scale(1)',
        }} />
        <span style={{ fontSize: 12, color: 'var(--text-2)' }}>
          {isRtl ? ach.resultFa : ach.resultEn}
        </span>
      </div>
    </div>
  );
}

/* ── Iran at Lyon 2024 — structured elements instead of a paragraph ── */
function IranLyonSection({ isRtl }) {
  const [ref, visible] = useReveal();

  const metrics = isRtl
    ? [
        { value: '۴۷ام', label: 'دوره مسابقات جهانی' },
        { value: '۱۸',   label: 'متسابق اعزامی ایران' },
        { value: '۱۵',   label: 'رشته تخصصی' },
        { value: '۷۱۴',  label: 'امتیاز CIS در Skill 08' },
      ]
    : [
        { value: '47th',  label: 'WorldSkills Edition' },
        { value: '18',    label: 'Competitors from Iran' },
        { value: '15',    label: 'Skill Areas' },
        { value: '714',   label: 'CIS Score in Skill 08' },
      ];

  return (
    <section
      ref={ref}
      style={{
        marginTop: 56,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 32, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: 11, color: 'var(--text-3)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>
          {isRtl ? 'گزارش عملکرد' : 'Performance Report'}
        </div>
        <div style={{ fontSize: 'clamp(16px, 3vw, 22px)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em' }}>
          {isRtl ? 'حضور ایران در WorldSkills Lyon 2024' : 'Iran at WorldSkills Lyon 2024'}
        </div>
      </div>

      {/* Metrics grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: 0,
        borderTop: '1px solid var(--border)',
      }}>
        {metrics.map((m, i) => (
          <div
            key={i}
            style={{
              padding: '24px 0',
              borderBottom: '1px solid var(--border)',
              paddingRight: i < metrics.length - 1 ? 24 : 0,
              borderRight: i < metrics.length - 1 ? '1px solid var(--border)' : 'none',
              paddingLeft: i > 0 ? 24 : 0,
            }}
          >
            <div style={{
              fontSize: 'clamp(24px, 4vw, 34px)',
              fontWeight: 900,
              color: 'var(--text)',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              marginBottom: 6,
            }}>
              {m.value}
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5 }}>
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AchievementsPage({ lang }) {
  const isRtl = lang === 'fa';

  return (
    <div style={{ paddingBottom: 80 }} className="page-enter">
      <PageHeader
        eyebrow="WorldSkills International — Skill 08"
        title={isRtl ? 'افتخارات رسمی ایران در مسابقات جهانی مهارت' : "Iran's Official WorldSkills Records"}
        sub={isRtl
          ? 'مستندات تأیید‌شده عملکرد نمایندگان ایران در رشته توسعه برنامه‌های کاربردی موبایل.'
          : 'Verified official records of Iranian competitors in Mobile Applications Development (Skill 08).'}
      />

      {/* Clean list of achievements — no heavy cards */}
      <div>
        {VERIFIED_ACHIEVEMENTS.map((ach, i) => (
          <AchCard key={ach.id} ach={ach} isRtl={isRtl} delay={i * 0.1} />
        ))}
      </div>

      {/* Structured Lyon 2024 section */}
      <IranLyonSection isRtl={isRtl} />
    </div>
  );
}
