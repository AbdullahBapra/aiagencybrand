/* Book intro call — multi-step booking flow page */
const { useState: useBState, useEffect: useBEffect } = React;

function BookPage({ tweaks }) {
  const [step, setStep] = useBState(1);
  const [form, setForm] = useBState({
    name: '', email: '', company: '', role: '',
    services: [], budget: '', timeline: '', team: '',
    problem: '',
    date: null, time: null,
  });

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggleService = (s) => setForm(f => ({
    ...f,
    services: f.services.includes(s) ? f.services.filter(x => x !== s) : [...f.services, s]
  }));

  return (
    <div className="page-enter" data-screen-label="Book Intro Call">
      <SharedTopBar active="book" tweaks={tweaks} />

      <section className="book-hero">
        <div className="grid-bg" />
        <div className="page-hero-glow" />
        <div className="wrap">
          <div className="book-hero-inner reveal">
            <div className="crumbs">
              <a href="Agency.html">home</a><span className="sep">/</span><span>book</span>
            </div>
            <span className="eyebrow">[ §00 — INTRO CALL · 30 MIN · NO PITCH DECK ]</span>
            <h1 className="page-title">
              Let's see if we're a <em className="ital">fit</em>.
            </h1>
            <p className="page-sub">
              Four short steps. We'll come back within 48 hours with a written go/no-go and — if no-go — three studios we'd send the work to instead.
            </p>
          </div>
        </div>
      </section>

      <section className="book-section">
        <div className="wrap">
          <div className="book-layout">
            <aside className="book-rail reveal">
              <div className="rail-h mono">// progress</div>
              <Steps step={step} setStep={setStep} />
              <div className="rail-card">
                <div className="rc-h mono"><span className="cc-dot" /> RIGHT NOW</div>
                <div className="rc-rows">
                  <div className="rc-row"><span>Calls this week</span><span className="rc-num">7</span></div>
                  <div className="rc-row"><span>Avg first reply</span><span className="rc-num">4h 12m</span></div>
                  <div className="rc-row"><span>Conversion to fit</span><span className="rc-num">63%</span></div>
                </div>
                <div className="rc-foot mono">if we're not the right fit, we'll say so on the call.</div>
              </div>
              <div className="rail-meet">
                <div className="rm-h mono">// who you'll meet</div>
                <div className="rm-people">
                  <Avatar initials="MR" name="Mara R." role="Partner · Agents" />
                  <Avatar initials="JT" name="Julien T." role="Partner · GEO/AEO" />
                </div>
              </div>
            </aside>

            <div className="book-form">
              {step === 1 && <Step1 form={form} update={update} toggleService={toggleService} onNext={() => setStep(2)} />}
              {step === 2 && <Step2 form={form} update={update} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
              {step === 3 && <Step3 form={form} update={update} onNext={() => setStep(4)} onBack={() => setStep(2)} />}
              {step === 4 && <Step4 form={form} />}
            </div>
          </div>
        </div>
      </section>

      <SharedFooter tweaks={tweaks} />
    </div>
  );
}

function Steps({ step }) {
  const steps = [
    { n: '01', l: 'About you' },
    { n: '02', l: 'Project shape' },
    { n: '03', l: 'Pick a time' },
    { n: '04', l: 'Confirm' },
  ];
  return (
    <ol className="steps">
      {steps.map((s, i) => {
        const idx = i + 1;
        const state = idx < step ? 'done' : idx === step ? 'active' : 'todo';
        return (
          <li key={s.n} className={"step is-" + state}>
            <span className="step-n mono">{state === 'done' ? '✓' : s.n}</span>
            <span className="step-l">{s.l}</span>
          </li>
        );
      })}
    </ol>
  );
}

function Avatar({ initials, name, role }) {
  return (
    <div className="avatar">
      <div className="av-circle mono">{initials}</div>
      <div>
        <div className="av-name">{name}</div>
        <div className="av-role mono">{role}</div>
      </div>
    </div>
  );
}

function FormHead({ n, total, title, sub }) {
  return (
    <div className="form-head">
      <div className="form-h-meta mono">step {n} / {total}</div>
      <h2 className="form-h-title serif">{title}</h2>
      <p className="form-h-sub">{sub}</p>
    </div>
  );
}

function Field({ label, hint, children }) {
  return (
    <div className="field">
      <label className="field-label mono">{label}{hint && <span className="field-hint"> · {hint}</span>}</label>
      {children}
    </div>
  );
}

function TextInput({ value, onChange, placeholder, type='text' }) {
  return (
    <input
      type={type}
      className="text-input"
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
    />
  );
}

function ChipGroup({ options, value, onChange, multi }) {
  return (
    <div className="chip-group">
      {options.map(o => {
        const isOn = multi ? value.includes(o) : value === o;
        return (
          <button
            key={o} type="button"
            className={"sel-chip " + (isOn ? "is-on" : "")}
            onClick={() => onChange(o)}
          >
            <span className="sel-mark"><span /></span>
            <span>{o}</span>
          </button>
        );
      })}
    </div>
  );
}

function Step1({ form, update, toggleService, onNext }) {
  const ok = form.name.trim() && form.email.trim() && form.email.includes('@') && form.services.length > 0;
  return (
    <div className="form-step">
      <FormHead n="01" total="04" title="About you." sub="So we know who's writing back." />
      <Field label="Your name">
        <TextInput value={form.name} onChange={v => update('name', v)} placeholder="Alex Chen" />
      </Field>
      <Field label="Work email">
        <TextInput type="email" value={form.email} onChange={v => update('email', v)} placeholder="alex@company.com" />
      </Field>
      <div className="row-2">
        <Field label="Company">
          <TextInput value={form.company} onChange={v => update('company', v)} placeholder="Acme Inc." />
        </Field>
        <Field label="Your role">
          <TextInput value={form.role} onChange={v => update('role', v)} placeholder="VP Engineering" />
        </Field>
      </div>
      <Field label="What can we help with" hint="multi-select">
        <div className="chip-group">
          {['Agent Development','GEO','AEO','Workflow Automation','Not sure yet'].map(s => (
            <button key={s} type="button"
              className={"sel-chip " + (form.services.includes(s) ? "is-on" : "")}
              onClick={() => toggleService(s)}
            >
              <span className="sel-mark"><span /></span>
              <span>{s}</span>
            </button>
          ))}
        </div>
      </Field>
      <div className="form-foot">
        <span className="foot-hint mono">⌨ tab through, ↵ to continue</span>
        <button className="cta-primary" disabled={!ok} onClick={onNext}>
          <span>Next · project shape</span><span className="arr">→</span>
        </button>
      </div>
    </div>
  );
}

function Step2({ form, update, onNext, onBack }) {
  const ok = form.budget && form.timeline && form.problem.trim().length > 12;
  return (
    <div className="form-step">
      <FormHead n="02" total="04" title="Shape of the work." sub="Rough numbers are fine. We'll sharpen them on the call." />
      <Field label="Budget range" hint="for the first phase">
        <ChipGroup
          options={['< $20k','$20–50k','$50–100k','$100k+','Unsure']}
          value={form.budget}
          onChange={v => update('budget', v)}
        />
      </Field>
      <Field label="Timeline">
        <ChipGroup
          options={['ASAP','Next month','This quarter','Exploring']}
          value={form.timeline}
          onChange={v => update('timeline', v)}
        />
      </Field>
      <Field label="Team size">
        <ChipGroup
          options={['Just me','2–10','10–50','50–200','200+']}
          value={form.team}
          onChange={v => update('team', v)}
        />
      </Field>
      <Field label="What's the problem?" hint="2–3 sentences max">
        <textarea
          className="text-area"
          rows={5}
          value={form.problem}
          placeholder="We have an internal team of 12 doing X manually. We've tried Y. We're hoping to..."
          onChange={e => update('problem', e.target.value)}
        />
        <div className="char-count mono">{form.problem.length} chars</div>
      </Field>
      <div className="form-foot">
        <button className="back-btn mono" onClick={onBack}>← back</button>
        <button className="cta-primary" disabled={!ok} onClick={onNext}>
          <span>Next · pick a time</span><span className="arr">→</span>
        </button>
      </div>
    </div>
  );
}

function Step3({ form, update, onNext, onBack }) {
  // Generate next 10 weekdays
  const days = [];
  let d = new Date(2026, 4, 11); // May 11, 2026 (Mon)
  while (days.length < 10) {
    const day = d.getDay();
    if (day !== 0 && day !== 6) days.push(new Date(d));
    d = new Date(d.getTime() + 86400000);
  }
  const times = ['09:00','09:30','10:30','13:00','14:00','15:30','16:00'];
  const fmtMonth = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const fmtDay = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const ok = form.date && form.time;

  return (
    <div className="form-step">
      <FormHead n="03" total="04" title="Pick a time." sub="30 minutes. Video. We send the link by email — no calendar wars." />

      <Field label="Date" hint="next 2 weeks · times in your local zone">
        <div className="date-grid">
          {days.map((dy, i) => {
            const key = dy.toISOString();
            const isSel = form.date === key;
            const slots = (i % 3 === 0) ? 1 : (i % 4 === 0 ? 0 : 4);
            return (
              <button
                key={key} type="button"
                disabled={slots === 0}
                className={"date-tile " + (isSel ? "is-on" : "") + (slots === 0 ? " is-full" : "")}
                onClick={() => update('date', key)}
              >
                <span className="dt-day mono">{fmtDay[dy.getDay()]}</span>
                <span className="dt-num serif">{dy.getDate()}</span>
                <span className="dt-mo mono">{fmtMonth[dy.getMonth()]}</span>
                <span className="dt-slots mono">{slots === 0 ? 'full' : `${slots} open`}</span>
              </button>
            );
          })}
        </div>
      </Field>

      {form.date && (
        <Field label="Time slot" hint="EST · UTC-5">
          <div className="time-grid">
            {times.map(t => {
              const isSel = form.time === t;
              return (
                <button
                  key={t} type="button"
                  className={"time-tile mono " + (isSel ? "is-on" : "")}
                  onClick={() => update('time', t)}
                >{t}</button>
              );
            })}
          </div>
        </Field>
      )}

      <div className="form-foot">
        <button className="back-btn mono" onClick={onBack}>← back</button>
        <button className="cta-primary" disabled={!ok} onClick={onNext}>
          <span>Confirm booking</span><span className="arr">→</span>
        </button>
      </div>
    </div>
  );
}

function Step4({ form }) {
  const dt = form.date ? new Date(form.date) : null;
  const fmtMonth = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const fmtDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  return (
    <div className="form-step confirm-step">
      <div className="confirm-mark">
        <svg viewBox="0 0 60 60" width="48" height="48">
          <circle cx="30" cy="30" r="28" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
          <path d="M 18 31 L 27 40 L 44 22" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 className="confirm-title serif">You're booked.</h2>
      <p className="confirm-sub">Calendar invite sent to <span className="hl">{form.email || 'your inbox'}</span>. We'll review your brief before the call so we don't waste your 30 minutes.</p>

      <div className="receipt">
        <div className="receipt-row"><span className="rk mono">// when</span><span className="rv serif">{dt ? `${fmtDay[dt.getDay()]} ${dt.getDate()} ${fmtMonth[dt.getMonth()]} · ${form.time} EST` : '—'}</span></div>
        <div className="receipt-row"><span className="rk mono">// who</span><span className="rv">{form.name || '—'} <span style={{color:'var(--fg-3)'}}>· {form.company}</span></span></div>
        <div className="receipt-row"><span className="rk mono">// scope</span><span className="rv">{form.services.join(' · ') || '—'}</span></div>
        <div className="receipt-row"><span className="rk mono">// budget</span><span className="rv">{form.budget || '—'} · {form.timeline}</span></div>
        <div className="receipt-row"><span className="rk mono">// brief</span><span className="rv" style={{maxWidth: 520}}>{form.problem || '—'}</span></div>
      </div>

      <div className="confirm-foot">
        <a className="cta-primary" href="Agency.html"><span>Back to home</span><span className="arr">→</span></a>
        <a className="back-btn mono" href="Work.html">Browse our work →</a>
      </div>
    </div>
  );
}

(function injectBookCSS(){
  if (document.getElementById('book-css')) return;
  const css = `
  .book-hero { padding: 100px 0 60px; position: relative; overflow: hidden; border-bottom: 1px solid var(--line); }
  .book-hero-inner { position: relative; z-index: 2; max-width: 900px; }
  .book-section { padding: 80px 0 120px; }
  .book-layout { display: grid; grid-template-columns: 320px 1fr; gap: 60px; align-items: start; }
  .book-rail { position: sticky; top: 90px; display: flex; flex-direction: column; gap: 28px; }
  .rail-h, .rm-h { font-size: 11px; color: var(--fg-3); letter-spacing: 0.12em; }
  .steps { list-style: none; margin: 12px 0 0; padding: 0; display: flex; flex-direction: column; }
  .step { display: flex; align-items: center; gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--line); position: relative; transition: padding-left .25s; }
  .step::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--accent); transform: scaleY(0); transform-origin: top; transition: transform .3s; }
  .step.is-active::before { transform: scaleY(1); }
  .step.is-active { padding-left: 12px; }
  .step.is-done { padding-left: 12px; }
  .step.is-done::before { transform: scaleY(1); background: #4ade80; }
  .step-n {
    width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center;
    border: 1px solid var(--line-2); border-radius: 50%;
    font-size: 10px; color: var(--fg-3);
    transition: all .25s;
  }
  .step.is-active .step-n { color: var(--accent); border-color: var(--accent); }
  .step.is-done .step-n { background: #4ade80; color: #0a0a0a; border-color: #4ade80; }
  .step-l { font-size: 13px; color: var(--fg-2); }
  .step.is-active .step-l { color: var(--fg); }

  .rail-card { border: 1px solid var(--line-2); padding: 20px; background: var(--bg-1); position: relative; }
  .rail-card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--accent), transparent); opacity: 0.5; }
  .cc-dot { width: 8px; height: 8px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 8px #4ade80; display: inline-block; }
  .rc-h { display: flex; align-items: center; gap: 8px; font-size: 11px; color: var(--fg-3); letter-spacing: 0.1em; padding-bottom: 14px; border-bottom: 1px solid var(--line); }
  .rc-rows { padding: 12px 0; display: flex; flex-direction: column; }
  .rc-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed var(--line); font-family: var(--mono); font-size: 12px; color: var(--fg-2); }
  .rc-row:last-child { border-bottom: 0; }
  .rc-num { color: var(--accent); }
  .rc-foot { font-size: 10.5px; color: var(--fg-3); padding-top: 12px; border-top: 1px solid var(--line); line-height: 1.5; }

  .rail-meet { padding-top: 8px; }
  .rm-people { display: flex; flex-direction: column; gap: 12px; margin-top: 12px; }
  .avatar { display: flex; align-items: center; gap: 12px; }
  .av-circle { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--bg-2); border: 1px solid var(--accent); font-size: 11px; color: var(--accent); }
  .av-name { font-size: 13px; color: var(--fg); }
  .av-role { font-size: 10px; color: var(--fg-3); letter-spacing: 0.06em; }

  .book-form { background: var(--bg-1); border: 1px solid var(--line-2); padding: 48px; min-height: 600px; position: relative; overflow: hidden; }
  .book-form::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--accent), transparent); opacity: 0.6; }

  .form-step { animation: stepIn .5s cubic-bezier(.2,.7,.2,1) both; display: flex; flex-direction: column; gap: 28px; }
  @keyframes stepIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }

  .form-head { margin-bottom: 8px; }
  .form-h-meta { font-size: 11px; color: var(--accent); letter-spacing: 0.12em; margin-bottom: 12px; }
  .form-h-title { font-size: clamp(36px, 4vw, 52px); line-height: 1.05; margin: 0 0 10px; letter-spacing: -0.015em; }
  .form-h-sub { color: var(--fg-2); font-size: 15px; max-width: 520px; margin: 0; line-height: 1.5; }

  .field { display: flex; flex-direction: column; gap: 10px; }
  .field-label { font-size: 11px; color: var(--fg-3); letter-spacing: 0.1em; text-transform: uppercase; }
  .field-hint { color: var(--fg-4); text-transform: none; letter-spacing: 0.04em; }
  .row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

  .text-input, .text-area {
    background: var(--bg); color: var(--fg);
    border: 1px solid var(--line-2);
    padding: 14px 16px;
    font-family: var(--sans); font-size: 15px;
    width: 100%; outline: 0;
    transition: border-color .25s, box-shadow .25s;
  }
  .text-input:focus, .text-area:focus { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent); }
  .text-area { resize: vertical; font-family: var(--sans); line-height: 1.5; }
  .char-count { font-size: 10px; color: var(--fg-3); text-align: right; margin-top: -4px; }

  .chip-group { display: flex; flex-wrap: wrap; gap: 8px; }
  .sel-chip {
    background: transparent; border: 1px solid var(--line-2);
    color: var(--fg-2); padding: 10px 14px;
    font-family: var(--mono); font-size: 12px;
    cursor: pointer; display: inline-flex; align-items: center; gap: 10px;
    transition: all .25s;
  }
  .sel-chip:hover { color: var(--fg); border-color: var(--fg-3); }
  .sel-chip.is-on { background: var(--accent-soft); border-color: var(--accent); color: var(--fg); }
  .sel-mark { width: 14px; height: 14px; border: 1px solid var(--line-2); display: inline-flex; align-items: center; justify-content: center; }
  .sel-mark span { width: 6px; height: 6px; background: var(--accent); transform: scale(0); transition: transform .25s; }
  .sel-chip.is-on .sel-mark { border-color: var(--accent); }
  .sel-chip.is-on .sel-mark span { transform: scale(1); }

  .date-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
  .date-tile {
    display: flex; flex-direction: column; align-items: center; gap: 4px;
    padding: 16px 8px;
    background: var(--bg); border: 1px solid var(--line-2);
    cursor: pointer; transition: all .25s;
    color: var(--fg);
  }
  .date-tile:hover:not(:disabled) { border-color: var(--fg-3); transform: translateY(-2px); }
  .date-tile.is-on { background: var(--accent-soft); border-color: var(--accent); }
  .date-tile.is-full, .date-tile:disabled { opacity: 0.35; cursor: not-allowed; }
  .dt-day { font-size: 10px; color: var(--fg-3); letter-spacing: 0.1em; }
  .dt-num { font-size: 28px; line-height: 1; color: var(--fg); }
  .dt-mo { font-size: 10px; color: var(--fg-3); letter-spacing: 0.1em; }
  .dt-slots { font-size: 10px; color: var(--accent); letter-spacing: 0.05em; margin-top: 4px; }
  .date-tile.is-full .dt-slots { color: var(--fg-4); }

  .time-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  .time-tile {
    background: var(--bg); border: 1px solid var(--line-2);
    color: var(--fg-2); padding: 12px;
    font-size: 13px; cursor: pointer;
    transition: all .25s;
  }
  .time-tile:hover { color: var(--fg); border-color: var(--fg-3); }
  .time-tile.is-on { background: var(--accent); color: #1a0f00; border-color: var(--accent); }

  .form-foot {
    display: flex; justify-content: space-between; align-items: center;
    padding-top: 24px; border-top: 1px solid var(--line);
    margin-top: 12px;
  }
  .foot-hint { font-size: 11px; color: var(--fg-3); }
  .back-btn { background: transparent; border: 0; color: var(--fg-2); font-size: 12px; cursor: pointer; transition: color .2s; padding: 0; }
  .back-btn:hover { color: var(--accent); }
  .cta-primary:disabled { opacity: 0.35; cursor: not-allowed; }
  .cta-primary:disabled:hover { box-shadow: none; transform: none; }

  /* confirm */
  .confirm-step { align-items: flex-start; }
  .confirm-mark { animation: pop .6s cubic-bezier(.2,.7,.2,1) both; }
  @keyframes pop { from { transform: scale(0.4); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  .confirm-title { font-size: clamp(48px, 5vw, 72px); line-height: 1; margin: 12px 0 14px; letter-spacing: -0.02em; }
  .confirm-sub { color: var(--fg-2); font-size: 16px; max-width: 540px; margin: 0 0 8px; line-height: 1.55; }
  .confirm-sub .hl { color: var(--accent); }
  .receipt { width: 100%; padding: 24px; border: 1px dashed var(--line-2); background: var(--bg); display: flex; flex-direction: column; gap: 12px; margin-top: 12px; }
  .receipt-row { display: grid; grid-template-columns: 110px 1fr; gap: 18px; align-items: baseline; padding: 8px 0; border-bottom: 1px dashed var(--line); }
  .receipt-row:last-child { border-bottom: 0; }
  .rk { font-size: 11px; color: var(--fg-3); letter-spacing: 0.06em; }
  .rv { font-size: 16px; color: var(--fg); }
  .confirm-foot { display: flex; gap: 24px; align-items: center; padding-top: 16px; }

  @media (max-width: 1000px) {
    .book-layout { grid-template-columns: 1fr; }
    .book-rail { position: static; }
    .row-2 { grid-template-columns: 1fr; }
    .date-grid { grid-template-columns: repeat(2, 1fr); }
    .book-form { padding: 28px; }
  }
  `;
  const s = document.createElement('style'); s.id='book-css'; s.textContent=css;
  document.head.appendChild(s);
})();

function BookApp() {
  const [tweaks, setTweak] = useTweaks(window.__TWEAKS__);
  return (
    <>
      <BookPage tweaks={tweaks} />
      <Tweaks tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<BookApp />);
