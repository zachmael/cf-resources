import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar';
import { getAllContentForSearch, getAllContent } from '@/lib/content';

const sections = [
  { title: 'Glossary', href: '/glossary', desc: 'Key sustainability terms explained clearly for professionals.', icon: '📖', count: 'glossary' },
  { title: 'Comparisons', href: '/compare', desc: 'Side-by-side breakdowns of frameworks and approaches.', icon: '⚖️', count: 'compare' },
  { title: 'Locations', href: '/locations', desc: 'Climate risks and regulations by region.', icon: '📍', count: 'locations' },
  { title: 'Guides', href: '/guides', desc: 'Step-by-step compliance and framework guides.', icon: '📋', count: 'guides' },
  { title: 'Industries', href: '/industries', desc: 'Sector-specific sustainability insights.', icon: '🏭', count: 'industries' },
  { title: 'For You', href: '/for', desc: 'Resources tailored to your role.', icon: '👤', count: 'for' },
];

export default function HomePage() {
  const searchItems = getAllContentForSearch();
  const glossaryItems = getAllContent('glossary');
  const featured = glossaryItems.slice(0, 4);

  const counts: Record<string, number> = {};
  for (const s of sections) {
    counts[s.count] = getAllContent(s.count).length;
  }

  const totalTopics = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-teal-50/30 to-white">
        {/* Decorative flame watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <Image src="/logo-icon.png" alt="" width={400} height={364} className="w-[500px] h-auto" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200 px-4 py-1.5 text-sm font-medium text-teal-700 mb-6 animate-fade-in">
            <Image src="/logo-icon.png" alt="" width={400} height={364} className="h-4 w-auto" />
            A Council Fire Resource
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-brand-800 leading-[1.1] tracking-tight animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Sustainability<br className="hidden sm:block" /> Knowledge Hub
          </h1>
          <p className="mt-5 text-lg md:text-xl text-brand-500 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Expert-curated resources for professionals navigating ESG reporting, climate risk, and the clean energy transition.
          </p>
          <div className="mt-8 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <SearchBar items={searchItems} />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-brand-200 bg-brand-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm font-medium text-brand-600">
            <span>{totalTopics}+ Topics</span>
            <span className="hidden sm:inline text-brand-300">·</span>
            <span>100+ Cities</span>
            <span className="hidden sm:inline text-brand-300">·</span>
            <span>50+ Frameworks</span>
            <span className="hidden sm:inline text-brand-300">·</span>
            <span>Free &amp; Open</span>
          </div>
        </div>
      </section>

      {/* Section Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading text-brand-800">Explore Our Resources</h2>
          <p className="mt-3 text-brand-500 max-w-xl mx-auto">Everything you need to understand sustainability — organized, searchable, and written by consultants.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative rounded-2xl border border-brand-200 bg-white p-7 hover:border-teal-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'both' }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/0 to-teal-500/0 group-hover:from-teal-50/50 group-hover:to-transparent transition-all duration-300" />
              <div className="relative">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-4 text-xl font-semibold font-heading text-brand-800 group-hover:text-teal-600 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-brand-500 leading-relaxed">{s.desc}</p>
                {counts[s.count] > 0 && (
                  <p className="mt-3 text-xs font-medium text-teal-500">{counts[s.count]} {counts[s.count] === 1 ? 'entry' : 'entries'}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Content */}
      {featured.length > 0 && (
        <section className="bg-brand-50/50 border-y border-brand-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold font-heading text-brand-800">Featured Terms</h2>
                <p className="mt-2 text-brand-500">Essential sustainability concepts every professional should know.</p>
              </div>
              <Link href="/glossary" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-teal-500 hover:text-teal-600 transition-colors">
                View all
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featured.map((item) => (
                <Link
                  key={item.meta.slug}
                  href={`/glossary/${item.meta.slug}`}
                  className="group rounded-2xl border border-brand-200 bg-white p-7 hover:border-teal-400 hover:shadow-lg transition-all duration-300"
                >
                  {item.meta.category && (
                    <span className="inline-block text-xs font-medium text-teal-600 bg-teal-50 rounded-full px-2.5 py-1 mb-3">
                      {item.meta.category}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-brand-800 group-hover:text-teal-600 transition-colors">{item.meta.title}</h3>
                  <p className="mt-2 text-sm text-brand-500 line-clamp-2 leading-relaxed">{item.meta.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500">
                    Read more
                    <svg className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500" />
        <div className="absolute inset-0 bg-[url('/logo-icon.png')] bg-no-repeat bg-right bg-contain opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">Ready to take action?</h2>
          <p className="mt-4 text-lg text-teal-100 max-w-xl mx-auto">
            Our team brings decades of sustainability consulting experience. Let Council Fire help you achieve your goals.
          </p>
          <a
            href="https://www.councilfire.org/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white text-teal-600 font-semibold px-8 py-4 text-lg hover:bg-teal-50 transition-colors shadow-lg"
          >
            Get in Touch
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>
    </>
  );
}
