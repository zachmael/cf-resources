import Link from 'next/link';
import Image from 'next/image';

const popularLinks = [
  { label: 'Glossary', href: '/glossary', icon: '📖' },
  { label: 'How-To Guides', href: '/how-to', icon: '🛠️' },
  { label: 'Regulations', href: '/regulations', icon: '⚖️' },
  { label: 'Frameworks', href: '/frameworks', icon: '🏗️' },
  { label: 'Tools', href: '/tools', icon: '🧰' },
  { label: 'Case Studies', href: '/case-studies', icon: '📊' },
];

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      {/* Logo */}
      <Link href="/" className="mb-10">
        <Image src="/cf-logo.svg" alt="Council Fire" width={48} height={48} className="dark:invert" />
      </Link>

      {/* 404 Badge */}
      <div className="w-20 h-20 rounded-full bg-[#258193]/10 dark:bg-[#258193]/20 flex items-center justify-center mb-6">
        <span className="text-4xl font-extrabold font-heading text-[#258193]">404</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-800 dark:text-white text-center">
        Page not found
      </h1>
      <p className="mt-3 text-lg text-brand-500 dark:text-gray-400 text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Try searching or explore popular resources below.
      </p>

      {/* Search */}
      <form action="/" method="GET" className="mt-8 w-full max-w-md">
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            name="q"
            placeholder="Search all resources…"
            className="w-full rounded-full border border-brand-200 dark:border-white/10 bg-white dark:bg-[#222] pl-12 pr-5 py-3.5 text-base text-brand-800 dark:text-white placeholder:text-brand-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#258193] focus:border-[#258193] shadow-sm"
            aria-label="Search resources"
          />
        </div>
      </form>

      {/* Popular Resources */}
      <div className="mt-10 w-full max-w-lg">
        <h2 className="text-sm font-semibold text-brand-400 dark:text-gray-500 uppercase tracking-wider text-center mb-4">
          Popular Resources
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {popularLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 px-4 py-3 rounded-xl border border-brand-200 dark:border-white/10 bg-white dark:bg-[#222] hover:border-[#258193] dark:hover:border-[#258193] hover:shadow-md transition-all text-sm font-medium text-brand-700 dark:text-gray-300"
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#258193] text-white font-semibold hover:bg-[#1e6b7a] transition-colors shadow-lg"
        >
          <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Back to Home
        </Link>
        <a
          href="https://www.councilfire.org/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#E8912D] hover:text-[#d07e25] transition-colors"
        >
          Or talk to our team →
        </a>
      </div>
    </div>
  );
}
