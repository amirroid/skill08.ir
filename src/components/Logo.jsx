import React from 'react';

/**
 * Logo: A clean SVG mark — mobile frame with </> code brackets inside.
 * Accent color from CSS variable. IRANSansX font for text.
 * Props:
 *   size: 'sm' | 'md' | 'lg'
 *   showText: boolean
 *   isRtl: boolean
 */
export default function Logo({ size = 'md', showText = true, isRtl = true }) {
  const dim = size === 'sm' ? 30 : size === 'lg' ? 48 : 38;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexDirection: isRtl ? 'row' : 'row',
    }}>
      {/* ── SVG Mark ── */}
      <div style={{
        width: dim,
        height: dim,
        flexShrink: 0,
        position: 'relative',
        transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', display: 'block' }}
          aria-label="Skill 08 Logo"
        >
          {/* ── Phone outer frame ── */}
          <rect
            x="7" y="2"
            width="26" height="36"
            rx="6"
            stroke="var(--accent)"
            strokeWidth="2"
            fill="none"
          />

          {/* ── Screen area subtle fill ── */}
          <rect
            x="10" y="7"
            width="20" height="24"
            rx="3"
            fill="var(--accent)"
            fillOpacity="0.08"
          />

          {/* ── Left bracket < ── */}
          <path
            d="M17 15 L13 20 L17 25"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* ── Right bracket > ── */}
          <path
            d="M23 15 L27 20 L23 25"
            stroke="var(--text)"
            strokeOpacity="0.6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* ── Slash / ── */}
          <line
            x1="21.5" y1="14"
            x2="18.5" y2="26"
            stroke="var(--accent)"
            strokeOpacity="0.55"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* ── Bottom pill / home indicator ── */}
          <rect
            x="16" y="34"
            width="8" height="2"
            rx="1"
            fill="var(--text)"
            fillOpacity="0.25"
          />
        </svg>
      </div>

      {/* ── Text lockup ── */}
      {showText && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          textAlign: isRtl ? 'right' : 'left',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            flexDirection: isRtl ? 'row-reverse' : 'row',
          }}>
            <span style={{
              fontSize: 14,
              fontWeight: 800,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              fontFamily: 'IRANSansX, sans-serif',
            }}>
              {isRtl ? 'مهارت ۰۸' : 'Skill 08'}
            </span>
            <span style={{
              fontSize: 9,
              fontWeight: 700,
              color: 'var(--accent)',
              background: 'var(--accent-subtle)',
              border: '1px solid var(--accent-border)',
              borderRadius: 4,
              padding: '1px 5px',
              letterSpacing: '0.04em',
              lineHeight: '16px',
              fontFamily: 'IRANSansX, sans-serif',
            }}>
              WorldSkills
            </span>
          </div>
          <span style={{
            fontSize: 10,
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
