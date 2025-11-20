/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        surface: '#FFFFFF',
        'surface-muted': '#F6F7FB',
        ink: '#0F172A',
        slate: '#4C5673',
        border: '#E1E5EF',
        brand: '#FF6B35',
        'brand-hover': '#F15520',
        highlight: '#C8FF5A',
        night: '#070D1A',
        midnight: '#0B1324',
      },
      boxShadow: {
        hero: '0 32px 80px rgba(9, 18, 41, 0.15)',
        card: '0 24px 60px rgba(9, 18, 41, 0.08)',
        cta: '0 12px 30px rgba(255, 107, 53, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #DDF0FF 0%, #FFE2C4 60%, #FFE2C4 100%)',
      },
    },
  },
  plugins: [],
}

