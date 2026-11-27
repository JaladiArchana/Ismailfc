import React from 'react';

export function BrandMark({ light = false, compact = false }) {
  const emblemBg = light ? '#FFF8EC' : '#721C27';
  const emblemStroke = '#E5AC36';
  const emblemText = light ? '#721C27' : '#FFF8EC';
  const wordmarkColor = light ? '#FFF8EC' : '#242020';
  const subColor = light ? 'rgba(255, 248, 236, 0.72)' : '#5E5552';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: compact ? '0.6rem' : '0.8rem',
      }}
    >
      <svg
        width={compact ? '36' : '42'}
        height={compact ? '36' : '42'}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="48" height="48" rx="10" fill={emblemBg} />
        <rect
          x="4.5"
          y="4.5"
          width="39"
          height="39"
          rx="7"
          stroke={emblemStroke}
          strokeWidth="1.5"
        />
        <path
          d="M24 10L26.2 12.2L24 14.4L21.8 12.2L24 10Z"
          fill={emblemStroke}
        />
        <text
          x="24"
          y="33"
          textAnchor="middle"
          fill={emblemText}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '18px',
            fontWeight: 700,
            letterSpacing: '0.04em',
          }}
        >
          IF
        </text>
      </svg>

      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: compact ? '1.1rem' : '1.25rem',
            fontWeight: 700,
            color: wordmarkColor,
            letterSpacing: '-0.01em',
          }}
        >
          Ismail Food Court
        </span>
        <span
          style={{
            fontSize: '0.68rem',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: subColor,
            marginTop: '2px',
          }}
        >
          Restaurant &amp; Bakery · Ongole
        </span>
      </span>
    </span>
  );
}
