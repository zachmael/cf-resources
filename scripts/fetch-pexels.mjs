// Fetch Pexels images for all categories using the Pexels API
const API_KEY = 'YOUR_KEY'; // We'll try without auth first via search

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const locations = [
  ['annapolis-md', 'Annapolis Maryland harbor'],
  ['alexandria-va', 'Alexandria Virginia old town'],
  ['anchorage-ak', 'Anchorage Alaska mountains'],
  ['arlington-va', 'Arlington Virginia cemetery memorial'],
  ['atlanta-ga', 'Atlanta Georgia skyline'],
  ['austin-tx', 'Austin Texas congress bridge'],
  ['baltimore-md', 'Baltimore Maryland inner harbor'],
  ['biloxi-ms', 'Biloxi Mississippi beach'],
  ['boston-ma', 'Boston Massachusetts city'],
  ['california', 'California coast ocean'],
  ['cape-coral-fl', 'Cape Coral Florida waterfront'],
  ['charleston-sc', 'Charleston South Carolina historic'],
  ['charlotte-nc', 'Charlotte North Carolina skyline'],
  ['chesapeake-va', 'Chesapeake Bay Virginia water'],
  ['chicago-il', 'Chicago Illinois skyline'],
  ['cleveland-oh', 'Cleveland Ohio city'],
  ['columbus-oh', 'Columbus Ohio downtown'],
  ['corpus-christi-tx', 'Corpus Christi Texas coast'],
  ['dallas-tx', 'Dallas Texas skyline'],
  ['denver-co', 'Denver Colorado mountains city'],
  ['detroit-mi', 'Detroit Michigan city'],
  ['florida', 'Florida palm trees beach'],
  ['fort-lauderdale-fl', 'Fort Lauderdale Florida beach'],
  ['galveston-tx', 'Galveston Texas pier ocean'],
  ['honolulu-hi', 'Honolulu Hawaii Waikiki'],
  ['houston-tx', 'Houston Texas skyline'],
  ['indianapolis-in', 'Indianapolis Indiana monument'],
  ['jacksonville-fl', 'Jacksonville Florida bridge river'],
  ['kansas-city-mo', 'Kansas City Missouri fountain'],
  ['key-west-fl', 'Key West Florida sunset pier'],
  ['los-angeles-ca', 'Los Angeles California Hollywood'],
  ['maryland', 'Maryland countryside green'],
  ['miami-fl', 'Miami Florida beach skyline'],
  ['milwaukee-wi', 'Milwaukee Wisconsin lakefront'],
  ['minneapolis-mn', 'Minneapolis Minnesota skyline'],
  ['mobile-al', 'Mobile Alabama oak trees'],
  ['nashville-tn', 'Nashville Tennessee music city'],
  ['new-orleans-la', 'New Orleans Louisiana French Quarter'],
  ['new-york-ny', 'New York City skyline Manhattan'],
  ['new-york-state', 'New York state countryside autumn'],
  ['newport-news-va', 'Newport News Virginia shipyard'],
  ['norfolk-va', 'Norfolk Virginia waterfront naval'],
  ['pensacola-fl', 'Pensacola Florida white sand beach'],
  ['phoenix-az', 'Phoenix Arizona desert cactus'],
  ['pittsburgh-pa', 'Pittsburgh Pennsylvania bridges'],
  ['portland-or', 'Portland Oregon bridge river'],
  ['providence-ri', 'Providence Rhode Island capitol'],
  ['raleigh-nc', 'Raleigh North Carolina downtown'],
  ['richmond-va', 'Richmond Virginia river city'],
  ['sacramento-ca', 'Sacramento California capitol'],
  ['san-antonio-tx', 'San Antonio Texas riverwalk'],
  ['san-diego-ca', 'San Diego California bay'],
  ['san-francisco-ca', 'San Francisco Golden Gate Bridge'],
  ['san-juan-pr', 'San Juan Puerto Rico colorful'],
  ['savannah-ga', 'Savannah Georgia oak trees moss'],
  ['seattle-wa', 'Seattle Washington space needle'],
  ['st-louis-mo', 'St Louis Missouri arch'],
  ['tampa-fl', 'Tampa Florida bay skyline'],
  ['texas', 'Texas ranch landscape sunset'],
  ['virginia', 'Virginia Blue Ridge mountains'],
  ['virginia-beach-va', 'Virginia Beach oceanfront'],
  ['washington-dc', 'Washington DC Capitol building'],
  ['west-palm-beach-fl', 'West Palm Beach Florida waterfront'],
  ['wilmington-nc', 'Wilmington North Carolina riverwalk'],
];

