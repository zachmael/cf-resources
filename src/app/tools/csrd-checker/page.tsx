'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const steps = [
  { question: 'How many employees does your company have?', options: ['Fewer than 250', '250–499', '500–749', '750+'] },
  { question: 'What is your annual net revenue?', options: ['Under €25 million', '€25–50 million', '€50–150 million', 'Over €150 million'] },
  { question: 'Does your company have operations or subsidiaries in the EU?', options: ['No', 'Yes, minor presence', 'Yes, significant operations', 'Headquartered in the EU'] },
  { question: 'Is your company listed on an EU-regulated market?', options: ['No', 'Yes, on an SME growth market', 'Yes, on a main regulated market'] },
];

type Result = { level: string; color: string; explanation: string };

function getResult(answers: number[]): Result {
  const [employees, revenue, eu, listed] = answers;
  // Large EU-listed or large EU company
  if (listed === 2 || (eu >= 2 && employees >= 2 && revenue >= 2)) {
    return { level: 'Definitely applies', color: 'text-red-600', explanation: 'Your organization meets the thresholds for CSRD reporting. Large EU-listed companies and large EU companies (500+ employees, >€150M revenue) are in the first wave (FY 2024 reports due 2025).' };
  }
  if ((eu >= 2 && (employees >= 1 || revenue >= 1)) || listed === 1) {
    return { level: 'Likely applies', color: 'text-amber-600', explanation: 'Your organization likely falls within CSRD scope. Companies with 250+ employees or €25M+ revenue with significant EU presence are covered from FY 2025. SME-listed companies have until FY 2026.' };
  }
  if (eu >= 1 || employees >= 1 || revenue >= 1) {
    return { level: 'May apply in future', color: 'text-teal-600', explanation: 'While CSRD may not apply to you yet, the directive is expanding. Non-EU companies with €150M+ EU revenue will be covered from FY 2028. Supply chain pressure from covered companies may also affect you.' };
  }
  return { level: 'Does not currently apply', color: 'text-green-600', explanation: 'Based on your answers, CSRD likely does not apply to your organization at this time. However, voluntary ESG reporting can still provide strategic advantages and prepare you for future regulations.' };
}

export default function CSRDChecker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const done = answers.length === steps.length;
  const result = done ? getResult(answers) : null;

  const handleSelect = (idx: number) => {
    const next = [...answers, idx];
    setAnswers(next);
    if (next.length < steps.length) setStep(step + 1);
  };

  return (
    <>
      <Script id="csrd-checker-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'CSRD Applicability Checker',
        description: 'Check whether the EU Corporate Sustainability Reporting Directive applies to your organization.',
        url: 'https://resources.councilfire.org/tools/csrd-checker',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      })}} />
      <div className="min-h-screen bg-brand-50 dark:bg-[#1a1a1a] py-16 px-4">
        <div className="mx-auto max-w-2xl">
          <Link href="/tools" className="text-sm text-teal-600 hover:underline mb-6 inline-block">← All Tools</Link>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-800 dark:text-white mb-2">CSRD Applicability Checker</h1>
          <p className="text-brand-500 dark:text-gray-400 mb-10">Answer 4 quick questions to find out if the CSRD applies to your organization.</p>

          {!done && (
            <>
              {/* Progress */}
              <div className="flex gap-2 mb-8">
                {steps.map((_, i) => (
                  <div key={i} className={`h-1.5 flex-1 rounded-full transition-all ${i <= step ? 'bg-teal-500' : 'bg-brand-200 dark:bg-white/10'}`} />
                ))}
              </div>

              <div className="bg-white dark:bg-[#222] rounded-2xl border border-brand-200 dark:border-white/10 p-8">
                <p className="text-xs font-semibold text-amber-600 uppercase mb-2">Question {step + 1} of {steps.length}</p>
                <h2 className="text-xl font-bold text-brand-800 dark:text-white mb-6">{steps[step].question}</h2>
                <div className="space-y-3">
                  {steps[step].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      className="w-full text-left px-5 py-4 rounded-xl border border-brand-200 dark:border-white/10 bg-brand-50 dark:bg-[#1a1a1a] hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all text-brand-700 dark:text-gray-300 font-medium"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {done && result && (
            <div className="bg-white dark:bg-[#222] rounded-2xl border border-brand-200 dark:border-white/10 p-8 animate-fade-in">
              <p className="text-xs font-semibold text-amber-600 uppercase mb-2">Your Result</p>
              <h2 className={`text-2xl font-extrabold ${result.color} mb-4`}>{result.level}</h2>
              <p className="text-brand-600 dark:text-gray-300 leading-relaxed mb-8">{result.explanation}</p>

              <div className="border-t border-brand-200 dark:border-white/10 pt-6 space-y-3">
                <p className="text-sm font-semibold text-brand-700 dark:text-gray-300 mb-3">Recommended resources:</p>
                <Link href="/regulations/csrd-corporate-sustainability-reporting-directive" className="block text-teal-600 hover:underline text-sm">→ CSRD Regulation Overview</Link>
                <Link href="/glossary/double-materiality" className="block text-teal-600 hover:underline text-sm">→ What is Double Materiality?</Link>
                <Link href="/guides/csrd-compliance-guide" className="block text-teal-600 hover:underline text-sm">→ CSRD Compliance Guide</Link>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="https://www.councilfire.org/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-600 transition-colors">
                  Need help preparing? Talk to Council Fire
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <button onClick={() => { setStep(0); setAnswers([]); }} className="text-sm font-semibold text-brand-500 hover:text-teal-600 transition-colors">Start over</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
