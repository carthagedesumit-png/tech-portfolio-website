import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Industries', href: '#industries' },
  { label: 'Documentation', href: '#documentation' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function CorporateHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" aria-label="Carthage Technologies home">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.16)]">CT</span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide text-white">Carthage Technologies</span>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-slate-500">Software + Infrastructure</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#products" className="rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
            Explore CBOS
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-slate-200 transition hover:border-slate-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 lg:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span aria-hidden="true" className="text-lg leading-none">{isOpen ? 'x' : '='}</span>
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-navigation" className="border-t border-slate-800 bg-slate-950 px-4 pb-5 pt-2 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu} className="rounded-md px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                {item.label}
              </a>
            ))}
            <a href="#products" onClick={closeMenu} className="mt-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-3 text-sm font-semibold text-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              Explore CBOS
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
