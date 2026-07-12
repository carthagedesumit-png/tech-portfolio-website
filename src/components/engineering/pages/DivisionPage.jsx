import Head from 'next/head';
import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import EngineeringDivisionLayout from './EngineeringDivisionLayout';

export default function DivisionPage({ division, children }) {
  const title = `${division.name} | Carthage Engineering`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={division.summary} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`/engineering/${division.slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={division.summary} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`/engineering/${division.slug}`} />
        <meta name="theme-color" content="#020617" />
        <link rel="icon" href="/icons/favicon.svg" />
      </Head>
      <div className="min-h-screen overflow-x-clip bg-slate-950 text-slate-100 selection:bg-cyan-300/30 selection:text-white">
        <CorporateHeader />
        <main><EngineeringDivisionLayout division={division}>{children}</EngineeringDivisionLayout></main>
        <CorporateFooter />
      </div>
    </>
  );
}
