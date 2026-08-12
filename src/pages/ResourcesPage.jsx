import React, { useState } from 'react';
import { Download } from 'lucide-react';
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

const RESOURCES = [
  {
    id: 1, category: 'docs', code: 'WSC2026_TD08_en',
    titleFa: 'سند مشخصات فنی (Technical Description)', titleEn: 'Technical Description (TD)',
    format: 'PDF', size: '767 KB',
    descFa: 'سند اصلی شامل استانداردهای WSOS، ساختار پودمان‌ها، شیوه ارزیابی و مقررات مسابقه.',
    descEn: 'Main document containing WSOS standards, module structure, assessment criteria, and competition rules.',
    link: '/TD.pdf', isOfficial: true,
  },
  {
    id: 2, category: 'modules', code: 'MODULES-SPEC-08',
    titleFa: 'مشخصات پودمان‌های A، B، C و D', titleEn: 'Module A, B, C, D Specifications',
    format: 'PDF', size: '1.2 MB',
    descFa: 'راهنمای وظایف، معیارهای ارزیابی و دستگاه‌های هر پودمان.',
    descEn: 'Breakdown of tasks, assessment criteria, and devices for each module.',
    link: '#', isOfficial: true,
  },
  {
    id: 3, category: 'tools', code: 'INFRA-LIST-2026',
    titleFa: 'لیست رسمی ابزارها و کتابخانه‌های مجاز', titleEn: 'Official Whitelisted Tools & Libraries',
    format: 'PDF', size: '450 KB',
    descFa: 'فهرست Android Studio، Xcode، Figma، JDKها و کتابخانه‌های Retrofit/Ktor/Alamofire.',
    descEn: 'Complete list of Android Studio, Xcode, Figma, JDKs, and Retrofit/Ktor/Alamofire libraries.',
    link: '#', isOfficial: true,
  },
  {
    id: 4, category: 'code', code: 'TEST-SUITE-KOTLIN-SWIFT',
    titleFa: 'الگوهای تست واحد اتوماتیک', titleEn: 'Automated Unit Test Templates',
    format: 'ZIP', size: '2.4 MB',
    descFa: 'الگوهای استاندارد ViewModel، UseCase و Repository مطابق معیارهای ماژول D.',
    descEn: 'Standard ViewModel, UseCase, and Repository test patterns aligned with Module D criteria.',
    link: '#', isOfficial: false,
  },
  {
    id: 5, category: 'docs', code: 'CIS-MARK-SCHEME',
    titleFa: 'جدول توزیع نمرات CIS', titleEn: 'CIS Mark Summary Form',
    format: 'PDF', size: '320 KB',
    descFa: 'معیارهای ارزیابی عینی (Measurement) و توصیفی (Judgement ۰ تا ۳) توسط کارشناسان.',
    descEn: 'Objective (Measurement) and subjective (Judgement 0–3 scale) assessment criteria.',
    link: '#', isOfficial: true,
  },
  {
    id: 6, category: 'tools', code: 'OFFLINE-DOCS-SDK',
    titleFa: 'مستندات آفلاین SDK اندروید و iOS', titleEn: 'Offline Android & iOS SDK Docs',
    format: 'TAR.GZ', size: '850 MB',
    descFa: 'راهنماهای محلی SDK اندروید و اپل برای استفاده بدون اینترنت در طول مسابقه.',
    descEn: 'Local Android and Apple SDK documentation for offline use during the competition.',
    link: '#', isOfficial: true,
  },
];

const CATS_FA = [
  { id: 'all', label: 'همه' },
  { id: 'docs', label: 'اسناد رسمی' },
  { id: 'modules', label: 'پودمان‌ها' },
  { id: 'tools', label: 'ابزارها' },
  { id: 'code', label: 'کد نمونه' },
];
const CATS_EN = [
  { id: 'all', label: 'All' },
  { id: 'docs', label: 'Official Docs' },
  { id: 'modules', label: 'Modules' },
  { id: 'tools', label: 'Tools' },
  { id: 'code', label: 'Sample Code' },
];

