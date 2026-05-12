/* Footer */
function Footer({ tweaks }) {
  return (
    <footer className="footer" data-screen-label="Footer">
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
              <a href="#services">Agent Development</a>
              <a href="#services">Generative Engine Optimization</a>
              <a href="#services">Answer Engine Optimization</a>
              <a href="#services">Workflow Automation</a>
            </div>
            <div>
              <div className="foot-h mono">// studio</div>
              <a href="#process">Process</a>
              <a href="#results">Results</a>
              <a href="#contact">Book a call</a>
              <a href="mailto:hello@agenticbuilders.studio">Email us</a>
            </div>
            <div>
              <div className="foot-h mono">// elsewhere</div>
              <a href="#">Substack</a>
              <a href="#">GitHub</a>
              <a href="#">Bluesky</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="foot-bigword serif">agenticbuilders</div>

        <div className="foot-bottom mono">
          <span>© 2026 agenticbuilders studio</span>
          <span>incorporated in delaware · operating remote-first</span>
          <span>v3.2 · last shipped 4h ago</span>
        </div>
      </div>
    </footer>
  );
}

(function injectFooterCSS(){
  if (document.getElementById('foot-css')) return;
  const css = `
  .footer { padding: 90px 0 28px; border-top: 1px solid var(--line); background: #060606; position: relative; overflow: hidden; }
  .foot-top { display: grid; grid-template-columns: 1fr 2fr; gap: 60px; padding-bottom: 70px; border-bottom: 1px solid var(--line); }
  .foot-brand { display: flex; gap: 14px; align-items: start; }
  .logo-mark.big { width: 22px; height: 22px; margin-top: 4px; }
  .foot-name { font-size: 28px; letter-spacing: -0.01em; }
  .foot-tag { font-size: 11px; color: var(--fg-3); margin-top: 4px; }
  .foot-cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
  .foot-cols > div { display: flex; flex-direction: column; gap: 10px; }
  .foot-h { font-size: 11px; color: var(--fg-3); letter-spacing: 0.1em; margin-bottom: 8px; }
  .foot-cols a { color: var(--fg-2); font-size: 14px; transition: color .2s; }
  .foot-cols a:hover { color: var(--accent); }
  .foot-bigword {
    font-size: clamp(80px, 18vw, 280px);
    line-height: 0.85; letter-spacing: -0.04em;
    color: transparent;
    -webkit-text-stroke: 1px var(--line-2);
    margin: 60px 0 40px;
    user-select: none;
  }
  .foot-bottom { display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; padding-top: 28px; border-top: 1px solid var(--line); font-size: 11px; color: var(--fg-3); letter-spacing: 0.04em; }
  @media (max-width: 1100px) { .foot-top { grid-template-columns: 1fr; } .foot-cols { grid-template-columns: 1fr 1fr; } }
  `;
  const s = document.createElement('style'); s.id='foot-css'; s.textContent=css;
  document.head.appendChild(s);
})();
