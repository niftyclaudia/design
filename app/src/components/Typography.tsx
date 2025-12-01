import { ReactNode } from 'react'

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function Hero({ children, className = '' }: TypographyProps) {
  return (
    <h1 className={`font-display text-hero font-semibold ${className}`}>
      {children}
    </h1>
  )
}

export function H1({ children, className = '' }: TypographyProps) {
  return (
    <h1 className={`font-display text-h1 font-semibold ${className}`}>
      {children}
    </h1>
  )
}

export function H2({ children, className = '' }: TypographyProps) {
  return (
    <h2 className={`font-display text-h2 font-semibold ${className}`}>
      {children}
    </h2>
  )
}

export function H3({ children, className = '' }: TypographyProps) {
  return (
    <h3 className={`font-display text-h3 font-semibold ${className}`}>
      {children}
    </h3>
  )
}

export function BodyLarge({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-body-lg font-light ${className}`}>
      {children}
    </p>
  )
}

export function Body({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-body font-light ${className}`}>
      {children}
    </p>
  )
}

export function BodySmall({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-body-sm font-light ${className}`}>
      {children}
    </p>
  )
}

export function Label({ children, className = '' }: TypographyProps) {
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.2em] font-medium ${className}`}>
      {children}
    </p>
  )
}

export function Caption({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-caption ${className}`}>
      {children}
    </p>
  )
}

