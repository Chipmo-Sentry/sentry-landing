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
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
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
