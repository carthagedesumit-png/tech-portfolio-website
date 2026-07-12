import Head from 'next/head';
import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import SolutionsLanding from '@/components/solutions/SolutionsLanding';

export default function SolutionsPage() {
  return (
    <>
      <Head>
        <title>Industry Solutions | Carthage Technologies</title>
        <meta name="description" content="Explore Carthage Technologies industry solutions for retail, wholesale, pharmacy, hospitality, professional services, and multi-branch businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/solutions" />
        <meta property="og:title" content="Industry Solutions | Carthage Technologies" />
        <meta property="og:description" content="Sector-specific CBOS journeys with clear current and planned capability labels." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#020617" />
        <link rel="icon" href="/icons/favicon.svg" />
      </Head>
      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-300/30 selection:text-white">
        <CorporateHeader />
        <main>
          <SolutionsLanding />
        </main>
        <CorporateFooter />
      </div>
    </>
  );
}
