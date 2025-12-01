import { ReactNode, ComponentType } from 'react'
import { SVGProps } from 'react'

type IconType = ComponentType<SVGProps<SVGSVGElement>>

interface TagProps {
  children: ReactNode
  icon?: IconType
  variant?: 'default' | 'muted' | 'bordered' | 'elevated'
  className?: string
  onClick?: () => void
}

export function Tag({
  children,
  icon: Icon,
  variant = 'default',
  className = '',
  onClick,
}: TagProps) {
  const baseStyles = 'inline-flex items-center gap-2 rounded-full text-body-sm font-medium transition-all'
  
  const variantStyles = {
    default: 'bg-surface text-ink shadow-card hover:-translate-y-0.5 hover:shadow-card px-6 py-3',
    muted: 'bg-surface-muted px-5 py-2.5 text-ink font-light',
    bordered: 'rounded-2xl border border-border/60 px-5 py-2.5 font-light',
    elevated: 'bg-surface px-5 py-2.5 shadow-card font-light',
  }

  const Component = onClick ? 'button' : 'span'

  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className="h-4 w-4 text-slate/70" />}
      {children}
    </Component>
  )
}

