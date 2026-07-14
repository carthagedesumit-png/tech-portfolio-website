export default function ContactCTA() {
  return (
    <>
      <section className="border-y border-slate-900 bg-cyan-300/5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
              CBOS pilot discussions
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Interested in discussing a CBOS pilot?
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              Speak with Carthage Technologies about your current operations,
              business requirements, pilot suitability, deployment planning,
              and the path toward adopting CBOS.
            </p>
          </div>

          <a
            href="mailto:carthagesysystems01@gmail.com?cc=carthagedesumit@gmail.com&subject=CBOS%20pilot%20discussion"
            className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
          >
            Discuss a CBOS Pilot
          </a>
        </div>
      </section>

      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Start a conversation
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Let&apos;s explore what Carthage Technologies can build with you.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Explore our solutions, learn about CBOS, or contact us directly to
            discuss your organization&apos;s next technology initiative.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/solutions"
              className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Explore Solutions
            </a>

            <a
              href="/products/cbos"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Explore CBOS
            </a>

            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-3 text-sm font-bold text-white hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              About Carthage
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
