export default function ProjectTimeline({ steps }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2" aria-label="Project delivery sequence">
      {steps.map((step, index) => <li key={step} className="flex gap-3 rounded-lg border border-slate-800 bg-slate-900/60 p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-black text-slate-950">{index + 1}</span><span className="pt-1 text-sm font-semibold text-slate-200">{step}</span></li>)}
    </ol>
  );
}
