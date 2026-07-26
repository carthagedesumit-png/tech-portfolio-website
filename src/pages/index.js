import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import HeroSection from '@/components/home/HeroSection';
import ProductOverview from '@/components/home/ProductOverview';
import EngineeringServices from '@/components/home/EngineeringServices';
import IndustrySolutions from '@/components/home/IndustrySolutions';
import WhyCarthage from '@/components/home/WhyCarthage';
import CompanyMetrics from '@/components/home/CompanyMetrics';
import CorporateCTA from '@/components/home/CorporateCTA';

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-300/30 selection:text-white">
        <CorporateHeader />
        <main>
          <HeroSection />
          <ProductOverview />
          <EngineeringServices />
          <IndustrySolutions />
          <WhyCarthage />
          <CompanyMetrics />
          <section id="documentation" className="border-y border-slate-900 bg-slate-950 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Documentation</p>
              <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-4xl">Find practical product, operations, and engineering guidance.</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">The public Documentation Center brings together CBOS setup, administration, backup, licensing, API, release, troubleshooting, and engineering guidance with honest capability labels.</p>
              <a href="/docs" className="mt-6 inline-flex rounded-md border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-50 transition hover:bg-cyan-300/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Explore Documentation</a>
            </div>
          </section>
          <CorporateCTA />
        </main>
        <CorporateFooter />
      </div>
    </>
  );
}
