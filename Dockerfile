# syntax=docker/dockerfile:1.7
# ============================================================================
# Stage 1 — deps: install all dependencies (including dev for build)
# ============================================================================
FROM node:22-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json* ./
# No BuildKit cache mount — Railway's Metal builder rejects it.
RUN npm ci --no-audit --no-fund

# ============================================================================
# Stage 2 — builder: Astro production build
# ============================================================================
FROM node:22-alpine AS builder
WORKDIR /app

ENV NODE_ENV=production \
    ASTRO_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ============================================================================
# Stage 3 — runtime: only the standalone node server + needed deps
# ============================================================================
FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=4321 \
    ASTRO_TELEMETRY_DISABLED=1

RUN apk add --no-cache curl \
    && addgroup -g 1001 -S nodejs \
    && adduser -S astro -u 1001 -G nodejs

# Astro node-adapter standalone bundle ships everything needed at /dist
COPY --from=builder --chown=astro:nodejs /app/dist ./dist
COPY --from=builder --chown=astro:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=astro:nodejs /app/package.json ./package.json

USER astro

EXPOSE 4321

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -fsS http://127.0.0.1:${PORT}/ -o /dev/null || exit 1

CMD ["node", "./dist/server/entry.mjs"]
