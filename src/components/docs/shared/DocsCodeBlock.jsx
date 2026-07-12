export default function DocsCodeBlock({ label = 'Example', children }) {
  return <figure className="my-6 overflow-hidden rounded-lg border border-slate-800 bg-slate-950"><figcaption className="border-b border-slate-800 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</figcaption><pre className="overflow-x-auto p-4 text-sm leading-7 text-cyan-100" tabIndex="0"><code>{children}</code></pre></figure>;
}
