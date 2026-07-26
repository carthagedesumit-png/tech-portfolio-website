import CorporateFooter from '@/components/layout/CorporateFooter';
import CorporateHeader from '@/components/layout/CorporateHeader';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <CorporateHeader />
      <main className="flex flex-1 items-center">
        <section className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">
            Error 404
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl">
            This page could not be found.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            The address may be incorrect, or the page may have moved. Choose a route below
            to continue.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/"
              className="rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Return home
            </a>
            <a
              href="/docs"
              className="rounded-md border border-slate-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Browse documentation
            </a>
            <a
              href="/contact"
              className="rounded-md border border-slate-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Contact our team
            </a>
          </div>
        </section>
      </main>
      <CorporateFooter />
    </div>
  );
}
