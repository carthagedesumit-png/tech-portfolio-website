import React, { useState, useEffect } from 'react';

// ==========================================
// CONFIGURATION & STATIC ARCHITECTURE DATA
// ==========================================
const DEPLOYMENT_PRESETS = {
    solar: {
        id: "solar",
        icon: "⚡",
        title: "Hybrid Solar Grid & Storage",
        tagline: "Uninterruptible Energy Matrices",
        description: "Custom off-grid and hybrid solar installations featuring pure sine wave inversion loops, smart MPPT balancing, and intelligent automated transfer switches (ATS) for absolute runtime confidence.",
        features: ["Automated Grid/Generator Transfer Panels", "High-Capacity LiFePO4 Energy Banks", "Multi-Phase Photovoltaic Array Matching", "Remote Telemetry Monitoring Modules"],
        specs: [
            { label: "Topology", value: "Pure Sine Wave Hybrid Phase" },
            { label: "Charge Controller", value: "MPPT Dynamic Tracking" },
            { label: "Array Limits", value: "Up to 15kW DC Bus per string" }
        ],
        schematic: "SOLAR PANELS ➔ MPPT CONTROLLER ➔ LITHIUM STORAGE ➔ HYBRID INVERTER ➔ ATS SWITCH ➔ CLIENT HOME LOADS"
    },
    network: {
        id: "network",
        icon: "🖥️",
        title: "High-Density LAN & CBT Centers",
        tagline: "Enterprise Local Area Networks",
        description: "Engineered networks optimized for massive concurrent data throughput, localized server edge caching, and bulletproof internal routing topologies designed specifically for Computer-Based Testing environments.",
        features: ["Layer 2/3 Managed Core Backbone", "Static Dynamic Lease Security Profiles", "Isolated Virtual LAN (VLAN) Partitioning", "Localized Content Caching Nodes"],
        specs: [
            { label: "Switching Fabric", value: "Line-Rate Non-Blocking Fabric" },
            { label: "Addressing Layout", value: "Deterministic Static Mapping" },
            { label: "Uplink Capacity", value: "Multi-Gigabit Interconnect Arrays" }
        ],
        schematic: "CORE GATEWAY ROUTER ➔ LAYER 3 MANAGED BACKBONE SWITCH ➔ ISOLATED VLAN CORES ➔ CBT TERMINAL NODES"
    },
    surveillance: {
        id: "surveillance",
        icon: "🔒",
        title: "Integrated CCTV Security Matrix",
        tagline: "Continuous Surveillance Architecture",
        description: "Industrial-grade Power-over-Ethernet (PoE) multi-node security camera systems linked directly to high-capacity Network Video Recorders (NVR) with local fault-tolerant disk arrays.",
        features: ["Ultra-HD PoE IP Optical Sensors", "Centralized NVR Matrix Arrays", "Hardware RAID Mirroring Arrays", "Secure WAN External Tunneling"],
        specs: [
            { label: "Video Feed Latency", value: "<120ms Local Pipeline" },
            { label: "Storage Architecture", value: "Surveillance-Optimized NVR RAID" },
            { label: "Power Delivery", value: "Centralized PoE+ IEEE 802.3at" }
        ],
        schematic: "IP CAMERA ARRAYS ➔ HIGH-POWER POE+ SWITCH ➔ CENTRALIZED NVR CORE ➔ RAID COLD STORAGE ➔ SECURE FEED"
    }
};

// Mock Tracker Database for Customer Interactions
const MOCK_TRACKING_REGISTRY = {
    "CRT-7749": { client: "Apex Legal Labs", stage: 2, stageName: "Hardware Provisioning & Assembly", updated: "Just now", progress: 45, system: "High-Density LAN Testing Center" },
    "CRT-1102": { client: "Solaris Residence", stage: 3, stageName: "On-Site Structural Integration", updated: "2 hours ago", progress: 75, system: "48V Hybrid Solar Matrix" },
    "CRT-9981": { client: "Vanguard Trade Complex", stage: 1, stageName: "Core Schematic Engineering & Sign-off", updated: "Yesterday", progress: 15, system: "Integrated CCTV Security Matrix" }
};

