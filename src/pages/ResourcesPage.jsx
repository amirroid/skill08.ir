import React, { useState } from 'react';
import { Download, FileText, ExternalLink, CheckCircle2 } from 'lucide-react';
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

const REAL_RESOURCES = [
  {
    id: 'td-2026',
    category: 'docs',
    tag: 'نسخه رسمی ۲۰۲۶',
    tagEn: 'Official 2026 Edition',
    titleFa: 'سند مشخصات فنی ۲۰۲۶ (Technical Description 2026)',
    titleEn: 'Technical Description 2026 (Active Edition)',
    format: 'PDF',
    size: '۷۶۷ KB',
    descFa: 'سند رسمی استانداردهای شغلی WSOS، سرفصل‌های ارزیابی، چارچوب ۴ پودمان مسابقه و قوانین برگزاری مسابقات شانگهای ۲۰۲۶.',
    descEn: 'Official WorldSkills Technical Description including WSOS weightings, 4 module scopes, and competition guidelines.',
    link: '/TD-2026.pdf',
    isOfficial: true,
    isAvailable: true
  },
  {
    id: 'td-2024',
    category: 'docs',
    tag: 'نسخه لیون ۲۰۲۴',
    tagEn: 'Lyon 2024 Edition',
    titleFa: 'سند مشخصات فنی ۲۰۲۴ (Technical Description 2024 - Lyon)',
    titleEn: 'Technical Description 2024 (Lyon Edition)',
    format: 'PDF',
    size: '۵۹۷ KB',
    descFa: 'سند مشخصات فنی چهل‌وهفتمین دوره مسابقات جهانی مهارت در لیون فرانسه با بخش تفکیکی Sustainable Practice و ضوابط Figma.',
    descEn: 'Official Technical Description used at the 47th WorldSkills Competition in Lyon with sustainable coding standards.',
    link: '/TD-2024.pdf',
    isOfficial: true,
    isAvailable: true
  },
  {
    id: 'td-2022',
    category: 'docs',
    tag: 'نسخه ۲۰۲۲',
    tagEn: '2022 Special Edition',
    titleFa: 'سند مشخصات فنی ۲۰۲۲ (Technical Description 2022 - Special Edition)',
    titleEn: 'Technical Description 2022 (Special Edition)',
    format: 'PDF',
    size: '۱.۱ MB',
    descFa: 'سند مرجع رقابت‌های جهانی ۲۰۲۲ در رشته توسعه برنامه‌های کاربردی موبایل (شامل ساختار اولیه پودمان‌های ۴گانه).',
    descEn: 'Official Technical Description reference from the 2022 Special Edition Mobile Applications Development competition.',
    link: '/TD-2022.pdf',
    isOfficial: true,
    isAvailable: true
  }
];

const CATS_FA = [
  { id: 'all', label: 'همه اسناد رسمی' },
  { id: 'docs', label: 'Technical Description (همه سال‌ها)' }
];
const CATS_EN = [
  { id: 'all', label: 'All Official Documents' },
  { id: 'docs', label: 'Technical Descriptions' }
];

function ResourceRow({ res, isRtl, index }) {
  const [ref, visible] = useReveal();
  const [hov, setHov] = useState(false);

  return (
    <div
      ref={ref}
      className="card"
      style={{
        padding: '20px 22px',
        borderRadius: 8,
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
      <div style={{ flex: 1, minWidth: 240 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7, flexWrap: 'wrap' }}>
          <span style={{
            fontSize: 11, fontWeight: 700, color: 'var(--accent)',
            background: 'var(--accent-subtle)', border: '1px solid var(--accent-border)',
            padding: '2px 8px', borderRadius: 4,
          }}>
            {isRtl ? res.tag : res.tagEn}
          </span>
          {res.isOfficial && (
            <span className="badge badge-blue" style={{ fontSize: 10 }}>
              {isRtl ? 'سند رسمی WorldSkills' : 'Official WorldSkills Doc'}
            </span>
          )}
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, color: hov ? 'var(--accent)' : 'var(--text)', marginBottom: 5, transition: 'color 0.15s ease' }}>
          {isRtl ? res.titleFa : res.titleEn}
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.7 }}>
          {isRtl ? res.descFa : res.descEn}
        </div>
      </div>

      {/* Right: meta + direct real download */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: isRtl ? 'flex-start' : 'flex-end', gap: 10, flexShrink: 0 }}>
        <div style={{ fontSize: 11, color: 'var(--text-3)' }}>
          {res.format} · {res.size}
        </div>
        <a
          href={res.link}
          download
          className="btn btn-primary btn-sm"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}
        >
          <Download size={13} />
          <span>{isRtl ? 'دانلود مستقیم فایل' : 'Download PDF'}</span>
        </a>
      </div>
    </div>
  );
}

export default function ResourcesPage({ lang }) {
  const isRtl = lang === 'fa';
  const [cat, setCat] = useState('all');
  const cats = isRtl ? CATS_FA : CATS_EN;
  const filtered = REAL_RESOURCES.filter(r => cat === 'all' || r.category === cat);

  return (
    <div style={{ paddingBottom: 80 }} className="page-enter">
      <PageHeader
        eyebrow={isRtl ? 'اسناد و مراجع رسمی' : 'Official Documents & References'}
        title={isRtl ? 'مرکز دانلود اسناد رسمی مسابقات' : 'Official Documents Center'}
        sub={isRtl
          ? 'دسترسی مستقیم و دانلود فایل‌های PDF اسناد مشخصات فنی (Technical Description) رشته توسعه برنامه‌های کاربردی موبایل در دوره‌های ۲۰۲۲، ۲۰۲۴ و ۲۰۲۶.'
          : 'Direct download access to the official Technical Description PDF files for Mobile Applications Development across the 2022, 2024, and 2026 editions.'}
      />

      {/* Resource list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {filtered.map((res, i) => (
          <ResourceRow key={res.id} res={res} isRtl={isRtl} index={i} />
        ))}
      </div>

      {/* Verified note */}
      <div className="card anim-fade-up" style={{ padding: 22, marginTop: 36, background: 'var(--bg)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <CheckCircle2 size={16} style={{ color: 'var(--green)' }} />
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>
            {isRtl ? 'اصالت و اعتبار اسناد' : 'Document Authenticity'}
          </span>
        </div>
        <p style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.75, margin: 0 }}>
          {isRtl
            ? 'تمامی فایل‌های ارائه‌شده در این بخش مستقیماً از پورتال رسمی سازمان جهانی مهارت (WorldSkills International) استخراج شده و بدون هیچ‌گونه تغییر، جهت استفاده مربیان، کارشناسان و متسابقین تیم ملی در دسترس قرار گرفته است.'
            : 'All documents provided in this section are authentic files directly obtained from WorldSkills International, made accessible without modification for competitors, coaches, and technical experts.'}
        </p>
      </div>
    </div>
  );
}
