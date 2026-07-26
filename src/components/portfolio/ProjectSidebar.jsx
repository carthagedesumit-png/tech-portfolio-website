import TechnologyBadge from './TechnologyBadge';

export default function ProjectSidebar({ project, category }) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Project details">
      <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Project profile</p>
        <dl className="mt-5 space-y-4 text-sm">
          <div><dt className="text-slate-500">Category</dt><dd className="mt-1 font-semibold text-white">{category.title}</dd></div>
          <div><dt className="text-slate-500">Industry</dt><dd className="mt-1 font-semibold text-white">{project.industry}</dd></div>
          {project.location && <div><dt className="text-slate-500">Location</dt><dd className="mt-1 font-semibold text-white">{project.location}</dd></div>}
        </dl>
        <h2 className="mt-7 text-sm font-bold text-white">Technologies used</h2>
        <div className="mt-3 flex flex-wrap gap-2">{project.technologies.map((technology) => <TechnologyBadge key={technology}>{technology}</TechnologyBadge>)}</div>
        <h2 className="mt-7 text-sm font-bold text-white">Services delivered</h2>
        <ul className="mt-3 space-y-2">{project.services.map((service) => <li key={service} className="flex gap-2 text-sm text-slate-300"><span aria-hidden="true" className="text-cyan-300">•</span>{service}</li>)}</ul>
      </div>
    </aside>
  );
}
