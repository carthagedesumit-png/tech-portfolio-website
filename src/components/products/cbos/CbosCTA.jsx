export default function CbosCTA() {
  return (
    <section id="product-cta" className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-lg border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(15,23,42,0.86))] p-8 sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">Product journey</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Bring your business operations into one connected system.</h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">Discuss a CBOS demo, deployment path, or edition fit with Carthage Technologies. For V1, this action routes prospects to the website contact section.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="/#contact" className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
            Request a CBOS Demo
          </a>
          <a href="/#contact" className="inline-flex items-center justify-center rounded-md border border-slate-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">
            Talk to Carthage Technologies
          </a>
        </div>
      </div>
    </section>
  );
}
