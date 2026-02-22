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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Category Filters */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all ${
              !activeCategory ? 'bg-teal-500 text-white border-teal-500 shadow-sm' : 'bg-white text-brand-600 border-brand-200 hover:border-teal-400 hover:text-teal-600'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all ${
                activeCategory === cat ? 'bg-teal-500 text-white border-teal-500 shadow-sm' : 'bg-white text-brand-600 border-brand-200 hover:border-teal-400 hover:text-teal-600'
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
            className="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold text-brand-600 hover:bg-teal-50 hover:text-teal-600 transition-colors"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Cards by Letter */}
      {letters.map((letter) => (
        <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-24">
          <h2 className="text-4xl font-extrabold text-brand-800 mb-6 flex items-center gap-4">
            <span className="text-teal-500">{letter}</span>
            <span className="h-px flex-1 bg-brand-100" />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grouped[letter].map((item) => (
              <Link
                key={item.slug}
                href={`/glossary/${item.slug}`}
                className="group rounded-2xl border border-brand-200 bg-white p-6 hover:border-teal-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-bold text-brand-800 group-hover:text-teal-600 transition-colors">{item.title}</h3>
                <p className="text-sm text-brand-500 mt-2 line-clamp-2 leading-relaxed">{item.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  {item.category && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 rounded-full px-2.5 py-0.5">
                      <span className="w-1 h-1 rounded-full bg-amber-500" />
                      {item.category}
                    </span>
                  )}
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-50 text-brand-400 group-hover:bg-teal-500 group-hover:text-white transition-all ml-auto">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
