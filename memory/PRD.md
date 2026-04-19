# COMPASS — Climate Action Routing System

## Original problem statement
Convert a provided single-file React HTML prototype (COMPASS) into a brilliantly designed, production-quality app. User quote: "This looks like an AI has made it. I want it to be made like a brilliant...". Keep placeholders for photos. Novice user — copy-paste only. Hosting: GitHub Pages at `https://github.com/arunbh2/compass`.

## Architecture
- **Frontend-only React SPA** (pure JavaScript, no backend) — ideal for GitHub Pages static hosting.
- State persistence: `localStorage` (context, screen, saved pathway items).
- Screen navigation: state-based (no router, simpler + works on static hosts out of the box).
- Auto-deploy: GitHub Actions workflow (`.github/workflows/deploy.yml`) on push to `main`.

## Design system (per `/app/design_guidelines.json`)
- **Aesthetic**: Swiss Brutalism × Editorial Documentary (NYT / Pentagram / Rest of World).
- **Type**: Cormorant Garamond (display serif) + IBM Plex Sans / Plex Mono.
- **Palette (user-supplied)**: Ink `#0a1629`, PA Yellow `#ffa600`, Publishing Aqua `#2bb6b7`, Consulting Blue `#2161c2`, Pink `#ed6a82`, BG `#f3f3f3`, Blue `#1b9cfc`, Green `#2ecc71`, Red `#e74c3c`.
- Sharp edges, 1px rules, generous whitespace, asymmetric layouts, mono labels with 0.2em tracking.

## Screens built (Feb 2026)
- [x] 01 · Entry — 3-step protocol (Hazard → Role → Geography), editorial masthead, photo hero
- [x] 02 · Solutions — catalogue (8 items), evidence dots, story blockquote, first-step callout
- [x] 03 · Providers — registry (8 NGOs/Govt), responsiveness stars, call/email CTAs
- [x] 04 · Schemes — navigator (5 schemes), accessibility bars, step-by-step, warnings
- [x] 05 · Pathway — auto-generated timeline + saved items + print + flag-a-gap
- [x] 06 · Dashboard — dark command center (stats, hazard distribution, gaps, bottlenecks)
- [x] BottomNav (5 tabs), Masthead, ContextBar, Restart control
- [x] PhotoSlot component with local → Pexels fallback → editorial placeholder chain

## Photo handling (novice-friendly)
User drops JPG files into `frontend/public/photos/` with specific names (`hero.jpg`, `vidarbha.jpg`, `sol-biodyke.jpg`, etc. — 12 slots total). If a file is missing, the app shows a Pexels documentary fallback, then an editorial placeholder with "IMG · FIG. 01" treatment if both fail. README.md explains this.

## Deployment
- `frontend/package.json` → `"homepage": "/compass"` (matches repo name).
- GitHub Actions workflow builds with `PUBLIC_URL=/compass` and deploys to GitHub Pages.
- SPA 404 fallback: `404.html` copied from `index.html` during build.
- Final URL: `https://arunbh2.github.io/compass`

## Prioritized backlog

### P1
- [ ] Custom domain support (currently uses `/compass` subpath)
- [ ] Add 5–8 more solution cards (e.g., Millet revival Vidarbha, Bio-rights Odisha, Pastoral resilience Ladakh)
- [ ] Expand providers list (currently 8 → aim 20)
- [ ] Language toggle (Hindi / Odia / Marathi) — content is in `data/compass.js` so i18n is mechanical

### P2
- [ ] Replace hardcoded dashboard numbers with a static JSON that's periodically refreshed
- [ ] Searchable full-text across all content
- [ ] Share-a-pathway link (URL-encoded context in hash)
- [ ] Dark mode toggle for non-dashboard screens

### P3
- [ ] Partner submission form (would require a backend OR a Formspree/Netlify Forms integration)
- [ ] Actual gap-flag submission → email/Slack webhook
- [ ] Interactive map of solutions by district

## Files of note
- `/app/frontend/src/data/compass.js` — all content (edit here to change copy)
- `/app/frontend/src/components/` — 6 screens + shared
- `/app/frontend/public/photos/README.md` — photo naming guide
- `/app/.github/workflows/deploy.yml` — auto-deploy workflow
- `/app/README.md` — novice deployment guide (step-by-step)
