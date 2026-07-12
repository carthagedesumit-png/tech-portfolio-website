import Head from 'next/head';
import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import IndustryPageLayout from '@/components/solutions/industries/IndustryPageLayout';
import { industryMap } from '@/components/solutions/industries/industryData';

const industry = industryMap.pharmacy;

export default function PharmacySolutionPage() {
  return (
    <>
      <Head>
        <title>Pharmacy Solution | Carthage Technologies</title>
        <meta name="description" content="Explore supportable CBOS pharmacy retail foundations for stock visibility, barcode workflows, procurement, customer records, reporting, auditability, backups, and access controls." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/solutions/pharmacy" />
        <meta property="og:title" content="Pharmacy Solution | Carthage Technologies" />
        <meta property="og:description" content="CBOS pharmacy retail foundations with compliance-specific workflows clearly marked as planned." />
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
