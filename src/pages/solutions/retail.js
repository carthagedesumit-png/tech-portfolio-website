import Head from 'next/head';
import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import IndustryPageLayout from '@/components/solutions/industries/IndustryPageLayout';
import { industryMap } from '@/components/solutions/industries/industryData';

const industry = industryMap.retail;

export default function RetailSolutionPage() {
  return (
    <>
      <Head>
        <title>Retail Solution | Carthage Technologies</title>
        <meta name="description" content="See how CBOS supports retail point-of-sale, inventory accuracy, barcode workflows, customer credit, receipts, reporting, and multi-store visibility." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/solutions/retail" />
        <meta property="og:title" content="Retail Solution | Carthage Technologies" />
        <meta property="og:description" content="CBOS retail foundations for sales, inventory, customers, receipts, reporting, and store visibility." />
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
