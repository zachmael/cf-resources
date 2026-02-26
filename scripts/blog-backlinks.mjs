/**
 * Generate suggested backlinks FROM the CF blog TO resource pages.
 * Outputs a markdown file for manual reference.
 *
 * Usage: node scripts/blog-backlinks.mjs
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');
const sections = ['glossary', 'compare', 'guides', 'industries', 'locations', 'for'];
const BASE = 'https://resources.councilfire.org';

// Collect all resource pages with keywords
const pages = [];
for (const section of sections) {
  const dir = path.join(contentDir, section);
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.mdx'))) {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data } = matter(raw);
    const slug = file.replace('.mdx', '');
    const title = data.title || slug;
    // Extract keywords from title
    const keywords = title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 3 && !['what', 'your', 'from', 'with', 'that', 'this', 'have', 'been', 'they', 'more', 'differences', 'explained', 'sustainability', 'climate', 'resilience'].includes(w));
    pages.push({ title, slug, section, url: `${BASE}/${section}/${slug}`, keywords });
  }
}

// Blog posts from cf-links.ts (hardcoded here for simplicity)
const blogPosts = [
  { title: 'ESG Reporting Compliance: The Complete 2026 Strategic Guide', url: 'https://www.councilfire.org/blog/esg-reporting-compliance-the-complete-2026-strategic-guide', keywords: ['csrd', 'esrs', 'reporting', 'disclosure', 'esg'] },
  { title: 'Navigating CSRD & CSDDD: New Reporting Rules for 2025', url: 'https://www.councilfire.org/blog/navigating-csrd-csddd-new-reporting-rules-for-2025', keywords: ['csrd', 'csddd', 'reporting'] },
  { title: 'Climate Resilience & Adaptation: A Strategic Framework', url: 'https://www.councilfire.org/blog/climate-resilience-adaptation-a-strategic-framework-for-organizations', keywords: ['adaptation', 'risk', 'resilience'] },
  { title: 'The Complete Guide to Corporate Sustainability Strategy', url: 'https://www.councilfire.org/blog/the-complete-guide-to-corporate-sustainability-strategy', keywords: ['corporate', 'strategy', 'esg'] },
  { title: 'Nature-Positive Business: Integrating Nature into Corporate Strategy', url: 'https://www.councilfire.org/blog/nature-positive-business-biodiversity-integrating-nature-into-corporate-strategy', keywords: ['biodiversity', 'nature', 'tnfd'] },
  { title: 'From Pledges to Performance: The 2026 Guide to Nature-Positive Transformation', url: 'https://www.councilfire.org/blog/from-pledges-to-performance-the-2026-guide-to-nature-positive-transformation', keywords: ['biodiversity', 'nature', 'tnfd'] },
  { title: 'Stakeholder Engagement for Sustainability', url: 'https://www.councilfire.org/blog/stakeholder-engagement-for-sustainability-principles-practice-impact', keywords: ['stakeholder', 'engagement', 'materiality'] },
  { title: 'Balancing AI Benefits with Energy Use', url: 'https://www.councilfire.org/blog/balancing-ai-benefits-with-energy-use-corporate-strategies-for-sustainable-growth', keywords: ['energy', 'data', 'center'] },
  { title: 'Emerging Green Technologies for Sustainable Urban Development', url: 'https://www.councilfire.org/blog/emerging-green-technologies-for-sustainable-urban-development-building-the-cities-of-tomorrow', keywords: ['urban', 'green', 'infrastructure', 'city'] },
  { title: 'Navigating Federal Climate Funding in 2026', url: 'https://www.councilfire.org/blog/navigating-federal-climate-funding-in-2026-a-resilience-finance-playbook-for-municipalities', keywords: ['funding', 'municipal', 'federal', 'resilience'] },
  { title: 'The CSO at a Crossroads: Four Paths Forward', url: 'https://www.councilfire.org/blog/the-cso-at-a-crossroads-four-paths-forward-for-sustainability-leaders-in-2026', keywords: ['cso', 'chief', 'officer', 'leader'] },
];

// Generate backlink suggestions
const output = ['# Suggested Blog → Resource Page Backlinks\n'];
output.push('Generated: ' + new Date().toISOString().split('T')[0] + '\n');
output.push('Use this file to manually add internal links from CF blog posts to resource pages.\n');

for (const blog of blogPosts) {
  const matches = pages.filter(page => {
    return page.keywords.some(kw => blog.keywords.includes(kw)) ||
      blog.keywords.some(bk => page.title.toLowerCase().includes(bk));
  }).slice(0, 8);

  if (matches.length === 0) continue;

  output.push(`## ${blog.title}`);
  output.push(`Blog URL: ${blog.url}\n`);
  output.push('Suggested resource links to add:');
  for (const m of matches) {
    output.push(`- [${m.title}](${m.url}) (${m.section})`);
  }
  output.push('');
}

const outPath = path.join(process.cwd(), 'scripts', 'blog-backlinks-report.md');
fs.writeFileSync(outPath, output.join('\n'));
console.log(`Written to ${outPath} — ${blogPosts.length} blog posts analyzed, ${pages.length} resource pages scanned.`);
