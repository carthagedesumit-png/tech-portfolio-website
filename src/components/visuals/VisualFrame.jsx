import Image from 'next/image';

export default function VisualFrame({ src, alt = '', caption, conceptual = false, className = '', imageClassName = '', sizes = '(max-width: 768px) 100vw, 50vw', priority = false, children }) {
  return (
    <figure className={`relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-cyan-950/20 ${className}`}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950/35 via-transparent to-cyan-300/5" />
      {src ? <div className="relative aspect-[16/10]"><Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={`object-cover ${imageClassName}`} /></div> : children}
      {(caption || conceptual) && <figcaption className="relative z-20 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800 bg-slate-950/90 px-4 py-3 text-xs text-slate-400"><span>{caption}</span>{conceptual && <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2.5 py-1 font-bold uppercase tracking-[0.14em] text-cyan-200">Conceptual visual</span>}</figcaption>}
    </figure>
  );
}
