import Head from 'next/head';
import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import IndustryPageLayout from '@/components/solutions/industries/IndustryPageLayout';
import { industryMap } from '@/components/solutions/industries/industryData';

const industry = industryMap.hospitality;

export default function HospitalitySolutionPage() {
  return (
    <>
      <Head>
        <title>Hospitality Solution | Carthage Technologies</title>
        <meta name="description" content="Explore transferable CBOS hospitality foundations for sales, customer records, inventory, procurement, reporting, branch visibility, and administration, with specialist workflows planned." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/solutions/hospitality" />
        <meta property="og:title" content="Hospitality Solution | Carthage Technologies" />
        <meta property="og:description" content="CBOS hospitality-adjacent foundations with room booking, table management, and PMS workflows marked as future editions." />
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
