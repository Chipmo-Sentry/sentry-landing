// @ts-check
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const SITE = process.env.PUBLIC_SITE_URL ?? "https://sentry.chipmo.mn";

export default defineConfig({
  site: SITE,
  output: "server",
  adapter: node({ mode: "standalone" }),
  // Railway terminates TLS before the node server, so Astro perceives its own
  // origin as http:// and the default CSRF checkOrigin rejects EVERY real
  // browser form POST with 403 (verified in prod 2026-06-10, U01 audit).
  // Safe to disable: the landing carries no auth cookies, and /api/lead is
  // guarded by the honeypot + backend-side rate limit.
  security: { checkOrigin: false },
  integrations: [sitemap()],
  vite: {
    // @tailwindcss/vite resolves its Vite `Plugin` type from a different Vite
    // copy than Astro's bundled Vite. The structural mismatch (hotUpdate hook
    // `this` context) is harmless at runtime — cast to keep `astro check` green.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT ?? 4321),
  },
  i18n: {
    locales: ["mn", "en"],
    defaultLocale: "mn",
    routing: { prefixDefaultLocale: false },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
