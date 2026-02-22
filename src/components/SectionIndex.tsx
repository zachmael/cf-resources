import Link from 'next/link';
import Breadcrumb from './Breadcrumb';
import { type ContentItem } from '@/lib/content';

interface Props {
  title: string;
  description: string;
  section: string;
  items: ContentItem[];
  breadcrumbLabel: string;
}

export default function SectionIndex({ title, description, section, items, breadcrumbLabel }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-50 border-b border-brand-100">
        {/* Decorative shapes */}
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-brand-100 opacity-60" />
        <div className="absolute -bottom-16 -left-16 w-[250px] h-[250px] rounded-full bg-brand-100 opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-14">
          <Breadcrumb items={[{ label: breadcrumbLabel }]} />
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">{breadcrumbLabel}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-brand-800 tracking-tight">{title}</h1>
          <p className="mt-4 text-lg text-brand-500 max-w-2xl leading-relaxed">{description}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item, i) => (
              <Link key={item.meta.slug} href={`/${section}/${item.meta.slug}`}
                className="group rounded-2xl border border-brand-200 bg-white p-6 hover:border-teal-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}>
                <h2 className="font-bold text-brand-800 group-hover:text-teal-600 transition-colors">{item.meta.title}</h2>
                <p className="text-sm text-brand-500 mt-2 line-clamp-2 leading-relaxed">{item.meta.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  {item.meta.category && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 rounded-full px-2.5 py-0.5">
                      <span className="w-1 h-1 rounded-full bg-amber-500" />
                      {item.meta.category}
                    </span>
                  )}
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-50 text-brand-400 group-hover:bg-teal-500 group-hover:text-white transition-all ml-auto">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-20 h-20 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🚧</span>
            </div>
            <h2 className="text-3xl font-extrabold font-heading text-brand-800">Coming Soon</h2>
            <p className="mt-3 text-brand-500 max-w-md mx-auto text-lg">We&apos;re building this section. Check back soon for expert-curated content.</p>
            <Link href="/" className="mt-8 group inline-flex items-center gap-3 text-sm font-semibold text-brand-800">
              Back to Home
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500 text-white group-hover:bg-teal-600 transition-all">
                <svg className="h-3.5 w-3.5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
