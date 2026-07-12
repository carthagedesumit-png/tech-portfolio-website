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
- `/engineering` - Engineering Division landing page
- `/engineering/solar` - Solar, hybrid, storage, and energy engineering
- `/engineering/networking` - Enterprise networking and structured infrastructure
- `/engineering/security` - CCTV, access control, and security infrastructure
- `/engineering/automation` - Industrial, IoT, building, and business automation
- `/engineering/electrical` - Electrical installations, distribution, and backup power
- `/engineering/consulting` - Site surveys, planning, design, and implementation support
- `/solutions` - Industry solutions landing page
- `/solutions/retail` - Retail solution journey
- `/solutions/wholesale-distribution` - Wholesale and distribution solution journey
- `/solutions/pharmacy` - Pharmacy solution journey
- `/solutions/hospitality` - Hospitality solution journey
- `/solutions/professional-services` - Professional services solution journey
- `/solutions/multi-branch` - Multi-branch business solution journey

## Component Structure

- `src/components/layout/` - Shared corporate header and footer
- `src/components/home/` - Corporate homepage sections
- `src/components/products/cbos/` - Dedicated CBOS product page sections
- `src/components/solutions/` - Solutions landing page, industry data, shared cards, status badges, CTAs, and page templates
- `src/components/engineering/` - Engineering data, landing experience, division page layouts, and shared engineering components
- `src/components/engineering/shared/` - Hero, CTA, service, capability, tool, calculator, and project showcase cards
- `src/components/engineering/pages/` - Reusable division and route presentation layouts
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

Current milestone work is expected on `feature/carthage-corporate-website`. Preserve existing corporate homepage architecture, the CBOS product page, and reusable engineering assets unless a milestone explicitly calls for changes.

## Website Milestone Status

- Milestone 1: Corporate homepage foundation and component architecture - complete
- Milestone 2: CBOS product page V1 at `/products/cbos` - complete
- Milestone 3: Industry solutions V1 with sector-specific customer journeys - complete
- Milestone 4: Engineering Division V1 with six dedicated service areas - complete
- Future: Support, legal, and customer documentation pages

## Current vs Planned Capability Policy

Industry pages must distinguish the current CBOS foundation from planned specialist editions. Use clear labels such as `Available in current CBOS foundation`, `Core capability available`, `Specialist workflow planned`, and `Future industry edition`. Do not claim public release status, compliance coverage, prescription processing, room booking, table management, project accounting, or other specialist workflows unless they are actually supported and verified.

## Tooling Notes

- `npm run build` is the primary production verification command.
- `npm audit` currently reports a known moderate advisory in Next's nested PostCSS dependency; the available audit fix requires `npm audit fix --force` and a breaking dependency path, so it is intentionally not applied in these milestones.
- The current `next lint` script may be invalid under Next.js 16 and should not be treated as a passing lint setup until a proper ESLint configuration is added.

## Engineering Tools

The existing standalone Solar Calculator remains unchanged at `src/components/SolarCalculator.jsx` and is integrated into `/engineering/solar` as an indicative planning tool.

Available:

- Solar Calculator

Planned and clearly marked `Coming Soon`:

- Cable Calculator
- Battery Sizing
- Load Estimator
- Network Planner
- Voltage Drop Calculator

The previous engineering client hub remains preserved at `src/components/engineering/EngineeringWorkspace.jsx`; it is not used to make unverified project or availability claims in the corporate Engineering Division.
