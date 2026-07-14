import { useState } from 'react';
import { enquiryTypes } from '../contactData';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  enquiryType: enquiryTypes[0],
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: '',
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Please tell us how we can help.';
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const subject = encodeURIComponent(
      `${form.enquiryType} from ${form.fullName}`
    );

    const body = encodeURIComponent(
      [
        `Name: ${form.fullName}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || 'Not provided'}`,
        `Company: ${form.company || 'Not provided'}`,
        `Enquiry type: ${form.enquiryType}`,
        '',
        'Message:',
        form.message,
      ].join('\n')
    );

    window.location.href =
      `mailto:carthagesysystems01@gmail.com` +
      `?cc=carthagedesumit@gmail.com` +
      `&subject=${subject}` +
      `&body=${body}`;
  };

  const fieldClass =
    'mt-2 w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20';

  return (
    <section id="enquiry-form" className="border-y border-slate-900 bg-slate-900/35 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Send an enquiry
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Tell us what you are working on.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300">
            Complete the form and your device will open its configured email
            application with the enquiry prepared for you.
          </p>

          <div className="mt-8 rounded-lg border border-amber-300/20 bg-amber-300/5 p-5">
            <h3 className="font-bold text-amber-100">How this form works</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              The website does not currently store or transmit form submissions
              through a server. It prepares an email using your device&apos;s
              email application. You may also contact us directly using the
              listed email addresses.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="text-sm font-bold text-white">
                Full name <span className="text-cyan-300">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={updateField}
                autoComplete="name"
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                className={fieldClass}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-2 text-sm text-rose-300">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-bold text-white">
                Work email <span className="text-cyan-300">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={fieldClass}
              />
              {errors.email && (
                <p id="email-error" className="mt-2 text-sm text-rose-300">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-bold text-white">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={updateField}
                autoComplete="tel"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="company" className="text-sm font-bold text-white">
                Company or organization
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={updateField}
                autoComplete="organization"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="enquiryType" className="text-sm font-bold text-white">
              Enquiry type
            </label>
            <select
              id="enquiryType"
              name="enquiryType"
              value={form.enquiryType}
              onChange={updateField}
              className={fieldClass}
            >
              {enquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="text-sm font-bold text-white">
              Message <span className="text-cyan-300">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="7"
              value={form.message}
              onChange={updateField}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="Describe your business need, project, partnership idea, or CBOS pilot interest."
              className={fieldClass}
            />
            {errors.message && (
              <p id="message-error" className="mt-2 text-sm text-rose-300">
                {errors.message}
              </p>
            )}
          </div>

          <p className="mt-5 text-xs leading-6 text-slate-500">
            By preparing this enquiry, you acknowledge that the information will
            be sent through your chosen email application.
          </p>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
          >
            Prepare Email Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
