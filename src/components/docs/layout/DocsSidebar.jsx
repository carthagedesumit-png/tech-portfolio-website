import { useState } from 'react';
import { docsCategories, docs } from '../content/docsData';

function SidebarLinks({ currentSlug, onNavigate }) {
  return <div className="space-y-6">{docsCategories.map((category) => <div key={category.name}><p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{category.name}</p><ul className="mt-2 space-y-1">{category.slugs.map((slug) => <li key={slug}><a href={`/docs/${slug}`} onClick={onNavigate} aria-current={currentSlug === slug ? 'page' : undefined} className={`block rounded-md px-3 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${currentSlug === slug ? 'bg-cyan-300/10 font-bold text-cyan-100' : 'text-slate-400 hover:bg-slate-900 hover:text-white'}`}>{docs[slug].title}</a></li>)}</ul></div>)}</div>;
}

export default function DocsSidebar({ currentSlug }) {
  const [open, setOpen] = useState(false);
  return <aside className="lg:sticky lg:top-24 lg:self-start"><button type="button" aria-expanded={open} aria-controls="docs-sidebar-navigation" onClick={() => setOpen((value) => !value)} className="flex w-full items-center justify-between rounded-md border border-slate-800 bg-slate-900 px-4 py-3 text-sm font-bold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 lg:hidden"><span>Documentation menu</span><span aria-hidden="true">{open ? '−' : '+'}</span></button><nav id="docs-sidebar-navigation" aria-label="Documentation sections" className={`${open ? 'block' : 'hidden'} mt-3 rounded-lg border border-slate-800 bg-slate-950 p-5 lg:mt-0 lg:block`}><a href="/docs" className="mb-6 block rounded-md text-base font-black text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Documentation home</a><SidebarLinks currentSlug={currentSlug} onNavigate={() => setOpen(false)} /></nav></aside>;
}
