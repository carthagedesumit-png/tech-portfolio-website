import Head from 'next/head';
import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import IndustryPageLayout from '@/components/solutions/industries/IndustryPageLayout';
import { industryMap } from '@/components/solutions/industries/industryData';

const industry = industryMap['professional-services'];

export default function ProfessionalServicesSolutionPage() {
  return (
    <>
      <Head>
        <title>Professional Services Solution | Carthage Technologies</title>
        <meta name="description" content="See how CBOS can support professional services with customer management, payments, service sales, documents, receipts, reporting, access controls, and administration." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/solutions/professional-services" />
        <meta property="og:title" content="Professional Services Solution | Carthage Technologies" />
        <meta property="og:description" content="CBOS foundations for service sales, customers, payments, reporting, documents, receipts, and access controls." />
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
