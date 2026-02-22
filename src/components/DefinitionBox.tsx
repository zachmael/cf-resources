export default function DefinitionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border-l-4 border-teal-500 bg-gradient-to-r from-teal-50 to-teal-50/30 p-7 my-8">
      <div className="flex gap-4">
        <div className="shrink-0 mt-0.5">
          <div className="h-8 w-8 rounded-full bg-teal-500/10 flex items-center justify-center">
            <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>
        <p className="text-lg font-medium text-brand-800 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
