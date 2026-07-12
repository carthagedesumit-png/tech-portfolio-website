import CalculatorCard from './CalculatorCard';
import { engineeringTools } from '../engineeringData';

export default function EngineeringTools() {
  return (
    <section className="border-y border-slate-900 bg-slate-900/45 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Engineering tools</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Useful tools, with honest availability.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">The Solar Calculator is available today as an indicative planning tool. The remaining calculators are clearly marked as planned.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringTools.map((tool) => <CalculatorCard key={tool.name} tool={tool} />)}
        </div>
      </div>
    </section>
  );
}
