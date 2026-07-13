import Head from 'next/head';
import CorporateHeader from '../../components/layout/CorporateHeader';
import CorporateFooter from '../../components/layout/CorporateFooter';
import PricingLanding from '../../components/pricing/PricingLanding';

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing & Editions | Carthage Technologies</title>
        <meta
          name="description"
          content="Explore CBOS product editions, deployment models, licensing principles, and implementation services from Carthage Technologies."
        />
        <meta property="og:title" content="CBOS Pricing & Editions" />
        <meta
          property="og:description"
          content="Compare CBOS editions and deployment foundations, then discuss the right commercial path for your business."
        />
      </Head>

      <div className="min-h-screen bg-slate-950 text-slate-100">
        <CorporateHeader />
        <PricingLanding />
        <CorporateFooter />
      </div>
    </>
  );
}
