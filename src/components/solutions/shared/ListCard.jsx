function ListCard({ title, items }) {
  return (
    <article className="rounded-md border border-slate-800 bg-slate-950/70 p-5">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ListCard;
