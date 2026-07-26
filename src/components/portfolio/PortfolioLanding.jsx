import { useMemo, useState } from 'react';
import CategoryFilter from './CategoryFilter';
import FeaturedProject from './FeaturedProject';
import { portfolioCategories, projects } from './portfolioData';

function CategoryCard({ category }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/55 p-6">
      <div className="flex items-start justify-between gap-4">
        <span aria-hidden="true" className="flex h-11 min-w-11 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-2 text-[10px] font-black tracking-wider text-cyan-200">{category.icon}</span>
        {category.future && <span className="rounded-full border border-violet-300/25 bg-violet-300/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-200">Future-ready</span>}
      </div>
      <h3 className="mt-5 text-lg font-black text-white">{category.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{category.description}</p>
      <ul className="mt-5 space-y-2">{category.highlights.map((highlight) => <li key={highlight} className="flex gap-2 text-xs text-slate-300"><span aria-hidden="true" className="text-cyan-300">•</span>{highlight}</li>)}</ul>
    </article>
  );
}

export default function PortfolioLanding() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredProjects = useMemo(() => activeCategory === 'all' ? projects : projects.filter((project) => project.category === activeCategory), [activeCategory]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 py-20 sm:py-28">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(34,211,238,0.15),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_60%,#111827_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Project portfolio</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">Engineering that works where business happens.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">Explore how Carthage Technologies approaches real infrastructure and software challenges—from site discovery to dependable handover. This portfolio is structured to grow as approved project records and photography become available.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#featured-projects" className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Explore case studies</a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white transition hover:border-slate-500 hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">Discuss a project</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-900 bg-slate-900/35 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div><p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Engineering philosophy</p><h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">Understand the operation. Design the whole system.</h2></div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[['01', 'Discover', 'Start with the site, users, operating constraints, and the outcome that matters.'], ['02', 'Integrate', 'Treat power, connectivity, systems, security, and support as connected decisions.'], ['03', 'Handover', 'Test the work, document what was built, and prepare the operating team.']].map(([number, title, copy]) => <div key={title}><span className="text-xs font-black text-cyan-300">{number}</span><h3 className="mt-2 font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20" aria-labelledby="category-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Capability map</p><h2 id="category-heading" className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Project categories built for connected delivery.</h2><p className="mt-5 text-base leading-8 text-slate-400">A growing view of the environments we design, deploy, and support. Categories can expand without changing the page architecture.</p></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{portfolioCategories.map((category) => <CategoryCard key={category.slug} category={category} />)}</div>
        </div>
      </section>

      <section id="featured-projects" className="border-y border-slate-900 bg-slate-900/30 py-20" aria-labelledby="projects-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Featured projects</p>
          <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div className="max-w-3xl"><h2 id="projects-heading" className="text-3xl font-black tracking-tight text-white sm:text-5xl">Case studies, prepared for the full record.</h2><p className="mt-5 text-base leading-8 text-slate-400">These preliminary profiles clearly separate our engineering approach from details still awaiting publication.</p></div><p aria-live="polite" className="text-sm text-slate-500">{filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} shown</p></div>
          <div className="mt-8"><CategoryFilter categories={portfolioCategories.filter((category) => projects.some((project) => project.category === category.slug))} activeCategory={activeCategory} onChange={setActiveCategory} /></div>
          {filteredProjects.length ? <div className="mt-8 grid gap-6 md:grid-cols-2">{filteredProjects.map((project) => <FeaturedProject key={project.slug} project={project} />)}</div> : <p className="mt-8 rounded-xl border border-dashed border-slate-700 p-8 text-center text-slate-400">Case studies in this category will be published as project records are approved.</p>}
        </div>
      </section>

      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Build with Carthage</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Bring us the operational challenge.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">We can help define the scope, assess the site, and develop a practical implementation path across software, networks, security, energy, and systems.</p>
          <a href="/contact" className="mt-8 inline-flex rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Start a project conversation</a>
        </div>
      </section>
    </>
  );
}
