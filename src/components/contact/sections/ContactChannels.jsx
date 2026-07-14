import { contactChannels } from '../contactData';

export default function ContactChannels() {
  return (
    <section id="contact-options" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Contact options
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Choose the most suitable way to reach us.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300">
            Contact Carthage Technologies about CBOS, software development,
            engineering services, partnerships, pilot opportunities, or general
            company enquiries.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {contactChannels.map((channel) => (
            <article
              key={channel.title}
              className="rounded-xl border border-slate-800 bg-slate-900/55 p-6 transition hover:border-cyan-300/30"
            >
              <h3 className="text-lg font-black text-white">{channel.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {channel.description}
              </p>

              <a
                href={channel.href}
                className="mt-5 inline-flex rounded-md text-sm font-bold text-cyan-200 underline decoration-cyan-300/40 underline-offset-4 transition hover:text-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {channel.label}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
