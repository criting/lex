# LEX

Boutique law counsel template for [Veltri](https://veltri.example) — practice areas, people, insights, and consultation enquiry. Serious typographic craft; no ambulance-chaser clichés.

**Demo content is fictional.** Not legal advice. Submitting the contact form does not create a solicitor–client relationship.

## Stack

- Next.js App Router (static export)
- TypeScript strict
- Tailwind CSS v4
- Motion (`motion/react`)
- Zod (consultation form)
- Cloudflare Pages friendly (`out/`)

No CMS in this repo. When Nextly is stable, swap `src/content/provider.ts` for a CMS adapter without rewriting UI.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Chamber hero, practice index, roster, insights, consultation invite |
| `/practice-areas` · `/practice-areas/[slug]` | Statute-index practice areas |
| `/people` · `/people/[slug]` | Counsel roster |
| `/insights` · `/insights/[slug]` | Memorandum-style insights |
| `/about` | Chambers narrative |
| `/contact` | Demo consultation form |
| `/privacy` · `/terms` | Placeholder legal pages |

## Local development

```bash
npm install
npm run dev
```

```bash
npm run typecheck
npm run lint
npm run build
```

Static output lands in `out/` for Cloudflare Pages or any static host.

## Content

Edit typed demo data under `src/content/data/`. Connect a real form endpoint via `contact.endpoint` in `src/content/data/site.ts`.

## Design

See `DESIGN.md` for tokens, type, motion, and anti-patterns. Distinct from FORMA (print-studio vermilion).

## License

Private template source unless otherwise stated by Criting / Veltri distribution terms.
