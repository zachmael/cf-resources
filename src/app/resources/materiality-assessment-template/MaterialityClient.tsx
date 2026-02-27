'use client';

import LeadMagnetGate from '@/components/LeadMagnetGate';

const steps = [
  {
    title: 'Step 1: Identify the Universe of Sustainability Topics',
    content: `Start by compiling a comprehensive list of potentially material sustainability topics. Use the ESRS topical standards as your baseline:

**Environmental:** Climate change (E1), Pollution (E2), Water & marine resources (E3), Biodiversity & ecosystems (E4), Resource use & circular economy (E5)

**Social:** Own workforce (S1), Workers in the value chain (S2), Affected communities (S3), Consumers & end-users (S4)

**Governance:** Business conduct (G1)

Add sector-specific topics relevant to your industry. Cross-reference with GRI Standards, SASB materiality maps, and peer company disclosures.`,
    worksheet: [
      { label: 'Sector-specific topics identified', placeholder: 'e.g., product safety, data privacy, land use...' },
      { label: 'Sources consulted', placeholder: 'e.g., ESRS, GRI, SASB, peer reports, media analysis...' },
    ]
  },
  {
    title: 'Step 2: Stakeholder Identification & Engagement',
    content: `Identify affected stakeholders for each topic — both those impacted by your operations and those whose actions affect your business.

**Key stakeholder groups to consider:**
- Employees and worker representatives
- Customers and consumers
- Suppliers and business partners
- Local communities and indigenous peoples
- Investors and lenders
- Regulators and policymakers
- Civil society and NGOs
- Industry associations

Plan your engagement approach: surveys, interviews, focus groups, or desktop analysis of stakeholder concerns.`,
    worksheet: [
      { label: 'Priority stakeholder groups', placeholder: 'List your top 5-8 stakeholder groups...' },
      { label: 'Engagement methods planned', placeholder: 'e.g., online survey, 1:1 interviews, workshop...' },
    ]
  },
  {
    title: 'Step 3: Assess Impact Materiality',
    content: `For each sustainability topic, assess your organization's actual and potential impacts on people and the environment.

**Scoring criteria for impacts:**

*Severity* (for actual negative impacts):
- **Scale:** How grave is the impact? (1-5)
- **Scope:** How widespread is the impact? (1-5)
- **Irremediability:** How hard is it to remediate? (1-5)

*Likelihood* (for potential impacts):
- How likely is the impact to occur? (1-5)

For positive impacts, assess scale and scope.

**Impact Materiality Score** = Severity (avg of scale + scope + irremediability) × Likelihood`,
    worksheet: [
      { label: 'Top 5 impact materiality topics', placeholder: 'List topics with highest impact scores...' },
      { label: 'Key actual negative impacts identified', placeholder: 'Describe your most significant current impacts...' },
    ]
  },
  {
    title: 'Step 4: Assess Financial Materiality',
    content: `For each topic, assess whether sustainability-related risks and opportunities could materially affect your financial position, performance, or cash flows.

**Financial effects to consider:**

*Risks:*
- Physical risks (e.g., climate-related damage to assets)
- Transition risks (e.g., carbon pricing, regulation changes)
- Litigation and liability risks
- Reputational risks affecting revenue

*Opportunities:*
- New markets, products, or services
- Cost savings from resource efficiency
- Access to green financing
- Enhanced brand value and customer loyalty

**Score each:** Magnitude of financial effect (1-5) × Likelihood (1-5)`,
    worksheet: [
      { label: 'Top 5 financial materiality topics', placeholder: 'List topics with highest financial impact potential...' },
      { label: 'Key financial risks identified', placeholder: 'Describe risks with estimated magnitude...' },
    ]
  },
  {
    title: 'Step 5: Apply Materiality Thresholds',
    content: `Define thresholds for what constitutes a "material" topic. A topic is material under CSRD if it meets the threshold for impact materiality OR financial materiality (or both).

**Recommended thresholds:**
- Impact materiality: topics scoring ≥ 12 out of 25 on severity × likelihood
- Financial materiality: topics scoring ≥ 12 out of 25 on magnitude × likelihood

**Validation:** Cross-check your results against:
- Peer company materiality assessments
- Industry materiality maps (SASB)
- Stakeholder feedback priorities
- ESG rating agency focus areas

Document your threshold methodology and rationale for future audits.`,
    worksheet: [
      { label: 'Impact materiality threshold chosen', placeholder: 'e.g., ≥12/25 on severity × likelihood' },
      { label: 'Financial materiality threshold chosen', placeholder: 'e.g., ≥12/25 on magnitude × likelihood' },
    ]
  },
  {
    title: 'Step 6: Build the Double Materiality Matrix',
    content: `Plot each sustainability topic on a two-axis matrix:

- **X-axis:** Financial materiality score (low to high)
- **Y-axis:** Impact materiality score (low to high)

Topics in the **upper-right quadrant** are material on both dimensions and should be your highest priority.

Topics material on only one dimension still require ESRS disclosure — they just have different strategic implications.

**Output:** A prioritized list of material topics with their classification:
- Double material (both dimensions)
- Impact material only
- Financial material only
- Not material (with documented rationale for exclusion)`,
    worksheet: [
      { label: 'Double material topics (both dimensions)', placeholder: 'List topics material on both impact and financial...' },
      { label: 'Impact-only material topics', placeholder: 'List topics material on impact dimension only...' },
      { label: 'Financial-only material topics', placeholder: 'List topics material on financial dimension only...' },
    ]
  },
  {
    title: 'Step 7: Document & Prepare for Disclosure',
    content: `Compile your assessment into a formal document ready for board review and auditor inspection.

**Required documentation:**
- Methodology description (how you conducted the assessment)
- Stakeholder engagement process and outcomes
- Complete list of topics considered with scoring rationale
- Thresholds applied and justification
- Final materiality matrix visualization
- List of material topics with corresponding ESRS standards
- Topics deemed not material with explanation
- Board/management sign-off

**Next steps:** For each material topic, identify the specific ESRS disclosure requirements and begin data collection.`,
    worksheet: [
      { label: 'Total material topics identified', placeholder: 'Number...' },
      { label: 'Key ESRS standards applicable', placeholder: 'e.g., E1, S1, G1...' },
      { label: 'Target completion date', placeholder: 'MM/YYYY...' },
    ]
  },
];

