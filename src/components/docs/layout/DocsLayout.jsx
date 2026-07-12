import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import DocsSidebar from './DocsSidebar';

export default function DocsLayout({ currentSlug, children }) {
  return <div className="min-h-screen overflow-x-clip bg-slate-950 text-slate-100 selection:bg-cyan-300/30 selection:text-white"><CorporateHeader /><div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[17rem_minmax(0,1fr)] lg:px-8"><DocsSidebar currentSlug={currentSlug} />{children}</div><CorporateFooter /></div>;
}
