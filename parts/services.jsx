/* Services — 4 offerings, each with bespoke visual artifact */
const ServicesPart = (() => {
  const { useState } = React;

  const SERVICES = [
    {
      id: '01',
      tag: 'VOICE_AI',
      title: 'AI Voice Agents',
      lede: 'Inbound receptionists, outbound callers, payment-reminder agents. Sub-second latency, CRM-aware, multilingual.',
      bullets: [
        'AI Receptionist · 24/7 inbound coverage',
        'Outbound Sales Caller · qualifies + books',
        'Payment Reminder Caller · recovers AR',
        'Calendar, CRM, telephony integrations',
      ],
      stack: ['Vapi', 'Retell', 'Twilio', 'ElevenLabs', 'Deepgram'],
      artifact: 'auto',
      href: 'Services.html#voice',
    },
    {
      id: '02',
      tag: 'AUTOMATION_SYSTEMS',
      title: 'AI Automation Systems',
      lede: 'The operational backbone. n8n hubs that connect your tools, replace manual handoffs, and run 24/7.',
      bullets: [
        'n8n Business Operations Hub',
        'Zapier / Make migration to self-hosted',
        'Cross-tool workflow orchestration',
        'Durable runs w/ retry + alerting',
      ],
      stack: ['n8n', 'Temporal', 'Supabase', 'Make', 'Zapier'],
      artifact: 'auto',
      href: 'Services.html#automation',
    },
    {
      id: '03',
      tag: 'CUSTOM_AGENTS',
      title: 'Custom AI Agents',
      lede: 'Production-grade agents that execute work — support tickets, proposals, document processing — not chatbots that talk about it.',
      bullets: [
        'AI Customer Support Agent',
        'AI Proposal Generator',
        'AI Document Processing Agent',
        'Eval harness + human checkpoints',
      ],
      stack: ['LangGraph', 'Claude', 'GPT-4', 'Temporal', 'Inngest'],
      artifact: 'agent',
      href: 'Services.html#agents',
    },
    {
      id: '04',
      tag: 'RAG_SYSTEMS',
      title: 'RAG Systems',
      lede: 'Knowledge bases that answer like your senior staff. Cited, governed, and grounded in your actual SOPs.',
      bullets: [
        'RAG Knowledge Base',
        'Internal AI Search',
        'SOP AI Assistant',
        'Permission-aware retrieval',
      ],
      stack: ['Pinecone', 'pgvector', 'Cohere', 'Claude', 'LlamaIndex'],
      artifact: 'geo',
      href: 'Services.html#rag',
    },
    {
      id: '05',
      tag: 'GROWTH_SYSTEMS',
      title: 'AI Growth Systems',
      lede: 'WhatsApp pipelines, lead qualification, content factories. The revenue layer of your operations.',
      bullets: [
        'WhatsApp AI Sales Pipeline',
        'AI Content Factory',
        'AI Lead Qualification & routing',
        'Multi-channel follow-up automation',
      ],
      stack: ['WhatsApp API', 'HubSpot', 'OpenAI', 'Twilio', 'n8n'],
      artifact: 'aeo',
      href: 'Services.html#growth',
    },
    {
      id: '06',
      tag: 'BI_REPORTING',
      title: 'BI & Reporting Systems',
      lede: 'Executive reporting pipelines and AI dashboards. End the Monday-morning spreadsheet ritual.',
      bullets: [
        'Executive BI Reporting Pipeline',
        'AI-narrated Dashboards',
        'Automated Analytics & Anomaly Alerts',
        'Multi-source data consolidation',
      ],
      stack: ['BigQuery', 'Metabase', 'Looker', 'dbt', 'Hex'],
      artifact: 'aeo',
      href: 'Services.html#bi',
    },
  ];

  function Services({ tweaks }) {
    const [active, setActive] = useState(0);
    const svc = SERVICES[active];

    return (
      <section id="services" className="services" data-screen-label="Services">
        <div className="wrap">
          <div className="services-head">
            <span className="eyebrow">[ §02 — SERVICES ]</span>
            <h2 className="section-title serif">
              Six <em className="ital">capabilities</em>.
              <br />One operating system.
            </h2>
            <p className="section-sub">
              We engineer AI operational systems — voice, automation, agents, RAG, growth,
              reporting. Composable, observable, and owned by you.
            </p>
          </div>

          <div className="svc-layout">
            {/* Index list */}
            <div className="svc-index">
              {SERVICES.map((s, i) => (
                <button
                  key={s.id}
                  className={"svc-row " + (active === i ? "is-active" : "")}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                >
                  <span className="svc-num mono">{s.id}</span>
                  <span className="svc-name">{s.title}</span>
                  <span className="svc-tag mono">{s.tag}</span>
                  <span className="svc-arr">→</span>
                </button>
              ))}
            </div>

            {/* Active card */}
            <div className="svc-card" key={active}>
              <div className="svc-card-head">
                <span className="svc-card-num mono">{svc.id} / 06</span>
                <span className="svc-card-tag mono">{svc.tag}</span>
              </div>
              <h3 className="svc-card-title serif">{svc.title}</h3>
              <p className="svc-card-lede">{svc.lede}</p>

              <div className="svc-card-grid">
                <div>
                  <div className="svc-sub-h mono">// scope</div>
                  <ul className="svc-bullets">
                    {svc.bullets.map((b, i) => (
                      <li key={i}><span className="b-dot">+</span>{b}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="svc-sub-h mono">// stack</div>
                  <div className="svc-stack">
                    {svc.stack.map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                  <div className="svc-sub-h mono" style={{marginTop: 26}}>// engagement</div>
                  <div className="svc-engage">
                    <div className="eng-row"><span>Lead time</span><span>2–4 weeks</span></div>
                    <div className="eng-row"><span>Pricing</span><span>From $18k</span></div>
                    <div className="eng-row"><span>Format</span><span>Fixed sprint or retainer</span></div>
                  </div>
                </div>
              </div>

              {/* artifact */}
              <div className="svc-artifact">
                {svc.artifact === 'agent' && <ArtAgent />}
                {svc.artifact === 'geo' && <ArtGEO />}
                {svc.artifact === 'aeo' && <ArtAEO />}
                {svc.artifact === 'auto' && <ArtAuto />}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ─────── Artifacts ─────── */

  function ArtAgent() {
    return (
      <div className="art art-code">
        <div className="art-head mono"><span>graph.ts</span><span style={{marginLeft:'auto'}}>typescript</span></div>
        <pre className="code"><code>
{`const graph = createAgentGraph({
  nodes: {
    plan:    planNode({ model: "claude-opus-4" }),
    execute: toolNode({ tools: [search, browse, write, sql] }),
    review:  reviewNode({ guardrails: companyPolicy }),
    `}<span className="t-accent">{`commit`}</span>{`:  prNode({ repo, branch: "agent/${'${'}id${'}'}" })
  },
  edges: [
    ["plan",    "execute"],
    ["execute", "review"],
    ["review",  ({ ok }) => ok ? "commit" : "plan"]
  ],
  memory: episodicMemory({ ttl: "30d" }),
  `}<span className="t-accent">{`observe`}</span>{`: ["langfuse", "sentry"]
});`}
        </code></pre>
      </div>
    );
  }

  function ArtGEO() {
    return (
      <div className="art art-graph">
        <div className="art-head mono"><span>entity_graph · acme_corp</span><span style={{marginLeft:'auto'}}>topical authority 0.81</span></div>
        <svg viewBox="0 0 600 280" className="graph-svg">
          {/* edges */}
          <g stroke="#2a2a2a" strokeWidth="1">
            <line x1="300" y1="140" x2="120" y2="60" />
            <line x1="300" y1="140" x2="490" y2="50" />
            <line x1="300" y1="140" x2="100" y2="220" />
            <line x1="300" y1="140" x2="510" y2="220" />
            <line x1="300" y1="140" x2="300" y2="40" />
            <line x1="300" y1="140" x2="300" y2="240" />
            <line x1="120" y1="60" x2="100" y2="220" stroke="#1a1a1a" />
            <line x1="490" y1="50" x2="510" y2="220" stroke="#1a1a1a" />
          </g>
          {/* center */}
          <circle cx="300" cy="140" r="42" fill="var(--accent)" opacity="0.12" />
          <circle cx="300" cy="140" r="22" fill="var(--accent)" />
          <text x="300" y="144" textAnchor="middle" fill="#0a0a0a" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">acme</text>
          {/* satellites */}
          {[
            [120, 60, 'pricing', 14],
            [490, 50, 'security', 16],
            [100, 220, 'integrations', 18],
            [510, 220, 'use-cases', 20],
            [300, 40, 'how-it-works', 12],
            [300, 240, 'comparisons', 15],
          ].map(([x, y, label, r], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r={r} fill="#181818" stroke="#2a2a2a" />
              <text x={x} y={y + 32} textAnchor="middle" fill="#b8b3aa" fontSize="10" fontFamily="JetBrains Mono">{label}</text>
            </g>
          ))}
          {/* dots labels */}
          <text x="20" y="20" fill="#76726b" fontSize="9" fontFamily="JetBrains Mono">CITED_BY → 142 LLM responses / wk</text>
        </svg>
      </div>
    );
  }

  function ArtAEO() {
    const queries = [
      { q: 'best ai agent platform for fintech', share: 0.34, you: true },
      { q: 'how to build an llm-native crm', share: 0.22, you: true },
      { q: 'workflow automation for ops teams', share: 0.41, you: true },
      { q: 'rag vs fine-tune in 2026', share: 0.18, you: false },
      { q: 'tools for genai compliance', share: 0.27, you: true },
    ];
    return (
      <div className="art art-aeo">
        <div className="art-head mono"><span>citation_share · last 30d</span><span style={{marginLeft:'auto'}}>+18.4%</span></div>
        <div className="aeo-rows">
          {queries.map((row, i) => (
            <div key={i} className="aeo-row">
              <div className="aeo-q mono">"{row.q}"</div>
              <div className="aeo-bar">
                <div
                  className={"aeo-fill " + (row.you ? 'you' : 'them')}
                  style={{width: `${row.share * 100}%`}}
                />
              </div>
              <div className="aeo-pct mono">{Math.round(row.share * 100)}%</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function ArtAuto() {
    return (
      <div className="art art-auto">
        <div className="art-head mono"><span>workflow · invoice_intake</span><span style={{marginLeft:'auto'}}>runs 1.2k/wk · 0 errors</span></div>
        <div className="flow">
          <Node label="email" sub="trigger" />
          <Edge />
          <Node label="extract" sub="vision" active />
          <Edge />
          <Node label="validate" sub="rules" />
          <Edge />
          <Node label="approve" sub="slack" />
          <Edge />
          <Node label="post" sub="netsuite" accent />
        </div>
        <div className="flow-meta mono">
          <span>p50 12s</span><span>p95 38s</span><span>cost $0.03/run</span><span>SLA 99.97%</span>
        </div>
      </div>
    );
  }

  function Node({ label, sub, active, accent }) {
    return (
      <div className={"f-node " + (active ? "is-active " : "") + (accent ? "is-accent" : "")}>
        <div className="f-label mono">{label}</div>
        <div className="f-sub mono">{sub}</div>
      </div>
    );
  }
  function Edge() {
    return (
      <div className="f-edge">
        <div className="f-edge-line"></div>
        <div className="f-edge-pulse"></div>
      </div>
    );
  }

  return { Services };
})();
const Services = ServicesPart.Services;

(function injectServicesCSS(){
  if (document.getElementById('svc-css')) return;
  const css = `
  .services { padding: 140px 0; position: relative; border-top: 1px solid var(--line); }
  .services-head { max-width: 720px; margin-bottom: 80px; }
  .section-title {
    font-size: clamp(40px, 5.4vw, 76px);
    line-height: 1; margin: 18px 0 22px;
    letter-spacing: -0.02em;
  }
  .section-title .ital { color: var(--accent); font-style: italic; }
  .section-sub { color: var(--fg-2); font-size: 17px; max-width: 520px; line-height: 1.5; }

  .svc-layout {
    display: grid;
    grid-template-columns: 360px 1fr;
    gap: 48px;
    align-items: start;
  }
  .svc-index { display: flex; flex-direction: column; border-top: 1px solid var(--line); }
  .svc-row {
    display: grid;
    grid-template-columns: 36px 1fr auto;
    grid-template-rows: auto auto;
    gap: 4px 16px;
    align-items: center;
    text-align: left;
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--line);
    padding: 22px 8px;
    color: var(--fg-2);
    cursor: pointer;
    transition: background .25s, color .25s, padding .25s;
    position: relative;
  }
  .svc-row::before {
    content: ""; position: absolute; left: 0; top: 0; bottom: 0;
    width: 2px; background: var(--accent);
    transform: scaleY(0); transform-origin: top;
    transition: transform .3s;
  }
  .svc-row:hover { color: var(--fg); padding-left: 16px; }
  .svc-row.is-active { color: var(--fg); padding-left: 16px; background: linear-gradient(90deg, var(--accent-soft), transparent 70%); }
  .svc-row.is-active::before { transform: scaleY(1); }
  .svc-num { font-size: 11px; color: var(--fg-3); }
  .svc-row.is-active .svc-num { color: var(--accent); }
  .svc-name { font-family: var(--serif); font-size: 22px; letter-spacing: -0.01em; grid-column: 2; }
  .svc-tag { font-size: 9.5px; color: var(--fg-3); letter-spacing: 0.15em; grid-column: 2; }
  .svc-arr { color: var(--fg-3); transition: transform .3s, color .3s; }
  .svc-row:hover .svc-arr, .svc-row.is-active .svc-arr { color: var(--accent); transform: translateX(4px); }

  .svc-card {
    background: var(--bg-1);
    border: 1px solid var(--line-2);
    padding: 36px;
    position: relative;
    animation: cardIn .45s ease both;
    overflow: hidden;
  }
  .svc-card::before {
    content: ""; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.5;
  }
  @keyframes cardIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
  .svc-card-head { display: flex; gap: 14px; margin-bottom: 16px; }
  .svc-card-num { color: var(--accent); font-size: 11px; }
  .svc-card-tag { color: var(--fg-3); font-size: 11px; letter-spacing: 0.15em; }
  .svc-card-title { font-size: 44px; line-height: 1.05; margin: 0 0 14px; }
  .svc-card-lede { color: var(--fg-2); max-width: 620px; font-size: 16px; margin: 0 0 32px; line-height: 1.55; }

  .svc-card-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 40px;
    padding: 24px 0;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
  .svc-sub-h {
    font-size: 11px; color: var(--fg-3); letter-spacing: 0.15em;
    margin-bottom: 14px;
  }
  .svc-bullets { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
  .svc-bullets li { color: var(--fg); font-size: 14px; display: flex; gap: 12px; align-items: baseline; }
  .b-dot { color: var(--accent); font-family: var(--mono); font-size: 12px; }
  .svc-stack { display: flex; flex-wrap: wrap; gap: 6px; }
  .chip {
    font-family: var(--mono); font-size: 11px; padding: 5px 10px;
    border: 1px solid var(--line-2); color: var(--fg-2);
    background: var(--bg-2);
    border-radius: 3px;
    transition: border-color .2s, color .2s;
  }
  .chip:hover { border-color: var(--accent); color: var(--accent); }
  .svc-engage { display: flex; flex-direction: column; gap: 8px; }
  .eng-row {
    display: flex; justify-content: space-between;
    font-family: var(--mono); font-size: 12px;
    padding: 8px 0;
    border-bottom: 1px dashed var(--line);
  }
  .eng-row span:first-child { color: var(--fg-3); }
  .eng-row span:last-child { color: var(--fg); }

  .svc-artifact { margin-top: 32px; }

  /* artifact base */
  .art {
    background: #0a0a0a;
    border: 1px solid var(--line-2);
    border-radius: 4px;
    overflow: hidden;
  }
  .art-head {
    padding: 10px 14px;
    border-bottom: 1px solid var(--line);
    background: #080808;
    display: flex; gap: 14px;
    font-size: 11px; color: var(--fg-3); letter-spacing: 0.05em;
  }
  .code {
    margin: 0; padding: 22px;
    font-family: var(--mono); font-size: 12.5px; line-height: 1.85;
    color: var(--fg-2);
    overflow-x: auto;
    white-space: pre;
  }
  .t-accent { color: var(--accent); }

  .graph-svg { width: 100%; height: auto; padding: 20px; display: block; }

  .aeo-rows { padding: 22px; display: flex; flex-direction: column; gap: 16px; }
  .aeo-row { display: grid; grid-template-columns: 280px 1fr 50px; gap: 16px; align-items: center; }
  .aeo-q { font-size: 12px; color: var(--fg-2); }
  .aeo-bar { height: 8px; background: var(--bg-2); border: 1px solid var(--line); position: relative; overflow: hidden; }
  .aeo-fill {
    height: 100%;
    background: var(--accent);
    box-shadow: 0 0 12px var(--accent-soft);
    animation: barGrow 1.2s ease-out;
  }
  .aeo-fill.them { background: #2a2a2a; box-shadow: none; }
  @keyframes barGrow { from { width: 0; } }
  .aeo-pct { font-size: 11px; color: var(--fg); text-align: right; }

  .flow {
    display: flex; align-items: center; padding: 30px 22px; gap: 4px; flex-wrap: nowrap; justify-content: space-between;
  }
  .f-node {
    flex: 0 0 auto; padding: 14px 16px; min-width: 90px;
    border: 1px solid var(--line-2); background: var(--bg-2);
    text-align: center; border-radius: 3px;
    transition: border-color .25s;
  }
  .f-node.is-active {
    border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent), 0 0 24px var(--accent-soft);
  }
  .f-node.is-accent { background: var(--accent); border-color: var(--accent); }
  .f-node.is-accent .f-label, .f-node.is-accent .f-sub { color: #1a0f00; }
  .f-label { font-size: 12px; color: var(--fg); margin-bottom: 4px; letter-spacing: 0.04em; }
  .f-sub { font-size: 10px; color: var(--fg-3); letter-spacing: 0.1em; text-transform: uppercase; }
  .f-edge { flex: 1 1 30px; height: 1px; position: relative; min-width: 30px; }
  .f-edge-line { position: absolute; inset: 0; background: linear-gradient(90deg, var(--line-2), var(--accent), var(--line-2)); }
  .f-edge-pulse {
    position: absolute; top: -2px; width: 8px; height: 5px;
    background: var(--accent);
    box-shadow: 0 0 8px var(--accent);
    animation: pulseFlow 2.4s linear infinite;
  }
  @keyframes pulseFlow {
    0% { left: 0; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { left: 100%; opacity: 0; }
  }
  .flow-meta {
    display: flex; gap: 20px; padding: 12px 22px;
    border-top: 1px solid var(--line);
    font-size: 11px; color: var(--fg-3);
  }

  @media (max-width: 1100px) {
    .svc-layout { grid-template-columns: 1fr; }
    .svc-card-grid { grid-template-columns: 1fr; }
    .aeo-row { grid-template-columns: 1fr; gap: 4px; }
  }
  `;
  const s = document.createElement('style'); s.id='svc-css'; s.textContent=css;
  document.head.appendChild(s);
})();
