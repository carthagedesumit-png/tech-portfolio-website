import EngineeringHero from './shared/EngineeringHero';
import EngineeringCard from './shared/EngineeringCard';
import CapabilityGrid from './shared/CapabilityGrid';
import EngineeringTools from './shared/EngineeringTools';
import ProjectShowcase from './shared/ProjectShowcase';
import EngineeringCTA from './shared/EngineeringCTA';
import { engineeringDivisions, engineeringStrengths } from './engineeringData';
import VisualFrame from '@/components/visuals/VisualFrame';
import TechnologyDiagram from '@/components/visuals/TechnologyDiagram';

export default function EngineeringLanding() {
  return (
    <>
      <EngineeringHero eyebrow="Carthage Engineering Division" title="Infrastructure engineered around the business it serves." description="Carthage Technologies brings renewable energy, networking, security, electrical systems, automation, and technical consulting into one practical engineering division.">
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#engineering-areas" className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Explore Engineering Areas</a>
          <a href="mailto:carthagesysystems01@gmail.com?cc=carthagedesumit@gmail.com&subject=Engineering%20consultation" className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">Request Consultation</a>
        </div>
      </EngineeringHero>

      <section className="border-b border-slate-900 bg-slate-900/35 py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div><p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Connected engineering</p><h2 className="mt-4 text-2xl font-black text-white sm:text-4xl">Architecture, integrations, cloud, automation, security, and data—designed as one system.</h2><p className="mt-4 text-sm leading-7 text-slate-400">The diagram is an architectural concept, not a representation of a customer deployment.</p></div>
          <VisualFrame conceptual caption="Technology architecture and integration model"><TechnologyDiagram variant="engineering" label="Conceptual architecture connecting applications, APIs, cloud, data, and security" /></VisualFrame>
        </div>
      </section>

      <section id="engineering-areas" className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Engineering areas</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">One division. Six connected disciplines.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">Each area can stand alone or contribute to a coordinated infrastructure scope.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {engineeringDivisions.map((division) => <EngineeringCard key={division.slug} division={division} />)}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Why Carthage Engineering</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">Designed for operational reality and long-term use.</h2>
          <CapabilityGrid items={engineeringStrengths} />
        </div>
      </section>
      <EngineeringTools />
      <ProjectShowcase />
      <EngineeringCTA />
    </>
  );
}
