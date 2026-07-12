import Head from 'next/head';
import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import IndustryPageLayout from '@/components/solutions/industries/IndustryPageLayout';
import { industryMap } from '@/components/solutions/industries/industryData';

const industry = industryMap['wholesale-distribution'];

export default function WholesaleDistributionSolutionPage() {
  return (
    <>
      <Head>
        <title>Wholesale and Distribution Solution | Carthage Technologies</title>
        <meta name="description" content="See how CBOS supports wholesale and distribution operations with inventory visibility, suppliers, purchasing, receiving, credit, transfers, and reporting foundations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/solutions/wholesale-distribution" />
        <meta property="og:title" content="Wholesale and Distribution Solution | Carthage Technologies" />
        <meta property="og:description" content="CBOS foundations for bulk inventory, suppliers, procurement, receiving, customer credit, and reporting." />
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
