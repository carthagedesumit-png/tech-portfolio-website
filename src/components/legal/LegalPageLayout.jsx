import CorporateFooter from '@/components/layout/CorporateFooter';
import CorporateHeader from '@/components/layout/CorporateHeader';

export default function LegalPageLayout({ eyebrow, title, introduction, children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <CorporateHeader />
      <main>
        <header className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              {introduction}
            </p>
            <p className="mt-4 text-sm text-slate-500">Last updated: 26 July 2026</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="space-y-10">{children}</div>
        </div>
      </main>
      <CorporateFooter />
    </div>
  );
}

export function LegalSection({ title, children }) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <section aria-labelledby={id} className="border-b border-slate-800 pb-10 last:border-0">
      <h2 id={id} className="text-2xl font-black text-white">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">{children}</div>
    </section>
  );
}
