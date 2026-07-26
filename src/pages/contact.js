import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import ContactLanding from '@/components/contact/ContactLanding';

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen overflow-x-clip bg-slate-950 text-slate-100 selection:bg-cyan-300/30 selection:text-white">
        <CorporateHeader />

        <main>
          <ContactLanding />
        </main>

        <CorporateFooter />
      </div>
    </>
  );
}
