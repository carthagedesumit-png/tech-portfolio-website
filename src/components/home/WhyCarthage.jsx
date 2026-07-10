const strengths = [
  'Integrated software and infrastructure expertise',
  'Modular architecture for staged rollout',
  'Local business understanding',
  'Security-conscious engineering',
  'Deployment and support readiness',
  'Scalable multi-store foundation',
];

export default function WhyCarthage() {
  return (
    <section id="about" className="border-y border-slate-900 bg-slate-900/45 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Why Carthage</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">One team for operating software and the infrastructure beneath it.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((strength) => (
            <div key={strength} className="rounded-md border border-slate-800 bg-slate-950/70 p-5">
              <p className="text-sm font-bold text-white">{strength}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
