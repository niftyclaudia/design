import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Gauge,
  Gamepad2,
  LayoutDashboard,
  Layers,
  LineChart,
  MessageSquare,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'

const navLinks = ['Product', 'Use Cases', 'Resources', 'Pricing', 'Enterprise']

const suggestionChips = [
  { label: 'Reporting Dashboard', icon: LayoutDashboard },
  { label: 'Gaming Platform', icon: Gamepad2 },
  { label: 'Onboarding Portal', icon: Users },
  { label: 'Room Visualizer', icon: Layers },
  { label: 'Networking App', icon: Share2 },
]

const workflowSteps = [
  {
    title: 'Design',
    description: 'Describe the ops brief and let the agent draft the workflow.',
    bullets: ['Pick a starter template', 'Connect data + docs', 'Choose guardrails'],
    icon: Sparkles,
  },
  {
    title: 'Validate',
    description: 'Preview every step with live test data before publishing.',
    bullets: ['Track success criteria', 'Route exceptions to humans', 'Approve with one click'],
    icon: ShieldCheck,
  },
  {
    title: 'Deploy',
    description: 'Ship to your workspace, CRM, or chat in minutes.',
    bullets: ['Auto-generate runbooks', 'Monitor with KPIs', 'Share securely'],
    icon: Gauge,
  },
]

const reliabilityStats = [
  { label: 'Playbooks automated', value: '1,879', detail: 'Tax + RevOps teams' },
  { label: 'Hours reclaimed', value: '177K', detail: 'per quarter' },
  { label: 'Compliance score', value: '99.2%', detail: 'Tracked weekly' },
]

const kpiCards = [
  { label: 'Spend', value: '$1.8M', change: '+12%', color: 'text-brand' },
  { label: 'CTR', value: '1.27%', change: '+0.3%', color: 'text-[#4C6FFF]' },
  { label: 'CPC', value: '$4.86', change: '-8%', color: 'text-[#20C9A8]' },
]

