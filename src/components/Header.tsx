'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import HeaderSearch from './HeaderSearch';
import DarkModeToggle from './DarkModeToggle';

interface NavItem {
  label: string;
  href: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    label: 'Knowledge',
    items: [
      { label: 'Glossary', href: '/glossary' },
      { label: 'Frameworks', href: '/frameworks' },
      { label: 'Regulations', href: '/regulations' },
      { label: 'Comparisons', href: '/compare' },
    ],
  },
  {
    label: 'Guides',
    items: [
      { label: 'How-To Guides', href: '/how-to' },
      { label: 'Step-by-Step Guides', href: '/guides' },
      { label: 'Learning Tracks', href: '/learn' },
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
  {
    label: 'Explore',
    items: [
      { label: 'By Industry', href: '/industries' },
      { label: 'By Location', href: '/locations' },
      { label: 'By Role', href: '/for' },
    ],
  },
];

const topLevelLinks: NavItem[] = [
  { label: 'Tools', href: '/tools' },
  { label: 'Resources', href: '/resources' },
];

function NavDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => { if (timeout.current) clearTimeout(timeout.current); };
  }, []);

  const handleEnter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div ref={ref} className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-brand-600 dark:text-gray-300 hover:text-brand-800 dark:hover:text-white hover:bg-brand-50 dark:hover:bg-white/10 transition-all"
      >
        {group.label}
        <svg className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-52 rounded-xl border border-brand-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] shadow-xl py-2 z-50">
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-brand-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-brand-50 dark:hover:bg-white/5 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] dark:border-white/10 bg-white/70 dark:bg-[#111]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#111]/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image src="/logo-dark.png" alt="Council Fire" width={4769} height={1242} className="h-9 w-auto dark:hidden" priority />
            <Image src="/logo.png" alt="Council Fire" width={4769} height={1242} className="h-9 w-auto hidden dark:block" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navGroups.map((group) => (
              <NavDropdown key={group.label} group={group} />
            ))}
            {topLevelLinks.map((item) => (
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
            <Link
              href="/work-with-us"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-brand-800 dark:text-gray-200"
            >
              Work With Us
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-white group-hover:bg-teal-600 transition-all group-hover:shadow-lg group-hover:scale-105">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-brand-600 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-white/10 transition-colors"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-black/[0.06] dark:border-white/10 bg-white/95 dark:bg-[#111]/95 backdrop-blur-xl px-4 py-4 space-y-1" aria-label="Mobile navigation">
          {navGroups.map((group) => (
            <div key={group.label}>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === group.label ? null : group.label)}
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-base font-semibold text-brand-700 dark:text-gray-200 hover:bg-brand-50 dark:hover:bg-white/10 transition-all"
              >
                {group.label}
                <svg className={`h-4 w-4 transition-transform ${mobileExpanded === group.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileExpanded === group.label && (
                <div className="pl-4 space-y-0.5 mb-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 rounded-lg text-sm text-brand-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-brand-50 dark:hover:bg-white/10 transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {topLevelLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-brand-700 dark:text-gray-300 hover:text-teal-500 hover:bg-brand-50 dark:hover:bg-white/10 transition-all"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/work-with-us"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 mt-3 rounded-full bg-teal-500 px-4 py-2.5 text-sm font-semibold text-white"
          >
            Work With Us
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </nav>
      )}
    </header>
  );
}
