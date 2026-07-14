export default function AboutSectionHeading({ eyebrow, title, description, align = 'left' }) {
  return <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}><p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p><h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>{description && <p className="mt-5 text-base leading-8 text-slate-300">{description}</p>}</div>;
}
