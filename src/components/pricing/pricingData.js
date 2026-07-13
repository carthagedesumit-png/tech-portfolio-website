export const editionStatus = {
  available: {
    label: 'Current foundation',
    className: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  },
  planned: {
    label: 'Planned',
    className: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  },
  roadmap: {
    label: 'Enterprise roadmap',
    className: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300',
  },
};

export const cbosEditions = [
  {
    id: 'community',
    name: 'Community',
    audience: 'Small teams evaluating CBOS',
    description:
      'A practical entry point for learning the CBOS workflow and preparing a small business deployment.',
    deployment: 'Single-PC foundation',
    support: 'Documentation and community resources',
    status: 'planned',
    featured: false,
    capabilities: [
      'Sales and receipt workflows',
      'Core inventory management',
      'Customer records',
      'Basic reporting',
      'Local deployment foundation',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    audience: 'Growing retail and service businesses',
    description:
      'The primary commercial edition for businesses that need connected sales, inventory, CRM, procurement, and reporting.',
    deployment: 'Single store or store-server deployment',
    support: 'Commercial onboarding and support options',
    status: 'available',
    featured: true,
    capabilities: [
      'Sales and checkout management',
      'Inventory and barcode workflows',
      'CRM, loyalty, wallet, and credit',
      'Procurement and supplier management',
      'Reports and administration workspaces',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    audience: 'Multi-store and larger organizations',
    description:
      'Designed for organizations that require centralized oversight, store-aware permissions, and scalable operational control.',
    deployment: 'Multi-store and head-office foundation',
    support: 'Deployment planning and enterprise support',
    status: 'roadmap',
    featured: false,
    capabilities: [
      'Shared product catalog',
      'Store-specific inventory',
      'Inter-store transfers',
      'Store performance reporting',
      'Advanced deployment and integration planning',
    ],
  },
  {
    id: 'developer',
    name: 'Developer',
    audience: 'Integration partners and technical teams',
    description:
      'A future-ready edition for approved integrations, development environments, and API-based extensions.',
    deployment: 'Development and integration environments',
    support: 'Technical documentation and integration guidance',
    status: 'planned',
    featured: false,
    capabilities: [
      'Versioned REST API foundation',
      'OpenAPI documentation',
      'Integration testing workflows',
      'Developer licensing foundation',
      'Extension roadmap access',
    ],
  },
];

export const deploymentModels = [
  {
    title: 'Single PC',
    description:
      'A local deployment foundation for one business location and a single operational workstation.',
    status: 'available',
  },
  {
    title: 'Store Server',
    description:
      'A local store environment supporting connected operational workstations and centralized store data.',
    status: 'available',
  },
  {
    title: 'Multi-store',
    description:
      'Store-aware inventory, permissions, transfers, and reporting built into the current architecture.',
    status: 'available',
  },
  {
    title: 'Head Office',
    description:
      'Central oversight and management foundations for organizations operating multiple business locations.',
    status: 'roadmap',
  },
  {
    title: 'Cloud and SaaS',
    description:
      'Hosted deployment, managed synchronization, and subscription delivery remain future roadmap capabilities.',
    status: 'planned',
  },
];

export const licensingPrinciples = [
  'Transparent product editions',
  'Offline activation foundation',
  'Trial, perpetual, and subscription concepts',
  'Grace-period and read-only states',
  'Secure license verification',
  'Upgrade and edition-change foundation',
];

export const featureComparison = [
  {
    feature: 'Sales and checkout',
    community: 'available',
    professional: 'available',
    enterprise: 'available',
    developer: 'foundation',
  },
  {
    feature: 'Inventory management',
    community: 'available',
    professional: 'available',
    enterprise: 'available',
    developer: 'foundation',
  },
  {
    feature: 'Customer CRM and credit',
    community: 'foundation',
    professional: 'available',
    enterprise: 'available',
    developer: 'foundation',
  },
  {
    feature: 'Procurement and suppliers',
    community: 'planned',
    professional: 'available',
    enterprise: 'available',
    developer: 'foundation',
  },
  {
    feature: 'Reports and analytics',
    community: 'foundation',
    professional: 'available',
    enterprise: 'available',
    developer: 'foundation',
  },
  {
    feature: 'Multi-store operations',
    community: 'planned',
    professional: 'foundation',
    enterprise: 'available',
    developer: 'foundation',
  },
  {
    feature: 'Business administration',
    community: 'foundation',
    professional: 'available',
    enterprise: 'available',
    developer: 'foundation',
  },
  {
    feature: 'REST API foundation',
    community: 'planned',
    professional: 'foundation',
    enterprise: 'available',
    developer: 'available',
  },
  {
    feature: 'Offline deployment',
    community: 'available',
    professional: 'available',
    enterprise: 'available',
    developer: 'available',
  },
  {
    feature: 'Cloud and SaaS delivery',
    community: 'planned',
    professional: 'planned',
    enterprise: 'roadmap',
    developer: 'roadmap',
  },
  {
    feature: 'Mobile applications',
    community: 'planned',
    professional: 'planned',
    enterprise: 'roadmap',
    developer: 'roadmap',
  },
  {
    feature: 'AI-assisted operations',
    community: 'planned',
    professional: 'planned',
    enterprise: 'roadmap',
    developer: 'roadmap',
  },
];

export const supportLevels = [
  {
    title: 'Documentation Support',
    audience: 'Community and evaluation deployments',
    description:
      'Public guides, getting-started documentation, troubleshooting resources, and release information.',
    status: 'planned',
  },
  {
    title: 'Business Support',
    audience: 'Professional deployments',
    description:
      'Commercial onboarding, operational guidance, deployment verification, and agreed support channels.',
    status: 'available',
  },
  {
    title: 'Enterprise Support',
    audience: 'Multi-store and critical deployments',
    description:
      'Deployment planning, escalation paths, infrastructure review, and organization-specific support agreements.',
    status: 'roadmap',
  },
  {
    title: 'Developer Support',
    audience: 'Approved integration partners',
    description:
      'API guidance, integration planning, development-environment support, and technical documentation.',
    status: 'planned',
  },
];

export const commercialProcess = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We review your business type, locations, users, workflows, hardware, data, and operational priorities.',
  },
  {
    step: '02',
    title: 'Edition Recommendation',
    description:
      'Carthage Technologies recommends the most appropriate CBOS edition and deployment model.',
  },
  {
    step: '03',
    title: 'Commercial Proposal',
    description:
      'You receive a proposal covering licensing, implementation, migration, training, and support requirements.',
  },
  {
    step: '04',
    title: 'Deployment Planning',
    description:
      'The installation environment, rollout sequence, backup policy, and acceptance checks are agreed.',
  },
  {
    step: '05',
    title: 'Implementation',
    description:
      'CBOS is configured, verified, and prepared for controlled operational use.',
  },
];

export const pricingFaqs = [
  {
    question: 'Why are final prices not published yet?',
    answer:
      'CBOS is currently in release preparation. Final pricing will depend on approved edition packaging, deployment size, support requirements, migration work, and commercial launch decisions.',
  },
  {
    question: 'Can a business upgrade to another edition later?',
    answer:
      'The platform includes an edition and licensing foundation designed to support future upgrade paths. Final commercial upgrade policies will be published during launch preparation.',
  },
  {
    question: 'Does CBOS work without continuous internet access?',
    answer:
      'CBOS currently emphasizes local and offline-capable deployment. Some future hosted, synchronization, activation, or support services may require connectivity.',
  },
  {
    question: 'Can existing business data be migrated?',
    answer:
      'Migration can be assessed for products, customers, suppliers, inventory, and selected operational records. The exact scope depends on the source format and data quality.',
  },
  {
    question: 'Does CBOS support multiple stores?',
    answer:
      'The current architecture includes store-specific inventory, store-aware permissions, transfers, and centralized reporting foundations.',
  },
  {
    question: 'Is cloud hosting currently available?',
    answer:
      'No. Cloud hosting and SaaS delivery remain future roadmap capabilities and are not presented as currently available.',
  },
];
