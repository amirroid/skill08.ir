import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, Trophy, FileText, Layers, BookOpen } from 'lucide-react';
import { VERIFIED_ACHIEVEMENTS } from '../data/translations';
import { useReveal, useRevealChildren, useCounter } from '../hooks/useReveal';

/* ── Animated Stat ── */
function AnimStat({ value, label, suffix = '', delay }) {
  const [ref, count] = useCounter(value, 900);
  const [wrapRef, visible] = useReveal();

  return (
    <div
      ref={wrapRef}
      style={{
        padding: '20px 0',
        borderBottom: '1px solid var(--border)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(14px)',
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
      }}
    >
      <div ref={ref} className="stat-val">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/* ── Achievement row (minimal, no heavy border box) ── */
function AchCard({ ach, isRtl, delay }) {
  const [ref, visible] = useReveal();
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      ref={ref}
      style={{
        padding: '22px 0',
        borderBottom: '1px solid var(--border)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(14px)',
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.04em' }}>
          {ach.year}
        </span>
        <span style={{ width: 1, height: 10, background: 'var(--border)', display: 'inline-block' }} />
        <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--gold)' }}>
          {isRtl ? ach.badgeFa : ach.badgeEn}
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 4, transition: 'color 0.15s ease', color: hovered ? 'var(--accent)' : 'var(--text)' }}>
            {isRtl ? ach.nameFa : ach.nameEn}
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-2)' }}>{isRtl ? ach.eventFa : ach.eventEn}</div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{ fontSize: 30, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1, transition: 'color 0.2s ease', color: hovered ? 'var(--accent)' : 'var(--text)' }}>
            {ach.score}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text-3)', marginTop: 3, letterSpacing: '0.05em', textTransform: 'uppercase' }}>CIS Score</div>
        </div>
      </div>
    </div>
  );
}

/* ── Gateway Card ── */
function GatewayCard({ icon: Icon, title, desc, onClick, delay }) {
  const [ref, visible] = useReveal();
  const [hovered, setHovered] = React.useState(false);

  return (
    <button
      ref={ref}
      onClick={onClick}
      className="card card-interactive"
      style={{
        padding: '22px 22px 26px',
        width: '100%',
        textAlign: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(18px)',
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s, border-color 0.2s ease, box-shadow 0.2s ease`,
        borderColor: hovered ? 'var(--accent-border)' : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width: 36, height: 36, borderRadius: 9,
        background: hovered ? 'var(--accent-subtle)' : 'var(--bg)',
        border: `1px solid ${hovered ? 'var(--accent-border)' : 'var(--border)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.2s ease',
      }}>
        <Icon size={16} style={{ color: 'var(--accent)', transition: 'transform 0.2s ease', transform: hovered ? 'scale(1.15)' : 'scale(1)' }} />
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, color: hovered ? 'var(--accent)' : 'var(--text)', transition: 'color 0.15s ease' }}>{title}</div>
      <div style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.65 }}>{desc}</div>
    </button>
  );
}

/* ── Section Header ── */
function SectionHeader({ label, title, action, onAction }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      borderBottom: '1px solid var(--border)', paddingBottom: 16, marginBottom: 24,
    }}>
      <div>
        {label && (
          <div style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, marginBottom: 4 }}>
            {label}
          </div>
        )}
        <div className="section-title">{title}</div>
      </div>
      {action && (
        <button
          onClick={onAction}
          style={{ fontSize: 12, color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0, transition: 'opacity 0.15s ease' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          {action}
        </button>
      )}
    </div>
  );
}

