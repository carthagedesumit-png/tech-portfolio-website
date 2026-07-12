const workspaces = [
  ['Executive Dashboard', 'High-level operating view for owners and leadership.'],
  ['Sales Workspace', 'Checkout, order flow, receipts, and daily counter activity.'],
  ['Inventory Workspace', 'Stock visibility, barcode workflows, receiving, and product movement.'],
  ['CRM Workspace', 'Customer records, loyalty, wallet, credit, and follow-up context.'],
  ['Procurement Workspace', 'Suppliers, purchasing activity, receiving, and procurement records.'],
  ['Reports Workspace', 'Operational reporting for management review and business decisions.'],
  ['Administration Workspace', 'Users, roles, configuration, licensing, and system health surfaces.'],
];

export default function WorkspaceShowcase() {
  return (
    <section id="workspaces" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Workspace showcase</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">A connected workspace model for daily operations.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">These are CSS-based interface previews, not production screenshots.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workspaces.map(([title, copy]) => (
            <article key={title} className="rounded-md border border-slate-800 bg-slate-900/55 p-4">
              <div className="rounded-md border border-slate-800 bg-slate-950 p-4" aria-label={`${title} interface preview`}>
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-bold text-white">{title}</p>
                  <span className="rounded border border-cyan-300/20 px-2 py-1 text-[10px] font-bold text-cyan-200">Preview</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-3/4 rounded-full bg-cyan-300/50" />
                  <div className="h-2 w-full rounded-full bg-slate-800" />
                  <div className="h-2 w-2/3 rounded-full bg-slate-800" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-400">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
