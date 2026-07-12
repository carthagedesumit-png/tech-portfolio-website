import StatusBadge from './StatusBadge';

export default function SolutionCard({ industry }) {
  return (
    <article className="flex h-full flex-col rounded-md border border-slate-800 bg-slate-900/55 p-5">
      <div className="flex flex-col gap-3">
        <StatusBadge status={industry.status} />
        <h3 className="text-xl font-bold text-white">{industry.name}</h3>
        <p className="text-sm leading-6 text-slate-400">{industry.description}</p>
      </div>
      <a href={`/solutions/${industry.slug}`} className="mt-6 inline-flex w-fit rounded-md border border-slate-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
        View {industry.name} solution
      </a>
    </article>
  );
}
