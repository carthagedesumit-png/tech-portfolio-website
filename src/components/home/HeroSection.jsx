export default function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden border-b border-slate-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_52%,#111827_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

      <div className="mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
            Carthage Technologies
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Engineering the future of African businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            We build business software, automation systems, renewable energy deployments, and digital infrastructure for organizations that need stronger operational foundations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              Explore CBOS
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white transition hover:border-slate-500 hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">
              Talk to Our Team
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {['Business Software', 'Automation', 'Renewable Energy', 'Digital Infrastructure'].map((pillar) => (
              <div key={pillar} className="rounded-md border border-slate-800 bg-slate-950/60 p-3 text-sm font-semibold text-slate-200 shadow-lg shadow-slate-950/20">
                {pillar}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full rounded-lg border border-slate-800 bg-slate-950/70 p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur">
          <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex gap-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
            </div>
            <span className="text-xs font-medium text-slate-500">CBOS operations console</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ['Sales', 'Active billing, counters, order flow'],
              ['Inventory', 'Stock, receiving, transfers'],
              ['CRM', 'Customers, follow-ups, service history'],
              ['Reporting', 'Margins, stores, daily performance'],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-md border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-sm font-bold text-white">{title}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-md border border-cyan-300/20 bg-cyan-300/10 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-cyan-100">Multi-store ready foundation</p>
                <p className="mt-1 text-xs text-slate-400">Built for operational workspaces that can scale beyond a single branch.</p>
              </div>
              <span className="rounded-md bg-slate-950 px-3 py-2 text-xs font-bold text-cyan-200">CBOS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
