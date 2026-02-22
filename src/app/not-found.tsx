import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-6xl font-bold font-heading text-brand-900 dark:text-brand-50">404</h1>
      <p className="mt-4 text-lg text-brand-600 dark:text-brand-400">Page not found.</p>
      <Link href="/" className="mt-6 inline-block rounded-lg bg-forest-600 text-white font-semibold px-6 py-3 hover:bg-forest-700 transition-colors">
        Go Home
      </Link>
    </div>
  );
}
