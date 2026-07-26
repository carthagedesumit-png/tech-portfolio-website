import Head from 'next/head';
import { useRouter } from 'next/router';
import { docs } from '@/components/docs/content/docsData';
import { engineeringMap } from '@/components/engineering/engineeringData';
import { projectMap } from '@/components/portfolio/portfolioData';
import { industryMap } from '@/components/solutions/industries/industryData';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://carthagetechnologies.com'
).replace(/\/$/, '');

const staticMetadata = {
  '/': {
    title: 'Carthage Technologies | Business Software and Intelligent Infrastructure',
    description:
      'Carthage Technologies builds business software, automation, renewable energy systems, and intelligent infrastructure for modern organizations.',
  },
  '/about': {
    title: 'About Carthage Technologies | Engineering the Future of Business',
    description:
      'Learn how Carthage Technologies combines software, infrastructure, energy, and automation to help organizations operate and grow.',
  },
  '/contact': {
    title: 'Contact Carthage Technologies | Start a Conversation',
    description:
      'Contact Carthage Technologies about CBOS, engineering services, implementation planning, partnerships, or general enquiries.',
  },
  '/portfolio': {
    title: 'Engineering Project Portfolio | Carthage Technologies',
    description:
      'Explore Carthage Technologies engineering project case studies across CBT laboratories, security, networks, energy, systems, and software deployment.',
  },
  '/products/cbos': {
    title: 'CBOS | Carthage Business Operating System',
    description:
      'Explore the Carthage Business Operating System for sales, inventory, customers, procurement, reporting, and multi-store operations.',
  },
  '/solutions': {
    title: 'Industry Solutions | Carthage Technologies',
    description:
      'Explore sector-specific CBOS journeys with clear labels for current foundations and planned capabilities.',
  },
  '/engineering': {
    title: 'Engineering Division | Carthage Technologies',
    description:
      'Explore Carthage Technologies services across renewable energy, networking, security, automation, electrical engineering, and consulting.',
  },
  '/docs': {
    title: 'Documentation Center | Carthage Technologies',
    description:
      'Practical public guidance for CBOS, deployment, operations, integrations, troubleshooting, and Carthage Engineering.',
  },
  '/pricing': {
    title: 'Pricing & Editions | Carthage Technologies',
    description:
      'Explore CBOS product editions, deployment models, licensing principles, and implementation services from Carthage Technologies.',
  },
  '/pricing/cbos': {
    title: 'CBOS Editions | Carthage Technologies',
    description:
      'Compare CBOS edition foundations, deployment options, and commercial planning paths.',
  },
  '/licensing': {
    title: 'CBOS Licensing | Carthage Technologies',
    description:
      'Learn about CBOS activation, offline licensing, edition policies, lifecycle states, and future commercial licensing models.',
  },
  '/privacy': {
    title: 'Privacy Policy | Carthage Technologies',
    description:
      'Read how Carthage Technologies handles website enquiries, analytics, cookies, third-party services, retention, security, and privacy rights.',
  },
  '/terms': {
    title: 'Terms of Use | Carthage Technologies',
    description:
      'Review the acceptable-use, intellectual-property, availability, external-link, disclaimer, and liability terms for this website.',
  },
  '/404': {
    title: 'Page Not Found | Carthage Technologies',
    description:
      'The requested Carthage Technologies page could not be found. Return home, browse documentation, or contact our team.',
  },
};

function getMetadata(pathname) {
  if (staticMetadata[pathname]) return staticMetadata[pathname];

  if (pathname.startsWith('/docs/')) {
    const slug = pathname.slice('/docs/'.length);
    const doc = docs[slug];
    if (doc) {
      return {
        title: `${doc.title} | Carthage Documentation`,
        description: doc.description,
        type: 'article',
      };
    }
  }

  if (pathname.startsWith('/engineering/')) {
    const division = engineeringMap[pathname.slice('/engineering/'.length)];
    if (division) {
      return {
        title: `${division.name} | Carthage Engineering`,
        description: division.summary,
      };
    }
  }

  if (pathname.startsWith('/portfolio/')) {
    const project = projectMap[pathname.slice('/portfolio/'.length)];
    if (project) {
      return {
        title: `${project.title} | Carthage Technologies Portfolio`,
        description: project.summary,
        type: 'article',
      };
    }
  }

  if (pathname.startsWith('/solutions/')) {
    const industry = industryMap[pathname.slice('/solutions/'.length)];
    if (industry) {
      return {
        title: `${industry.name} Solution | Carthage Technologies`,
        description: industry.description,
      };
    }
  }

  return staticMetadata['/404'];
}

export default function SiteMetadata() {
  const router = useRouter();
  const cleanPath = (router.asPath || '/').split(/[?#]/)[0].replace(/\/$/, '') || '/';
  const metadataPath = router.pathname === '/404' ? '/404' : cleanPath;
  const metadata = getMetadata(metadataPath);
  const canonical = `${SITE_URL}${metadataPath}`;

  return (
    <Head>
      <title key="site-title">{metadata.title}</title>
      <meta key="site-description" name="description" content={metadata.description} />
      <link key="site-canonical" rel="canonical" href={canonical} />
      <meta key="site-og-title" property="og:title" content={metadata.title} />
      <meta
        key="site-og-description"
        property="og:description"
        content={metadata.description}
      />
      <meta key="site-og-type" property="og:type" content={metadata.type || 'website'} />
      <meta key="site-og-url" property="og:url" content={canonical} />
      <meta key="site-twitter-card" name="twitter:card" content="summary" />
      <meta key="site-twitter-title" name="twitter:title" content={metadata.title} />
      <meta
        key="site-twitter-description"
        name="twitter:description"
        content={metadata.description}
      />
      {metadataPath === '/404' && <meta key="site-robots" name="robots" content="noindex" />}
    </Head>
  );
}
