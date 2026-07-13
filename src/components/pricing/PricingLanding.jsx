import PricingHero from './shared/PricingHero';
import EditionCard from './shared/EditionCard';
import DeploymentModelCard from './shared/DeploymentModelCard';
import PricingCTA from './shared/PricingCTA';
import FeatureComparison from './shared/FeatureComparison';
import SupportLevels from './shared/SupportLevels';
import CommercialProcess from './shared/CommercialProcess';
import PricingFAQ from './shared/PricingFAQ';
import {
  cbosEditions,
  deploymentModels,
  licensingPrinciples,
} from './pricingData';

const commercialServices = [
  {
    title: 'Deployment',
    description:
      'Installation planning, environment preparation, first-run configuration, and operational verification.',
  },
  {
    title: 'Data Migration',
    description:
      'Structured import planning for products, customers, suppliers, inventory, and opening balances where supported.',
  },
  {
    title: 'Training',
    description:
      'Role-focused onboarding for administrators, managers, cashiers, and operational teams.',
  },
  {
    title: 'Customization',
    description:
      'Requirements assessment for approved workflows, reports, documents, integrations, and industry needs.',
  },
  {
    title: 'Support',
    description:
      'Support options aligned to edition, deployment complexity, operating hours, and customer requirements.',
  },
  {
    title: 'Engineering & Hardware Planning',
    description:
      'Guidance for local networks, workstations, scanners, printers, power continuity, and deployment infrastructure.',
  },
];

export default function PricingLanding() {
  return (
    <>
      <PricingHero />

      <main>
        <section id="cbos-editions" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              CBOS Editions
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Product packaging built around business scale and operational needs.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Prices are not published during the current release-preparation phase.
              Edition recommendations and commercial proposals are prepared after a
              deployment assessment.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {cbosEditions.map((edition) => (
              <EditionCard key={edition.id} edition={edition} />
            ))}
          </div>
        </section>

        <section className="border-y border-slate-900 bg-slate-900/30">
          <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Deployment Models
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Deploy locally today, with scalable foundations for tomorrow.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-400">
                CBOS currently emphasizes local and offline-capable deployment.
                Hosted cloud and SaaS delivery remain future roadmap capabilities.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {deploymentModels.map((model) => (
                <DeploymentModelCard key={model.title} model={model} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Licensing Principles
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Flexible licensing with clear operational states.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-400">
                CBOS includes an offline licensing and activation foundation with
                support for edition policies, lifecycle states, and protected
                feature access.
              </p>

              <a
                href="/licensing"
                className="mt-7 inline-flex items-center text-sm font-bold text-cyan-300 transition hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
              >
                Explore licensing details →
              </a>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {licensingPrinciples.map((principle) => (
                <li
                  key={principle}
                  className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-sm font-semibold text-slate-200"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-slate-900 bg-slate-900/30">
          <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Professional Services
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Implementation support beyond the software license.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {commercialServices.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-5"
                >
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <FeatureComparison />
        <SupportLevels />
        <CommercialProcess />
        <PricingFAQ />
      </main>

      <PricingCTA />
    </>
  );
}
