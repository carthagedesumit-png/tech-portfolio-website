import AboutSectionHeading from '../shared/AboutSectionHeading';
import { capabilities } from '../aboutData';

export default function Capabilities() {
  return <section className="bg-slate-950 py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><AboutSectionHeading eyebrow="What we do" title="Digital capability connected to operational outcomes." description="Our work spans software products, engineering, automation, infrastructure, integration, and advisory support." /><div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 sm:grid-cols-2 lg:grid-cols-4">{capabilities.map(([title, copy], index) => <article key={title} className="bg-slate-950 p-6"><span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-cyan-300/25 bg-cyan-300/10 font-mono text-xs font-black text-cyan-200">{String(index + 1).padStart(2, '0')}</span><h3 className="mt-5 text-lg font-black text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{copy}</p></article>)}</div></div></section>;
}
