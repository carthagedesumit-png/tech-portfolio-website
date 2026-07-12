import DivisionPage from '@/components/engineering/pages/DivisionPage';
import SolarCalculator from '@/components/SolarCalculator';
import { engineeringMap } from '@/components/engineering/engineeringData';

export default function SolarEngineeringPage() {
  return <DivisionPage division={engineeringMap.solar}><section id="solar-calculator" className="border-t border-slate-900 bg-slate-900/45 py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Available engineering tool</p><h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">Explore an indicative solar and storage starting point.</h2><p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">Use the existing calculator to explore load, autonomy, voltage, PV, and storage relationships. Results are indicative and do not replace a site survey or detailed engineering design.</p><SolarCalculator /></div></section></DivisionPage>;
}
