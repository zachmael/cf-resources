import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Sustainability Glossary',
  description: 'A comprehensive glossary of sustainability, ESG, and climate terminology — explained by consultants, for professionals.',
};

export default function GlossaryIndex() {
  const items = getAllContent('glossary');
  const categories = [...new Set(items.map((i) => i.meta.category).filter(Boolean))] as string[];

  const grouped: Record<string, typeof items> = {};
  for (const item of items) {
    const letter = item.meta.title[0].toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(item);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[{ label: 'Glossary' }]} />
      <h1 className="text-4xl font-semibold font-heading text-brand-800 mb-4">Sustainability Glossary</h1>
      <p className="text-lg text-brand-600 mb-8 max-w-3xl">
        Clear definitions for the terms shaping sustainability strategy, ESG reporting, and climate policy.
      </p>

      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <span key={cat} className="px-3 py-1 text-sm rounded-full bg-brand-100 text-brand-700">
              {cat}
            </span>
          ))}
        </div>
      )}

      {Object.keys(grouped).sort().map((letter) => (
        <div key={letter} className="mb-8">
          <h2 className="text-2xl font-semibold text-teal-500 mb-3">{letter}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {grouped[letter].map((item) => (
              <Link
                key={item.meta.slug}
                href={`/glossary/${item.meta.slug}`}
                className="block rounded-lg border border-brand-200 p-4 hover:border-teal-400 hover:shadow transition-all"
              >
                <h3 className="font-semibold text-brand-800">{item.meta.title}</h3>
                <p className="text-sm text-brand-500 mt-1 line-clamp-2">{item.meta.description}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
