import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import { getAllContentForSearch } from '@/lib/content';

const sections = [
  { title: 'Glossary', href: '/glossary', desc: 'Key sustainability terms explained clearly.', icon: '📖' },
  { title: 'Comparisons', href: '/compare', desc: 'Side-by-side breakdowns of frameworks and approaches.', icon: '⚖️' },
  { title: 'Locations', href: '/locations', desc: 'Climate risks and regulations by region.', icon: '📍' },
  { title: 'Guides', href: '/guides', desc: 'Step-by-step compliance and framework guides.', icon: '📋' },
  { title: 'Industries', href: '/industries', desc: 'Sector-specific sustainability insights.', icon: '🏭' },
  { title: 'For You', href: '/for', desc: 'Resources tailored to your role.', icon: '👤' },
];

export default function HomePage() {
  const searchItems = getAllContentForSearch();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section className="py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-heading text-brand-800 leading-tight">
          Council Fire Resources
        </h1>
        <p className="mt-4 text-lg md:text-xl text-brand-600 max-w-2xl mx-auto">
          Your guide to sustainability, ESG, and climate resilience.
        </p>
        <div className="mt-8 flex justify-center">
          <SearchBar items={searchItems} />
        </div>
      </section>

      <section className="pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group rounded-xl border border-brand-200 bg-white p-6 hover:border-teal-400 hover:shadow-lg transition-all"
          >
            <span className="text-3xl">{s.icon}</span>
            <h2 className="mt-3 text-xl font-semibold font-heading text-brand-800 group-hover:text-teal-500 transition-colors">
              {s.title}
            </h2>
            <p className="mt-2 text-sm text-brand-600">{s.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
