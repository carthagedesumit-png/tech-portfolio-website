import Head from 'next/head';
import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import IndustryPageLayout from '@/components/solutions/industries/IndustryPageLayout';
import { industryMap } from '@/components/solutions/industries/industryData';

const industry = industryMap['multi-branch'];

export default function MultiBranchSolutionPage() {
  return (
    <>
      <Head>
        <title>Multi-branch Business Solution | Carthage Technologies</title>
        <meta name="description" content="See how CBOS supports multi-branch businesses with shared product catalogs, store-specific inventory, role and store access, transfers, reporting, oversight, and deployment foundations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/solutions/multi-branch" />
        <meta property="og:title" content="Multi-branch Business Solution | Carthage Technologies" />
        <meta property="og:description" content="CBOS store-aware architecture for catalogs, inventory, transfers, permissions, performance reporting, and centralized oversight." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/icons/favicon.svg" />
      </Head>
      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-300/30 selection:text-white">
        <CorporateHeader />
        <main><IndustryPageLayout industry={industry} /></main>
        <CorporateFooter />
      </div>
    </>
  );
}
