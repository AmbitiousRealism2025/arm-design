#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

function getArg(name, fallback = null) {
  const idx = process.argv.indexOf(`--${name}`);
  if (idx === -1) return fallback;
  return process.argv[idx + 1] ?? fallback;
}

function hasArg(name) {
  return process.argv.includes(`--${name}`) || process.argv.includes(`-${name}`);
}

if (hasArg('help') || hasArg('h')) {
  console.log(`Usage: node verify.mjs --input <file-or-url> [--out verification] [--viewport 1920x1080] [--wait-ms 500] [--json]

Opens a local HTML file or URL, captures viewport and full-page screenshots, and reports browser console/page errors.

Options:
  --input       Required. HTML file path or URL.
  --out         Output directory. Default: verification.
  --viewport    Widthxheight. Default: 1920x1080.
  --wait-ms     Extra wait after page load. Default: 500.
  --json        Emit machine-readable JSON.
  --help        Show this help.`);
  process.exit(0);
}

const input = getArg('input');
const outDir = getArg('out', 'verification');
const viewportText = getArg('viewport', '1920x1080');
const waitMs = Number(getArg('wait-ms', '500'));
const asJson = hasArg('json');

function report(result, code = result.ok ? 0 : 1) {
  console.log(asJson ? JSON.stringify(result, null, 2) : result.message);
  process.exit(code);
}

if (!input) {
  report({ ok: false, message: 'Missing required --input <file-or-url>.', fix: 'Run with --help for usage.' }, 2);
}

const [width, height] = viewportText.split('x').map(Number);
if (!width || !height) {
  report({ ok: false, message: `Invalid --viewport value: ${viewportText}.`, fix: 'Use WIDTHxHEIGHT, for example 1920x1080.' }, 2);
}

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch (err) {
  report({
    ok: false,
    error: 'playwright-import-failed',
    message: err.message,
    fix: 'Run npm install, then npm run playwright:install.',
  });
}

const isUrl = /^https?:\/\//i.test(input) || /^file:\/\//i.test(input);
const target = isUrl ? input : pathToFileURL(path.resolve(input)).href;
fs.mkdirSync(outDir, { recursive: true });

const consoleErrors = [];
const consoleWarnings = [];
const pageErrors = [];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 2 });

page.on('console', msg => {
  if (msg.type() === 'error') consoleErrors.push(msg.text());
  if (msg.type() === 'warning') consoleWarnings.push(msg.text());
});
page.on('pageerror', err => pageErrors.push(err.message));

let responseStatus = null;
const viewportScreenshotPath = path.join(outDir, 'screenshot.png');
const fullScreenshotPath = path.join(outDir, 'screenshot-full.png');
let ok = true;
let message = 'verified';

try {
  const response = await page.goto(target, { waitUntil: 'networkidle', timeout: 30000 });
  responseStatus = response ? response.status() : null;
  if (waitMs > 0) await page.waitForTimeout(waitMs);
  await page.screenshot({ path: viewportScreenshotPath, fullPage: false });
  await page.screenshot({ path: fullScreenshotPath, fullPage: true });
} catch (err) {
  ok = false;
  message = err.message;
} finally {
  await browser.close();
}

if (consoleErrors.length || pageErrors.length) ok = false;

const result = {
  ok,
  input,
  target,
  viewport: { width, height },
  responseStatus,
  screenshots: {
    viewport: fs.existsSync(viewportScreenshotPath) ? viewportScreenshotPath : null,
    fullPage: fs.existsSync(fullScreenshotPath) ? fullScreenshotPath : null,
  },
  consoleErrors,
  consoleWarnings,
  pageErrors,
  message,
};

if (asJson) {
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log(`Verification ${ok ? 'passed' : 'had issues'} for ${input}`);
  if (result.screenshots.viewport) console.log(`screenshot: ${result.screenshots.viewport}`);
  if (result.screenshots.fullPage) console.log(`full-page screenshot: ${result.screenshots.fullPage}`);
  if (consoleErrors.length) console.log(`console errors: ${consoleErrors.length}`);
  if (consoleWarnings.length) console.log(`console warnings: ${consoleWarnings.length}`);
  if (pageErrors.length) console.log(`page errors: ${pageErrors.length}`);
  if (!ok && message) console.log(`message: ${message}`);
}

process.exit(ok ? 0 : 1);
