import React from 'react';

/**
 * Logo: Abstract geometric mark — a clean code slash inside a refined square.
 * No numerals in the icon. Wordmark carries the "08" identity.
 */
export default function Logo({ size = 'md', showText = true, isRtl = true }) {
  const markSize = size === 'sm' ? 30 : size === 'lg' ? 46 : 36;
  const fontSizeSkill = size === 'sm' ? 12 : size === 'lg' ? 15 : 13;
  const fontSizeSub   = size === 'sm' ? 9  : size === 'lg' ? 11 : 10;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: size === 'sm' ? 9 : 11,
    }}>

      {/* ── SVG Mark — slash inside rounded square ── */}
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Skill 08"
        style={{ display: 'block', flexShrink: 0 }}
      >
        {/* Outer square */}
        <rect width="36" height="36" rx="9" fill="var(--accent)" />

        {/* Subtle top gloss */}
        <rect x="1" y="1" width="34" height="16" rx="8" fill="white" fillOpacity="0.06" />

        {/* Single bold chevron — clean, directional, modern */}
        <path
          d="M14 11 L23 18 L14 25"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* ── Wordmark ── */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
            <span style={{
              fontSize: fontSizeSkill,
              fontWeight: 800,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              fontFamily: 'IRANSansX, sans-serif',
            }}>
              {isRtl ? 'مهارت ۰۸' : 'Skill 08'}
            </span>
            <span style={{
              fontSize: fontSizeSub - 1,
              fontWeight: 700,
              color: 'var(--accent)',
              letterSpacing: '0.05em',
              fontFamily: 'IRANSansX, sans-serif',
              lineHeight: 1,
              opacity: 0.9,
            }}>
              IR
            </span>
          </div>
          <span style={{
            fontSize: fontSizeSub,
            fontWeight: 400,
            color: 'var(--text-3)',
            lineHeight: 1,
            fontFamily: 'IRANSansX, sans-serif',
          }}>
            {isRtl ? 'توسعه برنامه‌های موبایل' : 'Mobile Applications Dev'}
          </span>
        </div>
      )}
    </div>
  );
}
