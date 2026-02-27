'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const questions = [
  { q: 'Does your organization have a formal sustainability or ESG policy?', tip: 'A written ESG policy signals commitment and guides decision-making across the organization.' },
  { q: 'Do you measure and report greenhouse gas emissions?', tip: 'Emissions measurement is the foundation of any climate strategy. Start with Scope 1 and 2.' },
  { q: 'Is there board-level oversight of sustainability issues?', tip: 'Board engagement ensures ESG is treated as a strategic priority, not just compliance.' },
  { q: 'Do you conduct materiality assessments?', tip: 'Materiality assessments help identify which ESG topics matter most to your stakeholders.' },
  { q: 'Have you set science-based targets or net-zero commitments?', tip: 'Science-based targets align your climate goals with the Paris Agreement.' },
  { q: 'Do you report using a recognized framework (GRI, ISSB, CSRD)?', tip: 'Standardized frameworks improve comparability and credibility of your disclosures.' },
  { q: 'Is ESG data integrated into your enterprise systems?', tip: 'Integrated data systems reduce manual effort and improve accuracy of ESG reporting.' },
  { q: 'Do you have a supplier sustainability program?', tip: 'Supply chain emissions often represent 70%+ of a company\'s total footprint.' },
  { q: 'Have you assessed physical and transition climate risks?', tip: 'Understanding climate risks protects your business from disruption and regulatory surprises.' },
  { q: 'Do you engage stakeholders on sustainability topics?', tip: 'Stakeholder engagement builds trust and surfaces material issues you might miss internally.' },
];

const levels = [
  { min: 0, max: 3, name: 'Beginner', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20', desc: 'You\'re at the start of your sustainability journey. Focus on building foundational policies and measurement capabilities.' },
  { min: 4, max: 6, name: 'Developing', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20', desc: 'You\'ve made progress but there are gaps. Prioritize frameworks, data systems, and governance.' },
  { min: 7, max: 8, name: 'Advanced', color: 'text-teal-500', bg: 'bg-teal-50 dark:bg-teal-900/20', desc: 'Strong foundation! Focus on supply chain integration, climate risk assessment, and stakeholder engagement.' },
  { min: 9, max: 10, name: 'Leader', color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20', desc: 'You\'re among the most prepared organizations. Continue refining and consider sharing your learnings.' },
];

export default function ESGReadiness() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showTip, setShowTip] = useState(false);
  const done = answers.length === questions.length;
  const score = answers.filter(Boolean).length;
  const level = levels.find(l => score >= l.min && score <= l.max) || levels[0];

  const answer = (yes: boolean) => {
    const next = [...answers, yes];
    setAnswers(next);
    setShowTip(true);
    setTimeout(() => {
      setShowTip(false);
      if (next.length < questions.length) setCurrent(current + 1);
    }, 2000);
  };

  return (
    <>
      <Script id="esg-readiness-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication', name: 'ESG Readiness Assessment',
        description: 'Assess your organization\'s ESG readiness with a 10-question quiz.',
        url: 'https://resources.councilfire.org/tools/esg-readiness', applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      })}} />
      <div className="min-h-screen bg-brand-50 dark:bg-[#1a1a1a] py-16 px-4">
        <div className="mx-auto max-w-2xl">
          <Link href="/tools" className="text-sm text-teal-600 hover:underline mb-6 inline-block">← All Tools</Link>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-800 dark:text-white mb-2">ESG Readiness Assessment</h1>
          <p className="text-brand-500 dark:text-gray-400 mb-10">10 yes/no questions to gauge your organization&apos;s sustainability maturity.</p>

          {!done && (
            <>
              <div className="flex gap-1.5 mb-8">
                {questions.map((_, i) => (
                  <div key={i} className={`h-1.5 flex-1 rounded-full transition-all ${i < answers.length ? (answers[i] ? 'bg-teal-500' : 'bg-amber-400') : i === current ? 'bg-brand-300' : 'bg-brand-200 dark:bg-white/10'}`} />
                ))}
              </div>

              <div className="bg-white dark:bg-[#222] rounded-2xl border border-brand-200 dark:border-white/10 p-8">
                <p className="text-xs font-semibold text-amber-600 uppercase mb-2">Question {current + 1} of {questions.length}</p>
                <h2 className="text-xl font-bold text-brand-800 dark:text-white mb-6">{questions[current].q}</h2>

                {!showTip ? (
                  <div className="flex gap-4">
                    <button onClick={() => answer(true)} className="flex-1 rounded-xl border border-brand-200 dark:border-white/10 bg-brand-50 dark:bg-[#1a1a1a] px-5 py-4 font-semibold text-teal-600 hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all">Yes</button>
                    <button onClick={() => answer(false)} className="flex-1 rounded-xl border border-brand-200 dark:border-white/10 bg-brand-50 dark:bg-[#1a1a1a] px-5 py-4 font-semibold text-amber-600 hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all">No</button>
                  </div>
                ) : (
                  <div className="rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 p-4 animate-fade-in">
                    <p className="text-sm text-teal-700 dark:text-teal-300"><span className="font-semibold">💡 Tip:</span> {questions[current].tip}</p>
                  </div>
                )}
              </div>
            </>
          )}

          {done && (
            <div className="bg-white dark:bg-[#222] rounded-2xl border border-brand-200 dark:border-white/10 p-8 animate-fade-in">
              <p className="text-xs font-semibold text-amber-600 uppercase mb-2">Your Score</p>
              <div className="flex items-end gap-3 mb-2">
                <span className="text-5xl font-extrabold text-brand-800 dark:text-white">{score}</span>
                <span className="text-lg text-brand-400 mb-1">/ 10</span>
              </div>
              <div className={`inline-block rounded-full px-4 py-1.5 text-sm font-bold ${level.color} ${level.bg} mb-4`}>{level.name}</div>
              <p className="text-brand-600 dark:text-gray-300 leading-relaxed mb-8">{level.desc}</p>

              <div className="border-t border-brand-200 dark:border-white/10 pt-6 space-y-3 mb-8">
                <p className="text-sm font-semibold text-brand-700 dark:text-gray-300">Recommended resources:</p>
                <Link href="/glossary/esg-reporting" className="block text-teal-600 hover:underline text-sm">→ What is ESG Reporting?</Link>
                <Link href="/how-to/how-to-implement-esg-reporting" className="block text-teal-600 hover:underline text-sm">→ How to Implement ESG Reporting</Link>
                <Link href="/how-to/how-to-conduct-a-materiality-assessment" className="block text-teal-600 hover:underline text-sm">→ How to Conduct a Materiality Assessment</Link>
                <Link href="/compare/gri-vs-issb" className="block text-teal-600 hover:underline text-sm">→ GRI vs ISSB: Which Framework?</Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.councilfire.org/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-600 transition-colors">
                  Ready to level up? Work with Council Fire
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <button onClick={() => { setCurrent(0); setAnswers([]); setShowTip(false); }} className="text-sm font-semibold text-brand-500 hover:text-teal-600 transition-colors">Take again</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
