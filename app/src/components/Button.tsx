import { ReactNode, ButtonHTMLAttributes, ComponentType } from 'react'
import { SVGProps } from 'react'

type IconType = ComponentType<SVGProps<SVGSVGElement>>

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'highlight'
  size?: 'sm' | 'md' | 'lg'
  icon?: IconType
  iconPosition?: 'left' | 'right'
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all'
  
  const sizeStyles = {
    sm: 'px-5 py-2.5 text-body-sm',
    md: 'px-6 py-3 text-body-sm',
    lg: 'px-8 py-4 text-body',
  }

  const variantStyles = {
    primary: 'bg-brand text-white shadow-cta hover:bg-brand-hover',
    secondary: 'border border-white/30 px-6 py-3 text-white/80 hover:border-white/50 hover:bg-white/5',
    ghost: 'bg-white/15 border border-white/50 backdrop-blur-sm hover:bg-white/25 text-ink',
    outline: 'border border-border/60 text-ink hover:bg-surface-muted',
    highlight: 'bg-highlight text-white hover:bg-highlight/90',
  }

  const iconElement = Icon && (
    <Icon className={size === 'sm' ? 'h-4 w-4' : size === 'md' ? 'h-4 w-4' : 'h-5 w-5'} />
  )

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {iconPosition === 'left' && iconElement}
      {children}
      {iconPosition === 'right' && iconElement}
    </button>
  )
}

