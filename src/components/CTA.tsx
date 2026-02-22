export default function CTA({ topic }: { topic: string }) {
  return (
    <section className="mt-12 rounded-xl bg-gradient-to-br from-forest-600 to-forest-700 dark:from-forest-700 dark:to-forest-900 p-8 text-white">
      <h2 className="text-2xl font-bold font-heading">Need help with {topic}?</h2>
      <p className="mt-2 text-forest-100">
        Our team brings decades of sustainability consulting experience. Let&apos;s talk about how Council Fire can support your goals.
      </p>
      <a
        href="https://councilfire.org/contact"
        className="mt-4 inline-block rounded-lg bg-white text-forest-700 font-semibold px-6 py-3 hover:bg-forest-50 transition-colors"
      >
        Talk to Our Team →
      </a>
    </section>
  );
}
