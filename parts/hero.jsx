/* Hero — animated agent terminal + serif headline */
const HeroPart = (() => {
  const { useState, useEffect, useRef } = React;

  function Hero({ tweaks }) {
    return (
      <section className="hero" data-screen-label="Hero">
        <div className="grid-bg" />
        <div className="hero-glow" />
        <div className="wrap hero-inner">
          <div className="hero-left">
            <span className="eyebrow">[ AI OPERATIONAL SYSTEMS — REMOTE / GLOBAL ]</span>
            <h1 className="hero-title">
              <span className="line">We engineer</span>
              <span className="line"><em className="ital">AI systems</em></span>
              <span className="line">that replace work.</span>
            </h1>
            <p className="hero-sub">
              An operations-grade AI studio for teams who'd rather <span className="hl">deploy</span> than deliberate.
              Voice, automation, agents, RAG, and reporting — composed into one
              <span className="mono-tag">unified</span><span className="mono-tag">operating layer</span> for your business.
            </p>
            <div className="hero-cta-row">
              <a className="cta-primary" href="FreeAudit.html">
                <span>Get a free audit</span>
                <span className="arr">→</span>
              </a>
              <a className="cta-link" href="Services.html">
                <span className="dot-tiny"></span> Browse services
              </a>
            </div>

            <div className="hero-meta">
              <div className="meta-col">
                <div className="meta-k">CLIENTS_SHIPPED</div>
                <div className="meta-v serif">42<span className="meta-sup">+</span></div>
              </div>
              <div className="meta-col">
                <div className="meta-k">AGENTS_LIVE</div>
                <div className="meta-v serif">128</div>
              </div>
              <div className="meta-col">
                <div className="meta-k">AVG_TIME_TO_SHIP</div>
                <div className="meta-v serif">19<span className="meta-sup">d</span></div>
              </div>
              <div className="meta-col">
                <div className="meta-k">RETAINER_NPS</div>
                <div className="meta-v serif">71</div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <AgentTerminal />
          </div>
        </div>

        <div className="hero-scroll-cue">
          <span>scroll</span>
          <span className="line-cue"></span>
        </div>
      </section>
    );
  }

  /* Animated terminal showing an agent at work */
  function AgentTerminal() {
    const lines = [
      { t: '$ agent run --task "qualify new lead"', cls: 'cmd', d: 0 },
      { t: '◇ planning · 4 steps queued', cls: 'plan', d: 600 },
      { t: '  ↳ pull intake form + enrichment', cls: 'sub', d: 900 },
      { t: '  ↳ score against ICP rubric', cls: 'sub', d: 1200 },
      { t: '  ↳ draft WhatsApp follow-up', cls: 'sub', d: 1500 },
      { t: '  ↳ book intro on calendar', cls: 'sub', d: 1800 },
      { t: '◆ executing step 1/4 ▓▓▓▓▓▓░░░░ 64%', cls: 'exec', d: 2400, replace: true },
      { t: '◆ executing step 1/4 ▓▓▓▓▓▓▓▓▓▓ done', cls: 'ok', d: 3200, replace: true },
      { t: '◆ executing step 2/4 ▓▓▓▓▓▓░░░░ 60%', cls: 'exec', d: 3700 },
      { t: '◆ executing step 2/4 ▓▓▓▓▓▓▓▓▓▓ done', cls: 'ok', d: 4300, replace: true },
      { t: '⚑ lead scored 86/100 · ICP match', cls: 'warn', d: 4700 },
      { t: '⚑ WhatsApp sent · meeting booked thu', cls: 'pr', d: 5200 },
      { t: '✓ task complete · 38s · $0.04', cls: 'done', d: 5800 },
    ];

    const [shown, setShown] = useState([]);
    const [tick, setTick] = useState(0);

    useEffect(() => {
      const timers = lines.map((ln, i) =>
        setTimeout(() => {
          setShown(prev => {
            if (ln.replace && prev.length) {
              const copy = [...prev]; copy[copy.length - 1] = ln; return copy;
            }
            return [...prev, ln];
          });
        }, ln.d)
      );
      // Loop
      const reset = setTimeout(() => {
        setShown([]);
        setTick(t => t + 1);
      }, 8000);
      return () => { timers.forEach(clearTimeout); clearTimeout(reset); };
    }, [tick]);

    return (
      <div className="term">
        <div className="term-bar">
          <div className="term-dots">
            <span></span><span></span><span></span>
          </div>
          <div className="term-title mono">agent · session_a83f · live</div>
          <div className="term-tools mono">
            <span>tokens 12.4k</span>
            <span>·</span>
            <span>ctx 84%</span>
          </div>
        </div>
        <div className="term-body">
          {shown.map((l, i) => (
            <div key={i} className={"term-line term-" + l.cls}>{l.t}</div>
          ))}
          <div className="term-cursor">
            <span className="caret">▌</span>
          </div>
        </div>
        <div className="term-foot mono">
          <span><span className="status-dot"></span> agent_v3.2</span>
          <span>tools: 14</span>
          <span>memory: warm</span>
          <span style={{marginLeft:'auto'}}>K↑ to interrupt</span>
        </div>
      </div>
    );
  }

  return { Hero };
})();
const Hero = HeroPart.Hero;

