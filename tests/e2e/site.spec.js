import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.setTimeout(60_000);

const publicRoutes = [
  ['home', '/', /Engineering the future of African businesses/i],
  ['about', '/about', /Building Technology for the Future of Business/i],
  ['contact', '/contact', /Build Something Extraordinary Together/i],
  ['portfolio', '/portfolio', /Engineering that works where business happens/i],
  ['portfolio case study', '/portfolio/secondary-school-cbt-deployment', /Secondary School CBT Deployment/i],
  ['CBOS', '/products/cbos', /Carthage Business Operating System/i],
  ['solutions', '/solutions', /CBOS journeys for real business sectors/i],
  ['engineering', '/engineering', /Infrastructure engineered around the business/i],
  ['documentation', '/docs', /Documentation Center/i],
  ['pricing', '/pricing', /Choose a CBOS path/i],
  ['licensing', '/licensing', /Licensing designed for dependable local business operations/i],
  ['privacy', '/privacy', /Privacy Policy/i],
  ['terms', '/terms', /Terms of Use/i],
];

const seoRoutes = [
  '/',
  '/about',
  '/contact',
  '/portfolio',
  '/portfolio/secondary-school-cbt-deployment',
  '/portfolio/enterprise-cctv-installation',
  '/portfolio/office-network-infrastructure',
  '/portfolio/retail-technology-deployment',
  '/products/cbos',
  '/solutions',
  '/solutions/retail',
  '/solutions/wholesale-distribution',
  '/solutions/pharmacy',
  '/solutions/hospitality',
  '/solutions/professional-services',
  '/solutions/multi-branch',
  '/engineering',
  '/engineering/solar',
  '/engineering/networking',
  '/engineering/security',
  '/engineering/automation',
  '/engineering/electrical',
  '/engineering/consulting',
  '/docs',
  '/docs/cbos',
  '/docs/getting-started',
  '/docs/installation',
  '/docs/user-guide',
  '/docs/administration',
  '/docs/backup-recovery',
  '/docs/licensing',
  '/docs/api',
  '/docs/releases',
  '/docs/troubleshooting',
  '/docs/engineering',
  '/pricing',
  '/pricing/cbos',
  '/licensing',
  '/privacy',
  '/terms',
];

const viewports = [
  ['mobile', 375, 812],
  ['tablet', 768, 1024],
  ['desktop', 1440, 900],
];

function collectRuntimeErrors(page) {
  const errors = [];
  page.on('pageerror', (error) => errors.push(`pageerror: ${error.message}`));
  page.on('console', (message) => {
    if (message.type() === 'error') {
      const { url } = message.location();
      errors.push(`console: ${message.text()}${url ? ` (${url})` : ''}`);
    }
  });
  return errors;
}

async function expectNotClipped(locator, viewportWidth) {
  await locator.scrollIntoViewIfNeeded();
  await expect(locator).toBeVisible();

  const dimensions = await locator.evaluate((element) => {
    const rect = element.getBoundingClientRect();
    return {
      left: rect.left,
      right: rect.right,
      width: rect.width,
      height: rect.height,
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
      clippedByAncestor: (() => {
        let ancestor = element.parentElement;
        while (ancestor) {
          const style = getComputedStyle(ancestor);
          if (
            [style.overflow, style.overflowX, style.overflowY].some((value) =>
              ['hidden', 'clip'].includes(value),
            )
          ) {
            const ancestorRect = ancestor.getBoundingClientRect();
            if (
              rect.left < ancestorRect.left - 1 ||
              rect.right > ancestorRect.right + 1 ||
              rect.top < ancestorRect.top - 1 ||
              rect.bottom > ancestorRect.bottom + 1
            ) {
              return true;
            }
          }
          ancestor = ancestor.parentElement;
        }
        return false;
      })(),
    };
  });

  expect(dimensions.width).toBeGreaterThan(0);
  expect(dimensions.height).toBeGreaterThan(0);
  expect(dimensions.left).toBeGreaterThanOrEqual(-1);
  expect(dimensions.right).toBeLessThanOrEqual(viewportWidth + 1);
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
  expect(dimensions.clippedByAncestor).toBe(false);
}

