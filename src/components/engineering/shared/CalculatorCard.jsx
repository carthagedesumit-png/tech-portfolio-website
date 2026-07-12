export default function CalculatorCard({ tool }) {
  const available = tool.status === 'Available';
  const content = (
    <>
      <span className={`inline-flex w-fit rounded-full border px-3 py-1 text-xs font-bold ${available ? 'border-emerald-300/30 bg-emerald-300/10 text-emerald-200' : 'border-amber-300/30 bg-amber-300/10 text-amber-100'}`}>{tool.status}</span>
      <h3 className="mt-4 text-lg font-black text-white">{tool.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{tool.description}</p>
    </>
  );
  return available ? (
    <a href={tool.href} className="block rounded-lg border border-slate-800 bg-slate-900/70 p-5 transition hover:border-cyan-300/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">{content}</a>
  ) : (
    <article className="rounded-lg border border-slate-800 bg-slate-900/45 p-5">{content}</article>
  );
}
