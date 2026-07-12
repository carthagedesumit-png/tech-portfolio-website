export default function CorporateCTA() {
  return (
    <section id="contact" className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-lg border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(15,23,42,0.86))] p-8 sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">Next step</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Build a stronger operating system for your business.</h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
          Start with CBOS, an engineering consultation, or a combined software and infrastructure roadmap for your organization.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="mailto:engineering@carthage.infra" className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
            Request a Consultation
          </a>
          <a href="/engineering" className="inline-flex items-center justify-center rounded-md border border-slate-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">
            Explore Engineering
          </a>
        </div>
      </div>
    </section>
  );
}
