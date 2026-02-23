/**
 * Pexels image library for Council Fire Resources site.
 * All images are free to use via Pexels license.
 * Every page gets a UNIQUE image — no duplicates across any map.
 * Using direct Pexels URLs with auto=compress for performance.
 *
 * Total unique images: 229
 *   - 64 locations × 2 = 128
 *   - 25 guides
 *   - 15 industries
 *   - 15 personas
 *   - 46 comparisons
 */

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

// ─── Location Images (2 per location: city + nature/climate) ────────────────

export const locationImageMap: Record<string, string[]> = {
  'annapolis-md':       [px(2901215), px(2387418)],
  'alexandria-va':      [px(2416653), px(2187456)],
  'anchorage-ak':       [px(2559484), px(1029604)],
  'arlington-va':       [px(2614818), px(1440476)],
  'atlanta-ga':         [px(33133734), px(11599618)],
  'austin-tx':          [px(1563356), px(1198507)],
  'baltimore-md':       [px(2422588), px(97050)],
  'biloxi-ms':          [px(1687845), px(1770809)],
  'boston-ma':           [px(2871736), px(1125268)],
  'california':         [px(1005417), px(1179229)],
  'cape-coral-fl':      [px(1486222), px(1450353)],
  'charleston-sc':      [px(2029731), px(2033343)],
  'charlotte-nc':       [px(1049842), px(699466)],
  'chesapeake-va':      [px(248797), px(158827)],
  'chicago-il':         [px(1823681), px(1769370)],
  'cleveland-oh':       [px(14095757), px(414612)],
  'columbus-oh':        [px(366283), px(927629)],
  'corpus-christi-tx':  [px(1268855), px(932638)],
  'dallas-tx':          [px(4658019), px(1643457)],
  'denver-co':          [px(19864682), px(1054218)],
  'detroit-mi':         [px(18672911), px(672532)],
  'florida':            [px(4386158), px(2310713)],
  'fort-lauderdale-fl': [px(2363901), px(1001682)],
  'galveston-tx':       [px(1078983), px(1295138)],
  'honolulu-hi':        [px(32194277), px(1422286)],
  'houston-tx':         [px(3584437), px(2901209)],
  'indianapolis-in':    [px(2116721), px(1287145)],
  'jacksonville-fl':    [px(259588), px(1308624)],
  'kansas-city-mo':     [px(376464), px(1761279)],
  'key-west-fl':        [px(96428), px(161768)],
  'los-angeles-ca':     [px(2263683), px(1162268)],
  'maryland':           [px(2138126), px(1552242)],
  'miami-fl':           [px(3581916), px(1209978)],
  'milwaukee-wi':       [px(2422461), px(2559749)],
  'minneapolis-mn':     [px(3186654), px(1308940)],
  'mobile-al':          [px(2387873), px(699568)],
  'nashville-tn':       [px(13899090), px(167699)],
  'new-orleans-la':     [px(18462327), px(22430901)],
  'new-york-ny':        [px(466685), px(1239162)],
  'new-york-state':     [px(378570), px(2157685)],
  'newport-news-va':    [px(1105766), px(1402787)],
  'norfolk-va':         [px(2539077), px(1295230)],
  'pensacola-fl':       [px(994605), px(924824)],
  'phoenix-az':         [px(1154189), px(36844)],
  'pittsburgh-pa':      [px(164400), px(1268076)],
  'portland-or':        [px(14521391), px(1179225)],
  'providence-ri':      [px(1550337), px(2790396)],
  'raleigh-nc':         [px(3760529), px(1072179)],
  'richmond-va':        [px(1461974), px(159397)],
  'sacramento-ca':      [px(247599), px(2088203)],
  'san-antonio-tx':     [px(1591361), px(1586298)],
  'san-diego-ca':       [px(18558647), px(1032650)],
  'san-francisco-ca':   [px(1141853), px(208745)],
  'san-juan-pr':        [px(16686267), px(1686222)],
  'savannah-ga':        [px(2033680), px(1068523)],
  'seattle-wa':         [px(1534560), px(2559941)],
  'st-louis-mo':        [px(35420344), px(2406395)],
  'tampa-fl':           [px(1446076), px(1739855)],
  'texas':              [px(417023), px(2098427)],
  'virginia':           [px(2166553), px(338936)],
  'virginia-beach-va':  [px(1533720), px(1076758)],
  'washington-dc':      [px(12504957), px(4705378)],
  'west-palm-beach-fl': [px(2402926), px(1320684)],
  'wilmington-nc':      [px(2478248), px(1320686)],
};

// ─── Guide Images (1 per guide) ────────────────────────────────────────────

