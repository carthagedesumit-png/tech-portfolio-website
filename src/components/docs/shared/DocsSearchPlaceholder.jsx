import { useMemo, useState } from 'react';
import DocsSectionCard from './DocsSectionCard';

export default function DocsSearchPlaceholder({ documents }) {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return documents;
    return documents.filter((doc) => `${doc.title} ${doc.category} ${doc.description}`.toLowerCase().includes(normalized));
  }, [documents, query]);
  return <section aria-labelledby="docs-search-heading"><div className="max-w-3xl"><h2 id="docs-search-heading" className="text-2xl font-black text-white">Find a guide</h2><label htmlFor="docs-search" className="mt-5 block text-sm font-bold text-slate-200">Filter documentation cards</label><input id="docs-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search setup, backups, licensing, API…" className="mt-2 w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-base text-white outline-none placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/30" /><p className="mt-2 text-xs leading-5 text-slate-500">This V1 search filters documentation cards. Full article-content search is planned.</p></div><p className="mt-8 text-sm text-slate-400" aria-live="polite">{results.length} {results.length === 1 ? 'guide' : 'guides'} shown</p>{results.length ? <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{results.map((doc) => <DocsSectionCard key={doc.slug} doc={doc} />)}</div> : <div className="mt-4 rounded-lg border border-slate-800 p-6 text-sm text-slate-400">No documentation cards match that filter.</div>}</section>;
}
