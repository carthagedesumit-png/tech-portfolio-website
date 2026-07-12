export default function ServiceBanner({ items }) {
  return (
    <aside className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-6">
      <p className="text-sm font-black text-cyan-100">A responsible project start</p>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
        {items.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-cyan-300">—</span><span>{item}</span></li>)}
      </ul>
    </aside>
  );
}
