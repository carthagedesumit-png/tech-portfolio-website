import Head from 'next/head';
import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import ContactLanding from '@/components/contact/ContactLanding';

export default function ContactPage() {
  const description =
    'Contact Carthage Technologies for CBOS enquiries, software engineering, business technology, partnerships, pilot discussions, and project consultations.';

  return (
    <>
      <Head>
        <title>Contact Carthage Technologies | Start a Conversation</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/contact" />

        <meta
          property="og:title"
          content="Contact Carthage Technologies | Start a Conversation"
        />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/contact" />

        <meta name="theme-color" content="#020617" />
        <link rel="icon" href="/icons/favicon.svg" />
      </Head>

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
