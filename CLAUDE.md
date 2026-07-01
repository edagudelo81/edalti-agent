# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/landing site for Edalti Solutions — a WhatsApp AI appointment-scheduling agent for SMBs (clinics, dental, salons) in Colombia. All user-facing copy is in Spanish (es_CO). Frontend-only Vite + React 18 + TypeScript SPA, originally generated with Lovable (the `lovable-tagger` plugin runs in dev mode only).

## Commands

```sh
npm run dev          # dev server at http://localhost:8080 (note: port 8080, not 5173)
npm run build        # production build
npm run build:dev    # build in development mode
npm run lint         # eslint .
npm test             # vitest run (single pass)
npm run test:watch   # vitest watch mode
```

Run a single test file: `npx vitest run src/test/example.test.ts`

The project uses npm exclusively (`package-lock.json` is the only lockfile).

## Architecture

- **Routing** (`src/App.tsx`): `react-router-dom` with three routes — `/` redirects to `/inicio` (landing page), `/precios` (pricing), and a catch-all `NotFound`. New routes must be added in `App.tsx` **above** the catch-all `*` route.
- **Pages** (`src/pages/`) wrap their content in `SiteLayout` (`src/components/site/SiteLayout.tsx`), which provides `Navbar`, `Footer`, and a floating `StickyCTA`.
- **Site components** (`src/components/site/`): custom marketing components, including `WhatsAppMockup` and `DemoSplitView` which simulate the WhatsApp agent conversation on the landing page.
- **UI primitives** (`src/components/ui/`): shadcn/ui components (Radix-based, configured via `components.json`). Prefer these over new one-off primitives.
- **Styling**: Tailwind with design tokens as HSL CSS variables defined in `src/index.css` and mapped in `tailwind.config.ts` (e.g. `primary`, `success`, and custom `whatsapp.header/chat/bubble` colors for the mockups). Use the semantic token classes, not raw hex values.
- **Imports**: `@/` aliases `src/` (configured in both `vite.config.ts` and `vitest.config.ts`).
- **Testing**: Vitest + Testing Library with jsdom, globals enabled, setup in `src/test/setup.ts`. Test files match `src/**/*.{test,spec}.{ts,tsx}`.

There is no backend, API layer, or state management beyond a `QueryClientProvider` shell — content (features, pricing, FAQ) lives as data arrays at the top of each page component.