for (const [viewportName, width, height] of viewports) {
  for (const [routeName, path, headingName] of publicRoutes) {
    test(`${routeName} passes ${width}px ${viewportName} layout and semantics checks`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height });
      const runtimeErrors = collectRuntimeErrors(page);
      const response = await page.goto(path);

      expect(response?.ok()).toBe(true);
      await expect(page.locator('main')).toBeVisible();

      const headings = page.locator('h1:visible');
      await expect(headings).toHaveCount(1);
      await expect(headings.first()).toHaveText(/\S/);
      await expect(headings.first()).toHaveAccessibleName(headingName);
      await expectNotClipped(headings.first(), width);

      const primaryAction = page.locator('main a:visible, main button:visible').first();
      await expect(primaryAction).toHaveAccessibleName(/\S/);
      await expectNotClipped(primaryAction, width);

      const layout = await page.evaluate(() => ({
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: document.documentElement.clientWidth,
        escapingImages: [...document.querySelectorAll('img')].filter((image) => {
          const imageRect = image.getBoundingClientRect();
          const containerRect = image.parentElement?.getBoundingClientRect();
          return (
            containerRect &&
            (imageRect.left < containerRect.left - 1 ||
              imageRect.right > containerRect.right + 1 ||
              imageRect.top < containerRect.top - 1 ||
              imageRect.bottom > containerRect.bottom + 1)
          );
        }).length,
        unnamedControls: [...document.querySelectorAll('a, button, input, select, textarea')]
          .filter((element) => {
            const style = getComputedStyle(element);
            if (style.display === 'none' || style.visibility === 'hidden') return false;
            const labelledBy = element.getAttribute('aria-labelledby');
            const labelledByText = labelledBy
              ? labelledBy
                  .split(/\s+/)
                  .map((id) => document.getElementById(id)?.textContent || '')
                  .join(' ')
              : '';
            const explicitLabel = element.id
              ? document.querySelector(`label[for="${CSS.escape(element.id)}"]`)?.textContent
              : '';
            return !(
              element.getAttribute('aria-label')?.trim() ||
              labelledByText.trim() ||
              explicitLabel?.trim() ||
              element.textContent?.trim() ||
              element.getAttribute('title')?.trim() ||
              element.getAttribute('placeholder')?.trim() ||
              (element instanceof HTMLInputElement && element.value.trim())
            );
          })
          .map((element) => element.outerHTML),
        invalidImageAlt: [...document.querySelectorAll('img')]
          .filter((image) => !image.hasAttribute('alt'))
          .map((image) => image.outerHTML),
      }));

      expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth);
      expect(layout.escapingImages).toBe(0);
      expect(layout.unnamedControls).toEqual([]);
      expect(layout.invalidImageAlt).toEqual([]);
      expect(runtimeErrors).toEqual([]);
    });
  }
}

for (const [name, path] of publicRoutes) {
  test(`${name} has no serious or critical WCAG A/AA violations`, async ({ page }) => {
    await page.goto(path);

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    const blockingViolations = results.violations.filter(({ impact }) =>
      ['serious', 'critical'].includes(impact),
    );

    expect(blockingViolations).toEqual([]);
  });
}

