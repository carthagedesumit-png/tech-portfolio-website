import { commercialProcess } from '../pricingData';

export default function CommercialProcess() {
  return (
    <section className="border-y border-slate-900 bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Commercial Process
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            From business discovery to controlled deployment.
          </h2>
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {commercialProcess.map((item) => (
            <li
              key={item.step}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-5"
            >
              <span className="text-sm font-black text-cyan-300">
                {item.step}
              </span>

              <h3 className="mt-4 text-lg font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
