# DESIGN.md – Design Tokens & Visual Architecture
## Project: John's Breakfast & Lunch (Calgary, AB)
**Design System Standard:** Impeccable + Taste-Skill + Unslop

---

## 1. Brand Essence & Voice
- **Archetype:** The Beloved Neighborhood Diner
- **Tone of Voice:** Warm, welcoming, genuine, unpretentious, proudly local Calgary since 2007.
- **Visual Feeling:** Warm daylight pouring over a wooden diner table, freshly brewed coffee in ceramic mugs, steaming hollandaise over poached eggs, golden hash browns.

---

## 2. Color Palette & Tokens

```css
:root {
  /* Canvas & Backgrounds */
  --color-canvas-bg: #FFF8ED;        /* Warm Cream diner background */
  --color-canvas-card: #FFFFFF;      /* Clean crisp card surface */
  --color-canvas-alt: #F6EFE3;       /* Subtle muted warm section contrast */

  /* Text & Contrast */
  --color-text-primary: #35251F;     /* Deep Espresso (High contrast, readable) */
  --color-text-secondary: #6B554E;   /* Medium roast warm brown */
  --color-text-muted: #8F7870;       /* Soft warm grey-brown */

  /* Brand Accents */
  --color-brand-red: #B94432;        /* Tomato Diner Red (CTA, badges, accents) */
  --color-brand-red-hover: #9F3525;
  --color-brand-honey: #E8B85B;      /* Soft Golden Yellow (Stars, highlights) */
  --color-brand-sage: #7B8064;       /* Muted Olive Sage (Secondary accents) */

  /* Borders & Shadows */
  --color-border-subtle: #EADBC8;    /* Warm beige hairline borders */
  --color-border-medium: #D8C5B0;
  --shadow-subtle: 0 4px 20px -2px rgba(53, 37, 31, 0.05);
  --shadow-card: 0 10px 30px -4px rgba(53, 37, 31, 0.08);
}
```

---

## 3. Typography Hierarchy

- **Headings Font:** `Playfair Display`, serif
  - `h1`: 3.5rem to 4.5rem (Hero), leading tight (1.1), tracking normal.
  - `h2`: 2.25rem to 2.75rem (Section titles), leading 1.2.
  - `h3`: 1.25rem to 1.5rem (Card titles), semibold.
- **Body Font:** `Plus Jakarta Sans`, sans-serif
  - Body text: 1rem (16px), line-height 1.6, color `--color-text-secondary`.
  - Eyebrows / Badges: 0.75rem to 0.8125rem, uppercase, tracking-wider (0.1em), font-weight 700.
  - Buttons: 0.9375rem, font-weight 600, smooth radius (9999px or 12px pill).

---

## 4. Anti-Slop Safeguards (`unslop` Rules)
1. **No generic gradient blobs or purple shadows:** All shadows tinted warm espresso (`rgba(53, 37, 31, ...)`).
2. **No emoji-stuffed buttons:** Real SVG icons from Lucide (`MapPin`, `Phone`, `Clock`, `ArrowRight`, `ChevronRight`).
3. **No corporate AI card layouts:** Every section has distinct editorial character (overlapping images, vintage badges, genuine quotes).
4. **Equal margins & padding:** Strict 8px grid system (padding 16, 24, 32, 48, 64, 80px).
5. **No fabricated restaurant claims:** Clear concept-menu disclaimer and honest neighborhood focus.

