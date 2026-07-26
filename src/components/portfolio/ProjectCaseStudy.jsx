import Image from 'next/image';
import EmptyGalleryPlaceholder from './EmptyGalleryPlaceholder';
import ProjectGallery from './ProjectGallery';
import ProjectSidebar from './ProjectSidebar';
import ProjectTimeline from './ProjectTimeline';

function NarrativeSection({ eyebrow, title, children }) {
  return <section><p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p><h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">{title}</h2><p className="mt-4 text-base leading-8 text-slate-300">{children}</p></section>;
}

export default function ProjectCaseStudy({ project, category }) {
  return (
    <>
      <section className="border-b border-slate-800 bg-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500"><a href="/portfolio" className="rounded text-slate-400 hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Portfolio</a><span aria-hidden="true" className="mx-2">/</span><span aria-current="page">{project.title}</span></nav>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div><p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">{category.title} · {project.industry}</p><h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl">{project.title}</h1><p className="mt-6 text-base leading-8 text-slate-300">{project.summary}</p><p className="mt-5 inline-flex rounded-md border border-amber-300/20 bg-amber-300/10 px-3 py-2 text-xs leading-5 text-amber-100">Preliminary project profile — approved photographs and verified project details will be added as they become available.</p></div>
            {project.heroImage ? <Image src={project.heroImage.src} alt={project.heroImage.alt} width={1200} height={675} className="min-h-80 w-full rounded-xl border border-slate-800 object-cover" /> : <EmptyGalleryPlaceholder />}
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_21rem] lg:px-8">
        <div className="space-y-16">
          <NarrativeSection eyebrow="Project overview" title="The operating context">{project.overview}</NarrativeSection>
          <NarrativeSection eyebrow="Engineering challenge" title="What the system needed to address">{project.challenge}</NarrativeSection>
          <NarrativeSection eyebrow="Solution implemented" title="A coordinated delivery approach">{project.solution}</NarrativeSection>
          <section><p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Delivery sequence</p><h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">From discovery to handover</h2><div className="mt-6"><ProjectTimeline steps={project.timeline} /></div></section>
          <NarrativeSection eyebrow="Business outcome" title="Designed for dependable operation">{project.outcome}</NarrativeSection>
          <section aria-labelledby="gallery-title"><p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Project gallery</p><h2 id="gallery-title" className="mt-3 text-2xl font-black text-white sm:text-3xl">The documented installation</h2><div className="mt-6"><ProjectGallery images={project.gallery} projectTitle={project.title} /></div></section>
        </div>
        <ProjectSidebar project={project} category={category} />
      </div>

      <section className="border-t border-slate-900 bg-slate-900/40 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Plan your project</p><h2 className="mt-3 text-3xl font-black text-white">Need a system built around your operation?</h2><p className="mt-3 text-sm leading-6 text-slate-400">Talk with Carthage Technologies about your site, requirements, and next steps.</p></div><a href="/contact" className="shrink-0 rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">Request a consultation</a></div>
      </section>
    </>
  );
}
