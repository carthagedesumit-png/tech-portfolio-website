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
          <CbosCTA />
        </main>
        <CorporateFooter />
      </div>
    </>
  );
}