// Second image per location (nature/climate themed)
const locationNature = [
  ['annapolis-md', 'sailboat harbor sunrise'],
  ['alexandria-va', 'historic brick street autumn'],
  ['anchorage-ak', 'glacier ice Alaska'],
  ['arlington-va', 'cherry blossoms spring'],
  ['atlanta-ga', 'peach trees southern garden'],
  ['austin-tx', 'Texas hill country sunset'],
  ['baltimore-md', 'lighthouse Chesapeake bay'],
  ['biloxi-ms', 'Gulf Coast sunset pier'],
  ['boston-ma', 'autumn leaves New England'],
  ['california', 'redwood forest tall trees'],
  ['cape-coral-fl', 'Florida canal palm trees'],
  ['charleston-sc', 'southern plantation oak alley'],
  ['charlotte-nc', 'dogwood flowers spring'],
  ['chesapeake-va', 'wetlands marsh birds'],
  ['chicago-il', 'Lake Michigan waves shore'],
  ['cleveland-oh', 'Lake Erie sunset'],
  ['columbus-oh', 'Ohio river valley autumn'],
  ['corpus-christi-tx', 'Gulf coast pelican beach'],
  ['dallas-tx', 'Texas wildflowers bluebonnet'],
  ['denver-co', 'Rocky Mountains snow peak'],
  ['detroit-mi', 'Great Lakes industrial sunset'],
  ['florida', 'Everglades mangrove swamp'],
  ['fort-lauderdale-fl', 'tropical ocean turquoise'],
  ['galveston-tx', 'seawall waves crashing'],
  ['honolulu-hi', 'tropical rainforest waterfall Hawaii'],
  ['houston-tx', 'bayou cypress trees'],
  ['indianapolis-in', 'midwest cornfield sunset'],
  ['jacksonville-fl', 'sand dunes sea oats'],
  ['kansas-city-mo', 'prairie grass plains'],
  ['key-west-fl', 'tropical sunset ocean keys'],
  ['los-angeles-ca', 'Pacific coast highway ocean'],
  ['maryland', 'Chesapeake bay crab dock'],
  ['miami-fl', 'tropical sunset palm silhouette'],
  ['milwaukee-wi', 'Wisconsin forest lake'],
  ['minneapolis-mn', 'frozen lake winter Minnesota'],
  ['mobile-al', 'magnolia tree flowers'],
  ['nashville-tn', 'Tennessee rolling hills green'],
  ['new-orleans-la', 'bayou swamp cypress'],
  ['new-york-ny', 'Central Park autumn trees'],
  ['new-york-state', 'Niagara Falls waterfall'],
  ['newport-news-va', 'river sunset Virginia'],
  ['norfolk-va', 'ocean waves Atlantic coast'],
  ['pensacola-fl', 'emerald coast clear water'],
  ['phoenix-az', 'saguaro cactus desert sunset'],
  ['pittsburgh-pa', 'three rivers confluence'],
  ['portland-or', 'Oregon forest moss green'],
  ['providence-ri', 'New England coast rocky shore'],
  ['raleigh-nc', 'North Carolina pine forest'],
  ['richmond-va', 'James River rapids rocks'],
  ['sacramento-ca', 'California valley vineyard'],
  ['san-antonio-tx', 'Texas river cypress'],
  ['san-diego-ca', 'Pacific ocean sunset cliffs'],
  ['san-francisco-ca', 'fog rolling hills bay'],
  ['san-juan-pr', 'Caribbean turquoise water beach'],
  ['savannah-ga', 'Spanish moss live oak'],
  ['seattle-wa', 'Pacific Northwest rain forest'],
  ['st-louis-mo', 'Mississippi River bridge sunset'],
  ['tampa-fl', 'mangrove sunset Florida coast'],
  ['texas', 'desert canyon big bend'],
  ['virginia', 'Shenandoah valley autumn'],
  ['virginia-beach-va', 'Atlantic ocean sunrise beach'],
  ['washington-dc', 'cherry blossoms tidal basin'],
  ['west-palm-beach-fl', 'tropical garden flowers'],
  ['wilmington-nc', 'Carolina coast lighthouse'],
];

