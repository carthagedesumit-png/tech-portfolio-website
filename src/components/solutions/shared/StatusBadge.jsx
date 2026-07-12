import { availabilityLabels } from '../industries/industryData';

const styles = {
  current: 'border-emerald-300/30 bg-emerald-300/10 text-emerald-100',
  core: 'border-cyan-300/30 bg-cyan-300/10 text-cyan-100',
  planned: 'border-amber-300/30 bg-amber-300/10 text-amber-100',
  future: 'border-slate-500/40 bg-slate-800/60 text-slate-200',
};

export default function StatusBadge({ status }) {
  return (
    <span className={`inline-flex rounded-md border px-3 py-1 text-xs font-bold ${styles[status] || styles.future}`} aria-label={`Availability: ${availabilityLabels[status]}`}>
      {availabilityLabels[status]}
    </span>
  );
}
