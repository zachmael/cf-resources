import Link from 'next/link';
import { type LeadMagnet } from '@/lib/lead-magnet-config';

export default function LeadMagnetBanner({ magnet }: { magnet: LeadMagnet }) {
  return (
    <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="text-2xl leading-none mt-0.5" aria-hidden="true">{magnet.icon}</span>
        <div className="min-w-0">
          <h3 className="text-sm font-bold text-brand-800 dark:text-gray-200 leading-snug">
            {magnet.title}
          </h3>
          <p className="text-xs text-brand-600 dark:text-gray-400 mt-1 leading-relaxed">
            {magnet.description}
          </p>
          <Link
            href={magnet.href}
            className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 mt-2.5 transition-colors"
          >
            Get Free Resource
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
