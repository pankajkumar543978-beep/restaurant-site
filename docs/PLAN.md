# PLAN.md – Master Implementation Plan
# PLAN.md – Master Implementation Plan
## Project: John's Breakfast & Lunch – Custom Restaurant Website Demo
**Location:** 2614 4 St NW A, Calgary, AB T2M 3A1, Canada  
**Owners:** John & Wendy Ly · Established 2007  
**Status:** [COMPLETED & VERIFIED]

---

## 1. Project Overview & Strategy
A custom, high-craft, single-page restaurant website demo designed to pitch modern digital presence to John & Wendy Ly. 

### Core Goals Met:
- **Anti-Slop Craft (`unslop` & `taste-skill`):** Warm Canadian diner aesthetic—warm cream canvas (`#FFF8ED`), deep espresso typography (`#35251F`), and tomato red diner accents (`#B94432`). Zero generic AI purple glows, floating emoji cards, or corporate template slop.
- **Design Director Quality (`impeccable`):** Editorial serif typography (`Playfair Display`), clean modern sans-serif body (`Plus Jakarta Sans`), balanced whitespace, WCAG AA compliance (4.5:1+), and responsive touch targets.
- **Accurate & Ethical Business Data:** Researched Mount Pleasant address, direct phone `+1 403-277-0255`, honest concept-menu disclaimers without fabricated prices or fake reviews.
- **Performance & Modern React (`react-best-practices`):** Next.js 15 App Router, TypeScript, Tailwind CSS, modular data separation, and Playwright verification.

---

## 2. Technical Architecture & Component Tree

```
src/
├── app/
│   ├── layout.tsx                    # Root layout, Google Fonts (Playfair & Plus Jakarta), SEO & OpenGraph metadata
│   ├── page.tsx                      # Single-page layout connecting all 10 major components
│   └── globals.css                   # Tailwind base, warm diner scrollbars, anti-overflow rules
├── components/
│   ├── AnnouncementBar.tsx           # Heritage banner with live Calgary open/closed status badge
│   ├── Navbar.tsx                    # Sticky navbar + text wordmark + desktop links + mobile drawer + "Get Directions"
│   ├── Hero.tsx                      # Editorial hero: "Good Food. Great Mornings. Since 2007." + badge + dual CTA
│   ├── RestaurantIntro.tsx           # "More Than Just Breakfast" community narrative & atmosphere photo
│   ├── SignatureDishes.tsx           # 6 signature dish cards (Poutine, Benedicts, Omelettes, Pancakes, Skillet, Clubhouse)
│   ├── MenuSection.tsx               # 6 category tabs (Breakfast, Benedicts, Omelettes, Pancakes, Lunch, Asian-Inspired)
│   ├── WhyJohns.tsx                  # 4 visual highlight cards (Generous portions, hospitality, etc.)
│   ├── OurStory.tsx                  # John & Wendy Ly 2007 heritage story & values
│   ├── FoodGallery.tsx               # Responsive grid + accessible lightbox modal with keyboard navigation
│   ├── CustomerReviews.tsx           # Verified review themes + 4.6★ Google rating + direct Google Maps link
│   ├── LocationHours.tsx             # Interactive hours (open status) + embedded Google Map + directions & phone
│   ├── ContactSection.tsx            # Validated form + mailto fallback + social links
│   ├── Footer.tsx                    # Wordmark, links, legal concept disclaimer, back-to-top button
│   └── Icons.tsx                     # Clean accessible SVG icons
├── data/
│   ├── restaurant.ts                 # Verified business details, hours, contact, coordinates, live status calculator
│   ├── menu.ts                       # Structured menu items by category (editable, unpriced)
│   ├── gallery.ts                    # Gallery images metadata & captions
│   ├── reviews.ts                    # Verified customer review themes
│   └── index.ts                      # Barrel export
└── lib/
    ├── utils.ts                      # cn helper and styling utilities
    └── schema.ts                     # Schema.org Restaurant JSON-LD generator
```

---

## 3. Development Phases & Task Checklist

- [x] **Task 1: Foundation & Setup**
  - Initialized Next.js with TypeScript and Tailwind CSS.
  - Configured fonts, CSS variables, and design tokens in `DESIGN.md` and `globals.css`.
  - Created structured data modules (`src/data/restaurant.ts`, `src/data/menu.ts`, `src/data/reviews.ts`, `src/data/gallery.ts`).
  - Test: `npx tsc --noEmit` passed with 0 errors.

- [x] **Task 2: Announcement Bar & Navigation**
  - Built `AnnouncementBar.tsx` with live Calgary time business status calculation.
  - Built `Navbar.tsx` with logo wordmark, desktop links, "Get Directions", and mobile drawer.
  - Test: Sticky header, keyboard ESC listener, body scroll lock.

- [x] **Task 3: Hero & Restaurant Introduction**
  - Built `Hero.tsx` with "Good Food. Great Mornings. Since 2007.", badge, and breakfast imagery.
  - Built `RestaurantIntro.tsx` ("More Than Just Breakfast").
  - Test: Contrast checked, high-res Unsplash imagery, responsive proportions.

- [x] **Task 4: Signature Dishes & Menu Section**
  - Built `SignatureDishes.tsx` with 6 featured items.
  - Built `MenuSection.tsx` with 6 category tabs (Breakfast, Benedicts, Omelettes, Pancakes, Lunch, Asian-Inspired).
  - Included ethical concept menu disclaimer note.
  - Test: Tab switching, unpriced ethical diner items.

- [x] **Task 5: Why John's, Our Story & Gallery**
  - Built `WhyJohns.tsx` with 4 core value cards.
  - Built `OurStory.tsx` honoring John & Wendy Ly since 2007.
  - Built `FoodGallery.tsx` with keyboard-navigable Lightbox modal.
  - Test: Modal open/close, arrow keys, ESC key.

- [x] **Task 6: Reviews, Location & Contact**
  - Built `CustomerReviews.tsx` with 4.6★ rating and Google Maps review button.
  - Built `LocationHours.tsx` with weekly schedule table, live status badge, and embedded Google Map.
  - Built `ContactSection.tsx` with validated form and mailto fallback.
  - Test: Form validation, click-to-call, directions link.

- [x] **Task 7: Footer, SEO & Structured Data**
  - Built `Footer.tsx` with wordmark, quick links, and independent design concept disclaimer.
  - Embedded Schema.org Restaurant JSON-LD in `layout.tsx`.
  - Test: `npm run build` compiled 100% static with 0 errors.

- [x] **Task 8: End-to-End Visual QA with Playwright**
  - Verified on desktop (1440x900) and mobile (390x844).
  - Validated Hero, Menu tab switching, Lightbox open/close and keyboard controls, location embed, and mobile drawer.
  - Zero layout shifts, zero horizontal overflow (`hasHorizontalOverflow: false`), and zero console errors.
