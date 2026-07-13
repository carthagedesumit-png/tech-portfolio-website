import Head from 'next/head';
import CorporateHeader from '../components/layout/CorporateHeader';
import CorporateFooter from '../components/layout/CorporateFooter';
import PricingCTA from '../components/pricing/shared/PricingCTA';
import PricingStatusBadge from '../components/pricing/shared/PricingStatusBadge';
import {
  cbosEditions,
  licensingPrinciples,
} from '../components/pricing/pricingData';

const lifecycleStates = [
  {
    title: 'Activation',
    description:
      'CBOS includes a licensing foundation for validating an edition and enabling approved product capabilities.',
    status: 'available',
  },
  {
    title: 'Offline licensing',
    description:
      'The current architecture supports offline-oriented activation and verification foundations for local deployments.',
    status: 'available',
  },
  {
    title: 'Grace and read-only states',
    description:
      'License lifecycle rules can support controlled grace periods and reduced-access states where policy requires them.',
    status: 'available',
  },
  {
    title: 'Renewal and upgrades',
    description:
      'Commercial renewal, edition changes, and upgrade packaging will be finalized during release preparation.',
    status: 'roadmap',
  },
  {
    title: 'Cloud subscription management',
    description:
      'Centralized online subscription administration remains a future hosted-platform capability.',
    status: 'planned',
  },
];

export default function LicensingPage() {
  return (
    <>
      <Head>
        <title>CBOS Licensing | Carthage Technologies</title>
        <meta
          name="description"
          content="Learn about CBOS activation, offline licensing, edition policies, lifecycle states, and future commercial licensing models."
        />
        <meta property="og:title" content="CBOS Licensing" />
        <meta
          property="og:description"
          content="Understand the CBOS licensing foundation, edition model, and commercial planning approach."
        />
      </Head>

      <div className="min-h-screen bg-slate-950 text-slate-100">
        <CorporateHeader />

        <main>
          <section className="border-b border-slate-900">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
              <div className="max-w-4xl">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">
                  Licensing
                </p>

                <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Licensing designed for dependable local business operations.
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                  CBOS includes an offline-oriented licensing and activation
                  foundation with edition-aware access, lifecycle states, and
                  protected capabilities. Final commercial terms will be
                  published as release packaging is completed.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                  >
                    Compare Editions
                  </a>

                  <a
                    href="/docs/licensing"
                    className="inline-flex items-center justify-center rounded-md border border-slate-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                  >
                    Read Licensing Guide
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Licensing Principles
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Clear product access with secure operational foundations.
              </h2>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {licensingPrinciples.map((principle) => (
                <li
                  key={principle}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 text-sm font-semibold text-slate-200"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </section>

          <section className="border-y border-slate-900 bg-slate-900/30">
            <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                  Lifecycle Foundation
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Activation, controlled states, and future upgrade paths.
                </h2>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {lifecycleStates.map((state) => (
                  <article
                    key={state.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950 p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-white">{state.title}</h3>
                      <PricingStatusBadge status={state.status} />
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {state.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Product Editions
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Licensing policies align with the selected CBOS edition.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {cbosEditions.map((edition) => (
                <article
                  key={edition.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-white">{edition.name}</h3>
                    <PricingStatusBadge status={edition.status} />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {edition.audience}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </main>

        <PricingCTA />
        <CorporateFooter />
      </div>
    </>
  );
}
