'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navItems = [
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
    <header className="sticky top-0 z-50 border-b border-[#eaeaea] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="https://www.councilfire.org" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Council Fire" width={32} height={32} className="h-8 w-auto" />
            <span className="font-heading text-xl font-semibold text-brand-800">Resources</span>
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-brand-700 hover:text-teal-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md text-brand-700 hover:bg-brand-50"
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
        <nav className="md:hidden border-t border-[#eaeaea] bg-white px-4 py-3" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-700 hover:text-teal-500 hover:bg-brand-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
