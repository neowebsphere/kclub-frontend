# kclub — frontend

Business club front end: a directory of partner companies offering discounts to club members.

Built on Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 4 and Preline UI.

## Requirements

- Node.js 20+
- npm — the project is pinned to npm via `packageManager` in `package.json`. Do not use yarn, pnpm or bun: a second lockfile drifts from `package-lock.json` and resolves a different dependency tree.

## Getting started

```bash
npm ci
npm run dev
```

Open http://localhost:3000 — it redirects to `/en`.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier over `src/` |

## Internationalisation

Three locales — `en`, `ru`, `uk` — served by [next-intl](https://next-intl.dev) with an always-on URL prefix. `en` is the default and the fallback for missing keys.

```
/            -> /en          (redirect)
/en/partners
/ru/partners
/uk/partners
```

| Path | Role |
|---|---|
| `src/i18n/routing.ts` | Locale list, default locale, prefix strategy |
| `src/i18n/navigation.ts` | Locale-aware `Link`, `useRouter`, `usePathname` |
| `src/i18n/request.ts` | Per-request message loading |
| `src/proxy.ts` | Locale negotiation and redirects (the `middleware.ts` convention was renamed in Next.js 16.2) |
| `messages/{en,ru,uk}.json` | Message catalogues |

Two rules keep locale routing working:

1. **Always import `Link` / `usePathname` / `useRouter` from `@/i18n/navigation`**, never from `next/link` or `next/navigation`. The plain versions drop the locale prefix.
2. **Every page calls `setRequestLocale(locale)`** before rendering. Without it a statically rendered page falls back to `en` and its links point at the wrong locale.

`ru.json` and `uk.json` currently hold English placeholder values.

## Partner categories

`src/config/categories.ts` defines a three-level taxonomy — block → category → subcategory. Nodes carry a stable dotted `path` (`business.legal.corporate`) and no labels; labels live under the `Categories` namespace in the message catalogues and are read with ``t(`${path}.label`)``. The tree shipped today is a placeholder; the shape is final.

## Routes

```
/[locale]                      home
/[locale]/partners             catalogue
/[locale]/partners/entry       partner profile
/[locale]/become-partner/*     5-step application
/[locale]/account/*            member area, incl. /account/auth/*
/[locale]/blog, /about, /contact, /help, /terms
```

24 routes × 3 locales are prerendered as static pages.

## Origin

Derived from the Coderthemes "Finder" template. The other five verticals it shipped with (real estate, cars, doctors, events, city guide) have been removed. Much of the remaining page copy is still template placeholder text and is being replaced.
