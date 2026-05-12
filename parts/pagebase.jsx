/* Shared section-page primitives used by Solutions / Services / Pricing / Insights / About / Contact */
const { useState: useShS } = React;

function PageHero({ crumb, eyebrow, title, italWord, sub }) {
  // title contains '{X}' placeholder for accented italic word
  return (
    <section className="page-hero">
      <div className="grid-bg" />
      <div className="page-hero-glow" />
      <div className="wrap">
        <div className="page-hero-inner reveal">
          <div className="crumbs">
            <a href="Agency.html">home</a><span className="sep">/</span><span>{crumb}</span>
          </div>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="page-title">{title} <em className="ital">{italWord}</em>.</h1>
          <p className="page-sub">{sub}</p>
        </div>
      </div>
    </section>
  );
}

function CTABand({ title, ctaLabel, ctaHref, sub }) {
  return (
    <section className="work-cta-band reveal">
      <div className="wrap">
        <div className="band-inner">
          <div>
            <h2 className="band-title serif">{title}</h2>
            {sub && <p style={{color: 'var(--fg-2)', fontSize: 16, marginTop: 14, maxWidth: 480}}>{sub}</p>}
          </div>
          <a className="cta-primary big" href={ctaHref || 'FreeAudit.html'}>
            <span>{ctaLabel || 'Get a free audit'}</span><span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

(function injectPageBaseCSS(){
  if (document.getElementById('pgbase-css')) return;
  const css = `
  .section-pad { padding: 110px 0; border-top: 1px solid var(--line); }
  .sec-head { max-width: 760px; margin-bottom: 60px; }
  .sec-title { font-size: clamp(40px, 5.4vw, 76px); line-height: 1; margin: 18px 0 22px; letter-spacing: -0.02em; font-family: var(--serif); }
  .sec-title .ital { color: var(--accent); font-style: italic; }
  .sec-sub { color: var(--fg-2); font-size: 17px; max-width: 560px; line-height: 1.55; }

  /* Card grid */
  .card-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); }
  .card-grid.cols-2 { grid-template-columns: 1fr 1fr; }
  .card-cell {
    padding: 36px 30px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    position: relative; transition: background .3s;
  }
  .card-cell:hover { background: var(--bg-1); }
  .card-cell::before { content: ""; position: absolute; top: 0; left: 0; height: 2px; width: 0; background: var(--accent); transition: width .4s; }
  .card-cell:hover::before { width: 100%; }
  .cc-num { font-family: var(--mono); font-size: 12px; color: var(--fg-3); letter-spacing: 0.1em; margin-bottom: 16px; }
  .cc-tag { font-family: var(--mono); font-size: 10px; color: var(--accent); letter-spacing: 0.15em; margin-bottom: 12px; }
  .cc-title { font-family: var(--serif); font-size: 28px; line-height: 1.15; margin: 0 0 14px; letter-spacing: -0.01em; }
  .cc-desc { color: var(--fg-2); font-size: 14px; line-height: 1.6; margin: 0 0 22px; min-height: 80px; }
  .cc-meta { display: flex; gap: 16px; padding-top: 16px; border-top: 1px dashed var(--line); font-family: var(--mono); font-size: 11px; color: var(--fg-3); flex-wrap: wrap; }
  .cc-meta b { color: var(--fg); font-weight: 500; }
  @media (max-width: 1100px) { .card-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 700px)  { .card-grid, .card-grid.cols-2 { grid-template-columns: 1fr; } }
  `;
  const s = document.createElement('style'); s.id='pgbase-css'; s.textContent=css;
  document.head.appendChild(s);
})();
