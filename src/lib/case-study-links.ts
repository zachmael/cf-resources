/**
 * Maps page content to relevant case studies via keyword matching.
 */

export interface CaseStudyLink {
  slug: string;
  title: string;
  summary: string;
}

const CASE_STUDIES: (CaseStudyLink & { keywords: string[] })[] = [
  {
    slug: 'fortune-500-csrd-compliance',
    title: 'Fortune 500 Manufacturer Prepares for CSRD Compliance',
    summary: 'How a global manufacturer built CSRD-ready reporting across 14 countries in under 18 months.',
    keywords: ['csrd', 'esrs', 'double materiality', 'eu reporting', 'corporate sustainability reporting', 'european sustainability'],
  },
  {
    slug: 'food-company-scope-3-reduction',
    title: 'National Food Distributor Tackles Scope 3 Emissions',
    summary: 'A food distributor mapped and reduced Scope 3 emissions across 1,200+ suppliers.',
    keywords: ['scope 3', 'scope three', 'supply chain emissions', 'supplier engagement', 'value chain', 'food', 'ghg protocol'],
  },
  {
    slug: 'coastal-city-climate-resilience-plan',
    title: 'Mid-Atlantic City Develops Climate Resilience Plan',
    summary: 'A coastal city built a comprehensive resilience strategy protecting 28,000 residents.',
    keywords: ['climate risk', 'resilience', 'sea level', 'storm surge', 'physical risk', 'adaptation', 'flood'],
  },
  {
    slug: 'energy-utility-net-zero-transition',
    title: 'Regional Utility Plans Net-Zero Transition',
    summary: 'A mid-size utility developed a credible net-zero pathway balancing reliability and affordability.',
    keywords: ['net zero', 'net-zero', 'decarbonization', 'energy transition', 'carbon neutral', 'renewable energy'],
  },
  {
    slug: 'agricultural-cooperative-biodiversity',
    title: 'Farming Cooperative Integrates Biodiversity Strategy',
    summary: 'A 450-member cooperative developed a biodiversity program that increased yields 12%.',
    keywords: ['biodiversity', 'tnfd', 'nature', 'soil health', 'ecosystem', 'natural capital', 'agriculture'],
  },
  {
    slug: 'tech-company-science-based-targets',
    title: 'SaaS Company Sets Science-Based Targets',
    summary: 'A mid-market SaaS company reduced absolute emissions 30% while growing revenue 45%.',
    keywords: ['sbti', 'science-based target', 'science based target', 'emissions reduction target', 'saas', 'technology'],
  },
  {
    slug: 'financial-services-tcfd-reporting',
    title: 'Regional Bank Implements TCFD Reporting',
    summary: 'A $28B-asset bank implemented TCFD-aligned climate risk disclosure.',
    keywords: ['tcfd', 'climate disclosure', 'financial risk', 'bank', 'portfolio risk', 'scenario analysis'],
  },
  {
    slug: 'real-estate-portfolio-esg-integration',
    title: 'Commercial REIT Integrates ESG Across $8B Portfolio',
    summary: 'A REIT integrated ESG into investment decisions, achieving GRESB 5-star status.',
    keywords: ['esg', 'gresb', 'real estate', 'reit', 'green building', 'property'],
  },
  {
    slug: 'manufacturing-circular-economy',
    title: 'Auto Parts Manufacturer Adopts Circular Economy Model',
    summary: 'An auto parts manufacturer achieved 78% waste diversion through circular economy principles.',
    keywords: ['circular economy', 'waste', 'remanufactur', 'recycl', 'zero waste'],
  },
  {
    slug: 'healthcare-system-climate-risk-assessment',
    title: 'Hospital Network Conducts Climate Risk Assessment',
    summary: 'A 12-hospital system assessed climate risks, informing $180M in resilience investments.',
    keywords: ['healthcare', 'hospital', 'climate risk assessment', 'health system'],
  },
  {
    slug: 'university-carbon-neutrality-roadmap',
    title: 'Research University Charts Carbon Neutrality Roadmap',
    summary: 'A major university developed a carbon neutrality roadmap targeting 2035.',
    keywords: ['carbon neutral', 'university', 'higher education', 'campus', 'roadmap'],
  },
  {
    slug: 'hotel-chain-water-stewardship',
    title: 'Hospitality Group Implements Water Stewardship Program',
    summary: 'A 45-property hotel group reduced water consumption 35% in water-stressed regions.',
    keywords: ['water', 'stewardship', 'hospitality', 'hotel', 'water stress'],
  },
  {
    slug: 'transportation-agency-electrification',
    title: 'State DOT Develops Fleet Electrification Strategy',
    summary: 'A state DOT developed a phased electrification plan to cut fleet emissions 65% by 2035.',
    keywords: ['electrification', 'fleet', 'transportation', 'ev', 'electric vehicle'],
  },
  {
    slug: 'defense-contractor-environmental-compliance',
    title: 'Defense Contractor Overhauls Environmental Compliance',
    summary: 'A defense contractor reduced compliance violations 90% with ISO 14001 alignment.',
    keywords: ['compliance', 'iso 14001', 'environmental management', 'defense', 'ems'],
  },
  {
    slug: 'nonprofit-coalition-stakeholder-engagement',
    title: 'Multi-Stakeholder Coalition Builds Regional Climate Compact',
    summary: '35 organizations formed a climate compact unlocking $280M in coordinated investment.',
    keywords: ['stakeholder', 'coalition', 'engagement', 'collaboration', 'compact'],
  },
  {
    slug: 'port-authority-sustainability-savings',
    title: 'Port Authority Achieves $125M in Sustainability-Driven Savings',
    summary: 'A port authority generated $125M in savings through sustainability integration.',
    keywords: ['port', 'infrastructure', 'government savings', 'operational efficiency'],
  },
  {
    slug: 'foundation-ocean-conservation-strategy',
    title: 'Environmental Foundation Launches Ocean Conservation Strategy',
    summary: 'A foundation restructured its $200M ocean conservation portfolio for measurable impact.',
    keywords: ['ocean', 'conservation', 'marine', 'foundation', 'blue carbon', 'coral'],
  },
  {
    slug: 'documentary-film-impact-campaign',
    title: 'Documentary Film Drives Environmental Policy Through Impact Campaign',
    summary: 'A documentary on ocean plastic influenced legislation in 3 states and reached 28M viewers.',
    keywords: ['documentary', 'film', 'impact campaign', 'media', 'advocacy', 'plastic'],
  },
  {
    slug: 'island-nation-climate-adaptation',
    title: 'Small Island Developing State Creates Climate Adaptation Plan',
    summary: 'A Caribbean island nation developed an integrated climate adaptation plan.',
    keywords: ['island', 'sids', 'adaptation', 'caribbean', 'developing'],
  },
  {
    slug: 'municipal-resilience-authority-launch',
    title: 'County Government Launches Municipal Resilience Authority',
    summary: 'A coastal county created a resilience authority securing $340M in infrastructure funding.',
    keywords: ['municipal', 'resilience authority', 'county', 'government', 'infrastructure funding'],
  },
];

export function getRelevantCaseStudies(
  section: string,
  slug: string,
  title: string,
  description?: string,
): CaseStudyLink[] {
  const text = `${section} ${slug} ${title} ${description || ''}`.toLowerCase();

  const scored = CASE_STUDIES.map((cs) => {
    let score = 0;
    for (const kw of cs.keywords) {
      if (text.includes(kw)) score++;
    }
    return { ...cs, score };
  })
    .filter((cs) => cs.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);

  return scored.map(({ slug, title, summary }) => ({ slug, title, summary }));
}
