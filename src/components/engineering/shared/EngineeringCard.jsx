export default function EngineeringCard({ division }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-800 bg-slate-900/65 p-6 transition hover:border-cyan-300/40 hover:bg-slate-900">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{division.eyebrow}</p>
      <h3 className="mt-3 text-xl font-black text-white">{division.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{division.summary}</p>
      <a href={`/engineering/${division.slug}`} className="mt-6 inline-flex w-fit rounded-md border border-slate-700 px-4 py-2 text-sm font-bold text-white transition hover:border-cyan-300/50 hover:text-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Explore {division.name}</a>
    </article>
  );
}
