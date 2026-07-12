const securityItems = [
  'Role-based access',
  'Store-aware permissions',
  'Protected sessions',
  'Password hashing',
  'Audit logging',
  'Configuration masking',
  'Backup verification',
  'Signed licensing foundation',
];

export default function SecurityTrust() {
  return (
    <section id="security" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Security and trust</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Security-conscious foundations for controlled operations.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">CBOS presents supportable security foundations without exposing sensitive implementation details or secrets.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {securityItems.map((item) => (
            <div key={item} className="rounded-md border border-slate-800 bg-slate-900/55 p-5">
              <p className="text-sm font-bold text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
