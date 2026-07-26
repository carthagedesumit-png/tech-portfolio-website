export default function EmptyGalleryPlaceholder({ compact = false }) {
  return (
    <div className={`flex ${compact ? 'min-h-48' : 'min-h-72'} items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/60 p-8 text-center`}>
      <div>
        <span aria-hidden="true" className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-slate-700 text-lg text-slate-400">IMG</span>
        <p className="mt-4 text-sm font-semibold text-slate-300">Project photography coming soon</p>
        <p className="mt-2 max-w-sm text-xs leading-5 text-slate-500">Approved site photographs will be added as the public project record expands.</p>
      </div>
    </div>
  );
}
