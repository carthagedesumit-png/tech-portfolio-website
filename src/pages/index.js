export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center space-y-6">
        
        {/* Main Badge */}
        <div className="inline-block mx-auto px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 tracking-wider uppercase">
          Systems Architecture Engine Online
        </div>

        {/* Company Title */}
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-white">
          Nexus Systems Integrations
        </h1>

        {/* Core Subtitle */}
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          High-performance engineering solutions for enterprise and residential smart infrastructures.
        </p>

        {/* Technical Grid Capabilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 text-left">
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="font-bold text-lg text-blue-400 mb-1">⚡ Automation & Power</h3>
            <p className="text-sm text-slate-400">Smart home controllers, automated access gates, solar arrays, and inverter backup matrices.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="font-bold text-lg text-blue-400 mb-1">🔒 Core Network Infrastructure</h3>
            <p className="text-sm text-slate-400">Surveillance monitoring frameworks, enterprise networking, digital libraries, and CBT platforms.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
