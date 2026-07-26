import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import PortfolioLanding from '@/components/portfolio/PortfolioLanding';

export default function PortfolioPage() {
  return <div className="min-h-screen overflow-x-clip bg-slate-950 text-slate-100 selection:bg-cyan-300/30 selection:text-white"><CorporateHeader /><main><PortfolioLanding /></main><CorporateFooter /></div>;
}
