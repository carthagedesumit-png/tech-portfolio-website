const audiences = [
  ['Retailers', 'Core retail workflows for selling, stock control, customers, and reporting.', '/solutions/retail'],
  ['Supermarkets', 'Designed to support high-item catalogs and operational discipline.', '/solutions/retail'],
  ['Wholesalers and distributors', 'Useful for inventory visibility, procurement, customers, and multi-step sales operations.', '/solutions/wholesale-distribution'],
  ['Pharmacies', 'A specialized edition direction is planned; do not treat it as a launched edition yet.', '/solutions/pharmacy'],
  ['Multi-branch businesses', 'Built around a store-aware foundation for organizations expanding locations.', '/solutions/multi-branch'],
  ['Growing SMEs', 'For teams that need stronger controls without enterprise complexity on day one.', '/solutions/professional-services'],
];

export default function IndustryFit() {
  return (
    <section id="industries" className="border-y border-slate-900 bg-slate-900/45 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Audience and industry fit</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Built first for practical commerce operations.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">CBOS currently centers on retail and core operating workflows, with future industry-specific editions planned where specialized requirements are needed.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map(([title, copy, href]) => (
            <article key={title} className="rounded-md border border-slate-800 bg-slate-950/70 p-5">
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
              <a href={href} className="mt-5 inline-flex rounded-md border border-slate-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                View solution journey
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
