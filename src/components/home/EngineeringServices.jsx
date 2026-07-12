const services = [
  ['Solar and energy systems', 'Hybrid solar, battery storage, inverter sizing, and transfer architecture planning.', '/engineering/solar'],
  ['Enterprise networking', 'Structured LAN design, branch connectivity, switching layouts, and business-ready local networks.', '/engineering/networking'],
  ['CCTV and security infrastructure', 'PoE camera systems, NVR planning, local recording, and secure access patterns.', '/engineering/security'],
  ['Automation and technical integration', 'Business process automation and field infrastructure connected to operational software.', '/engineering/automation'],
];

export default function EngineeringServices() {
  return (
    <section id="engineering" className="border-y border-slate-900 bg-slate-900/45 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Engineering division</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Software backed by real infrastructure capability.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Explore renewable energy, enterprise networking, security infrastructure, electrical systems, automation, and technical consulting through the dedicated Engineering Division.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, copy, href]) => (
            <article key={title} className="flex flex-col rounded-md border border-slate-800 bg-slate-950/70 p-5">
              <h3 className="text-base font-bold text-white">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{copy}</p>
              <a href={href} className="mt-5 inline-flex w-fit rounded-md text-sm font-bold text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Explore service</a>
            </article>
          ))}
        </div>

        <a href="/engineering" className="mt-8 inline-flex rounded-md border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-50 transition hover:bg-cyan-300/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Visit the Engineering Division</a>
      </div>
    </section>
  );
}

