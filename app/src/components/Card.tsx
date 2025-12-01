import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  variant?: 'default' | 'muted' | 'dark' | 'bordered'
  padding?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  onClick,
}: CardProps) {
  const baseStyles = 'rounded-[28px] transition-all'
  
  const variantStyles = {
    default: 'border border-border/60 bg-white shadow-card hover:shadow-card',
    muted: 'bg-surface-muted border border-border/60',
    dark: 'border border-white/15 bg-white/5',
    bordered: 'border border-border/60 bg-white',
  }

  const paddingStyles = {
    sm: 'p-5',
    md: 'p-8',
    lg: 'p-12',
  }

  const Component = onClick ? 'button' : 'div'

  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
      onClick={onClick}
    >
      {children}
    </Component>
  )
}

