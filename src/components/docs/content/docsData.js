export const docOrder = ['cbos', 'getting-started', 'installation', 'administration', 'user-guide', 'backup-recovery', 'licensing', 'api', 'releases', 'troubleshooting', 'engineering'];

export const docs = {
  cbos: {
    title: 'CBOS Overview', category: 'CBOS Product', status: 'Foundation', description: 'Understand the purpose, current scope, and maturity of the Carthage Business Operating System.',
    sections: [
      { id: 'what-is-cbos', title: 'What CBOS is', paragraphs: ['CBOS is the Carthage Business Operating System: a business operations platform designed to bring sales, inventory, customers, procurement, reporting, and administration into a coherent workspace.', 'Its current product direction is centered on retail and general business operations. It is not represented here as a completed public production release.'] },
      { id: 'who-it-serves', title: 'Who it is designed for', bullets: ['Retailers and growing SMEs', 'Wholesalers and distribution-oriented businesses', 'Teams that need clearer operational controls', 'Organizations preparing for multi-store operations'] },
      { id: 'workspaces', title: 'Core operational workspaces', bullets: ['Sales and transaction workflows', 'Inventory and product visibility', 'Customer records and account activity', 'Procurement, suppliers, and receiving', 'Reports and management dashboards', 'Administration, deployment, licensing, and backup foundations'] },
      { id: 'maturity', title: 'Product maturity', paragraphs: ['The platform has an implemented operational foundation and an active release-candidate engineering path. Public availability, final packaging, commercial terms, and production support remain release-time decisions.'], callout: { type: 'Important', text: 'Future specialist editions and deeper industry workflows are planned directions, not currently available promises.' } },
    ],
  },
  'getting-started': {
    title: 'Getting Started', category: 'CBOS Product', status: 'Foundation', description: 'A customer-friendly sequence for preparing CBOS and completing the first business workflow.',
    sections: [
      { id: 'overview', title: 'System overview', paragraphs: ['CBOS organizes business activity around stores, users, products, inventory, customers, sales, procurement, and reports. An administrator should establish the business foundation before operational users begin work.'] },
      { id: 'setup-sequence', title: 'Administrator setup sequence', bullets: ['Confirm the deployment and first-run configuration', 'Create or verify the first business and store', 'Create users and assign appropriate roles', 'Add products and organize inventory records', 'Confirm opening stock information', 'Complete a controlled first sale', 'Review the resulting dashboard and reports'] },
      { id: 'first-workflow', title: 'First store, user, and sale', paragraphs: ['Begin with one representative store and a limited set of products. Confirm the assigned user can access only the intended operational scope, then perform a controlled sale and verify its stock and reporting impact.'], callout: { type: 'Note', text: 'Exact interface previews will be added after approved product screenshots are available.' } },
      { id: 'backup', title: 'Start with a backup habit', paragraphs: ['Define where verified backups will be retained before real operational data is introduced. Keep more than one recent recovery point and periodically validate that backup evidence is readable.'] },
    ],
  },
  installation: {
    title: 'Installation', category: 'CBOS Product', status: 'Release requirement', description: 'A factual overview of the current Windows deployment and first-run foundation.',
    sections: [
      { id: 'foundation', title: 'Windows deployment foundation', paragraphs: ['CBOS includes a Windows packaging and installer foundation intended to deliver the application, deployment utilities, and required public assets as a controlled payload. A release build must pass packaging and evidence validation before distribution.'] },
      { id: 'first-run', title: 'First-run setup', bullets: ['Launch the approved installer package', 'Complete business, store, and administrator configuration', 'Allow the deployment foundation to initialize the database and application configuration', 'Verify the application starts and the local health checks respond', 'Confirm approved shortcuts and startup behavior'] },
      { id: 'upgrade', title: 'Upgrade foundation', paragraphs: ['The deployment design includes an upgrade path, but every release must define compatibility, migration, rollback, and verification requirements. Always create and verify a backup before upgrading.'], callout: { type: 'Warning', text: 'Never start an upgrade without a verified backup and a documented recovery decision.' } },
      { id: 'requirements', title: 'Release-time requirements', bullets: ['Approved installer and checksum evidence', 'Final release version and compatibility notes', 'Code-signing decisions and secure key handling', 'Supported Windows environment statement', 'Validated upgrade and rollback instructions'] },
    ],
  },
  administration: {
    title: 'Administration Guide', category: 'CBOS Product', status: 'Foundation', description: 'Administrative concepts for users, stores, licensing, health, deployment, and operational oversight.',
    sections: [
      { id: 'people-access', title: 'Users, roles, and stores', paragraphs: ['Administrators organize access through users, roles, and store scope. Apply the least access needed for each responsibility and review access when responsibilities change.'] },
      { id: 'operations', title: 'Operational administration', bullets: ['Review licensing and activation status', 'Confirm recent backups and recovery readiness', 'Monitor hardware and device readiness', 'Review deployment and system health information', 'Maintain visibility of non-secret configuration status', 'Remain aware of audit and operational history'] },
      { id: 'dashboard', title: 'Dashboard maturity', paragraphs: ['Current dashboard workspaces provide a strong read and oversight foundation. Some administrative actions remain read-only, workflow foundations, or planned enhancements and should not be assumed writable until explicitly confirmed.'], callout: { type: 'Important', text: 'A visible dashboard card does not by itself mean every related administrative action is available.' } },
    ],
  },
  'user-guide': {
    title: 'User Guide', category: 'CBOS Product', status: 'Foundation', description: 'Business-workflow guidance for the main CBOS operational areas.',
    sections: [
      { id: 'navigation', title: 'Dashboard navigation', paragraphs: ['Use the dashboard to move between operational workspaces and review business status. Available views depend on role and store scope. Interface preview coming soon.'] },
      { id: 'sales', title: 'Sales workflow', bullets: ['Confirm the correct store and user context', 'Identify products and quantities', 'Confirm customer details when required', 'Review totals and payment information', 'Complete the transaction and verify its operational record'] },
      { id: 'inventory-customers', title: 'Inventory and customers', paragraphs: ['Inventory workflows support product and stock visibility. Customer workflows support business relationships and account activity. Exact controls vary with product maturity and assigned permissions. Interface preview coming soon.'] },
      { id: 'procurement-reports', title: 'Procurement and reports', paragraphs: ['Procurement connects suppliers, purchase orders, receipts, and inventory movement. Reports summarize operational activity for review and decision-making. Export formats may remain planned where explicitly labeled.'] },
    ],
  },
  'backup-recovery': {
    title: 'Backup and Recovery', category: 'Operations', status: 'Available', description: 'Safe principles for backup verification, retention, restore, and rollback readiness.',
    sections: [
      { id: 'purpose', title: 'Why backups matter', paragraphs: ['Backups create recovery points for operational data and configuration. A backup is useful only when its evidence is complete, retained safely, and periodically verified.'] },
      { id: 'retention', title: 'Verification and retention', bullets: ['Check that each snapshot completes successfully', 'Retain multiple recent recovery points', 'Keep at least one copy separate from the active machine', 'Protect backup storage from unauthorized access', 'Test the recovery procedure in a controlled environment'] },
      { id: 'restore', title: 'Safe restore sequence', bullets: ['Stop and assess the incident', 'Create a pre-restore backup when the current state is readable', 'Select and verify the intended recovery point', 'Restrict access during restoration', 'Restore through the approved workflow', 'Verify health and business data before reopening access'], callout: { type: 'Warning', text: 'Restore operations can replace current data. Confirm scope, recovery point, and rollback options before proceeding.' } },
      { id: 'portability', title: 'Export and import foundation', paragraphs: ['Export and import capabilities support controlled portability scenarios. Treat them as governed operations, validate the source and target, and retain evidence of the transfer.'] },
    ],
  },
  licensing: {
    title: 'Licensing and Activation', category: 'Operations', status: 'Foundation', description: 'Public licensing concepts without exposing keys, signing internals, or security-sensitive details.',
    sections: [
      { id: 'editions', title: 'Editions and commercial models', paragraphs: ['CBOS is designed to support edition-based packaging and trial, perpetual, or subscription concepts. Final commercial editions and terms are release-time decisions.'] },
      { id: 'activation', title: 'Activation foundation', bullets: ['Online or offline activation may be supported by the deployment model', 'Licenses can express validity, edition, and machine association', 'Expiration and grace states should be presented clearly', 'Restricted or read-only behavior may protect data when a license is not active', 'Deactivation should follow an approved administrative workflow'] },
      { id: 'fingerprint', title: 'Machine association', paragraphs: ['Machine fingerprinting associates a license with a deployment at a high level. Public documentation intentionally omits the exact inputs, validation rules, and anti-tamper implementation.'] },
      { id: 'keys', title: 'Production key handling', paragraphs: ['Production signing material must remain outside source code and public documentation, with controlled access, rotation, backup, and incident procedures.'], callout: { type: 'Important', text: 'Never paste private keys, activation secrets, test fixtures, or signing credentials into support messages or public documentation.' } },
    ],
  },
  api: {
    title: 'API Overview', category: 'Developers', status: 'Foundation', description: 'A public overview of the versioned CBOS REST API and integration model.',
    sections: [
      { id: 'model', title: 'API model', paragraphs: ['CBOS provides a versioned REST API foundation. Authentication, role permissions, and store scope work together to limit each session to its intended operational context.'] },
      { id: 'conventions', title: 'Public conventions', bullets: ['Versioned endpoint paths', 'Authenticated requests for protected resources', 'Role and store-aware authorization', 'Pagination and filtering for collection resources', 'Consistent error responses without sensitive detail', 'Session revocation for invalidated access'] },
      { id: 'groups', title: 'Endpoint groups', bullets: ['Authentication and session management', 'Sales, products, and inventory', 'Customers and procurement', 'Reports and operational administration', 'Deployment, health, backup, and licensing foundations'] },
      { id: 'reference', title: 'Local API reference', paragraphs: ['OpenAPI and ReDoc may be available within authorized local deployments. Use the generated specification for the exact version rather than copying a potentially stale endpoint catalog into public documentation.'], callout: { type: 'Note', text: 'Example tokens and internal credentials are intentionally excluded from this public overview.' } },
    ],
  },
  releases: {
    title: 'Release Notes', category: 'Developers', status: 'Planned', description: 'Development status, milestone history, prerelease terminology, and the future changelog foundation.',
    sections: [
      { id: 'status', title: 'Current development status', paragraphs: ['CBOS has progressed through core operations, dashboards, deployment, release governance, and Windows release-candidate build foundations. A final public v1.0 release date is not announced.'] },
      { id: 'milestones', title: 'Completed platform milestones', bullets: ['Core sales, inventory, customer, procurement, and reporting foundations', 'Role, store, security, backup, and licensing foundations', 'Read-oriented business administration dashboards', 'Release governance and Windows packaging foundation', 'Corporate product, solutions, engineering, and documentation website experiences'] },
      { id: 'versioning', title: 'Versioning approach', paragraphs: ['Versions follow a major, minor, and patch structure, with prerelease labels when appropriate. Alpha indicates early validation, beta indicates broader feature validation, and RC identifies a release candidate still subject to acceptance.'] },
      { id: 'future', title: 'Future changelog process', paragraphs: ['Published releases should document changes, known issues, compatibility, upgrade requirements, and recovery guidance.'], callout: { type: 'Planned', text: 'Versioned release-note entries will be added only for verified, approved releases.' } },
    ],
  },
  troubleshooting: {
    title: 'Troubleshooting', category: 'Operations', status: 'Foundation', description: 'Safe first checks for startup, connectivity, devices, backup, licensing, and deployment issues.',
    sections: [
      { id: 'startup', title: 'Application does not start', bullets: ['Confirm the installation completed successfully', 'Restart the application once', 'Check available disk space and system time', 'Review the application logs through the approved support location', 'Record the error and recent system changes before requesting support'] },
      { id: 'local-connectivity', title: 'Browser or dashboard cannot connect', paragraphs: ['Confirm the CBOS service is running and use the configured local address. A localhost address is reachable only from the same machine unless the deployment is explicitly configured otherwise. Check the approved API health endpoint before changing configuration.'] },
      { id: 'devices', title: 'Printer or scanner missing', bullets: ['Confirm power and physical connection', 'Check that Windows recognizes the device', 'Verify the approved driver is installed', 'Confirm application device configuration', 'Test with a known supported workflow'] },
      { id: 'backup-license', title: 'Backup or license status issues', paragraphs: ['For backup problems, preserve the affected files and verify storage availability before retrying. For licensing problems, record the visible status and contact the authorized administrator without sharing keys or private machine details.'] },
      { id: 'build', title: 'Installer build prerequisites', paragraphs: ['Installer generation is a release engineering task requiring the approved source state, supported build tools, version metadata, packaging validation, and release evidence. End users should use approved installer artifacts rather than building locally.'], callout: { type: 'Note', text: 'Log locations vary by deployment. Use the support entry point or administrator interface rather than guessing private filesystem paths.' } },
    ],
  },
  engineering: {
    title: 'Engineering Guides', category: 'Engineering', status: 'Foundation', description: 'Entry points for Carthage Engineering disciplines, tools, and future technical guidance.',
    sections: [
      { id: 'divisions', title: 'Engineering divisions', links: [['Solar and renewable energy', '/engineering/solar'], ['Enterprise networking', '/engineering/networking'], ['Security infrastructure', '/engineering/security'], ['Industrial automation', '/engineering/automation'], ['Electrical engineering', '/engineering/electrical'], ['Technical consulting', '/engineering/consulting']] },
      { id: 'tools', title: 'Engineering tools', paragraphs: ['The Solar Calculator is currently available as an indicative planning tool. Cable calculation, battery sizing, load estimation, network planning, and voltage-drop tools are planned.'], callout: { type: 'Available', text: 'Use the Solar Calculator to explore indicative load, PV, and storage relationships—not as a substitute for detailed design.' } },
      { id: 'articles', title: 'Future technical articles', bullets: ['Solar site assessment and load planning', 'Structured cabling and WiFi planning principles', 'Security coverage and storage concepts', 'Automation project discovery', 'Electrical load and backup planning'] },
    ],
  },
};

export const docsList = docOrder.map((slug) => ({ slug, ...docs[slug] }));

export const docsCategories = [
  { name: 'CBOS Product', description: 'Product scope, setup, installation, administration, and everyday workflows.', slugs: ['cbos', 'getting-started', 'installation', 'user-guide', 'administration'] },
  { name: 'Operations', description: 'Continuity, licensing, activation, and safe troubleshooting guidance.', slugs: ['backup-recovery', 'licensing', 'troubleshooting'] },
  { name: 'Developers', description: 'API concepts, integration foundations, and release information.', slugs: ['api', 'releases'] },
  { name: 'Engineering', description: 'Engineering divisions, available tools, planned calculators, and future guides.', slugs: ['engineering'] },
];
