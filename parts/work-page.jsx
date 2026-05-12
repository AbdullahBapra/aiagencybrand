/* Work page */
const { useState: useWState } = React;

const PROJECTS = [
  {
    id: 'helix',
    client: 'Helix Capital',
    industry: 'Fintech · Series B',
    title: 'A research agent that drafts deal memos in 90 seconds.',
    cover: 'helix',
    year: '2026',
    tag: 'CUSTOM_AGENTS',
    metric: '–84% memo drafting time',
    body: 'Replaced a 6-hour manual process with a multi-step agent that ingests filings, scrapes news, runs comp pulls, and writes a partner-ready first draft.',
  },
  {
    id: 'lumen',
    client: 'Lumen Labs',
    industry: 'Dev Tools',
    title: 'Default citation in 11 of 12 buying queries.',
    cover: 'lumen',
    year: '2026',
    tag: 'AI_GROWTH',
    metric: '+340% LLM citation share',
    body: 'Topical authority rebuild + structured-data overhaul moved them from invisible to default-cited in Perplexity, ChatGPT search, and Claude.',
  },
  {
    id: 'oakroot',
    client: 'Oakroot Health',
    industry: 'Healthcare',
    title: 'Insurance pre-auth, automated end-to-end.',
    cover: 'oakroot',
    year: '2025',
    tag: 'AUTOMATION',
    metric: '12,400 hrs / yr saved',
    body: 'Durable workflow with vision-extraction, payer-rules engine, and human-in-the-loop. Replaced 9 spreadsheets and 3 contractors.',
  },
  {
    id: 'rover',
    client: 'Rover Robotics',
    industry: 'Hardware',
    title: 'Owning the answer in "fleet management AI".',
    cover: 'rover',
    year: '2025',
    tag: 'AI_GROWTH',
    metric: '47% answer-slot share',
    body: 'Query-intent harvesting at scale + answer-shaped content layer. Tracked share-of-voice across 1,400 buying queries.',
  },
  {
    id: 'parable',
    client: 'Parable',
    industry: 'Media',
    title: 'A newsroom assistant that respects the byline.',
    cover: 'parable',
    year: '2025',
    tag: 'RAG',
    metric: '3.1× story throughput',
    body: 'Editorial-safe agent that drafts research briefs, suggests sources, and never auto-publishes. Built around a strict tool-use guardrail.',
  },
  {
    id: 'shoal',
    client: 'Shoal Logistics',
    industry: 'Supply chain',
    title: 'Route exceptions, resolved before dispatch sees them.',
    cover: 'shoal',
    year: '2024',
    tag: 'AUTOMATION',
    metric: '–62% dispatch escalations',
    body: 'Always-on agent watching the routing system. Catches anomalies, applies the rulebook, and only pages a human when the rulebook doesn\'t cover it.',
  },
];

