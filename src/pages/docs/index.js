import Head from 'next/head';
import DocsLayout from '@/components/docs/layout/DocsLayout';
import DocsLanding from '@/components/docs/content/DocsLanding';

export default function DocumentationPage() {
  const description = 'Explore public guidance for CBOS setup, administration, operations, APIs, release information, troubleshooting, and Carthage Engineering.';
  return <><Head><title>Documentation Center | Carthage Technologies</title><meta name="description" content={description} /><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="canonical" href="/docs" /><meta property="og:title" content="Documentation Center | Carthage Technologies" /><meta property="og:description" content={description} /><meta property="og:type" content="website" /><meta property="og:url" content="/docs" /><meta name="theme-color" content="#020617" /><link rel="icon" href="/icons/favicon.svg" /></Head><DocsLayout><DocsLanding /></DocsLayout></>;
}