const guides = [
  ['biodiversity-assessment-guide', 'biodiversity wildlife forest'],
  ['california-sb-253-guide', 'California legislature law'],
  ['california-sb-261-guide', 'climate disclosure document'],
  ['carbon-neutrality-roadmap', 'carbon neutral green energy'],
  ['cdp-disclosure-guide', 'corporate disclosure report'],
  ['climate-risk-assessment-guide', 'climate risk flood'],
  ['csrd-compliance-guide', 'European Union compliance'],
  ['double-materiality-assessment-guide', 'materiality matrix analysis'],
  ['esg-data-management-guide', 'data analytics dashboard'],
  ['eu-taxonomy-alignment-guide', 'EU taxonomy green finance'],
  ['ghg-protocol-guide', 'greenhouse gas emissions factory'],
  ['green-bond-framework-guide', 'green bond investment'],
  ['gri-standards-guide', 'sustainability reporting standard'],
  ['iso-14001-guide', 'ISO certification audit'],
  ['iso-14092-guide', 'climate adaptation planning'],
  ['issb-implementation-guide', 'international standards board'],
  ['net-zero-strategy-guide', 'net zero carbon footprint'],
  ['science-based-targets-guide', 'science target research'],
  ['scope-3-measurement-guide', 'supply chain carbon measurement'],
  ['sec-climate-rule-guide', 'SEC regulation financial'],
  ['stakeholder-engagement-guide', 'stakeholder meeting discussion'],
  ['supply-chain-due-diligence-guide', 'supply chain logistics'],
  ['sustainability-assurance-guide', 'audit assurance verification'],
  ['tcfd-reporting-guide', 'financial climate reporting'],
  ['tnfd-reporting-guide', 'nature biodiversity reporting'],
];

const industries = [
  ['agriculture', 'agriculture farm field'],
  ['construction', 'construction building crane'],
  ['energy', 'energy power wind turbine'],
  ['financial-services', 'financial services banking'],
  ['food-and-beverage', 'food beverage restaurant'],
  ['government', 'government building capitol'],
  ['healthcare', 'healthcare hospital medical'],
  ['hospitality', 'hotel hospitality resort'],
  ['manufacturing', 'manufacturing factory production'],
  ['mining', 'mining excavation earth'],
  ['real-estate', 'real estate buildings city'],
  ['retail', 'retail shopping store'],
  ['technology', 'technology computer server'],
  ['telecommunications', 'telecommunications tower antenna'],
  ['transportation', 'transportation highway logistics'],
];

const personas = [
  ['board-member', 'boardroom meeting executive'],
  ['chief-financial-officer', 'finance executive office'],
  ['chief-operations-officer', 'operations management'],
  ['chief-sustainability-officer', 'sustainability executive green'],
  ['facilities-manager', 'facility building management'],
  ['general-counsel', 'legal counsel lawyer office'],
  ['hr-director', 'human resources team people'],
  ['investor-relations', 'investor presentation stock market'],
  ['municipal-climate-officer', 'city government climate'],
  ['nonprofit-executive', 'nonprofit charity organization'],
  ['port-director', 'shipping port container'],
  ['procurement-director', 'procurement warehouse inventory'],
  ['real-estate-developer', 'real estate development construction'],
  ['supply-chain-director', 'supply chain global shipping'],
  ['utility-director', 'utility power grid electric'],
];

const comparisons = [
  ['b-corp-vs-benefit-corporation', 'certified business stamp'],
  ['biodiversity-net-gain-vs-biodiversity-offsets', 'biodiversity plants ecosystem'],
  ['carbon-capture-vs-carbon-removal', 'carbon capture technology'],
  ['carbon-neutral-vs-net-zero', 'zero emissions clean air'],
  ['carbon-offsets-vs-carbon-credits', 'carbon trading exchange'],
  ['carbon-tax-vs-cap-and-trade', 'pollution factory smokestack'],
  ['cdp-vs-gri', 'reporting framework documents'],
  ['cdp-vs-tcfd', 'climate financial disclosure'],
  ['circular-economy-vs-linear-economy', 'recycling circular economy'],
  ['csrd-vs-csddd', 'European regulation compliance'],
  ['csrd-vs-gri', 'sustainability standards comparison'],
  ['csrd-vs-sec-climate-rule', 'regulation comparison EU US'],
  ['dei-vs-esg-social-pillar', 'diversity inclusion teamwork'],
  ['djsi-vs-msci-esg', 'stock market index finance'],
  ['ecovadis-vs-cdp', 'rating assessment checklist'],
  ['esg-ratings-vs-esg-rankings', 'rating ranking chart graph'],
  ['esg-vs-csr', 'corporate social responsibility'],
  ['esg-vs-impact-investing', 'impact investing growth'],
  ['esg-vs-sustainability', 'sustainability green globe'],
  ['esrs-vs-gri', 'European reporting standards'],
  ['eu-taxonomy-vs-csrd', 'EU green taxonomy classification'],
  ['ghg-protocol-vs-iso-14064', 'greenhouse gas protocol measurement'],
  ['gresb-vs-cdp', 'real estate sustainability benchmark'],
  ['gri-vs-issb', 'global reporting standards'],
  ['gri-vs-sasb', 'accounting sustainability standards'],
  ['human-rights-due-diligence-vs-social-audit', 'human rights workers'],
  ['ifrs-s1-vs-ifrs-s2', 'accounting standards financial'],
  ['integrated-reporting-vs-gri', 'integrated annual report'],
  ['iso-14001-vs-emas', 'environmental management certification'],
  ['iso-14001-vs-iso-14064', 'ISO standards environmental'],
  ['just-transition-vs-green-transition', 'workers green transition'],
  ['lca-vs-carbon-footprint', 'life cycle analysis product'],
  ['nature-based-solutions-vs-grey-infrastructure', 'nature green infrastructure'],
  ['ppa-vs-rec', 'renewable energy solar panels'],
  ['recs-vs-carbon-offsets', 'renewable energy credits certificate'],
  ['sasb-vs-cdp', 'disclosure framework sustainability'],
  ['sasb-vs-issb', 'sustainability accounting board'],
  ['sbti-vs-net-zero-pledges', 'science target commitment pledge'],
  ['scope-2-market-based-vs-location-based', 'electricity power market'],
  ['sp-global-vs-sustainalytics', 'ESG analytics data platform'],
  ['stakeholder-capitalism-vs-shareholder-capitalism', 'stakeholder shareholder capitalism'],
  ['sustainalytics-vs-msci-esg', 'ESG rating comparison'],
  ['tcfd-vs-issb', 'climate financial standards'],
  ['tcfd-vs-tnfd', 'nature climate task force'],
  ['third-party-assurance-vs-self-reporting', 'audit third party verification'],
  ['voluntary-vs-compliance-carbon-markets', 'carbon market trading'],
];

