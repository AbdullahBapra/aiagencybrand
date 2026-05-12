/* Shared TopBar + Footer used by Work / Stack / FAQ pages */
const { useEffect: useEffectS } = React;

function applyAccent(accent) {
  document.documentElement.style.setProperty('--accent', accent);
  const hex = accent.replace('#','');
  const r = parseInt(hex.substring(0,2),16);
  const g = parseInt(hex.substring(2,4),16);
  const b = parseInt(hex.substring(4,6),16);
  document.documentElement.style.setProperty('--accent-soft', `rgba(${r},${g},${b},0.12)`);
}

function SharedTopBar({ active, tweaks }) {
  useEffectS(() => { applyAccent(tweaks.accent); }, [tweaks.accent]);
  const links = [
    { id: 'solutions', label: 'Solutions', href: 'Solutions.html' },
    { id: 'services',  label: 'Services',  href: 'Services.html' },
    { id: 'work',      label: 'Results',   href: 'Work.html' },
    { id: 'pricing',   label: 'Pricing',   href: 'Pricing.html' },
    { id: 'insights',  label: 'Insights',  href: 'Insights.html' },
    { id: 'about',     label: 'About',     href: 'About.html' },
  ];
  return (
    <nav className="topbar">
      <div className="inner">
        <a className="logo" href="Agency.html">
          <span className="logo-mark" />
          <span>{tweaks.agencyName}</span>
          <span style={{color:'var(--fg-3)', fontWeight: 400}}>/ studio</span>
        </a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.id} className={"underline-anim " + (active === l.id ? "is-active" : "")} href={l.href}>{l.label}</a>
          ))}
        </div>
        <div style={{display:'flex', alignItems:'center', gap: 14}}>
          <span className="status"><span className="dot" /> taking 2 clients · Q3</span>
          <a className="nav-cta" href="FreeAudit.html">Free audit</a>
        </div>
      </div>
    </nav>
  );
}

function SharedFooter({ tweaks }) {
  return (
    <footer className="footer reveal" data-screen-label="Footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <span className="logo-mark big" />
            <div>
              <div className="foot-name serif">{tweaks.agencyName}</div>
              <div className="foot-tag mono">// {tweaks.tagline}</div>
            </div>
          </div>
          <div className="foot-cols">
            <div>
              <div className="foot-h mono">// services</div>
              <a href="Services.html#voice">AI Voice Agents</a>
              <a href="Services.html#automation">Automation Systems</a>
              <a href="Services.html#agents">Custom AI Agents</a>
              <a href="Services.html#rag">RAG Systems</a>
              <a href="Services.html#growth">AI Growth Systems</a>
              <a href="Services.html#bi">BI &amp; Reporting</a>
            </div>
            <div>
              <div className="foot-h mono">// solutions</div>
              <a href="Solutions.html">Operations Automation</a>
              <a href="Solutions.html">Sales Automation</a>
              <a href="Solutions.html">Support Automation</a>
              <a href="Solutions.html">Onboarding Automation</a>
              <a href="Solutions.html">E-commerce Automation</a>
            </div>
            <div>
              <div className="foot-h mono">// studio</div>
              <a href="About.html">About</a>
              <a href="Work.html">Results</a>
              <a href="Pricing.html">Pricing</a>
              <a href="Insights.html">Insights</a>
              <a href="Contact.html">Contact</a>
              <a href="FreeAudit.html">Free audit</a>
            </div>
          </div>
        </div>
        <div className="foot-bigword serif">{tweaks.agencyName}</div>
        <div className="foot-bottom mono">
          <span>© 2026 {tweaks.agencyName} studio</span>
          <span>incorporated in delaware · operating remote-first</span>
          <span>v3.2 · last shipped 4h ago</span>
        </div>
      </div>
    </footer>
  );
}

(function injectSharedNavCSS(){
  if (document.getElementById('shared-nav-css')) return;
  const css = `
  .nav-links a.is-active { color: var(--accent); }
  .nav-links a.is-active::after { transform: scaleX(1); transform-origin: left; }
  .page-hero { padding: 140px 0 80px; position: relative; overflow: hidden; border-bottom: 1px solid var(--line); }
  .page-hero .grid-bg { opacity: 0.5; }
  .page-hero-glow {
    position: absolute; pointer-events: none;
    top: -100px; left: 50%; transform: translateX(-50%);
    width: 900px; height: 500px;
    background: radial-gradient(ellipse at center, var(--accent-soft) 0%, transparent 60%);
    filter: blur(40px);
  }
  .page-hero-inner { position: relative; z-index: 2; max-width: 900px; }
  .page-title {
    font-family: var(--serif);
    font-size: clamp(56px, 9vw, 132px);
    line-height: 0.95; letter-spacing: -0.025em;
    margin: 24px 0 22px; font-weight: 400;
  }
  .page-title .ital { color: var(--accent); font-style: italic; }
  .page-sub { color: var(--fg-2); font-size: 18px; max-width: 580px; line-height: 1.55; }
  .crumbs {
    font-family: var(--mono); font-size: 11px; color: var(--fg-3);
    display: flex; gap: 12px; align-items: center; margin-bottom: 12px;
    letter-spacing: 0.08em;
  }
  .crumbs a { color: var(--fg-3); transition: color .2s; }
  .crumbs a:hover { color: var(--accent); }
  .crumbs .sep { color: var(--line-2); }
  `;
  const s = document.createElement('style'); s.id='shared-nav-css'; s.textContent=css;
  document.head.appendChild(s);
})();
