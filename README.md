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
- `/docs` - Public Documentation Center and client-side guide filter
- `/docs/cbos` - CBOS overview and product maturity
- `/docs/getting-started` - Customer-friendly setup sequence
- `/docs/installation` - Windows deployment foundation
- `/docs/administration` - Administrative guidance
- `/docs/user-guide` - Operational workflow guidance
- `/docs/backup-recovery` - Backup, restore, and retention principles
- `/docs/licensing` - Licensing and activation concepts
- `/docs/api` - Public API overview
- `/docs/releases` - Release status and versioning foundation
- `/docs/troubleshooting` - Safe troubleshooting guidance
- `/docs/engineering` - Engineering guides and tool availability
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
- `src/components/docs/layout/` - Documentation shell and responsive sidebar navigation
- `src/components/docs/content/` - Public-safe article data, landing page, and article renderer
- `src/components/docs/shared/` - Search, cards, callouts, status, breadcrumbs, contents, pagination, and CTA components
- `src/components/SolarCalculator.jsx` - Preserved standalone solar calculator

## Setup

```bash
npm ci
```

The dependency baseline is verified with Node.js 24.16.x and npm 11.13.x.
`npm ci` installs exactly from `package-lock.json`; use it for clean local and
CI installations. Do not use `--force` or `--legacy-peer-deps` to bypass
dependency compatibility.

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Automated Quality Gates

Run the complete local launch-readiness suite:

```bash
npm run verify
```

The individual gates are also available:

```bash
npm run lint
npm run build
npm run test:e2e
```

After changing dependencies, refresh the lockfile with the repository's npm
version, then run:

```bash
npm ci
npm run verify
npm audit
npm audit --omit=dev
```

Review production and development-only audit results separately. Do not apply
`npm audit fix --force`; investigate major-version remediations and peer
compatibility before updating.

ESLint uses the Next.js Core Web Vitals rules. Playwright checks key public
routes, primary navigation, and WCAG A/AA accessibility with Axe. Browser tests
use the production build, so run `npm run build` before `npm run test:e2e` when
running that gate by itself. The test runner owns its temporary production
server and closes only that server when the suite finishes.

On Windows, browser tests automatically use an installed Google Chrome when it
is available, avoiding a dependency on Playwright's browser download CDN. Set
`PLAYWRIGHT_CHROME_PATH` to an explicit Chrome executable when auto-detection is
not suitable. Set `PLAYWRIGHT_USE_SYSTEM_CHROME=false` to require Playwright's
bundled Chromium instead. To test an already-running site, set
`PLAYWRIGHT_BASE_URL`.

## Branch Workflow

Preserve the corporate site architecture, existing routes, and reusable
engineering assets unless a milestone explicitly calls for changes.

## Security Reporting

Do not open a public issue containing credentials, private deployment details,
or an undisclosed vulnerability. Report security concerns privately through
the repository owner's GitHub security advisory contact. General,
non-sensitive dependency maintenance can use the repository issue tracker.

## Website Milestone Status

- Milestone 1: Corporate homepage foundation and component architecture - complete
- Milestone 2: CBOS product page V1 at `/products/cbos` - complete
- Milestone 3: Industry solutions V1 with sector-specific customer journeys - complete
- Milestone 4: Engineering Division V1 with six dedicated service areas - complete
- Milestone 5: Documentation Center V1 public knowledge hub - complete
- Future: Support, legal, and customer documentation pages

## Current vs Planned Capability Policy

Industry pages must distinguish the current CBOS foundation from planned specialist editions. Use clear labels such as `Available in current CBOS foundation`, `Core capability available`, `Specialist workflow planned`, and `Future industry edition`. Do not claim public release status, compliance coverage, prescription processing, room booking, table management, project accounting, or other specialist workflows unless they are actually supported and verified.

## Tooling Notes

- `npm run verify` runs lint, the production build, and browser-based
  accessibility and smoke tests.
- Audit findings must be reviewed in both full and production-only scopes.
  Remaining advisories are documented in milestone validation rather than
  suppressed with dependency overrides or forced framework changes.
- Tailwind scans only `src/pages` and `src/components`, keeping generated files
  and browser-test artifacts outside its source boundary.

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

## Documentation Content Policy

Public documentation distinguishes implemented capability, product foundations, planned work, and release-time requirements. It must not publish secrets, credentials, signing material, private filesystem paths, invented customers, certifications, uptime guarantees, release dates, screenshots, or unsupported product behavior.

Documentation search in V1 filters the guide cards by title, category, and description in the browser. Full article-content search and a documentation CMS are planned, not implemented.

## Known Dependency Security Exceptions

The current stable dependency baseline uses `next@16.2.12`. Its production
dependency tree currently contains the following high-severity advisories:

- `next@16.2.12 -> sharp@0.34.5`
  - Advisory: `GHSA-f88m-g3jw-g9cj`
  - Related CVEs: `CVE-2026-33327`, `CVE-2026-33328`,
    `CVE-2026-35590`, and `CVE-2026-35591`
  - Exploitation requires Sharp to decode attacker-controlled GIF, TIFF, or
    VIPS image input. This website currently processes only repository-owned
    image assets and provides no public image-upload, remote-image proxy, or
    attacker-controlled image-processing endpoint.

- `next@16.2.12 -> postcss@8.4.31`
  - Advisories:
    - `GHSA-qx2v-qp2m-jg93`
    - `GHSA-6g55-p6wh-862q`
    - `GHSA-r28c-9q8g-f849`
  - The website does not accept or compile attacker-controlled CSS or source
    maps at runtime.

`npm audit fix --force` is intentionally prohibited because npm currently
suggests downgrading Next.js to `9.3.3`, which is incompatible with this
Next.js 16 and React 19 application. Dependency overrides and preview framework
releases are also not accepted as production remediations without upstream
compatibility support.

These findings are accepted temporarily as documented residual risk. Run
`npm audit` and `npm audit --omit=dev` after each stable Next.js dependency
refresh and remove this exception when stable Next.js adopts patched Sharp and
PostCSS versions.
