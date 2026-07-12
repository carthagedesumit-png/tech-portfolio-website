export default function DocsBreadcrumbs({ title }) {
  return <nav aria-label="Breadcrumb" className="text-sm text-slate-500"><ol className="flex flex-wrap items-center gap-2"><li><a href="/docs" className="rounded text-cyan-200 hover:text-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Documentation</a></li>{title && <><li aria-hidden="true">/</li><li aria-current="page" className="text-slate-300">{title}</li></>}</ol></nav>;
}
