const metrics = [
  ['One', 'integrated platform direction'],
  ['Multiple', 'operational workspaces'],
  ['Multi-store', 'ready foundation'],
  ['Offline', 'deployment foundation'],
];

export default function CompanyMetrics() {
  return (
    <section className="bg-slate-950 py-16" aria-label="Carthage capability metrics">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {metrics.map(([value, label]) => (
          <div key={label} className="rounded-md border border-slate-800 bg-slate-900/55 p-5">
            <p className="text-2xl font-black text-cyan-200">{value}</p>
            <p className="mt-2 text-sm text-slate-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
