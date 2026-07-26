import DocsLayout from '@/components/docs/layout/DocsLayout';
import DocsArticleLayout from '@/components/docs/content/DocsArticleLayout';
import { docs, docOrder } from '@/components/docs/content/docsData';

export default function DocumentationArticlePage({ slug }) {
  const doc = docs[slug];
  const index = docOrder.indexOf(slug);
  const previousSlug = index > 0 ? docOrder[index - 1] : null;
  const nextSlug = index < docOrder.length - 1 ? docOrder[index + 1] : null;
  return <DocsLayout currentSlug={slug}><DocsArticleLayout doc={doc} previous={previousSlug ? { slug: previousSlug, title: docs[previousSlug].title } : null} next={nextSlug ? { slug: nextSlug, title: docs[nextSlug].title } : null} /></DocsLayout>;
}

export function getStaticPaths() { return { paths: docOrder.map((slug) => ({ params: { slug } })), fallback: false }; }
export function getStaticProps({ params }) { return { props: { slug: params.slug } }; }
