import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools & Resources | Council Fire Resources',
  description: 'Free interactive sustainability tools, checklists, worksheets, and templates — check CSRD applicability, estimate your carbon footprint, assess ESG readiness, and more.',
};

const interactiveTools = [
  {
    title: 'CSRD Applicability Checker',
    desc: 'Find out whether the Corporate Sustainability Reporting Directive applies to your organization with a quick multi-step assessment.',
    href: '/tools/csrd-checker',
    icon: '📋',
  },
  {
    title: 'Carbon Footprint Estimator',
    desc: 'Get a ballpark estimate of your organization\'s Scope 1, 2, and 3 emissions using industry averages.',
    href: '/tools/carbon-estimator',
    icon: '🌍',
  },
  {
    title: 'ESG Readiness Assessment',
    desc: 'Take a 10-question quiz to gauge where your organization stands on sustainability practices.',
    href: '/tools/esg-readiness',
    icon: '📊',
  },
];

const templates = [
  {
    title: 'CSRD Readiness Checklist',
    desc: '20 essential steps to prepare your organization for EU Corporate Sustainability Reporting Directive compliance.',
    href: '/resources/csrd-readiness-checklist',
    icon: '✅',
    tag: 'Checklist',
  },
  {
    title: 'Scope 3 Emissions Worksheet',
    desc: 'Step-by-step worksheet covering all 15 GHG Protocol Scope 3 categories with data requirements and calculation methods.',
    href: '/resources/scope-3-emissions-worksheet',
    icon: '📐',
    tag: 'Worksheet',
  },
  {
    title: 'Double Materiality Assessment Template',
    desc: 'A structured 7-step framework for conducting a double materiality assessment aligned with ESRS.',
    href: '/resources/materiality-assessment-template',
    icon: '🎯',
    tag: 'Template',
  },
];

export default function ToolsAndResourcesPage() {
  return (
    <section className="bg-brand-50 dark:bg-[#1a1a1a] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Free</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-800 dark:text-white tracking-tight">Tools & Resources</h1>
        <p className="mt-4 text-lg text-brand-500 dark:text-gray-400 max-w-xl">Free interactive assessments, checklists, and templates to help you navigate sustainability — no sign-up required.</p>

        {/* Interactive Tools */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold font-heading text-brand-800 dark:text-white mb-2">Interactive Tools</h2>
          <p className="text-brand-500 dark:text-gray-400 mb-8">Instant assessments to understand where you stand.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interactiveTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group relative rounded-2xl bg-white dark:bg-[#222] border border-brand-200 dark:border-white/10 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-50 dark:bg-white/10 text-3xl mb-6">{tool.icon}</span>
                <h3 className="text-xl font-bold font-heading text-brand-800 dark:text-white group-hover:text-teal-600 transition-colors">{tool.title}</h3>
                <p className="mt-3 text-sm text-brand-500 dark:text-gray-400 leading-relaxed">{tool.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-teal-500">
                  Try it free
                  <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Templates & Worksheets */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold font-heading text-brand-800 dark:text-white mb-2">Templates & Worksheets</h2>
          <p className="text-brand-500 dark:text-gray-400 mb-8">Professional-grade resources for ESG compliance and sustainability strategy.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((r) => (
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
                  <h3 className="text-xl font-bold font-heading text-brand-800 dark:text-white group-hover:text-teal-600 transition-colors">{r.title}</h3>
                  <p className="mt-3 text-sm text-brand-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400">
                    Access free resource
                    <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
