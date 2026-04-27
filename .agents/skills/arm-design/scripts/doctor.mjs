#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import process from 'node:process';

const args = new Set(process.argv.slice(2));
const asJson = args.has('--json');
const showHelp = args.has('--help') || args.has('-h');

if (showHelp) {
  console.log(`Usage: node doctor.mjs [--json]

Checks local prerequisites for arm-design workflows.

Options:
  --json   Emit machine-readable JSON.
  --help   Show this help.`);
  process.exit(0);
}

function run(cmd, cmdArgs = []) {
  const result = spawnSync(cmd, cmdArgs, { encoding: 'utf8' });
  return {
    status: result.status,
    stdout: (result.stdout || '').trim(),
    stderr: (result.stderr || '').trim(),
    error: result.error ? result.error.message : null,
  };
}

function pass(name, message, extra = {}) {
  return { name, status: 'pass', message, ...extra };
}

function fail(name, message, fix, extra = {}) {
  return { name, status: 'fail', message, fix, ...extra };
}

function warn(name, message, fix, extra = {}) {
  return { name, status: 'warn', message, fix, ...extra };
}

const checks = [];

const nodeVersion = process.versions.node;
const major = Number(nodeVersion.split('.')[0]);
if (major >= 18) checks.push(pass('node-version', `Node ${nodeVersion} detected.`));
else checks.push(fail('node-version', `Node ${nodeVersion} detected. Node 18+ is recommended.`, 'Install Node 18 or newer.'));

const npm = run('npm', ['--version']);
if (npm.status === 0) checks.push(pass('npm', `npm ${npm.stdout} detected.`));
else checks.push(warn('npm', 'npm was not found.', 'Install npm or use an equivalent package manager.'));

const ffmpeg = run('ffmpeg', ['-version']);
if (ffmpeg.status === 0) checks.push(pass('ffmpeg', 'ffmpeg detected.'));
else checks.push(warn('ffmpeg', 'ffmpeg was not found. Video export will not work.', 'Install ffmpeg or skip video export.'));

const python = run('python3', ['--version']);
if (python.status === 0) checks.push(pass('python3', python.stdout || python.stderr));
else checks.push(warn('python3', 'python3 was not found.', 'Install Python 3 if legacy scripts require it.'));

try {
  await import('playwright');
  checks.push(pass('playwright-package', 'playwright package can be imported.'));
} catch (err) {
  checks.push(fail('playwright-package', 'playwright package could not be imported.', 'Run npm install, then npm run playwright:install.', { detail: err.message }));
}

const chromium = run('npx', ['playwright', 'install', '--dry-run', 'chromium']);
if (chromium.status === 0) checks.push(pass('playwright-chromium-check', 'Playwright chromium dry-run completed.'));
else checks.push(warn('playwright-chromium-check', 'Could not verify Playwright Chromium availability.', 'Run npm run playwright:install.', { detail: chromium.stderr || chromium.stdout }));

const ok = checks.every(check => check.status !== 'fail');
const result = { ok, checks };

if (asJson) {
  console.log(JSON.stringify(result, null, 2));
} else {
  for (const check of checks) {
    const label = check.status === 'pass' ? 'PASS' : check.status === 'warn' ? 'WARN' : 'FAIL';
    console.log(`${label} ${check.name}: ${check.message}`);
    if (check.fix) console.log(`  fix: ${check.fix}`);
  }
}

process.exit(ok ? 0 : 1);
