# High Power Electricity

A modern Next.js 14 website inspired by the design of [megastar.com.bd](https://www.megastar.com.bd/), built for an industrial electricity/generator business.

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** components
- **Lucide React** icons
- **Embla Carousel** for the hero slider
- **Radix UI** primitives (via shadcn)

## Features

- Sticky header with top bar (welcome, social, contact info)
- Logo block with phone/email/address contact items
- Responsive nav with hover dropdown + mobile sheet
- Auto-playing hero slider with arrows & dot navigation
- 6 service tiles grid
- 8-card products grid with promotional sidebar
- 3 service cards
- Featured project with video placeholder + thumbnail rail
- 30-client logo wall
- 4-column footer with newsletter form, recent projects, and location
- Fully responsive (mobile / tablet / desktop)
- All placeholder routes: About, Products, Services, Gallery, Clients, Contact

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
npm run start
```

## Customization

All content is centralized in `lib/data.ts`. Edit that file to change:

- Company name, contact info, address
- Navigation menu items
- Service tiles
- Product cards
- Service cards
- Hero slides
- Recent projects

Brand colors live in `app/globals.css` (CSS variables: `--primary`, `--accent`).

## Project Structure

```
app/                    # App Router pages
  layout.tsx           # Root layout with header + footer
  page.tsx             # Homepage
  globals.css          # Tailwind + theme tokens
  about/ products/ services/ gallery/ clients/ contact/  # Placeholder routes

components/
  layout/              # Header, footer, top bar, mobile nav
  sections/            # Hero, service tiles, products, etc.
  ui/                  # shadcn primitives (button, card, input, ...)

lib/
  data.ts              # All site content (single source of truth)
  utils.ts             # cn() helper
```
