const editions = [
  ['Community', 'Entry path for small teams and evaluation use cases. Final packaging is subject to launch planning.'],
  ['Professional', 'For active businesses needing stronger daily operations, reporting, and administrative control.'],
  ['Enterprise', 'For multi-branch deployments, deeper controls, implementation support, and integration planning.'],
  ['Developer', 'For technical teams exploring API integrations, customization, and extension workflows.'],
];

export default function EditionsOverview() {
  return (
    <section id="editions" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Editions</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Commercial packaging without invented prices.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">CBOS edition planning includes Community, Professional, Enterprise, and Developer paths. Final pricing and packaging may be refined during launch planning.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {editions.map(([title, copy]) => (
            <article key={title} className="rounded-md border border-slate-800 bg-slate-900/55 p-5">
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#product-cta" className="rounded-md bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Contact Sales</a>
          <a href="#product-cta" className="rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Compare Editions</a>
        </div>
      </div>
    </section>
  );
}
