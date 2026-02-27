'use client';

import Link from 'next/link';
import { useState } from 'react';

export interface TrackStep {
  title: string;
  href: string;
  description: string;
}

interface Props {
  title: string;
  description: string;
  steps: TrackStep[];
}

export default function LearningTrack({ title, description, steps }: Props) {
  const [visited, setVisited] = useState<Set<number>>(new Set());
  const progress = visited.size;
  const total = steps.length;

  const markVisited = (i: number) => {
    setVisited(prev => new Set(prev).add(i));
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-800 dark:text-white mb-3">{title}</h1>
      <p className="text-brand-500 dark:text-gray-400 mb-8 leading-relaxed">{description}</p>

      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between text-xs font-semibold text-brand-500 dark:text-gray-400 mb-2">
          <span>{progress} of {total} steps explored</span>
          <span>{total > 0 ? Math.round(progress / total * 100) : 0}%</span>
        </div>
        <div className="h-2 rounded-full bg-brand-200 dark:bg-white/10 overflow-hidden">
          <div className="h-full rounded-full bg-teal-500 transition-all duration-500" style={{ width: `${total > 0 ? progress / total * 100 : 0}%` }} />
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          const isVisited = visited.has(i);
          return (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-5 top-14 bottom-0 w-0.5 bg-brand-200 dark:bg-white/10" style={{ height: 'calc(100% - 2rem)' }} />
              )}
              {isLast ? (
                <a
                  href={step.href}
                  className="flex items-start gap-4 rounded-2xl border-2 border-amber-300 dark:border-amber-600 bg-amber-50 dark:bg-amber-900/20 p-5 hover:shadow-lg transition-all"
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-white font-bold text-sm">★</span>
                  <div>
                    <h3 className="font-bold text-brand-800 dark:text-white">{step.title}</h3>
                    <p className="text-sm text-brand-500 dark:text-gray-400 mt-1">{step.description}</p>
                  </div>
                </a>
              ) : (
                <Link
                  href={step.href}
                  onClick={() => markVisited(i)}
                  className={`flex items-start gap-4 rounded-2xl border bg-white dark:bg-[#222] p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all ${isVisited ? 'border-teal-300 dark:border-teal-700' : 'border-brand-200 dark:border-white/10'}`}
                >
                  <span className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm ${isVisited ? 'bg-teal-500 text-white' : 'bg-brand-100 dark:bg-white/10 text-brand-500 dark:text-gray-400'}`}>
                    {isVisited ? '✓' : i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-brand-800 dark:text-white group-hover:text-teal-600">{step.title}</h3>
                    <p className="text-sm text-brand-500 dark:text-gray-400 mt-1">{step.description}</p>
                  </div>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
