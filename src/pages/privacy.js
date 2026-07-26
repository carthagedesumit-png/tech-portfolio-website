import LegalPageLayout, { LegalSection } from '@/components/legal/LegalPageLayout';

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      introduction="This policy explains what information the Carthage Technologies website handles, why we handle it, and the choices available to you. It applies to this public website and enquiries initiated through it."
    >
      <LegalSection title="Information we collect">
        <p>
          We receive information you choose to provide, such as your name, email address,
          organization, telephone number, enquiry category, and message. Our hosting and
          security providers may also process routine technical data such as IP address,
          browser type, device information, requested pages, timestamps, and diagnostic logs.
        </p>
      </LegalSection>

      <LegalSection title="Contact enquiries">
        <p>
          The website contact form prepares an email in your own email application; it does
          not submit the form to a Carthage Technologies web server. Information is sent only
          when you choose to send that email. We use enquiry information to respond, assess
          the requested service, keep necessary correspondence, and protect against misuse.
        </p>
      </LegalSection>

      <LegalSection title="Analytics">
        <p>
          We do not currently operate a first-party visitor analytics service or advertising
          tracker on this website. Our hosting provider may create limited access and security
          logs as part of delivering the site. If we introduce analytics later, we will update
          this policy and use appropriate notice or consent where required.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          This public website does not currently set cookies for analytics, advertising,
          personalization, or user accounts. Essential infrastructure may use short-lived
          technical mechanisms to provide security or reliable delivery. Third-party sites
          reached through links apply their own cookie practices.
        </p>
      </LegalSection>

      <LegalSection title="Data security">
        <p>
          We use reasonable administrative and technical measures intended to protect
          information from unauthorized access, alteration, disclosure, or loss. No website,
          email transmission, or storage system can be guaranteed completely secure, so
          please avoid sending passwords, private keys, payment-card details, or other
          unnecessary sensitive information through an enquiry.
        </p>
      </LegalSection>

      <LegalSection title="Third-party services">
        <p>
          Website hosting, internet delivery, email providers, and linked external services
          may process information under their own terms and privacy notices. We share
          information only where needed to operate, secure, or respond through these services,
          or where required by law. We do not sell personal information.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          Depending on where you live, you may have rights to request access, correction,
          deletion, restriction, objection, or a portable copy of personal information, and
          to complain to an appropriate data-protection authority. These rights may be subject
          to legal exceptions. Contact us to make a request; we may need to verify your identity.
        </p>
      </LegalSection>

      <LegalSection title="Data retention">
        <p>
          We retain enquiry correspondence only for as long as reasonably needed to respond,
          maintain business records, resolve disputes, meet legal obligations, or protect the
          website. Routine technical logs are retained according to the relevant provider&apos;s
          operational and security practices. Information is deleted or anonymized when it is
          no longer needed, where reasonably practicable.
        </p>
      </LegalSection>

      <LegalSection title="Contact information">
        <p>
          Questions or privacy requests may be sent to{' '}
          <a
            className="font-semibold text-cyan-300 underline decoration-cyan-300/40 underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            href="mailto:carthagesysystems01@gmail.com?subject=Privacy%20request"
          >
            carthagesysystems01@gmail.com
          </a>
          . Please use “Privacy request” in the subject line and describe the information or
          right involved.
        </p>
      </LegalSection>

      <LegalSection title="Future policy updates">
        <p>
          We may revise this policy as the website, our services, or legal requirements change.
          The updated version will be posted on this page with a revised date. Material changes
          will receive additional notice when appropriate.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
