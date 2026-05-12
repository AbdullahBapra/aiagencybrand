/* Solutions page — by function */
const SOLUTIONS_DATA = [
  { num:'01', tag:'OPERATIONS', title:'Operations Automation', desc:'Replace SOPs with self-running systems. Invoicing, scheduling, vendor management, compliance reporting — all owned by agents, supervised by your team.', stack:['Temporal','Slack','Netsuite','Custom rules'], outcome:'–62% manual ops hours' },
  { num:'02', tag:'SALES', title:'Sales Automation', desc:'Lead qualification, outbound personalization, follow-up sequencing, CRM hygiene. Your reps stop selling and start closing.', stack:['HubSpot/Salesforce','Voice agents','LinkedIn','Clay'], outcome:'+3.4× pipeline coverage' },
  { num:'03', tag:'SUPPORT', title:'Support Automation', desc:'Tier-1 handled before tickets open. Cited answers from your docs + product. Smart escalation when humans matter.', stack:['Zendesk/Intercom','RAG','Voice agents'], outcome:'74% deflection, no CSAT drop' },
  { num:'04', tag:'ONBOARDING', title:'Onboarding Automation', desc:'New users to activated in hours, not weeks. Personalized walkthroughs, account setup, integration assistance.', stack:['Product agents','Loom','Email','Slack'], outcome:'2.8× activation rate' },
  { num:'05', tag:'E-COMMERCE', title:'E-commerce Automation', desc:'Catalog enrichment, returns processing, ad creative generation, customer reactivation. End-to-end revenue ops.', stack:['Shopify','Klaviyo','Vision agents'], outcome:'+19% repeat purchase rate' },
];

function SolutionsPg({ tweaks }) {
  return (
    <div className="page-enter" data-screen-label="Solutions">
      <SharedTopBar active="solutions" tweaks={tweaks} />
      <PageHero crumb="solutions" eyebrow="[ §01 — BY FUNCTION · 5 SOLUTIONS ]" title="Solutions, by" italWord="function" sub="Cross-functional automation programs. Pick the team. We bring the playbook." />
      <section className="section-pad" style={{paddingTop: 60}}>
        <div className="wrap">
          <div className="reveal-stagger" style={{display:'flex', flexDirection:'column'}}>
            {SOLUTIONS_DATA.map((s, i) => (
              <article key={s.num} className={"work-row " + (i%2 ? "is-right" : "is-left")}>
                <div className="work-cover" style={{padding:'40px', background:'#0e0e0e', display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <div style={{fontFamily:'var(--serif)', fontSize:'120px', color:'var(--accent)', opacity:0.15, lineHeight:1}}>{s.num}</div>
                </div>
                <div className="work-text">
                  <div className="work-num">{s.num} / 05</div>
                  <div className="work-client">{s.tag}</div>
                  <h3 className="work-title serif">{s.title}</h3>
                  <p className="work-body">{s.desc}</p>
                  <div style={{display:'flex', flexWrap:'wrap', gap:6, marginBottom:24}}>
                    {s.stack.map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                  <div className="work-metric">
                    <span className="wm-k mono">↳ typical outcome</span>
                    <span className="wm-v serif">{s.outcome}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTABand title="Need a different function?" sub="We've built bespoke solutions for legal, RevOps, dev tools, and more. Tell us what hurts." ctaLabel="Talk to us" />
      <SharedFooter tweaks={tweaks} />
    </div>
  );
}
function SolutionsApp() { const [t, st] = useTweaks(window.__TWEAKS__); return <><SolutionsPg tweaks={t}/><Tweaks tweaks={t} setTweak={st}/></>; }
ReactDOM.createRoot(document.getElementById('root')).render(<SolutionsApp/>);
