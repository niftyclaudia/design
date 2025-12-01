import { ReactNode } from 'react'
import { Label, H2, BodySmall } from './Typography'

interface StatCardProps {
  label: string
  value: string | ReactNode
  detail?: string
  className?: string
  variant?: 'light' | 'dark'
}

export function StatCard({
  label,
  value,
  detail,
  className = '',
  variant = 'light',
}: StatCardProps) {
  const textColor = variant === 'dark' ? 'text-white' : 'text-ink'
  const labelColor = variant === 'dark' ? 'text-white/50' : 'text-slate/70'
  const detailColor = variant === 'dark' ? 'text-white/60' : 'text-slate/70'
  const bgColor = variant === 'dark' ? 'bg-white/8' : 'bg-surface-muted'

  return (
    <div className={`rounded-2xl ${bgColor} p-6 ${className}`}>
      <Label className={labelColor}>{label}</Label>
      <H2 className={`mt-3 ${textColor}`}>{value}</H2>
      {detail && <BodySmall className={`mt-1 ${detailColor}`}>{detail}</BodySmall>}
    </div>
  )
}

