import { ComponentType } from 'react'
import { SVGProps } from 'react'

type IconType = ComponentType<SVGProps<SVGSVGElement>>

interface IconBadgeProps {
  icon: IconType
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'muted' | 'brand'
  className?: string
}

export function IconBadge({
  icon: Icon,
  size = 'md',
  variant = 'default',
  className = '',
}: IconBadgeProps) {
  const sizeStyles = {
    sm: 'h-8 w-8 rounded-xl',
    md: 'h-12 w-12 rounded-2xl',
    lg: 'h-16 w-16 rounded-3xl',
  }

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  }

  const variantStyles = {
    default: 'bg-surface-muted text-brand',
    muted: 'bg-surface-muted text-slate/70',
    brand: 'bg-brand text-white',
  }

  return (
    <div className={`inline-flex items-center justify-center ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      <Icon className={iconSizes[size]} />
    </div>
  )
}

