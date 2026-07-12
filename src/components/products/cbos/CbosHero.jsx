const previewRows = [
  ['Today sales', '?0.00', 'Interface preview'],
  ['Inventory alerts', '12 items', 'Interface preview'],
  ['Open credit', 'Review queue', 'Interface preview'],
];

export default function CbosHero() {
  return (
    <section id="product-top" className="relative isolate overflow-hidden border-b border-slate-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_55%,#111827_100%)]" />
      <div className="mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
            CBOS flagship product
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            Carthage Business Operating System
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            One platform to run sales, inventory, customers, procurement, reporting, and multi-store operations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#product-cta" className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              Request a Demo
            </a>
            <a href="#capabilities" className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white transition hover:border-slate-500 hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">
              Explore Capabilities
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-4 shadow-2xl shadow-cyan-950/20" aria-label="CBOS interface preview mockup">
          <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex gap-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
            </div>
            <span className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-[11px] font-bold text-cyan-100">Interface preview</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-[0.36fr_0.64fr]">
            <div className="rounded-md border border-slate-800 bg-slate-900/80 p-4">
              {['Dashboard', 'Sales', 'Inventory', 'CRM', 'Reports'].map((item) => (
                <div key={item} className={`mb-2 rounded-md px-3 py-2 text-xs font-semibold ${item === 'Dashboard' ? 'bg-cyan-300/10 text-cyan-100' : 'text-slate-400'}`}>{item}</div>
              ))}
            </div>
            <div className="space-y-3">
              <div className="rounded-md border border-slate-800 bg-slate-900 p-4">
                <p className="text-sm font-bold text-white">Operations Command</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {previewRows.map(([label, value, meta]) => (
                    <div key={label} className="rounded-md border border-slate-800 bg-slate-950 p-3">
                      <p className="text-[11px] text-slate-500">{label}</p>
                      <p className="mt-2 text-sm font-bold text-cyan-100">{value}</p>
                      <p className="mt-1 text-[10px] text-slate-600">{meta}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-md border border-slate-800 bg-slate-900 p-4">
                <div className="h-2 w-2/3 rounded-full bg-cyan-300/50" />
                <div className="mt-3 h-2 w-5/6 rounded-full bg-slate-700" />
                <div className="mt-3 h-2 w-1/2 rounded-full bg-slate-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
