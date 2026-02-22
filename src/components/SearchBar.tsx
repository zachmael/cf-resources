'use client';

import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';

interface SearchItem {
  title: string;
  slug: string;
  section: string;
  description: string;
}

export default function SearchBar({ items }: { items: SearchItem[] }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const fuseRef = useRef<Fuse<SearchItem>>();

  useEffect(() => {
    fuseRef.current = new Fuse(items, {
      keys: ['title', 'description'],
      threshold: 0.3,
    });
  }, [items]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSearch = (q: string) => {
    setQuery(q);
    if (!q.trim()) { setResults([]); setOpen(false); return; }
    const res = fuseRef.current?.search(q).slice(0, 8).map((r) => r.item) || [];
    setResults(res);
    setOpen(true);
  };

  return (
    <div ref={ref} className="relative w-full max-w-xl">
      <div className="relative">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search all resources…"
          className="w-full rounded-full border border-brand-200 bg-white pl-12 pr-5 py-3.5 text-base text-brand-800 placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm"
          aria-label="Search resources"
        />
      </div>
      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-brand-200 bg-white shadow-xl z-50 overflow-hidden">
          {results.map((item) => (
            <Link
              key={`${item.section}-${item.slug}`}
              href={`/${item.section}/${item.slug}`}
              onClick={() => { setOpen(false); setQuery(''); }}
              className="block px-5 py-3.5 hover:bg-brand-50 border-b border-brand-100 last:border-0 transition-colors"
            >
              <span className="text-sm font-medium text-brand-800">{item.title}</span>
              <span className="ml-2 text-xs font-medium text-teal-500 capitalize">{item.section}</span>
              {item.description && (
                <p className="text-xs text-brand-500 mt-0.5 line-clamp-1">{item.description}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
