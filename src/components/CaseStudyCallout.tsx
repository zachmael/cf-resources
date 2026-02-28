import Link from 'next/link';
import { type CaseStudyLink } from '@/lib/case-study-links';

export default function CaseStudyCallout({ studies }: { studies: CaseStudyLink[] }) {
  if (!studies.length) return null;

  return (
    <div className="not-prose my-10 space-y-4">
      {studies.map((cs) => (
        <div
          key={cs.slug}
          className="border-l-4 border-[#258193] bg-[#258193]/5 dark:bg-[#258193]/10 rounded-r-xl px-5 py-4"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-[#258193] mb-1">
            See how we&apos;ve done this
          </p>
          <Link
            href={`/case-studies/${cs.slug}`}
            className="text-base font-bold text-brand-900 dark:text-white hover:text-[#258193] transition-colors leading-snug"
          >
            {cs.title}
          </Link>
          <p className="text-sm text-brand-600 dark:text-gray-400 mt-1 leading-relaxed">
            {cs.summary}
          </p>
          <Link
            href={`/case-studies/${cs.slug}`}
            className="inline-block mt-2 text-sm font-semibold text-[#258193] hover:text-[#1a5f6d] transition-colors"
          >
            Read case study →
          </Link>
        </div>
      ))}
    </div>
  );
}
