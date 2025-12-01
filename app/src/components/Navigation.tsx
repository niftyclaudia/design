import { Button } from './Button'
import { MessageSquare } from 'lucide-react'

interface NavigationProps {
  logo?: React.ReactNode
  links?: string[]
  onLinkClick?: (link: string) => void
  ctaText?: string
  showSupport?: boolean
}

export function Navigation({ logo, links = [], onLinkClick, ctaText = 'Get started', showSupport = true }: NavigationProps) {
  return (
    <nav className="flex items-center justify-between text-body-sm font-medium text-slate/80">
      {logo || (
        <div className="flex items-center gap-2.5 font-display text-2xl text-ink font-semibold">
          Mopac
        </div>
      )}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <button
            key={link}
            className="hover:text-ink transition-colors"
            onClick={() => onLinkClick?.(link)}
          >
            {link}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {showSupport && (
          <Button variant="ghost" icon={MessageSquare} className="hidden md:flex">
            Support
          </Button>
        )}
        <Button variant="primary">{ctaText}</Button>
      </div>
    </nav>
  )
}