/* Inject hero styles once */
(function injectHeroCSS(){
  if (document.getElementById('hero-css')) return;
  const css = `
  .hero { position: relative; padding: 80px 0 120px; overflow: hidden; }
  .hero-glow {
    position: absolute; pointer-events: none;
    top: 10%; left: 50%; transform: translateX(-50%);
    width: 1100px; height: 700px;
    background: radial-gradient(ellipse at center, var(--accent-soft) 0%, transparent 60%);
    filter: blur(40px);
    opacity: 1;
    z-index: 0;
  }
  .hero-inner { position: relative; z-index: 2; display: grid; grid-template-columns: 1.05fr 1fr; gap: 64px; align-items: start; padding-top: 60px; }
  .hero-left { padding-top: 20px; }
  .hero-title {
    font-family: var(--serif);
    font-size: clamp(56px, 7.6vw, 112px);
    line-height: 0.95;
    letter-spacing: -0.025em;
    margin: 22px 0 30px;
    font-weight: 400;
  }
  .hero-title .line { display: block; }
  .hero-title .ital { font-style: italic; color: var(--accent); position: relative; }
  .hero-title .ital::after {
    content: ""; position: absolute; left: 0; right: 0; bottom: -2px;
    height: 1px; background: var(--accent); opacity: 0.4;
  }
  .hero-sub {
    color: var(--fg-2);
    font-size: 17px; line-height: 1.55;
    max-width: 480px;
    margin: 0 0 36px;
  }
  .hero-sub .hl { color: var(--fg); }
  .mono-tag {
    font-family: var(--mono);
    font-size: 11px;
    padding: 2px 7px;
    border: 1px solid var(--line-2);
    border-radius: 3px;
    margin: 0 3px;
    color: var(--fg);
    background: var(--bg-2);
    letter-spacing: 0.05em;
  }
  .hero-cta-row { display: flex; align-items: center; gap: 24px; margin-bottom: 56px; }
  .cta-primary {
    background: var(--accent);
    color: #1a0f00;
    border: 0;
    padding: 14px 22px;
    font-family: var(--mono);
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    cursor: pointer;
    display: inline-flex; align-items: center; gap: 14px;
    position: relative;
    transition: transform .2s, box-shadow .2s;
    box-shadow: 0 0 0 0 var(--accent-soft);
  }
  .cta-primary:hover {
    box-shadow: 0 0 30px 0 var(--accent-soft), 0 0 0 1px var(--accent);
    transform: translateY(-1px);
  }
  .cta-primary .arr { transition: transform .2s; }
  .cta-primary:hover .arr { transform: translateX(4px); }
  .cta-link {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--fg-2);
    display: inline-flex; align-items: center; gap: 8px;
    transition: color .2s;
  }
  .cta-link:hover { color: var(--fg); }
  .dot-tiny { width: 6px; height: 6px; background: var(--accent); display: inline-block; }

  .hero-meta {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    padding: 22px 0;
    gap: 12px;
  }
  .meta-col { padding-right: 16px; }
  .meta-col + .meta-col { border-left: 1px solid var(--line); padding-left: 20px; }
  .meta-k {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--fg-3);
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .meta-v { font-size: 36px; line-height: 1; color: var(--fg); }
  .meta-sup { font-size: 16px; vertical-align: super; color: var(--accent); margin-left: 2px; }

  /* terminal */
  .hero-right { position: relative; }
  .term {
    background: linear-gradient(180deg, #131313 0%, #0d0d0d 100%);
    border: 1px solid var(--line-2);
    border-radius: 6px;
    overflow: hidden;
    box-shadow:
      0 30px 60px -20px rgba(0,0,0,0.6),
      0 0 0 1px rgba(255,122,26,0.04),
      0 0 80px -10px var(--accent-soft);
    font-family: var(--mono);
    font-size: 12.5px;
    position: relative;
  }
  .term::before {
    content: "";
    position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent 30%);
    pointer-events: none;
  }
  .term-bar {
    display: flex; align-items: center; gap: 14px;
    padding: 12px 14px;
    border-bottom: 1px solid var(--line);
    background: #0a0a0a;
  }
  .term-dots { display: flex; gap: 6px; }
  .term-dots span { width: 9px; height: 9px; border-radius: 50%; background: #2a2a2a; }
  .term-title { color: var(--fg-2); font-size: 11px; letter-spacing: 0.04em; }
  .term-tools { color: var(--fg-3); font-size: 10.5px; margin-left: auto; display: flex; gap: 6px; }
  .term-body {
    padding: 18px 18px 12px;
    min-height: 360px;
    line-height: 1.85;
    color: var(--fg-2);
  }
  .term-line { white-space: pre; opacity: 0; animation: termFade .35s forwards; }
  @keyframes termFade { to { opacity: 1; } }
  .term-cmd { color: var(--fg); }
  .term-cmd::before { content: ""; }
  .term-plan { color: var(--accent); }
  .term-sub { color: var(--fg-3); padding-left: 4px; }
  .term-exec { color: var(--fg-2); }
  .term-ok { color: #4ade80; }
  .term-warn { color: #fbbf24; }
  .term-pr { color: #93c5fd; }
  .term-done { color: var(--accent); padding-top: 6px; border-top: 1px dashed var(--line-2); margin-top: 8px; }
  .term-cursor { display: inline-block; }
  .caret {
    color: var(--accent);
    animation: blink 1s step-end infinite;
  }
  @keyframes blink { 50% { opacity: 0; } }
  .term-foot {
    display: flex; gap: 16px;
    padding: 10px 14px;
    border-top: 1px solid var(--line);
    color: var(--fg-3);
    font-size: 10.5px;
    background: #080808;
  }
  .status-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #4ade80; display: inline-block;
    margin-right: 6px;
    box-shadow: 0 0 8px #4ade80;
  }

  .hero-scroll-cue {
    position: absolute; bottom: 30px; left: 32px;
    font-family: var(--mono); font-size: 10px;
    color: var(--fg-3);
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
  .line-cue {
    width: 1px; height: 36px;
    background: linear-gradient(180deg, var(--fg-3), transparent);
    animation: scrollCue 2s ease-in-out infinite;
  }
  @keyframes scrollCue {
    0%, 100% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(8px); opacity: 0.3; }
  }

  @media (max-width: 1100px) {
    .hero-inner { grid-template-columns: 1fr; }
    .hero-meta { grid-template-columns: repeat(2, 1fr); }
    .meta-col + .meta-col { border-left: 0; padding-left: 0; }
  }
  `;
  const s = document.createElement('style');
  s.id = 'hero-css'; s.textContent = css;
  document.head.appendChild(s);
})();
