/* FAQ page */
const { useState: useFState } = React;

const FAQ_GROUPS = [
  {
    cat: 'ENGAGEMENT',
    qs: [
      { q: 'What does an engagement look like?', a: 'Four phases: Discover (2 weeks), Prototype (2 weeks), Deploy (2 weeks), Operate (optional retainer). You can exit cleanly after any phase. Total minimum is the discovery sprint at $18,000.' },
      { q: 'Do you take equity?', a: 'Rarely, and only when the alignment is genuinely there. We default to cash because it lets us be honest. We\'ve done 3 equity-component deals in 2 years.' },
      { q: 'How fast can you start?', a: 'Typical kickoff is 2 weeks from signed contract. Q3 2026 has 2 discovery slots and 1 build retainer slot open.' },
      { q: 'Can you work with our existing engineers?', a: 'Yes — most engagements end with us pair-programming the handover. We prefer it. Agents you understand are agents you can debug at 3am.' },
    ]
  },
  {
    cat: 'PRICING',
    qs: [
      { q: 'How much does this cost?', a: 'Discovery sprints are $18,000 fixed. Build retainers are $35–$80k/month depending on scope. GEO/AEO programs run $12–$25k/month. We give exact numbers in proposal — no estimate ranges.' },
      { q: 'Outcome-based pricing?', a: 'For mature retainers (month 4+), yes. We tie a portion of fee to a measurable outcome — cost saved, citations gained, throughput shipped. We don\'t do it on day one because we don\'t trust day-one estimates.' },
      { q: 'What\'s included?', a: 'Code, evals, runbook, observability, training, and the handover. Cloud bills are billed-through at cost. We don\'t mark up infra.' },
    ]
  },
  {
    cat: 'TECHNICAL',
    qs: [
      { q: 'Which models do you use?', a: 'We benchmark per task. Default mix is Claude Opus for reasoning, GPT-5 for tool use, self-hosted Llama or Qwen for hot paths. We\'ll use whatever wins your eval.' },
      { q: 'Do you do on-prem / VPC?', a: 'Yes. We\'ve shipped agents inside HIPAA-bound infra and bank VPCs. Add 1–2 weeks for the deploy phase.' },
      { q: 'Open source?', a: 'We open-source tooling that isn\'t client-specific. Our eval harness, langfuse middleware, and a few framework adapters live on our GitHub.' },
      { q: 'What if a model you depend on changes?', a: 'Every agent has at least two model paths and a frozen eval suite. Provider drift is a normal Tuesday.' },
    ]
  },
  {
    cat: 'GEO_AEO',
    qs: [
      { q: 'Is GEO/AEO actually different from SEO?', a: 'Yes. SEO optimises for ranking; GEO/AEO optimise for being cited and being the answer. Different content shape, different schema, different success metric (citation share, not click-through).' },
      { q: 'How do you measure success?', a: 'Citation share across a fixed query basket, tracked across Perplexity, ChatGPT search, Claude, and Google AI Overviews. Reported weekly on a dashboard you own.' },
      { q: 'How long until results?', a: 'First citation gains in 4–6 weeks. Meaningful share-of-voice in 12–14 weeks. We publish historical curves on the Results page.' },
    ]
  },
  {
    cat: 'STUDIO',
    qs: [
      { q: 'Who works on my project?', a: 'Two senior builders minimum, often three. We don\'t have juniors and we don\'t outsource. Founders are involved in every engagement through phase 2.' },
      { q: 'Where are you based?', a: 'Remote-first, US/EU overlap. Quarterly in-person sprints in NYC, London, or your office.' },
      { q: 'Why "agenticbuilders"?', a: 'Because "AI consultancy" already means too many things. We build agents. We are builders. The name is a sentence.' },
    ]
  },
];

