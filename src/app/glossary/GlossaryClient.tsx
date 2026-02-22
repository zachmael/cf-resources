'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';

interface GlossaryItem {
  slug: string;
  title: string;
  description: string;
  category: string | null;
}

export default function GlossaryClient({ items }: { items: GlossaryItem[] }) {
  const categories = useMemo(() => [...new Set(items.map((i) => i.category).filter(Boolean))] as string[], [items]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory ? items.filter((i) => i.category === activeCategory) : items;

  const grouped: Record<string, GlossaryItem[]> = {};
  for (const item of filtered) {
    const letter = item.title[0].toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(item);
  }

  const letters = Object.keys(grouped).sort();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Category Filters */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
              !activeCategory ? 'bg-teal-500 text-white border-teal-500' : 'bg-white text-brand-600 border-brand-200 hover:border-teal-400 hover:text-teal-600'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
                activeCategory === cat ? 'bg-teal-500 text-white border-teal-500' : 'bg-white text-brand-600 border-brand-200 hover:border-teal-400 hover:text-teal-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Alphabet Quick Jump */}
      <div className="flex flex-wrap gap-1 mb-10 pb-6 border-b border-brand-100">
        {letters.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-semibold text-brand-600 hover:bg-teal-50 hover:text-teal-600 transition-colors"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Cards by Letter */}
      {letters.map((letter) => (
        <div key={letter} id={`letter-${letter}`} className="mb-10 scroll-mt-24">
          <h2 className="text-3xl font-bold text-teal-500 mb-5 flex items-center gap-3">
            {letter}
            <span className="h-px flex-1 bg-brand-100" />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grouped[letter].map((item) => (
              <Link
                key={item.slug}
                href={`/glossary/${item.slug}`}
                className="group rounded-2xl border border-brand-200 bg-white p-5 hover:border-teal-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3 className="font-semibold text-brand-800 group-hover:text-teal-600 transition-colors">{item.title}</h3>
                <p className="text-sm text-brand-500 mt-2 line-clamp-2 leading-relaxed">{item.description}</p>
                {item.category && (
                  <span className="inline-block mt-3 text-xs font-medium text-teal-600 bg-teal-50 rounded-full px-2.5 py-0.5">{item.category}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
