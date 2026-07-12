import Head from 'next/head';
import DocsLayout from '@/components/docs/layout/DocsLayout';
import DocsArticleLayout from '@/components/docs/content/DocsArticleLayout';
import { docs, docOrder } from '@/components/docs/content/docsData';

export default function DocumentationArticlePage({ slug }) {
  const doc = docs[slug];
  const index = docOrder.indexOf(slug);
  const previousSlug = index > 0 ? docOrder[index - 1] : null;
  const nextSlug = index < docOrder.length - 1 ? docOrder[index + 1] : null;
  const title = `${doc.title} | Carthage Documentation`;
  return <><Head><title>{title}</title><meta name="description" content={doc.description} /><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="canonical" href={`/docs/${slug}`} /><meta property="og:title" content={title} /><meta property="og:description" content={doc.description} /><meta property="og:type" content="article" /><meta property="og:url" content={`/docs/${slug}`} /><meta name="theme-color" content="#020617" /><link rel="icon" href="/icons/favicon.svg" /></Head><DocsLayout currentSlug={slug}><DocsArticleLayout doc={doc} previous={previousSlug ? { slug: previousSlug, title: docs[previousSlug].title } : null} next={nextSlug ? { slug: nextSlug, title: docs[nextSlug].title } : null} /></DocsLayout></>;
}

export function getStaticPaths() { return { paths: docOrder.map((slug) => ({ params: { slug } })), fallback: false }; }
export function getStaticProps({ params }) { return { props: { slug: params.slug } }; }
