const modules = ['Sales', 'Inventory', 'CRM', 'Procurement', 'Reporting', 'Multi-store operations', 'Business administration'];

export default function ProductOverview() {
  return (
    <section id="products" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Flagship product</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Carthage Business Operating System</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              CBOS is a modular operating platform for growing businesses that need sales, stock, customers, procurement, reporting, and administration to work from one coordinated foundation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-md bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Request a Consultation</a>
              <a href="#documentation" className="rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">View Documentation Plan</a>
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
            <div className="rounded-md border border-slate-800 bg-slate-950 p-5">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <p className="text-sm font-bold text-white">CBOS Workspace</p>
                  <p className="text-xs text-slate-500">Unified operations modules</p>
                </div>
                <span className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">Platform foundation</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {modules.map((module) => (
                  <div key={module} className="rounded-md border border-slate-800 bg-slate-900 p-4">
                    <div className="h-1.5 w-14 rounded-full bg-cyan-300/70" />
                    <p className="mt-4 text-sm font-bold text-slate-100">{module}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">Designed as part of a connected business administration workflow.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