function Cover({ id }) {
  // bespoke SVG covers — visual variety, no images
  if (id === 'helix') return (
    <svg viewBox="0 0 600 380" className="cover-svg">
      <rect width="600" height="380" fill="#0e0e0e"/>
      {Array.from({length: 14}).map((_, i) => (
        <line key={i} x1="40" y1={50 + i*22} x2={140 + Math.random()*420} y2={50 + i*22} stroke="#1f1f1f" strokeWidth="1" />
      ))}
      <rect x="40" y="50" width="80" height="280" fill="var(--accent)" opacity="0.9"/>
      <rect x="130" y="120" width="60" height="210" fill="#2a2a2a"/>
      <rect x="200" y="80" width="60" height="250" fill="#3a3a3a"/>
      <rect x="270" y="160" width="60" height="170" fill="#2a2a2a"/>
      <rect x="340" y="40" width="60" height="290" fill="var(--accent)" opacity="0.4"/>
      <rect x="410" y="100" width="60" height="230" fill="#2a2a2a"/>
      <rect x="480" y="180" width="60" height="150" fill="#3a3a3a"/>
      <text x="40" y="40" fontFamily="JetBrains Mono" fontSize="10" fill="#76726b">DEAL_VOLUME · Q4 2025 → Q2 2026</text>
    </svg>
  );
  if (id === 'lumen') return (
    <svg viewBox="0 0 600 380" className="cover-svg">
      <rect width="600" height="380" fill="#0e0e0e"/>
      <g stroke="#1f1f1f" strokeWidth="1">
        {Array.from({length: 30}).map((_, i) => (
          <line key={i} x1={i*22} y1="0" x2={i*22} y2="380"/>
        ))}
      </g>
      <circle cx="300" cy="190" r="100" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.5"/>
      <circle cx="300" cy="190" r="60" fill="var(--accent)" opacity="0.18"/>
      <circle cx="300" cy="190" r="22" fill="var(--accent)"/>
      {[ [120,80], [480,90], [110,310], [490,300], [300,40], [300,340] ].map(([x,y], i)=>(
        <g key={i}>
          <line x1="300" y1="190" x2={x} y2={y} stroke="#3a3a3a" strokeWidth="1"/>
          <circle cx={x} cy={y} r="14" fill="#181818" stroke="#2a2a2a"/>
        </g>
      ))}
    </svg>
  );
  if (id === 'oakroot') return (
    <svg viewBox="0 0 600 380" className="cover-svg">
      <rect width="600" height="380" fill="#0e0e0e"/>
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={50 + i*135} y="140" width="100" height="100" fill={i===1 ? "var(--accent)" : "#181818"} stroke={i===1 ? "var(--accent)" : "#2a2a2a"} />
          <text x={100 + i*135} y="195" fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle" fill={i===1 ? "#1a0f00" : "#b8b3aa"}>step_{i+1}</text>
        </g>
      ))}
      {[0,1,2].map(i => (
        <line key={i} x1={150 + i*135} y1="190" x2={185 + i*135} y2="190" stroke="var(--accent)" strokeWidth="2"/>
      ))}
      <text x="50" y="80" fontFamily="JetBrains Mono" fontSize="10" fill="#76726b">PRE_AUTH_PIPELINE · 99.97% SLA</text>
    </svg>
  );
  if (id === 'rover') return (
    <svg viewBox="0 0 600 380" className="cover-svg">
      <rect width="600" height="380" fill="#0e0e0e"/>
      {[0.47, 0.31, 0.22, 0.18, 0.14, 0.09].map((v, i) => (
        <g key={i}>
          <rect x="60" y={60 + i*48} width={460 * v} height="22" fill={i === 0 ? "var(--accent)" : "#2a2a2a"} />
          <text x="60" y={56 + i*48} fontFamily="JetBrains Mono" fontSize="9" fill="#76726b">QUERY_{i+1}</text>
          <text x={70 + 460*v} y={76 + i*48} fontFamily="JetBrains Mono" fontSize="10" fill={i===0 ? "var(--accent)" : "#b8b3aa"}>{Math.round(v*100)}%</text>
        </g>
      ))}
    </svg>
  );
  if (id === 'parable') return (
    <svg viewBox="0 0 600 380" className="cover-svg">
      <rect width="600" height="380" fill="#0e0e0e"/>
      <text x="40" y="180" fontFamily="Instrument Serif" fontSize="120" fill="var(--accent)" fontStyle="italic">"</text>
      <rect x="100" y="100" width="380" height="3" fill="#2a2a2a"/>
      <rect x="100" y="130" width="320" height="3" fill="#2a2a2a"/>
      <rect x="100" y="160" width="380" height="3" fill="#2a2a2a"/>
      <rect x="100" y="190" width="280" height="3" fill="var(--accent)"/>
      <rect x="100" y="220" width="380" height="3" fill="#2a2a2a"/>
      <rect x="100" y="250" width="200" height="3" fill="#2a2a2a"/>
      <text x="100" y="300" fontFamily="JetBrains Mono" fontSize="10" fill="#76726b">— editorial assistant · v2.1</text>
    </svg>
  );
  if (id === 'shoal') return (
    <svg viewBox="0 0 600 380" className="cover-svg">
      <rect width="600" height="380" fill="#0e0e0e"/>
      <path d="M 30 320 Q 150 200 280 240 T 570 80" fill="none" stroke="var(--accent)" strokeWidth="2"/>
      <path d="M 30 340 Q 150 300 280 310 T 570 280" fill="none" stroke="#3a3a3a" strokeDasharray="4 4"/>
      {[ [80,300], [180,230], [300,240], [420,180], [540,100] ].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="var(--accent)"/>
      ))}
      <text x="30" y="40" fontFamily="JetBrains Mono" fontSize="10" fill="#76726b">EXCEPTIONS_RESOLVED · 30d rolling</text>
    </svg>
  );
  return null;
}

