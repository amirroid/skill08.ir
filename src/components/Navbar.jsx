import React, { useState } from 'react';
import Logo from './Logo';
import { Globe, Sun, Moon, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home',         fa: 'صفحه اصلی',   en: 'Home' },
  { id: 'competition',  fa: 'مسابقات',      en: 'Competition' },
  { id: 'modules',      fa: 'پودمان‌ها',     en: 'Modules' },
  { id: 'td',           fa: 'مشخصات فنی',   en: 'Tech Spec' },
  { id: 'achievements', fa: 'افتخارات',      en: 'Achievements' },
  { id: 'resources',    fa: 'منابع',         en: 'Resources' },
  { id: 'rules',        fa: 'مقررات',        en: 'Rules' },
  { id: 'contact',      fa: 'تماس',         en: 'Contact' },
];

export default function Navbar({ activePage, setActivePage, lang, setLang, theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isRtl = lang === 'fa';

  const handleNav = (id) => {
    setActivePage(id);
    setMenuOpen(false);
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      transition: 'background 0.25s ease, border-color 0.25s ease',
    }}>
      {/* ── Main bar ── */}
      <div className="page-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 58 }}>

          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              transition: 'opacity 0.15s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <Logo size="sm" showText={true} isRtl={isRtl} />
          </button>

          {/* Desktop nav */}
          <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`nav-link${activePage === item.id ? ' active' : ''}`}
              >
                {isRtl ? item.fa : item.en}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>

            <button
              onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
              className="btn btn-ghost btn-sm"
              title="Switch language"
            >
              <Globe size={13} style={{ color: 'var(--accent)' }} />
              <span style={{ fontFamily: 'IRANSansX, sans-serif', fontSize: 11 }}>
                {lang === 'fa' ? 'EN' : 'FA'}
              </span>
            </button>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="btn btn-ghost btn-sm"
              title="Toggle theme"
              style={{ padding: '6px 9px' }}
            >
              {theme === 'dark'
                ? <Sun size={14} style={{ color: 'var(--gold)' }} />
                : <Moon size={14} />
              }
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="btn btn-ghost btn-sm show-mobile"
              style={{ padding: '6px 9px' }}
              aria-label="Toggle menu"
            >
              {menuOpen
                ? <X size={15} style={{ transition: 'transform 0.2s ease', transform: 'rotate(90deg)' }} />
                : <Menu size={15} />
              }
            </button>

          </div>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div
          className="show-mobile page-container anim-fade-in"
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: 10,
            paddingBottom: 14,
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`anim-fade-up delay-${Math.min(i + 1, 6)}`}
              style={{
                textAlign: isRtl ? 'right' : 'left',
                padding: '10px 12px',
                borderRadius: 9,
                fontSize: 14,
                cursor: 'pointer',
                border: 'none',
                width: '100%',
                background: activePage === item.id ? 'var(--surface)' : 'transparent',
                color: activePage === item.id ? 'var(--text)' : 'var(--text-2)',
                fontWeight: activePage === item.id ? 600 : 400,
                fontFamily: 'IRANSansX, sans-serif',
                transition: 'background 0.12s ease, color 0.12s ease',
                display: 'block',
              }}
              onMouseEnter={e => {
                if (activePage !== item.id) e.currentTarget.style.background = 'var(--surface)';
              }}
              onMouseLeave={e => {
                if (activePage !== item.id) e.currentTarget.style.background = 'transparent';
              }}
            >
              {isRtl ? item.fa : item.en}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
