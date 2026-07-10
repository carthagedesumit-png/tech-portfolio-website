const services = [
  ['Solar and energy systems', 'Hybrid solar, battery storage, inverter sizing, and transfer architecture planning.'],
  ['Enterprise networking', 'Structured LAN design, branch connectivity, switching layouts, and CBT-ready local networks.'],
  ['CCTV and security infrastructure', 'PoE camera systems, NVR planning, local recording, and secure access patterns.'],
  ['Automation and technical integration', 'Business process automation and field infrastructure connected to operational software.'],
];

export default function EngineeringServices() {
  return (
    <section id="engineering" className="border-y border-slate-900 bg-slate-900/45 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Engineering division</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Software backed by real infrastructure capability.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            The existing calculators, blueprint explorer, estimators, and project tracking tools are preserved as reusable engineering assets for a dedicated engineering experience.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, copy]) => (
            <article key={title} className="rounded-md border border-slate-800 bg-slate-950/70 p-5">
              <h3 className="text-base font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-md border border-cyan-300/20 bg-cyan-300/10 p-5 text-sm text-cyan-50">
          Engineering workspace preserved in <span className="break-all font-mono text-cyan-200">src/components/engineering/EngineeringWorkspace.jsx</span> for the future dedicated Engineering page.
        </div>
      </div>
    </section>
  );
}

