/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://resources.councilfire.org',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Set priority by content type
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/guides/') || path.startsWith('/how-to/')) {
      priority = 0.8;
    } else if (path.startsWith('/regulations/')) {
      priority = 0.8;
    } else if (path.startsWith('/glossary/')) {
      priority = 0.6;
    } else if (path.startsWith('/compare/')) {
      priority = 0.7;
    } else if (path.startsWith('/locations/')) {
      priority = 0.6;
    } else if (path.startsWith('/industries/')) {
      priority = 0.7;
    } else if (path.startsWith('/for/')) {
      priority = 0.6;
    }

    // Index pages
    if (['/glossary', '/guides', '/how-to', '/regulations', '/compare', '/locations', '/industries', '/for'].includes(path)) {
      priority = 0.9;
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
