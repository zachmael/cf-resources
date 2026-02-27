import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Sustainability Tools & Templates | Council Fire',
  description: 'Download free checklists, worksheets, and templates for CSRD compliance, Scope 3 emissions measurement, and double materiality assessments.',
};

const resources = [
  {
    title: 'CSRD Readiness Checklist',
    description: '20 essential steps to prepare your organization for EU Corporate Sustainability Reporting Directive compliance.',
    href: '/resources/csrd-readiness-checklist',
    icon: '📋',
    tag: 'Checklist',
  },
  {
    title: 'Scope 3 Emissions Worksheet',
    description: 'Step-by-step worksheet covering all 15 GHG Protocol Scope 3 categories with data requirements and calculation methods.',
    href: '/resources/scope-3-emissions-worksheet',
    icon: '📊',
    tag: 'Worksheet',
  },
  {
    title: 'Double Materiality Assessment Template',
    description: 'A structured 7-step framework for conducting a double materiality assessment aligned with ESRS.',
    href: '/resources/materiality-assessment-template',
    icon: '📐',
    tag: 'Template',
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 dark:bg-amber-900/30 px-4 py-1.5 text-sm font-semibold text-amber-700 dark:text-amber-400 mb-4">
          🛠️ Free Tools
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-800 dark:text-white tracking-tight">Free Sustainability Tools</h1>
        <p className="mt-4 text-lg text-brand-500 dark:text-gray-400 max-w-2xl mx-auto">Professional-grade checklists, worksheets, and templates to help you navigate ESG compliance and sustainability strategy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="group rounded-2xl border border-brand-200 dark:border-white/10 bg-white dark:bg-[#222] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-2 bg-gradient-to-r from-[#258193] to-teal-400" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{r.icon}</span>
                <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider bg-teal-50 dark:bg-teal-900/30 px-2.5 py-1 rounded-full">{r.tag}</span>
              </div>
              <h2 className="text-xl font-bold font-heading text-brand-800 dark:text-white group-hover:text-teal-600 transition-colors">{r.title}</h2>
              <p className="mt-3 text-sm text-brand-500 dark:text-gray-400 leading-relaxed">{r.description}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400">
                Access free resource
                <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
