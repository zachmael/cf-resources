export default function DefinitionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border-l-4 border-forest-500 bg-forest-50 dark:bg-forest-950/30 p-6 my-6">
      <p className="text-lg font-medium text-brand-800 dark:text-brand-200 leading-relaxed">{children}</p>
    </div>
  );
}
