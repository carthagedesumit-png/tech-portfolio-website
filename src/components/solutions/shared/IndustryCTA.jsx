export default function IndustryCTA() {
  return (
    <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-lg border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(15,23,42,0.86))] p-8 sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">Consultation</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Discuss how CBOS could fit your operations.</h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">Start with the current CBOS foundation, then plan specialist workflows only where your business genuinely needs them.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="/products/cbos" className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
            Explore CBOS
          </a>
          <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-slate-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
