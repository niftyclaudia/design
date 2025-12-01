import { Label, H3, BodySmall } from './Typography'

interface KPICardProps {
  label: string
  value: string
  change: string
  color?: string
  className?: string
}

export function KPICard({
  label,
  value,
  change,
  color = 'text-brand',
  className = '',
}: KPICardProps) {
  return (
    <div className={`rounded-2xl border border-border/60 bg-surface-muted p-5 text-left ${className}`}>
      <Label className="text-slate/60">{label}</Label>
      <H3 className={`mt-3 ${color}`}>{value}</H3>
      <BodySmall className="text-slate/70 mt-1">{change} vs last 30d</BodySmall>
    </div>
  )
}