function App() {
  return (
    <div className="bg-surface text-ink">
      <header className="relative isolate overflow-hidden bg-hero-gradient">
        <div className="absolute inset-x-0 top-20 flex justify-center blur-3xl opacity-40">
          <div className="h-64 w-[60rem] rounded-full bg-gradient-to-r from-[#C8FF5A] via-white to-[#FF6B35]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 pb-24">
          <nav className="flex items-center justify-between text-sm font-medium text-slate">
            <div className="flex items-center gap-2 font-display text-2xl text-ink">
              <div className="h-10 w-10 rounded-full bg-white/70 flex items-center justify-center text-brand font-semibold shadow-card">
                44
              </div>
              Base44
            </div>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button key={link} className="hover:text-ink transition-colors">
                  {link}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button className="hidden md:flex items-center gap-2 rounded-full border border-white/60 bg-white/20 px-5 py-2 text-sm text-ink backdrop-blur">
                <MessageSquare className="h-4 w-4" />
                Support
              </button>
              <button className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white shadow-cta hover:bg-brand-hover transition-colors">
                Start building
              </button>
            </div>
          </nav>

          <div className="mt-16 text-center text-balance">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate">
              Reliable AI agents for ops & finance
            </p>
            <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
              Shape your ideas into{' '}
              <span className="text-transparent bg-gradient-to-r from-ink to-brand bg-clip-text">
                apps that work
              </span>
              .
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate">
              Base44 lets you build fully-functional apps in minutes with just your words. No code, no guesswork—just
              reliable AI workflows tuned for teams that ship.
            </p>

            <div className="mx-auto mt-10 max-w-3xl rounded-[32px] bg-white p-6 shadow-hero">
              <div className="flex items-center justify-between text-sm text-slate">
                <span className="inline-flex items-center gap-2 font-mono uppercase tracking-[0.3em]">
                  <Sparkles className="h-4 w-4 text-brand" />
                  Claude 4.5 Sonnet
                </span>
                <span>Live preview</span>
              </div>
              <div className="mt-4 rounded-3xl border border-border bg-surface-muted p-5 text-left">
                <p className="font-display text-xl text-ink">
                  “Make a workflow that ingests client invoices, classifies tax exposure, and triggers a Slack report every
                  Friday.”
                </p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-sm text-slate">
                    The agent drafts the steps, flags missing docs, and shows cost impact before launch.
                  </p>
                  <button className="h-14 w-14 rounded-full bg-brand text-white shadow-cta flex items-center justify-center hover:bg-brand-hover">
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {suggestionChips.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-medium text-ink shadow-card hover:-translate-y-0.5 transition"
                >
                  <Icon className="h-4 w-4 text-slate" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        <section className="py-20">
          <div className="flex flex-col gap-4 text-balance text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate">Workflow builder</p>
            <h2 className="font-display text-3xl md:text-5xl">Design AI workflows step by step.</h2>
            <p className="text-lg text-slate max-w-3xl mx-auto">
              Move from a prompt to a production-ready agent with structured reviews, validation, and governance baked in.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {workflowSteps.map(({ title, description, bullets, icon: Icon }) => (
              <div key={title} className="flex flex-col rounded-[28px] border border-border bg-white p-6 shadow-card">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-muted text-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-slate">{description}</p>
                <ul className="mt-6 space-y-3 text-sm text-ink">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#20C9A8]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="grid gap-10 rounded-[32px] bg-night px-8 py-10 text-white lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/60">Reliability Suite</p>
              <h2 className="mt-4 font-display text-4xl">Ship agents your CFO would trust.</h2>
              <p className="mt-6 text-lg text-white/80">
                Run automated validation, scenario testing, and compliance logging before a single workflow hits production.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-full bg-highlight px-6 py-3 font-medium text-night">Run validation</button>
                <button className="rounded-full border border-white/40 px-6 py-3 font-medium text-white/90">
                  Watch demo
                </button>
              </div>
              <div className="mt-10 flex items-center gap-4 rounded-3xl border border-white/20 bg-white/5 p-4">
                <MessageSquare className="h-10 w-10 text-highlight" />
                <div>
                  <p className="font-display text-xl">“We moved 68% of audits to Base44.”</p>
                  <p className="text-sm text-white/70">FinOps leader at Clifford + Co</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 rounded-[28px] border border-white/20 bg-white/5 p-6">
              {reliabilityStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">{stat.label}</p>
                  <p className="mt-2 font-display text-4xl">{stat.value}</p>
                  <p className="text-sm text-white/70">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="flex flex-col gap-4 text-balance text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate">Live dashboards</p>
            <h2 className="font-display text-3xl md:text-5xl">See every decision before it ships.</h2>
            <p className="text-lg text-slate max-w-3xl mx-auto">
              Blend marketing, finance, and ops data inside a single workspace. Every agent run is traceable with KPIs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-border bg-white p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate">Media efficiency</p>
                  <p className="font-display text-3xl mt-1">$83.1K weekly lift</p>
                </div>
                <LineChart className="h-10 w-10 text-brand" />
              </div>
              <div className="mt-6 h-48 rounded-3xl bg-gradient-to-r from-[#EFF4FF] to-[#FFE9F3] p-4">
                <div className="flex h-full items-end gap-3">
                  {[60, 80, 100, 90, 120, 140, 130].map((height, idx) => (
                    <div key={idx} className="flex-1">
                      <div
                        className="w-full rounded-full bg-brand/80"
                        style={{ height: `${height}px` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {kpiCards.map((kpi) => (
                  <div key={kpi.label} className="rounded-2xl border border-border bg-surface-muted p-4 text-left">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate">{kpi.label}</p>
                    <p className={`mt-2 font-display text-2xl ${kpi.color}`}>{kpi.value}</p>
                    <p className="text-sm text-slate">{kpi.change} vs last 30d</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[28px] border border-border bg-white p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <p className="font-display text-2xl">Data integrations overview</p>
                  <button className="rounded-full border border-border px-4 py-2 text-sm font-medium text-ink">
                    Edit
                  </button>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate">Sources</p>
                    <ul className="mt-2 space-y-2">
                      {['Facebook Ads', 'LinkedIn Ads', 'Google Analytics', 'HubSpot'].map((source) => (
                        <li key={source} className="rounded-full bg-surface-muted px-3 py-2 text-ink">
                          {source}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate">Mapping library</p>
                    <ul className="mt-2 space-y-2">
                      {['Campaign', 'Cost', 'Impressions', 'Revenue'].map((field) => (
                        <li key={field} className="rounded-2xl border border-border px-3 py-2">
                          {field}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate">Destinations</p>
                    <ul className="mt-2 space-y-2">
                      {['Sheets', 'BigQuery', 'Looker Studio'].map((dest) => (
                        <li key={dest} className="rounded-full bg-surface px-3 py-2 shadow-card">
                          {dest}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-[28px] border border-border bg-white p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate">Campaign metrics</p>
                    <p className="font-display text-3xl mt-1">Paid Ads</p>
                  </div>
                  <BarChart3 className="h-10 w-10 text-brand" />
                </div>
                <div className="mt-6 space-y-4 text-sm">
                  {[
                    { name: 'Retail Media', spend: '$611,680', cpa: '$72.67' },
                    { name: 'Paid Search', spend: '$59,060', cpa: '$83.37' },
                    { name: 'Email', spend: '$19,826', cpa: '$3.10' },
                  ].map((row) => (
                    <div key={row.name} className="flex items-center justify-between rounded-2xl bg-surface-muted px-4 py-3">
                      <div>
                        <p className="font-medium text-ink">{row.name}</p>
                        <p className="text-slate">{row.spend}</p>
                      </div>
                      <p className="font-mono text-sm text-ink">{row.cpa}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-full bg-midnight px-8 py-6 text-white shadow-card flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl">Ready to deploy your next AI agent?</p>
            <p className="text-sm text-white/70">Book a live build session or explore the Base44 template gallery.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-ink">
              Book a demo
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 font-medium text-white">
              Explore AI agents
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
