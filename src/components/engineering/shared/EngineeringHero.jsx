export default function EngineeringHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_58%,#111827_100%)]" />
      <div className="mx-auto flex min-h-[34rem] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
