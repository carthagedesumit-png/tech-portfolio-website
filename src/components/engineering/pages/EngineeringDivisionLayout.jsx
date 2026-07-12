import EngineeringHero from '../shared/EngineeringHero';
import CapabilityGrid from '../shared/CapabilityGrid';
import ServiceBanner from '../shared/ServiceBanner';
import EngineeringCTA from '../shared/EngineeringCTA';

export default function EngineeringDivisionLayout({ division, children }) {
  return (
    <>
      <EngineeringHero eyebrow={division.eyebrow} title={division.name} description={division.summary}>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#capabilities" className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Review Capabilities</a>
          <a href="/engineering" className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">All Engineering Areas</a>
        </div>
      </EngineeringHero>
      <section id="capabilities" className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Scope foundation</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Engineering built from requirements, not assumptions.</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">{division.intro}</p>
            </div>
            <ServiceBanner items={division.considerations} />
          </div>
          <CapabilityGrid items={division.capabilities} />
        </div>
      </section>
      {children}
      <EngineeringCTA />
    </>
  );
}
