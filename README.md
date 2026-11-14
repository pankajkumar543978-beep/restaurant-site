# John's Breakfast & Lunch – Calgary Diner Website

> **Calgary, Alberta, Canada · Established 2007 by John & Wendy Ly**  
> *Good Food. Great Mornings. Since 2007.*

A custom, high-craft, modern diner website built for **John's Breakfast & Lunch** (Mount Pleasant, Calgary, AB). Designed with **anti-slop** principles, responsive mobile UX, and full Next.js 15 App Router architecture.

---

## 🥞 Live Experience & Pages

- **Home (`/`):**
  - **Dynamic Open/Closed Status:** Computes real-time status according to Calgary local time (`America/Edmonton`).
  - **Hero Card Carousel:** 5-slide interactive carousel featuring authentic John's storefront & patio photography, Eggs Benedict, and breakfast specialties.
  - **About Story Teaser:** Progressive narrative with direct links to the full story.
  - **Signature Dishes Showcase:** Interactive slide preview with price tags and diner recipe details.
  - **The John's Difference:** 4 core value propositions in a responsive 2×2 mobile grid.
  - **Food & Atmosphere Gallery:** Responsive gallery with modal lightbox (keyboard navigation with ESC, ←, →).
  - **Customer Reviews:** Verified feedback themes aggregated from 350+ community reviews with a horizontal touch-snap swipeable carousel on mobile.
  - **Location & Hours:** Weekly schedule accordion, Calgary map embed, and 1-tap Google Maps directions.
  - **Mobile Sticky Action Bar:** Bottom quick-action bar (`Call`, `Directions`, `Menu`) for mobile conversions.

- **Diner Menu (`/menu`):**
  - Live debounced search with instant suggestions.
  - Category filters: Classics, Benedicts, Poutines & Skillets, Omelettes, Griddle, Burgers & Sandwiches, Beverages.
  - Interactive price range slider and dietary filters (Vegetarian, House Specials).
  - Item detail modal with dish descriptions, diner sides, toast choices, and direct call-to-order buttons.
  - Live Favorites counter and one-click bookmarking.

- **Our Story (`/about`):**
  - Tribute to founders John & Wendy Ly and 18+ years of serving Mount Pleasant.
  - Diner values, community milestones, and hospitality philosophy.

- **Saved Favourites (`/favorites`):**
  - Persistent user wishlist stored in `localStorage`.
  - Live debounced search within saved items and one-click remove.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3 with custom warm diner palette (`cream`, `espresso`, `diner-red`, `diner-honey`)
- **Animation:** Motion (`motion/react`)
- **Icons:** Lucide React & Custom SVG
- **Typography:** Next Font Google (`Playfair Display`, `Plus Jakarta Sans`)
- **Testing & Verification:** Playwright headless QA testing

---

## ⚙️ Environment Variables

All external links, phone numbers, emails, and embed maps are configured via environment variables.

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### Supported Variables

| Variable | Description | Default Fallback |
| :--- | :--- | :--- |
| `NEXT_PROD_SITE_URL` | Canonical website domain (Vercel compatible) | `https://johnsbreakfastyyc.com` |
| `NEXT_PUBLIC_GOOGLE_MAPS_URL` | Official Google Maps location shortlink | `https://maps.app.goo.gl/kCNiTCxWnfGUAxpF8` |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` | Google Maps iframe embed URL | `https://maps.google.com/maps?q=...` |
| `NEXT_PUBLIC_RESTAURANT_PHONE` | Direct phone link (`tel:`) | `+1 403-277-0255` |
| `NEXT_PUBLIC_RESTAURANT_FORMATTED_PHONE` | Formatted phone number for display | `(403) 277-0255` |
| `NEXT_PUBLIC_RESTAURANT_EMAIL` | Contact and inquiry email address | `johnsbreakfastyyc@gmail.com` |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Official Instagram profile | `https://www.instagram.com/johnsbreakfastyyc/` |
| `NEXT_PUBLIC_FACEBOOK_URL` | Official Facebook page | `https://www.facebook.com/johnsbreakfastyyc/` |

---

## 📸 Image Assets Strategy

Images in this project are organized into two categories:

1. **Local Assets (`/public/images/`):**
   - `public/images/johns-storefront.jpg`: The authentic photograph of John's Breakfast & Lunch physical building, signage, and summer patio in Mount Pleasant, Calgary.
   - Any custom logo, local diner photos, or physical assets belong in `/public/images/`.

2. **Curated Photography (CDN):**
   - High-resolution, daylight diner food photography curated and defined in `src/data/menu.ts` and `src/data/gallery.ts`.
   - Every image is inspected for genuine recipe accuracy (e.g. Eggs Benedict, Buttermilk Pancakes, Striploin Steak & Eggs, Wonton Soup).

---

## 💻 Getting Started Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📁 Directory Structure

```
├── public/
│   └── images/
│       └── johns-storefront.jpg    # Verified storefront & patio photo
├── src/
│   ├── app/
│   │   ├── layout.tsx              # SEO, schema JSON-LD, fonts, mobile bottom bar
│   │   ├── page.tsx                # Homepage
│   │   ├── menu/page.tsx           # Full diner menu page with search & filters
│   │   ├── about/page.tsx          # Founders & story page
│   │   └── favorites/page.tsx      # Saved favourites wishlist
│   ├── components/                 # UI components (Hero, Navbar, Gallery, etc.)
│   ├── data/                       # Restaurant information, menu items, reviews
│   └── lib/                        # Structured JSON-LD schema & helper utilities
├── .env.example                    # Environment variable template
├── .gitignore                      # Git exclusion rules
├── package.json
└── tailwind.config.ts
```

---

## 📜 Disclaimer
*This website is a custom digital presentation created for John's Breakfast & Lunch (Calgary, AB). All trademarks, recipes, and diner names remain the property of John & Wendy Ly.*
