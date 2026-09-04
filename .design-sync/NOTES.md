# design-sync notes

## 2026-09-05 — sync attempted, deliberately stopped. Nothing was created or uploaded.

**This repo is not a design system.** It is a Next.js application:

- no `dist/` / `lib/` / `build/`, no `main` / `module` / `exports` in package.json, `private: true`
- no Storybook and no `*.stories.*` files → shape would be `package`
- 83 components, of which **only 10 accept props**; 68 are page sections under
  `src/app/[locale]/**/components/` with hardcoded placeholder data
- the 15 reusable ones in `src/components/` are mostly app-wired singletons
  (Topbar, MobileMenu, dropdowns) that depend on next-intl routing context

A design agent given zero-prop components cannot configure anything, and the
placeholder demo content would be baked into every design built from them.

**A richer design system already exists in Claude Design.** Project
"KCLUB Design System" (`6109b4e0-6ea5-4d48-85e5-b57d8bfc34b0`, updated
2026-09-04) holds ~35 real components with `.d.ts`/`.jsx`/`.prompt.md`
(PartnerListingCard, CategoryTile, Button, Input, Topbar, LocaleSwitcher,
StepNav, …), 10 token files, 18 guideline pages, three ui_kits, and an
archived `kylyvnyk-club-v9`. It was not touched — first-time imports never
write into a populated project.

A second project with the identical name exists at
`b53ee1f3-2d33-4f9d-9dad-9b3cc2bedc99` (updated the same day, earlier);
its contents were not inspected.

**Before syncing this repo in future**, one of these has to be true:
1. real components with props are extracted into a library with a build, or
2. the goal changes to one-way token reconciliation against the existing
   project rather than a component import.

**The one thing that may genuinely have drifted:** `src/assets/css/style.css`
carries two Tailwind 4 `@theme` blocks with 64 tokens
(`--color-default-50…950`, `--color-danger/info/border/body-bg`) plus
light/dark `@custom-variant`. Worth diffing against that project's `tokens/`.
