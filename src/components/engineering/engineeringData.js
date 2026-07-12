export const engineeringDivisions = [
  {
    slug: 'solar',
    name: 'Renewable Energy',
    eyebrow: 'Solar & energy systems',
    summary: 'Practical solar, storage, and hybrid power systems planned around real load profiles and operating conditions.',
    intro: 'We plan energy systems from the load outward, balancing generation, storage, protection, maintainability, and future growth.',
    capabilities: ['Solar PV', 'Hybrid Systems', 'Off-grid Systems', 'Battery Storage', 'Energy Audits', 'Commercial Installations', 'Residential Installations', 'Mini-grid Concepts'],
    considerations: ['Measured or estimated load profile', 'Required autonomy and critical circuits', 'Site conditions, roof or ground space, and expansion plans'],
  },
  {
    slug: 'networking',
    name: 'Enterprise Networking',
    eyebrow: 'Connected infrastructure',
    summary: 'Structured, scalable network infrastructure for offices, branches, facilities, and growing operations.',
    intro: 'Network design should connect people and systems reliably while remaining understandable, supportable, and ready to scale.',
    capabilities: ['Enterprise LAN', 'WAN', 'Structured Cabling', 'Fiber', 'WiFi Planning', 'Server Rooms', 'Rack Design', 'Network Assessments'],
    considerations: ['Users, devices, applications, and coverage zones', 'Cabling pathways, racks, power, cooling, and resilience', 'Monitoring services are planned and scoped separately when available'],
  },
  {
    slug: 'security',
    name: 'Security Infrastructure',
    eyebrow: 'Physical security systems',
    summary: 'Security infrastructure designed around site risk, useful coverage, controlled access, and dependable evidence retention.',
    intro: 'We approach physical security as a complete operating system: field devices, network capacity, storage, access, and response workflows.',
    capabilities: ['CCTV', 'Access Control', 'Biometric Systems', 'Perimeter Monitoring', 'Remote Monitoring', 'Video Storage', 'Commercial Security Design'],
    considerations: ['Site survey, risk zones, lighting, and camera purpose', 'Retention targets, bandwidth, storage, and user access', 'No certification or vendor-partnership claims are implied'],
  },
  {
    slug: 'automation',
    name: 'Industrial Automation',
    eyebrow: 'Automation & connected operations',
    summary: 'Connected controls, sensors, and workflows that make physical operations easier to observe and coordinate.',
    intro: 'Automation begins with a clear operational problem, reliable signals, safe controls, and an implementation that teams can support.',
    capabilities: ['Industrial Automation', 'IoT', 'Remote Monitoring', 'Sensor Integration', 'Smart Buildings', 'Business Automation', 'AI Integrations (Planned)'],
    considerations: ['Process mapping, signals, controls, and failure modes', 'Connectivity, data retention, alerting, and operator workflows', 'Future AI integrations are planned, not currently offered capabilities'],
  },
  {
    slug: 'electrical',
    name: 'Electrical Engineering',
    eyebrow: 'Power systems & installations',
    summary: 'Electrical infrastructure planned for safe distribution, reliable operation, maintainability, and future demand.',
    intro: 'From load assessment to distribution and backup power, we develop electrical scopes around the facility’s real operating requirements.',
    capabilities: ['Electrical Installations', 'Power Distribution', 'Industrial Wiring', 'Load Assessments', 'Panel Design', 'Generator Integration', 'UPS Systems', 'Preventive Maintenance'],
    considerations: ['Existing supply, connected loads, demand, and growth', 'Distribution, protection, changeover, backup, and maintenance access', 'Final designs remain subject to site assessment and applicable requirements'],
  },
  {
    slug: 'consulting',
    name: 'Technical Consulting',
    eyebrow: 'Clarity before implementation',
    summary: 'Independent technical planning that turns business requirements into a clear, buildable infrastructure roadmap.',
    intro: 'Good implementation starts with a shared understanding of the site, constraints, priorities, risks, and practical sequence of work.',
    capabilities: ['Site Surveys', 'Technical Assessments', 'Project Planning', 'Infrastructure Design', 'Technology Strategy', 'Implementation Support'],
    considerations: ['Business goals, stakeholders, constraints, and budget range', 'Current-state survey and documented implementation options', 'Phased recommendations with assumptions and decision points'],
  },
];

export const engineeringMap = Object.fromEntries(engineeringDivisions.map((division) => [division.slug, division]));

export const engineeringTools = [
  { name: 'Solar Calculator', status: 'Available', href: '/engineering/solar#solar-calculator', description: 'Explore indicative PV array and storage sizing inputs.' },
  { name: 'Cable Calculator', status: 'Coming Soon', description: 'Planned support for cable sizing scenarios.' },
  { name: 'Battery Sizing', status: 'Coming Soon', description: 'Planned guided storage sizing workflow.' },
  { name: 'Load Estimator', status: 'Coming Soon', description: 'Planned tool for organizing connected loads.' },
  { name: 'Network Planner', status: 'Coming Soon', description: 'Planned network scope and capacity worksheet.' },
  { name: 'Voltage Drop Calculator', status: 'Coming Soon', description: 'Planned voltage-drop estimation workflow.' },
];

export const engineeringStrengths = [
  'Integrated software and engineering', 'Business-focused infrastructure', 'Scalable architecture', 'Renewable energy expertise',
  'Enterprise networking', 'Security-first thinking', 'Local implementation', 'Ongoing support',
];
