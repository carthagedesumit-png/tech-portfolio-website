import {
  responseExpectations,
  serviceAreas,
} from '../contactData';

export default function RemoteOperations() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-xl border border-slate-800 bg-slate-900/45 p-7">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Remote Operations, Nigeria
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
            Flexible collaboration, wherever you operate.
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-300">
            Carthage Technologies currently operates remotely from Nigeria.
            Online consultations, demonstrations, project discussions, and
            partnership meetings are available. In-person meetings may be
            arranged by appointment at an agreed location.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-sm font-bold text-cyan-100"
              >
                {area}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-xl border border-slate-800 bg-slate-900/45 p-7">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            What to expect
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
            Clear, responsible communication.
          </h2>

          <ul className="mt-6 space-y-4">
            {responseExpectations.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