function FAQItem({ q, a, num, isOpen, onToggle }) {
  return (
    <div className={"faq-item " + (isOpen ? "is-open" : "")}>
      <button className="faq-q" onClick={onToggle}>
        <span className="faq-num mono">{num}</span>
        <span className="faq-q-text serif">{q}</span>
        <span className="faq-toggle"><span /><span /></span>
      </button>
      <div className="faq-a-wrap">
        <div className="faq-a">
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQPage({ tweaks }) {
  const [openId, setOpenId] = useFState('engagement-0');
  return (
    <div className="page-enter" data-screen-label="FAQ">
      <SharedTopBar active="faq" tweaks={tweaks} />

      <section className="page-hero">
        <div className="grid-bg" />
        <div className="page-hero-glow" />
        <div className="wrap">
          <div className="page-hero-inner reveal">
            <div className="crumbs">
              <a href="Agency.html">home</a><span className="sep">/</span><span>faq</span>
            </div>
            <span className="eyebrow">[ §01 — FREQUENTLY ASKED ]</span>
            <h1 className="page-title">
              Honest <em className="ital">answers</em>.<br />
              Even the awkward ones.
            </h1>
            <p className="page-sub">
              The questions we hear on every intro call, written down once so you don't have to ask.
            </p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="wrap">
          {FAQ_GROUPS.map((g, gi) => (
            <div key={g.cat} className="faq-group reveal">
              <div className="faq-group-head">
                <span className="faq-group-num mono">§{String(gi+1).padStart(2,'0')}</span>
                <h2 className="faq-group-title mono">{g.cat.replace('_', ' ').toLowerCase()}</h2>
                <span className="faq-group-line" />
              </div>
              <div className="faq-list">
                {g.qs.map((q, i) => {
                  const id = g.cat.toLowerCase() + '-' + i;
                  return (
                    <FAQItem
                      key={id}
                      num={String(i+1).padStart(2,'0')}
                      q={q.q} a={q.a}
                      isOpen={openId === id}
                      onToggle={() => setOpenId(openId === id ? null : id)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-cta">
        <div className="wrap">
          <div className="band-inner reveal">
            <div>
              <h2 className="band-title serif">Question we missed?</h2>
              <p style={{color: 'var(--fg-2)', fontSize: 16, marginTop: 14, maxWidth: 480}}>
                Email us. We answer ourselves — never an assistant, never a form.
              </p>
            </div>
            <a className="cta-primary big" href="mailto:hello@agenticbuilders.studio">
              <span>hello@agenticbuilders.studio</span><span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>

      <SharedFooter tweaks={tweaks} />
    </div>
  );
}

(function injectFAQCSS(){
  if (document.getElementById('faq-css')) return;
  const css = `
  .faq-section { padding: 80px 0 40px; }
  .faq-group { margin-bottom: 80px; }
  .faq-group-head { display: flex; align-items: center; gap: 18px; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--line); }
  .faq-group-num { color: var(--accent); font-size: 12px; letter-spacing: 0.1em; }
  .faq-group-title { font-size: 14px; letter-spacing: 0.18em; color: var(--fg); margin: 0; }
  .faq-group-line { flex: 1; height: 1px; background: var(--line); }

  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-q {
    display: grid; grid-template-columns: 48px 1fr 32px;
    gap: 24px; align-items: center;
    width: 100%; background: transparent; border: 0;
    text-align: left; cursor: pointer;
    padding: 28px 0;
    color: var(--fg);
    transition: padding .3s, color .3s;
  }
  .faq-q:hover { padding-left: 12px; }
  .faq-q:hover .faq-num { color: var(--accent); }
  .faq-num { font-size: 12px; color: var(--fg-3); transition: color .25s; }
  .faq-q-text { font-size: clamp(22px, 2.4vw, 30px); line-height: 1.25; letter-spacing: -0.01em; }
  .faq-toggle { width: 22px; height: 22px; position: relative; transition: transform .35s cubic-bezier(.2,.7,.2,1); }
  .faq-toggle span {
    position: absolute; left: 50%; top: 50%; background: var(--fg-2);
    transition: transform .35s cubic-bezier(.2,.7,.2,1), background .25s;
  }
  .faq-toggle span:nth-child(1) { width: 14px; height: 1px; transform: translate(-50%, -50%); }
  .faq-toggle span:nth-child(2) { width: 1px; height: 14px; transform: translate(-50%, -50%); }
  .faq-item.is-open .faq-toggle { transform: rotate(90deg); }
  .faq-item.is-open .faq-toggle span:nth-child(2) { transform: translate(-50%, -50%) scaleY(0); }
  .faq-item.is-open .faq-toggle span { background: var(--accent); }

  .faq-a-wrap {
    display: grid; grid-template-rows: 0fr;
    transition: grid-template-rows .45s cubic-bezier(.2,.7,.2,1);
  }
  .faq-item.is-open .faq-a-wrap { grid-template-rows: 1fr; }
  .faq-a { overflow: hidden; }
  .faq-a p {
    color: var(--fg-2); font-size: 16px; line-height: 1.65;
    max-width: 720px;
    margin: 0;
    padding: 0 0 32px 72px;
    opacity: 0; transform: translateY(-6px);
    transition: opacity .4s ease .1s, transform .4s ease .1s;
  }
  .faq-item.is-open .faq-a p { opacity: 1; transform: none; }

  .faq-cta { padding: 100px 0; border-top: 1px solid var(--line); background: var(--bg-1); }
  @media (max-width: 700px) {
    .faq-q { grid-template-columns: 32px 1fr 22px; gap: 14px; }
    .faq-a p { padding-left: 46px; }
  }
  `;
  const s = document.createElement('style'); s.id='faq-css'; s.textContent=css;
  document.head.appendChild(s);
})();

function FAQApp() {
  const [tweaks, setTweak] = useTweaks(window.__TWEAKS__);
  return (
    <>
      <FAQPage tweaks={tweaks} />
      <Tweaks tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<FAQApp />);
