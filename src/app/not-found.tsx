import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
      <div className="w-24 h-24 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-8">
        <span className="text-5xl font-extrabold font-heading text-brand-300">404</span>
      </div>
      <h1 className="text-4xl font-extrabold font-heading text-brand-800">Page not found</h1>
      <p className="mt-3 text-lg text-brand-500">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-brand-800">
        Back to Home
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-white group-hover:bg-teal-600 transition-all group-hover:scale-105">
          <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </span>
      </Link>
    </div>
  );
}
