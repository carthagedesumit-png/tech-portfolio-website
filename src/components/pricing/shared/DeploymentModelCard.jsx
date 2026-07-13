import PricingStatusBadge from './PricingStatusBadge';

export default function DeploymentModelCard({ model }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-white">{model.title}</h3>
        <PricingStatusBadge status={model.status} />
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {model.description}
      </p>
    </article>
  );
}