export default function EngineeringWorkspace() {
    // --- NAVIGATION PAGE ROUTING STATE ---
    const [currentTab, setCurrentTab] = useState('explore'); // Options: 'explore' | 'estimator' | 'tracker'

    // --- FUNCTIONAL INTERACTIVE STATE ---
    const [selectedBlueprint, setSelectedBlueprint] = useState('solar');
    const [calculatorType, setCalculatorType] = useState('solar');
    
    // Solar Calculator Input Matrix
    const [solarLoadKw, setSolarLoadKw] = useState('2.5');
    const [solarAutonomyHours, setSolarAutonomyHours] = useState('8');
    const [solarVoltage, setSolarVoltage] = useState('48');
    const [calculatedBatteryAh, setCalculatedBatteryAh] = useState(0);
    const [calculatedPanels, setCalculatedPanels] = useState(0);

    // Network Configurator Input Matrix
    const [networkNodes, setNetworkNodes] = useState('40');
    const [requiresCacheServer, setRequiresCacheServer] = useState(true);
    const [calculatedSwitches, setCalculatedSwitches] = useState(1);

    // Order Dispatch Gateway State
    const [clientName, setClientName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [isUrgent, setIsUrgent] = useState(false);
    const [customBriefing, setCustomBriefing] = useState('');
    const [orderSuccess, setOrderSuccess] = useState(false);

    // Tracker System State
    const [searchTrackerId, setSearchTrackerId] = useState('');
    const [activeTrackedProject, setActiveTrackedProject] = useState(null);
    const [trackerError, setTrackerError] = useState(false);

    // Copy Feedback State
    const [copiedFeedback, setCopiedFeedback] = useState(false);

    // ==========================================
    // DYNAMIC CALCULATION REAL-TIME ENGINES
    // ==========================================
    useEffect(() => {
        // Solar Estimator Math Model
        // Ah = (Load Watts * Hours) / (System Voltage * Discharge Safety Factor of 0.8)
        const loadWatts = parseFloat(solarLoadKw) * 1000 || 0;
        const hours = parseFloat(solarAutonomyHours) || 0;
        const voltage = parseFloat(solarVoltage) || 48;
        
        const rawAh = (loadWatts * hours) / (voltage * 0.8);
        setCalculatedBatteryAh(Math.ceil(rawAh));

        // Panels needed roughly = (Load Watts * 1.4 safety overhead) / 450W per standard high-efficiency panel
        const rawPanels = (loadWatts * 1.4) / 450;
        setCalculatedPanels(Math.max(Math.ceil(rawPanels), 2));
    }, [solarLoadKw, solarAutonomyHours, solarVoltage]);

    useEffect(() => {
        // Network Equipment Infrastructure Math Model
        const nodes = parseInt(networkNodes, 10) || 0;
        // Standard 24-Port managed switch layouts with headroom
        const switchesNeeded = Math.ceil(nodes / 22); 
        setCalculatedSwitches(Math.max(switchesNeeded, 1));
    }, [networkNodes]);

    // ==========================================
    // EVENT FLOW ROUTING HANDLERS
    // ==========================================
    const handleTrackerSearch = (e) => {
        e.preventDefault();
        const targetId = searchTrackerId.trim().toUpperCase();
        if (MOCK_TRACKING_REGISTRY[targetId]) {
            setActiveTrackedProject(MOCK_TRACKING_REGISTRY[targetId]);
            setTrackerError(false);
        } else {
            setActiveTrackedProject(null);
            setTrackerError(true);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!clientName || !contactEmail) {
            alert("Please verify your name and communication entry paths.");
            return;
        }
        setOrderSuccess(true);
        setTimeout(() => {
            setOrderSuccess(false);
            // Flush layout inputs cleanly
            setClientName('');
            setContactEmail('');
            setCustomBriefing('');
            setIsUrgent(false);
        }, 5000);
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText('engineering@carthage.infra');
        setCopiedFeedback(true);
        setTimeout(() => setCopiedFeedback(false), 2000);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
            
            {/* TACTICAL GLOW HEADER LINE */}
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.6)]" />

            {/* MAIN PORTAL HEADER AREA */}
            <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
                <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-left">
                        <div className="flex items-center space-x-2">
                            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500">CARTHAGE INFRASTRUCTURE</span>
                        </div>
                        <h1 className="text-lg font-bold text-white tracking-tight">Client Hub & Project Matrix</h1>
                    </div>

                    {/* INTERACTIVE NAVIGATION TAB HUB */}
                    <nav className="flex space-x-1 bg-slate-900/60 border border-slate-800/80 p-1 rounded-xl font-mono text-xs">
                        <button
                            onClick={() => setCurrentTab('explore')}
                            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${currentTab === 'explore' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
                        >
                            🔎 System Blueprints
                        </button>
                        <button
                            onClick={() => setCurrentTab('estimator')}
                            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${currentTab === 'estimator' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
                        >
                            📊 Estimation Labs
                        </button>
                        <button
                            onClick={() => setCurrentTab('tracker')}
                            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${currentTab === 'tracker' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
                        >
                            🛰️ Live Build Status
                        </button>
                    </nav>
                </div>
            </header>

            {/* PORTAL MAIN BODY CONTENT FRAME */}
            <main className="max-w-6xl mx-auto px-4 py-12">
                
                {/* PAGE 1: SYSTEM BLUEPRINT EXPLORER TAB */}
                {currentTab === 'explore' && (
                    <div className="space-y-12 animate-fadeIn">
                        
                        {/* Interactive Hero Intro */}
                        <div className="text-left space-y-3 max-w-3xl">
                            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">01 / Infrastructure Architecture</span>
                            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Select Your Targeted Deployment Framework</h2>
                            <p className="text-base text-slate-400">
                                Click through our core deployment vectors below to review interactive schematics, integrated structural feature listings, and default hardware line ratings.
                            </p>
                        </div>

                        {/* Interactive Tab Switcher Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {Object.values(DEPLOYMENT_PRESETS).map((preset) => (
                                <div
                                    key={preset.id}
                                    onClick={() => setSelectedBlueprint(preset.id)}
                                    className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                                        selectedBlueprint === preset.id 
                                            ? 'bg-gradient-to-br from-slate-900 to-slate-950 border-blue-500 shadow-xl shadow-blue-950/20' 
                                            : 'bg-slate-900/30 border-slate-900 hover:border-slate-800 hover:bg-slate-900/50'
                                    }`}
                                >
                                    {selectedBlueprint === preset.id && (
                                        <div className="absolute top-0 right-0 h-16 w-16 bg-blue-500/10 rounded-bl-full flex items-center justify-center border-l border-b border-blue-500/20">
                                            <span className="text-xs text-blue-400 font-mono font-bold">ACTIVE</span>
                                        </div>
                                    )}
                                    <div className="text-3xl mb-4 text-blue-500 group-hover:scale-110 transition-transform duration-300">{preset.icon}</div>
                                    <h3 className="font-bold text-lg text-white mb-1 group-hover:text-blue-400 transition-colors">{preset.title}</h3>
                                    <p className="text-xs font-mono text-slate-500 tracking-wider uppercase mb-3">{preset.tagline}</p>
                                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{preset.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* High-Fidelity Focused Architecture Detail Grid */}
                        <div className="p-8 rounded-2xl bg-slate-900/30 border border-slate-900 grid grid-cols-1 lg:grid-cols-5 gap-8 text-left items-start">
                            
                            {/* Details Left Panel */}
                            <div className="lg:col-span-3 space-y-6">
                                <div>
                                    <span className="text-[10px] font-mono uppercase bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-md border border-blue-500/20">
                                        Core Specifications Layout
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mt-4">{DEPLOYMENT_PRESETS[selectedBlueprint].title}</h3>
                                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">{DEPLOYMENT_PRESETS[selectedBlueprint].description}</p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Included Core Elements:</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                                        {DEPLOYMENT_PRESETS[selectedBlueprint].features.map((feat, idx) => (
                                            <li key={idx} className="flex items-center space-x-2">
                                                <span className="text-blue-500 font-bold">✔</span>
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Technical Specs Array Right Panel */}
                            <div className="lg:col-span-2 space-y-6 w-full">
                                <div className="bg-slate-950 p-6 rounded-xl border border-slate-900/80 space-y-4">
                                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest border-b border-slate-900 pb-2">
                                        Raw Hardware Architecture
                                    </h4>
                                    <div className="space-y-3">
                                        {DEPLOYMENT_PRESETS[selectedBlueprint].specs.map((spec, i) => (
                                            <div key={i} className="flex justify-between items-center text-xs border-b border-slate-900/50 pb-1.5">
                                                <span className="text-slate-500 font-mono">{spec.label}</span>
                                                <span className="text-slate-200 font-semibold">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Topological Grid Routing Signal Pipeline:</h4>
                                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 font-mono text-[10px] text-blue-400 leading-relaxed tracking-tight break-all">
                                        {DEPLOYMENT_PRESETS[selectedBlueprint].schematic}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Informational Action Prompt Trigger */}
                        <div className="p-6 rounded-xl bg-gradient-to-r from-blue-950/20 via-slate-900/40 to-transparent border border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
                            <div>
                                <h4 className="text-sm font-bold text-white">Want to calculate the actual capacity constraints for this design?</h4>
                                <p className="text-xs text-slate-400">Head straight into our engineering estimation matrices to run exact metrics calculations.</p>
                            </div>
                            <button
                                onClick={() => { setCurrentTab('estimator'); setCalculatorType(selectedBlueprint); }}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-xl text-xs font-semibold tracking-wide transition-all shadow-md shadow-blue-950/50 cursor-pointer"
                            >
                                Open Estimation Workspace ➔
                            </button>
                        </div>
                    </div>
                )}

                {/* PAGE 2: INSTANT ESTIMATOR LABS TAB */}
                {currentTab === 'estimator' && (
                    <div className="space-y-12 animate-fadeIn">
                        
                        {/* Interactive Hero Intro */}
                        <div className="text-left space-y-3 max-w-3xl">
                            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">02 / Automated Calculation Workspace</span>
                            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Real-Time Technical Provisioning Lab</h2>
                            <p className="text-base text-slate-400">
                                Input your structural constraints, node distributions, or intended power draws below. Our real-time mathematical engine outputs hardware array sizes immediately.
                            </p>
                        </div>

                        {/* Selector Matrix Switcher */}
                        <div className="flex border-b border-slate-900 font-mono text-xs">
                            <button
                                onClick={() => setCalculatorType('solar')}
                                className={`px-5 py-3 border-b-2 font-medium transition-all cursor-pointer ${calculatorType === 'solar' ? 'border-blue-500 text-blue-400 bg-slate-900/20' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
                            >
                                ⚡ Energy Matrix Calculator
                            </button>
                            <button
                                onClick={() => setCalculatorType('network')}
                                className={`px-5 py-3 border-b-2 font-medium transition-all cursor-pointer ${calculatorType === 'network' ? 'border-blue-500 text-blue-400 bg-slate-900/20' : 'border-transparent text-slate-500 hover:text-slate-300'}`}
                            >
                                🖥️ LAN Backbone Modeler
                            </button>
                        </div>

                        {/* Interactive Calculator Body Block */}
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                            
                            {/* Input Form Fields Column */}
                            <div className="lg:col-span-2 bg-slate-900/30 p-6 rounded-2xl border border-slate-900 text-left space-y-5">
                                <h3 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-wider border-b border-slate-900 pb-2">
                                    Parameters Input Configuration
                                </h3>
                                
                                {calculatorType === 'solar' ? (
                                    /* SOLAR CALCULATOR FIELDS */
                                    <div className="space-y-4">
                                        <div className="space-y-1">
                                            <label className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Estimated Constant Draw (kW)</label>
                                            <input
                                                type="number"
                                                step="0.1"
                                                min="0.5"
                                                value={solarLoadKw}
                                                onChange={(e) => setSolarLoadKw(e.target.value)}
                                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm font-mono text-blue-400 focus:outline-none focus:border-blue-500/50"
                                            />
                                            <span className="text-[10px] text-slate-500 block">Average expected load running across inverter loops concurrently.</span>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Target Autonomy Runtime (Hours)</label>
                                            <input
                                                type="number"
                                                min="1"
                                                max="24"
                                                value={solarAutonomyHours}
                                                onChange={(e) => setSolarAutonomyHours(e.target.value)}
                                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm font-mono text-blue-400 focus:outline-none focus:border-blue-500/50"
                                            />
                                            <span className="text-[10px] text-slate-500 block">Total required battery runtime with absolute zero solar generation.</span>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">System DC Bus Core Voltage</label>
                                            <select
                                                value={solarVoltage}
                                                onChange={(e) => setSolarVoltage(e.target.value)}
                                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm font-mono text-blue-400 focus:outline-none focus:border-blue-500/50"
                                            >
                                                <option value="24">24 VDC Layout (Light Loads)</option>
                                                <option value="48">48 VDC Layout (High-Efficiency Standard)</option>
                                            </select>
                                        </div>
                                    </div>
                                ) : (
                                    /* NETWORK HARDWARE BACKBONE FIELDS */
                                    <div className="space-y-4">
                                        <div className="space-y-1">
                                            <label className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Total Concurrent Station Terminals</label>
                                            <input
                                                type="number"
                                                min="5"
                                                max="250"
                                                value={networkNodes}
                                                onChange={(e) => setNetworkNodes(e.target.value)}
                                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm font-mono text-blue-400 focus:outline-none focus:border-blue-500/50"
                                            />
                                            <span className="text-[10px] text-slate-500 block">Number of live hardware network nodes demanding simultaneous static allocations.</span>
                                        </div>

                                        <div className="flex items-center space-x-2 pt-2">
                                            <input
                                                type="checkbox"
                                                id="cacheServerCheck"
                                                checked={requiresCacheServer}
                                                onChange={(e) => setRequiresCacheServer(e.target.checked)}
                                                className="rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-0 focus:ring-offset-0 cursor-pointer h-4 w-4"
                                            />
                                            <label htmlFor="cacheServerCheck" className="text-xs font-mono text-slate-400 uppercase tracking-wider cursor-pointer select-none">
                                                Provision Local Edge Cache Sync Node
                                            </label>
                                        </div>
                                        <span className="text-[10px] text-slate-500 block -mt-2">Drastically drops web gateway bandwidth saturation during massive parallel test initialization bursts.</span>
                                    </div>
                                )}
                            </div>

                            {/* Real-time Math Outputs Display Column */}
                            <div className="lg:col-span-3 bg-slate-900/10 border border-dashed border-slate-800 p-8 rounded-2xl flex flex-col justify-between text-left h-full min-h-[380px]">
                                <div className="space-y-6">
                                    <div>
                                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                                            LIVE OUTPUT READOUT MATRIX
                                        </span>
                                        <h3 className="text-xl font-bold text-white mt-3">Target Blueprint Sizing Projections</h3>
                                    </div>

                                    {calculatorType === 'solar' ? (
                                        /* SOLAR OUTPUT READOUT VISUALS */
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="bg-slate-950 p-4 rounded-xl border border-slate-900">
                                                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Required Bank Capacity</div>
                                                <div className="text-3xl font-mono font-bold text-white mt-1">{calculatedBatteryAh} <span className="text-sm text-slate-400">Ah</span></div>
                                                <div className="text-[11px] text-slate-400 font-mono mt-1">at {solarVoltage}VDC (with 20% protection margin)</div>
                                            </div>
                                            <div className="bg-slate-950 p-4 rounded-xl border border-slate-900">
                                                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Min Photovoltaic Scale</div>
                                                <div className="text-3xl font-mono font-bold text-white mt-1">~{calculatedPanels} <span className="text-sm text-slate-400">Panels</span></div>
                                                <div className="text-[11px] text-slate-400 font-mono mt-1">Based on standard high-output 450W array blocks</div>
                                            </div>
                                        </div>
                                    ) : (
                                        /* NETWORK OUTPUT READOUT VISUALS */
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="bg-slate-950 p-4 rounded-xl border border-slate-900">
                                                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">24-Port Managed Switch Modules</div>
                                                <div className="text-3xl font-mono font-bold text-white mt-1">{calculatedSwitches} <span className="text-sm text-slate-400">Units</span></div>
                                                <div className="text-[11px] text-slate-400 font-mono mt-1">Configured into isolated line-rate VLAN cores</div>
                                            </div>
                                            <div className="bg-slate-950 p-4 rounded-xl border border-slate-900">
                                                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Core Network Cache Topologies</div>
                                                <div className="text-3xl font-mono font-bold text-white mt-1">{requiresCacheServer ? "1" : "0"} <span className="text-sm text-slate-400">Server Node</span></div>
                                                <div className="text-[11px] text-slate-400 font-mono mt-1">{requiresCacheServer ? "Localized testing repository sync active" : "Direct cloud gateway pass-through mode"}</div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900 font-mono text-[11px] text-slate-400 space-y-1">
                                        <p className="text-blue-400 font-bold">// Telemetry Design Insights:</p>
                                        <p>• Engineering Recommendation: Multi-string isolation fuses recommended on arrays.</p>
                                        <p>• Infrastructure Scope: Estimated design staging timeframe: 4 - 7 operational days.</p>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-slate-900/80 mt-6 flex flex-col sm:flex-row items-center gap-4">
                                    <p className="text-xs text-slate-500 text-left">Satisfied with these system dimensions? Lock this sizing schema straight into a communication briefing frame.</p>
                                    <button
                                        onClick={() => {
                                            const briefText = calculatorType === 'solar' 
                                                ? `Pre-calculated system sizing projection: Required ${calculatedBatteryAh}Ah bank storage array running at ${solarVoltage}VDC with roughly ${calculatedPanels} dedicated photovoltaic panels configuration.`
                                                : `Pre-calculated system sizing projection: High-density LAN center holding ${networkNodes} target stations, demanding ${calculatedSwitches} enterprise managed 24-port switch backbones. Local edge cache hosting state: ${requiresCacheServer}.`;
                                            setCustomBriefing(briefText);
                                            // Scroll dynamically to form
                                            document.getElementById('interaction-gateway-form')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="w-full sm:w-auto text-center whitespace-nowrap px-4 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-mono font-semibold rounded-xl text-slate-300 hover:text-white transition-all cursor-pointer"
                                    >
                                        [ Apply Sizing to Signal Form ]
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* PAGE 3: LIVE REPLICATED PROJECT TRACKER TAB */}
                {currentTab === 'tracker' && (
                    <div className="space-y-12 animate-fadeIn">
                        
                        {/* Interactive Hero Intro */}
                        <div className="text-left space-y-3 max-w-3xl">
                            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">03 / Real-Time Infrastructure Monitoring</span>
                            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Client Deployment Tracking Terminal</h2>
                            <p className="text-base text-slate-400">
                                Monitor physical hardware deployment pipelines instantly. Enter your unique infrastructure project token below to fetch current staging logs.
                            </p>
                        </div>

                        {/* Tracker Code Entry Form Box */}
                        <div className="max-w-xl mx-auto bg-slate-900/30 p-6 rounded-2xl border border-slate-900 space-y-4">
                            <form onSubmit={handleTrackerSearch} className="space-y-2 text-left">
                                <label className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">Provide System Tracking Token ID</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="e.g., CRT-1102"
                                        value={searchTrackerId}
                                        onChange={(e) => setSearchTrackerId(e.target.value)}
                                        className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm font-mono tracking-widest text-blue-400 placeholder-slate-700 focus:outline-none focus:border-blue-500/50"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs px-5 rounded-xl uppercase tracking-wider font-semibold transition-all cursor-pointer"
                                    >
                                        Query System Log
                                    </button>
                                </div>
                                <span className="text-[10px] text-slate-500 block">Available testing simulation tokens registered in memory loop: <span className="text-slate-400 font-mono">CRT-1102</span> or <span className="text-slate-400 font-mono">CRT-7749</span></span>
                            </form>

                            {/* CONDITIONAL TRACKER FEEDBACK BLOCKS */}
                            {trackerError && (
                                <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40 text-left font-mono text-xs text-red-400 animate-fadeIn">
                                    ❌ SIGNAL TRACKING ERROR: Target identity token could not be mapped to any active physical staging pipeline. Verify array characters.
                                </div>
                            )}

                            {activeTrackedProject && (
                                <div className="p-6 rounded-xl bg-slate-950 border border-slate-900 text-left space-y-6 animate-fadeIn">
                                    <div className="flex justify-between items-start border-b border-slate-900 pb-3">
                                        <div>
                                            <h4 className="text-sm font-bold text-white">{activeTrackedProject.client}</h4>
                                            <p className="text-xs text-slate-400 mt-0.5">{activeTrackedProject.system}</p>
                                        </div>
                                        <span className="text-[10px] font-mono text-slate-500 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                                            Telemetry Verified
                                        </span>
                                    </div>

                                    {/* Visual Dynamic Progress Bar Component */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-mono">
                                            <span className="text-slate-400 font-medium">Staging Completeness Matrix</span>
                                            <span className="text-blue-400 font-bold">{activeTrackedProject.progress}%</span>
                                        </div>
                                        <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/60">
                                            <div 
                                                className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                                                style={{ width: `${activeTrackedProject.progress}%` }}
                                            />
                                        </div>
                                    </div>

                                    {/* Detailed Pipeline Milestone Progress Readout */}
                                    <div className="space-y-3 font-mono text-xs pt-2">
                                        <div className="text-[11px] text-slate-500 uppercase tracking-widest border-b border-slate-900 pb-1">Current Active Staging Level</div>
                                        
                                        <div className="flex gap-3 items-start">
                                            <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold ${activeTrackedProject.stage >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-600 border border-slate-800'}`}>1</span>
                                            <div className="space-y-0.5">
                                                <p className={`font-semibold ${activeTrackedProject.stage === 1 ? 'text-blue-400' : 'text-slate-300'}`}>Schematic Matrix Review</p>
                                                <p className="text-[10px] text-slate-500">Core engineering blueprints finalized, structural tolerances cross-checked.</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-3 items-start">
                                            <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold ${activeTrackedProject.stage >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-600 border border-slate-800'}`}>2</span>
                                            <div className="space-y-0.5">
                                                <p className={`font-semibold ${activeTrackedProject.stage === 2 ? 'text-blue-400' : 'text-slate-300'}`}>Hardware Provisioning & Lab Assembly</p>
                                                <p className="text-[10px] text-slate-500">Inverters, switchgear hardware blocks, or server storage caching modules staged on benches.</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-3 items-start">
                                            <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold ${activeTrackedProject.stage >= 3 ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-600 border border-slate-800'}`}>3</span>
                                            <div className="space-y-0.5">
                                                <p className={`font-semibold ${activeTrackedProject.stage === 3 ? 'text-blue-400' : 'text-slate-300'}`}>On-Site Deployment & Node Striking</p>
                                                <p className="text-[10px] text-slate-500">Physical deployment, structural cable pulling, switch configuration drops, array balancing loops active.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-[10px] font-mono text-slate-500 text-right pt-2 border-t border-slate-900">
                                        Last pipeline update signal pinged: <span className="text-slate-400">{activeTrackedProject.updated}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                <hr className="border-slate-900 my-16" />

                {/* CENTRALIZED COMMUNICATIONS DISPATCH FORM SECTION */}
                <section id="interaction-gateway-form" className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/40 to-slate-950 border border-slate-900 grid grid-cols-1 md:grid-cols-5 gap-8 items-center text-left scroll-mt-24">
                    <div className="md:col-span-2 space-y-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500">04 / Signal Router Gateway</span>
                        <h3 className="text-2xl font-bold text-white tracking-tight">Initialize Engineering Integration</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Have design specifications ready or want to lock down a physical deployment timeframe? Dispatch your project details directly into our engineering signal routers.
                        </p>
                        <div className="pt-2">
                            <button
                                type="button"
                                onClick={handleCopyToClipboard}
                                className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:bg-slate-800 transition-all cursor-pointer"
                            >
                                {copiedFeedback ? "✓ Mail Destination Locked" : "📋 Copy Primary Mail Destination"}
                            </button>
                        </div>
                    </div>

                    <form onSubmit={handleFormSubmit} className="md:col-span-3 bg-slate-950/40 p-6 rounded-xl border border-slate-900 space-y-4">
                        {orderSuccess ? (
                            <div className="p-8 text-center space-y-3 font-mono text-xs text-emerald-400 animate-fadeIn py-16">
                                <p className="text-2xl">📡</p>
                                <p className="font-bold uppercase tracking-wider">Signal Payload Transmitted Successfully</p>
                                <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">Your layout parameters have crossed data pipelines cleanly. Our primary engineering routing terminal will establish link parity shortly.</p>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500">Your Identity / Corporate Branch</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g., Lead Operations Manager"
                                            value={clientName}
                                            onChange={(e) => setClientName(e.target.value)}
                                            className="w-full bg-slate-900/60 border border-slate-800/80 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-blue-500/50 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500">Secure Direct Return Email Path</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="e.g., ops@clientdomain.com"
                                            value={contactEmail}
                                            onChange={(e) => setContactEmail(e.target.value)}
                                            className="w-full bg-slate-900/60 border border-slate-800/80 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-blue-500/50 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2 pt-1">
                                    <input
                                        type="checkbox"
                                        id="formUrgency"
                                        checked={isUrgent}
                                        onChange={(e) => setIsUrgent(e.target.checked)}
                                        className="rounded bg-slate-900 border-slate-800 text-blue-600 focus:ring-0 focus:ring-offset-0 cursor-pointer h-4 w-4"
                                    />
                                    <label htmlFor="formUrgency" className="text-xs font-mono text-slate-400 uppercase tracking-wider cursor-pointer select-none">
                                        Flag Target Project Pipeline as Critical Priority Scale
                                    </label>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500">Site Constraints Briefing & Sizing Schema</label>
                                    <textarea
                                        rows="4"
                                        required
                                        placeholder="Outline your target hardware criteria, network terminal nodes counts, structural obstacles, or paste pre-calculated sizing layouts from our estimation tools directly here..."
                                        value={customBriefing}
                                        onChange={(e) => setCustomBriefing(e.target.value)}
                                        className="w-full bg-slate-900/60 border border-slate-800/80 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-blue-500/50 transition-colors resize-none font-sans"
                                    ></textarea>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 font-semibold text-sm text-white hover:bg-blue-500 active:bg-blue-700 transition-all text-center shadow-lg shadow-blue-600/20 cursor-pointer tracking-wide"
                                    >
                                        Compile & Dispatch System Signal Link ➔
                                    </button>
                                </div>
                            </>
                        )}
                    </form>
                </section>
            </main>

            {/* SECURE LOWER LEGAL FOOTER BAND */}
            <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center font-mono text-[10px] text-slate-600">
                <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p>© 2026 CARTHAGE INFRASTRUCTURE SECURITY CORES. ALL ROUTING RESERVED.</p>
                    <p className="tracking-widest text-slate-500">SYSTEM PARITY LEVEL: STATUS ALPHA GREEN</p>
                </div>
            </footer>
        </div>
    );
}
