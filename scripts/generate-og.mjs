/**
 * Generates public/og.png (1200×630) — the social-share card referenced by
 * Layout.astro's og:image / twitter:image.
 *
 * Run:  node scripts/generate-og.mjs
 *
 * Needs `sharp`. It isn't a hard dependency of this repo, so we resolve it from
 * a few candidate locations (local install first, then the sibling
 * sentry-frontend repo which already ships it). To make this self-contained,
 * run `npm i -D sharp` here and it'll pick up the local copy automatically.
 */
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { mkdirSync } from "node:fs";

const require = createRequire(import.meta.url);
const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");

function loadSharp() {
  const candidates = [
    "sharp",
    resolve(root, "node_modules/sharp"),
    resolve(root, "../sentry-frontend/node_modules/sharp"),
  ];
  for (const c of candidates) {
    try {
      return require(c);
    } catch {
      /* try next */
    }
  }
  throw new Error(
    "sharp not found. Run `npm i -D sharp` in sentry-landing, then retry.",
  );
}

// ── Brand tokens (kept in sync with src/styles/global.css) ──────────────
const ORANGE = "#f97316";
const NAVY = "#0f172a";
const NAVY_2 = "#1e293b";
const SLATE_300 = "#cbd5e1";
const SLATE_400 = "#94a3b8";

const FONT =
  "Segoe UI, Inter, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif";

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${NAVY}"/>
      <stop offset="1" stop-color="${NAVY_2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="22%" r="55%">
      <stop offset="0" stop-color="${ORANGE}" stop-opacity="0.22"/>
      <stop offset="1" stop-color="${ORANGE}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- faint dotted grid -->
  <g fill="#ffffff" opacity="0.05">
    ${Array.from({ length: 11 }, (_, r) =>
      Array.from({ length: 22 }, (_, c) =>
        `<circle cx="${40 + c * 56}" cy="${40 + r * 56}" r="1.6"/>`,
      ).join(""),
    ).join("")}
  </g>

  <!-- brand lockup -->
  <g transform="translate(64,56)">
    <circle cx="22" cy="22" r="20" fill="none" stroke="${ORANGE}" stroke-width="3.2"/>
    <circle cx="22" cy="22" r="8" fill="${ORANGE}"/>
    <circle cx="27" cy="17" r="2.1" fill="${NAVY}"/>
    <text x="58" y="32" font-family="${FONT}" font-size="30" font-weight="700" fill="#ffffff" letter-spacing="-0.5">Chipmo Sentry</text>
  </g>

  <!-- headline -->
  <text x="64" y="272" font-family="${FONT}" font-size="60" font-weight="800" fill="#ffffff" letter-spacing="-1.5">24/7 камер хяналтын</text>
  <text x="64" y="348" font-family="${FONT}" font-size="60" font-weight="800" fill="#ffffff" letter-spacing="-1.5">AI <tspan fill="${ORANGE}">ажилтантай</tspan> болоорой</text>

  <!-- subheadline -->
  <text x="66" y="424" font-family="${FONT}" font-size="29" font-weight="500" fill="${SLATE_300}">Одоо байгаа CCTV дээр — хулгай, эрсдэлийг бодит цагт илрүүлнэ.</text>

  <!-- trust line -->
  <text x="66" y="556" font-family="${FONT}" font-size="24" font-weight="600" fill="${SLATE_400}">Одоо байгаа CCTV  ·  Бодит цагийн сэрэмжлүүлэг  ·  Ритэйлд зориулсан</text>

  <!-- url -->
  <text x="1136" y="556" text-anchor="end" font-family="${FONT}" font-size="24" font-weight="700" fill="${ORANGE}">sentry.chipmo.mn</text>

  <!-- detection-box accent (echoes the product) -->
  <g transform="translate(872,150)">
    <rect x="0" y="0" width="232" height="232" rx="10" fill="none" stroke="${ORANGE}" stroke-width="3"/>
    <rect x="0" y="-34" width="118" height="30" rx="6" fill="${ORANGE}"/>
    <text x="14" y="-12" font-family="${FONT}" font-size="19" font-weight="700" fill="${NAVY}">Эрсдэл 87%</text>
    <circle cx="206" cy="26" r="6" fill="#ef4444"/>
    <text x="196" y="32" text-anchor="end" font-family="${FONT}" font-size="16" font-weight="700" fill="#ffffff">LIVE</text>
  </g>
</svg>`;

const sharp = loadSharp();
const outDir = resolve(root, "public");
mkdirSync(outDir, { recursive: true });
const out = resolve(outDir, "og.png");

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("✓ wrote", out);