// Use Pexels API
const PEXELS_API = 'https://api.pexels.com/v1/search';
const PEXELS_KEY = process.env.PEXELS_API_KEY || '';

async function searchPexels(query, perPage = 3) {
  const url = `${PEXELS_API}?query=${encodeURIComponent(query)}&per_page=${perPage}`;
  const res = await fetch(url, {
    headers: { 'Authorization': PEXELS_KEY }
  });
  if (!res.ok) {
    console.error(`API error ${res.status} for "${query}"`);
    return [];
  }
  const data = await res.json();
  return data.photos || [];
}

async function main() {
  if (!PEXELS_KEY) {
    console.error('Set PEXELS_API_KEY env var');
    process.exit(1);
  }

  const usedIds = new Set();
  const results = {
    locationImageMap: {},
    guideImageMap: {},
    industryImageMap: {},
    personaImageMap: {},
    compareImageMap: {},
  };

  async function getUniquePhoto(query) {
    const photos = await searchPexels(query, 10);
    for (const p of photos) {
      if (!usedIds.has(p.id)) {
        usedIds.add(p.id);
        return p.id;
      }
    }
    console.warn(`No unique photo for: ${query}`);
    return null;
  }

  // Locations - 2 images each
  console.log('Fetching locations...');
  for (let i = 0; i < locations.length; i++) {
    const [slug, query] = locations[i];
    const [, natQuery] = locationNature[i];
    const id1 = await getUniquePhoto(query);
    await sleep(200);
    const id2 = await getUniquePhoto(natQuery);
    await sleep(200);
    if (id1 && id2) {
      results.locationImageMap[slug] = [id1, id2];
    }
    console.log(`  ${slug}: ${id1}, ${id2}`);
  }

  // Guides
  console.log('Fetching guides...');
  for (const [slug, query] of guides) {
    const id = await getUniquePhoto(query);
    await sleep(200);
    if (id) results.guideImageMap[slug] = id;
    console.log(`  ${slug}: ${id}`);
  }

  // Industries
  console.log('Fetching industries...');
  for (const [slug, query] of industries) {
    const id = await getUniquePhoto(query);
    await sleep(200);
    if (id) results.industryImageMap[slug] = id;
    console.log(`  ${slug}: ${id}`);
  }

  // Personas
  console.log('Fetching personas...');
  for (const [slug, query] of personas) {
    const id = await getUniquePhoto(query);
    await sleep(200);
    if (id) results.personaImageMap[slug] = id;
    console.log(`  ${slug}: ${id}`);
  }

  // Comparisons
  console.log('Fetching comparisons...');
  for (const [slug, query] of comparisons) {
    const id = await getUniquePhoto(query);
    await sleep(200);
    if (id) results.compareImageMap[slug] = id;
    console.log(`  ${slug}: ${id}`);
  }

  // Write JSON output
  const outPath = '/Users/lilibot/.openclaw/workspace/cf-resources/scripts/pexels-data.json';
  const { writeFileSync } = await import('fs');
  writeFileSync(outPath, JSON.stringify(results, null, 2));
  console.log(`\nWrote ${outPath}`);
  console.log(`Total unique IDs: ${usedIds.size}`);
}

main().catch(console.error);
