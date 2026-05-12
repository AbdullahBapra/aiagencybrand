/* Pricing page — 3 tiers + custom retainer */
const TIERS = [
  { name:'Audit', price:'$0', period:'free · 30 min', tag:'STARTER', desc:'A no-pitch diagnostic. We map the highest-ROI automation in your business.', features:['30-minute strategy call','Written opportunity map','3 quick-win recommendations','No commitment'], cta:'Book free audit', href:'FreeAudit.html' },
  { name:'Sprint', price:'$18k', period:'fixed · 2 weeks', tag:'POPULAR', desc:'A working prototype in production. Real data, real users, real numbers.', features:['Discovery + scope','Working agent / automation','Eval suite + cost model','Handover docs','Optional retainer rollover'], cta:'Start a sprint', featured:true, href:'FreeAudit.html' },
  { name:'Retainer', price:'$35k+', period:'/ month', tag:'SCALE', desc:'Embedded team. We operate, iterate, and own the outcomes alongside you.', features:['2–3 senior builders','Quarterly roadmap','Shared dashboards','Outcome-based fee (m4+)','On-call SLA'], cta:'Discuss retainer', href:'Contact.html' },
];

function PricingPg({ tweaks }) {
  return (
    <div className="page-enter" data-screen-label="Pricing">
      <SharedTopBar active="pricing" tweaks={tweaks} />
      <PageHero crumb="pricing" eyebrow="[ §01 — TRANSPARENT PRICING ]" title="Pricing without" italWord="bullshit" sub="Three ways to work with us. Pick the one that matches your risk appetite. Switch up after 30 days if you want." />

      <section className="section-pad" style={{paddingTop: 40}}>
        <div className="wrap">
          <div className="tier-grid reveal-stagger">
            {TIERS.map(t => (
              <article key={t.name} className={"tier " + (t.featured ? "is-featured" : "")}>
                <div className="tier-tag mono">{t.tag}</div>
                <h3 className="tier-name serif">{t.name}</h3>
                <div className="tier-price"><span className="tp-num serif">{t.price}</span><span className="tp-per mono">{t.period}</span></div>
                <p className="tier-desc">{t.desc}</p>
                <ul className="tier-feats">
                  {t.features.map(f => <li key={f}><span className="b-dot">+</span>{f}</li>)}
                </ul>
                <a className={"tier-cta " + (t.featured ? "is-primary" : "")} href={t.href}>
                  <span>{t.cta}</span><span className="arr">→</span>
                </a>
              </article>
            ))}
          </div>

          <div className="price-faq reveal">
            <div className="pf-row">
              <div className="pf-q mono">// what's included in every engagement</div>
              <div className="pf-a">Code in your repo · evals · cost ceilings · runbook · pair-programmed handover · access to Linear/Slack</div>
            </div>
            <div className="pf-row">
              <div className="pf-q mono">// what's billed-through at cost</div>
              <div className="pf-a">Model API usage · cloud infra · third-party tools. We never mark up. Receipts on request.</div>
            </div>
            <div className="pf-row">
              <div className="pf-q mono">// outcome-based fee</div>
              <div className="pf-a">Available from month 4 of retainer. Portion of fee tied to a measurable: ops hours saved, citation share, throughput shipped.</div>
            </div>
          </div>
        </div>
      </section>

      <CTABand title="Not sure which tier?" sub="Take the free audit. We'll tell you which tier fits your problem — even if the answer is none of them." ctaLabel="Free audit" />
      <SharedFooter tweaks={tweaks} />
    </div>
  );
}

(function injectPricingCSS(){
  if (document.getElementById('price-css')) return;
  const css = `
  .tier-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 80px; }
  .tier { background: var(--bg-1); border: 1px solid var(--line-2); padding: 36px 30px; position: relative; transition: transform .3s, border-color .3s; display: flex; flex-direction: column; }
  .tier:hover { transform: translateY(-4px); border-color: var(--fg-3); }
  .tier.is-featured { border-color: var(--accent); background: linear-gradient(180deg, var(--accent-soft), var(--bg-1) 40%); }
  .tier.is-featured::before { content: ""; position: absolute; top: -1px; left: 0; right: 0; height: 2px; background: var(--accent); }
  .tier-tag { font-size: 10px; color: var(--accent); letter-spacing: 0.18em; margin-bottom: 14px; }
  .tier-name { font-size: 32px; margin: 0 0 22px; line-height: 1; }
  .tier-price { display: flex; align-items: baseline; gap: 10px; padding-bottom: 24px; border-bottom: 1px solid var(--line); margin-bottom: 24px; }
  .tp-num { font-size: 56px; line-height: 1; letter-spacing: -0.025em; color: var(--fg); }
  .tp-per { font-size: 11px; color: var(--fg-3); letter-spacing: 0.05em; }
  .tier-desc { color: var(--fg-2); font-size: 14px; line-height: 1.55; margin: 0 0 24px; min-height: 60px; }
  .tier-feats { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
  .tier-feats li { color: var(--fg); font-size: 13px; display: flex; gap: 10px; align-items: baseline; }
  .tier-cta { display: inline-flex; align-items: center; justify-content: center; gap: 12px; padding: 14px 18px; border: 1px solid var(--fg-2); color: var(--fg); font-family: var(--mono); font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer; transition: all .25s; }
  .tier-cta:hover { background: var(--fg); color: var(--bg); }
  .tier-cta.is-primary { background: var(--accent); color: #1a0f00; border-color: var(--accent); }
  .tier-cta.is-primary:hover { box-shadow: 0 0 30px var(--accent-soft); transform: translateY(-1px); }
  .tier-cta .arr { transition: transform .2s; }
  .tier-cta:hover .arr { transform: translateX(4px); }

  .price-faq { border-top: 1px solid var(--line); }
  .pf-row { display: grid; grid-template-columns: 280px 1fr; gap: 40px; padding: 28px 0; border-bottom: 1px solid var(--line); align-items: baseline; }
  .pf-q { font-size: 12px; color: var(--accent); letter-spacing: 0.06em; }
  .pf-a { color: var(--fg-2); font-size: 16px; line-height: 1.55; max-width: 680px; }
  @media (max-width: 1100px) { .tier-grid { grid-template-columns: 1fr; } .pf-row { grid-template-columns: 1fr; gap: 12px; } }
  `;
  const s = document.createElement('style'); s.id='price-css'; s.textContent=css;
  document.head.appendChild(s);
})();

function PricingApp() { const [t, st] = useTweaks(window.__TWEAKS__); return <><PricingPg tweaks={t}/><Tweaks tweaks={t} setTweak={st}/></>; }
ReactDOM.createRoot(document.getElementById('root')).render(<PricingApp/>);
