'use client';

import { useState, FormEvent, ReactNode } from 'react';

interface LeadMagnetGateProps {
  title: string;
  description: string;
  source: string;
  children: ReactNode;
}

export default function LeadMagnetGate({ title, description, source, children }: LeadMagnetGateProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'gate' | 'loading' | 'unlocked' | 'error'>('gate');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.');
        setStatus('error');
      } else {
        setStatus('unlocked');
      }
    } catch {
      setErrorMsg('Something went wrong.');
      setStatus('error');
    }
  }

  if (status === 'unlocked') {
    return <>{children}</>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="rounded-2xl border border-brand-200 dark:border-white/10 bg-white dark:bg-[#222] overflow-hidden shadow-xl">
        <div className="h-2 bg-gradient-to-r from-[#258193] to-teal-400" />
        <div className="p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-50 dark:bg-teal-900/30 mb-6">
            <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-brand-800 dark:text-white">{title}</h2>
          <p className="mt-3 text-brand-500 dark:text-gray-400 leading-relaxed max-w-md mx-auto">{description}</p>

          <form onSubmit={handleSubmit} className="mt-8 max-w-sm mx-auto space-y-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('gate'); }}
              placeholder="Enter your work email"
              className="w-full rounded-lg border border-brand-200 dark:border-white/10 bg-brand-50 dark:bg-white/5 px-4 py-3 text-sm text-brand-800 dark:text-white placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {status === 'error' && <p className="text-red-500 text-xs">{errorMsg}</p>}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full rounded-full bg-[#258193] px-5 py-3 text-sm font-bold text-white hover:bg-[#1e6b7a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              ) : (
                <>
                  Unlock Free Resource
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                </>
              )}
            </button>
            <p className="text-xs text-brand-400 dark:text-gray-500">Free forever. Unsubscribe anytime.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
