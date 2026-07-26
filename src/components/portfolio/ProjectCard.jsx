import Image from 'next/image';
import { categoryMap } from './portfolioData';
import TechnologyBadge from './TechnologyBadge';
import EmptyGalleryPlaceholder from './EmptyGalleryPlaceholder';

export default function ProjectCard({ project }) {
  const category = categoryMap[project.category];
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/55 transition hover:-translate-y-1 hover:border-cyan-300/40">
      {project.heroImage ? <Image src={project.heroImage.src} alt={project.heroImage.alt} width={1200} height={675} className="h-52 w-full object-cover" /> : <div className="p-4 pb-0"><EmptyGalleryPlaceholder compact /></div>}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">{category.title} · {project.industry}</p>
        <h3 className="mt-3 text-xl font-black text-white">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.technologies.slice(0, 3).map((technology) => <TechnologyBadge key={technology}>{technology}</TechnologyBadge>)}</div>
        <a href={`/portfolio/${project.slug}`} className="mt-6 inline-flex items-center gap-2 self-start rounded-md text-sm font-bold text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Read case study <span aria-hidden="true">→</span></a>
      </div>
    </article>
  );
}
