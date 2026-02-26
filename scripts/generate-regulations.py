#!/usr/bin/env python3
"""Generate regulation content files."""
import os

BASE = "/Users/lilibot/.openclaw/workspace/cf-resources/content/regulations"
os.makedirs(BASE, exist_ok=True)

regulations = {
    "csrd-corporate-sustainability-reporting-directive": {
        "title": "CSRD: Corporate Sustainability Reporting Directive",
        "description": "Complete guide to the EU Corporate Sustainability Reporting Directive — scope, requirements, ESRS standards, timeline, and compliance steps.",
        "category": "EU Regulation",
        "faqs": [
            ("Who must comply with CSRD?", "CSRD applies to: (1) EU companies already under NFRD (large public-interest entities, 500+ employees) from FY2024; (2) all large EU companies meeting 2 of 3 criteria (250+ employees, €50M revenue, €25M assets) from FY2025; (3) listed SMEs from FY2026 (opt-out until FY2028); (4) non-EU companies with €150M+ EU revenue from FY2028. Subsidiaries of in-scope groups are included."),
            ("What are the ESRS standards?", "The European Sustainability Reporting Standards (ESRS) are the detailed reporting standards developed by EFRAG under CSRD. They include: ESRS 1 (General Requirements), ESRS 2 (General Disclosures — always mandatory), and 10 topical standards covering Environment (E1-E5), Social (S1-S4), and Governance (G1). Topical standards apply based on double materiality assessment."),
            ("What are the penalties for non-compliance?", "Penalties are set by EU member states during national transposition. Expected penalties include fines, public statements of non-compliance, and potential director liability. Since CSRD reports are part of the management report and subject to audit, non-compliance carries similar consequences to financial reporting failures.")
        ],
        "body": """## What Is CSRD?

The Corporate Sustainability Reporting Directive (CSRD) is the EU's comprehensive sustainability disclosure regulation, adopted in November 2022. It replaces the Non-Financial Reporting Directive (NFRD) and dramatically expands the scope, detail, and rigor of required sustainability reporting in Europe.

CSRD brings approximately 50,000 companies into mandatory sustainability reporting scope — up from roughly 11,000 under NFRD. For the first time, sustainability reports must be included in the management report, digitally tagged in XBRL format, and subject to mandatory external assurance.

## Who It Applies To

CSRD uses a phased approach:

| Phase | Companies | Reporting Year | First Report Due |
|-------|-----------|---------------|-----------------|
| Phase 1 | Companies already under NFRD | FY2024 | 2025 |
| Phase 2 | Large companies (2 of 3: 250+ employees, €50M+ revenue, €25M+ assets) | FY2025 | 2026 |
| Phase 3 | Listed SMEs | FY2026 (opt-out to FY2028) | 2027-2029 |
| Phase 4 | Non-EU companies with €150M+ EU revenue | FY2028 | 2029 |

Important: the criteria apply at the individual entity or consolidated group level. A non-EU parent company may be in scope through its EU subsidiaries.

## Key Requirements

**Double materiality assessment**: Companies must assess both impact materiality (their effects on people and environment) and financial materiality (how sustainability topics affect the company financially). A topic is reportable if it meets either threshold.

**ESRS compliance**: Report against the European Sustainability Reporting Standards — detailed, prescriptive standards covering:
- ESRS 2: General disclosures (mandatory for all companies)
- E1-E5: Climate change, pollution, water, biodiversity, circular economy
- S1-S4: Own workforce, value chain workers, communities, consumers
- G1: Business conduct

**Value chain coverage**: ESRS requires disclosure on impacts, risks, and opportunities across the full value chain — upstream suppliers, own operations, and downstream customers.

**Digital tagging**: Reports must be tagged in XBRL format per the ESRS digital taxonomy, enabling machine-readable disclosure.

**External assurance**: Limited assurance is mandatory from the first reporting year, with plans to move to reasonable assurance by approximately 2028.

## Timeline and Deadlines

- **January 2023**: CSRD entered into force
- **July 2023**: First set of ESRS adopted by European Commission
- **FY2024**: Phase 1 companies begin reporting
- **FY2025**: Phase 2 companies begin reporting
- **FY2026**: Phase 3 (listed SMEs) begin — with opt-out until FY2028
- **FY2028**: Phase 4 (non-EU companies) begin
- **~2028**: Transition from limited to reasonable assurance (timeline TBC)

## Compliance Steps

1. **Determine your scope and timeline**: Confirm which entities are in scope and when
2. **Conduct double materiality assessment**: Identify material topics across all ESRS standards
3. **Gap analysis**: Map required ESRS datapoints against current data availability
4. **Build data infrastructure**: Establish systems for collecting, validating, and managing required data
5. **Prepare narrative disclosures**: Develop governance, strategy, and risk management narratives
6. **Engage assurance provider**: Select and engage your assurer early in the process
7. **Draft sustainability statement**: Write the ESRS-compliant sustainability section of the management report
8. **XBRL tagging**: Tag the sustainability statement per ESRS digital taxonomy
9. **Assurance engagement**: Complete the assurance process
10. **Board approval and filing**: Obtain board approval and file with the management report

## Penalties

Penalties are determined by individual EU member states during national transposition. Expected enforcement mechanisms include:
- Financial penalties (fines)
- Public naming of non-compliant companies
- Director liability for management report content
- Securities regulator enforcement for listed companies
- Potential impact on access to EU public procurement

## How Council Fire Can Help

Council Fire provides end-to-end CSRD compliance support — from double materiality assessment through ESRS gap analysis, data system design, report drafting, and assurance readiness. [Contact us](https://www.councilfire.org/contact) to discuss your CSRD compliance needs."""
    },

    "sec-climate-disclosure-rule": {
        "title": "SEC Climate Disclosure Rule",
        "description": "Guide to the SEC's climate-related disclosure requirements for US public companies, including scope, requirements, timeline, and compliance strategies.",
        "category": "US Regulation",
        "faqs": [
            ("Does the SEC rule require Scope 3 reporting?", "The final rule requires large accelerated filers and accelerated filers to disclose Scope 3 emissions only if material or if they have set Scope 3 targets. This is narrower than the proposed rule. However, California's SB 253 separately mandates Scope 3 reporting for large companies doing business in California, so many US companies will need Scope 3 regardless."),
            ("When does the SEC climate rule take effect?", "The rule has faced legal challenges. The SEC stayed the rule in April 2024 pending litigation. As of early 2026, the timeline remains uncertain, but companies should prepare as if implementation will proceed. Large accelerated filers would be first, with phased implementation for smaller filers."),
            ("How does this compare to CSRD?", "The SEC rule is narrower than CSRD. It focuses primarily on climate (not broader ESG), requires single materiality (financially material information), and has less prescriptive requirements than ESRS. CSRD requires double materiality, covers all ESG topics, and has detailed datapoint-level requirements. Companies in scope for both face the most comprehensive obligations.")
        ],
        "body": """## What Is the SEC Climate Disclosure Rule?

The Securities and Exchange Commission adopted its final climate-related disclosure rule in March 2024, establishing mandatory climate disclosure requirements for US publicly traded companies. The rule requires registrants to disclose climate-related risks, governance, strategy, targets, and greenhouse gas emissions in annual reports and registration statements.

The rule represents the most significant expansion of SEC disclosure requirements in decades, bringing climate information into the regulated financial reporting framework for the first time.

## Who It Applies To

The rule applies to all SEC registrants (companies that file with the SEC), with phased implementation based on filer status:

- **Large accelerated filers** (public float >$700M): First phase
- **Accelerated filers** (public float $75M-$700M): Second phase
- **Non-accelerated filers and smaller reporting companies**: Third phase, with reduced requirements

Foreign private issuers that file with the SEC are also covered.

## Key Requirements

**Governance**: Describe board oversight of climate-related risks and management's role in assessing and managing them.

**Strategy**: Disclose climate-related risks that have materially impacted or are reasonably likely to materially impact the company's business, strategy, or financial condition. This includes:
- Description of material climate risks (physical and transition)
- Actual and potential material impacts on strategy, business model, and outlook
- Climate scenario analysis (if used)
- Transition plans (if adopted)

**Risk management**: Describe processes for identifying, assessing, and managing material climate-related risks, and how they integrate with overall risk management.

**GHG emissions**: Disclose:
- Scope 1 and Scope 2 emissions (with attestation for large filers)
- Scope 3 emissions if material or if the company has set a Scope 3 target
- Methodology and assumptions

**Financial statement impacts**: Disclose the financial impacts of severe weather events and other natural conditions, and expenditures related to climate risk mitigation in a note to audited financial statements.

## Timeline

The rule's effective date has been impacted by legal challenges:
- **March 2024**: Rule adopted by SEC
- **April 2024**: SEC voluntarily stayed implementation pending Eighth Circuit review
- **2025-2026**: Litigation ongoing
- Expected phased compliance once stays are lifted:
  - Large accelerated filers: 2 years after effective date
  - Accelerated filers: 3 years
  - Others: 4 years

Companies should continue preparing regardless of litigation outcomes.

## Compliance Steps

1. **Assess current state**: Review existing climate disclosures, data systems, and governance
2. **Governance structure**: Ensure board and management roles in climate oversight are clearly defined and documented
3. **GHG inventory**: Build or enhance Scope 1, 2, and 3 measurement capabilities using GHG Protocol
4. **Risk assessment**: Conduct TCFD-aligned climate risk assessment covering physical and transition risks
5. **Financial impact analysis**: Quantify climate-related financial impacts for the notes to financial statements
6. **Internal controls**: Establish disclosure controls and procedures for climate information (similar rigor to financial reporting)
7. **Attestation preparation**: For large filers, engage an attestation provider for GHG emissions data
8. **Integration with 10-K**: Prepare climate disclosures for inclusion in annual report filings

## Penalties

As an SEC regulation, non-compliance carries standard securities enforcement mechanisms:
- SEC enforcement actions
- Civil monetary penalties
- Restatement requirements
- Officer and director liability
- Shareholder litigation risk
- Securities fraud exposure for material misstatements

## How Council Fire Can Help

Council Fire helps SEC registrants prepare for climate disclosure requirements — from GHG inventory development and climate risk assessment through disclosure drafting and attestation readiness. [Contact us](https://www.councilfire.org/contact) for SEC climate rule compliance support."""
    },

    "eu-taxonomy-regulation": {
        "title": "EU Taxonomy Regulation",
        "description": "Complete guide to the EU Taxonomy for sustainable activities — classification criteria, technical screening criteria, DNSH requirements, and reporting obligations.",
        "category": "EU Regulation",
        "faqs": [
            ("What is the EU Taxonomy?", "The EU Taxonomy is a classification system that defines which economic activities are 'environmentally sustainable.' It provides technical screening criteria for activities that substantially contribute to one of six environmental objectives while doing no significant harm to the others. Companies subject to CSRD must report their Taxonomy-aligned revenue, CapEx, and OpEx."),
            ("What are the six environmental objectives?", "The six objectives are: (1) Climate change mitigation, (2) Climate change adaptation, (3) Sustainable use and protection of water and marine resources, (4) Transition to a circular economy, (5) Pollution prevention and control, (6) Protection and restoration of biodiversity and ecosystems. Technical screening criteria have been adopted for all six."),
            ("Does the EU Taxonomy apply to non-EU companies?", "Not directly, but non-EU companies with EU subsidiaries subject to CSRD must include Taxonomy reporting. Additionally, EU financial institutions must report the Taxonomy alignment of their portfolios, which creates demand for Taxonomy data from all companies they invest in or lend to — including non-EU companies.")
        ],
        "body": """## What Is the EU Taxonomy?

The EU Taxonomy Regulation (2020/852) establishes a unified classification system for environmentally sustainable economic activities across the European Union. It provides technical criteria that determine whether a specific economic activity can be classified as 'green' — creating a common language for sustainable finance and corporate disclosure.

The Taxonomy is a cornerstone of the EU's sustainable finance framework, designed to direct capital toward genuinely sustainable activities and combat greenwashing.

## Who It Applies To

- **CSRD-reporting companies**: Must disclose Taxonomy eligibility and alignment of revenue, capital expenditure, and operating expenditure
- **Financial market participants**: Must disclose Taxonomy alignment of financial products under SFDR
- **EU member states**: Must use the Taxonomy for green bonds and public measures
- **Financial institutions**: Must report the Green Asset Ratio (GAR) showing Taxonomy-aligned activities in their portfolios

## Key Requirements

**Three-step assessment:**

1. **Taxonomy eligibility**: Is your economic activity described in the Taxonomy? Not all activities are covered — only those with significant potential for environmental contribution.

2. **Substantial contribution**: Does the activity meet the Technical Screening Criteria (TSC) for at least one environmental objective? For example, electricity generation from solar PV must have lifecycle emissions below 100g CO2e/kWh.

3. **Do No Significant Harm (DNSH)**: Does the activity avoid significant harm to the other five environmental objectives? Each TSC includes specific DNSH criteria.

4. **Minimum safeguards**: Does the company comply with OECD Guidelines, UN Guiding Principles on Business and Human Rights, ILO core conventions, and the International Bill of Human Rights?

**Reporting metrics:**
- Taxonomy-eligible revenue, CapEx, and OpEx as a percentage of total
- Taxonomy-aligned revenue, CapEx, and OpEx as a percentage of total
- Breakdown by environmental objective

## The Six Environmental Objectives

1. **Climate change mitigation**: Activities that reduce GHG emissions (renewable energy, energy efficiency, clean transport, green buildings)
2. **Climate change adaptation**: Activities that reduce vulnerability to climate impacts (climate-resilient infrastructure, warning systems)
3. **Water and marine resources**: Activities protecting aquatic ecosystems and water quality
4. **Circular economy**: Activities minimizing waste and keeping materials in use
5. **Pollution prevention**: Activities reducing pollution of air, water, and soil
6. **Biodiversity**: Activities protecting and restoring ecosystems

## Timeline

- **July 2020**: Taxonomy Regulation entered into force
- **January 2022**: Climate Delegated Act applied (objectives 1 & 2)
- **January 2024**: Environmental Delegated Act applied (objectives 3-6)
- **Ongoing**: Technical screening criteria are periodically reviewed and updated

## Compliance Steps

1. **Map economic activities**: Identify which of your revenue-generating activities, CapEx, and OpEx are described in the Taxonomy
2. **Assess eligibility**: Determine which mapped activities are Taxonomy-eligible
3. **Evaluate substantial contribution**: Test eligible activities against Technical Screening Criteria for the relevant environmental objective
4. **Apply DNSH criteria**: Verify that each substantially contributing activity does not significantly harm the other five objectives
5. **Verify minimum safeguards**: Confirm compliance with human rights, anti-corruption, tax, and competition requirements
6. **Calculate KPIs**: Compute Taxonomy-aligned percentages for revenue, CapEx, and OpEx
7. **Disclose in management report**: Include Taxonomy reporting as part of CSRD sustainability statement

## Penalties

Penalties follow CSRD enforcement mechanisms as Taxonomy reporting is embedded in CSRD disclosure. Additionally:
- Misrepresentation of Taxonomy alignment could constitute greenwashing
- Financial institutions face regulatory scrutiny from national supervisors
- Investment funds claiming green credentials without proper Taxonomy assessment face SFDR enforcement

## How Council Fire Can Help

Council Fire helps companies navigate the EU Taxonomy — from activity mapping and technical screening criteria assessment through DNSH analysis and KPI calculation. We make Taxonomy reporting practical and audit-ready. [Contact us](https://www.councilfire.org/contact) for EU Taxonomy support."""
    },

    "california-climate-corporate-data-accountability-act": {
        "title": "California Climate Corporate Data Accountability Act (SB 253)",
        "description": "Guide to California's SB 253 requiring large companies to disclose Scope 1, 2, and 3 greenhouse gas emissions — scope, timeline, and compliance requirements.",
        "category": "US Regulation",
        "faqs": [
            ("Which companies must comply with SB 253?", "SB 253 applies to US entities (public or private) with total annual revenues exceeding $1 billion that 'do business in California.' The California Franchise Tax Board defines 'doing business' broadly — it includes companies with sales, property, or payroll in California. This captures an estimated 5,000+ companies, many headquartered outside California."),
            ("Does SB 253 require Scope 3?", "Yes. SB 253 mandates disclosure of Scope 1, 2, AND 3 emissions. Scope 3 reporting begins one year after Scope 1 and 2. This is one of the first US laws to require comprehensive value chain emissions disclosure and goes further than the SEC rule in this regard."),
            ("How does SB 253 interact with the SEC rule?", "They are complementary but different. SB 253 applies to public AND private companies (SEC rule only covers public companies). SB 253 mandates Scope 3 (SEC requires it only if material). SB 253 applies based on California revenue threshold (SEC applies to all registrants). Companies in scope for both must satisfy the more stringent requirement.")
        ],
        "body": """## What Is SB 253?

The Climate Corporate Data Accountability Act (Senate Bill 253), signed by Governor Newsom in October 2023, requires large companies doing business in California to publicly disclose their greenhouse gas emissions across Scopes 1, 2, and 3. It is one of the most ambitious corporate emissions disclosure laws in the United States.

SB 253 fills a critical gap in US climate disclosure — it covers private companies (unlike the SEC rule) and mandates Scope 3 reporting (which the SEC rule makes conditional). For many large US companies, this will be their first mandatory emissions disclosure obligation.

## Who It Applies To

SB 253 applies to any entity that:
- Is a partnership, corporation, LLC, or other business entity, AND
- Has total annual revenues exceeding **$1 billion**, AND
- **Does business in California** as defined by the California Revenue and Taxation Code

"Doing business in California" is defined broadly by the Franchise Tax Board: having sales, property, or payroll in California, or being organized in California. This captures companies headquartered in any state (or country) that have significant California operations or sales.

Approximately 5,000-10,000 companies are expected to be in scope.

## Key Requirements

- **Scope 1 emissions**: Direct emissions from owned or controlled sources
- **Scope 2 emissions**: Indirect emissions from purchased electricity, heat, and steam
- **Scope 3 emissions**: All other indirect emissions across the value chain (all 15 GHG Protocol categories)
- **Methodology**: Must follow the GHG Protocol Corporate Standard and Corporate Value Chain Standard
- **Assurance**: Emissions data must be independently verified by an assurance provider
- **Public disclosure**: Reports will be published on a publicly accessible platform administered by the California Air Resources Board (CARB)

## Timeline

- **October 2023**: SB 253 signed into law
- **January 2025**: CARB begins developing implementing regulations
- **2026**: Scope 1 and Scope 2 reporting begins (for FY2025 data)
- **2027**: Scope 3 reporting begins (for FY2026 data)
- **Limited assurance** required initially, with reasonable assurance phasing in

Note: Governor Newsom signed amendments in 2024 that delayed implementation and modified some provisions. Check CARB's website for the latest regulatory timeline.

## Compliance Steps

1. **Determine applicability**: Confirm whether your entity meets the revenue and California business thresholds
2. **Build GHG inventory**: Establish comprehensive Scope 1, 2, and 3 measurement following GHG Protocol
3. **Scope 3 preparation**: Begin Scope 3 measurement early — it's the most challenging and time-consuming component
4. **Engage assurance provider**: Select an assurance provider familiar with GHG Protocol requirements
5. **Data systems**: Build or upgrade systems for annual emissions calculation and reporting
6. **Monitor CARB regulations**: Track CARB's rulemaking for specific reporting format and submission requirements
7. **Coordinate with other frameworks**: Align SB 253 reporting with SEC, CSRD, CDP, and SBTi requirements to avoid duplication

## Penalties

- **CARB enforcement**: Administrative penalties for non-compliance or inaccurate reporting
- **Maximum penalty**: Up to $500,000 per reporting year (as amended)
- **No private right of action**: SB 253 does not create a private cause of action for citizens to sue companies
- **Safe harbor**: Limited safe harbor for Scope 3 emissions reporting, acknowledging data challenges

## How Council Fire Can Help

Council Fire helps companies prepare for SB 253 compliance — from GHG inventory development (including the challenging Scope 3 categories) through assurance readiness and integration with other reporting frameworks. [Contact us](https://www.councilfire.org/contact) for SB 253 support."""
    },

    "california-climate-related-financial-risk-act": {
        "title": "California Climate-Related Financial Risk Act (SB 261)",
        "description": "Guide to California's SB 261 requiring large companies to disclose climate-related financial risks following TCFD recommendations.",
        "category": "US Regulation",
        "faqs": [
            ("How does SB 261 differ from SB 253?", "SB 253 requires GHG emissions disclosure (Scopes 1, 2, 3). SB 261 requires climate-related financial risk disclosure following TCFD. They are complementary — SB 253 covers what you emit, SB 261 covers the financial risks climate poses to your business. SB 261 has a lower revenue threshold ($500M vs. $1B) and broader scope."),
            ("What TCFD disclosures are required?", "SB 261 requires disclosure aligned with TCFD's four pillars: Governance (how the board and management oversee climate risks), Strategy (climate-related risks, opportunities, and scenario analysis), Risk Management (processes for identifying and managing climate risks), and Metrics & Targets (metrics used to assess and manage climate risks)."),
            ("Is scenario analysis required under SB 261?", "SB 261 references TCFD recommendations, which include scenario analysis. While the law doesn't prescribe specific scenarios, TCFD recommends analysis under at least a 2°C or lower scenario. Companies should prepare scenario analysis as part of their compliance approach.")
        ],
        "body": """## What Is SB 261?

The Climate-Related Financial Risk Act (Senate Bill 261), signed into law in October 2023, requires large companies doing business in California to prepare and publish climate-related financial risk reports aligned with the Task Force on Climate-related Financial Disclosures (TCFD) framework.

While SB 253 focuses on emissions data, SB 261 addresses the financial risks that climate change poses to businesses — physical risks from extreme weather and chronic changes, and transition risks from the shift to a low-carbon economy.

## Who It Applies To

SB 261 applies to entities that:
- Have total annual revenues exceeding **$500 million** (lower threshold than SB 253)
- **Do business in California** per Franchise Tax Board definitions

This covers a broader set of companies than SB 253, including many mid-size companies that wouldn't meet the $1 billion threshold.

## Key Requirements

Companies must publish biennial reports (every two years) disclosing:

**Governance**: Board and management oversight of climate-related risks and opportunities

**Strategy**: Climate-related risks and opportunities the company has identified over the short, medium, and long term, including their impact on business, strategy, and financial planning. Scenario analysis is expected per TCFD guidance.

**Risk management**: Processes for identifying, assessing, and managing climate-related risks, and integration with overall risk management

**Metrics and targets**: Metrics used to assess climate-related risks and opportunities, GHG emissions data, and targets

Reports must be published on the company's website and made publicly accessible.

## Timeline

- **October 2023**: SB 261 signed into law
- **2024**: CARB begins implementing regulations
- **2026**: First biennial reports due (covering FY2025 climate-related financial risks)
- **Reports due biennially** thereafter

## Compliance Steps

1. **Assess applicability**: Confirm revenue threshold and California business presence
2. **Familiarize with TCFD**: Review TCFD recommendations and implementation guidance
3. **Governance setup**: Document board and management climate risk oversight structures
4. **Climate risk assessment**: Conduct comprehensive assessment of physical and transition risks
5. **Scenario analysis**: Develop at least two climate scenarios (low-warming and high-warming)
6. **Financial impact quantification**: Estimate financial impacts of identified risks
7. **Draft TCFD-aligned report**: Prepare disclosure covering all four TCFD pillars
8. **Publish**: Make the report publicly available on your website and submit to CARB

## Penalties

- Administrative penalties up to **$50,000 per reporting year** for non-compliance
- No private right of action
- CARB enforcement through administrative proceedings

## How Council Fire Can Help

Council Fire conducts TCFD-aligned climate risk assessments that satisfy SB 261 requirements while providing genuine strategic value. We combine climate science, financial analysis, and scenario modeling to create reports that meet regulatory expectations. [Contact us](https://www.councilfire.org/contact) for SB 261 compliance support."""
    },

    "cbam-carbon-border-adjustment-mechanism": {
        "title": "CBAM: Carbon Border Adjustment Mechanism",
        "description": "Guide to the EU's Carbon Border Adjustment Mechanism — how it works, affected sectors, reporting requirements, and compliance obligations for importers.",
        "category": "EU Regulation",
        "faqs": [
            ("What is CBAM?", "CBAM is the EU's carbon border tax. It requires importers of certain goods into the EU to purchase CBAM certificates reflecting the embedded carbon in their imports, equivalent to the carbon price EU producers pay under the ETS. This prevents 'carbon leakage' — companies moving production to countries without carbon pricing."),
            ("Which products are covered?", "CBAM currently covers: iron and steel, aluminum, cement, fertilizers, electricity, and hydrogen. The EU plans to expand coverage to additional sectors as the mechanism matures, potentially including organic chemicals, polymers, and other carbon-intensive products."),
            ("How does CBAM affect non-EU manufacturers?", "Non-EU manufacturers exporting to the EU will need to provide emissions data to their EU importers. If they can demonstrate that a carbon price has already been paid in their home country, this is deducted from the CBAM liability. Companies in countries without carbon pricing face the full CBAM cost — creating a competitive incentive to decarbonize.")
        ],
        "body": """## What Is CBAM?

The Carbon Border Adjustment Mechanism (CBAM) is the EU's policy to prevent carbon leakage by placing a carbon price on imports of certain carbon-intensive goods. It ensures that imported products face the same carbon costs as products manufactured within the EU under the Emissions Trading System (ETS).

CBAM is designed to maintain the competitiveness of EU industry as carbon prices rise under the ETS, while encouraging trading partners to adopt their own climate policies.

## Who It Applies To

- **EU importers** of CBAM-covered goods: Must report embedded emissions and purchase CBAM certificates
- **Non-EU manufacturers**: Must provide emissions data to EU importers
- **Covered sectors**: Iron and steel, aluminum, cement, fertilizers, electricity, hydrogen

## Key Requirements

**Transitional period (October 2023 - December 2025):**
- EU importers must submit quarterly CBAM reports detailing embedded emissions in imported goods
- No financial obligation during this period — reporting only
- Default values available where actual data is unavailable

**Definitive regime (January 2026 onwards):**
- EU importers must purchase CBAM certificates from their national authority
- Certificate price linked to the weekly average EU ETS auction price
- Number of certificates = embedded emissions in imported goods
- Deductions available for: carbon prices already paid in the country of origin, free ETS allowances (phased out by 2034)

**Emissions calculation:**
- Direct emissions from the production process
- Indirect emissions from electricity used in production (for certain products)
- Specific calculation methodologies per product category

## Timeline

- **October 2023**: Transitional period began (quarterly reporting)
- **January 2025**: Reporting using actual emissions data required (default values restricted)
- **January 2026**: Definitive CBAM enters force — financial obligations begin
- **2026-2034**: CBAM certificates phased in as free ETS allowances are phased out

## Compliance Steps

1. **Identify affected imports**: Review your supply chain for CBAM-covered products imported into the EU
2. **Engage non-EU suppliers**: Request actual emissions data for covered products
3. **Register as authorized declarant**: EU importers must register with their national CBAM authority
4. **Submit quarterly reports**: During transitional period, report embedded emissions
5. **Calculate embedded emissions**: Use actual data from producers or authorized default values
6. **Purchase CBAM certificates**: From 2026, purchase certificates to cover embedded emissions
7. **Track carbon prices paid abroad**: Document any carbon prices paid in the country of origin for deductions

## Penalties

- **Transitional period**: Penalties for late or incomplete reporting (€10-50 per tonne of unreported emissions)
- **Definitive regime**: Penalties equivalent to ETS penalties for unreported emissions (€100 per tonne, adjusted for inflation, plus the obligation to purchase missing certificates)

## How Council Fire Can Help

Council Fire helps EU importers and non-EU exporters navigate CBAM compliance — from supply chain mapping and emissions calculation through reporting systems and certificate management. [Contact us](https://www.councilfire.org/contact) for CBAM support."""
    },

    "tnfd-taskforce-nature-related-financial-disclosures": {
        "title": "TNFD: Taskforce on Nature-related Financial Disclosures",
        "description": "Guide to the TNFD framework for assessing and disclosing nature-related risks, opportunities, and impacts — including the LEAP approach and recommended disclosures.",
        "category": "Global Framework",
        "faqs": [
            ("Is TNFD mandatory?", "TNFD itself is a voluntary framework, but its recommendations are being incorporated into mandatory regulations. CSRD ESRS E4 (Biodiversity) is closely aligned with TNFD. ISSB is considering nature-related disclosure. Several stock exchanges and regulators are encouraging or requiring TNFD-aligned reporting. Over 1,000 organizations have committed to TNFD adoption."),
            ("How does TNFD relate to TCFD?", "TNFD is designed as the nature equivalent of TCFD. It follows the same four-pillar structure (Governance, Strategy, Risk Management, Metrics & Targets) and uses a similar approach. However, TNFD adds nature-specific elements: the LEAP assessment approach, location-specific analysis, and consideration of dependencies on nature as well as impacts."),
            ("What is the LEAP approach?", "LEAP is TNFD's core assessment methodology: Locate your interface with nature (where your operations and value chains interact with ecosystems), Evaluate your dependencies and impacts on nature, Assess your nature-related risks and opportunities, and Prepare to respond and report. It provides a systematic approach to understanding your organization's relationship with nature.")
        ],
        "body": """## What Is TNFD?

The Taskforce on Nature-related Financial Disclosures (TNFD) published its final recommendations in September 2023, providing a framework for organizations to assess, manage, and disclose nature-related risks, opportunities, and impacts. Modeled on the TCFD for climate, TNFD addresses the broader crisis of biodiversity loss and ecosystem degradation.

Nature-related risks are financially material. Over half of global GDP ($44 trillion) depends on nature. Biodiversity loss, ecosystem degradation, water scarcity, and deforestation create supply chain disruptions, regulatory risks, reputational risks, and stranded asset risks.

## Who It Applies To

TNFD is voluntary but relevant to:
- **All companies** with significant nature-related dependencies or impacts
- **CSRD-reporting companies** (ESRS E4 aligns with TNFD)
- **Financial institutions** managing portfolios exposed to nature-related risks
- **Companies in nature-dependent sectors**: agriculture, food, forestry, mining, construction, pharmaceuticals, utilities
- **Companies committing to the Global Biodiversity Framework** targets

Over 1,000 organizations have signed up as TNFD early adopters.

## Key Requirements

**Four-pillar disclosure structure:**

1. **Governance**: Board and management oversight of nature-related dependencies, impacts, risks, and opportunities
2. **Strategy**: Nature-related risks and opportunities, their impact on business strategy, and the resilience of the strategy under different scenarios
3. **Risk and impact management**: Processes for identifying, assessing, prioritizing, and managing nature-related risks and impacts
4. **Metrics and targets**: Metrics and targets used to assess and manage nature-related issues

**LEAP approach for assessment:**
- **Locate**: Map where your operations and value chain interface with nature using spatial data
- **Evaluate**: Assess your dependencies on ecosystem services and your impacts on nature
- **Assess**: Determine nature-related risks and opportunities arising from dependencies and impacts
- **Prepare**: Develop response strategies and prepare for reporting

**Additional TNFD-specific elements:**
- Location-specific analysis (nature impacts vary by geography)
- Dependencies AND impacts (not just risks)
- Consideration of all four realms of nature: land, ocean, freshwater, atmosphere

## Recommended Metrics

TNFD recommends core metrics organized by:
- **General**: Governance, strategy, risk management disclosures
- **Sector-specific**: Metrics relevant to specific industries
- **Location-specific**: Spatial metrics for operations in or near biodiversity-sensitive areas

Key metrics include:
- Area of operations in or near KBAs and protected areas
- Extent of land-use change and habitat conversion
- Water withdrawal and consumption in stressed basins
- Pollutant releases to air, water, and soil
- Dependencies on ecosystem services by location

## Timeline

- **September 2023**: Final TNFD recommendations published
- **2024-2025**: Early adopter reporting begins; sector guidance published
- **2025+**: Regulatory integration (CSRD E4, potential ISSB nature standard)
- **2030**: Expected widespread adoption aligned with GBF targets

## Compliance Steps

1. **Conduct LEAP assessment**: Systematically assess your nature interface, dependencies, impacts, and risks
2. **Map priority locations**: Identify operations and supply chain nodes in or near biodiversity-sensitive areas
3. **Assess dependencies and impacts**: Use tools like ENCORE, IBAT, and Biodiversity Risk Filter
4. **Evaluate risks and opportunities**: Translate nature-related dependencies and impacts into financial risks and opportunities
5. **Set targets**: Develop nature-related targets aligned with SBTN and GBF
6. **Report**: Publish TNFD-aligned disclosures through your sustainability report

## How Council Fire Can Help

Council Fire helps organizations implement the TNFD framework — from LEAP assessments and biodiversity risk screening through strategy development and TNFD-aligned disclosure. [Contact us](https://www.councilfire.org/contact) for TNFD support."""
    },

    "issb-ifrs-sustainability-standards": {
        "title": "ISSB: IFRS Sustainability Disclosure Standards (S1 & S2)",
        "description": "Guide to the ISSB's IFRS S1 and S2 sustainability disclosure standards — requirements, adoption status, and how they interact with other frameworks.",
        "category": "Global Framework",
        "faqs": [
            ("What's the difference between IFRS S1 and S2?", "IFRS S1 (General Requirements) establishes the overall framework for sustainability-related financial disclosure — it requires companies to disclose material information about sustainability risks and opportunities across all topics. IFRS S2 (Climate-related Disclosures) provides specific requirements for climate disclosure, including GHG emissions, transition plans, and scenario analysis. S2 is a topical application of S1's general framework."),
            ("Which countries have adopted ISSB standards?", "As of early 2026, jurisdictions adopting or basing requirements on ISSB include: UK, Australia, Canada, Japan, Singapore, Hong Kong, Nigeria, Turkey, Brazil, and several others. Each jurisdiction may modify adoption (e.g., phased implementation, proportionality for smaller companies). The EU has its own standards (ESRS) but has committed to interoperability with ISSB."),
            ("How does ISSB differ from CSRD/ESRS?", "ISSB focuses on financially material information for investors (single materiality). CSRD/ESRS requires double materiality — both financial impacts and impacts on people/environment. ISSB is less prescriptive and has fewer datapoints. ESRS has more detailed, granular requirements. Companies in scope for both can use ESRS to satisfy much of ISSB, but differences exist in some areas.")
        ],
        "body": """## What Are IFRS S1 and S2?

The International Sustainability Standards Board (ISSB), part of the IFRS Foundation, published its first two sustainability disclosure standards in June 2023:

- **IFRS S1 — General Requirements for Disclosure of Sustainability-related Financial Information**: Establishes the framework for disclosing material sustainability-related risks and opportunities
- **IFRS S2 — Climate-related Disclosures**: Specific requirements for climate-related disclosure, building on TCFD recommendations

Together, they create a global baseline for investor-focused sustainability disclosure, designed to be adopted by individual jurisdictions alongside their existing financial reporting requirements.

## Who They Apply To

ISSB standards apply when adopted by national jurisdictions. Application varies:
- **UK**: Sustainability Disclosure Requirements based on ISSB, phased from 2025
- **Australia**: Mandatory climate disclosure based on ISSB from 2025
- **Canada**: ISSB-based climate disclosure for large companies from 2025
- **Japan**: ISSB-aligned disclosure from 2025
- **Singapore, Hong Kong**: Phased adoption from 2025-2027
- Additional jurisdictions are in consultation or adoption processes

## Key Requirements

**IFRS S1 — General Requirements:**
- Disclose material information about sustainability-related risks and opportunities that could reasonably be expected to affect cash flows, access to finance, or cost of capital
- Cover all sustainability topics, not just climate
- Apply single (financial) materiality
- Follow four TCFD pillars: Governance, Strategy, Risk Management, Metrics & Targets
- Connected with financial statements — sustainability information should be consistent with financial reporting

**IFRS S2 — Climate-related Disclosures:**
- Governance: Board and management oversight of climate-related risks and opportunities
- Strategy: Climate-related risks and opportunities, their effects, climate resilience assessment (scenario analysis)
- Risk management: Processes for identifying, assessing, prioritizing, and monitoring climate risks
- Metrics and targets: Scope 1, 2, and 3 GHG emissions, transition plan disclosures, climate-related targets

**Cross-cutting requirements:**
- Disclose in connection with related financial statements
- Report at the same time and for the same period as financial statements
- Include comparative information
- Use reasonable and supportable information without undue cost or effort

## Timeline

- **June 2023**: IFRS S1 and S2 published
- **January 2024**: Standards effective for annual reporting periods beginning on or after this date
- **2024-2026**: National jurisdictions adopting and transposing into local requirements
- **Transition reliefs**: Companies applying for the first time can claim various reliefs, including exemption from Scope 3 and comparative data in the first year

## Compliance Steps

1. **Determine jurisdiction requirements**: Check whether your jurisdiction has adopted ISSB and any local modifications
2. **Assess materiality**: Identify sustainability topics creating financial risks or opportunities (financial materiality focus)
3. **Climate disclosure preparation**: Build GHG inventory (Scopes 1, 2, 3), conduct climate scenario analysis, document transition plans
4. **Governance documentation**: Ensure board and management roles in sustainability oversight are clearly defined
5. **Integration with financial reporting**: Ensure consistency between sustainability and financial disclosures
6. **Metrics and targets**: Establish measurable targets for material sustainability topics
7. **Reporting**: Prepare disclosures as part of general purpose financial reports

## How Council Fire Can Help

Council Fire helps organizations implement ISSB-aligned disclosure — from materiality assessment and GHG inventory through scenario analysis and integrated reporting. We navigate the intersection of ISSB, CSRD, and national requirements. [Contact us](https://www.councilfire.org/contact) for ISSB implementation support."""
    },

    "uk-sustainability-disclosure-requirements": {
        "title": "UK Sustainability Disclosure Requirements (SDR)",
        "description": "Guide to the UK's Sustainability Disclosure Requirements framework, including ISSB-based corporate reporting and FCA investment product labeling rules.",
        "category": "UK Regulation",
        "faqs": [
            ("What are the UK SDR requirements?", "UK SDR has two components: (1) corporate sustainability disclosure based on ISSB standards (IFRS S1/S2), being introduced by the FCA and UK government for listed companies and large entities; and (2) investment product sustainability labeling rules for asset managers, requiring anti-greenwashing standards and sustainability labels for financial products."),
            ("When do UK companies need to comply?", "The UK is taking a phased approach. The FCA has endorsed ISSB as the basis for UK corporate reporting. Large listed companies are expected to report from 2025-2026, with expansion to other entities over time. Investment product labeling rules took effect from November 2024 for anti-greenwashing provisions."),
            ("How does UK SDR compare to EU CSRD?", "UK SDR is based on ISSB (single/financial materiality) while CSRD uses ESRS (double materiality). UK SDR is generally less prescriptive than CSRD. UK companies with EU subsidiaries may need to comply with both. The UK government has indicated willingness to ensure interoperability between UK and EU frameworks.")
        ],
        "body": """## What Are UK Sustainability Disclosure Requirements?

The UK Sustainability Disclosure Requirements (SDR) represent the UK's post-Brexit approach to sustainability disclosure regulation. The framework consists of:

1. **Corporate reporting**: ISSB-based sustainability disclosure for companies
2. **Investment labels**: FCA sustainability product labeling regime for asset managers
3. **Anti-greenwashing**: Rules preventing misleading sustainability claims

The UK endorsed ISSB standards as the basis for its corporate sustainability reporting framework, adapting them for the UK context.

## Who It Applies To

**Corporate reporting:**
- UK-listed companies (Premium and Standard Listing segments)
- Phased expansion to large private companies and LLPs
- Expected to cover companies exceeding size thresholds similar to Companies Act reporting requirements

**Investment product labels:**
- FCA-regulated asset managers
- Firms marketing investment products in the UK
- Applies to UK-domiciled funds and portfolio management services

## Key Requirements

**Corporate sustainability reporting (ISSB-based):**
- Disclose sustainability-related financial information following IFRS S1 and S2 (as endorsed for UK use)
- Governance, strategy, risk management, metrics and targets for material sustainability topics
- Climate-specific disclosures including Scope 1, 2, and 3 emissions
- Scenario analysis and transition plan disclosures
- Consistency with financial statements

**Investment product labeling:**
- Four sustainability labels: Sustainability Focus, Sustainability Improvers, Sustainability Impact, Sustainability Mixed Goals
- Qualifying criteria including investment strategy, KPIs, stewardship approach
- Anti-greenwashing rule: sustainability-related claims must be fair, clear, and not misleading
- Consumer-facing disclosure requirements and detailed product-level reports

**Transition Plan Taskforce (TPT):**
- UK-specific framework for transition plan disclosures
- Complements ISSB/TCFD with detailed guidance on climate transition planning
- Expected to become part of formal disclosure requirements

## Timeline

- **2023**: FCA published SDR policy statement for investment products
- **November 2024**: Anti-greenwashing rule took effect
- **December 2024**: Naming and marketing rules for investment products
- **2025-2026**: First sustainability labels applied; corporate ISSB-based reporting begins for largest companies
- **2026+**: Phased expansion to additional companies

## Compliance Steps

**For corporates:**
1. Assess which ISSB requirements apply under UK endorsement
2. Build GHG inventory and climate risk assessment capabilities
3. Develop transition plan following TPT framework
4. Prepare ISSB-aligned disclosures integrated with financial reporting
5. Engage with auditors/assurers on sustainability information

**For asset managers:**
1. Review product range against sustainability labeling criteria
2. Assess eligibility for sustainability labels
3. Ensure all sustainability claims meet anti-greenwashing standards
4. Prepare consumer-facing and detailed disclosure documents
5. Implement ongoing monitoring and reporting

## How Council Fire Can Help

Council Fire helps UK companies and asset managers navigate SDR requirements — from ISSB implementation and transition plan development through investment product labeling compliance. [Contact us](https://www.councilfire.org/contact) for UK SDR support."""
    },

    "german-supply-chain-due-diligence-act": {
        "title": "German Supply Chain Due Diligence Act (LkSG)",
        "description": "Guide to Germany's Supply Chain Due Diligence Act (Lieferkettensorgfaltspflichtengesetz) — requirements, scope, due diligence obligations, and enforcement.",
        "category": "EU Regulation",
        "faqs": [
            ("Which companies does LkSG apply to?", "Since January 2024, LkSG applies to companies with their registered office, principal place of business, or administrative headquarters in Germany that employ at least 1,000 workers (including temporary workers). This covers approximately 4,800 companies. The law also applies to foreign companies with a branch in Germany meeting the employee threshold."),
            ("What's the relationship between LkSG and the EU CSDDD?", "The EU Corporate Sustainability Due Diligence Directive (CSDDD) will eventually supersede or complement national due diligence laws like Germany's LkSG and France's Duty of Vigilance Law. CSDDD is broader in scope (covering environmental impacts more extensively and introducing civil liability) and will apply across all EU member states. Companies should comply with LkSG now while preparing for CSDDD."),
            ("Does LkSG require action on indirect suppliers?", "LkSG primarily requires due diligence for direct (tier 1) suppliers with risk-based due diligence for indirect suppliers. However, when a company obtains 'substantiated knowledge' of human rights or environmental violations at indirect suppliers, it must take appropriate action — including investigating, developing a remediation plan, and potentially suspending or terminating the business relationship.")
        ],
        "body": """## What Is the LkSG?

The German Supply Chain Due Diligence Act (Lieferkettensorgfaltspflichtengesetz, LkSG), effective since January 2023, requires large companies in Germany to establish due diligence processes to prevent human rights and environmental violations in their supply chains.

Germany was one of the first major economies to enact mandatory supply chain due diligence legislation, following France's Duty of Vigilance Law (2017). The LkSG reflects growing global expectations that companies are responsible for conditions throughout their value chains.

## Who It Applies To

- **From January 2023**: Companies with 3,000+ employees in Germany
- **From January 2024**: Companies with 1,000+ employees in Germany
- Applies to companies with registered office, principal place of business, or administrative headquarters in Germany
- Foreign companies with a German branch meeting the employee threshold are also covered
- Employee count includes temporary workers

## Key Requirements

**Due diligence obligations (based on UN Guiding Principles):**

1. **Risk management system**: Establish a risk management process integrated into business functions
2. **Risk analysis**: Conduct regular and ad hoc risk assessments for your own operations and direct suppliers
3. **Preventive measures**: Implement policies, training, procurement practices, and contractual assurances to prevent violations
4. **Remedial action**: Take corrective measures when violations are identified — from requiring corrective action plans to suspending or terminating supplier relationships
5. **Grievance mechanism**: Establish an accessible complaints procedure for affected persons and whistleblowers
6. **Documentation and reporting**: Document due diligence activities and submit an annual report to BAFA (the Federal Office for Economic Affairs and Export Control)

**Covered risks:**
- Human rights: forced labor, child labor, slavery, discrimination, unsafe working conditions, freedom of association, living wages, land rights
- Environmental: mercury, POPs, hazardous waste (specifically referenced conventions), plus environmental violations that lead to human rights impacts

**Scope of obligations:**
- **Own operations**: Full due diligence obligations
- **Direct suppliers**: Full due diligence obligations including contractual assurances
- **Indirect suppliers**: Risk-based due diligence when "substantiated knowledge" of violations exists

## Timeline

- **January 2023**: Law took effect for companies with 3,000+ employees
- **January 2024**: Extended to companies with 1,000+ employees
- **Annual**: Companies must submit due diligence reports to BAFA by April 30 of the following year
- **Ongoing**: BAFA can initiate investigations based on complaints or its own initiative

## Compliance Steps

1. **Appoint a human rights officer**: Designate a responsible person for supply chain due diligence
2. **Establish risk management**: Integrate supply chain due diligence into existing risk management processes
3. **Conduct risk analysis**: Map direct suppliers, assess country and sector risks, prioritize high-risk relationships
4. **Develop policy statement**: Publish a human rights policy covering your own operations and supply chain
5. **Implement preventive measures**: Training, procurement guidelines, contractual clauses, supplier audits
6. **Set up grievance mechanism**: Accessible, confidential, and effective complaints procedure
7. **Develop remedial action processes**: Clear procedures for responding when violations are identified
8. **Document and report**: Maintain records and submit annual reports to BAFA

## Penalties

- **Fines**: Up to €8 million or up to 2% of average annual worldwide turnover (for companies with >€400M turnover)
- **Exclusion from public procurement**: Companies can be excluded from public contracts for up to 3 years
- **BAFA enforcement**: BAFA can order specific measures, conduct inspections, and impose coercive fines
- **No civil liability**: LkSG explicitly does not create a new basis for civil liability (unlike the upcoming CSDDD)

## How Council Fire Can Help

Council Fire supports companies in implementing LkSG-compliant supply chain due diligence systems — from risk analysis and supplier assessment through grievance mechanisms and annual reporting. [Contact us](https://www.councilfire.org/contact) for LkSG compliance support."""
    },

    "epa-greenhouse-gas-reporting-program": {
        "title": "EPA Greenhouse Gas Reporting Program (GHGRP)",
        "description": "Guide to the US EPA's Greenhouse Gas Reporting Program — who must report, what to report, and how the program works for facilities and suppliers.",
        "category": "US Regulation",
        "faqs": [
            ("Who must report under EPA GHGRP?", "Facilities that emit 25,000 metric tons CO2e or more per year must report. This covers approximately 8,000 facilities across sectors including power plants, refineries, chemical manufacturers, metals producers, pulp and paper mills, and others. Fuel and industrial gas suppliers above certain thresholds must also report."),
            ("How does EPA GHGRP differ from corporate GHG reporting?", "EPA GHGRP is facility-level reporting of direct emissions using EPA-specified methodologies. Corporate GHG reporting (GHG Protocol) covers the entire organization across all scopes. Companies may use GHGRP data as inputs to their corporate Scope 1 inventory, but GHGRP doesn't cover Scope 2 or 3."),
            ("What happens if my facility exceeds the 25,000 tCO2e threshold?", "You must begin reporting for the year in which you exceed the threshold. Reports are due by March 31 of the following year. You must continue reporting until your emissions fall below 15,000 tCO2e for 5 consecutive years (or below 25,000 tCO2e for 3 years).")
        ],
        "body": """## What Is the EPA GHGRP?

The EPA Greenhouse Gas Reporting Program (40 CFR Part 98), established in 2009, requires large direct emitters of greenhouse gases in the United States to report their emissions annually to the EPA. The program covers approximately 8,000 facilities responsible for roughly 85-90% of US GHG emissions.

GHGRP is a facility-level reporting program distinct from corporate sustainability reporting. It provides the US government with comprehensive, standardized emissions data for policy-making, public transparency, and environmental monitoring.

## Who It Applies To

**Direct emitters (Subparts C-SS):**
- Facilities emitting 25,000 metric tons CO2e or more per year
- Covers 41 source categories including: power plants, petroleum refineries, chemical manufacturing, metals production, cement, glass, pulp and paper, food processing, waste management

**Suppliers (Subparts LL-QQ):**
- Fuel and industrial gas suppliers above specified thresholds
- Suppliers of petroleum products, natural gas, industrial gases, and CO2

## Key Requirements

- **Annual reporting**: Submit facility-level GHG emissions data to EPA by March 31 each year (for the prior calendar year)
- **Source-specific methodologies**: Use EPA-prescribed calculation methods for each source category (Subparts C through SS)
- **All six greenhouse gases**: Report CO2, CH4, N2O, HFCs, PFCs, SF6, and NF3 where applicable
- **Monitoring and measurement**: Use specified monitoring equipment, emission factors, and calculation methodologies
- **Verification**: EPA conducts data quality checks and may request additional documentation
- **Public reporting**: Most GHGRP data is publicly available through EPA's FLIGHT tool

## Covered Greenhouse Gases

- Carbon dioxide (CO2)
- Methane (CH4)
- Nitrous oxide (N2O)
- Hydrofluorocarbons (HFCs)
- Perfluorocarbons (PFCs)
- Sulfur hexafluoride (SF6)
- Nitrogen trifluoride (NF3)

All reported in metric tons of CO2 equivalent using EPA-specified Global Warming Potentials.

## Timeline

- **2009**: EPA GHGRP rule finalized
- **2010**: First year of data collection for most source categories
- **Annual**: Reports due by March 31 for prior calendar year
- **Ongoing**: EPA periodically updates methodologies and adds source categories

## Compliance Steps

1. **Determine applicability**: Calculate whether your facility exceeds the 25,000 tCO2e threshold
2. **Identify source categories**: Determine which GHGRP subparts apply to your operations
3. **Implement monitoring**: Install required monitoring equipment and establish data collection procedures
4. **Calculate emissions**: Apply EPA-specified methodologies for each source category
5. **Submit via e-GGRT**: Report through EPA's electronic Greenhouse Gas Reporting Tool
6. **Maintain records**: Keep all supporting documentation for at least 3 years
7. **Respond to EPA inquiries**: Be prepared to provide additional documentation if EPA requests verification

## Penalties

- **Civil penalties**: Up to $63,229 per day per violation (adjusted annually for inflation)
- **Criminal penalties**: For knowingly violating reporting requirements, falsifying data, or tampering with monitoring equipment
- **EPA enforcement actions**: Compliance orders, consent decrees, and injunctive relief

## How Council Fire Can Help

Council Fire helps facilities navigate EPA GHGRP compliance — from applicability assessment and monitoring setup through emissions calculation and reporting. We also integrate GHGRP data with broader corporate GHG inventories. [Contact us](https://www.councilfire.org/contact) for EPA GHGRP support."""
    },

    "inflation-reduction-act-climate-provisions": {
        "title": "Inflation Reduction Act: Climate Provisions",
        "description": "Guide to the climate and clean energy provisions of the US Inflation Reduction Act — tax credits, grants, incentives, and opportunities for businesses and communities.",
        "category": "US Regulation",
        "faqs": [
            ("How much funding does the IRA provide for climate?", "The IRA allocates approximately $369 billion for energy security and climate change provisions over 10 years. However, because many incentives are uncapped tax credits, independent analyses estimate total climate spending could reach $800 billion to $1.2 trillion as adoption exceeds initial projections."),
            ("What are the key IRA tax credits for businesses?", "Major business tax credits include: Section 45Y Clean Electricity Production Tax Credit, Section 48E Clean Electricity Investment Tax Credit, Section 45X Advanced Manufacturing Production Tax Credit, Section 45V Clean Hydrogen Production Tax Credit, and Section 179D Energy Efficient Commercial Buildings Deduction. Many credits include bonus adders for domestic content, energy communities, and prevailing wage/apprenticeship compliance."),
            ("Does the IRA include penalties or mandates?", "The IRA includes a methane emissions charge for oil and gas facilities exceeding waste emissions thresholds — the first federal fee on GHG emissions. It also tightens EPA enforcement funding and includes provisions that indirectly create compliance obligations. However, most IRA provisions are incentive-based rather than punitive.")
        ],
        "body": """## What Is the Inflation Reduction Act?

The Inflation Reduction Act (IRA), signed into law in August 2022, represents the largest climate investment in US history. Its energy security and climate provisions allocate approximately $369 billion (with uncapped credits likely exceeding $800 billion) for clean energy, transportation electrification, sustainable manufacturing, and environmental justice.

The IRA operates primarily through tax incentives, grants, and loans rather than mandates — making it an incentive-driven approach to decarbonization that creates enormous business opportunities.

## Who It Applies To

The IRA's climate provisions affect virtually every sector:
- **Energy companies**: Renewable energy production, storage, hydrogen, nuclear, carbon capture
- **Manufacturers**: Clean energy component manufacturing, electric vehicles
- **Commercial real estate**: Energy efficiency, clean energy installations
- **Transportation**: EV purchases, fleet electrification, sustainable aviation fuel
- **Agriculture**: Conservation, climate-smart practices, rural energy
- **Communities**: Environmental justice, energy community investments
- **Financial institutions**: Clean energy tax credit transferability creates new investment markets

## Key Provisions

**Clean energy tax credits:**
- **Section 45Y/48E**: Technology-neutral clean electricity production and investment tax credits (replacing PTC/ITC from 2025)
- **Section 45V**: Clean hydrogen production tax credit ($0.60-$3.00/kg based on lifecycle emissions)
- **Section 45Q**: Enhanced carbon capture tax credit ($85/tonne for geological storage, $60/tonne for utilization)
- **Section 45X**: Advanced manufacturing production tax credit for US-made solar, wind, battery, and critical mineral components

**Transportation electrification:**
- **Section 30D**: Clean vehicle tax credit up to $7,500 for new EVs meeting domestic assembly and critical mineral requirements
- **Section 25E**: Previously owned clean vehicle credit up to $4,000
- **Section 45W**: Commercial clean vehicle credit up to $40,000 for commercial EVs

**Buildings and efficiency:**
- **Section 179D**: Enhanced commercial building energy efficiency deduction (up to $5/sq ft)
- **Section 25C**: Residential energy efficiency tax credits for heat pumps, insulation, windows
- **Section 48E bonus**: Solar, storage, and other clean energy on commercial buildings

**Environmental justice and communities:**
- **Greenhouse Gas Reduction Fund**: $27 billion for green financing, especially in disadvantaged communities
- **Environmental and Climate Justice Block Grants**: $3 billion for community-led projects
- **Energy community bonus credits**: Additional 10% tax credit for projects in energy communities

**Agriculture and land use:**
- Conservation programs funding increase ($19.5 billion)
- Climate-smart agriculture incentives
- Rural energy programs

## Bonus Credit Adders

Many IRA credits include bonus provisions that can significantly increase value:
- **Prevailing wage and apprenticeship**: 5x base credit amount for meeting labor standards
- **Domestic content**: Additional 10% bonus for US-manufactured components
- **Energy community**: Additional 10% bonus for projects in coal communities or brownfields
- **Low-income community**: Additional 10-20% bonus for projects in low-income areas

## Methane Emissions Charge

Starting 2024, the IRA imposes a charge on oil and gas facilities exceeding waste methane emissions thresholds:
- **2024**: $900/tonne of methane above threshold
- **2025**: $1,200/tonne
- **2026+**: $1,500/tonne
- Exempts facilities emitting less than 25,000 tCO2e and those in compliance with EPA methane regulations

## Timeline

- **August 2022**: IRA signed into law
- **2023-2024**: Treasury and IRS issued proposed and final guidance on major provisions
- **2024**: Methane fee begins; most tax credits available
- **2025**: Technology-neutral credits (45Y/48E) replace technology-specific credits
- **Through 2032+**: Most credits available for 10+ years, providing investment certainty

## How Council Fire Can Help

Council Fire helps organizations identify and capture IRA incentives — from tax credit eligibility assessment and project structuring through compliance documentation and bonus credit qualification. [Contact us](https://www.councilfire.org/contact) to maximize your IRA opportunities."""
    },

    "european-deforestation-regulation": {
        "title": "European Deforestation Regulation (EUDR)",
        "description": "Guide to the EU Deforestation Regulation — requirements for companies placing forest-risk commodities on the EU market, due diligence obligations, and compliance timeline.",
        "category": "EU Regulation",
        "faqs": [
            ("What products does the EUDR cover?", "EUDR covers seven commodities and their derived products: cattle (including leather and beef), cocoa (including chocolate), coffee, oil palm (including palm oil), rubber, soya (including soy meal and soy oil), and wood (including timber, paper, printed products, charcoal, and furniture). The regulation covers both raw commodities and processed products."),
            ("What is the December 2020 cutoff date?", "EUDR prohibits placing products on the EU market if they are linked to land that was deforested or degraded after December 31, 2020. Companies must demonstrate through due diligence that their products are 'deforestation-free' — meaning no deforestation or forest degradation occurred after this date on the land where the commodity was produced."),
            ("Does EUDR apply to non-EU companies?", "EUDR applies to any operator or trader placing covered products on the EU market or exporting them from the EU, regardless of where the company is headquartered. Non-EU producers are indirectly affected as their EU buyers must conduct due diligence on the products they import. This creates de facto requirements for suppliers globally.")
        ],
        "body": """## What Is the EUDR?

The EU Deforestation Regulation (Regulation 2023/1115), adopted in June 2023, prohibits the placement on the EU market — and export from the EU — of certain commodities and products linked to deforestation or forest degradation. It replaces the weaker EU Timber Regulation and significantly expands the scope of commodities covered and the rigor of due diligence required.

The EUDR reflects the EU's commitment to reducing its global deforestation footprint. The EU is a major consumer of forest-risk commodities, and consumer-driven deforestation is a leading cause of biodiversity loss and greenhouse gas emissions.

## Who It Applies To

- **Operators**: Companies that first place covered products on the EU market or export them. This includes importers, manufacturers, and producers.
- **Traders**: Companies that make covered products available on the EU market in the course of commercial activity (distributors, retailers).
- **SMEs**: Simplified due diligence requirements for small and medium enterprises that are traders (not operators).

The law applies regardless of where the company is headquartered — what matters is whether the product enters the EU market.

## Key Requirements

**Due diligence obligation:**
Companies must exercise due diligence before placing covered products on the EU market:

1. **Information collection**: Gather geolocation data of the land where the commodity was produced, including GPS coordinates of all plots of land. This is the most novel and challenging requirement.

2. **Risk assessment**: Assess the risk that the product is linked to deforestation or forest degradation after December 31, 2020. Consider country risk classification (low, standard, high risk — determined by European Commission), complexity of the supply chain, and presence of indigenous peoples and local communities.

3. **Risk mitigation**: If risk is identified, take adequate measures to mitigate it — this may include independent audits, satellite monitoring, supplier verification, and isotope testing.

**Deforestation-free requirement:**
Products must be produced on land that was not subject to deforestation or forest degradation after December 31, 2020. "Deforestation" means conversion of forest to agricultural use. "Forest degradation" means harvesting that is not sustainable.

**Legality requirement:**
Products must be produced in accordance with the relevant legislation of the country of production — including land use rights, environmental protection, labor rights, and trade regulations.

**Traceability requirement:**
Full supply chain traceability back to the plot of land where the commodity was produced, with geolocation coordinates.

## Covered Commodities and Products

| Commodity | Example Products |
|-----------|-----------------|
| Cattle | Beef, leather, gelatin |
| Cocoa | Chocolate, cocoa butter, cocoa powder |
| Coffee | Roasted coffee, instant coffee |
| Oil palm | Palm oil, palm kernel oil, oleochemicals |
| Rubber | Natural rubber, tires, latex |
| Soya | Soybean oil, soy meal, tofu |
| Wood | Timber, paper, furniture, charcoal, printed products |

## Timeline

- **June 2023**: EUDR entered into force
- **December 2024**: Originally planned to apply to operators and traders (postponed)
- **December 2025**: New application date for large operators and traders (after postponement)
- **June 2026**: Application date for SME traders
- **Ongoing**: European Commission to publish country benchmarking (low, standard, high risk)

## Compliance Steps

1. **Product scope assessment**: Identify which of your products fall under EUDR commodity categories
2. **Supply chain mapping**: Map supply chains back to production origins with geolocation data
3. **Due diligence system**: Establish or enhance due diligence processes for covered commodities
4. **Geolocation data collection**: Implement systems to collect GPS coordinates of production plots from suppliers
5. **Risk assessment**: Evaluate deforestation risk using satellite data, country risk classifications, and supply chain complexity
6. **Verification**: Verify deforestation-free status using satellite monitoring, field audits, and third-party certification
7. **Record-keeping**: Maintain due diligence records for 5 years
8. **Reporting**: Submit due diligence statements through the EU information system

## Penalties

- **Fines**: Up to 4% of total annual EU-wide turnover
- **Product confiscation**: Authorities can seize non-compliant products
- **Market exclusion**: Temporary prohibition from placing products on the EU market
- **Public naming**: Publication of non-compliant companies
- **Revenue confiscation**: Confiscation of revenues from transactions involving non-compliant products

## How Council Fire Can Help

Council Fire helps companies navigate EUDR compliance — from supply chain mapping and geolocation data collection through risk assessment systems and due diligence documentation. [Contact us](https://www.councilfire.org/contact) for EUDR compliance support."""
    },

    "corporate-sustainability-due-diligence-directive": {
        "title": "Corporate Sustainability Due Diligence Directive (CSDDD)",
        "description": "Guide to the EU's Corporate Sustainability Due Diligence Directive — scope, requirements, civil liability, and how it differs from national due diligence laws.",
        "category": "EU Regulation",
        "faqs": [
            ("How does CSDDD differ from Germany's LkSG?", "CSDDD is broader than LkSG in several ways: it covers environmental impacts more extensively (including climate change), it introduces civil liability (LkSG does not), it requires climate transition plans, it covers the full value chain (not just direct suppliers), and it will apply across all EU member states. Companies complying with LkSG will have a head start but need to expand their programs for CSDDD."),
            ("When does CSDDD take effect?", "CSDDD was adopted in 2024 and member states have until 2026 to transpose it into national law. Phase-in: companies with 5,000+ employees and €1.5B turnover from 2027; 3,000+ employees and €900M from 2028; 1,000+ employees and €450M from 2029. Non-EU companies meeting EU revenue thresholds are covered from 2029."),
            ("Does CSDDD create civil liability?", "Yes. CSDDD introduces civil liability for companies that fail to prevent adverse impacts through adequate due diligence. Affected persons can bring claims before EU courts for compensation. This is a significant departure from the German LkSG, which explicitly excluded civil liability, and creates direct legal exposure for companies and their directors.")
        ],
        "body": """## What Is CSDDD?

The Corporate Sustainability Due Diligence Directive (CSDDD, also known as CS3D), adopted by the EU in 2024, requires large companies to identify, prevent, mitigate, and account for adverse human rights and environmental impacts in their operations and value chains. It builds on existing national legislation (Germany's LkSG, France's Duty of Vigilance) but is broader in scope and introduces EU-wide civil liability.

CSDDD represents a fundamental shift in corporate accountability — companies are legally responsible not just for their own impacts but for adverse impacts throughout their chains of activities.

## Who It Applies To

**Phase-in based on size:**

| Phase | Year | Employees | Turnover |
|-------|------|-----------|----------|
| Phase 1 | 2027 | 5,000+ | €1.5B+ |
| Phase 2 | 2028 | 3,000+ | €900M+ |
| Phase 3 | 2029 | 1,000+ | €450M+ |

**Non-EU companies**: Companies from outside the EU with net turnover exceeding the relevant thresholds generated in the EU are also covered from 2029.

## Key Requirements

**Due diligence obligations (six-step process):**

1. **Integrate due diligence into policies**: Adopt and implement a due diligence policy describing the company's approach, code of conduct, and processes

2. **Identify and assess impacts**: Map actual and potential adverse human rights and environmental impacts in own operations, subsidiaries, and the chain of activities (business partners)

3. **Prevent, mitigate, and end impacts**: Take appropriate measures to prevent potential impacts and end or minimize actual impacts. This includes developing corrective action plans, seeking contractual assurances, making investments, and providing targeted support to business partners

4. **Monitor effectiveness**: Track due diligence implementation and effectiveness through qualitative and quantitative indicators

5. **Communicate**: Publicly report on due diligence through annual statements

6. **Provide remediation**: Provide remediation where the company has caused or contributed to adverse impacts, including financial compensation, rehabilitation, and engagement with affected stakeholders

**Climate transition plan:**
Companies in scope must adopt and implement a transition plan for climate change mitigation aligned with the Paris Agreement's 1.5°C target, including emission reduction targets, decarbonization levers, and planned investments.

**Covered impacts:**
- Human rights impacts as defined in international instruments (UN Guiding Principles, ILO conventions, international human rights law)
- Environmental impacts including climate change, biodiversity loss, pollution, water degradation, and deforestation

## Timeline

- **2024**: CSDDD adopted
- **2026**: Member states must transpose into national law
- **2027**: Phase 1 companies begin compliance
- **2028**: Phase 2 companies begin
- **2029**: Phase 3 companies and non-EU companies begin
- **Ongoing**: Regular review and potential expansion of scope

## Civil Liability

CSDDD introduces a civil liability regime:
- Companies are liable for damages caused by failure to comply with due diligence obligations
- Affected persons (including individuals and communities anywhere in the world) can bring claims before courts in EU member states
- Trade unions and NGOs can bring actions on behalf of affected persons
- Limitation period of at least 5 years from when the damage occurred
- Courts can order companies to take appropriate measures to cease the infringement

This creates significantly more legal exposure than existing national laws like Germany's LkSG.

## Compliance Steps

1. **Scope assessment**: Determine which entities and business relationships are covered
2. **Policy development**: Adopt a comprehensive due diligence policy
3. **Value chain mapping**: Map your chain of activities to identify actual and potential adverse impacts
4. **Impact assessment**: Conduct regular human rights and environmental impact assessments
5. **Prevention and mitigation**: Implement measures to prevent and mitigate identified impacts
6. **Grievance mechanism**: Establish or strengthen complaints procedures
7. **Climate transition plan**: Develop a Paris-aligned transition plan with emission reduction targets
8. **Monitoring and reporting**: Track effectiveness and publish annual due diligence statements

## Penalties

- **Administrative penalties**: Up to 5% of the company's worldwide net turnover
- **Civil liability**: Compensation claims from affected persons
- **Director duties**: Directors must consider human rights, climate, and environmental consequences in their duties
- **Public procurement**: Non-compliant companies may be excluded from public contracts
- **Supervisory authority enforcement**: National authorities can investigate, impose fines, and require corrective measures

## How Council Fire Can Help

Council Fire helps companies prepare for CSDDD compliance — from value chain mapping and impact assessment through policy development, transition planning, and remediation frameworks. [Contact us](https://www.councilfire.org/contact) for CSDDD compliance support."""
    },

    "global-biodiversity-framework": {
        "title": "Kunming-Montreal Global Biodiversity Framework (GBF)",
        "description": "Guide to the Global Biodiversity Framework — its 23 targets, implications for businesses, and how corporate biodiversity strategy must align with the 2030 goals.",
        "category": "Global Framework",
        "faqs": [
            ("Is the GBF legally binding?", "The GBF itself is not legally binding on companies, but it's legally binding on the 196 signatory nations who must develop National Biodiversity Strategies and Action Plans (NBSAPs) to achieve its targets. These national plans are creating regulatory requirements for businesses. Additionally, GBF Target 15 specifically calls on governments to require business disclosure on biodiversity."),
            ("What is the 30x30 target?", "Target 3 of the GBF aims to protect and conserve at least 30% of the world's land, inland waters, coastal areas, and oceans by 2030 (up from approximately 17% of land and 8% of oceans currently). This has significant implications for extractive industries, agriculture, infrastructure, and real estate operating in or near areas that may come under protection."),
            ("How does the GBF affect corporate strategy?", "The GBF affects companies through multiple channels: new regulations from national implementation (NBSAPs), financial sector pressure (TNFD, sustainable finance regulations), supply chain requirements (deforestation regulations, sustainable sourcing), direct land-use restrictions (protected areas, restoration targets), and stakeholder expectations. Companies in nature-dependent sectors need to assess exposure to all 23 targets.")
        ],
        "body": """## What Is the Global Biodiversity Framework?

The Kunming-Montreal Global Biodiversity Framework (GBF), adopted in December 2022 at COP15 by 196 nations, is the global plan to halt and reverse biodiversity loss by 2030. It sets 23 targets organized under four goals, representing the most ambitious international biodiversity agreement ever adopted.

The GBF is to biodiversity what the Paris Agreement is to climate — it creates a global framework that will drive national regulation, financial sector requirements, and corporate strategy for the rest of the decade.

## Who It Applies To

The GBF applies to signatory nations, but its implications cascade to businesses through:
- **National regulation**: Countries must develop NBSAPs to implement GBF targets, creating domestic requirements
- **Financial regulation**: Target 14 requires integration of biodiversity into financial flows; Target 15 requires business disclosure
- **Supply chain requirements**: Targets on deforestation, pollution, and sustainable use create supply chain obligations
- **Voluntary frameworks**: TNFD, SBTN, and corporate commitments reference GBF targets

## Key Targets (Selected Business-Relevant)

**Target 1**: Plan and manage all areas to reduce biodiversity loss — implications for land-use planning and development

**Target 2**: Restore 30% of degraded ecosystems by 2030 — creates restoration requirements and opportunities

**Target 3 (30x30)**: Protect 30% of land and ocean by 2030 — expansion of protected areas affects extractive industries, agriculture, infrastructure

**Target 7**: Reduce pollution risks including pesticides by 50% by 2030 — affects agriculture, chemicals, manufacturing

**Target 8**: Minimize climate change impacts on biodiversity — links climate and biodiversity strategies

**Target 10**: Ensure sustainable management of agriculture, aquaculture, fisheries, and forestry — affects food and agriculture value chains

**Target 14**: Integrate biodiversity values into policies, regulations, and financial flows — drives sustainable finance requirements

**Target 15**: Require large businesses and financial institutions to monitor, assess, and transparently disclose risks, dependencies, and impacts on biodiversity — the corporate disclosure target

**Target 16**: Enable sustainable consumption choices and reduce food waste by 50% — affects consumer products and retail

**Target 19**: Mobilize $200 billion per year for biodiversity by 2030 — creates funding flows and green finance opportunities

## Implementation Mechanism

The GBF operates through:
1. **National Biodiversity Strategies and Action Plans (NBSAPs)**: Each country develops its plan to achieve GBF targets
2. **National targets**: Countries set their own targets aligned with global goals
3. **Monitoring framework**: Headline, component, and complementary indicators track progress
4. **Global review**: Periodic stocktakes assess collective progress
5. **Financial mechanism**: The Global Environment Facility (GEF) serves as the financial mechanism

## Implications for Business

**Regulatory risk**: As countries implement NBSAPs, expect new regulations on:
- Land use and protected areas
- Pollution and pesticide reduction
- Deforestation and ecosystem conversion
- Corporate biodiversity disclosure
- Invasive species management

**Financial risk**: Financial institutions are integrating biodiversity into:
- Investment screening and portfolio analysis
- Lending criteria and loan covenants
- Insurance underwriting
- Sustainable finance products (biodiversity bonds, nature credits)

**Operational risk**: Companies with operations or supply chains in nature-sensitive areas face:
- Restricted access to resources in expanded protected areas
- Higher costs for sustainable sourcing
- Supply chain disruption from ecosystem degradation
- Community opposition to nature-harmful activities

**Opportunity**: The GBF also creates opportunities:
- Growing markets for nature-based solutions
- Demand for biodiversity monitoring technology
- Sustainable agriculture and aquaculture premiums
- Ecosystem restoration services
- Biodiversity credits and nature finance

## Compliance Steps for Businesses

1. **Assess exposure**: Map your operations and supply chain against GBF targets to identify which affect you
2. **Monitor NBSAPs**: Track national implementation in your key markets
3. **Conduct nature assessment**: Use TNFD LEAP approach to evaluate your dependencies and impacts
4. **Set targets**: Develop nature-related targets aligned with relevant GBF targets and SBTN methodology
5. **Integrate into strategy**: Embed biodiversity into procurement, product design, site selection, and risk management
6. **Disclose**: Report on biodiversity through TNFD, CSRD E4, CDP, and your sustainability report

## How Council Fire Can Help

Council Fire helps organizations understand and respond to the GBF — from exposure assessment and TNFD alignment through nature target-setting and strategy integration. [Contact us](https://www.councilfire.org/contact) for biodiversity strategy support."""
    },
}

for slug, data in regulations.items():
    faq_yaml = ""
    for q, a in data["faqs"]:
        faq_yaml += f'  - question: "{q}"\n    answer: "{a}"\n'

    content = f"""---
title: "{data['title']}"
description: "{data['description']}"
category: "{data['category']}"
lastUpdated: "2026-02-26"
faqs:
{faq_yaml}---

{data['body']}
"""
    path = os.path.join(BASE, f"{slug}.mdx")
    with open(path, "w") as f:
        f.write(content)
    print(f"Wrote {slug}")

print(f"\nTotal regulation files: {len(os.listdir(BASE))}")
