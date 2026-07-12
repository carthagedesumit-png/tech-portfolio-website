export default function ProjectCard({ title, label }) {
  return (
    <article className="rounded-lg border border-dashed border-slate-700 bg-slate-900/40 p-6">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{label}</span>
      <h3 className="mt-4 text-xl font-black text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">Verified project profiles will be added here when approved for publication. No project claims are represented by this placeholder.</p>
    </article>
  );
}
