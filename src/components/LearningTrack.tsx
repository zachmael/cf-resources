'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export interface TrackStep {
  title: string;
  href: string;
  description: string;
}

interface Props {
  title: string;
  description: string;
  steps: TrackStep[];
  trackSlug: string;
}

function getStorageKey(trackSlug: string) {
  return `cf-learning-track-${trackSlug}`;
}

function loadCompleted(trackSlug: string): Set<number> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(getStorageKey(trackSlug));
    if (raw) return new Set(JSON.parse(raw));
  } catch {}
  return new Set();
}

function saveCompleted(trackSlug: string, completed: Set<number>) {
  try {
    localStorage.setItem(getStorageKey(trackSlug), JSON.stringify([...completed]));
  } catch {}
}

export default function LearningTrack({ title, description, steps, trackSlug }: Props) {
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setCompleted(loadCompleted(trackSlug));
    setMounted(true);
  }, [trackSlug]);

  const toggleStep = (i: number) => {
    setCompleted(prev => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      saveCompleted(trackSlug, next);
      return next;
    });
  };

  const markAndNavigate = (i: number) => {
    const next = new Set(completed);
    next.add(i);
    saveCompleted(trackSlug, next);
    setCompleted(next);
  };

  const progress = completed.size;
  const total = steps.length;
  const allDone = progress === total;

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-800 dark:text-white mb-3">{title}</h1>
      <p className="text-brand-500 dark:text-gray-400 mb-8 leading-relaxed">{description}</p>

      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between text-xs font-semibold text-brand-500 dark:text-gray-400 mb-2">
          <span>{progress} of {total} steps completed</span>
          <span>{total > 0 ? Math.round(progress / total * 100) : 0}%</span>
        </div>
        <div className="h-2.5 rounded-full bg-brand-200 dark:bg-white/10 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${allDone ? 'bg-amber-500' : 'bg-teal-500'}`}
            style={{ width: `${total > 0 ? progress / total * 100 : 0}%` }}
          />
        </div>
        {allDone && (
          <p className="mt-3 text-sm font-semibold text-amber-600 dark:text-amber-400">🎉 Track complete! Nice work.</p>
        )}
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          const isDone = mounted && completed.has(i);

          return (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className={`absolute left-5 top-14 w-0.5 transition-colors duration-300 ${isDone ? 'bg-teal-300 dark:bg-teal-700' : 'bg-brand-200 dark:bg-white/10'}`}
                  style={{ height: 'calc(100% - 2rem)' }}
                />
              )}

              <div className={`flex items-start gap-4 rounded-2xl border p-5 transition-all ${
                isLast
                  ? 'border-2 border-amber-300 dark:border-amber-600 bg-amber-50 dark:bg-amber-900/20'
                  : isDone
                    ? 'border-teal-300 dark:border-teal-700 bg-teal-50/50 dark:bg-teal-900/10'
                    : 'border-brand-200 dark:border-white/10 bg-white dark:bg-[#222] hover:shadow-lg hover:-translate-y-0.5'
              }`}>
                {/* Checkbox / Step number */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleStep(i);
                  }}
                  className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition-all cursor-pointer hover:scale-110 ${
                    isLast && !isDone
                      ? 'bg-amber-500 text-white hover:bg-amber-600'
                      : isDone
                        ? 'bg-teal-500 text-white hover:bg-teal-600'
                        : 'bg-brand-100 dark:bg-white/10 text-brand-500 dark:text-gray-400 hover:bg-brand-200 dark:hover:bg-white/20'
                  }`}
                  title={isDone ? 'Mark as incomplete' : 'Mark as complete'}
                  aria-label={isDone ? `Uncheck step ${i + 1}` : `Check off step ${i + 1}`}
                >
                  {isDone ? '✓' : isLast ? '★' : i + 1}
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {step.href.startsWith('http') ? (
                    <a
                      href={step.href}
                      onClick={() => markAndNavigate(i)}
                      className="block"
                    >
                      <h3 className={`font-bold transition-colors ${isDone ? 'text-teal-700 dark:text-teal-400 line-through decoration-teal-300 dark:decoration-teal-700' : 'text-brand-800 dark:text-white hover:text-teal-600'}`}>
                        {step.title}
                        {step.href.startsWith('http') && <span className="text-brand-400 ml-1 text-xs">↗</span>}
                      </h3>
                      <p className="text-sm text-brand-500 dark:text-gray-400 mt-1">{step.description}</p>
                    </a>
                  ) : (
                    <Link
                      href={step.href}
                      onClick={() => markAndNavigate(i)}
                    >
                      <h3 className={`font-bold transition-colors ${isDone ? 'text-teal-700 dark:text-teal-400 line-through decoration-teal-300 dark:decoration-teal-700' : 'text-brand-800 dark:text-white hover:text-teal-600'}`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-brand-500 dark:text-gray-400 mt-1">{step.description}</p>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reset button */}
      {mounted && completed.size > 0 && (
        <button
          onClick={() => {
            setCompleted(new Set());
            saveCompleted(trackSlug, new Set());
          }}
          className="mt-8 text-xs text-brand-400 dark:text-gray-500 hover:text-brand-600 dark:hover:text-gray-300 transition-colors"
        >
          Reset progress
        </button>
      )}
    </div>
  );
}
