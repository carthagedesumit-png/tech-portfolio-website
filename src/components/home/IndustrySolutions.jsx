const industries = [
  ['Retail', 'Point-of-sale, inventory, customer records, and branch reporting workflows.', '/solutions/retail'],
  ['Wholesale and Distribution', 'Procurement, stock movement, account relationships, and operational visibility.', '/solutions/wholesale-distribution'],
  ['Pharmacy', 'Specialized edition planned for controlled stock workflows and compliance-aware operations.', '/solutions/pharmacy'],
  ['Hospitality', 'Specialized edition planned for service operations, inventory, and customer activity.', '/solutions/hospitality'],
  ['Professional Services', 'Client records, billing coordination, and administrative reporting.', '/solutions/professional-services'],
  ['Growing Multi-branch Businesses', 'Multi-store operations foundation for teams expanding beyond one location.', '/solutions/multi-branch'],
];

export default function IndustrySolutions() {
  return (
    <section id="solutions" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="industries" className="max-w-3xl scroll-mt-24">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Industry solutions</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Built around practical operating environments.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(([title, copy, href]) => (
            <article key={title} className="rounded-md border border-slate-800 bg-slate-900/55 p-5">
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
              <a href={href} className="mt-5 inline-flex rounded-md border border-slate-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                View solution
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
