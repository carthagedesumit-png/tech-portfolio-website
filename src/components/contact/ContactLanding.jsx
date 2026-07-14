import ContactHero from './sections/ContactHero';
import ContactChannels from './sections/ContactChannels';
import ContactForm from './sections/ContactForm';
import RemoteOperations from './sections/RemoteOperations';
import ContactCTA from './sections/ContactCTA';

export default function ContactLanding() {
  return (
    <>
      <ContactHero />
      <ContactChannels />
      <ContactForm />
      <RemoteOperations />
      <ContactCTA />
    </>
  );
}
