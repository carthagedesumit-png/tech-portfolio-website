export default function CapabilityGrid({ items }) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item} className="rounded-md border border-slate-800 bg-slate-950/70 p-5">
          <p className="text-sm font-bold leading-6 text-slate-100">{item}</p>
        </div>
      ))}
    </div>
  );
}
