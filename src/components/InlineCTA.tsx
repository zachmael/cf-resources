import Image from 'next/image';

export default function InlineCTA({ topic }: { topic: string }) {
  return (
    <aside className="my-10 rounded-xl border border-teal-200 dark:border-teal-800 bg-gradient-to-r from-teal-50 to-white dark:from-teal-900/20 dark:to-[#1a1a1a] p-6 md:p-8 not-prose">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="shrink-0">
          <Image src="/logo-icon.png" alt="Council Fire" width={400} height={364} className="h-10 w-auto opacity-80" />
        </div>
        <div className="flex-1">
          <p className="text-base font-bold text-brand-800 dark:text-white leading-snug">
            Need help with {topic}?
          </p>
          <p className="mt-1 text-sm text-brand-500 dark:text-gray-400 leading-relaxed">
            Council Fire&apos;s consultants bring decades of hands-on experience. Let&apos;s talk about your goals.
          </p>
        </div>
        <a
          href="https://www.councilfire.org/contact"
          className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#258193] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#1e6b7a] transition-colors shadow-sm"
        >
          Work With Us
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
