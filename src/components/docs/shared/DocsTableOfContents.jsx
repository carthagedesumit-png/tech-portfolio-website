export default function DocsTableOfContents({ sections }) {
  return <nav aria-label="On this page" className="rounded-lg border border-slate-800 bg-slate-900/50 p-5"><p className="text-sm font-black text-white">On this page</p><ul className="mt-4 space-y-3 text-sm">{sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="text-slate-400 hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">{section.title}</a></li>)}</ul></nav>;
}