export const guideImageMap: Record<string, string> = {
  'biodiversity-assessment-guide':          px(1108099),
  'california-sb-253-guide':                px(2990644),
  'california-sb-261-guide':                px(3760067),
  'carbon-neutrality-roadmap':              px(9800092),
  'cdp-disclosure-guide':                   px(590016),
  'climate-risk-assessment-guide':          px(1118873),
  'csrd-compliance-guide':                  px(5668858),
  'double-materiality-assessment-guide':    px(7688336),
  'esg-data-management-guide':              px(669615),
  'eu-taxonomy-alignment-guide':            px(6801648),
  'ghg-protocol-guide':                     px(280221),
  'green-bond-framework-guide':             px(534216),
  'gri-standards-guide':                    px(3184291),
  'iso-14001-guide':                        px(3183197),
  'iso-14092-guide':                        px(2280571),
  'issb-implementation-guide':              px(3184405),
  'net-zero-strategy-guide':                px(29056690),
  'science-based-targets-guide':            px(2280547),
  'scope-3-measurement-guide':              px(1427107),
  'sec-climate-rule-guide':                 px(2988232),
  'stakeholder-engagement-guide':           px(3184325),
  'supply-chain-due-diligence-guide':       px(2226458),
  'sustainability-assurance-guide':         px(3184360),
  'tcfd-reporting-guide':                   px(3593922),
  'tnfd-reporting-guide':                   px(1598073),
};

// ─── Industry Images (1 per industry) ──────────────────────────────────────

export const industryImageMap: Record<string, string> = {
  'agriculture':          px(974314),
  'construction':         px(1105658),
  'energy':               px(433308),
  'financial-services':   px(210574),
  'food-and-beverage':    px(2252584),
  'government':           px(17507798),
  'healthcare':           px(247786),
  'hospitality':          px(258154),
  'manufacturing':        px(1108101),
  'mining':               px(2101137),
  'real-estate':          px(323780),
  'retail':               px(1005638),
  'technology':           px(373543),
  'telecommunications':   px(2582937),
  'transportation':       px(2199293),
};

// ─── Persona Images (1 per persona) ────────────────────────────────────────

export const personaImageMap: Record<string, string> = {
  'board-member':                   px(3184416),
  'chief-financial-officer':        px(3760072),
  'chief-operations-officer':       px(3184339),
  'chief-sustainability-officer':   px(886521),
  'facilities-manager':             px(2219024),
  'general-counsel':                px(5668473),
  'hr-director':                    px(3184352),
  'investor-relations':             px(1427541),
  'municipal-climate-officer':      px(8788264),
  'nonprofit-executive':            px(3184317),
  'port-director':                  px(269077),
  'procurement-director':           px(1427105),
  'real-estate-developer':          px(3760069),
  'supply-chain-director':          px(1108572),
  'utility-director':               px(1117210),
};

// ─── Comparison Images (1 per comparison) ──────────────────────────────────

export const compareImageMap: Record<string, string> = {
  'b-corp-vs-benefit-corporation':                        px(3183131),
  'biodiversity-net-gain-vs-biodiversity-offsets':        px(957024),
  'carbon-capture-vs-carbon-removal':                     px(2132171),
  'carbon-neutral-vs-net-zero':                           px(35105427),
  'carbon-offsets-vs-carbon-credits':                     px(2800832),
  'carbon-tax-vs-cap-and-trade':                          px(459728),
  'cdp-vs-gri':                                           px(590020),
  'cdp-vs-tcfd':                                          px(3184418),
  'circular-economy-vs-linear-economy':                   px(802221),
  'csrd-vs-csddd':                                        px(3856027),
  'csrd-vs-gri':                                          px(6120218),
  'csrd-vs-sec-climate-rule':                             px(5726794),
  'dei-vs-esg-social-pillar':                             px(3228684),
  'djsi-vs-msci-esg':                                     px(6120171),
  'ecovadis-vs-cdp':                                      px(4386476),
  'esg-ratings-vs-esg-rankings':                          px(6801874),
  'esg-vs-csr':                                           px(3183170),
  'esg-vs-impact-investing':                              px(3943716),
  'esg-vs-sustainability':                                px(3747468),
  'esrs-vs-gri':                                          px(7176026),
  'eu-taxonomy-vs-csrd':                                  px(6476254),
  'ghg-protocol-vs-iso-14064':                            px(3912982),
  'gresb-vs-cdp':                                         px(4491461),
  'gri-vs-issb':                                          px(8370752),
  'gri-vs-sasb':                                          px(7654579),
  'human-rights-due-diligence-vs-social-audit':           px(6457579),
  'ifrs-s1-vs-ifrs-s2':                                   px(4968391),
  'integrated-reporting-vs-gri':                          px(5673488),
  'iso-14001-vs-emas':                                    px(7947971),
  'iso-14001-vs-iso-14064':                               px(4344878),
  'just-transition-vs-green-transition':                  px(2774556),
  'lca-vs-carbon-footprint':                              px(3735218),
  'nature-based-solutions-vs-grey-infrastructure':        px(5232412),
  'ppa-vs-rec':                                           px(356036),
  'recs-vs-carbon-offsets':                                px(9800094),
  'sasb-vs-cdp':                                          px(6476595),
  'sasb-vs-issb':                                         px(7821741),
  'sbti-vs-net-zero-pledges':                             px(35105456),
  'scope-2-market-based-vs-location-based':               px(9875441),
  'sp-global-vs-sustainalytics':                          px(8353802),
  'stakeholder-capitalism-vs-shareholder-capitalism':     px(3182812),
  'sustainalytics-vs-msci-esg':                           px(6476260),
  'tcfd-vs-issb':                                         px(8293778),
  'tcfd-vs-tnfd':                                         px(5412270),
  'third-party-assurance-vs-self-reporting':              px(8370710),
  'voluntary-vs-compliance-carbon-markets':               px(4968382),
};

