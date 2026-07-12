const deploymentItems = [
  ['Windows deployment foundation', 'Prepared for Windows-based installation workflows and business desktop environments.'],
  ['Installer and first-run setup', 'Designed to guide controlled setup and initialization for a business deployment.'],
  ['Offline-capable architecture', 'Supports local operating foundations where internet connectivity cannot be assumed.'],
  ['Backups and restore', 'Backup and recovery workflows support continuity planning and operational resilience.'],
  ['Licensing and activation', 'Licensing foundations help manage controlled access and deployment state.'],
  ['Hardware integration foundation', 'Prepared for practical business hardware integration patterns.'],
  ['REST API integration', 'Integration foundation for services and future connected systems.'],
];

export default function DeploymentReliability() {
  return (
    <section id="deployment" className="border-y border-slate-900 bg-slate-900/45 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Deployment and reliability</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Deployment foundations for real business environments.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">CBOS is shaped around practical rollout, setup, backup, activation, and integration needs without promising unsupported uptime guarantees.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {deploymentItems.map(([title, copy]) => (
            <article key={title} className="rounded-md border border-slate-800 bg-slate-950/70 p-5">
              <h3 className="text-base font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
