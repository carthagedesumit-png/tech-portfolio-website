# Carthage Technologies Corporate Website

This repository contains the corporate website foundation for Carthage Technologies, including the homepage architecture for the Carthage Business Operating System (CBOS), engineering services, industry solutions, and company positioning.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4 through `@tailwindcss/postcss`
- Pages Router

## Routes

- `/` - Corporate homepage for Carthage Technologies
- `/products/cbos` - CBOS flagship product page

## Component Structure

- `src/components/layout/` - Shared corporate header and footer
- `src/components/home/` - Corporate homepage sections
- `src/components/products/cbos/` - Dedicated CBOS product page sections
- `src/components/engineering/` - Preserved engineering workspace for future Engineering pages
- `src/components/SolarCalculator.jsx` - Preserved standalone solar calculator

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Branch Workflow

Current milestone work is expected on `feature/carthage-corporate-website`. Preserve existing corporate homepage architecture and the reusable engineering assets unless a milestone explicitly calls for changes.

## Website Milestone Status

- Milestone 1: Corporate homepage foundation and component architecture - complete
- Milestone 2: CBOS product page V1 at `/products/cbos` - in progress for this change set
- Future: Dedicated Engineering division page using the preserved engineering workspace components
- Future: Industry-specific solution pages for planned editions
- Future: Support, legal, and customer documentation pages

## Tooling Notes

- `npm run build` is the primary production verification command.
- `npm audit` currently reports a known moderate advisory in Next's nested PostCSS dependency; the available audit fix requires `npm audit fix --force` and a breaking dependency path, so it is intentionally not applied in these milestones.
- The current `next lint` script may be invalid under Next.js 16 and should not be treated as a passing lint setup until a proper ESLint configuration is added.

## Preserved Engineering Assets

The previous engineering client hub has been preserved as `src/components/engineering/EngineeringWorkspace.jsx`. The standalone solar calculator remains available at `src/components/SolarCalculator.jsx`.
