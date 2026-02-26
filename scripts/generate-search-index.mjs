/**
 * Generate search index JSON for client-side search.
 * Run before build: node scripts/generate-search-index.mjs
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');
const sections = ['glossary', 'compare', 'locations', 'guides', 'industries', 'for'];
const items = [];

for (const section of sections) {
  const dir = path.join(contentDir, section);
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.mdx'))) {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data } = matter(raw);
    items.push({
      title: data.title || file.replace('.mdx', ''),
      slug: file.replace('.mdx', ''),
      section,
      description: data.description || '',
    });
  }
}

fs.writeFileSync(
  path.join(process.cwd(), 'public', 'search-index.json'),
  JSON.stringify(items),
);

console.log(`Generated search index with ${items.length} items`);
