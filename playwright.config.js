import { existsSync } from 'node:fs';
import { defineConfig, devices } from '@playwright/test';

const windowsChromeCandidates = [
  process.env.PLAYWRIGHT_CHROME_PATH,
  process.env.PROGRAMFILES && `${process.env.PROGRAMFILES}\\Google\\Chrome\\Application\\chrome.exe`,
  process.env['PROGRAMFILES(X86)'] && `${process.env['PROGRAMFILES(X86)']}\\Google\\Chrome\\Application\\chrome.exe`,
  process.env.LOCALAPPDATA && `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
].filter(Boolean);

const useSystemChrome =
  process.platform === 'win32' &&
  process.env.PLAYWRIGHT_USE_SYSTEM_CHROME !== 'false';
const systemChromePath = useSystemChrome
  ? windowsChromeCandidates.find((candidate) => existsSync(candidate))
  : undefined;

if (process.env.PLAYWRIGHT_CHROME_PATH && !systemChromePath) {
  throw new Error(
    `PLAYWRIGHT_CHROME_PATH does not point to an installed browser: ${process.env.PLAYWRIGHT_CHROME_PATH}`,
  );
}

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [['html', { open: 'never' }], ['github']] : 'list',
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    ...devices['Desktop Chrome'],
    launchOptions: systemChromePath
      ? {
          executablePath: systemChromePath,
          args: ['--disable-background-mode'],
        }
      : undefined,
  },
});
