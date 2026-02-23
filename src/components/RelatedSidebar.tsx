import Link from 'next/link';
import Image from 'next/image';

interface RelatedItem {
  title: string;
  href: string;
  section?: string;
}

export default function RelatedSidebar({ items, title = 'Related Resources' }: { items: RelatedItem[]; title?: string }) {
  return (
    <div className="space-y-6">
      {/* Related resources */}
      {items.length > 0 && (
        <aside className="rounded-2xl border border-brand-200 bg-white p-6 shadow-sm">
          <h3 className="font-heading font-semibold text-brand-800 mb-4 text-sm uppercase tracking-wider">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center rounded-full bg-brand-50 border border-brand-200 px-3.5 py-1.5 text-sm text-brand-700 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 transition-all"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </aside>
      )}

      {/* Persistent CTA */}
      <aside className="rounded-2xl overflow-hidden shadow-lg border border-teal-200">
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-6 text-white">
          <div className="flex items-center gap-2 mb-3">
            <Image src="/logo-icon.png" alt="Council Fire" width={400} height={364} className="h-7 w-auto brightness-0 invert" />
          </div>
          <h3 className="font-heading font-bold text-lg leading-snug">
            Need expert guidance?
          </h3>
          <p className="text-sm text-teal-100 mt-2 leading-relaxed">
            Council Fire helps organizations navigate sustainability strategy, climate resilience, and ESG reporting.
          </p>
          <a
            href="https://www.councilfire.org/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-teal-700 px-5 py-2.5 text-sm font-bold hover:bg-teal-50 hover:shadow-md transition-all"
          >
            Talk to Our Team
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </aside>
    </div>
  );
}
