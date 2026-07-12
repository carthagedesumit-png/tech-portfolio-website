const styles = {
  Note: 'border-cyan-300/30 bg-cyan-300/10 text-cyan-50', Important: 'border-violet-300/30 bg-violet-300/10 text-violet-50',
  Warning: 'border-rose-300/30 bg-rose-300/10 text-rose-50', Planned: 'border-amber-300/30 bg-amber-300/10 text-amber-50',
  Available: 'border-emerald-300/30 bg-emerald-300/10 text-emerald-50', 'Release requirement': 'border-violet-300/30 bg-violet-300/10 text-violet-50',
};

export default function DocsCallout({ type = 'Note', children }) {
  return <aside role="note" aria-label={`${type} information`} className={`my-6 rounded-lg border p-5 ${styles[type] || styles.Note}`}><p className="text-xs font-black uppercase tracking-[0.18em]">{type}</p><div className="mt-2 text-sm leading-7 text-slate-200">{children}</div></aside>;
}
