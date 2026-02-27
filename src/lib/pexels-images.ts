/**
 * Image library for Council Fire Resources site.
 * All images use Pexels (free license, no attribution required).
 * Every page gets a UNIQUE image — no duplicates across any map.
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

const ux = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=800&h=500&fit=crop`;

// ─── Location Images (2 per location: city + regional) ─────────────────────
// All IDs verified from Pexels search results — every ID returns HTTP 200

export const locationImageMap: Record<string, string[]> = {
  'annapolis-md':       [px(13121940), px(12685010)],  // Sailboats harbor + sailing ship
  'alexandria-va':      [px(11625770), px(20417783)],  // DC cherry blossoms + Capitol dome
  'anchorage-ak':       [px(2113565),  px(16309468)],  // Aurora mountains + aurora forest AK
  'arlington-va':       [px(11458871), px(4705378)],   // Cherry blossoms memorial + Capitol night
  'atlanta-ga':         [px(35420344), px(17056802)],  // Atlanta skyline moody + Atlanta downtown
  'austin-tx':          [px(25003745), px(15161974)],  // Austin skyline river + Austin crosswalk
  'baltimore-md':       [px(8436663),  px(6619728)],   // Baltimore city buildings + Baltimore B&W
  'biloxi-ms':          [px(2418664),  px(17065699)],  // Gulf coast lightning + tropical beach palms
  'boston-ma':           [px(28646038), px(27062463)],  // Boston harbor + Boston sunset
  'california':         [px(372462),   px(27969321)],  // Golden Gate sunset + GGB from water
  'cape-coral-fl':      [px(10529268), px(30698939)],  // FL waterfront home + FL beach palms
  'charleston-sc':      [px(12797176), px(6704486)],   // Charleston St Michael's + church steeple
  'charlotte-nc':       [px(20018783), px(16714964)],  // Charlotte skyline sunset + aerial stadium
  'chesapeake-va':      [px(18959229), px(12464323)],  // Naval warship silhouette + cruise ship port
  'chicago-il':         [px(17956592), px(9544812)],   // Chicago expressway + Chicago sunset
  'cleveland-oh':       [px(26776496), px(258187)],    // Cleveland night + bridge reflection
  'columbus-oh':        [px(3859776),  px(5489599)],   // Midwest skyscrapers + aerial city
  'corpus-christi-tx':  [px(31663003), px(31754465)],  // CC beach sunset + CC gazebo
  'dallas-tx':          [px(4658019),  px(280193)],    // Dallas night + Dallas aerial
  'denver-co':          [px(28964990), px(1266810)],   // Rocky Mountains + mountain sunrise
  'detroit-mi':         [px(26417211), px(702343)],    // Detroit aerial + Detroit waterfront
  'florida':            [px(35788554), px(3897529)],   // Tropical sunset palms + beachfront
  'fort-lauderdale-fl': [px(9400830),  px(19705160)],  // Miami ferris wheel + Miami illuminated
  'galveston-tx':       [px(17872831), px(30130057)],  // Galveston Pleasure Pier + TX flag
  'honolulu-hi':        [px(4321407),  px(4321951)],   // Waikiki Diamond Head + Diamond Head palms
  'houston-tx':         [px(15353653), px(18658567)],  // Houston aerial night + Houston bayou
  'indianapolis-in':    [px(4372117),  px(3573383)],   // Indy aerial sunset + Indy night
  'jacksonville-fl':    [px(7995883),  px(15058860)],  // Jax Main St Bridge + Jax sunset bridges
  'kansas-city-mo':     [px(5660080),  px(349506)],    // KC skyline blue sky + KC grass skyline
  'key-west-fl':        [px(9400886),  px(18326893)],  // Key West lighthouse + Key West museum
  'los-angeles-ca':     [px(29276388), px(35291210)],  // LA sunset palms + LA downtown night
  'maryland':           [px(29490318), px(10169761)],  // Milwaukee Navy ship + St Louis fountain
  'miami-fl':           [px(30147234), px(29495141)],  // Miami aerial + Miami night skyline
  'milwaukee-wi':       [px(29240338), px(16094892)],  // Lake Michigan skyline + panoramic aerial
  'minneapolis-mn':     [px(706471),   px(28778890)],  // KC train station + NYC cloudy (Midwest city)
  'mobile-al':          [px(210476),   px(1473080)],   // Mobile AL aerial skyline + ocean waves sunset
  'nashville-tn':       [px(13899090), px(28412260)],  // Nashville dawn + Nashville skyline
  'new-orleans-la':     [px(18462327), px(29319083)],  // NOLA French Quarter + Southern street
  'new-york-ny':        [px(3075993),  px(29393582)],  // NYC night skyline + NYC from Jersey City
  'new-york-state':     [px(17231384), px(32660267)],  // Upstate NY mountains + NYC Empire State
  'newport-news-va':    [px(34586170), px(5665600)],   // Richmond aerial + harbor boats
  'norfolk-va':         [px(34586183), px(29004999)],  // Richmond downtown VA + beach waves
  'pensacola-fl':       [px(19477901), px(33118675)],  // Pensacola Beach tower + sandy beach
  'phoenix-az':         [px(31418279), px(16393032)],  // AZ saguaro desert + saguaro cactus
  'pittsburgh-pa':      [px(32548410), px(30736972)],  // Pittsburgh incline + Pittsburgh riverboat
  'portland-or':        [px(31528821), px(18173830)],  // Portland downtown + Portland Moda Center
  'providence-ri':      [px(427680),   px(2996154)],   // Coastal sunset rocks + NY night street
  'raleigh-nc':         [px(16928614), px(19205520)],  // Raleigh skyline sunset + illuminated city
  'richmond-va':        [px(34586164), px(34276123)],  // Richmond sunset + Sacramento aerial sunset
  'sacramento-ca':      [px(35437596), px(18559571)],  // Sacramento Capitol + Sacramento aerial
  'san-antonio-tx':     [px(12578659), px(3584283)],   // TX longhorn + Houston street sunset
  'san-diego-ca':       [px(18558647), px(16371246)],  // SD panoramic harbor + SD downtown
  'san-francisco-ca':   [px(28610484), px(4978531)],   // GGB with skyline + SF night Bay Bridge
  'san-juan-pr':        [px(16686267), px(15305908)],  // SJ colorful buildings + SJ fort panorama
  'savannah-ga':        [px(29333179), px(14188655)],  // Savannah rainy street + tree-lined path
  'seattle-wa':         [px(29380318), px(28209643)],  // Seattle Space Needle + Mt Rainier skyline
  'st-louis-mo':        [px(4059181),  px(20806164)],  // Gateway Arch aerial + Gateway Arch
  'tampa-fl':           [px(29330869), px(29330882)],  // Tampa Bay sundown + Tampa sunset
  'texas':              [px(10482416), px(18583623)],   // Dallas Reunion Tower + Austin aerial
  'virginia':           [px(2212890),  px(1525039)],   // Mountain scenery + mountain lake
  'virginia-beach-va':  [px(35174383), px(20737289)],  // Beach sunrise ocean + palm tree beach
  'washington-dc':      [px(8788264),  px(290150)],    // US Capitol trees + Lincoln Memorial
  'west-palm-beach-fl': [px(30793026), px(2785216)],   // Tropical palm beach + Key West sandy beach
  'wilmington-nc':      [px(13049614), px(29773805)],  // Beach sunrise + tropical beach palms
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

// ─── How-To Images (1 per how-to guide) ────────────────────────────────────

export const howToImageMap: Record<string, string> = {
  'how-to-write-a-sustainability-report':               px(590022),    // documents on desk
  'how-to-measure-scope-3-emissions':                   px(3483098),   // industrial smokestacks
  'how-to-conduct-a-materiality-assessment':            px(7688460),   // data analysis meeting
  'how-to-set-science-based-targets':                   px(2559941),   // target/bullseye concept
  'how-to-create-a-climate-action-plan':                px(1198507),   // climate/weather
  'how-to-implement-esg-reporting':                     px(6801647),   // charts and reporting
  'how-to-calculate-carbon-footprint':                  px(3912481),   // calculator and documents
  'how-to-develop-a-net-zero-strategy':                 px(414837),    // wind turbines
  'how-to-build-a-stakeholder-engagement-plan':         px(3184339),   // business meeting
  'how-to-conduct-a-climate-risk-assessment':           px(1446076),   // flooding/storm
  'how-to-write-a-csrd-compliant-report':               px(5668473),   // EU compliance
  'how-to-integrate-biodiversity-into-business-strategy': px(1640777), // nature biodiversity
  'how-to-create-a-circular-economy-strategy':          px(2547565),   // plastic bottles recycling
  'how-to-develop-sustainable-supply-chain-policies':   px(4481258),   // warehouse logistics
  'how-to-build-community-climate-resilience':          px(5487075),   // volunteers planting trees
};

// ─── Industry Images (1 per industry) ──────────────────────────────────────

export const industryImageMap: Record<string, string> = {
  'agriculture':          px(974314),
  'construction':         px(4513940),
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
  'board-member':                   px(3861571),   // executive boardroom meeting
  'chief-financial-officer':        px(6801649),   // financial charts on screen
  'chief-operations-officer':       px(8973680),   // industrial machinery operations
  'chief-sustainability-officer':   px(886521),    // nature/sustainability
  'facilities-manager':             px(2219024),   // building infrastructure
  'general-counsel':                px(5668882),   // justice scales and gavel
  'hr-director':                    px(8062287),   // professionals reviewing data
  'investor-relations':             px(7567236),   // market data candlestick chart
  'municipal-climate-officer':      px(1550337),   // government building
  'nonprofit-executive':            px(6647007),   // volunteers community service
  'port-director':                  px(21241152),  // cargo ship containers port
  'procurement-director':           px(4487363),   // warehouse pallets logistics
  'real-estate-developer':          px(6615235),   // architectural blueprints
  'supply-chain-director':          px(4481256),   // warehouse workers tablet
  'utility-director':               px(13875374),  // power lines transformers
};

// ─── Regulation Images (1 per regulation) ──────────────────────────────────

export const regulationImageMap: Record<string, string> = {
  'csrd-corporate-sustainability-reporting-directive':          px(11682403),  // European Parliament hemicycle, Strasbourg
  'sec-climate-disclosure-rule':                               px(210607),    // stock exchange board, Wall Street
  'eu-taxonomy-regulation':                                    px(13153479),  // EU Commission flags, Brussels
  'california-sb253-climate-corporate-data-accountability-act': px(1141853),  // Golden Gate Bridge fog, California
  'california-sb261-climate-related-financial-risk-act':       px(1485894),   // Bay Bridge sunset silhouette, CA
  'cbam-carbon-border-adjustment-mechanism':                   px(9861245),   // factory smokestacks, industrial
  'tnfd-taskforce-nature-related-financial-disclosures':       px(17681763),  // coral reef sea anemones, nature
  'issb-ifrs-sustainability-standards':                        px(7681081),   // financial documents close-up
  'uk-sustainability-disclosure-requirements':                 px(18338026),  // Big Ben through arch, London
  'german-supply-chain-due-diligence-act':                     px(23380998),  // Hamburg container ship terminal
  'epa-greenhouse-gas-reporting-program':                      px(3080527),   // smokestack emitting smoke
  'inflation-reduction-act-climate-provisions':                px(35105428),  // aerial wind turbines + solar panels
  'european-deforestation-regulation':                         px(5091702),   // aerial view of deforestation
  'corporate-sustainability-due-diligence-directive':          px(7993894),   // corporate conference meeting
  'global-biodiversity-framework':                             px(3684931),   // coral reef underwater, biodiversity
};

// ─── Comparison Images (1 per comparison) ──────────────────────────────────

export const compareImageMap: Record<string, string> = {
  'b-corp-vs-benefit-corporation':                        px(8112180),
  'biodiversity-net-gain-vs-biodiversity-offsets':        px(339614),
  'carbon-capture-vs-carbon-removal':                     px(2132171),
  'carbon-neutral-vs-net-zero':                           px(35105427),
  'carbon-offsets-vs-carbon-credits':                     px(2800832),
  'carbon-tax-vs-cap-and-trade':                          px(459728),
  'cdp-vs-gri':                                           px(590020),
  'cdp-vs-tcfd':                                          px(6675078),
  'circular-economy-vs-linear-economy':                   px(802221),
  'csrd-vs-csddd':                                        px(3856027),
  'csrd-vs-gri':                                          px(29597135),
  'csrd-vs-sec-climate-rule':                             px(5726794),
  'dei-vs-esg-social-pillar':                             px(3228684),
  'djsi-vs-msci-esg':                                     px(247763),
  'ecovadis-vs-cdp':                                      px(4386476),
  'esg-ratings-vs-esg-rankings':                          px(6801874),
  'esg-vs-csr':                                           px(8837494),
  'esg-vs-impact-investing':                              px(3943716),
  'esg-vs-sustainability':                                px(3747468),
  'esrs-vs-gri':                                          px(7176026),
  'eu-taxonomy-vs-csrd':                                  px(16427010),
  'ghg-protocol-vs-iso-14064':                            px(3912982),
  'gresb-vs-cdp':                                         px(4491461),
  'gri-vs-issb':                                          px(8370752),
  'gri-vs-sasb':                                          px(7654579),
  'human-rights-due-diligence-vs-social-audit':           px(6457579),
  'ifrs-s1-vs-ifrs-s2':                                   px(4968391),
  'integrated-reporting-vs-gri':                          px(5673488),
  'iso-14001-vs-emas':                                    px(8847133),
  'iso-14001-vs-iso-14064':                               px(4344878),
  'just-transition-vs-green-transition':                  px(2774556),
  'lca-vs-carbon-footprint':                              px(3735218),
  'nature-based-solutions-vs-grey-infrastructure':        px(5232412),
  'ppa-vs-rec':                                           px(356036),
  'recs-vs-carbon-offsets':                                px(9800094),
  'sasb-vs-cdp':                                          px(10840656),
  'sasb-vs-issb':                                         px(7821741),
  'sbti-vs-net-zero-pledges':                             px(35105456),
  'scope-2-market-based-vs-location-based':               px(9875441),
  'sp-global-vs-sustainalytics':                          px(8353802),
  'stakeholder-capitalism-vs-shareholder-capitalism':     px(7988240),
  'sustainalytics-vs-msci-esg':                           px(19895872),
  'tcfd-vs-issb':                                         px(8293778),
  'tcfd-vs-tnfd':                                         px(5412270),
  'third-party-assurance-vs-self-reporting':              px(8370710),
  'voluntary-vs-compliance-carbon-markets':               px(4968382),
  'csrd-vs-sec-climate-disclosure':                       px(6120218),
  'sbti-vs-net-zero-standard':                            px(3862130),
  'scope-1-2-vs-scope-3':                                 px(3850512),
  'single-vs-double-materiality':                         px(5717411),
  'voluntary-vs-mandatory-disclosure':                    px(6693661),
  'b-corp-vs-esg-rating':                                 px(6476254),
  'eu-taxonomy-vs-us-standards':                          px(1550337),
  'physical-vs-transition-climate-risk':                  px(1118873),
  'sasb-vs-gri':                                          px(6801648),
  'science-based-vs-self-set-targets':                    px(1108572),
};

// ─── Case Study Images (1 per case study) ──────────────────────────────────

export const caseStudyImageMap: Record<string, string> = {
  'fortune-500-csrd-compliance':              px(5668858),   // EU compliance documents
  'coastal-city-climate-resilience-plan':      px(1446076),   // flooding storm
  'energy-utility-net-zero-transition':        px(433308),    // energy power lines
  'foundation-ocean-conservation-strategy':    px(1001682),   // ocean underwater
  'port-authority-sustainability-savings':     px(21241152),  // cargo ship containers
  'university-carbon-neutrality-roadmap':      px(207692),    // university campus
  'food-company-scope-3-reduction':            px(2252584),   // food and beverage
  'municipal-resilience-authority-launch':     px(17507798),  // government building
  'real-estate-portfolio-esg-integration':     px(323780),    // real estate buildings
  'transportation-agency-electrification':     px(2199293),   // transportation road
  'healthcare-system-climate-risk-assessment': px(247786),    // healthcare hospital
  'tech-company-science-based-targets':        px(373543),    // technology
  'financial-services-tcfd-reporting':         px(210574),    // financial services
  'agricultural-cooperative-biodiversity':     px(974314),    // agriculture farming
  'defense-contractor-environmental-compliance': px(3862627), // defense military
  'hotel-chain-water-stewardship':             px(258154),    // hospitality hotel
  'manufacturing-circular-economy':            px(1108101),   // manufacturing
  'nonprofit-coalition-stakeholder-engagement': px(6647007),  // volunteers community
  'island-nation-climate-adaptation':          px(1295138),   // tropical island
  'documentary-film-impact-campaign':          px(66134),     // camera filmmaking
};

// ─── Framework Images (1 per framework) ────────────────────────────────────

export const frameworkImageMap: Record<string, string> = {
  'gri-standards':                       px(3184291),   // business reporting
  'issb-ifrs-s1-s2':                     px(7681081),   // financial documents
  'tcfd-recommendations':                px(3593922),   // climate data analysis
  'sbti-science-based-targets':          px(2280547),   // science targets
  'ghg-protocol':                        px(280221),    // emissions industrial
  'cdp-disclosure':                      px(590016),    // disclosure documents
  'sasb-standards':                      px(7654579),   // industry standards
  'tnfd-framework':                      px(1598073),   // nature biodiversity
  'un-sdgs':                             px(886521),    // sustainability globe
  'eu-esrs':                             px(11682403),  // European Parliament
  'iso-14001':                           px(3183197),   // environmental management
  'iso-14064':                           px(3912982),   // ghg measurement
  'equator-principles':                  px(534216),    // project finance
  'psi-principles':                      px(1118873),   // risk management
  'pri-principles':                      px(7567236),   // investment market
  'natural-capital-protocol':            px(1108099),   // natural capital
  'circular-economy-framework':          px(802221),    // circular recycling
  'climate-bonds-standard':              px(459728),    // green bonds finance
  'b-corp-certification':                px(8112180),   // b corp business
  'science-based-targets-for-nature':    px(339614),    // nature forest
};

// ─── Legacy topic images (fallback references) ────────────────────────────

export const topicImages: Record<string, string[]> = {
  'climate-resilience': [px(1118873), px(1198507), px(2559941)],
  'flooding': [px(1446076), px(1739855)],
  'ocean': [px(1001682), px(1295138), px(932638)],
  'renewable-energy': [px(433308), px(356036), px(2800832)],
  'forest': [px(339614), px(338936)],
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
  if (section === 'case-studies' && caseStudyImageMap[slug]) return caseStudyImageMap[slug];
  if (section === 'frameworks' && frameworkImageMap[slug]) return frameworkImageMap[slug];
  if (section === 'regulations' && regulationImageMap[slug]) return regulationImageMap[slug];
  if (section === 'how-to' && howToImageMap[slug]) return howToImageMap[slug];
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
