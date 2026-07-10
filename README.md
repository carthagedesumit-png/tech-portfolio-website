# Carthage Technologies Corporate Website

This repository contains the corporate website foundation for Carthage Technologies, including the homepage architecture for the Carthage Business Operating System (CBOS), engineering services, industry solutions, and company positioning.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4 through `@tailwindcss/postcss`
- Pages Router

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

Current milestone work is expected on `feature/carthage-corporate-website`. Preserve existing uncommitted engineering work, especially reusable calculators, blueprint explorers, estimators, and project tracking tools.

## Website Roadmap

- Milestone 1: Corporate homepage foundation and component architecture
- Future: Dedicated CBOS product pages and module documentation
- Future: Dedicated Engineering division page using the preserved engineering workspace components
- Future: Industry-specific solution pages for planned editions
- Future: Support, legal, and customer documentation pages

## Preserved Engineering Assets

The previous engineering client hub has been preserved as `src/components/engineering/EngineeringWorkspace.jsx`. The standalone solar calculator remains available at `src/components/SolarCalculator.jsx`.
