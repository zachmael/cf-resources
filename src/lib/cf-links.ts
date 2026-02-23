/**
 * Council Fire internal link mapping for cross-site SEO clustering.
 * Maps glossary categories and keywords to relevant CF main site pages.
 */

export interface CFLink {
  title: string;
  url: string;
  description: string;
}

// Service pages by topic area
export const cfServicePages: Record<string, CFLink[]> = {
  'Climate Resilience': [
    { title: 'Climate Resilience Services', url: 'https://www.councilfire.org/climate-resilience', description: 'Council Fire\'s climate resilience consulting practice' },
    { title: 'Resilient Communities', url: 'https://www.councilfire.org/resilient-communities', description: 'Building resilient communities through strategic planning' },
    { title: 'Sustainable Communities', url: 'https://www.councilfire.org/sustainable-communities', description: 'Creating thriving, sustainable communities' },
  ],
  'ESG Reporting': [
    { title: 'Sustainable Business', url: 'https://www.councilfire.org/sustainable-business', description: 'ESG strategy and sustainability consulting for businesses' },
    { title: 'Our Expertise', url: 'https://www.councilfire.org/expertise', description: 'Council Fire\'s full range of sustainability expertise' },
  ],
  'Carbon & Energy': [
    { title: 'Energy & Water Infrastructure', url: 'https://www.councilfire.org/energy-and-water-infrastructure', description: 'Energy transition and infrastructure consulting' },
    { title: 'Sustainable Business', url: 'https://www.councilfire.org/sustainable-business', description: 'Decarbonization and sustainable business strategy' },
  ],
  'Supply Chain': [
    { title: 'Sustainable Business', url: 'https://www.councilfire.org/sustainable-business', description: 'Supply chain sustainability and responsible sourcing' },
    { title: 'Transportation Systems', url: 'https://www.councilfire.org/transportation-systems', description: 'Sustainable transportation and logistics' },
  ],
  'Biodiversity': [
    { title: 'Oceans & Natural Resources', url: 'https://www.councilfire.org/oceans-and-natural-resources', description: 'Marine conservation and natural resource management' },
    { title: 'Climate Resilience', url: 'https://www.councilfire.org/climate-resilience', description: 'Ecosystem-based climate adaptation' },
  ],
  'Water & Infrastructure': [
    { title: 'Energy & Water Infrastructure', url: 'https://www.councilfire.org/energy-and-water-infrastructure', description: 'Water infrastructure and resilience planning' },
    { title: 'Resilient Communities', url: 'https://www.councilfire.org/resilient-communities', description: 'Infrastructure resilience for communities' },
  ],
  'Social Impact': [
    { title: 'Sustainable Communities', url: 'https://www.councilfire.org/sustainable-communities', description: 'Community engagement and social impact' },
    { title: 'About Council Fire', url: 'https://www.councilfire.org/about', description: 'Our mission and approach to sustainability' },
  ],
  'Governance': [
    { title: 'Sustainable Business', url: 'https://www.councilfire.org/sustainable-business', description: 'ESG governance and sustainable finance advisory' },
    { title: 'Our Expertise', url: 'https://www.councilfire.org/expertise', description: 'Council Fire\'s sustainability expertise areas' },
  ],
};

