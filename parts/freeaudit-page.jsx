/* Free Audit page — short qualifying form */
const { useState: useFAS } = React;

function FreeAuditPg({ tweaks }) {
  const [form, setForm] = useFAS({ name:'', email:'', company:'', site:'', services:[], hours:'', problem:'', sent:false });
  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const tog = s => setForm(f => ({ ...f, services: f.services.includes(s) ? f.services.filter(x=>x!==s) : [...f.services, s] }));
  const ok = form.name && form.email.includes('@') && form.services.length > 0 && form.problem.length > 12;

  return (
    <div className="page-enter" data-screen-label="Free Audit">
      <SharedTopBar active="audit" tweaks={tweaks} />

      <section className="page-hero" style={{paddingBottom: 40}}>
        <div className="grid-bg" />
        <div className="page-hero-glow" />
        <div className="wrap">
          <div className="page-hero-inner reveal">
            <div className="crumbs"><a href="Agency.html">home</a><span className="sep">/</span><span>free audit</span></div>
            <span className="eyebrow">[ §00 — FREE AUDIT · 30 MIN · NO PITCH ]</span>
            <h1 className="page-title">A free <em className="ital">audit</em>.<br/>No slide deck.</h1>
            <p className="page-sub">Tell us where it hurts. We come back within 48 hours with a written opportunity map and 3 quick-win recommendations — yours to keep, even if we never work together.</p>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{paddingTop: 40, borderTop: 0}}>
        <div className="wrap">
          <div className="audit-layout">
            <aside className="audit-rail reveal">
              <div className="ar-h mono">// what you get</div>
              <ol className="ar-list">
                <li><span className="al-n mono">01</span><div><div className="al-t">30-minute call</div><div className="al-d">With a founder, not a salesperson.</div></div></li>
                <li><span className="al-n mono">02</span><div><div className="al-t">Written opportunity map</div><div className="al-d">PDF, in your inbox, within 48h.</div></div></li>
                <li><span className="al-n mono">03</span><div><div className="al-t">3 quick wins</div><div className="al-d">Ranked by ROI. Yours to ship — with us or without.</div></div></li>
                <li><span className="al-n mono">04</span><div><div className="al-t">Honest go/no-go</div><div className="al-d">If we're wrong for you, we'll name 3 studios who aren't.</div></div></li>
              </ol>
              <div className="ar-foot mono">→ this is free. always.</div>
            </aside>

            <div className="audit-form">
              {!form.sent && <>
                <div className="form-head">
                  <div className="form-h-meta mono">7 fields · ~90 seconds</div>
                  <h2 className="form-h-title serif">Tell us where it hurts.</h2>
                </div>

                <div className="row-2">
                  <div className="field"><label className="field-label mono">Name</label><input className="text-input" value={form.name} onChange={e=>upd('name',e.target.value)} placeholder="Alex Chen"/></div>
                  <div className="field"><label className="field-label mono">Work email</label><input className="text-input" value={form.email} onChange={e=>upd('email',e.target.value)} placeholder="alex@company.com"/></div>
                </div>
                <div className="row-2">
                  <div className="field"><label className="field-label mono">Company</label><input className="text-input" value={form.company} onChange={e=>upd('company',e.target.value)} placeholder="Acme Inc."/></div>
                  <div className="field"><label className="field-label mono">Website</label><input className="text-input" value={form.site} onChange={e=>upd('site',e.target.value)} placeholder="acme.com"/></div>
                </div>

                <div className="field">
                  <label className="field-label mono">Which services are you exploring · <span className="field-hint">multi-select</span></label>
                  <div className="chip-group">
                    {['AI Voice Agents','Automation','Custom Agents','RAG','AI Growth (GEO/AEO)','BI & Reporting','Not sure yet'].map(s => (
                      <button key={s} type="button" className={"sel-chip " + (form.services.includes(s) ? "is-on" : "")} onClick={()=>tog(s)}>
                        <span className="sel-mark"><span/></span><span>{s}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label className="field-label mono">How many hours/week is this costing you · <span className="field-hint">rough estimate</span></label>
                  <div className="chip-group">
                    {['<10','10–40','40–100','100–500','500+','no idea'].map(h => (
                      <button key={h} type="button" className={"sel-chip " + (form.hours===h ? "is-on" : "")} onClick={()=>upd('hours',h)}>
                        <span className="sel-mark"><span/></span><span>{h}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label className="field-label mono">What's the problem? · <span className="field-hint">2–4 sentences</span></label>
                  <textarea className="text-area" rows={5} value={form.problem} onChange={e=>upd('problem',e.target.value)} placeholder="We have an internal team of X doing Y manually. We've tried Z. We're hoping to..."/>
                  <div className="char-count mono">{form.problem.length} chars</div>
                </div>

                <div className="form-foot">
                  <span className="foot-hint mono">↳ we reply within 48h, always</span>
                  <button className="cta-primary" disabled={!ok} onClick={()=>upd('sent', true)}>
                    <span>Submit · get audit</span><span className="arr">→</span>
                  </button>
                </div>
              </>}

              {form.sent && <div className="form-step confirm-step" style={{display:'flex', flexDirection:'column', gap:24}}>
                <div className="confirm-mark"><svg viewBox="0 0 60 60" width="48" height="48"><circle cx="30" cy="30" r="28" fill="none" stroke="var(--accent)" strokeWidth="1.5"/><path d="M 18 31 L 27 40 L 44 22" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <h2 className="confirm-title serif">Submitted.</h2>
                <p className="confirm-sub">We'll review your brief and email you at <span className="hl">{form.email}</span> within 48 hours with your opportunity map. Meanwhile — go read something useful.</p>
                <div style={{display:'flex', gap:24, alignItems:'center', paddingTop:16}}>
                  <a className="cta-primary" href="Insights.html"><span>Read field notes</span><span className="arr">→</span></a>
                  <a className="back-btn mono" href="Work.html">Browse our work →</a>
                </div>
              </div>}
            </div>
          </div>
        </div>
      </section>

      <SharedFooter tweaks={tweaks} />
    </div>
  );
}

(function injectAuditCSS(){
  if (document.getElementById('audit-css')) return;
  const css = `
  .audit-layout { display: grid; grid-template-columns: 340px 1fr; gap: 60px; align-items: start; }
  .audit-rail { position: sticky; top: 90px; }
  .ar-h { font-size: 11px; color: var(--fg-3); letter-spacing: 0.12em; margin-bottom: 18px; }
  .ar-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; }
  .ar-list li { display: flex; gap: 16px; padding: 18px 0; border-bottom: 1px solid var(--line); }
  .al-n { width: 32px; flex: 0 0 32px; color: var(--accent); font-size: 11px; }
  .al-t { color: var(--fg); font-size: 14px; margin-bottom: 4px; }
  .al-d { color: var(--fg-3); font-size: 12px; line-height: 1.5; }
  .ar-foot { padding-top: 18px; font-size: 11px; color: var(--accent); letter-spacing: 0.08em; }

  .audit-form { background: var(--bg-1); border: 1px solid var(--line-2); padding: 44px; display: flex; flex-direction: column; gap: 24px; position: relative; overflow: hidden; }
  .audit-form::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--accent), transparent); opacity: 0.6; }
  .form-head { margin-bottom: 4px; }
  .form-h-meta { font-size: 11px; color: var(--accent); letter-spacing: 0.12em; margin-bottom: 12px; }
  .form-h-title { font-size: clamp(32px, 4vw, 44px); line-height: 1.05; margin: 0; letter-spacing: -0.015em; }
  .field { display: flex; flex-direction: column; gap: 10px; }
  .field-label { font-size: 11px; color: var(--fg-3); letter-spacing: 0.1em; text-transform: uppercase; }
  .field-hint { color: var(--fg-4); text-transform: none; letter-spacing: 0.04em; }
  .row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .text-input, .text-area { background: var(--bg); color: var(--fg); border: 1px solid var(--line-2); padding: 14px 16px; font-family: var(--sans); font-size: 15px; width: 100%; outline: 0; transition: border-color .25s, box-shadow .25s; }
  .text-input:focus, .text-area:focus { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent); }
  .text-area { resize: vertical; line-height: 1.5; }
  .char-count { font-size: 10px; color: var(--fg-3); text-align: right; margin-top: -4px; }
  .chip-group { display: flex; flex-wrap: wrap; gap: 8px; }
  .sel-chip { background: transparent; border: 1px solid var(--line-2); color: var(--fg-2); padding: 10px 14px; font-family: var(--mono); font-size: 12px; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; transition: all .25s; }
  .sel-chip:hover { color: var(--fg); border-color: var(--fg-3); }
  .sel-chip.is-on { background: var(--accent-soft); border-color: var(--accent); color: var(--fg); }
  .sel-mark { width: 14px; height: 14px; border: 1px solid var(--line-2); display: inline-flex; align-items: center; justify-content: center; }
  .sel-mark span { width: 6px; height: 6px; background: var(--accent); transform: scale(0); transition: transform .25s; }
  .sel-chip.is-on .sel-mark { border-color: var(--accent); }
  .sel-chip.is-on .sel-mark span { transform: scale(1); }
  .form-foot { display: flex; justify-content: space-between; align-items: center; padding-top: 18px; border-top: 1px solid var(--line); margin-top: 8px; }
  .foot-hint { font-size: 11px; color: var(--fg-3); }
  .back-btn { background: transparent; border: 0; color: var(--fg-2); font-size: 12px; cursor: pointer; transition: color .2s; padding: 0; text-decoration: none; }
  .back-btn:hover { color: var(--accent); }
  .cta-primary:disabled { opacity: 0.35; cursor: not-allowed; }
  .cta-primary:disabled:hover { box-shadow: none; transform: none; }
  .confirm-mark { animation: pop .6s cubic-bezier(.2,.7,.2,1) both; }
  @keyframes pop { from { transform: scale(0.4); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  .confirm-title { font-size: clamp(40px, 5vw, 60px); line-height: 1; margin: 0; }
  .confirm-sub { color: var(--fg-2); font-size: 16px; line-height: 1.55; margin: 0; max-width: 540px; }
  .confirm-sub .hl { color: var(--accent); }
  @media (max-width: 1000px) { .audit-layout { grid-template-columns: 1fr; } .audit-rail { position: static; } .row-2 { grid-template-columns: 1fr; } .audit-form { padding: 28px; } }
  `;
  const s = document.createElement('style'); s.id='audit-css'; s.textContent=css;
  document.head.appendChild(s);
})();

function AuditApp() { const [t, st] = useTweaks(window.__TWEAKS__); return <><FreeAuditPg tweaks={t}/><Tweaks tweaks={t} setTweak={st}/></>; }
ReactDOM.createRoot(document.getElementById('root')).render(<AuditApp/>);
