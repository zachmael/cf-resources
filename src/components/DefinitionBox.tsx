export default function DefinitionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border-l-4 border-teal-500 bg-teal-50 p-6 my-6">
      <p className="text-lg font-medium text-brand-800 leading-relaxed">{children}</p>
    </div>
  );
}
