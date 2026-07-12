const styles = {
  Available: 'border-emerald-300/30 bg-emerald-300/10 text-emerald-200',
  Foundation: 'border-cyan-300/30 bg-cyan-300/10 text-cyan-100',
  Planned: 'border-amber-300/30 bg-amber-300/10 text-amber-100',
  'Release requirement': 'border-violet-300/30 bg-violet-300/10 text-violet-100',
};

export default function DocsStatusBadge({ status }) {
  return <span className={`inline-flex w-fit rounded-full border px-3 py-1 text-xs font-bold ${styles[status] || styles.Foundation}`}>{status}</span>;
}
