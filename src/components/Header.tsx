'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import HeaderSearch from './HeaderSearch';
import DarkModeToggle from './DarkModeToggle';

const navItems = [
  { label: 'Glossary', href: '/glossary' },
  { label: 'Compare', href: '/compare' },
  { label: 'Locations', href: '/locations' },
  { label: 'Guides', href: '/guides' },
  { label: 'How-To', href: '/how-to' },
  { label: 'Industries', href: '/industries' },
  { label: 'Regulations', href: '/regulations' },
  { label: 'For You', href: '/for' },
  { label: 'Tools', href: '/tools' },
  { label: 'Learn', href: '/learn' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] dark:border-white/10 bg-white/70 dark:bg-[#111]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#111]/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="https://www.councilfire.org" className="flex items-center gap-2.5 shrink-0">
            <Image src="/logo-dark.png" alt="Council Fire" width={4769} height={1242} className="h-9 w-auto dark:hidden" priority />
            <Image src="/logo.png" alt="Council Fire" width={4769} height={1242} className="h-9 w-auto hidden dark:block" priority />
          </a>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-brand-600 dark:text-gray-300 hover:text-brand-800 dark:hover:text-white hover:bg-brand-50 dark:hover:bg-white/10 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <HeaderSearch />
            <DarkModeToggle />
            <a
              href="https://www.councilfire.org/contact"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-brand-800 dark:text-gray-200"
            >
              Contact Us
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-white group-hover:bg-teal-600 transition-all group-hover:shadow-lg group-hover:scale-105">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-brand-600 hover:bg-brand-50 transition-colors"
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

      {open && (
        <nav className="lg:hidden border-t border-black/[0.06] dark:border-white/10 bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl px-4 py-4 space-y-1" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-brand-700 dark:text-gray-300 hover:text-teal-500 hover:bg-brand-50 dark:hover:bg-white/10 transition-all"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.councilfire.org/contact"
            className="flex items-center justify-center gap-2 mt-3 rounded-full bg-teal-500 px-4 py-2.5 text-sm font-semibold text-white"
          >
            Contact Us
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </nav>
      )}
    </header>
  );
}
