# Landing Page Components & Layout Overview

## 📁 Component Library Location
All components are located in: `/app/src/components/`

## 🧩 Available Components

### Typography Components (`Typography.tsx`)
- **Hero** - Main hero headline (72px, font-display)
- **H1, H2, H3** - Heading levels (48px, 32px, etc.)
- **BodyLarge** - Large body text (20px)
- **Body** - Standard body text (18px)
- **BodySmall** - Small body text (16px)
- **Label** - Uppercase labels with tracking (monospace)
- **Caption** - Small captions (14px)

### Button Component (`Button.tsx`)
**Variants:**
- `primary` - Orange brand button (#FF6B35) with shadow
- `secondary` - Outlined button with border
- `ghost` - Transparent with backdrop blur
- `outline` - Border only
- `highlight` - Highlight green (#C8FF5A)

**Sizes:** `sm`, `md`, `lg`

**Features:** Supports icons (left/right position)

### Card Component (`Card.tsx`)
**Variants:**
- `default` - White with border and shadow
- `muted` - Light gray background
- `dark` - Dark with white/transparent overlay
- `bordered` - Border only, no shadow

**Padding:** `sm`, `md`, `lg`

### Tag Component (`Tag.tsx`)
**Variants:**
- `default` - White surface with shadow (used for suggestion chips)
- `muted` - Muted background
- `bordered` - Border only
- `elevated` - With shadow

**Features:** Supports icons, clickable

### Navigation Component (`Navigation.tsx`)
- Logo (defaults to "Mopac")
- Links array (horizontal menu)
- CTA button
- Optional support button with icon

### IconBadge Component (`IconBadge.tsx`)
**Sizes:** `sm`, `md`, `lg`
**Variants:** `default`, `muted`, `brand`

### StatCard Component (`StatCard.tsx`)
- Displays label, value, and detail
- **Variants:** `light`, `dark` (for dark sections)

---

## 🏗️ Landing Page Layout Structure

### 1. **Header Section** (Hero)
```tsx
<header className="bg-surface-muted">
  <Navigation /> // Top nav bar
  <Hero /> // Main headline
  <BodyLarge /> // Subtitle
  <div className="prompt-card"> // Animated typing prompt input
    <BodyLarge /> // Prompt text (typing animation)
    <BodySmall /> // Description
    <button> // Send arrow button
  </div>
  <Tag /> // Suggestion chips row (5 chips)
</header>
```

**Components Used:**
- `Navigation` with links and CTA
- `Hero` for main headline
- `BodyLarge` for subtitle
- `Tag` components for suggestion chips (Create Campaign, Generate Ads, etc.)

---

### 2. **Features Section** (AI-powered features)
```tsx
<section>
  <Label /> // "AI-powered features"
  <H2 /> // "Everything you need to master Google Ads"
  <BodyLarge /> // Description
  
  // Tab navigation
  <button> // Feature tabs (Create Campaigns, Generate Ads, Analyze Reports)
  
  // Content area (2-column grid)
  <div className="feature-details">
    <IconBadge /> // Feature icon
    <H3 /> // Feature title
    <BodyLarge /> // Description
    <ul> // Bullet points
  </div>
  <div className="demo-area">
    // Animated demo based on selected feature
  </div>
</section>
```

**Components Used:**
- `Label`, `H2`, `BodyLarge` for section header
- `IconBadge` for feature icons
- `H3` for feature titles
- Custom tab buttons with icons

---

### 3. **Performance Suite Section** (Dark section)
```tsx
<section className="bg-night">
  <Label /> // "Performance Suite"
  <H2 /> // "Real results, real ROI"
  <BodyLarge /> // Description
  <Button /> // "View dashboard" (highlight variant)
  <Button /> // "Watch demo" (secondary)
  <div> // Testimonial card
    <BodyLarge /> // Quote
    <BodySmall /> // Attribution
  </div>
  <StatCard /> // Stats (3 cards: Campaigns optimized, ROI improvement, Time saved)
</section>
```

**Components Used:**
- `Label`, `H2`, `BodyLarge` for content
- `Button` (highlight and secondary variants)
- `StatCard` with `variant="dark"` (3 cards)

---

### 4. **Live Analytics Section**
```tsx
<section>
  <Label /> // "Live analytics"
  <H2 /> // "See your campaigns perform in real-time"
  <BodyLarge /> // Description
  
  <Card> // Main chart card
    <BodySmall /> // "Campaign performance"
    <H3 /> // "$127K monthly revenue"
    <div className="chart"> // Animated bar chart
    <div> // KPI cards (3 cards: Impressions, CTR, Conversion Rate)
      <Label />
      <H3 />
      <BodySmall />
    </div>
  </Card>
  
  <Card> // Active campaigns card
    <H3 /> // "Active campaigns"
    <Button variant="outline" /> // "Manage"
    <Tag /> // Campaign types, Optimization, AI actions (3 columns)
  </Card>
  
  <Card> // Top performing ads card
    <BodySmall /> // "Top performing ads"
    <H3 /> // "Search campaigns"
    <div> // List of ads with metrics
  </Card>
</section>
```

**Components Used:**
- `Card` (default variant, md padding)
- `Label`, `H3`, `BodySmall` for text
- `Tag` components (muted, bordered, elevated variants)
- `Button` (outline variant)
- Custom chart visualization

---

### 5. **Copy Refresh Section**
```tsx
<section>
  <Label /> // "Copy refresh"
  <H2 /> // "Keep your ads fresh and performing"
  <BodyLarge /> // Description
  
  <Card> // 3 cards in grid
    <IconBadge /> // Feature icon
    <H3 /> // Feature title
    <BodySmall /> // Description
  </Card>
</section>
```

**Components Used:**
- `Card` (default variant)
- `IconBadge` (md size, default variant)
- `H3`, `BodySmall` for content

---

### 6. **CTA Footer Section**
```tsx
<section className="bg-midnight rounded-full">
  <BodyLarge /> // "Ready to transform your Google Ads performance?"
  <BodySmall /> // Subtitle
  <Button variant="primary" /> // "Start free trial"
  <Button variant="secondary" /> // "Book a demo"
</section>
```

**Components Used:**
- `Button` (primary and secondary variants)
- `BodyLarge`, `BodySmall` for text

---

## 🎨 Design System

### Colors (from Tailwind config)
- **Brand:** `#FF6B35` (orange)
- **Brand Hover:** `#F15520`
- **Highlight:** `#C8FF5A` (green)
- **Surface:** `#FFFFFF`
- **Surface Muted:** `#F6F7FB`
- **Ink:** `#0F172A` (dark text)
- **Slate:** `#4C5673` (secondary text)
- **Border:** `#E1E5EF`
- **Night:** `#0B1324` (dark backgrounds)
- **Midnight:** Dark background for CTA

### Typography
- **Display Font:** Space Grotesk (headings)
- **Body Font:** Inter (body text)
- **Mono Font:** IBM Plex Mono (labels)

### Spacing & Layout
- **Max Width:** `max-w-6xl` (container)
- **Padding:** `px-6` (horizontal), `py-24` (section vertical)
- **Border Radius:** `rounded-[28px]` (cards), `rounded-full` (buttons/chips)

---

## 📝 Key Features

1. **Animated Typing Effect** - The hero prompt input has a typing/deleting animation that cycles through example prompts
2. **Interactive Tabs** - Feature section has clickable tabs that change the displayed content
3. **Animated Charts** - Bar charts animate on mount with staggered delays
4. **Hover Effects** - Cards and buttons have hover transitions (scale, shadow, translate)
5. **Responsive Design** - Uses Tailwind responsive classes (md:, lg:)

---

## 🔍 Where to Find Things

- **Main App:** `/app/src/App.tsx` (638 lines)
- **Components:** `/app/src/components/`
- **Design System:** `/design.json` and `/design-system.json`
- **Styles:** `/app/src/index.css` and Tailwind config


