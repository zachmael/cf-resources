'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

interface Inputs { employees: string; sqft: string; travel: string; vehicles: string; }

function estimate(inputs: Inputs) {
  const emp = Number(inputs.employees) || 0;
  const sqft = Number(inputs.sqft) || 0;
  const travel = Number(inputs.travel) || 0;
  const vehicles = Number(inputs.vehicles) || 0;

  // Scope 1: Fleet vehicles (avg 4.6 tCO2/vehicle/yr) + office natural gas (~0.005 tCO2/sqft)
  const scope1 = vehicles * 4.6 + sqft * 0.005;
  // Scope 2: Electricity (~0.012 tCO2/sqft/yr)
  const scope2 = sqft * 0.012;
  // Scope 3: Employee commuting (~1.5 tCO2/emp) + business travel ($1 travel ≈ 0.00025 tCO2) + supply chain (~3 tCO2/emp)
  const scope3 = emp * 1.5 + travel * 0.00025 + emp * 3;
  const total = scope1 + scope2 + scope3;
  // Benchmark: avg company ~8.5 tCO2/employee
  const benchmark = emp * 8.5;

  return { scope1: Math.round(scope1), scope2: Math.round(scope2), scope3: Math.round(scope3), total: Math.round(total), benchmark: Math.round(benchmark), perEmployee: emp > 0 ? (total / emp).toFixed(1) : '0' };
}

export default function CarbonEstimator() {
  const [inputs, setInputs] = useState<Inputs>({ employees: '', sqft: '', travel: '', vehicles: '' });
  const [result, setResult] = useState<ReturnType<typeof estimate> | null>(null);

  const set = (k: keyof Inputs, v: string) => setInputs({ ...inputs, [k]: v });

  const fields: { key: keyof Inputs; label: string; placeholder: string; prefix?: string }[] = [
    { key: 'employees', label: 'Number of employees', placeholder: '100' },
    { key: 'sqft', label: 'Office space (sq ft)', placeholder: '10000' },
    { key: 'travel', label: 'Annual travel budget ($)', placeholder: '50000', prefix: '$' },
    { key: 'vehicles', label: 'Fleet vehicles', placeholder: '5' },
  ];

  return (
    <>
      <Script id="carbon-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Carbon Footprint Estimator',
        description: 'Estimate your organization\'s carbon footprint across Scope 1, 2, and 3 emissions.',
        url: 'https://resources.councilfire.org/tools/carbon-estimator', applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      })}} />
      <div className="min-h-screen bg-brand-50 dark:bg-[#1a1a1a] py-16 px-4">
        <div className="mx-auto max-w-2xl">
          <Link href="/tools" className="text-sm text-teal-600 hover:underline mb-6 inline-block">← All Tools</Link>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-brand-800 dark:text-white mb-2">Carbon Footprint Estimator</h1>
          <p className="text-brand-500 dark:text-gray-400 mb-10">Get a ballpark estimate of your organization&apos;s greenhouse gas emissions.</p>

          <div className="bg-white dark:bg-[#222] rounded-2xl border border-brand-200 dark:border-white/10 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {fields.map(f => (
                <div key={f.key}>
                  <label className="block text-sm font-semibold text-brand-700 dark:text-gray-300 mb-2">{f.label}</label>
                  <div className="relative">
                    {f.prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-400">{f.prefix}</span>}
                    <input
                      type="number" min="0" placeholder={f.placeholder} value={inputs[f.key]}
                      onChange={e => set(f.key, e.target.value)}
                      className={`w-full rounded-xl border border-brand-200 dark:border-white/10 bg-brand-50 dark:bg-[#1a1a1a] px-4 py-3 text-brand-800 dark:text-white placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-teal-500 ${f.prefix ? 'pl-8' : ''}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setResult(estimate(inputs))}
              className="w-full rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-teal-600 transition-colors"
            >
              Estimate Emissions
            </button>
          </div>

          {result && (
            <div className="mt-8 bg-white dark:bg-[#222] rounded-2xl border border-brand-200 dark:border-white/10 p-8 animate-fade-in">
              <p className="text-xs font-semibold text-amber-600 uppercase mb-4">Estimated Annual Emissions</p>
              <p className="text-4xl font-extrabold text-brand-800 dark:text-white mb-1">{result.total.toLocaleString()} <span className="text-lg font-medium text-brand-400">tCO₂e</span></p>
              <p className="text-sm text-brand-500 dark:text-gray-400 mb-8">{result.perEmployee} tCO₂e per employee</p>

              <div className="space-y-4 mb-8">
                {[
                  { label: 'Scope 1 (Direct)', value: result.scope1, pct: result.total ? Math.round(result.scope1 / result.total * 100) : 0, color: 'bg-amber-500' },
                  { label: 'Scope 2 (Electricity)', value: result.scope2, pct: result.total ? Math.round(result.scope2 / result.total * 100) : 0, color: 'bg-teal-500' },
                  { label: 'Scope 3 (Value Chain)', value: result.scope3, pct: result.total ? Math.round(result.scope3 / result.total * 100) : 0, color: 'bg-brand-600' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-brand-700 dark:text-gray-300">{s.label}</span>
                      <span className="text-brand-500 dark:text-gray-400">{s.value.toLocaleString()} tCO₂e ({s.pct}%)</span>
                    </div>
                    <div className="h-2 rounded-full bg-brand-100 dark:bg-white/10 overflow-hidden">
                      <div className={`h-full rounded-full ${s.color} transition-all duration-500`} style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              {result.benchmark > 0 && (
                <div className="bg-brand-50 dark:bg-[#1a1a1a] rounded-xl p-4 mb-8">
                  <p className="text-sm text-brand-600 dark:text-gray-300">
                    <span className="font-semibold">Industry benchmark:</span> ~{result.benchmark.toLocaleString()} tCO₂e for a company your size.{' '}
                    {result.total < result.benchmark ? 'You\'re below average — great start!' : 'You\'re above average — there\'s room to improve.'}
                  </p>
                </div>
              )}

              <div className="border-t border-brand-200 dark:border-white/10 pt-6 space-y-3 mb-8">
                <p className="text-sm font-semibold text-brand-700 dark:text-gray-300">Learn more:</p>
                <Link href="/glossary/carbon-footprint" className="block text-teal-600 hover:underline text-sm">→ What is a Carbon Footprint?</Link>
                <Link href="/how-to/how-to-calculate-carbon-footprint" className="block text-teal-600 hover:underline text-sm">→ How to Calculate Your Carbon Footprint</Link>
                <Link href="/how-to/how-to-measure-scope-3-emissions" className="block text-teal-600 hover:underline text-sm">→ How to Measure Scope 3 Emissions</Link>
              </div>

              <a href="https://www.councilfire.org/contact" className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-600 transition-colors">
                Get a detailed assessment from Council Fire
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          )}

          <p className="mt-6 text-xs text-brand-400 dark:text-gray-500">Disclaimer: This tool provides rough estimates based on industry averages. For accurate emissions accounting, consult a sustainability professional.</p>
        </div>
      </div>
    </>
  );
}
