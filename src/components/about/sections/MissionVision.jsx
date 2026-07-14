import AboutSectionHeading from '../shared/AboutSectionHeading';
import { missionVisionPurpose } from '../aboutData';

export default function MissionVision() {
  return <section className="border-y border-slate-900 bg-slate-900/40 py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><AboutSectionHeading eyebrow="Mission, vision, purpose" title="Direction grounded in useful technology and earned trust." /><div className="mt-10 grid gap-4 lg:grid-cols-3">{missionVisionPurpose.map((item, index) => <article key={item.label} className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950 p-6"><span aria-hidden="true" className="absolute right-5 top-3 text-6xl font-black text-slate-900">0{index + 1}</span><p className="relative text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{item.label}</p><h3 className="relative mt-4 text-xl font-black text-white">{item.title}</h3><p className="relative mt-4 text-sm leading-7 text-slate-400">{item.copy}</p></article>)}</div></div></section>;
}
