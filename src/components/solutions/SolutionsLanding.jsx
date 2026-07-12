import SolutionCard from './shared/SolutionCard';
import IndustryCTA from './shared/IndustryCTA';
import { industries } from './industries/industryData';

export default function SolutionsLanding() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_56%,#111827_100%)]" />
        <div className="mx-auto min-h-[calc(100vh-74px)] max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex min-h-[calc(100vh-220px)] max-w-4xl flex-col justify-center">
            <p className="mb-5 inline-flex w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">Industry solutions</p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">CBOS journeys for real business sectors.</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">Carthage Technologies organizes business software, infrastructure thinking, and deployment readiness around the way customers actually operate. CBOS is the current flagship platform, with specialist industry editions planned where deeper workflows are required.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/products/cbos" className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Explore CBOS</a>
              <a href="#industry-cards" className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">View Industries</a>
            </div>
          </div>
        </div>
      </section>

      <section id="industry-cards" className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Current and planned fit</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Choose the journey closest to your operation.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">Every page separates current CBOS foundations from planned specialist workflows so buyers can understand fit without inflated claims.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <SolutionCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <IndustryCTA />
    </>
  );
}