export default function MaterialityClient() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 dark:bg-teal-900/30 px-4 py-1.5 text-sm font-semibold text-teal-700 dark:text-teal-400 mb-4">
          📐 Free Resource
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-800 dark:text-white">Double Materiality Assessment Template</h1>
        <p className="mt-3 text-lg text-brand-500 dark:text-gray-400 max-w-2xl mx-auto">A structured 7-step framework for conducting a double materiality assessment aligned with European Sustainability Reporting Standards (ESRS).</p>
      </div>

      <LeadMagnetGate
        title="Access the Materiality Assessment Template"
        description="Enter your email to unlock the complete 7-step framework with worksheets and scoring guidance."
        source="materiality-assessment-template"
      >
        <div className="print:p-0">
          <div className="text-center mb-10 print:mb-6">
            <h1 className="text-3xl font-extrabold font-heading text-brand-800 dark:text-white">Double Materiality Assessment Template</h1>
            <p className="text-brand-500 dark:text-gray-400 mt-2">By Council Fire — resources.councilfire.org</p>
            <button onClick={() => window.print()} className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-100 dark:bg-white/10 px-4 py-2 text-sm font-semibold text-brand-700 dark:text-gray-300 hover:bg-brand-200 dark:hover:bg-white/20 transition-colors print:hidden">
              🖨️ Print / Save as PDF
            </button>
          </div>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="rounded-xl border border-brand-200 dark:border-white/10 bg-white dark:bg-[#222] overflow-hidden print:break-inside-avoid">
                <div className="px-6 py-4 bg-brand-50 dark:bg-white/5 border-b border-brand-200 dark:border-white/10">
                  <h2 className="text-lg font-bold text-brand-800 dark:text-white">{step.title}</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div className="text-sm text-brand-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">{step.content}</div>
                  <div className="border-t border-brand-100 dark:border-white/5 pt-4 space-y-3">
                    <h4 className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">Your Notes</h4>
                    {step.worksheet.map((field, fi) => (
                      <div key={fi}>
                        <label className="text-xs font-semibold text-brand-500 dark:text-gray-400 block mb-1">{field.label}</label>
                        <textarea rows={2} placeholder={field.placeholder} className="w-full rounded-lg border border-brand-200 dark:border-white/10 bg-brand-50 dark:bg-white/5 px-3 py-2 text-sm print:border-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 text-center print:hidden">
            <h3 className="font-bold text-brand-800 dark:text-white">Need help with your materiality assessment?</h3>
            <p className="text-sm text-brand-500 dark:text-gray-400 mt-1">Council Fire has facilitated double materiality assessments for organizations across industries.</p>
            <a href="https://www.councilfire.org/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#258193] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#1e6b7a] transition-colors">
              Talk to Our Team →
            </a>
          </div>
        </div>
      </LeadMagnetGate>
    </div>
  );
}
