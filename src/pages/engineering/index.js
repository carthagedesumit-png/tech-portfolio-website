import Head from 'next/head';
import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import EngineeringLanding from '@/components/engineering/EngineeringLanding';

export default function EngineeringPage() {
  const description = 'Explore Carthage Technologies engineering services across renewable energy, networking, security, automation, electrical systems, and technical consulting.';
  return <><Head><title>Engineering Division | Carthage Technologies</title><meta name="description" content={description} /><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="canonical" href="/engineering" /><meta property="og:title" content="Engineering Division | Carthage Technologies" /><meta property="og:description" content={description} /><meta property="og:type" content="website" /><meta property="og:url" content="/engineering" /><meta name="theme-color" content="#020617" /><link rel="icon" href="/icons/favicon.svg" /></Head><div className="min-h-screen overflow-x-clip bg-slate-950 text-slate-100 selection:bg-cyan-300/30 selection:text-white"><CorporateHeader /><main><EngineeringLanding /></main><CorporateFooter /></div></>;
}
