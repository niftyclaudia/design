import { useState, useEffect } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  FileText,
  LineChart,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'
import {
  Hero,
  H2,
  H3,
  BodyLarge,
  BodySmall,
  Label,
  Button,
  Tag,
  Card,
  IconBadge,
  Navigation,
  StatCard,
} from './components'

const navLinks = ['Features', 'Pricing', 'Resources', 'About', 'Contact']

const suggestionChips = [
  { 
    label: 'Create Campaign', 
    icon: Target,
    prompt: "/create our summer campaign with a $5K budget, target high-intent keywords, and generate 5 ad variations with compelling CTAs.",
    description: "The AI copilot drafts your campaign structure, suggests keywords, generates ad copy, and shows performance predictions before launch."
  },
  { 
    label: 'Generate Ads', 
    icon: Sparkles,
    prompt: "/generate 10 headline variations for my brand awareness campaign targeting tech professionals aged 25-45 with performance predictions.",
    description: "Create multiple ad variations tailored to your audience with performance predictions for each option."
  },
  { 
    label: 'Analyze Reports', 
    icon: BarChart3,
    prompt: "/analyze my Q4 performance and identify the top 3 underperforming ads, then suggest optimizations to improve ROI.",
    description: "Get instant insights on campaign performance and actionable recommendations to maximize your budget efficiency."
  },
  { 
    label: 'Copy Refresh', 
    icon: FileText,
    prompt: "/refresh the copy for my underperforming ads with AI-generated alternatives that are optimized for conversion.",
    description: "Automatically refresh underperforming ads with optimized copy that's tested and ready to improve performance."
  },
  { 
    label: 'Performance Boost', 
    icon: TrendingUp,
    prompt: "/boost performance for my top 5 campaigns by optimizing bids, expanding keywords, and refreshing ad copy.",
    description: "Get comprehensive optimizations across your best campaigns to maximize performance and ROI."
  },
]

const featureSteps = [
  {
    title: 'Create Campaigns',
    description: 'Build high-performing Google Ads campaigns in minutes with AI-powered insights.',
    bullets: ['Smart keyword research', 'Budget optimization', 'Audience targeting', 'Bid strategy setup'],
    icon: Target,
  },
  {
    title: 'Generate Ads',
    description: 'Create compelling ad copy that converts with AI-generated variations and A/B testing.',
    bullets: ['Multiple ad variations', 'Performance predictions', 'Headline optimization', 'CTA suggestions'],
    icon: Sparkles,
  },
  {
    title: 'Analyze Reports',
    description: 'Get real-time insights and actionable recommendations to improve campaign performance.',
    bullets: ['Performance dashboards', 'ROI analysis', 'Trend identification', 'Automated alerts'],
    icon: BarChart3,
  },
]

const performanceStats = [
  { label: 'Campaigns optimized', value: '12,450', detail: 'Active Google Ads accounts' },
  { label: 'ROI improvement', value: '+34%', detail: 'Average increase' },
  { label: 'Time saved', value: '15 hrs', detail: 'Per week per account' },
]

const kpiCards = [
  { label: 'Impressions', value: '2.4M', change: '+18%', color: 'text-brand' },
  { label: 'CTR', value: '3.2%', change: '+0.8%', color: 'text-[#4C6FFF]' },
  { label: 'Conversion Rate', value: '4.8%', change: '+1.2%', color: 'text-[#20C9A8]' },
]

const examplePrompts = [
  {
    prompt: "/create our summer campaign with a $5K budget, target high-intent keywords, and generate 5 ad variations with compelling CTAs.",
    description: "The AI copilot drafts your campaign structure, suggests keywords, generates ad copy, and shows performance predictions before launch."
  },
  {
    prompt: "/analyze my Q4 performance and identify the top 3 underperforming ads, then suggest optimizations to improve ROI.",
    description: "Get instant insights on campaign performance and actionable recommendations to maximize your budget efficiency."
  },
  {
    prompt: "/set up a shopping campaign for our new product line with automated bid adjustments and generate responsive search ads.",
    description: "Launch complete shopping campaigns with smart bidding strategies and AI-optimized ad creatives in minutes."
  },
  {
    prompt: "/show me a breakdown of my ad spend by device type and suggest optimizations to improve ROI on mobile.",
    description: "Get detailed performance analytics across devices with actionable recommendations to maximize your budget efficiency."
  },
  {
    prompt: "/generate 10 headline variations for my brand awareness campaign targeting tech professionals aged 25-45.",
    description: "Create multiple ad variations tailored to your audience with performance predictions for each option."
  },
  {
    prompt: "/compare my current CTR against industry benchmarks and suggest improvements for my top 5 campaigns.",
    description: "Benchmark your performance and get AI-powered recommendations to outperform industry standards."
  },
]

