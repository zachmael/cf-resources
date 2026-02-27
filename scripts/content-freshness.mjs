#!/usr/bin/env node
/**
 * Content Freshness Report
 * Scans MDX files for lastUpdated frontmatter and flags stale content.
 * Usage: node scripts/content-freshness.mjs
 */

import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

const CONTENT_DIR = new URL('../content', import.meta.url).pathname;
const SIX_MONTHS = 6 * 30 * 24 * 60 * 60 * 1000;
const TWELVE_MONTHS = 12 * 30 * 24 * 60 * 60 * 1000;
const NOW = Date.now();

async function scanDir(dir) {
  const results = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...await scanDir(full));
    } else if (entry.name.endsWith('.mdx')) {
      const content = await readFile(full, 'utf-8');
      const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
      if (!fmMatch) continue;
      const fm = fmMatch[1];
      const titleMatch = fm.match(/^title:\s*"?(.+?)"?\s*$/m);
      const dateMatch = fm.match(/^lastUpdated:\s*"?(\d{4}-\d{2}-\d{2})"?\s*$/m);
      const title = titleMatch?.[1] || entry.name;
      const lastUpdated = dateMatch?.[1] || null;
      const section = full.replace(CONTENT_DIR + '/', '').split('/')[0];
      results.push({ title, lastUpdated, section, path: full.replace(CONTENT_DIR + '/', '') });
    }
  }
  return results;
}

const pages = await scanDir(CONTENT_DIR);
const stale = [];
const needsReview = [];
const noDate = [];
const fresh = [];

for (const p of pages) {
  if (!p.lastUpdated) { noDate.push(p); continue; }
  const age = NOW - new Date(p.lastUpdated).getTime();
  if (age > TWELVE_MONTHS) stale.push(p);
  else if (age > SIX_MONTHS) needsReview.push(p);
  else fresh.push(p);
}

console.log('# Content Freshness Report');
console.log(`\n**Generated:** ${new Date().toISOString().split('T')[0]}`);
console.log(`**Total pages:** ${pages.length} | Fresh: ${fresh.length} | Needs review: ${needsReview.length} | Stale: ${stale.length} | No date: ${noDate.length}\n`);

if (stale.length) {
  console.log('## 🔴 Stale (>12 months)');
  for (const p of stale) console.log(`- **${p.title}** (${p.section}) — last updated ${p.lastUpdated}`);
  console.log();
}
if (needsReview.length) {
  console.log('## 🟡 Needs Review (>6 months)');
  for (const p of needsReview) console.log(`- **${p.title}** (${p.section}) — last updated ${p.lastUpdated}`);
  console.log();
}
if (noDate.length) {
  console.log('## ⚪ No lastUpdated field');
  for (const p of noDate) console.log(`- ${p.title} (${p.section})`);
  console.log();
}
console.log(`## ✅ Fresh: ${fresh.length} pages up to date`);
