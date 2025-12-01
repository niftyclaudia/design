/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'h1': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h3': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-lg': ['1.25rem', { lineHeight: '1.7', letterSpacing: '-0.01em' }],
        'body': ['1.125rem', { lineHeight: '1.7', letterSpacing: '-0.01em' }],
        'body-sm': ['1rem', { lineHeight: '1.6', letterSpacing: '-0.005em' }],
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
      },
      colors: {
        surface: '#FFFFFF',
        'surface-muted': '#FAFBFC',
        ink: '#0F172A',
        slate: '#64748B',
        border: '#E2E8F0',
        brand: '#FF6B35',
        'brand-hover': '#F15520',
        highlight: '#C8FF5A',
        night: '#0A0F1C',
        midnight: '#0F172A',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FFE2C4 100%)',
      },
      boxShadow: {
        hero: '0 24px 64px rgba(9, 18, 41, 0.12)',
        card: '0 16px 48px rgba(9, 18, 41, 0.06)',
        cta: '0 8px 24px rgba(255, 107, 53, 0.35)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}

