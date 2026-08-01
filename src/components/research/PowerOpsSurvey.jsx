import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'carthage.powerops.survey.v1';
const CATEGORIES = ['Filling station', 'Pharmacy', 'Lounge / bar', 'Hotel', 'School', 'Barbing shop / barbershop', 'Cold room', 'Local shop', 'Other'];
const SIGNALS = ['Strong opportunity', 'Promising', 'Weak or uncertain', 'Low priority'];

const emptySurvey = (id = '') => ({
  interviewId: id,
  status: 'Draft',
  interviewDate: new Date().toISOString().slice(0, 10),
  interviewer: '', businessCategory: '', otherCategory: '', location: '', respondentRole: '', consent: false,
  businessProfile: '', criticalLoads: '', powerSources: '', switchingMethod: '', recentOutage: '', outagesPerWeek: '', outageDuration: '',
  gridCost: '', fuelCost: '', maintenanceCost: '', monthlyLoss: '', recordMethod: '', recordWeaknesses: '', essentialCapability: '',
  decisionMaker: '', affordablePrice: '', pilotInterest: '', energyShareRelevant: false,
  nearbySolarInterest: '', appliances: '', peakLoad: '', loadLimitAcceptance: '', billingPreference: '', pricePerKwh: '',
  smartMeterAcceptance: '', remoteCutoffAcceptance: '', serviceWindow: '', energySharePilot: '',
  strongestEvidence: '', mainObjection: '', overallSignal: '', nextAction: '', followUpDate: '',
});

function makeInterviewId() {
  const date = new Date();
  const day = [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('');
  const bytes = new Uint8Array(3);
  if (globalThis.crypto?.getRandomValues) globalThis.crypto.getRandomValues(bytes);
  else bytes.forEach((_, index) => { bytes[index] = Math.floor(Math.random() * 256); });
  return `PO-${day}-${Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('').toUpperCase()}`;
}

function loadStore() {
  const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  return { active: parsed.active || null, completed: Array.isArray(parsed.completed) ? parsed.completed : [] };
}

const SYSTEM_DRAFT_FIELDS = new Set([
  'interviewId', 'status', 'interviewDate', 'interviewer', 'createdAt', 'updatedAt', 'completedAt',
]);

function hasMeaningfulDraftData(draft) {
  return Object.entries(draft).some(([key, value]) => {
    if (SYSTEM_DRAFT_FIELDS.has(key)) return false;
    if (typeof value === 'boolean') return value;
    return String(value ?? '').trim().length > 0;
  });
}

function csvCell(value) {
  const text = String(value ?? '');
  const safeText = /^[\s]*[=+\-@]/.test(text) ? `'${text}` : text;
  return `"${safeText.replaceAll('"', '""')}"`;
}

const inputClass = 'mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/40';
const buttonClass = 'rounded-lg px-4 py-3 text-sm font-bold outline-none transition focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50';

function Field({ label, name, value, onChange, type = 'text', required = false, placeholder, min }) {
  return <label htmlFor={name} className="block text-sm font-semibold text-slate-200">{label}{required && <span className="text-cyan-300"> *</span>}<input className={inputClass} id={name} name={name} type={type} value={value} onChange={onChange} required={required} placeholder={placeholder} min={min} /></label>;
}

function TextArea({ label, name, value, onChange, required = false, placeholder }) {
  return <label htmlFor={name} className="block text-sm font-semibold text-slate-200">{label}{required && <span className="text-cyan-300"> *</span>}<textarea className={`${inputClass} min-h-24 resize-y`} id={name} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder} /></label>;
}

