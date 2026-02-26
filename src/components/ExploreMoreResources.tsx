import Link from 'next/link';

interface CrossLink {
  title: string;
  href: string;
  section: string;
  sectionLabel: string;
}

const sectionColors: Record<string, string> = {
  glossary: 'bg-emerald-100 text-emerald-700',
  compare: 'bg-blue-100 text-blue-700',
  locations: 'bg-purple-100 text-purple-700',
  guides: 'bg-amber-100 text-amber-700',
  industries: 'bg-rose-100 text-rose-700',
  for: 'bg-cyan-100 text-cyan-700',
};

export default function ExploreMoreResources({
  crossLinks,
  sameLinks,
}: {
  crossLinks: CrossLink[];
  sameLinks: CrossLink[];
}) {
  if (crossLinks.length === 0 && sameLinks.length === 0) return null;

  return (
    <section className="mt-14">
      {sameLinks.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Related in This Section</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sameLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-3 rounded-xl border border-brand-200 bg-white p-4 hover:border-teal-300 hover:shadow-md transition-all"
              >
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${sectionColors[link.section] || 'bg-gray-100 text-gray-600'}`}>
                  {link.sectionLabel}
                </span>
                <span className="text-sm font-medium text-brand-800 group-hover:text-teal-700 transition-colors line-clamp-1">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {crossLinks.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Explore More Resources</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {crossLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-3 rounded-xl border border-brand-200 bg-white p-4 hover:border-amber-300 hover:shadow-md transition-all"
              >
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${sectionColors[link.section] || 'bg-gray-100 text-gray-600'}`}>
                  {link.sectionLabel}
                </span>
                <span className="text-sm font-medium text-brand-800 group-hover:text-amber-700 transition-colors line-clamp-1">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