function WorkPage({ tweaks }) {
  const [filter, setFilter] = useWState('ALL');
  const tags = ['ALL', 'VOICE', 'AUTOMATION', 'CUSTOM_AGENTS', 'RAG', 'AI_GROWTH', 'BI'];
  const list = filter === 'ALL' ? PROJECTS : PROJECTS.filter(p => p.tag === filter);

  return (
    <div className="page-enter" data-screen-label="Work">
      <SharedTopBar active="work" tweaks={tweaks} />

      <section className="page-hero work-hero">
        <div className="grid-bg" />
        <div className="page-hero-glow" />
        <div className="wrap page-hero-inner reveal">
          <div className="crumbs" style={{textTransform:'uppercase'}}>
            <a href="Agency.html">home</a><span className="sep">/</span><span>results</span>
          </div>
          <span className="eyebrow">[ SELECTED ENGAGEMENTS ]</span>
          <h1 className="page-title">
            Things we <em className="ital">shipped</em>.<br />
            Not pitched.
          </h1>
          <p className="page-sub">
            Six engagements out of forty-something. The rest are under NDA — happy to walk you through them on a call.
          </p>
        </div>
      </section>

      <section className="work-stats reveal">
        <div className="wrap">
          <div className="ws-grid">
            <div className="ws-cell"><div className="ws-num serif">42<span className="ws-sup">+</span></div><div className="ws-k mono">SHIPPED PROJECTS</div><div className="ws-d">across fintech, healthcare, dev tools, supply chain, media, e-com</div></div>
            <div className="ws-cell"><div className="ws-num serif">4.2<span className="ws-sup">×</span></div><div className="ws-k mono">AVG PRODUCTIVITY LIFT</div><div className="ws-d">measured across all retainers in the last 12 months</div></div>
            <div className="ws-cell"><div className="ws-num serif">11<span className="ws-sup">d</span></div><div className="ws-k mono">MEDIAN TIME TO SHIP</div><div className="ws-d">from kickoff to a working prototype in production</div></div>
            <div className="ws-cell"><div className="ws-num serif">71</div><div className="ws-k mono">RETAINER NPS</div><div className="ws-d">measured quarterly across active retainer clients</div></div>
          </div>
        </div>
      </section>

      <section className="work-filter">
        <div className="wrap">
          <div className="filter-row reveal">
            <span className="filter-k mono">FILTER //</span>
            {tags.map(t => (
              <button
                key={t}
                className={"filter-chip mono " + (filter === t ? "is-active" : "")}
                onClick={() => setFilter(t)}
              >
                {t.replace('_', ' ').toLowerCase()}
                <span className="chip-count">{t === 'ALL' ? PROJECTS.length : PROJECTS.filter(p => p.tag === t).length}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="work-list">
        <div className="wrap">
          {list.map((p, i) => (
            <article key={p.id} className={"work-row reveal " + (i % 2 ? "is-right" : "is-left")}>
              <div className="work-cover">
                <Cover id={p.cover} />
                <div className="work-cover-meta mono">
                  <span>{p.year}</span><span>·</span><span>{p.tag.replace('_',' ').toLowerCase()}</span>
                </div>
              </div>
              <div className="work-text">
                <div className="work-num mono">{String(i+1).padStart(2, '0')} / {String(list.length).padStart(2, '0')}</div>
                <div className="work-client mono">{p.client} <span className="work-ind">— {p.industry}</span></div>
                <h3 className="work-title serif">{p.title}</h3>
                <p className="work-body">{p.body}</p>
                <div className="work-metric">
                  <span className="wm-k mono">↳ outcome</span>
                  <span className="wm-v serif">{p.metric}</span>
                </div>
                <a className="work-cta mono underline-anim" href="#">Read case study →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-quotes reveal">
        <div className="wrap">
          <div className="wq-head"><span className="eyebrow">[ §03 — WHAT CLIENTS SAY ]</span><h2 className="section-title">In their <em className="ital">words</em>.</h2></div>
          <div className="wq-grid">
            <figure className="wq"><blockquote className="serif">"Shipped a working agent in 9 days that replaced a process our team had been chipping at for 8 months. Then they trained us to maintain it."</blockquote><figcaption><span className="wq-who">Maya Okafor</span><span className="wq-role mono">VP Engineering · Helix Capital</span></figcaption></figure>
            <figure className="wq"><blockquote className="serif">"We went from zero LLM citations to default answer in our category. The dashboard alone justified the retainer."</blockquote><figcaption><span className="wq-who">Daniel Reiss</span><span className="wq-role mono">Head of Growth · Lumen Labs</span></figcaption></figure>
          </div>
        </div>
      </section>

      <section className="work-cta-band reveal">
        <div className="wrap">
          <div className="band-inner">
            <h2 className="band-title serif">Yours could be next.</h2>
            <a className="cta-primary big" href="Agency.html#contact"><span>Start a project</span><span className="arr">→</span></a>
          </div>
        </div>
      </section>

      <SharedFooter tweaks={tweaks} />
      <Tweaks tweaks={tweaks} setTweak={() => {}} />
    </div>
  );
}

(function injectWorkCSS(){
  if (document.getElementById('work-css')) return;
  const css = `
  .work-filter { padding: 40px 0 20px; border-bottom: 1px solid var(--line); }
  .filter-row { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
  .filter-k { font-size: 11px; color: var(--fg-3); letter-spacing: 0.12em; margin-right: 6px; }
  .filter-chip {
    background: transparent; border: 1px solid var(--line-2);
    color: var(--fg-2); padding: 8px 14px;
    font-size: 11px; letter-spacing: 0.06em;
    cursor: pointer; display: inline-flex; gap: 8px; align-items: center;
    transition: all .25s;
  }
  .filter-chip:hover { color: var(--fg); border-color: var(--fg-3); }
  .filter-chip.is-active { background: var(--accent); color: #1a0f00; border-color: var(--accent); }
  .chip-count { font-size: 10px; opacity: 0.7; }
  .filter-chip.is-active .chip-count { opacity: 1; color: #1a0f00; }

  .work-list { padding: 80px 0 40px; }
  .work-row {
    display: grid; grid-template-columns: 1.1fr 1fr; gap: 80px;
    align-items: center; padding: 60px 0;
    border-bottom: 1px solid var(--line);
  }
  .work-row.is-right { grid-template-columns: 1fr 1.1fr; }
  .work-row.is-right .work-cover { order: 2; }
  .work-cover {
    position: relative; border: 1px solid var(--line-2);
    overflow: hidden; transition: transform .5s, border-color .3s;
  }
  .work-row:hover .work-cover { border-color: var(--accent); transform: translateY(-4px); }
  .cover-svg { display: block; width: 100%; height: auto; }
  .work-cover-meta {
    position: absolute; bottom: 12px; left: 14px;
    display: flex; gap: 8px; font-size: 10px;
    color: var(--fg-3); letter-spacing: 0.1em;
  }
  .work-num { font-size: 11px; color: var(--fg-3); margin-bottom: 18px; letter-spacing: 0.1em; }
  .work-client { font-size: 11px; color: var(--accent); margin-bottom: 14px; letter-spacing: 0.06em; }
  .work-ind { color: var(--fg-3); }
  .work-title { font-size: clamp(32px, 3.4vw, 48px); line-height: 1.1; margin: 0 0 18px; letter-spacing: -0.015em; }
  .work-body { color: var(--fg-2); font-size: 15px; line-height: 1.6; max-width: 480px; margin: 0 0 26px; }
  .work-metric { padding: 18px 0; border-top: 1px dashed var(--line); border-bottom: 1px dashed var(--line); display: flex; flex-direction: column; gap: 6px; margin-bottom: 22px; }
  .wm-k { font-size: 10px; color: var(--fg-3); letter-spacing: 0.12em; }
  .wm-v { font-size: 28px; color: var(--accent); }
  .work-cta { color: var(--fg); font-size: 12px; letter-spacing: 0.06em; }

  .work-stats { padding: 50px 0; border-bottom: 1px solid var(--line); background: var(--bg-1); }
  .ws-grid { display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid var(--line); }
  .ws-cell { padding: 28px 26px; border-right: 1px solid var(--line); position: relative; transition: background .3s; }
  .ws-cell:last-child { border-right: 0; }
  .ws-cell:hover { background: var(--bg-2); }
  .ws-cell:hover .ws-num { color: var(--accent); }
  .ws-num { font-size: 56px; line-height: 1; letter-spacing: -0.025em; color: var(--fg); margin-bottom: 14px; transition: color .3s; }
  .ws-sup { font-size: 22px; color: var(--accent); margin-left: 2px; vertical-align: super; }
  .ws-k { font-size: 10px; color: var(--fg-3); letter-spacing: 0.15em; margin-bottom: 8px; }
  .ws-d { font-size: 12px; color: var(--fg-2); line-height: 1.5; max-width: 220px; }

  .work-quotes { padding: 100px 0; border-top: 1px solid var(--line); background: var(--bg-1); }
  .wq-head { max-width: 720px; margin-bottom: 50px; }
  .wq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
  .wq { margin: 0; padding-top: 26px; border-top: 1px solid var(--accent); }
  .wq blockquote { font-size: 22px; line-height: 1.4; letter-spacing: -0.01em; margin: 0 0 22px; color: var(--fg); }
  .wq figcaption { display: flex; gap: 12px; align-items: baseline; flex-wrap: wrap; }
  .wq-who { font-weight: 500; font-size: 13px; color: var(--fg); }
  .wq-role { font-size: 11px; color: var(--fg-3); letter-spacing: 0.05em; }
  @media (max-width: 1100px) { .ws-grid { grid-template-columns: 1fr 1fr; } .wq-grid { grid-template-columns: 1fr; } }

  .work-cta-band { padding: 100px 0; border-top: 1px solid var(--line); background: var(--bg-1); }
  .band-inner { display: flex; justify-content: space-between; align-items: center; gap: 40px; flex-wrap: wrap; }
  .band-title { font-size: clamp(40px, 6vw, 80px); line-height: 1; margin: 0; letter-spacing: -0.02em; }
  @media (max-width: 1000px) {
    .work-row, .work-row.is-right { grid-template-columns: 1fr; gap: 30px; }
    .work-row.is-right .work-cover { order: 0; }
  }
  `;
  const s = document.createElement('style'); s.id='work-css'; s.textContent=css;
  document.head.appendChild(s);
})();

function WorkApp() {
  const [tweaks, setTweak] = useTweaks(window.__TWEAKS__);
  return (
    <>
      <WorkPage tweaks={tweaks} />
      <Tweaks tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<WorkApp />);
