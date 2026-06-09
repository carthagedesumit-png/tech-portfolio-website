export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-6 sm:p-12 selection:bg-blue-500/30">
      <div className="max-w-5xl w-full space-y-12 my-auto">
        
        {/* Main Header Matrix */}
        <div className="text-center space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 tracking-wider uppercase shadow-sm">
            Systems Architecture Portfolio
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Carthage Systems Integrations
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            High-performance engineering solutions bridging complex network topology, power grids, and enterprise infrastructure.
          </p>
        </div>

        {/* Technical Core Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 group">
            <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300 w-fit">⚡</div>
            <h3 className="font-bold text-xl text-blue-400 mb-2">Automation & Power Engineering</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Design, deployment, and testing of intelligent home control loops, automated perimeter protection gates, industrial solar photovoltaic matrices, and automated battery inverter failover banks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 group">
            <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300 w-fit">🔒</div>
            <h3 className="font-bold text-xl text-blue-400 mb-2">Core Network Infrastructure</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Implementation of closed-circuit multi-node surveillance arrays, secure hardware firewalls, enterprise data distribution networks, centralized digital library centers, and Computer-Based Testing platforms.
            </p>
          </div>
        </div>

        {/* Industrial Project Track Record Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-white border-b border-slate-800 pb-2">
            🛠️ Enterprise Infrastructure Deployments
          </h2>
          <div className="border border-slate-800/60 rounded-xl divide-y divide-slate-800/60 overflow-hidden bg-slate-900/20">
            <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-semibold text-slate-200">Integrated Solar Array & Smart Inverter Grid</h4>
                <p className="text-xs text-slate-500">Residential Power Infrastructure • Commissioned</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium self-start sm:self-center">
                Operational
              </span>
            </div>
            <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-semibold text-slate-200">Multi-Client Computer Based Testing (CBT) Facility</h4>
                <p className="text-xs text-slate-500">Institutional Networking & Content Delivery Network • Built</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium self-start sm:self-center">
                Deployed
              </span>
            </div>
          </div>
        </div>

        {/* System Link Gateway (Contact Section) */}
        <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950 border border-slate-800/80 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Initialize System Integration</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Ready to design, secure, or optimize your physical and digital enterprise topologies.
          </p>
          <div className="pt-2">
            <a 
              href="mailto:contact@yourdomain.com" 
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-blue-600 font-semibold text-sm text-white hover:bg-blue-500 active:bg-blue-700 transition-colors shadow-lg shadow-blue-600/10"
            >
              Establish Connection Link
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}