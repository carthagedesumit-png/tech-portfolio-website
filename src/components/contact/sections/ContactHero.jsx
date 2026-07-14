export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-900">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_18%_82%,rgba(59,130,246,0.12),transparent_32%),linear-gradient(135deg,#020617_0%,#0f172a_58%,#111827_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 -z-10 w-1/2 opacity-25 [background-image:linear-gradient(rgba(34,211,238,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.2)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_left,black,transparent)]"
      />

      <div className="mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Contact Carthage Technologies
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Let&apos;s Build Something Extraordinary Together
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Whether you are exploring CBOS, enterprise software, engineering
            services, digital transformation, or a strategic technology
            partnership, we would be glad to hear from you.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact-options"
              className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Contact Carthage
            </a>

            <a
              href="/products/cbos"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/50 hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Explore CBOS
            </a>
          </div>
        </div>

        <aside className="rounded-2xl border border-cyan-300/20 bg-slate-950/70 p-6 shadow-2xl shadow-cyan-950/30 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Remote-first operations
          </p>

          <p className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
            Based in Nigeria.
            <br />
            Serving beyond borders.
          </p>

          <p className="mt-5 text-sm leading-7 text-slate-300">
            Carthage Technologies works remotely with businesses across Nigeria,
            Africa, and international markets. Online meetings are available,
            while in-person meetings may be arranged by appointment.
          </p>
        </aside>
      </div>
    </section>
  );
}
