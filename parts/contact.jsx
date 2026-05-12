/* Contact — final CTA, dark, big */
function Contact({ tweaks }) {
  return (
    <section id="contact" className="contact" data-screen-label="Contact">
      <div className="grid-bg" />
      <div className="contact-glow" />
      <div className="wrap">
        <div className="contact-inner">
          <div className="contact-left">
            <span className="eyebrow">[ §05 — START ]</span>
            <h2 className="contact-title serif">
              Got a problem<br />
              <em className="ital">worth shipping?</em>
            </h2>
            <p className="contact-sub">
              30-minute intro call. We'll tell you within 48 hours whether we're the right fit
              — and if we're not, who is.
            </p>
            <div className="contact-cta-row">
              <a className="cta-primary big" href="Book.html">
                <span>Book intro call</span>
                <span className="arr">→</span>
              </a>
              <a href="mailto:hello@agenticbuilders.studio" className="cta-link">
                <span className="dot-tiny" />
                hello@agenticbuilders.studio
              </a>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-card">
              <div className="cc-head mono">
                <span className="cc-dot" /> AVAILABILITY · Q3 2026
              </div>
              <div className="cc-rows">
                <div className="cc-row">
                  <span>Discovery sprints</span>
                  <span className="cc-num"><span className="open">2</span> / 4 open</span>
                </div>
                <div className="cc-row">
                  <span>Build retainers</span>
                  <span className="cc-num"><span className="open">1</span> / 3 open</span>
                </div>
                <div className="cc-row">
                  <span>GEO/AEO programs</span>
                  <span className="cc-num"><span className="open">3</span> / 6 open</span>
                </div>
              </div>
              <div className="cc-foot mono">
                <div className="cc-foot-row"><span>typical kickoff</span><span>~2 weeks</span></div>
                <div className="cc-foot-row"><span>min engagement</span><span>$18,000</span></div>
                <div className="cc-foot-row"><span>response time</span><span>&lt; 48h</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

(function injectContactCSS(){
  if (document.getElementById('contact-css')) return;
  const css = `
  .contact { padding: 160px 0 120px; position: relative; overflow: hidden; border-top: 1px solid var(--line); }
  .contact-glow {
    position: absolute; inset: auto 0 -200px 0;
    height: 600px;
    background: radial-gradient(ellipse at center, var(--accent-soft) 0%, transparent 60%);
    pointer-events: none;
  }
  .contact-inner {
    position: relative; z-index: 2;
    display: grid; grid-template-columns: 1.2fr 1fr;
    gap: 80px; align-items: end;
  }
  .contact-title {
    font-size: clamp(56px, 8vw, 120px);
    line-height: 0.95; letter-spacing: -0.025em;
    margin: 22px 0 28px;
  }
  .contact-title .ital { color: var(--accent); font-style: italic; }
  .contact-sub {
    color: var(--fg-2); max-width: 480px;
    font-size: 17px; line-height: 1.55;
    margin: 0 0 36px;
  }
  .contact-cta-row { display: flex; gap: 28px; align-items: center; flex-wrap: wrap; }
  .cta-primary.big { padding: 18px 28px; font-size: 14px; }

  .contact-card {
    background: var(--bg-1);
    border: 1px solid var(--line-2);
    padding: 28px;
    position: relative;
  }
  .contact-card::before {
    content: ""; position: absolute; top: -1px; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
  }
  .cc-head { display: flex; align-items: center; gap: 10px; font-size: 11px; color: var(--fg-3); letter-spacing: 0.12em; padding-bottom: 18px; border-bottom: 1px solid var(--line); }
  .cc-dot { width: 8px; height: 8px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 8px #4ade80; }
  .cc-rows { padding: 16px 0; display: flex; flex-direction: column; gap: 6px; }
  .cc-row {
    display: flex; justify-content: space-between;
    font-family: var(--mono); font-size: 13px;
    color: var(--fg-2);
    padding: 10px 0;
    border-bottom: 1px dashed var(--line);
  }
  .cc-row:last-child { border-bottom: 0; }
  .cc-num { color: var(--fg); }
  .cc-num .open { color: var(--accent); }
  .cc-foot {
    padding-top: 16px;
    border-top: 1px solid var(--line);
    display: flex; flex-direction: column; gap: 6px;
  }
  .cc-foot-row {
    display: flex; justify-content: space-between;
    font-size: 11px; color: var(--fg-3);
  }
  .cc-foot-row span:last-child { color: var(--fg-2); }

  @media (max-width: 1100px) { .contact-inner { grid-template-columns: 1fr; gap: 50px; } }
  `;
  const s = document.createElement('style'); s.id='contact-css'; s.textContent=css;
  document.head.appendChild(s);
})();
