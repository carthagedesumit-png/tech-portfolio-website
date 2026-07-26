import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import SolutionsLanding from '@/components/solutions/SolutionsLanding';

export default function SolutionsPage() {
  return (
    <>
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
