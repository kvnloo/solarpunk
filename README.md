# The Algorithmic Home

> A pretotype website for the future of human performance living.

## Project Overview

The Algorithmic Home is a concept for a solarpunk mansion where every room is designed to optimize human performance—sleep, focus, nutrition, and social connection. The home acts as an algorithmic feedback loop, using sensors and AI to adjust environmental factors automatically.

This repository contains the code for a **pretotype landing page** and **interactive room walkthrough** to validate market interest.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
repos/solarpunk/
├── src/
│   ├── components/     # Astro and React components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   └── styles/         # Global styles
├── public/
│   └── rooms/          # Room images
├── data/
│   └── rooms.json      # Hotspot data
├── docs/
│   └── PLAN.md         # Full project plan
└── assets/
    └── images/         # Source images
```

## Tech Stack

- **Framework**: Astro 4.x (static site generator)
- **UI**: React 18 (islands), Tailwind CSS, Shadcn/ui
- **Animations**: GSAP + ScrollTrigger
- **Image Hotspots**: react-img-mapper
- **Email Capture**: ConvertKit API
- **Analytics**: Plausible
- **Hosting**: Vercel

## MVP Features

### Landing Page
- Hero with value proposition
- Three pillars (Sleep, Focus, Connection)
- Manifesto section
- Waitlist email capture

### Room Walkthrough
- Interactive image gallery
- Clickable hotspots with science explanations
- Room-to-room navigation
- Time-of-day variants (future)

## Documentation

- [Full Project Plan](./docs/PLAN.md) - Comprehensive roadmap
- [Room Data](./data/rooms.json) - Hotspot coordinates and content

## Design Aesthetic

**Solarpunk**: High-tech minimalism meets biophilic design
- Organic curves and natural materials
- Color palette: Forest greens, warm oranges, electric blues
- Integration of technology with nature
- Optimistic futurism

## Rooms

| Room | Zone | Function |
|------|------|----------|
| Bedroom | Biological Core | Sleep optimization (QQRT Framework) |
| Kitchen | Biological Core | Nutrition lab with vertical farm |
| Office | Cognitive Engine | Deep work environment |
| Living Room | Social & Spiritual | Connection hub |
| Gym | Biological Core | Anti-aging protocols |
| Meditation | Social & Spiritual | NSDR and recovery |

## License

GNU General Public License v3.0
