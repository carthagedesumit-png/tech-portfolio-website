import { featureComparison } from '../pricingData';

const statusLabels = {
  available: {
    text: 'Available',
    className: 'text-emerald-300',
  },
  foundation: {
    text: 'Foundation',
    className: 'text-cyan-300',
  },
  roadmap: {
    text: 'Roadmap',
    className: 'text-sky-300',
  },
  planned: {
    text: 'Planned',
    className: 'text-amber-300',
  },
};

function StatusCell({ status }) {
  const config = statusLabels[status] || statusLabels.planned;

  return (
    <span className={`text-xs font-bold ${config.className}`}>
      {config.text}
    </span>
  );
}

export default function FeatureComparison() {
  return (
    <section className="border-y border-slate-900 bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Edition Comparison
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Compare the current foundations and future product direction.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400">
            Availability labels describe the current product foundation and
            roadmap. They are not final commercial entitlements.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-800">
          <table className="min-w-[850px] w-full border-collapse text-left">
            <caption className="sr-only">
              Comparison of CBOS product-edition capabilities
            </caption>

            <thead className="bg-slate-900">
              <tr>
                <th className="px-5 py-4 text-sm font-bold text-white">
                  Capability
                </th>
                <th className="px-5 py-4 text-sm font-bold text-white">
                  Community
                </th>
                <th className="px-5 py-4 text-sm font-bold text-white">
                  Professional
                </th>
                <th className="px-5 py-4 text-sm font-bold text-white">
                  Enterprise
                </th>
                <th className="px-5 py-4 text-sm font-bold text-white">
                  Developer
                </th>
              </tr>
            </thead>

            <tbody>
              {featureComparison.map((row) => (
                <tr
                  key={row.feature}
                  className="border-t border-slate-800 bg-slate-950"
                >
                  <th
                    scope="row"
                    className="px-5 py-4 text-sm font-semibold text-slate-200"
                  >
                    {row.feature}
                  </th>

                  <td className="px-5 py-4">
                    <StatusCell status={row.community} />
                  </td>

                  <td className="px-5 py-4">
                    <StatusCell status={row.professional} />
                  </td>

                  <td className="px-5 py-4">
                    <StatusCell status={row.enterprise} />
                  </td>

                  <td className="px-5 py-4">
                    <StatusCell status={row.developer} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
