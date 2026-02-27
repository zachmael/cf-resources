import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Tools | Council Fire Resources',
  description: 'Free interactive sustainability tools — check CSRD applicability, estimate your carbon footprint, and assess ESG readiness.',
};

const tools = [
  {
    title: 'CSRD Applicability Checker',
    desc: 'Find out whether the Corporate Sustainability Reporting Directive applies to your organization with a quick multi-step assessment.',
    href: '/tools/csrd-checker',
    icon: '📋',
    color: 'teal',
  },
  {
    title: 'Carbon Footprint Estimator',
    desc: 'Get a ballpark estimate of your organization\'s Scope 1, 2, and 3 emissions using industry averages.',
    href: '/tools/carbon-estimator',
    icon: '🌍',
    color: 'amber',
  },
  {
    title: 'ESG Readiness Assessment',
    desc: 'Take a 10-question quiz to gauge where your organization stands on sustainability practices.',
    href: '/tools/esg-readiness',
    icon: '📊',
    color: 'teal',
  },
];

export default function ToolsPage() {
  return (
    <section className="bg-brand-50 dark:bg-[#1a1a1a] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Interactive</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-800 dark:text-white tracking-tight">Sustainability Tools</h1>
        <p className="mt-4 text-lg text-brand-500 dark:text-gray-400 max-w-xl">Free, instant assessments to help you understand where you stand — no sign-up required.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {tools.map((tool, i) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group relative rounded-2xl bg-white dark:bg-[#222] border border-brand-200 dark:border-white/10 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-50 dark:bg-white/10 text-3xl mb-6">{tool.icon}</span>
              <h2 className="text-xl font-bold font-heading text-brand-800 dark:text-white group-hover:text-teal-600 transition-colors">{tool.title}</h2>
              <p className="mt-3 text-sm text-brand-500 dark:text-gray-400 leading-relaxed">{tool.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-teal-500">
                Try it free
                <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
