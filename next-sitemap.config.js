const fs = require('fs');
const path = require('path');

/**
 * Build a map of URL path → lastUpdated date from content frontmatter.
 */
function buildLastModMap() {
  const contentDir = path.join(__dirname, 'content');
  const map = {};

  if (!fs.existsSync(contentDir)) return map;

  const sections = fs.readdirSync(contentDir, { withFileTypes: true });
  for (const section of sections) {
    if (!section.isDirectory()) continue;
    const sectionPath = path.join(contentDir, section.name);
    const files = fs.readdirSync(sectionPath);
    for (const file of files) {
      if (!file.endsWith('.mdx') && !file.endsWith('.md')) continue;
      const slug = file.replace(/\.mdx?$/, '');
      const urlPath = `/${section.name}/${slug}`;
      try {
        const raw = fs.readFileSync(path.join(sectionPath, file), 'utf8');
        const match = raw.match(/lastUpdated:\s*["']?(\d{4}-\d{2}-\d{2})["']?/);
        if (match) {
          map[urlPath] = match[1];
        }
      } catch { /* skip */ }
    }
  }
  return map;
}

const lastModMap = buildLastModMap();

const INDEX_PAGES = ['/glossary', '/guides', '/how-to', '/regulations', '/compare', '/locations', '/industries', '/for'];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://resources.councilfire.org',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  transform: async (config, urlPath) => {
    let priority = 0.6;
    let changefreq = 'monthly';

    if (urlPath === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (INDEX_PAGES.includes(urlPath)) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (urlPath.startsWith('/locations/')) {
      priority = 0.5;
      changefreq = 'monthly';
    } else {
      // Individual content pages
      priority = 0.6;
      changefreq = 'monthly';
    }

    // Use frontmatter lastUpdated if available, otherwise a recent default
    const lastmod = lastModMap[urlPath]
      ? new Date(lastModMap[urlPath]).toISOString()
      : new Date('2026-02-23').toISOString();

    return {
      loc: urlPath,
      changefreq,
      priority,
      lastmod,
    };
  },
};