// ─── Legacy topic images (fallback references) ────────────────────────────

export const topicImages: Record<string, string[]> = {
  'climate-resilience': [px(1118873), px(1198507), px(2559941)],
  'flooding': [px(1446076), px(1739855)],
  'ocean': [px(1001682), px(1295138), px(932638)],
  'renewable-energy': [px(433308), px(356036), px(2800832)],
  'forest': [px(957024), px(338936)],
  'agriculture': [px(974314), px(2132171)],
  'business': [px(3184291), px(3184405)],
  'infrastructure': [px(2219024), px(1105766)],
  'water': [px(1089932), px(2406395)],
  'community': [px(2774556), px(886521)],
  'supply-chain': [px(1427107), px(2226458)],
  'biodiversity': [px(1108099), px(1598073)],
};

// Legacy aliases
export const locationImages = locationImageMap;
export const industryImages = industryImageMap;

// ─── Helper Functions ──────────────────────────────────────────────────────

const defaultCoastal = [px(1001682), px(1295138)];
const defaultInland = [px(1308940), px(417023)];

/**
 * Get images for a location page based on the slug.
 */
export function getLocationImages(slug: string): string[] {
  if (locationImageMap[slug]) return locationImageMap[slug];

  for (const [key, imgs] of Object.entries(locationImageMap)) {
    if (slug.includes(key) || key.includes(slug)) return imgs;
  }

  const coastal = [
    'fl', 'ca', 'nc', 'sc', 'va', 'md', 'la', 'tx', 'hi', 'pr',
    'ri', 'ma', 'nj', 'ct', 'de', 'al', 'ms', 'ga', 'or', 'wa', 'ak', 'me',
  ];
  if (coastal.some((s) => slug.endsWith(`-${s}`) || slug === s)) {
    return defaultCoastal;
  }
  return defaultInland;
}

/**
 * Get an image for a guide, industry, persona, or comparison page.
 */
export function getTopicImage(section: string, slug: string): string {
  if (section === 'guides' && guideImageMap[slug]) return guideImageMap[slug];
  if (section === 'industries' && industryImageMap[slug]) return industryImageMap[slug];
  if ((section === 'personas' || section === 'for') && personaImageMap[slug]) return personaImageMap[slug];
  if ((section === 'comparisons' || section === 'compare') && compareImageMap[slug]) return compareImageMap[slug];

  const s = slug.toLowerCase();
  if (s.includes('ocean') || s.includes('marine') || s.includes('coral'))
    return topicImages['ocean'][0];
  if (s.includes('water') || s.includes('storm') || s.includes('flood'))
    return topicImages['water'][0];
  if (s.includes('forest') || s.includes('deforest') || s.includes('tree'))
    return topicImages['forest'][0];
  if (s.includes('energy') || s.includes('carbon') || s.includes('emission') || s.includes('solar') || s.includes('wind'))
    return topicImages['renewable-energy'][0];
  if (s.includes('supply') || s.includes('chain') || s.includes('procurement'))
    return topicImages['supply-chain'][0];
  if (s.includes('bio') || s.includes('species') || s.includes('habitat'))
    return topicImages['biodiversity'][0];
  if (s.includes('communit') || s.includes('social') || s.includes('justice'))
    return topicImages['community'][0];
  if (s.includes('agri') || s.includes('farm') || s.includes('soil') || s.includes('food'))
    return topicImages['agriculture'][0];
  if (s.includes('infra') || s.includes('build') || s.includes('urban'))
    return topicImages['infrastructure'][0];

  if (section === 'industries') return industryImageMap[s] || topicImages['business'][0];
  return topicImages['business'][0];
}
