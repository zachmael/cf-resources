import Image from 'next/image';
import { getCTACopy } from '@/lib/cta-config';

export default function CTA({ topic, section }: { topic: string; section?: string }) {
  const cta = getCTACopy(section, topic);
  return (
    <section className="mt-16 relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1518173946687-a4c52f2e0c80?w=1200&h=400&fit=crop"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-teal-800/85" />
      </div>
      {/* Decorative shapes */}
      <div className="absolute -top-16 -right-16 w-[250px] h-[250px] rounded-full bg-white/5" />
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-white/5" />

      <div className="relative p-10 md:p-14">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-sm font-semibold text-amber-300 uppercase tracking-wider">{cta.button}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-white">{cta.headline}</h2>
        <p className="mt-3 text-teal-100/80 text-lg max-w-xl leading-relaxed">
          {cta.body}
        </p>
        <div className="mt-8">
          <a
            href="https://www.councilfire.org/contact"
            className="group inline-flex items-center gap-3 font-bold text-white"
          >
            {cta.button}
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-teal-600 group-hover:scale-110 transition-all shadow-lg">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