function Select({ label, name, value, onChange, options, required = false }) {
  return <label htmlFor={name} className="block text-sm font-semibold text-slate-200">{label}{required && <span className="text-cyan-300"> *</span>}<select className={inputClass} id={name} name={name} value={value} onChange={onChange} required={required}><option value="">Select an option</option>{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
}

function Section({ title, description, children }) {
  return <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl shadow-slate-950/20 sm:p-7"><h2 className="text-xl font-black text-white sm:text-2xl">{title}</h2>{description && <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>}<div className="mt-6 grid gap-5 md:grid-cols-2">{children}</div></section>;
}

export default function PowerOpsSurvey() {
  const [survey, setSurvey] = useState(null);
  const [completed, setCompleted] = useState([]);
  const [storageMessage, setStorageMessage] = useState('Loading browser storage…');
  const [validationMessage, setValidationMessage] = useState('');
  const initialized = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const store = loadStore();
        const active = store.active?.status === 'Draft' ? { ...emptySurvey(), ...store.active } : emptySurvey(makeInterviewId());
        setSurvey(active); setCompleted(store.completed); setStorageMessage('Draft saved on this browser'); initialized.current = true;
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ active, completed: store.completed }));
      } catch {
        setSurvey(emptySurvey(makeInterviewId())); setStorageMessage('Browser storage is unavailable. Export or copy your notes before leaving this page.'); initialized.current = true;
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!survey || !initialized.current || survey.status !== 'Draft') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ active: survey, completed }));
    } catch {
      const timer = window.setTimeout(() => setStorageMessage('Could not save to browser storage. Export or copy your notes now.'), 0);
      return () => window.clearTimeout(timer);
    }
  }, [survey, completed]);

  if (!survey) return <div className="mx-auto min-h-[50vh] max-w-7xl px-4 py-16 text-slate-300" role="status">Preparing survey…</div>;

  const change = ({ target }) => setSurvey((current) => ({ ...current, [target.name]: target.type === 'checkbox' ? target.checked : target.value }));
  const persist = (active, records) => { localStorage.setItem(STORAGE_KEY, JSON.stringify({ active, completed: records })); };

  const newInterview = () => {
    if (
      survey.status === 'Draft' &&
      hasMeaningfulDraftData(survey) &&
      !window.confirm('Starting a new interview will discard this unfinished draft and its respondent-entered data. Continue?')
    ) return;
    const next = emptySurvey(makeInterviewId()); setValidationMessage('');
    try { persist(next, completed); setStorageMessage('New interview created and saved on this browser'); } catch { setStorageMessage('Could not save the new interview to browser storage.'); }
    setSurvey(next);
  };

  const completeInterview = () => {
    const missing = [!survey.consent && 'participation consent', !survey.interviewer.trim() && 'interviewer name or code', !survey.businessCategory && 'business category', survey.businessCategory === 'Other' && !survey.otherCategory.trim() && 'other business category description', !survey.location.trim() && 'general location', !survey.recentOutage.trim() && 'recent-outage evidence'].filter(Boolean);
    if (missing.length) {
      setValidationMessage(`Completion blocked. Add: ${missing.join(', ')}.`);
      if (survey.businessCategory === 'Other' && !survey.otherCategory.trim()) {
        window.requestAnimationFrame(() => document.getElementById('otherCategory')?.focus());
      }
      return;
    }
    const record = { ...survey, status: 'Complete', completedAt: new Date().toISOString() };
    const records = [...completed.filter(({ interviewId }) => interviewId !== record.interviewId), record];
    try {
      persist(null, records); // synchronous by design: an immediate export sees this record
      setCompleted(records); setSurvey(record); setValidationMessage('Interview completed and saved locally. Export completed responses promptly.'); setStorageMessage('Completed response saved on this browser');
    } catch { setValidationMessage('Completion could not be saved because browser storage failed. Export or copy the response before leaving.'); setStorageMessage('Browser storage failure'); }
  };

  const download = (kind) => {
    const data = kind === 'json' ? JSON.stringify({ schemaVersion: 1, exportedAt: new Date().toISOString(), completed }, null, 2) : [Object.keys(emptySurvey()).concat('completedAt').map(csvCell).join(','), ...completed.map((row) => Object.keys(emptySurvey()).concat('completedAt').map((key) => csvCell(row[key])).join(','))].join('\r\n');
    const url = URL.createObjectURL(new Blob([data], { type: kind === 'json' ? 'application/json' : 'text/csv;charset=utf-8' }));
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = `powerops-completed-${new Date().toISOString().slice(0, 10)}.${kind}`; anchor.click(); URL.revokeObjectURL(url);
  };

  const deleteData = () => {
    if (!window.confirm('Delete the active draft and every completed PowerOps interview from this browser? This cannot be undone.')) return;
    try { localStorage.removeItem(STORAGE_KEY); setCompleted([]); setSurvey(emptySurvey(makeInterviewId())); setValidationMessage('Device survey data deleted. A new blank interview has been created.'); setStorageMessage('No saved responses on this browser'); } catch { setStorageMessage('Could not delete browser data. Check browser storage settings.'); }
  };

  return <>
    <header className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,#020617,#0f172a)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Field research · Local-first</p><h1 className="mt-3 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl">PowerOps Digital Field Survey</h1><p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">Capture outage evidence and test product assumptions in the field. There is no central server submission yet: this survey stays in this browser until you export or delete it.</p></div>
    </header>
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <aside className="mb-8 grid gap-4 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-5 lg:grid-cols-[1fr_auto] lg:items-center" aria-label="Interview storage status">
        <div><p className="break-words text-lg font-black text-white">Interview ID: <span data-testid="interview-id" className="text-cyan-200">{survey.interviewId}</span></p><p className="mt-1 text-sm text-slate-300">Status: <strong>{survey.status}</strong> · Completed on this browser: <strong data-testid="completed-count">{completed.length}</strong></p><p className="mt-2 text-sm text-slate-300" role="status">{storageMessage}</p></div>
        <button type="button" className={`${buttonClass} border border-cyan-300/40 bg-slate-950 text-cyan-100`} onClick={newInterview}>New interview</button>
      </aside>
      <div className="mb-8 rounded-xl border border-amber-300/30 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100"><strong>Field privacy:</strong> The Interview ID identifies this response—not the interviewer or respondent. Do not collect NIN, passwords, bank information, patient or student records, or private security information. Browser data can be lost; export completed responses promptly.</div>
      <form className="space-y-8" onSubmit={(event) => { event.preventDefault(); completeInterview(); }} noValidate>
        <Section title="Interview identity and consent" description="Required completion fields are marked with an asterisk."><Field label="Interview date" name="interviewDate" type="date" value={survey.interviewDate} onChange={change} /><Field label="Interviewer name or code" name="interviewer" value={survey.interviewer} onChange={change} required /><Select label="Business category" name="businessCategory" value={survey.businessCategory} onChange={change} options={CATEGORIES} required />{survey.businessCategory === 'Other' && <Field label="Other business category" name="otherCategory" value={survey.otherCategory} onChange={change} required />}<Field label="General location" name="location" value={survey.location} onChange={change} required placeholder="Town, district or landmark—not a private address" /><Field label="Respondent role" name="respondentRole" value={survey.respondentRole} onChange={change} /><label htmlFor="consent" className="flex gap-3 rounded-lg border border-slate-700 p-4 text-sm leading-6 text-slate-200 md:col-span-2"><input id="consent" className="mt-1 h-5 w-5 shrink-0 accent-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300" type="checkbox" name="consent" checked={survey.consent} onChange={change} /><span><strong>Participation and note-taking consent *</strong><br />The respondent freely agrees to participate and permits notes for product discovery.</span></label></Section>
        <Section title="Business and power profile"><TextArea label="Business profile and operating hours" name="businessProfile" value={survey.businessProfile} onChange={change} /><TextArea label="Critical equipment or loads" name="criticalLoads" value={survey.criticalLoads} onChange={change} /><TextArea label="Existing power sources" name="powerSources" value={survey.powerSources} onChange={change} /><TextArea label="Switching method" name="switchingMethod" value={survey.switchingMethod} onChange={change} /><TextArea label="Most recent disruptive outage" name="recentOutage" value={survey.recentOutage} onChange={change} required placeholder="What stopped, for how long, and what happened next?" /><Field label="Outages per week" name="outagesPerWeek" type="number" min="0" value={survey.outagesPerWeek} onChange={change} /><Field label="Average outage duration" name="outageDuration" value={survey.outageDuration} onChange={change} placeholder="Example: 3 hours" /></Section>
        <Section title="Costs, records and PowerOps fit"><Field label="Monthly grid cost" name="gridCost" type="number" min="0" value={survey.gridCost} onChange={change} /><Field label="Monthly fuel cost" name="fuelCost" type="number" min="0" value={survey.fuelCost} onChange={change} /><Field label="Monthly maintenance cost" name="maintenanceCost" type="number" min="0" value={survey.maintenanceCost} onChange={change} /><Field label="Estimated monthly loss" name="monthlyLoss" type="number" min="0" value={survey.monthlyLoss} onChange={change} /><TextArea label="Current record method" name="recordMethod" value={survey.recordMethod} onChange={change} /><TextArea label="Record weaknesses" name="recordWeaknesses" value={survey.recordWeaknesses} onChange={change} /><TextArea label="Most essential PowerOps capability" name="essentialCapability" value={survey.essentialCapability} onChange={change} /><Field label="Decision-maker" name="decisionMaker" value={survey.decisionMaker} onChange={change} /><Field label="Affordable monthly PowerOps price" name="affordablePrice" type="number" min="0" value={survey.affordablePrice} onChange={change} /><Select label="Core PowerOps pilot interest" name="pilotInterest" value={survey.pilotInterest} onChange={change} options={['Yes', 'Maybe', 'No']} /></Section>
        <Section title="Optional EnergyShare discovery" description="EnergyShare is discovery research—not an approved service, tariff, capacity promise or installation offer."><label htmlFor="energyShareRelevant" className="flex gap-3 rounded-lg border border-slate-700 p-4 text-sm font-semibold text-slate-200 md:col-span-2"><input id="energyShareRelevant" className="h-5 w-5 accent-cyan-400" type="checkbox" name="energyShareRelevant" checked={survey.energyShareRelevant} onChange={change} />EnergyShare is relevant to this interview</label>{survey.energyShareRelevant && <><Select label="Nearby solar purchase interest" name="nearbySolarInterest" value={survey.nearbySolarInterest} onChange={change} options={['Yes', 'Maybe', 'No']} /><TextArea label="Required appliances and startup loads" name="appliances" value={survey.appliances} onChange={change} /><Field label="Estimated peak load in watts" name="peakLoad" type="number" min="0" value={survey.peakLoad} onChange={change} /><Select label="Strict load-limit acceptance" name="loadLimitAcceptance" value={survey.loadLimitAcceptance} onChange={change} options={['Accept', 'Unsure', 'Reject']} /><Select label="Billing preference" name="billingPreference" value={survey.billingPreference} onChange={change} options={['Prepaid', 'Monthly']} /><Field label="Affordable price per kWh" name="pricePerKwh" type="number" min="0" value={survey.pricePerKwh} onChange={change} /><Select label="Smart-meter acceptance" name="smartMeterAcceptance" value={survey.smartMeterAcceptance} onChange={change} options={['Accept', 'Unsure', 'Reject']} /><Select label="Remote cut-off acceptance" name="remoteCutoffAcceptance" value={survey.remoteCutoffAcceptance} onChange={change} options={['Accept', 'Unsure', 'Reject']} /><Field label="Required service window" name="serviceWindow" value={survey.serviceWindow} onChange={change} /><TextArea label="EnergyShare pilot interest and conditions" name="energySharePilot" value={survey.energySharePilot} onChange={change} /></>}</Section>
        <Section title="Interviewer assessment"><TextArea label="Strongest evidence or exact respondent phrase" name="strongestEvidence" value={survey.strongestEvidence} onChange={change} /><TextArea label="Main objection, safety concern or adoption risk" name="mainObjection" value={survey.mainObjection} onChange={change} /><Select label="Overall signal" name="overallSignal" value={survey.overallSignal} onChange={change} options={SIGNALS} /><TextArea label="Next action" name="nextAction" value={survey.nextAction} onChange={change} /><Field label="Follow-up date" name="followUpDate" type="date" value={survey.followUpDate} onChange={change} /></Section>
        {validationMessage && <p className="rounded-lg border border-cyan-300/30 bg-slate-900 p-4 text-sm font-semibold text-slate-100" role="alert">{validationMessage}</p>}
        <div className="flex flex-wrap gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5"><button type="submit" className={`${buttonClass} bg-cyan-300 text-slate-950`} disabled={survey.status === 'Complete'}>Complete and save locally</button><button type="button" className={`${buttonClass} border border-slate-700 text-slate-100`} onClick={() => download('csv')} disabled={!completed.length}>Export completed interviews as CSV</button><button type="button" className={`${buttonClass} border border-slate-700 text-slate-100`} onClick={() => download('json')} disabled={!completed.length}>Export JSON backup</button><button type="button" className={`${buttonClass} border border-red-400/50 text-red-200`} onClick={deleteData}>Delete device data</button><p className="w-full text-sm leading-6 text-slate-400">Exports contain completed interviews only. No data is sent to a central server.</p></div>
      </form>
    </div>
  </>;
}
