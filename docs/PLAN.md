# The Algorithmic Home - Project Plan

> **Project Status**: Planning Phase
> **Last Updated**: 2026-01-10
> **Version**: 0.1.0

---

## Executive Summary

This document outlines the plan for building a **Pretotype Website** for "The Algorithmic Home" - a 3D digital twin concept of a solarpunk mansion designed for human performance optimization. The goal is to validate market interest before building the full product.

**MVP Philosophy**: Start with the simplest possible implementation that conveys the concept, then scale complexity based on validation results.

---

## 1. Site Architecture (Sitemap)

### User Journey Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                         LANDING PAGE                                │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  HERO: "Your Home, Optimized for You"                       │   │
│  │  [Email Capture] [Explore the Home →]                       │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              ↓                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  THREE PILLARS: Sleep | Focus | Connection                  │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              ↓                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  MANIFESTO: The Vision Statement                            │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              ↓                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  FINAL CTA: Join the Waitlist                               │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
                    [Explore the Home →]
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│                      ROOM WALKTHROUGH                               │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  EXTERIOR VIEW (Starting Point)                             │   │
│  │  Click rooms to explore →                                   │   │
│  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐             │   │
│  │  │Office│ │Bedroom│ │Kitchen│ │Living│ │Gym  │             │   │
│  │  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘             │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              ↓                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  ROOM DETAIL VIEW                                           │   │
│  │  [Room Image with Hotspots]                                 │   │
│  │                                                             │   │
│  │  Hotspot → Modal with:                                      │   │
│  │    - Feature name                                           │   │
│  │    - Science explanation                                    │   │
│  │    - "Learn More" link                                      │   │
│  │                                                             │   │
│  │  [← Back to Exterior] [→ Next Room]                        │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

### Room-by-Room Hotspot Mapping

#### ZONE 1: Biological Core

**Bedroom ("The AEON Sanctuary")**
| Hotspot | Feature | Science |
|---------|---------|---------|
| Thermal Grid Mattress | 8Sleep-style bi-phasic cooling | Optimal sleep at 65-67°F; thermal wake-up |
| HRV Display | Real-time heart rate variability | Recovery metric for training readiness |
| Sleep Score Panel | Oura Ring integration | QQRT Framework tracking |
| Red Light Therapy | Infrared panels in bathroom | Mitochondrial function, skin health |
| Blackout System | Automated light blocking | Melatonin production optimization |

**Kitchen ("The Nutrition Lab")**
| Hotspot | Feature | Science |
|---------|---------|---------|
| Vertical Farm | Mars-Earth Aeroponics | Zone A: Microgreens, Zone B: Sprouted lentils |
| Food Pyramid Display | Blue Zones x Blueprint | Visual appetite triggering |
| Supplement Station | Organized health stack | Protocol-based supplementation |

**Gym ("Anti-Aging Arena")**
| Hotspot | Feature | Science |
|---------|---------|---------|
| Cold Plunge | Ice bath station | Dopamine +250%, norepinephrine +530% |
| Red Light Wall | Full-body therapy panels | Collagen, testosterone, recovery |
| VO2 Max Zone | Cardio equipment | Zone 2 training for longevity |

#### ZONE 2: Cognitive Engine

**Office ("The Sovereign Studio")**
| Hotspot | Feature | Science |
|---------|---------|---------|
| Deep Work Timer | 90-minute focus blocks | Ultradian rhythm optimization |
| Knowledge Graph | Obsidian visualization | Second brain methodology |
| Encoding Station | Feynman Technique boards | Active recall learning |
| Standing Desk | Default position | Metabolic health, alertness |
| Electric Blue Lighting | Focus-spectrum LEDs | Circadian rhythm support |

#### ZONE 3: Social & Spiritual

**Living Room ("Connection Hub")**
| Hotspot | Feature | Science |
|---------|---------|---------|
| Conversation Pit | Sunken seating | Vulnerability architecture |
| Golden Hour Lighting | Warm orange spectrum | Oxytocin, relaxation |
| Digital Detox Zone | Phone-free space | Blue Zones social principle |

