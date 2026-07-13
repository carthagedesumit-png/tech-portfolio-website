export default function PricingCTA() {
  return (
    <section id="pricing-contact" className="border-t border-slate-900 bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.08] to-slate-950 p-8 lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Commercial Planning
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">
            Let’s identify the right CBOS edition and deployment model for your business.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
            Share your store count, user requirements, data migration needs,
            hardware environment, and support expectations. Carthage Technologies
            can then prepare a deployment recommendation and commercial proposal.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/products/cbos"
              className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Explore CBOS
            </a>

            <a
              href="/docs/licensing"
              className="inline-flex items-center justify-center rounded-md border border-slate-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Read Licensing Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
