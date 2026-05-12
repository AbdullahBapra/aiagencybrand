/* Stack page */
const { useState: useSState } = React;

const STACK = [
  {
    cat: 'MODELS',
    desc: 'We pick per task — never per vendor. We benchmark before we commit.',
    items: [
      { name: 'Claude (Opus, Sonnet, Haiku)', use: 'Default for reasoning + writing' },
      { name: 'OpenAI (GPT-5, o4)', use: 'Tool use, structured output' },
      { name: 'Gemini Pro', use: 'Long-context retrieval, multimodal' },
      { name: 'Llama 3.3 / Qwen 2.5', use: 'Self-hosted when latency or cost rules' },
      { name: 'DeepSeek V3', use: 'Background batch jobs, cheap classification' },
    ]
  },
  {
    cat: 'AGENT_FRAMEWORKS',
    desc: 'Boring frameworks > clever ones. We optimise for debuggability.',
    items: [
      { name: 'LangGraph', use: 'Default for stateful, multi-step agents' },
      { name: 'Mastra', use: 'TypeScript-first agent runtimes' },
      { name: 'Inngest', use: 'Event-driven workflows + durable runs' },
      { name: 'Temporal', use: 'When workflows must survive anything' },
      { name: 'BAML', use: 'Schema-first prompt definitions' },
    ]
  },
  {
    cat: 'INFRA',
    desc: 'Hosting, queues, vectors. Pick the boring one.',
    items: [
      { name: 'Vercel + Modal', use: 'Edge UI + GPU-backed workers' },
      { name: 'Supabase', use: 'Postgres, auth, vector store, realtime' },
      { name: 'Pinecone / Turbopuffer', use: 'Vector search at scale' },
      { name: 'Cloudflare Workers', use: 'Latency-critical proxies + AI gateway' },
      { name: 'Railway / Fly.io', use: 'Long-running runtime when needed' },
    ]
  },
  {
    cat: 'OBSERVABILITY',
    desc: 'If you can\'t see it, you can\'t ship it.',
    items: [
      { name: 'Langfuse', use: 'Trace every agent run, every prompt, every cost' },
      { name: 'Braintrust', use: 'Eval suites + golden-set regression' },
      { name: 'Sentry', use: 'Application errors, source-mapped' },
      { name: 'PostHog', use: 'Product analytics + LLM analytics' },
      { name: 'Helicone', use: 'Cost ceilings + prompt versioning' },
    ]
  },
  {
    cat: 'GEO_AEO_TOOLING',
    desc: 'Built or bought — same standard.',
    items: [
      { name: 'Custom crawlers (Browserbase)', use: 'Headless browsing at scale' },
      { name: 'Bright Data', use: 'SERP + LLM crawler emulation' },
      { name: 'Schema.org tooling', use: 'Structured data audit + emit' },
      { name: 'Perplexity / ChatGPT search APIs', use: 'Citation share monitoring' },
      { name: 'Ahrefs + Looker', use: 'Reporting layer for clients' },
    ]
  },
  {
    cat: 'COLLAB',
    desc: 'How we work with your team.',
    items: [
      { name: 'Linear', use: 'Tracked work, public to client' },
      { name: 'GitHub', use: 'Code shared from day one' },
      { name: 'Slack Connect', use: 'Async channel per engagement' },
      { name: 'Notion / GitBook', use: 'Living documentation' },
      { name: 'Loom', use: 'Async demos, every sprint review' },
    ]
  },
];

const PRINCIPLES = [
  { n: '01', t: 'Boring beats clever.', d: 'We pick the framework with the best logs, not the best demo.' },
  { n: '02', t: 'Eval before ship.', d: 'Every agent has a golden set. Regression on every PR.' },
  { n: '03', t: 'Cost ceilings, not budgets.', d: 'Hard caps in code. We don\'t bill you for our bugs.' },
  { n: '04', t: 'Owned, not rented.', d: 'Code lives in your GitHub. We pair-program the handover.' },
];

