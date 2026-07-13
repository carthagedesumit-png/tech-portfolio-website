import Head from 'next/head';
import CorporateHeader from '../../components/layout/CorporateHeader';
import CorporateFooter from '../../components/layout/CorporateFooter';
import PricingLanding from '../../components/pricing/PricingLanding';

export default function CbosPricingPage() {
  return (
    <>
      <Head>
        <title>CBOS Editions | Carthage Technologies</title>
        <meta
          name="description"
          content="Compare CBOS Community, Professional, Enterprise, and Developer edition foundations and deployment options."
        />
        <meta property="og:title" content="CBOS Editions" />
        <meta
          property="og:description"
          content="Explore CBOS editions, deployment models, and commercial planning options."
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