test('every public route has complete and unique SEO metadata', async ({ page }) => {
  const titles = new Set();
  const descriptions = new Set();

  for (const path of seoRoutes) {
    const response = await page.goto(path);
    expect(response?.ok(), path).toBe(true);

    const metadata = await page.evaluate(() => ({
      title: document.title,
      descriptions: [...document.querySelectorAll('meta[name="description"]')].map(
        (element) => element.content,
      ),
      canonicals: [...document.querySelectorAll('link[rel="canonical"]')].map(
        (element) => element.href,
      ),
      ogTitles: [...document.querySelectorAll('meta[property="og:title"]')].map(
        (element) => element.content,
      ),
      ogDescriptions: [
        ...document.querySelectorAll('meta[property="og:description"]'),
      ].map((element) => element.content),
      twitterTitles: [...document.querySelectorAll('meta[name="twitter:title"]')].map(
        (element) => element.content,
      ),
      twitterDescriptions: [
        ...document.querySelectorAll('meta[name="twitter:description"]'),
      ].map((element) => element.content),
    }));

    expect(metadata.title, path).toMatch(/\S/);
    expect(metadata.descriptions, path).toHaveLength(1);
    expect(metadata.canonicals, path).toEqual([
      `https://carthagetechnologies.com${path === '/' ? '/' : path}`,
    ]);
    expect(metadata.ogTitles, path).toEqual([metadata.title]);
    expect(metadata.ogDescriptions, path).toEqual(metadata.descriptions);
    expect(metadata.twitterTitles, path).toEqual([metadata.title]);
    expect(metadata.twitterDescriptions, path).toEqual(metadata.descriptions);
    expect(titles.has(metadata.title), `duplicate title on ${path}`).toBe(false);
    expect(
      descriptions.has(metadata.descriptions[0]),
      `duplicate description on ${path}`,
    ).toBe(false);
    titles.add(metadata.title);
    descriptions.add(metadata.descriptions[0]);
  }
});

test('robots and sitemap expose the intended public crawl surface', async ({ request }) => {
  const robotsResponse = await request.get('/robots.txt');
  expect(robotsResponse.ok()).toBe(true);
  const robots = await robotsResponse.text();
  expect(robots).toContain('Allow: /');
  expect(robots).toContain('Disallow: /_next/');
  expect(robots).toContain(
    'Sitemap: https://carthagetechnologies.com/sitemap.xml',
  );

  const sitemapResponse = await request.get('/sitemap.xml');
  expect(sitemapResponse.ok()).toBe(true);
  const sitemap = await sitemapResponse.text();
  for (const path of seoRoutes) {
    expect(sitemap).toContain(
      `<loc>https://carthagetechnologies.com${path === '/' ? '/' : path}</loc>`,
    );
  }
});

test('the 404 page provides clear recovery actions and is not indexed', async ({ page }) => {
  const response = await page.goto('/this-page-does-not-exist');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    /This page could not be found/i,
  );
  await expect(page.getByRole('link', { name: 'Return home' })).toHaveAttribute(
    'href',
    '/',
  );
  await expect(
    page.getByRole('link', { name: 'Browse documentation' }),
  ).toHaveAttribute('href', '/docs');
  await expect(page.getByRole('link', { name: 'Contact our team' })).toHaveAttribute(
    'href',
    '/contact',
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    'content',
    'noindex',
  );
});

test('desktop primary navigation is visible and keyboard reachable at 1440px', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  const navigation = page.getByRole('navigation', { name: 'Primary navigation' });
  await expect(navigation).toBeVisible();
  const homeLink = navigation.getByRole('link', { name: 'Home' });

  await page.getByRole('link', { name: 'Carthage Technologies home' }).focus();
  await page.keyboard.press('Tab');
  await expect(homeLink).toBeFocused();
});

for (const width of [375, 768]) {
  test(`mobile navigation opens, closes, and is keyboard reachable at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1024 });
    await page.goto('/');

    const openButton = page.getByRole('button', { name: 'Open navigation menu' });
    await openButton.focus();
    await expect(openButton).toBeFocused();
    await page.keyboard.press('Enter');

    const mobileNavigation = page.getByRole('navigation', { name: 'Mobile navigation' });
    await expect(mobileNavigation).toBeVisible();
    await page.keyboard.press('Tab');
    await expect(mobileNavigation.getByRole('link', { name: 'Home' })).toBeFocused();

    const closeButton = page.getByRole('button', { name: 'Close navigation menu' });
    await closeButton.focus();
    await page.keyboard.press('Enter');
    await expect(mobileNavigation).toBeHidden();
    await expect(openButton).toHaveAttribute('aria-expanded', 'false');
  });
}
