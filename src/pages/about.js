import Head from 'next/head';
import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import AboutLanding from '@/components/about/AboutLanding';

export default function AboutPage() {
  const description = 'Learn about Carthage Technologies, our mission, engineering philosophy, values, business technology platforms, and vision for building trusted digital solutions from Africa for the world.';
  return <><Head><title>About Carthage Technologies | Engineering the Future of Business</title><meta name="description" content={description} /><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="canonical" href="/about" /><meta property="og:title" content="About Carthage Technologies | Engineering the Future of Business" /><meta property="og:description" content={description} /><meta property="og:type" content="website" /><meta property="og:url" content="/about" /><meta name="theme-color" content="#020617" /><link rel="icon" href="/icons/favicon.svg" /></Head><div className="min-h-screen overflow-x-clip bg-slate-950 text-slate-100 selection:bg-cyan-300/30 selection:text-white"><CorporateHeader /><main><AboutLanding /></main><CorporateFooter /></div></>;
}
