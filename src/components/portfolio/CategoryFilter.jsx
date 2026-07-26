export default function CategoryFilter({ categories, activeCategory, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter projects by category">
      <button type="button" onClick={() => onChange('all')} aria-pressed={activeCategory === 'all'} className="shrink-0 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 aria-pressed:border-cyan-300 aria-pressed:bg-cyan-300 aria-pressed:text-slate-950">All projects</button>
      {categories.map((category) => <button key={category.slug} type="button" onClick={() => onChange(category.slug)} aria-pressed={activeCategory === category.slug} className="shrink-0 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 aria-pressed:border-cyan-300 aria-pressed:bg-cyan-300 aria-pressed:text-slate-950">{category.title}</button>)}
    </div>
  );
}
