'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, FormEvent } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'footer-newsletter' }),
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

  return (
    <footer className="bg-brand-900">
      {/* Newsletter Strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Stay Updated</span>
              </div>
              <h3 className="text-xl font-extrabold font-heading text-white">Sustainability insights, delivered.</h3>
              <p className="text-sm text-gray-400 mt-1">Get expert resources from Council Fire in your inbox.</p>
            </div>
            {status === 'success' ? (
              <div className="flex items-center gap-2 text-teal-400 font-semibold text-sm">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                You&apos;re in! Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
                  placeholder="Enter your email"
                  className="w-full md:w-72 rounded-full bg-white/10 border border-white/10 px-5 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-teal-500 text-white hover:bg-teal-400 transition-all hover:scale-105 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  ) : (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  )}
                </button>
              </form>
            )}
          </div>
          {status === 'error' && <p className="text-red-400 text-sm mt-2 text-center md:text-right">{errorMsg}</p>}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="https://www.councilfire.org">
              <Image src="/logo.png" alt="Council Fire" width={4769} height={1242} className="h-6 w-auto mb-5" />
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              Expert sustainability consulting for organizations navigating climate risk, ESG, and the clean energy transition.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://www.councilfire.org" aria-label="LinkedIn" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-gray-400 hover:bg-teal-500 hover:text-white transition-all">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/glossary" className="text-gray-400 hover:text-white transition-colors">Glossary</Link></li>
              <li><Link href="/compare" className="text-gray-400 hover:text-white transition-colors">Comparisons</Link></li>
              <li><Link href="/locations" className="text-gray-400 hover:text-white transition-colors">Locations</Link></li>
              <li><Link href="/guides" className="text-gray-400 hover:text-white transition-colors">Guides</Link></li>
              <li><Link href="/how-to" className="text-gray-400 hover:text-white transition-colors">How To</Link></li>
              <li><Link href="/regulations" className="text-gray-400 hover:text-white transition-colors">Regulations</Link></li>
              <li><Link href="/industries" className="text-gray-400 hover:text-white transition-colors">Industries</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://www.councilfire.org" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="https://www.councilfire.org/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="https://www.councilfire.org/what-we-do" className="text-gray-400 hover:text-white transition-colors">What We Do</a></li>
              <li><a href="https://www.councilfire.org/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://www.councilfire.org/contact" className="text-gray-400 hover:text-white transition-colors">Get in Touch</a></li>
            </ul>
            <a
              href="https://www.councilfire.org/contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Contact Us
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500 text-white group-hover:bg-teal-400 transition-all group-hover:scale-105">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Council Fire. All rights reserved.</p>
          <p className="text-xs text-gray-600">Sustainability knowledge for professionals.</p>
        </div>
      </div>
    </footer>
  );
}
