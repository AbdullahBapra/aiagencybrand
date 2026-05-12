/* Process — how we work, scroll-driven steps */
function Process() {
  const steps = [
    {
      n: '01', label: 'DISCOVER',
      title: 'Map the work that hurts.',
      body: "Two-week sprint. We shadow your team, instrument the workflow, and quantify the leak. You get a written diagnostic — yours to keep, even if we don't continue.",
      output: 'Diagnostic doc · ROI model · Build/no-build call',
      day: 'd1 — d10',
    },
    {
      n: '02', label: 'PROTOTYPE',
      title: 'Ship a thin slice in production.',
      body: 'No demos on localhost. We pick the smallest meaningful slice, ship it behind a feature flag, and run it on real data with real users for two weeks.',
      output: 'Live prototype · Eval suite · Cost model',
      day: 'd11 — d24',
    },
    {
      n: '03', label: 'DEPLOY',
      title: 'Harden, instrument, hand over.',
      body: 'Rollback paths, retry strategies, observability, on-call runbook. Your engineers pair with ours so the system is owned, not rented.',
      output: 'Production system · Runbook · Eng pairing logs',
      day: 'd25 — d38',
    },
    {
      n: '04', label: 'OPERATE',
      title: 'Optional retainer. Skin in the game.',
      body: 'Monthly retainer with shared dashboards. We track cost, quality, latency, and incident count. Pricing scales with savings — not with hours.',
      output: 'SLA dashboard · Quarterly review · Outcome-based fee',
      day: 'ongoing',
    },
  ];
  return (
    <section id="process" className="process" data-screen-label="Process">
      <div className="wrap">
        <div className="proc-head">
          <span className="eyebrow">[ §03 — PROCESS ]</span>
          <h2 className="section-title serif">
            How we <em className="ital">actually</em> work.
          </h2>
          <p className="section-sub">
            Four phases. Fixed scope per phase. You can exit after any one.
            No 12-month commitments, no slide-deck deliverables.
          </p>
        </div>

        <div className="proc-grid">
          {steps.map((s, i) => (
            <article key={s.n} className="proc-step" style={{'--i': i}}>
              <div className="proc-step-head">
                <span className="proc-num mono">{s.n}</span>
                <span className="proc-label mono">{s.label}</span>
                <span className="proc-day mono">{s.day}</span>
              </div>
              <h3 className="proc-title serif">{s.title}</h3>
              <p className="proc-body">{s.body}</p>
              <div className="proc-out mono">
                <span className="proc-out-k">↳ output</span>
                <span>{s.output}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

(function injectProcCSS(){
  if (document.getElementById('proc-css')) return;
  const css = `
  .process { padding: 140px 0; border-top: 1px solid var(--line); position: relative; }
  .proc-head { max-width: 720px; margin-bottom: 70px; }
  .proc-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid var(--line);
  }
  .proc-step {
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    padding: 32px 28px 36px;
    position: relative;
    transition: background .3s;
  }
  .proc-step:last-child { border-right: 0; }
  .proc-step:hover { background: var(--bg-1); }
  .proc-step:hover .proc-num { color: var(--accent); }
  .proc-step::before {
    content: ""; position: absolute; top: 0; left: 0; height: 2px; width: 0;
    background: var(--accent); transition: width .4s;
  }
  .proc-step:hover::before { width: 100%; }
  .proc-step-head {
    display: flex; align-items: center; gap: 14px; margin-bottom: 22px;
    font-size: 11px; letter-spacing: 0.1em;
  }
  .proc-num { font-size: 14px; color: var(--fg-3); transition: color .25s; }
  .proc-label { color: var(--fg); font-weight: 500; }
  .proc-day { color: var(--fg-3); margin-left: auto; font-size: 10px; }
  .proc-title { font-size: 26px; line-height: 1.15; margin: 0 0 16px; }
  .proc-body { color: var(--fg-2); font-size: 14px; line-height: 1.6; margin: 0 0 24px; min-height: 110px; }
  .proc-out {
    font-size: 11px; color: var(--fg-2);
    padding-top: 16px; border-top: 1px dashed var(--line);
    display: flex; flex-direction: column; gap: 4px;
  }
  .proc-out-k { color: var(--fg-3); }
  @media (max-width: 1100px) { .proc-grid { grid-template-columns: 1fr 1fr; } .proc-step:nth-child(2) { border-right: 0; } }
  `;
  const s = document.createElement('style'); s.id='proc-css'; s.textContent=css;
  document.head.appendChild(s);
})();
