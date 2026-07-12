import Head from 'next/head';
import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import CbosHero from '@/components/products/cbos/CbosHero';
import BusinessProblems from '@/components/products/cbos/BusinessProblems';
import CapabilityGrid from '@/components/products/cbos/CapabilityGrid';
import WorkspaceShowcase from '@/components/products/cbos/WorkspaceShowcase';
import IndustryFit from '@/components/products/cbos/IndustryFit';
import EditionsOverview from '@/components/products/cbos/EditionsOverview';
import DeploymentReliability from '@/components/products/cbos/DeploymentReliability';
import SecurityTrust from '@/components/products/cbos/SecurityTrust';
import CbosCTA from '@/components/products/cbos/CbosCTA';

export default function CbosProductPage() {
  return (
    <>
      <Head>
        <title>CBOS | Carthage Business Operating System</title>
        <meta name="description" content="CBOS is the Carthage Business Operating System for sales, inventory, customers, procurement, reporting, and multi-store operations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/products/cbos" />
        <meta property="og:title" content="CBOS | Carthage Business Operating System" />
        <meta property="og:description" content="One platform for sales, inventory, customers, procurement, reporting, and multi-store operations." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#020617" />
        <link rel="icon" href="/icons/favicon.svg" />
      </Head>

      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-300/30 selection:text-white">
        <CorporateHeader />
        <main>
          <CbosHero />
          <BusinessProblems />
          <CapabilityGrid />
          <WorkspaceShowcase />
          <IndustryFit />
          <EditionsOverview />
          <DeploymentReliability />
          <SecurityTrust />
          <section className="border-t border-slate-900 bg-slate-950 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">CBOS documentation</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Move from product overview to practical guidance.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[['CBOS Overview', '/docs/cbos'], ['Getting Started', '/docs/getting-started'], ['Installation', '/docs/installation'], ['User Guide', '/docs/user-guide']].map(([label, href]) => <a key={href} href={href} className="rounded-md border border-slate-800 bg-slate-900/60 p-5 font-bold text-cyan-100 transition hover:border-cyan-300/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">{label} <span aria-hidden="true">→</span></a>)}
              </div>
            </div>
          </section>
          <CbosCTA />
        </main>
        <CorporateFooter />
      </div>
    </>
  );
}