function StackPage({ tweaks }) {
  const [active, setActive] = useSState(0);
  const cat = STACK[active];
  return (
    <div className="page-enter" data-screen-label="Stack">
      <SharedTopBar active="stack" tweaks={tweaks} />

      <section className="page-hero">
        <div className="grid-bg" />
        <div className="page-hero-glow" />
        <div className="wrap">
          <div className="page-hero-inner reveal">
            <div className="crumbs">
              <a href="Agency.html">home</a><span className="sep">/</span><span>stack</span>
            </div>
            <span className="eyebrow">[ §01 — TOOLS WE TRUST · UPDATED Q2 2026 ]</span>
            <h1 className="page-title">
              The <em className="ital">stack</em>.<br />
              Opinionated, not religious.
            </h1>
            <p className="page-sub">
              We've shipped on most of the alternatives. These are the ones that survived.
            </p>
          </div>
        </div>
      </section>

      <section className="stack-section">
        <div className="wrap">
          <div className="stack-layout">
            <div className="stack-nav reveal">
              {STACK.map((s, i) => (
                <button
                  key={s.cat}
                  className={"stack-nav-btn " + (active === i ? "is-active" : "")}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                >
                  <span className="sn-num mono">{String(i+1).padStart(2,'0')}</span>
                  <span className="sn-label mono">{s.cat.replace('_',' ').toLowerCase()}</span>
                  <span className="sn-count mono">{s.items.length}</span>
                </button>
              ))}
            </div>

            <div className="stack-card" key={active}>
              <div className="stack-card-head">
                <span className="mono" style={{color: 'var(--accent)', fontSize: 11, letterSpacing: '0.12em'}}>// {cat.cat.replace('_',' ').toLowerCase()}</span>
                <h3 className="stack-card-title serif">{cat.desc}</h3>
              </div>
              <div className="stack-items">
                {cat.items.map((it, i) => (
                  <div key={i} className="stack-item">
                    <div className="si-bullet">▸</div>
                    <div className="si-name serif">{it.name}</div>
                    <div className="si-use mono">{it.use}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="principles">
        <div className="wrap">
          <div className="proc-head reveal">
            <span className="eyebrow">[ §02 — STANCE ]</span>
            <h2 className="section-title serif">
              Four <em className="ital">non-negotiables</em>.
            </h2>
          </div>
          <div className="principles-grid reveal-stagger">
            {PRINCIPLES.map(p => (
              <article key={p.n} className="principle">
                <div className="p-num mono">{p.n}</div>
                <h3 className="p-title serif">{p.t}</h3>
                <p className="p-desc">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SharedFooter tweaks={tweaks} />
    </div>
  );
}

(function injectStackCSS(){
  if (document.getElementById('stack-css')) return;
  const css = `
  .stack-section { padding: 100px 0; }
  .stack-layout { display: grid; grid-template-columns: 320px 1fr; gap: 48px; align-items: start; }
  .stack-nav { display: flex; flex-direction: column; border-top: 1px solid var(--line); position: sticky; top: 80px; }
  .stack-nav-btn {
    display: grid; grid-template-columns: 36px 1fr auto;
    gap: 14px; align-items: center;
    background: transparent; border: 0;
    border-bottom: 1px solid var(--line);
    padding: 18px 12px; text-align: left;
    color: var(--fg-2); cursor: pointer;
    transition: padding .25s, color .25s, background .25s;
    position: relative;
  }
  .stack-nav-btn::before {
    content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
    background: var(--accent); transform: scaleY(0); transform-origin: top;
    transition: transform .3s;
  }
  .stack-nav-btn:hover { padding-left: 18px; color: var(--fg); }
  .stack-nav-btn.is-active { padding-left: 18px; color: var(--fg); background: linear-gradient(90deg, var(--accent-soft), transparent 70%); }
  .stack-nav-btn.is-active::before { transform: scaleY(1); }
  .sn-num { color: var(--fg-3); font-size: 11px; }
  .stack-nav-btn.is-active .sn-num { color: var(--accent); }
  .sn-label { font-size: 13px; letter-spacing: 0.05em; }
  .sn-count { color: var(--fg-3); font-size: 11px; }

  .stack-card { background: var(--bg-1); border: 1px solid var(--line-2); padding: 36px; animation: cardIn .45s ease both; position: relative; overflow: hidden; }
  .stack-card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--accent), transparent); opacity: 0.5; }
  .stack-card-head { padding-bottom: 24px; border-bottom: 1px solid var(--line); margin-bottom: 24px; }
  .stack-card-title { font-size: 30px; line-height: 1.2; margin: 12px 0 0; max-width: 600px; letter-spacing: -0.01em; }
  .stack-items { display: flex; flex-direction: column; }
  .stack-item {
    display: grid; grid-template-columns: 24px 1fr 1.4fr;
    gap: 20px; align-items: baseline;
    padding: 22px 0;
    border-bottom: 1px dashed var(--line);
    transition: padding .25s;
  }
  .stack-item:hover { padding-left: 8px; }
  .stack-item:hover .si-bullet { color: var(--accent); }
  .si-bullet { color: var(--fg-3); font-family: var(--mono); font-size: 12px; transition: color .2s; }
  .si-name { font-size: 22px; letter-spacing: -0.01em; }
  .si-use { font-size: 12px; color: var(--fg-2); letter-spacing: 0.02em; }

  .principles { padding: 120px 0; border-top: 1px solid var(--line); background: var(--bg-1); }
  .principles-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-top: 1px solid var(--line-2); }
  .principle { padding: 36px 28px; border-right: 1px solid var(--line-2); transition: background .3s; position: relative; }
  .principle:last-child { border-right: 0; }
  .principle:hover { background: var(--bg-2); }
  .principle::before { content: ""; position: absolute; top: 0; left: 0; height: 2px; width: 0; background: var(--accent); transition: width .4s; }
  .principle:hover::before { width: 100%; }
  .p-num { color: var(--fg-3); font-size: 12px; margin-bottom: 18px; letter-spacing: 0.1em; }
  .p-title { font-size: 26px; line-height: 1.15; margin: 0 0 14px; letter-spacing: -0.01em; }
  .p-desc { color: var(--fg-2); font-size: 14px; line-height: 1.55; margin: 0; }
  @media (max-width: 1000px) {
    .stack-layout { grid-template-columns: 1fr; }
    .stack-nav { position: static; }
    .principles-grid { grid-template-columns: 1fr 1fr; }
  }
  `;
  const s = document.createElement('style'); s.id='stack-css'; s.textContent=css;
  document.head.appendChild(s);
})();

function StackApp() {
  const [tweaks, setTweak] = useTweaks(window.__TWEAKS__);
  return (
    <>
      <StackPage tweaks={tweaks} />
      <Tweaks tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<StackApp />);
