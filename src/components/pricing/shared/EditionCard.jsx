import PricingStatusBadge from './PricingStatusBadge';

export default function EditionCard({ edition }) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border p-6 ${
        edition.featured
          ? 'border-cyan-300/50 bg-cyan-300/[0.06] shadow-lg shadow-cyan-950/30'
          : 'border-slate-800 bg-slate-900/50'
      }`}
    >
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            CBOS Edition
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white">{edition.name}</h3>
        </div>

        <PricingStatusBadge status={edition.status} />
      </div>

      <p className="text-sm font-semibold text-slate-300">{edition.audience}</p>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        {edition.description}
      </p>

      <dl className="mt-6 space-y-3 border-y border-slate-800 py-5 text-sm">
        <div>
          <dt className="text-slate-500">Deployment</dt>
          <dd className="mt-1 text-slate-200">{edition.deployment}</dd>
        </div>

        <div>
          <dt className="text-slate-500">Support</dt>
          <dd className="mt-1 text-slate-200">{edition.support}</dd>
        </div>
      </dl>

      <ul className="mt-6 space-y-3 text-sm text-slate-300">
        {edition.capabilities.map((capability) => (
          <li key={capability} className="flex gap-3">
            <span aria-hidden="true" className="text-cyan-300">
              ✓
            </span>
            <span>{capability}</span>
          </li>
        ))}
      </ul>

      <a
        href="#pricing-contact"
        className="mt-8 inline-flex items-center justify-center rounded-md border border-cyan-300/40 px-4 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
      >
        Discuss {edition.name}
      </a>
    </article>
  );
}
