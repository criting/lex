# LEX — Design System

Boutique law counsel template. Cool stone chamber, deep seal teal, brass citations. Typographic confidence over decoration — no gavels, scales clipart, or ambulance-chaser tropes.

## Positioning

For small counsel practices and boutique firms. Feels like a quiet chambers website with commercial density — not FORMA’s print-studio vermilion, not a generic “full-service firm” SaaS landing page.

## Palette

| Token | Hex | Role |
|-------|-----|------|
| Stone | `#E4E0D8` | Cool page ground |
| Stone raised | `#F1EEE7` | Elevated bands, forms |
| Stone deep | `#D5D0C6` | Footer / banner wash |
| Ink | `#0E1419` | Primary text / wordmark |
| Ink soft | `#1C242C` | Secondary body |
| Muted | `#5E666F` | Supporting copy |
| Meta | `#7A828B` | Captions, mono labels |
| Rule | `#C8C2B6` | Fine rules |
| Seal | `#1A4D5C` | Single assertive accent |
| Seal soft | `#D7E4E8` | Soft seal wash |
| Brass | `#8B7355` | Docket numbers / citations only |

Buyer alternates (document only — switch CSS variables): deep forest `#1F3D2F`, midnight navy `#0F1C2E`. Keep one seal at a time.

## Typography

| Role | Family | Notes |
|------|--------|-------|
| Display / wordmark | **Fraunces** | Oversized headlines, counsel names |
| Body / UI | **Plus Jakarta Sans** | Readable long-form and controls |
| Metadata | **IBM Plex Mono** | Docket labels, citations, dates only |

Avoid Inter / Roboto / Arial / system UI stacks as primary. Never use mono for body paragraphs.

## Layout

- Statute-index practice lists, counsel roster half-bleeds, memorandum insight index
- Hero budget: brand + one statement + one chamber visual plane + CTA group
- Radius: media `0` · controls `2px` · never pill CTAs
- No justice iconography, bento grids, gradient blobs, glassmorphism, or fake win-rate metrics

## Motion

- Hero: masked wordmark rise, chamber image scale settle, CTA fade
- Practice index / insights: staggered row reveals
- Roster: light spring lift on hover (disabled under reduced motion)
- Shared springs / ease in `src/lib/motion.ts`
- `MotionConfig reducedMotion="user"` globally
- No scroll-jacking, forced horizontal scroll, or hover-only essential behaviour

## Atmosphere

Cool stone wash + subtle SVG grain (`.site-shell::before`). Seal colour used sparingly — nav active, CTAs, hover states. Brass reserved for docket/citation chrome.

## Content boundary

`src/content/provider.ts` is the typed local ContentProvider. All sample practice areas, people, and insights are **fictional demo** content. Replace portrait placeholders with real photography — never invent bar admissions or case results.

## Do not

- Copy FORMA / Maison / Atelier / NOIR compositions or tokens
- Invent testimonials, awards, “win rates”, or client logos
- Ship Payload/CMS in this template (Nextly noted in README for later)
