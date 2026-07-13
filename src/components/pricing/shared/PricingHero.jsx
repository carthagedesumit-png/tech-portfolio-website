export default function PricingHero() {
  return (
    <section className="border-b border-slate-900 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
            Pricing & Licensing
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Choose a CBOS path that fits how your business operates.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            CBOS editions are designed around deployment scale, operational
            complexity, and support needs. Final commercial pricing is provided
            after a deployment discussion so the recommendation reflects your
            stores, users, data, hardware, and implementation requirements.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#cbos-editions"
              className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Compare Editions
            </a>

            <a
              href="#pricing-contact"
              className="inline-flex items-center justify-center rounded-md border border-slate-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Discuss Your Deployment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