function App() {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const [isManualSelection, setIsManualSelection] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState(0)
  const [chartAnimated, setChartAnimated] = useState(false)

  const handleChipClick = (chip: typeof suggestionChips[0]) => {
    // Reset animation state
    setIsDeleting(false)
    setCharIndex(0)
    setDisplayedText('')
    setIsManualSelection(true)
    
    // Find the prompt in the array or use chip's prompt directly
    const promptIndex = examplePrompts.findIndex(p => p.prompt === chip.prompt)
    
    if (promptIndex !== -1) {
      setCurrentPromptIndex(promptIndex)
    } else {
      // If not found, add it to the array and use it
      const newIndex = examplePrompts.length
      examplePrompts.push({
        prompt: chip.prompt,
        description: chip.description
      })
      setCurrentPromptIndex(newIndex)
    }
  }

  useEffect(() => {
    const currentPrompt = examplePrompts[currentPromptIndex]
    const fullText = currentPrompt.prompt

    if (!isDeleting && charIndex < fullText.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 50) // Typing speed: 50ms per character
      return () => clearTimeout(timeout)
    } else if (!isDeleting && charIndex === fullText.length) {
      // Finished typing, wait then start deleting (only if auto-cycling)
      if (!isManualSelection) {
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000) // Wait 2 seconds before deleting
        return () => clearTimeout(timeout)
      } else {
        // If manually selected, don't auto-delete
        setIsManualSelection(false)
      }
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 30) // Deleting speed: 30ms per character (faster)
      return () => clearTimeout(timeout)
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next prompt
      setIsDeleting(false)
      setCurrentPromptIndex((prev) => (prev + 1) % examplePrompts.length)
    }
  }, [currentPromptIndex, charIndex, isDeleting, isManualSelection])

  useEffect(() => {
    // Trigger chart animation on mount
    const timer = setTimeout(() => {
      setChartAnimated(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const currentPrompt = examplePrompts[currentPromptIndex]
  return (
    <div className="bg-surface text-ink">
      <header className="relative isolate overflow-hidden bg-surface-muted">

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 pb-24">
          <Navigation links={navLinks} ctaText="Start free trial" />

          <div className="mt-20 text-center text-balance">
            <Label className="text-slate/70">
              AI copilot for Google Ads
            </Label>
            <Hero className="mt-8">
              Your{' '}
              <span className="text-transparent bg-gradient-to-r from-ink to-brand bg-clip-text">
                AI marketing copilot
              </span>{' '}
              for Google Ads.
            </Hero>
            <BodyLarge className="mx-auto mt-8 max-w-3xl text-slate/80">
              Create campaigns, generate ads, analyze reports, and refresh copy—all powered by AI. 
              Your intelligent assistant for Google Ads that works 24/7 to optimize performance.
            </BodyLarge>

            <div className="mx-auto mt-10 max-w-3xl rounded-[32px] bg-white p-6 shadow-hero">
              <div className="rounded-3xl border border-border/60 bg-surface-muted p-6 text-left">
                <div className="min-h-[120px] relative">
                  <p className="font-display text-body-lg text-ink font-normal">
                    {displayedText}
                    {!isDeleting && charIndex < currentPrompt.prompt.length && (
                      <span className="inline-block w-0.5 h-5 bg-brand ml-1 animate-pulse" />
                    )}
                    {isDeleting && charIndex === 0 && (
                      <span className="inline-block w-0.5 h-5 bg-brand ml-1 animate-pulse" />
                    )}
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <div className="min-h-[48px] relative flex-1">
                    <BodySmall className="text-slate/80">
                      {currentPrompt.description}
                    </BodySmall>
                  </div>
                  <button className="h-14 w-14 rounded-full bg-brand text-white shadow-cta flex items-center justify-center hover:bg-brand-hover transition-all aspect-square flex-shrink-0">
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {suggestionChips.map((chip) => (
                <Tag 
                  key={chip.label} 
                  icon={chip.icon} 
                  variant="default" 
                  onClick={() => handleChipClick(chip)}
                >
                  {chip.label}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24 relative">
        <section className="py-24">
          <div className="flex flex-col gap-5 text-balance text-center">
            <Label className="text-slate/70">AI-powered features</Label>
            <H2>Everything you need to master Google Ads.</H2>
            <BodyLarge className="text-slate/80 max-w-3xl mx-auto">
              From campaign creation to performance analysis, our AI copilot handles the heavy lifting 
              so you can focus on strategy and growth.
            </BodyLarge>
          </div>

          <div className="mt-20">
            {/* Tabs */}
            <div className="flex items-center justify-center gap-2 mb-12">
              {featureSteps.map(({ title, icon: Icon }, index) => (
                <button
                  key={title}
                  onClick={() => setSelectedFeature(index)}
                  className={`
                    flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300
                    ${selectedFeature === index
                      ? 'border-border bg-surface-muted text-ink shadow-sm'
                      : 'border-border/30 bg-surface text-slate/70 hover:border-border/50 hover:text-ink'
                    }
                  `}
                >
                  <div className={`
                    h-8 w-8 rounded-lg flex items-center justify-center transition-all duration-300
                    ${selectedFeature === index
                      ? 'bg-brand/10 border border-brand/20'
                      : 'bg-surface-muted border border-border/40'
                    }
                  `}>
                    <Icon className={`h-4 w-4 ${selectedFeature === index ? 'text-brand' : 'text-slate/60'}`} />
                  </div>
                  <span className="font-medium text-body-sm">{title}</span>
                </button>
              ))}
            </div>

            {/* Central Content Area */}
            <div className="rounded-3xl border border-border/30 bg-surface overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left: Feature Details */}
                <div className="p-10 lg:p-12">
                  <div key={`details-${selectedFeature}`} className="transition-opacity duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-12 w-12 rounded-xl border border-brand/20 bg-brand/10 flex items-center justify-center">
                        {(() => {
                          const Icon = featureSteps[selectedFeature].icon
                          return <Icon className="h-6 w-6 text-brand" />
                        })()}
                      </div>
                      <H3 className="text-ink">{featureSteps[selectedFeature].title}</H3>
                    </div>
                    <BodyLarge className="text-slate/70 mb-8 leading-relaxed">
                      {featureSteps[selectedFeature].description}
                    </BodyLarge>
                    <ul className="space-y-3 text-body-sm">
                      {featureSteps[selectedFeature].bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-slate/80">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand/60 flex-shrink-0" />
                          <span className="font-light leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Animation/Demo Area */}
                <div className="bg-surface-muted p-10 lg:p-12 flex items-center justify-center min-h-[400px]">
                  <div className="w-full max-w-md">
                    {/* Simple animated demo based on selected feature */}
                    <div key={`demo-${selectedFeature}`} className="transition-opacity duration-300">
                    {selectedFeature === 0 && (
                      <div className="space-y-4">
                        <div className="rounded-2xl bg-white border border-border/40 p-6 shadow-sm">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="h-10 w-10 rounded-lg bg-brand/10 flex items-center justify-center">
                              <Target className="h-5 w-5 text-brand" />
                            </div>
                            <div className="flex-1">
                              <div className="h-3 bg-slate/20 rounded w-24 mb-2 animate-pulse" />
                              <div className="h-2 bg-slate/10 rounded w-16" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 bg-slate/10 rounded w-full" />
                            <div className="h-2 bg-slate/10 rounded w-3/4" />
                            <div className="h-2 bg-brand/20 rounded w-1/2 animate-pulse" />
                          </div>
                        </div>
                        <div className="rounded-2xl bg-white border border-border/40 p-4 shadow-sm">
                          <div className="flex gap-2">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="flex-1 h-16 rounded-lg bg-surface-muted border border-border/30" />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedFeature === 1 && (
                      <div className="space-y-4">
                        <div className="rounded-2xl bg-white border border-border/40 p-6 shadow-sm">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="h-10 w-10 rounded-lg bg-brand/10 flex items-center justify-center">
                              <Sparkles className="h-5 w-5 text-brand" />
                            </div>
                            <div className="flex-1">
                              <div className="h-3 bg-slate/20 rounded w-32 mb-2 animate-pulse" />
                              <div className="h-2 bg-slate/10 rounded w-20" />
                            </div>
                          </div>
                          <div className="space-y-3">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="rounded-lg border border-border/30 p-3 bg-surface-muted">
                                <div className="h-2 bg-slate/20 rounded w-full mb-2" />
                                <div className="h-2 bg-slate/10 rounded w-2/3" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedFeature === 2 && (
                      <div className="space-y-4">
                        <div className="rounded-2xl bg-white border border-border/40 p-6 shadow-sm">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="h-10 w-10 rounded-lg bg-brand/10 flex items-center justify-center">
                              <BarChart3 className="h-5 w-5 text-brand" />
                            </div>
                            <div className="flex-1">
                              <div className="h-3 bg-slate/20 rounded w-28 mb-2 animate-pulse" />
                              <div className="h-2 bg-slate/10 rounded w-24" />
                            </div>
                          </div>
                          <div className="h-32 rounded-lg bg-surface-muted border border-border/30 flex items-end gap-2 p-4">
                            {[60, 80, 100, 90, 120].map((height, idx) => (
                              <div key={idx} className="flex-1">
                                <div
                                  className="w-full rounded-t bg-brand/60 animate-pulse"
                                  style={{ height: `${height * 0.8}px` }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="grid gap-12 rounded-[32px] bg-night px-10 py-12 text-white lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Label className="text-white/50">Performance Suite</Label>
              <H2 className="mt-6 text-white">Real results, real ROI.</H2>
              <BodyLarge className="mt-6 text-white/70">
                Our AI copilot continuously optimizes your campaigns, refreshes underperforming ads, 
                and provides actionable insights to maximize your Google Ads performance.
              </BodyLarge>
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-body-sm font-medium text-white transition-all bg-[#FF6B35] hover:bg-[#F15520] shadow-[0_8px_24px_rgba(255,107,53,0.35)]">
                  View dashboard
                </button>
                <Button variant="secondary">Watch demo</Button>
              </div>
              <div className="mt-12 flex items-start rounded-3xl border border-white/15 bg-white/5 p-6">
                <div>
                  <p className="font-display text-body-lg font-medium">
                    "We increased our conversion rate by 42% in the first month using the AI copilot."
                  </p>
                  <BodySmall className="text-white/60 mt-1">Marketing Director at TechFlow</BodySmall>
                </div>
              </div>
            </div>
            <div className="space-y-6 rounded-[28px] border border-white/15 bg-white/5 p-6">
              {performanceStats.map((stat) => (
                <StatCard
                  key={stat.label}
                  variant="dark"
                  label={stat.label}
                  value={stat.value}
                  detail={stat.detail}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="flex flex-col gap-5 text-balance text-center">
            <Label className="text-slate/70">Live analytics</Label>
            <H2>See your campaigns perform in real-time.</H2>
            <BodyLarge className="text-slate/80 max-w-3xl mx-auto">
              Monitor performance, track KPIs, and get AI-powered recommendations to optimize your Google Ads campaigns.
            </BodyLarge>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <Card variant="default" padding="md" className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <BodySmall className="text-slate/70">Campaign performance</BodySmall>
                  <H3 className="mt-2">$127K monthly revenue</H3>
                </div>
                <LineChart className="h-10 w-10 text-brand transition-colors duration-300" />
              </div>
              <div className="h-52 rounded-3xl bg-surface-muted p-4 mb-10">
                <div className="flex h-full items-end gap-2.5">
                  {[60, 80, 100, 90, 120, 140, 130].map((height, idx) => (
                    <div key={idx} className="flex-1 group relative">
                      <div
                        className={`w-full rounded-t-lg bg-brand/80 transition-all duration-500 ease-out cursor-pointer group-hover:bg-brand group-hover:scale-105 group-hover:shadow-md ${chartAnimated ? 'opacity-100' : 'opacity-0'}`}
                        style={{ 
                          height: chartAnimated ? `${height}px` : '0px',
                          transitionDelay: `${idx * 100}ms`
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {kpiCards.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-2xl border border-border/60 bg-surface-muted p-5 text-left transition-all duration-300 hover:border-border hover:shadow-sm hover:-translate-y-0.5"
                  >
                    <Label className="text-slate/60">{kpi.label}</Label>
                    <H3 className={`mt-3 ${kpi.color} transition-colors duration-300`}>{kpi.value}</H3>
                    <BodySmall className="text-slate/70 mt-1">{kpi.change} vs last 30d</BodySmall>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid gap-6">
              <Card variant="default" padding="md" className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <H3>Active campaigns</H3>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
                <div className="grid gap-6 md:grid-cols-3 text-body-sm">
                  <div>
                    <Label className="text-slate/60">Campaign types</Label>
                    <ul className="mt-3 space-y-2.5">
                      {['Search', 'Display', 'Shopping', 'Video'].map((type) => (
                        <li key={type}>
                          <Tag variant="muted" className="whitespace-nowrap transition-all duration-200 hover:scale-105">{type}</Tag>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Label className="text-slate/60">Optimization</Label>
                    <ul className="mt-3 space-y-2.5">
                      {['Bid strategy', 'Keywords', 'Ad copy', 'Landing pages'].map((field) => (
                        <li key={field}>
                          <Tag variant="bordered" className="whitespace-nowrap transition-all duration-200 hover:scale-105">{field}</Tag>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Label className="text-slate/60">AI actions</Label>
                    <ul className="mt-3 space-y-2.5">
                      {['Copy refresh', 'Bid adjustment', 'Keyword expansion'].map((action) => (
                        <li key={action}>
                          <Tag variant="elevated" className="whitespace-nowrap transition-all duration-200 hover:scale-105">{action}</Tag>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
              <Card variant="default" padding="md" className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <BodySmall className="text-slate/70">Top performing ads</BodySmall>
                    <H3 className="mt-2">Search campaigns</H3>
                  </div>
                  <BarChart3 className="h-10 w-10 text-brand transition-colors duration-300" />
                </div>
                <div className="space-y-2.5 text-body-sm">
                  {[
                    { name: 'Summer Sale 2024', impressions: '245K', ctr: '4.2%' },
                    { name: 'Product Launch', impressions: '189K', ctr: '3.8%' },
                    { name: 'Brand Awareness', impressions: '156K', ctr: '3.1%' },
                  ].map((row) => (
                    <div 
                      key={row.name} 
                      className="flex items-center justify-between rounded-2xl bg-surface-muted px-4 py-3 transition-all duration-300 hover:bg-surface-muted/80 hover:shadow-sm hover:-translate-x-1 cursor-pointer"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-ink whitespace-nowrap transition-colors duration-300">{row.name}</p>
                        <BodySmall className="text-slate/70 mt-0.5 whitespace-nowrap">{row.impressions} impressions</BodySmall>
                      </div>
                      <p className="font-mono text-body-sm text-ink ml-4 whitespace-nowrap">{row.ctr}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>


        <section className="py-24 relative z-10">
          <div className="flex flex-col gap-5 text-balance text-center">
            <Label className="text-slate/70">Copy refresh</Label>
            <H2>Keep your ads fresh and performing.</H2>
            <BodyLarge className="text-slate/80 max-w-3xl mx-auto">
              Our AI automatically refreshes underperforming ad copy, tests new variations, 
              and optimizes messaging based on performance data.
            </BodyLarge>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Auto-refresh',
                description: 'AI identifies underperforming ads and generates fresh copy automatically.',
                icon: Zap,
              },
              {
                title: 'A/B testing',
                description: 'Test multiple variations simultaneously to find what converts best.',
                icon: Target,
              },
              {
                title: 'Performance insights',
                description: 'Get detailed analysis on why certain copy performs better than others.',
                icon: TrendingUp,
              },
            ].map(({ title, description, icon: Icon }) => (
              <Card key={title} variant="default" padding="md">
                <IconBadge icon={Icon} size="md" variant="default" />
                <H3 className="mt-8">{title}</H3>
                <BodySmall className="mt-3 text-slate/80">{description}</BodySmall>
              </Card>
            ))}
          </div>
        </section>

        <div className="mt-12 relative z-10">
          <section className="rounded-full bg-midnight px-8 py-6 text-white shadow-card flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <BodyLarge className="text-white font-semibold">Ready to transform your Google Ads performance?</BodyLarge>
              <BodySmall className="text-white/60 mt-1">
                Start your free trial or book a demo to see the AI copilot in action.
              </BodySmall>
            </div>
            <div className="flex flex-row gap-3">
              <Button variant="primary" icon={ArrowRight} iconPosition="right" size="sm">
                Start free trial
              </Button>
              <Button variant="secondary" icon={ArrowUpRight} iconPosition="right" size="sm">
                Book a demo
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App


