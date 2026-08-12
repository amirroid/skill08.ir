import React from 'react';
import { ExternalLink } from 'lucide-react';
import Logo from './Logo';

const FA_LINKS = [
  { id: 'home',         label: 'صفحه اصلی' },
  { id: 'competition',  label: 'مسابقات' },
  { id: 'modules',      label: 'پودمان‌ها' },
  { id: 'td',           label: 'مشخصات فنی' },
  { id: 'achievements', label: 'افتخارات' },
  { id: 'resources',    label: 'منابع' },
  { id: 'rules',        label: 'مقررات' },
  { id: 'contact',      label: 'تماس' },
];

const EN_LINKS = [
  { id: 'home',         label: 'Home' },
  { id: 'competition',  label: 'Competition' },
  { id: 'modules',      label: 'Modules' },
  { id: 'td',           label: 'Tech Spec' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'resources',    label: 'Resources' },
  { id: 'rules',        label: 'Rules' },
  { id: 'contact',      label: 'Contact' },
];

export default function Footer({ setActivePage, lang }) {
  const isRtl = lang === 'fa';
  const links = isRtl ? FA_LINKS : EN_LINKS;

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      marginTop: 80,
      padding: '40px 24px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Top row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'space-between', marginBottom: 32 }}>

          {/* Brand */}
          <div style={{ maxWidth: 300 }}>
            <div style={{ marginBottom: 14 }}>
              <Logo size="sm" showText={true} isRtl={isRtl} />
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.75 }}>
              {isRtl
                ? 'تارنمای رسمی مسابقات مهارت توسعه برنامه‌های کاربردی موبایل ایران. بر اساس Technical Description 2026 به‌روزشده.'
                : 'Official portal for WorldSkills Mobile Applications Development — Iran. Based on the updated 2026 Technical Description.'}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>
              {isRtl ? 'صفحات' : 'Pages'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {links.map(link => (
                <button
                  key={link.id}
                  onClick={() => setActivePage(link.id)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: 13, color: 'var(--text-2)',
                    textAlign: isRtl ? 'right' : 'left',
                    padding: 0, transition: 'color 0.1s',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--text)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* External Links */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>
              {isRtl ? 'مراجع' : 'References'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a
                href="https://worldskills.org"
                target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.1s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
              >
                <ExternalLink size={11} />
                <span>WorldSkills International</span>
              </a>
              <a
                href="https://irantvto.ir"
                target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.1s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
              >
                <ExternalLink size={11} />
                <span>سازمان آموزش فنی و حرفه‌ای</span>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>
              {isRtl ? 'ارتباط' : 'Contact'}
            </div>
            <a
              href="mailto:contact@skill08.ir"
              style={{ fontSize: 13, color: 'var(--accent)', textDecoration: 'none', fontFamily: 'IRANSansX, sans-serif' }}
            >
              contact@skill08.ir
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 20,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 8,
          fontSize: 11,
          color: 'var(--text-3)',
        }}>
          <span>© {new Date().getFullYear()} Skill 08 Iran — WorldSkills Mobile Applications Development</span>
          <span style={{ fontFamily: 'IRANSansX, sans-serif' }}>Technical Description 2026</span>
        </div>

      </div>
    </footer>
  );
}