**Meditation Atrium**
| Hotspot | Feature | Science |
|---------|---------|---------|
| Living Wall | Biophilic integration | Stress reduction, air quality |
| Circadian Skylight | Natural light tracking | NSDR optimization |
| Sound System | Acoustic optimization | Binaural beats, pink noise |

---

## 2. MVP Feature Set (Pretotype v1.0)

### Phase 1: Image-Based Walkthrough (SIMPLEST MVP)

**What We're Building:**
- Static landing page with hero, pillars, manifesto, CTA
- Interactive image gallery with clickable hotspots
- Modal system for feature explanations
- Email capture for waitlist

**What We're NOT Building Yet:**
- Full 3D digital twin
- Animated time-of-day simulation
- User accounts or personalization
- Real AI feedback loop simulation

### MVP Implementation Approach

**Recommended Stack:**
```
Framework:      Astro (static site generator)
Styling:        Tailwind CSS
Image Hotspots: react-img-mapper (React component in Astro)
Modals:         Shadcn Dialog
Animations:     GSAP + ScrollTrigger
Email Capture:  ConvertKit or Mailchimp API
Analytics:      Plausible (privacy-friendly)
Hosting:        Vercel (free tier)
```

**Why Astro over Next.js for this MVP:**
- 40% faster page loads
- Zero JavaScript by default
- Near-perfect Lighthouse scores (better conversions)
- Can add React components where needed (islands architecture)

### Simulating "The System" in a Static Demo

**"Day in the Life" Slider (Future Enhancement)**
Instead of real-time AI, we show pre-defined states:

```
MORNING (6 AM)
├── Bedroom: Cool blue lighting → gradual warm sunrise
├── Kitchen: Vertical farm lights active, morning supplements displayed
├── Office: Lights off, blinds closed
└── System Status: "Circadian Reset Active"

FOCUS BLOCK (9 AM)
├── Bedroom: Blackout maintained
├── Kitchen: Minimal lighting
├── Office: Electric blue LEDs, Deep Work timer visible
└── System Status: "Focus Protocol Active - 90 min block"

EVENING (7 PM)
├── Bedroom: Preparing for sleep (warm red spectrum)
├── Kitchen: Dinner prep, family gathering
├── Living Room: Golden hour lighting, conversation pit active
└── System Status: "Social Connection Mode"

NIGHT (10 PM)
├── Bedroom: Complete darkness, mattress cooling initiated
├── All Rooms: Red spectrum only
└── System Status: "Sleep Optimization Active"
```

For MVP: This is displayed as static images or a simple image carousel showing different time states.

---

## 3. Development Stack (Detailed)

### Core Stack

| Layer | Technology | Reason |
|-------|------------|--------|
| **Framework** | Astro 4.x | Fastest static sites, island architecture |
| **UI Components** | React 18 (in Astro islands) | For interactive elements only |
| **Styling** | Tailwind CSS | Rapid development, consistent design |
| **Component Library** | Shadcn/ui | Beautiful modals, dialogs, forms |
| **Animations** | GSAP + ScrollTrigger | Cinematic scroll effects |
| **Image Optimization** | Astro Image | Auto-format, lazy loading |
| **Email Capture** | ConvertKit or Resend | API-based, no forms iframe |
| **Analytics** | Plausible | Privacy-first, simple |
| **Hosting** | Vercel | Free tier, edge functions if needed |
| **Domain** | Cloudflare | DNS + free SSL |

### Alternative: Spline for 3D (Phase 2)

When ready to add true 3D:
- **Spline** for visual 3D scene creation
- **@splinetool/react-spline** for React integration
- Can replace image gallery with 3D exploration
- Keep image version as fallback for slow connections

### Project Structure

