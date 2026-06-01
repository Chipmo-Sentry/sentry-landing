# sentry-landing

Marketing site for **Chipmo Sentry** — AI-powered shoplifting detection SaaS for Mongolian retail. Single-page funnel with hero, features, pricing, FAQ, and a pilot signup form. Mongolian primary · English toggle (`?lang=en`).

**Stack:** Astro 5 · Tailwind CSS v4 (`@theme`) · TypeScript · Node adapter for Railway · Apache 2.0

---

## ✨ What ships

- **Single-page funnel** at `/` with 6 sections: hero (product mockup), how it works, features (bento), pricing (3 tiers), FAQ, pilot CTA form
- **Legal pages** `/privacy` and `/terms` (M2 launch requirement)
- **Lead form** `POST /api/lead` — logs to stdout in M1, forwards to `sentry-backend` `/api/v1/leads` once `SENTRY_BACKEND_URL` env is set
- **i18n** Mongolian (default) + English via `?lang=en` toggle; all copy lives in `src/lib/content.ts`
- **SEO** — canonical URLs, OG/Twitter meta, sitemap (`/sitemap-index.xml`), robots.txt
- **Brand tokens** match `@chipmo-sentry/ui-kit` so all 3 web UIs feel cohesive

---

## Quick start

```bash
npm install
cp .env.example .env

# Dev server (hot reload)
npm run dev                 # → http://localhost:4321

# Production-like preview
npm run build
npm start                   # → http://localhost:4321 (Node standalone server)

# Typecheck
npm run typecheck
```

---

## Project layout

```
src/
├── layouts/
│   └── Layout.astro            — HTML shell, SEO meta, OG, fonts
├── components/
│   ├── Logo.astro              — Chipmo Sentry SVG (with/without wordmark)
│   ├── Header.astro            — Sticky nav, language toggle, mobile menu
│   ├── Footer.astro            — Sitemap-style 4-column footer
│   ├── Hero.astro              — Headline + 4-camera mock grid with risk overlay
│   ├── HowItWorks.astro        — 4-step explanatory cards w/ arrow connectors
│   ├── Features.astro          — Bento grid (1 large + 6 small + 2 medium)
│   ├── Pricing.astro           — 3 tiers, highlight Pro, pilot ribbon
│   ├── FAQ.astro                — Native <details> accordion, 8 Q&A
│   └── CTA.astro                — Pilot signup form (email + store + cameras)
├── pages/
│   ├── index.astro              — Composes all sections
│   ├── privacy.astro            — Privacy policy (mn + en bodies inline)
│   ├── terms.astro              — Terms of Service
│   ├── thank-you.astro          — Post-submit confirmation (noindex)
│   └── api/
│       └── lead.ts              — POST handler for the CTA form
├── lib/
│   ├── i18n.ts                  — Lang type + picker
│   └── content.ts               — All marketing copy (mn + en pairs)
└── styles/
    └── global.css               — Tailwind v4 @theme tokens, hero glow utility
```

---

## i18n model

All UI copy is in `src/lib/content.ts` as `T("mn-string", "en-string")` pairs. Pages read `?lang=en` from the URL query and pick the right side at render time.

To add a new section:
1. Add a new export in `content.ts` (one object with localized strings)
2. Read it in your Astro component via `tr(obj, lang)` or destructure
3. The Header language-toggle button automatically alternates `/?lang=en` ↔ `/`

To add a full third language (M4+), expand `Lang` union in `i18n.ts` and add the third key everywhere.

---

## Configuration

| Variable | Where it's used | Required |
|---|---|---|
| `PUBLIC_SITE_URL` | Canonical URLs in `<head>` + sitemap | ✅ (prod) |
| `SENTRY_BACKEND_URL` | Where `/api/lead` forwards submissions | Optional (logs to stdout if unset) |
| `PORT` | Astro server port (Railway provides this) | Auto |
| `HOST` | Bind address (defaults `0.0.0.0`) | Auto |

`PUBLIC_*` env vars are exposed to client; everything else is server-only.

---

## Deployment — Railway

Container-based deploy. The repo ships a multi-stage Dockerfile that builds an Astro standalone Node server and runs it with a non-root user.

```
1. Railway → New project → Deploy from GitHub → Chipmo-Sentry/sentry-landing
2. Railway auto-detects Dockerfile + railway.toml
3. Set env: PUBLIC_SITE_URL, SENTRY_BACKEND_URL
4. Trigger deploy
5. Settings → Networking → Generate Domain
6. DNS: CNAME sentry.chipmo.mn → Railway domain
```

### Local Docker smoke test
```bash
docker build -t sentry-landing:dev .
docker run --rm -p 4321:4321 \
  -e PUBLIC_SITE_URL=http://localhost:4321 \
  sentry-landing:dev
curl -I http://localhost:4321/
```

---

## What's NOT in M1 (deferred)

- ❌ Blog (`/blog`) — M4+ when content marketing makes sense
- ❌ Customer testimonials section — needs actual pilot customers
- ❌ Live demo embed — needs hosted demo environment (M3)
- ❌ Detailed pricing comparison page — single-page `Pricing.astro` is enough for now
- ❌ Multilingual `/en/*` URL prefix routing — `?lang=en` query param is simpler M1, can be upgraded later
- ❌ Newsletter signup separate from pilot — single CTA form for now

---

## Related repos

- [sentry-backend](https://github.com/Chipmo-Sentry/sentry-backend) — receives `POST /api/v1/leads` from this site's form
- [sentry-ui-kit](https://github.com/Chipmo-Sentry/sentry-ui-kit) — shares brand tokens (manually mirrored in `global.css` to avoid making landing depend on the React kit)
- [sentry-frontend](https://github.com/Chipmo-Sentry/sentry-frontend) — the dashboard customers see after signing up

Platform overview: [Sentry-v.3 README](../README.md) (local workspace) · docs in [`docs/`](../docs/)
