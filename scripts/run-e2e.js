import { spawn } from 'node:child_process';

const baseURL = process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:3000';
const startsLocalServer = !process.env.PLAYWRIGHT_BASE_URL;
let server;

function run(command, args, options = {}) {
  return spawn(command, args, {
    stdio: 'inherit',
    shell: false,
    ...options,
  });
}

async function waitForServer(url, child, timeoutMs = 120_000) {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    if (child.exitCode !== null) {
      throw new Error(`The test server exited with code ${child.exitCode}.`);
    }

    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // The production server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`The test server did not become ready at ${url}.`);
}

async function stopServer(child) {
  if (!child || child.exitCode !== null) return;

  child.kill();
  await Promise.race([
    new Promise((resolve) => child.once('exit', resolve)),
    new Promise((resolve) => setTimeout(resolve, 5_000)),
  ]);
}

try {
  if (startsLocalServer) {
    server = run(
      process.execPath,
      ['node_modules/next/dist/bin/next', 'start', '-H', '127.0.0.1'],
      { stdio: ['ignore', 'inherit', 'inherit'] },
    );
    await waitForServer(baseURL, server);
  }

  const playwright = run(
    process.execPath,
    ['node_modules/@playwright/test/cli.js', 'test', ...process.argv.slice(2)],
    {
      env: {
        ...process.env,
        PLAYWRIGHT_BASE_URL: baseURL,
      },
    },
  );
  const exitCode = await new Promise((resolve) =>
    playwright.once('exit', (code) => resolve(code ?? 1)),
  );

  process.exitCode = exitCode;
} finally {
  // This is the exact child started above after it proved it was serving the
  // test URL; no unrelated Node, npm, terminal, or Codex process is touched.
  await stopServer(server);
}
