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

function AchCard({ ach, isRtl, delay }) {
  const [ref, visible] = useReveal();
  const [hov, setHov] = React.useState(false);

  return (
    <div
      ref={ref}
      className="card"
      style={{
        padding: 28,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s, border-color 0.2s ease, box-shadow 0.2s ease`,
        borderColor: hov ? 'var(--accent-border)' : undefined,
        boxShadow: hov ? '0 10px 32px rgba(0,0,0,0.18)' : undefined,
        cursor: 'default',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <span className="badge badge-gold">{isRtl ? ach.badgeFa : ach.badgeEn}</span>
        <span style={{ fontSize: 12, color: 'var(--text-3)' }}>{ach.year}</span>
      </div>

      {/* Competitor name */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--text)', marginBottom: 5 }}>
          {isRtl ? ach.nameFa : ach.nameEn}
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-2)' }}>{isRtl ? ach.eventFa : ach.eventEn}</div>
      </div>

      {/* Data table */}
      <div style={{
        border: '1px solid var(--border)',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 16,
        transition: 'border-color 0.2s ease',
        borderColor: hov ? 'var(--accent-border)' : undefined,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 16px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
          <span style={{ fontSize: 12, color: 'var(--text-3)' }}>{isRtl ? 'رشته' : 'Skill'}</span>
          <span style={{ fontSize: 12, color: 'var(--text-2)' }}>Mobile Applications Dev — Skill 08</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', background: 'var(--bg)' }}>
          <span style={{ fontSize: 12, color: 'var(--text-3)' }}>{isRtl ? 'امتیاز CIS' : 'CIS Score'}</span>
          <span style={{
            fontSize: 30, fontWeight: 900, color: 'var(--accent)', lineHeight: 1,
            transition: 'transform 0.2s ease',
            transform: hov ? 'scale(1.08)' : 'scale(1)',
            display: 'block',
          }}>
            {ach.score}
          </span>
        </div>
      </div>

      {/* Result */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} />
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--green)' }}>
          {isRtl ? ach.resultFa : ach.resultEn}
        </span>
      </div>

      {/* Verified footnote */}
      <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--border)', fontSize: 11, color: 'var(--text-3)' }}>
        {isRtl ? '✓ ثبت‌شده در سامانه رسمی WorldSkills International' : '✓ Verified by WorldSkills International'}
      </div>
    </div>
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

      {/* Cards — no rank shown */}
      <div className="grid-auto-2" style={{ marginBottom: 44 }}>
        {VERIFIED_ACHIEVEMENTS.map((ach, i) => (
          <AchCard key={ach.id} ach={ach} isRtl={isRtl} delay={i * 0.1} />
        ))}
      </div>

      {/* Context block */}
      <div className="card anim-fade-up" style={{ padding: 26 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>
          {isRtl ? 'حضور ایران در WorldSkills Lyon 2024' : "Iran at WorldSkills Lyon 2024"}
        </div>
        <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.8, margin: 0 }}>
          {isRtl
            ? 'جمهوری اسلامی ایران در چهل‌وهفتمین مسابقات جهانی مهارت (Lyon 2024) با ۱۸ متسابق نخبه در ۱۵ رشته تخصصی شرکت نمود. در رشته توسعه برنامه‌های کاربردی موبایل، امیررضا غلامی با کسب ۷۱۴ امتیاز موفق به دریافت دیپلم افتخار بین‌المللی شد.'
            : 'At the 47th WorldSkills Competition in Lyon 2024, Iran competed with 18 elite competitors across 15 skills. In Mobile Applications Development (Skill 08), Amirreza Gholami earned a CIS score of 714, winning the Medallion for Excellence.'}
        </p>
      </div>
    </div>
  );
}
