import CorporateFooter from '@/components/layout/CorporateFooter';
import CorporateHeader from '@/components/layout/CorporateHeader';
import PowerOpsSurvey from '@/components/research/PowerOpsSurvey';

export default function PowerOpsResearchPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <CorporateHeader />
      <main>
        <PowerOpsSurvey />
      </main>
      <CorporateFooter />
    </div>
  );
}
