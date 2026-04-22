// Design tokens — Section 6.2
// Source of truth for colors, fonts, spacing, and breakpoints.
// CSS counterparts live in app/globals.css (@theme inline).
// Use these in Framer Motion values or anywhere Tailwind classes aren't available.

export const tokens = {
  colors: {
    light: {
      background: '#FFF5E1',
      foreground: '#2D2020',
      accent:     '#E07856',
      secondary:  '#4A5F85',
      success:    '#7BA05B',
      divider:    '#D4B896',
    },
    dark: {
      background: '#1A1515',
      foreground: '#F5D3B5',
      accent:     '#FFB4A2',
      secondary:  '#8DA3C4',
    },
  },
  fonts: {
    pixel: 'var(--font-press-start)',
    body:  'var(--font-inter)',
    mono:  'var(--font-jetbrains-mono)',
  },
  // 4px base scale — Section 6.2
  spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96] as const,
  breakpoints: {
    mobile: 768,
    tablet: 1024,
  },
} as const;
