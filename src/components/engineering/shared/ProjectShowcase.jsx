import ProjectCard from './ProjectCard';

export default function ProjectShowcase() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Project showcase</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">A foundation for verified project stories.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <ProjectCard title="Engineering portfolio coming soon" label="Future Case Study" />
          <ProjectCard title="Verified delivery profile reserved" label="Engineering Portfolio Coming Soon" />
        </div>
      </div>
    </section>
  );
}
