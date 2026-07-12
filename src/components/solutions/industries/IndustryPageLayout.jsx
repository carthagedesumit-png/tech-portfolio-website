import StatusBadge from '../shared/StatusBadge';
import ListCard from '../shared/ListCard';
import IndustryCTA from '../shared/IndustryCTA';

export default function IndustryPageLayout({ industry }) {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_55%,#111827_100%)]" />
        <div className="mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Industry solution</p>
            <StatusBadge status={industry.status} />
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl">{industry.name}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{industry.heroCopy}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/products/cbos" className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Explore CBOS</a>
              <a href="#solution-details" className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">Review Fit</a>
            </div>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-5 shadow-2xl shadow-cyan-950/20">
            <p className="text-sm font-bold text-white">Recommended operating focus</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {industry.capabilities.slice(0, 6).map((capability) => (
                <div key={capability} className="rounded-md border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-slate-100">{capability}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-slate-500">{industry.availabilityNote}</p>
          </div>
        </div>
      </section>

      <section id="solution-details" className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Customer journey</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">{industry.title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">{industry.description}</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <ListCard title="Common operational problems" items={industry.problems} />
            <ListCard title="How CBOS helps" items={industry.helps} />
            <ListCard title="Relevant CBOS capabilities" items={industry.capabilities} />
            <ListCard title="Recommended workflows" items={industry.workflows} />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-900 bg-slate-900/45 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Deployment considerations</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Plan rollout around how the business already operates.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">A good CBOS rollout should confirm users, branches, stock practices, backup needs, and any specialist workflows before final scope is agreed.</p>
          </div>
          <div className="space-y-4">
            {industry.deployment.map((item) => (
              <div key={item} className="rounded-md border border-slate-800 bg-slate-950/70 p-5">
                <p className="text-sm font-bold text-white">{item}</p>
              </div>
            ))}
            <div className="rounded-md border border-amber-300/30 bg-amber-300/10 p-5">
              <p className="text-sm font-bold text-amber-100">Current availability note</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{industry.availabilityNote}</p>
            </div>
          </div>
        </div>
      </section>

      <IndustryCTA />
    </>
  );
}
