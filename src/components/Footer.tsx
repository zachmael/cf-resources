import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#29292b] mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-heading font-semibold text-white text-lg">A Council Fire Resource</p>
            <p className="mt-2 text-sm text-gray-400">
              Sustainability knowledge for professionals navigating climate risk, ESG reporting, and the clean energy transition.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/glossary" className="text-gray-400 hover:text-teal-400 transition-colors">Glossary</Link></li>
              <li><Link href="/compare" className="text-gray-400 hover:text-teal-400 transition-colors">Comparisons</Link></li>
              <li><Link href="/guides" className="text-gray-400 hover:text-teal-400 transition-colors">Guides</Link></li>
              <li><Link href="/industries" className="text-gray-400 hover:text-teal-400 transition-colors">Industries</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Council Fire</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.councilfire.org" className="text-gray-400 hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="https://www.councilfire.org/about" className="text-gray-400 hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="https://www.councilfire.org/what-we-do" className="text-gray-400 hover:text-teal-400 transition-colors">What We Do</a></li>
              <li><a href="https://www.councilfire.org/blog" className="text-gray-400 hover:text-teal-400 transition-colors">Blog</a></li>
              <li><a href="https://www.councilfire.org/contact" className="text-gray-400 hover:text-teal-400 transition-colors">Get in Touch</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Council Fire. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
