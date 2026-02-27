export interface BlogPost {
  title: string;
  url: string;
  keywords: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: 'ESG Reporting Compliance: The Complete 2026 Strategic Guide',
    url: 'https://www.councilfire.org/blog/esg-reporting-compliance-the-complete-2026-strategic-guide',
    keywords: ['esg', 'reporting', 'compliance', 'disclosure', 'assurance', 'materiality', 'sustainability reporting'],
  },
  {
    title: 'Navigating CSRD & CSDDD: New Reporting Rules for 2025',
    url: 'https://www.councilfire.org/blog/navigating-csrd-csddd-new-reporting-rules-for-2025',
    keywords: ['csrd', 'csddd', 'eu', 'european', 'directive', 'due diligence', 'esrs', 'double materiality'],
  },
  {
    title: 'Climate Resilience & Adaptation: A Strategic Framework',
    url: 'https://www.councilfire.org/blog/climate-resilience-adaptation-a-strategic-framework-for-organizations',
    keywords: ['climate', 'resilience', 'adaptation', 'risk', 'tcfd', 'physical risk', 'transition risk'],
  },
  {
    title: 'The Complete Guide to Corporate Sustainability Strategy',
    url: 'https://www.councilfire.org/blog/the-complete-guide-to-corporate-sustainability-strategy',
    keywords: ['sustainability', 'strategy', 'corporate', 'sdg', 'stakeholder', 'net zero', 'decarbonization'],
  },
  {
    title: 'Nature-Positive Business: Integrating Nature into Corporate Strategy',
    url: 'https://www.councilfire.org/blog/nature-positive-business-biodiversity-integrating-nature-into-corporate-strategy',
    keywords: ['biodiversity', 'nature', 'tnfd', 'ecosystem', 'deforestation', 'natural capital', 'nature-positive'],
  },
  {
    title: 'Corporate Water Stewardship: Strategy, Risks & Opportunities',
    url: 'https://www.councilfire.org/blog/corporate-water-stewardship-strategy-risks-and-opportunities',
    keywords: ['water', 'stewardship', 'water stress', 'aquifer', 'water risk', 'desalination', 'water scarcity'],
  },
  {
    title: 'ISO 14092: Climate Adaptation Planning for Local Governments',
    url: 'https://www.councilfire.org/blog/iso-14092-climate-adaptation-planning-for-local-governments',
    keywords: ['iso', 'adaptation', 'local government', 'municipality', 'climate action plan', 'community resilience'],
  },
  {
    title: 'Paris Agreement Article 6: Carbon Market Rules 2025',
    url: 'https://www.councilfire.org/blog/paris-agreement-article-6-carbon-market-rules-2025',
    keywords: ['paris agreement', 'carbon market', 'carbon credit', 'offset', 'article 6', 'ndcs', 'emissions trading'],
  },
  {
    title: 'ESG Recalibration 2026: Beyond Compliance',
    url: 'https://www.councilfire.org/blog/esg-recalibration-2026-beyond-compliance',
    keywords: ['esg', 'recalibration', 'governance', 'investor', 'anti-esg', 'greenwashing', 'regulation'],
  },
  {
    title: 'Grid Derating: How Climate Change Is Reshaping Energy Infrastructure',
    url: 'https://www.councilfire.org/blog/grid-derating-how-climate-change-is-reshaping-energy-infrastructure',
    keywords: ['energy', 'grid', 'infrastructure', 'renewable', 'electricity', 'power', 'climate impact', 'derating'],
  },
  {
    title: 'Community Resilience & Federal Funding',
    url: 'https://www.councilfire.org/blog/community-resilience-federal-funding',
    keywords: ['community', 'resilience', 'federal', 'funding', 'grant', 'fema', 'disaster', 'municipal'],
  },
];

export function getRelatedBlogPosts(
  title: string,
  description: string,
  section: string,
  maxResults = 3
): BlogPost[] {
  const text = `${title} ${description} ${section}`.toLowerCase();

  const scored = blogPosts.map((post) => {
    let score = 0;
    for (const kw of post.keywords) {
      if (text.includes(kw)) score += kw.includes(' ') ? 3 : 1;
    }
    return { post, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map((s) => s.post);
}
