import React, { useState } from 'react';

export default function SolarCalculator() {
    const [dailyLoad, setDailyLoad] = useState(1200); // in Watt-hours
    const [backupHours, setBackupHours] = useState(12); // target backup duration
    const [systemVoltage, setSystemVoltage] = useState(48); // 12V, 24V, or 48V matrix

    // Engineering Calculations
    const safetyFactor = 1.25; // 25% safety cushion for system inefficiencies
    const requiredWh = dailyLoad * (backupHours / 24) * safetyFactor;
    const batteryAh = Math.round(requiredWh / systemVoltage);

    // Peak solar calculation assuming average 5 peak sun hours
    const requiredKwPeak = ((dailyLoad * safetyFactor) / 5 / 1000).toFixed(2);
    const panelCount = Math.ceil((requiredKwPeak * 1000) / 450); // Using your 450W modules spec

    return (
        <div className="w-full max-w-4xl mx-auto my-12 p-6 bg-slate-900/80 border border-slate-800 rounded-xl backdrop-blur-md">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                <h3 className="text-xl font-semibold text-slate-200 tracking-wide uppercase text-sm">
                    Topology Dimensioning Engine v1.0.4
        </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* INPUT CONTROLS */}
                <div className="space-y-6">
                    <div>
                        <label htmlFor="solar-daily-load" className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                            Total Daily Load: <span className="text-yellow-500 font-mono text-sm">{dailyLoad} Wh</span>
                        </label>
                        <input
                            id="solar-daily-load"
                            type="range" min="500" max="15000" step="100"
                            value={dailyLoad} onChange={(e) => setDailyLoad(Number(e.target.value))}
                            className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900"
                        />
                    </div>

                    <div>
                        <label htmlFor="solar-backup-hours" className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                            Target Autonomy Window: <span className="text-yellow-500 font-mono text-sm">{backupHours} Hours</span>
                        </label>
                        <input
                            id="solar-backup-hours"
                            type="range" min="2" max="48" step="2"
                            value={backupHours} onChange={(e) => setBackupHours(Number(e.target.value))}
                            className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                            DC Bus Configuration
            </label>
                        <div className="grid grid-cols-3 gap-2">
                            {[12, 24, 48].map((v) => (
                                <button
                                    type="button"
                                    key={v} onClick={() => setSystemVoltage(v)}
                                    className={`py-2 px-3 rounded text-xs font-mono border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                                        systemVoltage === v
                                            ? 'bg-yellow-500/10 border-yellow-500 text-yellow-500'
                                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                                        }`}
                                >
                                    {v}V Matrix
                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* OUTPUT MATRIX DIAGNOSTICS */}
                <div className="bg-slate-950/60 p-5 border border-slate-800/80 rounded-lg font-mono text-xs text-slate-400 space-y-4">
                    <div className="text-slate-500 border-b border-slate-900 pb-2 uppercase tracking-widest text-[10px]">
                        System Spec Readout
          </div>

                    <div className="flex justify-between items-center">
                        <span>SUGGESTED PV ARRAY PEAK:</span>
                        <span className="text-emerald-400 font-bold text-sm">{requiredKwPeak} kW</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span>450W MONOCRYSTALLINE MODULES:</span>
                        <span className="text-slate-200 text-sm font-bold">{panelCount}x Units</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span>MINIMUM STORAGE MATRIX:</span>
                        <span className="text-sky-400 font-bold text-sm">{batteryAh} Ah @ {systemVoltage}V</span>
                    </div>

                    <div className="flex justify-between items-center border-t border-slate-900 pt-3 text-slate-500">
                        <span>ENERGY SAFETY MARGIN:</span>
                        <span>+25% Efficiency Buffer</span>
                    </div>

                    <div className="pt-2">
                        <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                            <div
                                className="bg-emerald-500 h-1.5 transition-all duration-300"
                                style={{ width: `${Math.min((dailyLoad / 15000) * 100, 100)}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
