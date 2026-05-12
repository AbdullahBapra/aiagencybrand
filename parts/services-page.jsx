/* Services page — 6 service offerings */
const SERVICES_DATA = [
  { id:'voice', num:'01', tag:'AI VOICE AGENTS', title:'AI Voice Agents', desc:'Inbound + outbound voice agents that book calls, qualify leads, and resolve tickets — indistinguishable from your best rep.', meta:['<2s latency','Multi-language','HIPAA-ready'] },
  { id:'automation', num:'02', tag:'AUTOMATION SYSTEMS', title:'Automation Systems', desc:'Replace the 40 hours/week your team loses to copy-paste. Durable, observable, owned by you.', meta:['Cross-system','Rollback safe','99.97% SLA'] },
  { id:'agents', num:'03', tag:'CUSTOM AI AGENTS', title:'Custom AI Agents', desc:'Production-grade agents that execute multi-step work — research, draft, decide, ship. Not chatbots.', meta:['Tool use','Memory','Eval suite'] },
  { id:'rag', num:'04', tag:'RAG SYSTEMS', title:'RAG Systems', desc:'Search-grounded answers over your private knowledge. Cited, versioned, permissioned.', meta:['Per-row ACLs','Hybrid search','Citations'] },
  { id:'growth', num:'05', tag:'AI GROWTH (GEO/AEO)', title:'AI Growth Systems', desc:'Be the source LLMs cite. Win answer slots in Perplexity, ChatGPT, Claude, AI Overviews.', meta:['Citation share','Schema audit','Weekly report'] },
  { id:'bi', num:'06', tag:'BI & REPORTING', title:'BI & Reporting', desc:'AI-native dashboards that explain themselves. Ask questions in English, get cited answers.', meta:['Natural language','Auto-charts','Slack digests'] },
];

function ServicesPg({ tweaks }) {
  return (
    <div className="page-enter" data-screen-label="Services">
      <SharedTopBar active="services" tweaks={tweaks} />
      <PageHero crumb="services" eyebrow="[ §01 — CAPABILITIES · 6 SERVICES ]" title="What we" italWord="build" sub="Six capabilities, one studio. Every retainer pulls from the same toolkit." />
      <section className="section-pad" style={{paddingTop: 60}}>
        <div className="wrap">
          <div className="card-grid reveal-stagger">
            {SERVICES_DATA.map(s => (
              <article key={s.id} id={s.id} className="card-cell">
                <div className="cc-num">{s.num} / 06</div>
                <div className="cc-tag">{s.tag}</div>
                <h3 className="cc-title">{s.title}</h3>
                <p className="cc-desc">{s.desc}</p>
                <div className="cc-meta">{s.meta.map(m => <span key={m}><b>·</b> {m}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTABand title="Which one's yours?" ctaLabel="Book a fit call" />
      <SharedFooter tweaks={tweaks} />
    </div>
  );
}
function ServicesApp() { const [t, st] = useTweaks(window.__TWEAKS__); return <><ServicesPg tweaks={t}/><Tweaks tweaks={t} setTweak={st}/></>; }
ReactDOM.createRoot(document.getElementById('root')).render(<ServicesApp/>);
