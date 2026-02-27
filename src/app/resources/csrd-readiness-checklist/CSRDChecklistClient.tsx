'use client';

import LeadMagnetGate from '@/components/LeadMagnetGate';

const items = [
  { category: 'Governance & Leadership', items: [
    'Appoint a CSRD project lead or steering committee with C-suite sponsorship',
    'Brief the board on CSRD obligations, timeline, and resource requirements',
    'Define roles and responsibilities across finance, sustainability, legal, and operations',
    'Establish a cross-functional CSRD working group with regular cadence',
  ]},
  { category: 'Scope & Materiality', items: [
    'Determine if your organization falls within CSRD scope (employee count, revenue, balance sheet)',
    'Identify your first reporting year based on CSRD phased implementation timeline',
    'Conduct a double materiality assessment covering impact materiality and financial materiality',
    'Document material topics with supporting rationale and stakeholder input',
  ]},
  { category: 'Data & Systems', items: [
    'Inventory all existing ESG data sources across operations, supply chain, and products',
    'Identify data gaps against European Sustainability Reporting Standards (ESRS) disclosure requirements',
    'Evaluate and select ESG data management software or reporting platforms',
    'Establish data collection processes with clear ownership, frequency, and quality controls',
  ]},
  { category: 'Reporting & Disclosure', items: [
    'Map your current reporting to ESRS topical standards (E1-E5, S1-S4, G1)',
    'Develop or update sustainability policies required under ESRS disclosure requirements',
    'Prepare quantitative targets and transition plans aligned with the EU Taxonomy and Paris Agreement',
    'Draft narrative disclosures covering strategy, governance, risk management, and metrics',
  ]},
  { category: 'Assurance & Compliance', items: [
    'Select an independent assurance provider with CSRD/ESRS expertise',
    'Implement internal controls over sustainability reporting comparable to financial reporting controls',
    'Conduct a dry run / gap analysis against the full ESRS disclosure framework',
    'Build a timeline for limited assurance readiness, progressing toward reasonable assurance',
  ]},
];

export default function CSRDChecklistClient() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 dark:bg-teal-900/30 px-4 py-1.5 text-sm font-semibold text-teal-700 dark:text-teal-400 mb-4">
          📋 Free Resource
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-800 dark:text-white">CSRD Readiness Checklist</h1>
        <p className="mt-3 text-lg text-brand-500 dark:text-gray-400 max-w-2xl mx-auto">20 essential steps to prepare your organization for EU Corporate Sustainability Reporting Directive compliance.</p>
      </div>

      <LeadMagnetGate
        title="Download the CSRD Readiness Checklist"
        description="Enter your email to access the full 20-item checklist with detailed guidance for each step."
        source="csrd-readiness-checklist"
      >
        <div className="print:p-0">
          <div className="text-center mb-10 print:mb-6">
            <h1 className="text-3xl font-extrabold font-heading text-brand-800 dark:text-white">CSRD Readiness Checklist</h1>
            <p className="text-brand-500 dark:text-gray-400 mt-2">By Council Fire — resources.councilfire.org</p>
            <button onClick={() => window.print()} className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-100 dark:bg-white/10 px-4 py-2 text-sm font-semibold text-brand-700 dark:text-gray-300 hover:bg-brand-200 dark:hover:bg-white/20 transition-colors print:hidden">
              🖨️ Print / Save as PDF
            </button>
          </div>

          <div className="space-y-8">
            {items.map((section, si) => (
              <div key={si}>
                <h2 className="text-lg font-bold text-brand-800 dark:text-white mb-4 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-sm font-bold">{si + 1}</span>
                  {section.category}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item, ii) => (
                    <label key={ii} className="flex items-start gap-3 p-4 rounded-xl border border-brand-200 dark:border-white/10 bg-white dark:bg-[#222] hover:border-teal-300 dark:hover:border-teal-700 transition-colors cursor-pointer group">
                      <input type="checkbox" className="mt-0.5 h-5 w-5 rounded border-brand-300 text-teal-600 focus:ring-teal-500 shrink-0" />
                      <span className="text-sm text-brand-700 dark:text-gray-300 leading-relaxed group-hover:text-brand-900 dark:group-hover:text-white transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 text-center print:hidden">
            <h3 className="font-bold text-brand-800 dark:text-white">Need expert help with CSRD compliance?</h3>
            <p className="text-sm text-brand-500 dark:text-gray-400 mt-1">Council Fire&apos;s team has guided dozens of organizations through ESG reporting frameworks.</p>
            <a href="https://www.councilfire.org/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#258193] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#1e6b7a] transition-colors">
              Talk to Our Team →
            </a>
          </div>
        </div>
      </LeadMagnetGate>
    </div>
  );
}