// Blog posts mapped to keywords/topics
export const cfBlogPosts: { keywords: string[]; title: string; url: string }[] = [
  { keywords: ['csrd', 'esrs', 'reporting', 'disclosure', 'esg reporting'], title: 'ESG Reporting Compliance: The Complete 2026 Strategic Guide', url: 'https://www.councilfire.org/blog/esg-reporting-compliance-the-complete-2026-strategic-guide' },
  { keywords: ['csrd', 'csddd', 'eu', 'reporting'], title: 'Navigating CSRD & CSDDD: New Reporting Rules for 2025', url: 'https://www.councilfire.org/blog/navigating-csrd-csddd-new-reporting-rules-for-2025' },
  { keywords: ['climate resilience', 'adaptation', 'climate risk'], title: 'Climate Resilience & Adaptation: A Strategic Framework', url: 'https://www.councilfire.org/blog/climate-resilience-adaptation-a-strategic-framework-for-organizations' },
  { keywords: ['corporate sustainability', 'sustainability strategy', 'esg'], title: 'The Complete Guide to Corporate Sustainability Strategy', url: 'https://www.councilfire.org/blog/the-complete-guide-to-corporate-sustainability-strategy' },
  { keywords: ['biodiversity', 'nature positive', 'nature'], title: 'Nature-Positive Business: Integrating Nature into Corporate Strategy', url: 'https://www.councilfire.org/blog/nature-positive-business-biodiversity-integrating-nature-into-corporate-strategy' },
  { keywords: ['biodiversity', 'nature positive', 'tnfd'], title: 'From Pledges to Performance: The 2026 Guide to Nature-Positive Transformation', url: 'https://www.councilfire.org/blog/from-pledges-to-performance-the-2026-guide-to-nature-positive-transformation' },
  { keywords: ['biodiversity', 'corporate', 'assessment'], title: 'Integrating Biodiversity into Corporate Sustainability Strategies', url: 'https://www.councilfire.org/blog/integrating-biodiversity-into-corporate-sustainability-strategies-from-assessment-to-action' },
  { keywords: ['stakeholder', 'engagement', 'materiality'], title: 'Stakeholder Engagement for Sustainability', url: 'https://www.councilfire.org/blog/stakeholder-engagement-for-sustainability-principles-practice-impact' },
  { keywords: ['social enterprise', 'community', 'policy'], title: 'How Social Enterprises Drive Policy Change in Sustainability', url: 'https://www.councilfire.org/blog/how-social-enterprises-drive-policy-change-in-sustainability-a-strategic-guide-for-corporate-partners' },
  { keywords: ['community', 'partnership', 'corporate'], title: 'Building Successful Community-Corporate Sustainability Partnerships', url: 'https://www.councilfire.org/blog/building-successful-community-corporate-sustainability-partnerships-a-strategic-framework-for-systems-level-impact' },
  { keywords: ['ai', 'energy', 'data center', 'sustainable'], title: 'Balancing AI Benefits with Energy Use', url: 'https://www.councilfire.org/blog/balancing-ai-benefits-with-energy-use-corporate-strategies-for-sustainable-growth' },
  { keywords: ['renewable', 'data center', 'nuclear', 'energy'], title: 'Powering Datacenters Sustainably', url: 'https://www.councilfire.org/blog/powering-datacenters-sustainably-renewable-agreements-and-small-modular-reactors' },
  { keywords: ['urban', 'green technology', 'infrastructure', 'city'], title: 'Emerging Green Technologies for Sustainable Urban Development', url: 'https://www.councilfire.org/blog/emerging-green-technologies-for-sustainable-urban-development-building-the-cities-of-tomorrow' },
  { keywords: ['resilience', 'funding', 'municipal', 'federal'], title: 'Navigating Federal Climate Funding in 2026', url: 'https://www.councilfire.org/blog/navigating-federal-climate-funding-in-2026-a-resilience-finance-playbook-for-municipalities' },
  { keywords: ['cso', 'sustainability leader', 'chief'], title: 'The CSO at a Crossroads: Four Paths Forward', url: 'https://www.councilfire.org/blog/the-cso-at-a-crossroads-four-paths-forward-for-sustainability-leaders-in-2026' },
  { keywords: ['sec', 'climate disclosure', 'sec climate rule'], title: 'SEC Climate Disclosure Rules', url: 'https://www.councilfire.org/definitions/sec-climate-disclosure-rules' },
  { keywords: ['regenerative', 'extraction', 'nature'], title: "Nature Doesn't Extract. It Regenerates.", url: 'https://www.councilfire.org/blog/nature-doesn%E2%80%99t-extract.-it-regenerates' },
];

// Portfolio/work examples
export const cfWorkExamples: { keywords: string[]; title: string; url: string }[] = [
  { keywords: ['port', 'infrastructure', 'maryland', 'resilience'], title: 'Maryland Port Administration', url: 'https://www.councilfire.org/work/maryland-port-administration' },
  { keywords: ['fisheries', 'ocean', 'edf', 'marine'], title: 'EDF Fisheries', url: 'https://www.councilfire.org/work/edf-fisheries' },
  { keywords: ['edf', 'international', 'ocean'], title: 'EDF International Programs', url: 'https://www.councilfire.org/work/edf-international-programs' },
  { keywords: ['energy', 'nrg', 'transition'], title: 'NRG Energy', url: 'https://www.councilfire.org/work/nrg' },
  { keywords: ['sustainable', 'seafood', 'supply chain'], title: "Luke's Lobster", url: 'https://www.councilfire.org/work/lukes-lobster' },
  { keywords: ['foundation', 'film', 'storytelling'], title: 'Walton Family Foundation', url: 'https://www.councilfire.org/work/walton-family-foundation' },
  { keywords: ['clean energy', 'maryland', 'renewable'], title: 'Maryland Clean Energy Center', url: 'https://www.councilfire.org/work/maryland-clean-energy-center' },
  { keywords: ['watershed', 'community', 'engagement'], title: 'CWRP Watershed Engagement', url: 'https://www.councilfire.org/work/cwrp-watershed-engagement' },
];

/**
 * Get relevant CF links for a glossary term based on its category and title.
 */
export function getRelevantCFLinks(title: string, category: string): { services: CFLink[]; blogs: typeof cfBlogPosts; work: typeof cfWorkExamples } {
  const titleLower = title.toLowerCase();
  const services = cfServicePages[category] || cfServicePages['ESG Reporting'] || [];

  const blogs = cfBlogPosts.filter(post =>
    post.keywords.some(kw => titleLower.includes(kw) || kw.includes(titleLower.split(' ')[0]?.toLowerCase() || ''))
  ).slice(0, 3);

  const work = cfWorkExamples.filter(w =>
    w.keywords.some(kw => titleLower.includes(kw) || kw.includes(titleLower.split(' ')[0]?.toLowerCase() || ''))
  ).slice(0, 2);

  return { services, blogs, work };
}
