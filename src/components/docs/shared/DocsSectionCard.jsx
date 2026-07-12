import DocsStatusBadge from './DocsStatusBadge';
export default function DocsSectionCard({ doc }) {
  return <article className="flex h-full flex-col rounded-lg border border-slate-800 bg-slate-900/60 p-5"><DocsStatusBadge status={doc.status} /><h3 className="mt-4 text-lg font-black text-white">{doc.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{doc.description}</p><a href={`/docs/${doc.slug}`} className="mt-5 inline-flex w-fit rounded-md text-sm font-bold text-cyan-200 hover:text-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Read guide <span aria-hidden="true" className="ml-2">→</span></a></article>;
}
