'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

interface SearchItem {
  title: string;
  slug: string;
  section: string;
  description: string;
}

const sectionColors: Record<string, string> = {
  glossary: 'bg-emerald-100 text-emerald-700',
  compare: 'bg-blue-100 text-blue-700',
  locations: 'bg-purple-100 text-purple-700',
  guides: 'bg-amber-100 text-amber-700',
  industries: 'bg-rose-100 text-rose-700',
  for: 'bg-cyan-100 text-cyan-700',
};

const sectionLabels: Record<string, string> = {
  glossary: 'Glossary',
  compare: 'Compare',
  locations: 'Location',
  guides: 'Guide',
  industries: 'Industry',
  for: 'For You',
};

export default function HeaderSearch() {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [items, setItems] = useState<SearchItem[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load search index lazily
  useEffect(() => {
    if (!expanded || items.length > 0) return;
    fetch('/search-index.json')
      .then(r => r.json())
      .then(setItems)
      .catch(() => {});
  }, [expanded, items.length]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setExpanded(false);
        setQuery('');
        setResults([]);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Keyboard shortcut: Ctrl/Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setExpanded(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      if (e.key === 'Escape') {
        setExpanded(false);
        setQuery('');
        setResults([]);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const search = useCallback((q: string) => {
    setQuery(q);
    if (!q.trim()) { setResults([]); return; }
    const lower = q.toLowerCase();
    const matched = items
      .filter(item =>
        item.title.toLowerCase().includes(lower) ||
        item.description.toLowerCase().includes(lower)
      )
      .slice(0, 8);
    setResults(matched);
  }, [items]);

  return (
    <div ref={ref} className="relative">
      {!expanded ? (
        <button
          onClick={() => {
            setExpanded(true);
            setTimeout(() => inputRef.current?.focus(), 100);
          }}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-brand-500 dark:text-gray-400 hover:text-brand-700 dark:hover:text-white hover:bg-brand-50 dark:hover:bg-white/10 transition-all"
          aria-label="Search"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="hidden md:inline text-xs text-brand-400">⌘K</span>
        </button>
      ) : (
        <div className="w-72 md:w-80">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={e => search(e.target.value)}
              placeholder="Search resources…"
              className="w-full rounded-lg border border-brand-200 dark:border-white/10 bg-white dark:bg-[#222] pl-9 pr-3 py-2 text-sm text-brand-800 dark:text-white placeholder:text-brand-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          {results.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 rounded-xl border border-brand-200 dark:border-white/10 bg-white dark:bg-[#222] shadow-xl z-50 overflow-hidden max-h-96 overflow-y-auto">
              {results.map(item => (
                <Link
                  key={`${item.section}-${item.slug}`}
                  href={`/${item.section}/${item.slug}`}
                  onClick={() => { setExpanded(false); setQuery(''); setResults([]); }}
                  className="flex items-center gap-2 px-4 py-3 hover:bg-brand-50 dark:hover:bg-white/5 border-b border-brand-100 dark:border-white/10 last:border-0 transition-colors"
                >
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${sectionColors[item.section] || 'bg-gray-100 text-gray-600'}`}>
                    {sectionLabels[item.section] || item.section}
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-brand-800 dark:text-white truncate">{item.title}</div>
                    {item.description && (
                      <div className="text-xs text-brand-500 dark:text-gray-400 truncate">{item.description}</div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
          {query && results.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 rounded-xl border border-brand-200 dark:border-white/10 bg-white dark:bg-[#222] shadow-xl z-50 p-4 text-sm text-brand-500 dark:text-gray-400 text-center">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
