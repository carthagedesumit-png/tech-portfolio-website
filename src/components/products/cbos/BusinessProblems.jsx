const problems = [
  'Disconnected spreadsheets and daily tools',
  'Poor stock visibility across products and locations',
  'Weak sales oversight and manual reconciliation',
  'Difficult customer credit and wallet tracking',
  'Fragmented procurement and supplier follow-up',
  'Delayed reports for managers and owners',
  'Limited multi-branch control',
  'Unreliable backup and deployment processes',
];

export default function BusinessProblems() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Business problems</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">CBOS is designed for businesses outgrowing scattered operations.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Teams lose time and control when sales, stock, customers, purchasing, and reports live in separate places. CBOS brings those workflows into one operating layer so owners and managers can make decisions with better context.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <div key={problem} className="rounded-md border border-slate-800 bg-slate-900/55 p-5">
              <p className="text-sm font-bold leading-6 text-white">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
