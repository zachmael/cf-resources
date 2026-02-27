'use client';

import { useState, useEffect, useCallback, FormEvent } from 'react';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleShow = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('cf-exit-shown')) return;
    sessionStorage.setItem('cf-exit-shown', '1');
    setShow(true);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem('cf-exit-shown')) return;

    const startTime = Date.now();

    const handleMouseLeave = (e: MouseEvent) => {
      if (Date.now() - startTime < 30000) return;
      if (e.clientY <= 0) handleShow();
    };

    let lastScrollY = window.scrollY;
    let scrollUpCount = 0;
    let scrollTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (Date.now() - startTime < 30000) return;
      const currentY = window.scrollY;
      if (currentY < lastScrollY && lastScrollY - currentY > 50) {
        scrollUpCount++;
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          if (scrollUpCount >= 3) handleShow();
          scrollUpCount = 0;
        }, 1500);
      }
      lastScrollY = currentY;
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, [handleShow]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'exit-intent' }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.');
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch {
      setErrorMsg('Something went wrong.');
      setStatus('error');
    }
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-brand-800 shadow-2xl overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-[#258193] to-teal-400" />

        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 pt-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#258193]" />
            <span className="text-xs font-bold text-[#258193] uppercase tracking-wider">Before you go</span>
          </div>

          {status === 'success' ? (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 mb-4">
                <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">You&apos;re in!</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Check your inbox for sustainability insights from Council Fire.</p>
            </div>
          ) : (
            <>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-1">
                Get our sustainability insights first
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Expert resources on ESG, climate risk, and more — delivered to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 mb-5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {status === 'error' && <p className="text-red-500 text-xs">{errorMsg}</p>}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full rounded-full bg-[#258193] px-5 py-3 text-sm font-bold text-white hover:bg-[#1e6b7a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  ) : 'Subscribe'}
                </button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200 dark:border-white/10" /></div>
                <div className="relative flex justify-center"><span className="bg-white dark:bg-brand-800 px-3 text-xs text-gray-400">or</span></div>
              </div>

              <h2 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mt-5 mb-1">
                Need help with sustainability strategy?
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Council Fire brings decades of experience in ESG reporting, climate resilience, and sustainability consulting.
              </p>

              <a
                href="https://www.councilfire.org/contact"
                className="inline-flex items-center justify-center gap-2 w-full rounded-full border-2 border-[#258193] px-5 py-3 text-sm font-bold text-[#258193] dark:text-teal-400 hover:bg-[#258193]/10 transition-colors"
              >
                Talk to Our Team
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
