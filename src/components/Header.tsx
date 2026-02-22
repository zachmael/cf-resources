'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Glossary', href: '/glossary' },
  { label: 'Compare', href: '/compare' },
  { label: 'Locations', href: '/locations' },
  { label: 'Guides', href: '/guides' },
  { label: 'Industries', href: '/industries' },
  { label: 'For You', href: '/for' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-200 dark:border-brand-800 bg-white/95 dark:bg-brand-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-brand-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold text-brand-800 dark:text-brand-200">
            <svg className="h-8 w-8 text-forest-600" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
              <path d="M16 2C10 2 6 8 6 14c0 4 2 7 4 9l6 7 6-7c2-2 4-5 4-9 0-6-4-12-10-12zm0 4c1.5 0 3 1 4 3-1-1-2.5-1.5-4-1.5S13.5 8 12.5 9c1-2 2.5-3 3.5-3z"/>
            </svg>
            Council Fire
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-brand-700 dark:text-brand-300 hover:bg-brand-100 dark:hover:bg-brand-800 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md text-brand-700 dark:text-brand-300 hover:bg-brand-100 dark:hover:bg-brand-800"
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-brand-200 dark:border-brand-800 bg-white dark:bg-brand-950 px-4 py-3" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-700 dark:text-brand-300 hover:bg-brand-100 dark:hover:bg-brand-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
