import CorporateHeader from '../../components/layout/CorporateHeader';
import CorporateFooter from '../../components/layout/CorporateFooter';
import PricingLanding from '../../components/pricing/PricingLanding';

export default function PricingPage() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <CorporateHeader />
        <PricingLanding />
        <CorporateFooter />
      </div>
    </>
  );
}
