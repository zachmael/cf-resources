import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-900 mt-0">
      {/* Newsletter Strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Stay updated on sustainability</h3>
              <p className="text-sm text-gray-400 mt-1">Get insights from Council Fire delivered to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-72 rounded-lg bg-white/10 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="shrink-0 rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="https://www.councilfire.org">
              <Image src="/logo.png" alt="Council Fire" width={4769} height={1242} className="h-6 w-auto mb-4" />
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              Expert sustainability consulting for organizations navigating climate risk, ESG, and the clean energy transition.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/glossary" className="text-gray-400 hover:text-white transition-colors">Glossary</Link></li>
              <li><Link href="/compare" className="text-gray-400 hover:text-white transition-colors">Comparisons</Link></li>
              <li><Link href="/locations" className="text-gray-400 hover:text-white transition-colors">Locations</Link></li>
              <li><Link href="/guides" className="text-gray-400 hover:text-white transition-colors">Guides</Link></li>
              <li><Link href="/industries" className="text-gray-400 hover:text-white transition-colors">Industries</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://www.councilfire.org" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="https://www.councilfire.org/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="https://www.councilfire.org/what-we-do" className="text-gray-400 hover:text-white transition-colors">What We Do</a></li>
              <li><a href="https://www.councilfire.org/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="https://www.councilfire.org/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://www.councilfire.org/contact" className="text-gray-400 hover:text-white transition-colors">Get in Touch</a></li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://www.councilfire.org" aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Council Fire. All rights reserved.</p>
          <p className="text-xs text-gray-600">Sustainability knowledge for professionals.</p>
        </div>
      </div>
    </footer>
  );
}
