export default function EngineeringCTA() {
  return (
    <section className="border-t border-slate-900 bg-slate-900/45 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Start a conversation</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Let&apos;s design your next engineering project.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">Share the operating need, site context, and outcome you are working toward. We can help structure the next technical step.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="mailto:engineering@carthage.infra?subject=Engineering%20consultation" className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Request Consultation</a>
          <a href="mailto:engineering@carthage.infra?subject=Engineering%20requirements" className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">Discuss Your Requirements</a>
        </div>
      </div>
    </section>
  );
}
