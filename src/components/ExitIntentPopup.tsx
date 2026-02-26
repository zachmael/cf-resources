'use client';

import { useState, useEffect, useCallback } from 'react';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  const handleShow = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('cf-exit-shown')) return;
    sessionStorage.setItem('cf-exit-shown', '1');
    setShow(true);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem('cf-exit-shown')) return;

    const startTime = Date.now();

    // Desktop: mouse leaves viewport top
    const handleMouseLeave = (e: MouseEvent) => {
      if (Date.now() - startTime < 30000) return;
      if (e.clientY <= 0) handleShow();
    };

    // Mobile: scroll up then pause
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

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-brand-800 shadow-2xl overflow-hidden">
        {/* Top accent */}
        <div className="h-1.5 bg-gradient-to-r from-[#258193] to-teal-400" />

        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all"
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
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Need help with sustainability strategy?
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Council Fire brings decades of experience in ESG reporting, climate resilience, and sustainability consulting. Let&apos;s talk about how we can help.
          </p>

          <div className="mt-5">
            <a
              href="https://www.councilfire.org/contact"
              className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#258193] px-5 py-3 text-sm font-bold text-white hover:bg-[#1e6b7a] transition-colors"
            >
              Talk to Our Team
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
