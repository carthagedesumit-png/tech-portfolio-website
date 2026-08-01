const footerGroups = [
  ['Company', [['About', '/about'], ['Portfolio', '/portfolio'], ['Contact', '/contact'], ['Roadmap', '/docs/releases']]],
  ['Products', [['CBOS', '/products/cbos'], ['Modules', '/products/cbos#capabilities'], ['Editions', '/pricing']]],
  ['Engineering', [['Solar systems', '/engineering/solar'], ['Networking', '/engineering/networking'], ['Security', '/engineering/security'], ['Automation', '/engineering/automation']]],
  ['Resources', [['Documentation', '/docs'], ['Getting started', '/docs/getting-started'], ['Troubleshooting', '/docs/troubleshooting'], ['PowerOps research', '/research/powerops'], ['GitHub', 'https://github.com/carthagedesumit-png/tech-portfolio-website']]],
  ['Legal', [['Privacy Policy', '/privacy'], ['Terms of Use', '/terms']]],
];

export default function CorporateFooter() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <p className="text-lg font-black text-white">Carthage Technologies</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">Enterprise software, intelligent infrastructure, renewable energy, automation, and digital transformation.</p>
          </div>
          {footerGroups.map(([title, links]) => (
            <div key={title}>
              <p className="text-sm font-bold text-white">{title}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-500">
                {links.map((link) => (
                  <li key={link[0]}>
                    <a className="rounded-sm hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300" href={link[1]}>{link[0]}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-slate-900 pt-6 text-sm text-slate-600">
          Copyright 2026 Carthage Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