```
repos/solarpunk/
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Pillars.astro
│   │   ├── Manifesto.astro
│   │   ├── WaitlistForm.astro
│   │   ├── RoomViewer.tsx        # React island
│   │   ├── HotspotModal.tsx      # React island
│   │   └── RoomNav.tsx           # React island
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro           # Landing page
│   │   └── explore.astro         # Room walkthrough
│   └── styles/
│       └── global.css
├── public/
│   └── rooms/
│       ├── exterior.jpg
│       ├── bedroom.jpg
│       ├── bedroom-dark.jpg      # Night mode variant
│       ├── office.jpg
│       ├── kitchen.jpg
│       ├── living-room.jpg
│       ├── gym.jpg
│       └── meditation.jpg
├── data/
│   └── rooms.json                # Hotspot coordinates + content
├── docs/
│   ├── PLAN.md                   # This document
│   └── RESEARCH.md               # Research findings
├── assets/
│   └── images/                   # Source images (high-res)
├── config/
│   └── site.ts                   # Site configuration
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

---

## 4. Narrative Script (Landing Page Copy)

### Hero Section

**Headline:**
> Your Home, Optimized for You

**Subheadline:**
> The Algorithmic Home adapts to your biology, your rhythms, your goals. Sleep deeper. Focus better. Live fully.

**CTA:**
> [Join the Vision] - Be among the first to experience the future of living.

---

### Three Pillars Section

**Pillar 1: Sleep**
> **Wake Up Transformed**
> Your bedroom becomes a sleep laboratory. Thermal regulation, circadian lighting, and biometric tracking work in harmony to deliver the deepest rest of your life.

**Pillar 2: Focus**
> **Think Without Effort**
> Your office anticipates your cognitive needs. Environmental distractions vanish. Deep work becomes your default state.

**Pillar 3: Connection**
> **Be Present, Together**
> Your living spaces are designed for human connection. Golden hour lighting, conversation pits, and digital detox zones bring you closer to the people who matter.

---

### Manifesto Section

> **We believe your home should work for you—not the other way around.**
>
> For too long, we've adapted ourselves to our environments. We force ourselves awake against our circadian rhythms. We fight distractions that our spaces amplify. We sit in rooms designed for efficiency, not humanity.
>
> **What if your home could sense what you need and respond?**
>
> What if the lights shifted to match your biology? What if your bedroom cooled precisely when deep sleep begins? What if your office eliminated friction before you even noticed it?
>
> **The Algorithmic Home is not a smart home. It's a wise home.**
>
> Built on the science of sleep optimization, flow states, and social connection—and integrated through a single intelligent system that learns, adapts, and anticipates.
>
> This is not about controlling your home with an app.
> This is about designing an environment that designs your best life.
>
> **Welcome to the future of living.**

---

### Final CTA Section

**Headline:**
> Be First to Experience the Algorithmic Home

**Copy:**
> We're building a limited number of concept homes. Join the waitlist to receive early access, behind-the-scenes updates, and exclusive invitations.

**CTA Button:**
> [Join 2,500+ Visionaries →]

**Social Proof:**
> "The most compelling vision of residential technology I've seen." — Early Beta Tester

---

## 5. Immediate Next Steps (Week 1 Sprint)

### Day 1-2: Project Setup

- [ ] Initialize Astro project in `repos/solarpunk`
- [ ] Configure Tailwind CSS with custom color palette
- [ ] Set up project structure (pages, components, public)
- [ ] Install dependencies: `@astrojs/react`, `react-img-mapper`, `gsap`
- [ ] Create base Layout component with fonts and meta tags
- [ ] Set up Vercel deployment pipeline

### Day 3-4: Landing Page

- [ ] Build Hero section with email capture form
- [ ] Build Three Pillars section with icons/illustrations
- [ ] Build Manifesto section with scroll animations
- [ ] Build Final CTA section
- [ ] Connect email capture to ConvertKit/Resend
- [ ] Add Plausible analytics

### Day 5-6: Room Walkthrough

- [ ] Organize and optimize room images (WebP format)
- [ ] Create rooms.json with hotspot coordinates
- [ ] Build RoomViewer React component
- [ ] Build HotspotModal component with room content
- [ ] Build RoomNav for navigation between rooms
- [ ] Test hotspot interactions

### Day 7: Polish & Launch

- [ ] Add GSAP scroll animations to landing page
- [ ] Optimize images for performance
- [ ] Run Lighthouse audit (target: 95+)
- [ ] Mobile responsiveness testing
- [ ] Cross-browser testing
- [ ] Deploy to production domain
- [ ] Create social preview images (OG tags)

---

## 6. Success Metrics

### Validation Targets (First 2 Weeks)

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Waitlist Signups** | 500+ | ConvertKit count |
| **Conversion Rate** | 5-10% | Signups / Visitors |
| **Time on Page** | >2 minutes | Plausible analytics |
| **Scroll Depth** | >75% | Plausible analytics |
| **Room Exploration** | >3 rooms per session | Custom event tracking |
| **Referral Rate** | >10% | Viral loop tracking |

### Qualitative Validation

- Are people asking "When can I buy this?"
- Are people sharing without prompting?
- What questions are people asking? (survey in thank you page)
- Which rooms get the most engagement? (hotspot click tracking)

---

## 7. Future Phases

### Phase 2: Enhanced Walkthrough (Post-Validation)

- Add "Day in the Life" slider showing different time states
- Integrate Spline for 3D exterior view
- Add audio (ambient sounds, voiceover)
- Build room comparison feature (before/after optimization)

### Phase 3: Full 3D Digital Twin

- Complete 3D walkthrough using Three.js/R3F or Spline
- Real-time lighting changes based on time of day
- Interactive "system dashboard" showing home state
- VR support for immersive experience

### Phase 4: Product Development

- Partner with smart home manufacturers
- Develop actual room specifications
- Create installation guides
- Launch pilot program with early adopters

---

## 8. Image Asset Organization

### Required Images (Sourced from Inspiration)

```
public/rooms/
├── exterior-day.jpg          # Solarpunk mansion, daytime
├── exterior-night.jpg        # Same view, nighttime with colored rooms
├── bedroom-sleep.jpg         # Green/teal aesthetic, thermal mattress visible
├── bedroom-dark.jpg          # Dark blue minimal, nighttime
├── office-focus.jpg          # Electric blue, Deep Work timer visible
├── kitchen-farm.jpg          # Vertical aeroponic farm close-up
├── kitchen-nutrition.jpg     # Food pyramid display
├── living-room-social.jpg    # Warm orange, conversation pit
├── gym-wellness.jpg          # Cold plunge, red light panels
└── meditation-atrium.jpg     # Biophilic, living walls
```

### Image Specifications

- **Format**: WebP (with JPG fallback)
- **Resolution**: 2400x1600px (source), responsive srcset generated
- **File Size**: <500KB per image (optimized)
- **Aspect Ratio**: 3:2 (consistent across all rooms)

---

## 9. Risk Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Low conversion rate | Medium | High | A/B test headlines, iterate copy |
| Poor mobile experience | Medium | High | Mobile-first design, test early |
| Slow page load | Low | High | Astro + image optimization |
| Image quality inconsistent | Medium | Medium | Establish style guide before final selection |
| Scope creep to 3D | High | Medium | Strict MVP definition, resist urge to over-build |

---

## Appendix: Research Summary

### Tech Stack Decision Matrix

| Option | Time to MVP | Performance | Customization | Recommended For |
|--------|------------|-------------|---------------|-----------------|
| Astro + react-img-mapper | 1 week | Excellent | Full | **MVP (Chosen)** |
| Spline | 3-5 days | Good | Limited | Phase 2 3D upgrade |
| React Three Fiber | 2-3 weeks | Good | Full | Phase 3 full 3D |
| Kuula/360 Tour | 1 day | Good | Limited | Alternative if images are 360 |

### Key Research Sources

- **3D Tech**: Three.js documentation, Spline docs, R3F examples
- **Landing Pages**: Framer best practices, Unbounce conversion data
- **Copywriting**: StoryBrand framework, manifesto examples
- **Solarpunk Aesthetic**: Aesthetics Wiki, biophilic design resources
- **Performance**: Astro benchmarks, Lighthouse optimization guides

---

*This plan is a living document. Update as we learn from validation data.*
