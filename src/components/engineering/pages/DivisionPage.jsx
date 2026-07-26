import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import EngineeringDivisionLayout from './EngineeringDivisionLayout';

export default function DivisionPage({ division, children }) {
  return (
    <>
      <div className="min-h-screen overflow-x-clip bg-slate-950 text-slate-100 selection:bg-cyan-300/30 selection:text-white">
        <CorporateHeader />
        <main><EngineeringDivisionLayout division={division}>{children}</EngineeringDivisionLayout></main>
        <CorporateFooter />
      </div>
    </>
  );
}
