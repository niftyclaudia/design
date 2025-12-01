/**
 * Color utility component for reference and documentation.
 * This component displays all available colors in the design system.
 * For actual usage, use Tailwind classes directly (e.g., bg-brand, text-ink).
 */

export const Colors = {
  // Semantic Colors
  surface: '#FFFFFF',
  surfaceMuted: '#FAFBFC',
  ink: '#0F172A',
  slate: '#64748B',
  border: '#E2E8F0',
  brand: '#FF6B35',
  brandHover: '#F15520',
  highlight: '#C8FF5A',
  night: '#0A0F1C',
  midnight: '#0F172A',

  // Data Visualization
  seriesA: '#4C6FFF',
  seriesB: '#FF67B0',
  seriesC: '#20C9A8',
  seriesD: '#FCCD4D',
} as const

/**
 * Tailwind CSS classes for colors:
 * 
 * Backgrounds:
 * - bg-surface
 * - bg-surface-muted
 * - bg-brand
 * - bg-brand-hover
 * - bg-highlight
 * - bg-night
 * - bg-midnight
 * 
 * Text:
 * - text-ink
 * - text-slate (with opacity variants: text-slate/80, text-slate/70, text-slate/60)
 * - text-brand
 * 
 * Borders:
 * - border-border (with opacity variant: border-border/60)
 */