export default function HomePage({ setActivePage, lang }) {
  const isRtl = lang === 'fa';
  const gridRef = useRef(null);
  useRevealChildren(gridRef);

  const stats = isRtl
    ? [
        { value: 18,  suffix: '',     label: 'ساعت رقابت عملی',       delay: 0.05 },
        { value: 4,   suffix: '',     label: 'پودمان تخصصی',           delay: 0.1  },
        { value: 22,  suffix: '',     label: 'حداکثر سن متسابق',       delay: 0.15 },
        { value: 753, suffix: '',     label: 'بالاترین امتیاز CIS ایران', delay: 0.2 },
      ]
    : [
        { value: 18,  suffix: ' hrs', label: 'Practical competition', delay: 0.05 },
        { value: 4,   suffix: '',     label: 'Test modules',          delay: 0.1  },
        { value: 22,  suffix: ' yrs', label: 'Age limit',             delay: 0.15 },
        { value: 753, suffix: '',     label: "Iran's top CIS score",  delay: 0.2  },
      ];

  const gateways = isRtl
    ? [
        { id: 'td',        icon: FileText, title: 'سند مشخصات فنی (TD)',    desc: '۷ بخش WSOS، درصدهای وزن‌دهی و الزامات شغلی.' },
        { id: 'modules',   icon: Layers,   title: 'پودمان‌های پروژه آزمون', desc: 'جزئیات کامل پودمان‌های A، B، C و D.' },
        { id: 'resources', icon: BookOpen, title: 'مرکز منابع',              desc: 'دانلود TD.pdf، ابزارها و اسناد رسمی.' },
      ]
    : [
        { id: 'td',        icon: FileText, title: 'Technical Description',  desc: '7-section WSOS weightings and occupational specs.' },
        { id: 'modules',   icon: Layers,   title: 'Test Project Modules',   desc: 'Module A, B, C, and D detailed specifications.' },
        { id: 'resources', icon: BookOpen, title: 'Resource Center',        desc: 'Download TD.pdf, tools, and official documents.' },
      ];

  return (
    <div style={{ paddingBottom: 100 }} className="page-enter">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="anim-fade-up" style={{ marginBottom: 18 }}>
          <span className="badge badge-blue">
            {isRtl ? 'بر اساس Technical Description 2026 · مهارت ۰۸' : 'Based on Technical Description 2026 · Skill 08'}
          </span>
        </div>

        <h1
          className="anim-fade-up delay-1"
          style={{
            fontSize: 'clamp(30px, 6vw, 58px)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: 20,
            maxWidth: 700,
          }}
        >
          {isRtl ? (
            <>
              مسابقات مهارت<br />
              <span style={{ color: 'var(--accent)' }}>توسعه برنامه‌های کاربردی موبایل</span>
            </>
          ) : (
            <>
              WorldSkills<br />
              <span style={{ color: 'var(--accent)' }}>Mobile Applications Development</span>
            </>
          )}
        </h1>

        <p
          className="anim-fade-up delay-2"
          style={{
            fontSize: 'clamp(14px, 2vw, 17px)',
            lineHeight: 1.8,
            color: 'var(--text-2)',
            maxWidth: 560,
            marginBottom: 36,
          }}
        >
          {isRtl
            ? 'تارنمای رسمی استانداردهای شغلی، آیین‌نامه فنی، پودمان‌های پروژه آزمون و کارنامه افتخارات تیم ملی ایران در رقابت‌های جهانی WorldSkills.'
            : "The official portal for WorldSkills Occupational Standards, Technical Description, test project modules, and Iran's national team achievements."}
        </p>

        <div className="anim-fade-up delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <button
            onClick={() => setActivePage('competition')}
            className="btn btn-primary btn-lg"
          >
            <span>{isRtl ? 'ساختار مسابقات' : 'Competition Overview'}</span>
            {isRtl ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
          </button>
          <button
            onClick={() => setActivePage('achievements')}
            className="btn btn-ghost btn-lg"
          >
            <Trophy size={15} style={{ color: 'var(--gold)' }} />
            <span>{isRtl ? 'افتخارات ایران' : "Iran's Records"}</span>
          </button>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        borderTop: '1px solid var(--border)',
        marginBottom: 80,
      }}>
        {stats.map((s, i) => (
          <AnimStat key={i} value={s.value} suffix={s.suffix} label={s.label} delay={s.delay} />
        ))}
      </section>

      {/* ── Iran Achievements ──────────────────────────────────── */}
      <section style={{ marginBottom: 80 }}>
        <SectionHeader
          label={isRtl ? 'کارنامه رسمی' : 'Verified Records'}
          title={isRtl ? 'افتخارات تیم ملی ایران در WorldSkills' : "Iran's WorldSkills Achievements"}
          action={isRtl ? 'مشاهده همه ←' : 'View all →'}
          onAction={() => setActivePage('achievements')}
        />
        <div className="grid-auto-2">
          {VERIFIED_ACHIEVEMENTS.map((ach, i) => (
            <AchCard key={ach.id} ach={ach} isRtl={isRtl} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* ── Gateway Cards ──────────────────────────────────────── */}
      <section>
        <SectionHeader
          title={isRtl ? 'دسترسی سریع' : 'Quick Access'}
        />
        <div className="grid-auto-3">
          {gateways.map((g, i) => (
            <GatewayCard
              key={g.id}
              icon={g.icon}
              title={g.title}
              desc={g.desc}
              onClick={() => setActivePage(g.id)}
              delay={i * 0.07}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
