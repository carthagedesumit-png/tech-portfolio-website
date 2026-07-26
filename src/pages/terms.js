import LegalPageLayout, { LegalSection } from '@/components/legal/LegalPageLayout';

export default function TermsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms of Use"
      introduction="These terms govern access to the public Carthage Technologies website. By using the site, you agree to use it lawfully and responsibly. If you do not agree, please discontinue use."
    >
      <LegalSection title="Acceptable use">
        <p>
          You may browse, link to, and use the website for legitimate informational and
          business purposes. You must not interfere with its operation, attempt unauthorized
          access, introduce malicious code, scrape it in a way that disrupts service, misuse
          contact channels, impersonate others, or use the site unlawfully.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          Unless stated otherwise, the website&apos;s original text, visual design, branding,
          and software are owned by or licensed to Carthage Technologies and are protected by
          applicable intellectual-property laws. You may make ordinary personal or internal
          business use of the site, but may not present our material or marks as your own.
          Third-party names and marks remain the property of their respective owners.
        </p>
      </LegalSection>

      <LegalSection title="Product information disclaimer">
        <p>
          Website content is general information, not a binding proposal, professional advice,
          warranty, or commitment to deliver a feature. Product maturity, planned capabilities,
          pricing, availability, specifications, and timelines may change. A signed agreement
          or approved statement of work controls any purchase or engagement.
        </p>
      </LegalSection>

      <LegalSection title="Website availability">
        <p>
          We aim to keep the website useful and accurate, but it may occasionally be unavailable,
          incomplete, or out of date. We may maintain, change, suspend, or remove content without
          advance notice when reasonably necessary.
        </p>
      </LegalSection>

      <LegalSection title="External links">
        <p>
          Links to external websites are provided for convenience. We do not control those
          sites and do not necessarily endorse their content, security, availability, or privacy
          practices. Visiting them is at your discretion and subject to their own terms.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the extent permitted by applicable law, Carthage Technologies is not responsible
          for indirect or consequential loss arising solely from use of, inability to use, or
          reliance on this public website. Nothing in these terms excludes responsibility that
          cannot lawfully be excluded. Your rights under mandatory consumer or other applicable
          law are not affected.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these terms may be sent to{' '}
          <a
            className="font-semibold text-cyan-300 underline decoration-cyan-300/40 underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            href="mailto:carthagesysystems01@gmail.com?subject=Website%20terms"
          >
            carthagesysystems01@gmail.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These terms are governed by the laws that apply to Carthage Technologies in its place
          of establishment, together with any mandatory laws that apply to you. Any dispute
          should first be raised with us in good faith so the parties can try to resolve it.
          A court with lawful jurisdiction may hear an unresolved dispute.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
