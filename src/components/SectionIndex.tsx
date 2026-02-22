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
      <section className="bg-gradient-to-b from-brand-50 to-white border-b border-brand-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12">
          <Breadcrumb items={[{ label: breadcrumbLabel }]} />
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-brand-800 tracking-tight">{title}</h1>
          <p className="mt-4 text-lg text-brand-500 max-w-2xl leading-relaxed">{description}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item) => (
              <Link key={item.meta.slug} href={`/${section}/${item.meta.slug}`}
                className="group rounded-2xl border border-brand-200 bg-white p-6 hover:border-teal-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <h2 className="font-semibold text-brand-800 group-hover:text-teal-600 transition-colors">{item.meta.title}</h2>
                <p className="text-sm text-brand-500 mt-2 line-clamp-2 leading-relaxed">{item.meta.description}</p>
                {item.meta.category && (
                  <span className="inline-block mt-3 text-xs font-medium text-teal-600 bg-teal-50 rounded-full px-2.5 py-0.5">{item.meta.category}</span>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold font-heading text-brand-800">Coming Soon</h2>
            <p className="mt-2 text-brand-500 max-w-md mx-auto">We&apos;re building this section. Check back soon for expert-curated content.</p>
            <Link href="/" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-teal-500 hover:text-teal-600">
              ← Back to Home
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
