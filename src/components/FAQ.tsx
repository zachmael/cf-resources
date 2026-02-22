'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold font-heading text-brand-800 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="border border-brand-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`w-full flex items-center justify-between px-5 py-4 text-left font-medium text-brand-800 hover:bg-brand-50 transition-colors ${openIndex === i ? 'text-teal-500' : ''}`}
              aria-expanded={openIndex === i}
            >
              <span>{item.question}</span>
              <svg
                className={`h-5 w-5 shrink-0 transition-transform ${openIndex === i ? 'rotate-180 text-teal-500' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4 text-brand-600 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
