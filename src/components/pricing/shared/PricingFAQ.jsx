import { pricingFaqs } from '../pricingData';

export default function PricingFAQ() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
          Frequently Asked Questions
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Common questions about CBOS pricing and deployment.
        </h2>
      </div>

      <div className="mt-10 space-y-4">
        {pricingFaqs.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
          >
            <summary className="cursor-pointer list-none text-base font-bold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">
              <span className="flex items-center justify-between gap-4">
                {item.question}

                <span
                  aria-hidden="true"
                  className="text-xl text-cyan-300 transition group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