function ResourceRow({ res, isRtl, index }) {
  const [ref, visible] = useReveal();
  const [hov, setHov] = useState(false);
  const isFirst = index === 0;

  return (
    <div
      ref={ref}
      className="card"
      style={{
        padding: '18px 22px',
        borderRadius: 4,
        display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity 0.4s ease ${index * 0.07}s, transform 0.4s ease ${index * 0.07}s, border-color 0.2s ease, background 0.15s ease`,
        borderColor: hov ? 'var(--accent-border)' : undefined,
        background: hov ? 'var(--surface-hover)' : undefined,
        cursor: 'default',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Left: info */}
      <div style={{ flex: 1, minWidth: 220 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7, flexWrap: 'wrap' }}>
          <span style={{
            fontSize: 11, fontWeight: 700, color: 'var(--text-3)',
            background: 'var(--bg)', border: '1px solid var(--border)',
            padding: '2px 8px', borderRadius: 4,
          }}>
            {res.code}
          </span>
          {res.isOfficial && (
            <span className="badge badge-blue" style={{ fontSize: 10 }}>
              {isRtl ? 'رسمی TD' : 'Official TD'}
            </span>
          )}
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, color: hov ? 'var(--accent)' : 'var(--text)', marginBottom: 5, transition: 'color 0.15s ease' }}>
          {isRtl ? res.titleFa : res.titleEn}
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.65 }}>
          {isRtl ? res.descFa : res.descEn}
        </div>
      </div>

      {/* Right: meta + download */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: isRtl ? 'flex-start' : 'flex-end', gap: 10, flexShrink: 0 }}>
        <div style={{ fontSize: 11, color: 'var(--text-3)' }}>
          {res.format} · {res.size}
        </div>
        <a
          href={res.link}
          onClick={e => { if (res.link === '#') e.preventDefault(); }}
          className="btn btn-ghost btn-sm"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}
        >
          <Download size={12} />
          <span>{isRtl ? 'دریافت' : 'Download'}</span>
        </a>
      </div>
    </div>
  );
}

export default function ResourcesPage({ lang }) {
  const isRtl = lang === 'fa';
  const [cat, setCat] = useState('all');
  const cats = isRtl ? CATS_FA : CATS_EN;
  const filtered = RESOURCES.filter(r => cat === 'all' || r.category === cat);

  return (
    <div style={{ paddingBottom: 80 }} className="page-enter">
      <PageHeader
        eyebrow="Official Documentation & Materials"
        title={isRtl ? 'مرکز منابع و اسناد رسمی' : 'Resource Center'}
        sub={isRtl
          ? 'دسترسی مستقیم به اسناد فنی، لیست ابزارهای مجاز، و راهنماهای آماده‌سازی.'
          : 'Direct access to technical documents, whitelisted tools, and preparation guides.'}
      />

      {/* Category pills */}
      <div className="anim-fade-up" style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 28 }}>
        {cats.map(c => (
          <button
            key={c.id}
            onClick={() => setCat(c.id)}
            style={{
              padding: '5px 16px', borderRadius: 999, fontSize: 12, fontWeight: 500,
              cursor: 'pointer',
              border: `1px solid ${cat === c.id ? 'var(--accent-border)' : 'var(--border)'}`,
              background: cat === c.id ? 'var(--accent-subtle)' : 'transparent',
              color: cat === c.id ? 'var(--accent)' : 'var(--text-3)',
              transition: 'all 0.18s cubic-bezier(0.16,1,0.3,1)',
              fontFamily: 'IRANSansX, sans-serif',
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Resource list with stacked card borders */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filtered.map((res, i) => (
          <ResourceRow key={res.id} res={res} isRtl={isRtl} index={i} />
        ))}
      </div>
    </div>
  );
}
