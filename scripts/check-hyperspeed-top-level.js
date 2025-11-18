#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const ignoreDirs = new Set(['node_modules', '.next', 'public', '.git']);
const allowedRels = new Set([
  'components/Hyperspeed.impl.js',
  'components/Hyperspeed.js',
  'scripts/check-hyperspeed-top-level.js'
]);

const patterns = [
  { re: /from\s+['"]three['"]/g, name: 'import three' },
  { re: /require\(['"]three['"]\)/g, name: 'require three' },
  { re: /from\s+['"]postprocessing['"]/g, name: 'import postprocessing' },
  { re: /require\(['"]postprocessing['"]\)/g, name: 'require postprocessing' },
  { re: /Hyperspeed\.impl/g, name: 'Hyperspeed.impl mention' }
];

const matches = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (ignoreDirs.has(e.name)) continue;
    if (e.isDirectory()) {
      walk(full);
      continue;
    }

    if (!/\.js$|\.jsx$|\.ts$|\.tsx$/.test(e.name)) continue;

    const rel = path.relative(repoRoot, full).replace(/\\/g, '/');
    const content = fs.readFileSync(full, 'utf8');

    for (const p of patterns) {
      if (p.re.test(content)) {
        // allow patterns inside any impl file or explicitly whitelisted files
        if (rel.endsWith('.impl.js') || allowedRels.has(rel)) continue;
        matches.push({ file: rel, reason: p.name });
      }
    }
  }
}

walk(repoRoot);

if (matches.length) {
  console.error('\nFound prohibited top-level imports/mentions outside components/Hyperspeed.impl.js:');
  for (const m of matches) console.error(` - ${m.file}: ${m.reason}`);
  console.error('\nPlease move heavy imports (three, postprocessing) into components/Hyperspeed.impl.js and dynamic-import them from the wrapper.');
  process.exit(1);
}

console.log('OK: no top-level three/postprocessing/Hyperspeed.impl occurrences found outside components/Hyperspeed.impl.js');
process.exit(0);
