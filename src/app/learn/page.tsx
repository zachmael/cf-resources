import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning Tracks | Council Fire Resources',
  description: 'Guided learning paths for ESG reporting, CSRD compliance, and climate risk — curated by Council Fire consultants.',
};

const tracks = [
  {
    slug: 'new-to-esg',
    title: 'New to ESG Reporting? Start Here',
    desc: 'A beginner-friendly path through the essentials of ESG — from key terms to frameworks to your first readiness check.',
    steps: 5,
    icon: '🌱',
  },
  {
    slug: 'csrd-compliance',
    title: 'CSRD Compliance Roadmap',
    desc: 'Everything you need to understand and prepare for the EU Corporate Sustainability Reporting Directive.',
    steps: 6,
    icon: '📋',
  },
  {
    slug: 'climate-risk',
    title: 'Understanding Climate Risk',
    desc: 'Learn how to identify, assess, and manage physical and transition climate risks for your organization.',
    steps: 5,
    icon: '🌍',
  },
  {
    slug: 'carbon-strategy',
    title: 'Building a Carbon Strategy',
    desc: 'From understanding your carbon footprint to setting science-based targets — a complete path to decarbonization.',
    steps: 7,
    icon: '🏭',
  },
  {
    slug: 'sustainable-supply-chains',
    title: 'Sustainable Supply Chain Essentials',
    desc: 'Learn how to assess, improve, and report on sustainability across your value chain.',
    steps: 6,
    icon: '🔗',
  },
  {
    slug: 'biodiversity-and-nature',
    title: 'Biodiversity & Nature for Business',
    desc: 'Understand your organization\'s relationship with nature and the emerging frameworks for nature-related disclosure.',
    steps: 6,
    icon: '🌿',
  },
  {
    slug: 'b-corp-journey',
    title: 'The B Corp Journey',
    desc: 'Everything you need to know about B Corp certification — from understanding the standard to preparing your application.',
    steps: 6,
    icon: '🅱️',
  },
];

export default function LearnPage() {
  return (
    <section className="bg-brand-50 dark:bg-[#1a1a1a] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-teal-500" />
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Guided</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-800 dark:text-white tracking-tight">Learning Tracks</h1>
        <p className="mt-4 text-lg text-brand-500 dark:text-gray-400 max-w-xl">Step-by-step paths through our best resources — curated by sustainability consultants.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {tracks.map((t) => (
            <Link
              key={t.slug}
              href={`/learn/${t.slug}`}
              className="group relative rounded-2xl bg-white dark:bg-[#222] border border-brand-200 dark:border-white/10 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-50 dark:bg-white/10 text-3xl mb-6">{t.icon}</span>
              <h2 className="text-xl font-bold font-heading text-brand-800 dark:text-white group-hover:text-teal-600 transition-colors">{t.title}</h2>
              <p className="mt-3 text-sm text-brand-500 dark:text-gray-400 leading-relaxed">{t.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-600 bg-amber-50 dark:bg-amber-900/30 rounded-full px-2.5 py-1">{t.steps} steps</span>
                <span className="flex items-center gap-2 text-sm font-semibold text-teal-500">
                  Start learning
                  <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
