const capabilities = [
  ['Sales and checkout', 'Faster counter workflows, order handling, receipts, and daily sales visibility.', 'Cashiers, supervisors, and store managers'],
  ['Inventory and barcode management', 'Clearer stock counts, receiving, barcode lookup, transfers, and reorder awareness.', 'Storekeepers and inventory teams'],
  ['Customer CRM, loyalty, wallet, and credit', 'Customer records, balances, loyalty context, and credit follow-up in one place.', 'Sales teams and account handlers'],
  ['Procurement and suppliers', 'Supplier records, purchase planning, receiving workflows, and procurement traceability.', 'Purchasing and operations teams'],
  ['Multi-store operations', 'A foundation for branch-aware stock, sales oversight, and centralized administration.', 'Owners and multi-branch managers'],
  ['Reports and analytics', 'Operational reports for sales, stock, customer activity, and management review.', 'Executives and finance teams'],
  ['Documents and receipts', 'Commercial documents, receipts, and printable records aligned with business workflows.', 'Front desk and back office teams'],
  ['Backup and recovery', 'Backup and restore workflows to support continuity planning and safer operations.', 'Administrators and support teams'],
  ['Licensing and deployment', 'Activation, installer, and deployment foundations for controlled rollout.', 'Implementation and IT teams'],
  ['Administration and system health', 'Settings, users, roles, status visibility, and system configuration surfaces.', 'Business administrators'],
];

export default function CapabilityGrid() {
  return (
    <section id="capabilities" className="border-y border-slate-900 bg-slate-900/45 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Core capabilities</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">The workflows businesses need to operate with confidence.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {capabilities.map(([title, value, user]) => (
            <article key={title} className="rounded-md border border-slate-800 bg-slate-950/70 p-5">
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{value}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{user}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
