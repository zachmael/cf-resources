import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar';
import { getAllContentForSearch, getAllContent } from '@/lib/content';

const sections = [
  { title: 'Glossary', href: '/glossary', desc: 'Key sustainability terms explained clearly for professionals.', icon: '📖', count: 'glossary', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop' },
  { title: 'Comparisons', href: '/compare', desc: 'Side-by-side breakdowns of frameworks and approaches.', icon: '⚖️', count: 'compare', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop' },
  { title: 'Locations', href: '/locations', desc: 'Climate risks and regulations by region.', icon: '📍', count: 'locations', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop' },
  { title: 'Guides', href: '/guides', desc: 'Step-by-step compliance and framework guides.', icon: '📋', count: 'guides', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop' },
  { title: 'How-To', href: '/how-to', desc: 'Practical step-by-step guides for sustainability tasks.', icon: '🔧', count: 'how-to', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop' },
  { title: 'Industries', href: '/industries', desc: 'Sector-specific sustainability insights.', icon: '🏭', count: 'industries', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=500&fit=crop' },
  { title: 'Regulations', href: '/regulations', desc: 'Key sustainability regulations and disclosure mandates explained.', icon: '⚖️', count: 'regulations', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop' },
  { title: 'For You', href: '/for', desc: 'Resources tailored to your role.', icon: '👤', count: 'for', image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&h=500&fit=crop' },
  { title: 'Case Studies', href: '/case-studies', desc: 'Real-world sustainability project examples across industries.', icon: '📊', count: 'case-studies', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop' },
  { title: 'Frameworks', href: '/frameworks', desc: 'Deep dives into major sustainability frameworks and standards.', icon: '🏗️', count: 'frameworks', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop' },
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
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=800&fit=crop"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/75 to-brand-900/50" />
        </div>
        {/* Decorative shapes */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-24 w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-medium text-white/90 mb-8 animate-fade-in">
            <Image src="/logo-icon.png" alt="" width={400} height={364} className="h-4 w-auto" />
            A Council Fire Resource
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading text-white leading-[1.05] tracking-tight max-w-3xl animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Sustainability<br />Knowledge Hub
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Expert-curated resources for professionals navigating ESG reporting, climate risk, and the clean energy transition.
          </p>
          <div className="mt-10 max-w-xl animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <SearchBar items={searchItems} />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-brand-200 dark:border-white/10 bg-white dark:bg-[#111]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-sm">
            {[
              { value: `${totalTopics}+`, label: 'Topics' },
              { value: '100+', label: 'Cities' },
              { value: '50+', label: 'Frameworks' },
              { value: 'Free', label: '& Open' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="text-2xl font-extrabold font-heading text-brand-800 dark:text-white">{stat.value}</span>
                <span className="text-brand-500 dark:text-gray-400 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Cards */}
      <section className="relative overflow-hidden bg-brand-50 dark:bg-[#1a1a1a]">
        {/* Decorative background shapes */}
        <div className="absolute top-20 -right-40 w-[600px] h-[600px] rounded-full bg-brand-100 dark:bg-white/5 opacity-60" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-brand-100 dark:bg-white/5 opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          {/* Section label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Explore</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-800 dark:text-white tracking-tight">Our Resources</h2>
          <p className="mt-4 text-lg text-brand-500 dark:text-gray-400 max-w-xl">Everything you need to understand sustainability — organized, searchable, and written by consultants.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {sections.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative rounded-2xl bg-white dark:bg-[#222] border border-brand-200 dark:border-white/10 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'both' }}
              >
                {/* Card image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm text-xl shadow-sm">
                      {s.icon}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold font-heading text-brand-800 dark:text-white group-hover:text-teal-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    {counts[s.count] > 0 && (
                      <span className="text-xs font-semibold text-amber-600 bg-amber-50 dark:bg-amber-900/30 rounded-full px-2.5 py-1">{counts[s.count]} {counts[s.count] === 1 ? 'entry' : 'entries'}</span>
                    )}
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-50 dark:bg-white/10 text-brand-400 dark:text-gray-400 group-hover:bg-teal-500 group-hover:text-white transition-all">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      {featured.length > 0 && (
        <section className="bg-white dark:bg-[#111]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-teal-500" />
                  <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Featured</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-800 dark:text-white tracking-tight">Key Concepts</h2>
                <p className="mt-3 text-brand-500 dark:text-gray-400 text-lg">Essential sustainability terms every professional should know.</p>
              </div>
              <Link href="/glossary" className="hidden md:inline-flex items-center gap-3 text-sm font-semibold text-brand-800 dark:text-gray-200 group">
                View all
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-white group-hover:bg-teal-600 transition-all group-hover:scale-105">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((item, i) => {
                const thumbs = [
                  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=200&fit=crop',
                  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop',
                  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=200&fit=crop',
                  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop',
                ];
                return (
                <Link
                  key={item.meta.slug}
                  href={`/glossary/${item.meta.slug}`}
                  className="group rounded-2xl border border-brand-200 dark:border-white/10 bg-white dark:bg-[#222] overflow-hidden hover:border-teal-400 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image src={thumbs[i % thumbs.length]} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    {item.meta.category && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-semibold text-amber-700 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        {item.meta.category}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-brand-800 dark:text-white group-hover:text-teal-600 transition-colors">{item.meta.title}</h3>
                    <p className="mt-3 text-brand-500 dark:text-gray-400 line-clamp-2 leading-relaxed">{item.meta.description}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-teal-500">
                      Read more
                      <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </div>
                </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Free Tools */}
      <section className="bg-brand-50 dark:bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Free Tools</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-800 dark:text-white tracking-tight">Downloadable Resources</h2>
              <p className="mt-3 text-brand-500 dark:text-gray-400 text-lg">Professional checklists, worksheets, and templates — free with email signup.</p>
            </div>
            <Link href="/resources" className="hidden md:inline-flex items-center gap-3 text-sm font-semibold text-brand-800 dark:text-gray-200 group">
              View all
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-white group-hover:bg-teal-600 transition-all group-hover:scale-105">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'CSRD Readiness Checklist', desc: '20 steps to prepare for EU CSRD compliance.', href: '/resources/csrd-readiness-checklist', icon: '📋', tag: 'Checklist' },
              { title: 'Scope 3 Emissions Worksheet', desc: 'Measure value chain emissions across all 15 categories.', href: '/resources/scope-3-emissions-worksheet', icon: '📊', tag: 'Worksheet' },
              { title: 'Double Materiality Template', desc: '7-step framework for ESRS-aligned materiality assessment.', href: '/resources/materiality-assessment-template', icon: '📐', tag: 'Template' },
            ].map((r) => (
              <Link key={r.href} href={r.href} className="group rounded-2xl border border-brand-200 dark:border-white/10 bg-white dark:bg-[#222] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-1.5 bg-gradient-to-r from-[#258193] to-teal-400" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{r.icon}</span>
                    <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider bg-teal-50 dark:bg-teal-900/30 px-2 py-0.5 rounded-full">{r.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-800 dark:text-white group-hover:text-teal-600 transition-colors">{r.title}</h3>
                  <p className="mt-2 text-sm text-brand-500 dark:text-gray-400">{r.desc}</p>
                  <div className="mt-4 text-sm font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1">
                    Get free access <svg className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="bg-brand-50 dark:bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Interactive</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-800 dark:text-white tracking-tight">Free Tools</h2>
              <p className="mt-3 text-brand-500 dark:text-gray-400 text-lg">Instant assessments to understand where you stand.</p>
            </div>
            <Link href="/tools" className="hidden md:inline-flex items-center gap-3 text-sm font-semibold text-brand-800 dark:text-gray-200 group">
              All tools
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-white group-hover:bg-teal-600 transition-all group-hover:scale-105">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'CSRD Checker', desc: 'Does the CSRD apply to you?', href: '/tools/csrd-checker', icon: '📋' },
              { title: 'Carbon Estimator', desc: 'Estimate your emissions footprint.', href: '/tools/carbon-estimator', icon: '🌍' },
              { title: 'ESG Readiness', desc: 'Quiz your sustainability maturity.', href: '/tools/esg-readiness', icon: '📊' },
            ].map(t => (
              <Link key={t.href} href={t.href} className="group rounded-2xl bg-white dark:bg-[#222] border border-brand-200 dark:border-white/10 p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
                <span className="text-2xl">{t.icon}</span>
                <h3 className="mt-3 font-bold text-brand-800 dark:text-white group-hover:text-teal-600 transition-colors">{t.title}</h3>
                <p className="mt-1 text-sm text-brand-500 dark:text-gray-400">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="bg-white dark:bg-[#111]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Guided</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-800 dark:text-white tracking-tight">Learning Tracks</h2>
              <p className="mt-3 text-brand-500 dark:text-gray-400 text-lg">Step-by-step paths curated by sustainability consultants.</p>
            </div>
            <Link href="/learn" className="hidden md:inline-flex items-center gap-3 text-sm font-semibold text-brand-800 dark:text-gray-200 group">
              All tracks
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-white group-hover:bg-teal-600 transition-all group-hover:scale-105">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'New to ESG', desc: 'Start from the basics and build your knowledge.', href: '/learn/new-to-esg', icon: '🌱' },
              { title: 'CSRD Roadmap', desc: 'Prepare for EU sustainability reporting.', href: '/learn/csrd-compliance', icon: '📋' },
              { title: 'Climate Risk', desc: 'Understand and manage climate-related risks.', href: '/learn/climate-risk', icon: '🌍' },
            ].map(t => (
              <Link key={t.href} href={t.href} className="group rounded-2xl bg-brand-50 dark:bg-[#1a1a1a] border border-brand-200 dark:border-white/10 p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
                <span className="text-2xl">{t.icon}</span>
                <h3 className="mt-3 font-bold text-brand-800 dark:text-white group-hover:text-teal-600 transition-colors">{t.title}</h3>
                <p className="mt-1 text-sm text-brand-500 dark:text-gray-400">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518173946687-a4c52f2e0c80?w=1200&h=400&fit=crop"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-teal-800/85" />
        </div>
        {/* Decorative shapes */}
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-medium text-white/80 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Reimagining Impact
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">Ready to take action?</h2>
          <p className="mt-5 text-xl text-teal-100/80 max-w-xl mx-auto leading-relaxed">
            Our team brings decades of sustainability consulting experience. Let Council Fire help you achieve your goals.
          </p>
          <div className="mt-10">
            <a
              href="https://www.councilfire.org/contact"
              className="group inline-flex items-center gap-4 text-lg font-bold text-white"
            >
              Get in Touch
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-teal-600 group-hover:scale-110 transition-all shadow-xl">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
