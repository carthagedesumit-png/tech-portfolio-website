import { supportLevels } from '../pricingData';
import PricingStatusBadge from './PricingStatusBadge';

export default function SupportLevels() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
          Support Levels
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Support aligned with operational complexity.
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-400">
          Final support commitments, channels, response targets, and operating
          hours will be defined in each customer agreement.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {supportLevels.map((level) => (
          <article
            key={level.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-lg font-bold text-white">{level.title}</h3>
              <PricingStatusBadge status={level.status} />
            </div>

            <p className="mt-4 text-sm font-semibold text-slate-300">
              {level.audience}
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {level.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
