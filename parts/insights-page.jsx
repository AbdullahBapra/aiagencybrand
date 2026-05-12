/* Insights — long-form essays index */
const POSTS = [
  { num:'01', tag:'AGENTS', title:'Why your "AI strategy" is just a list of demos.', date:'May 4, 2026', read:'8 min', excerpt:'A taxonomy for telling apart real automation from theatre, with a checklist you can run on your own roadmap.' },
  { num:'02', tag:'GEO', title:'Citation share is the new market share.', date:'Apr 22, 2026', read:'11 min', excerpt:'Why Perplexity, ChatGPT search, and AI Overviews are eating the funnel — and what to measure now.' },
  { num:'03', tag:'BUILDING', title:'Boring frameworks ship. Clever ones don\'t.', date:'Apr 09, 2026', read:'6 min', excerpt:'We benchmarked 12 agent frameworks across 400 production runs. The winners are surprisingly dull.' },
  { num:'04', tag:'ECONOMICS', title:'The 4-cent agent: cost ceilings for production runs.', date:'Mar 28, 2026', read:'9 min', excerpt:'Hard caps in code, prompt budgets, model routing. A practical playbook for shipping agents that don\'t bankrupt you.' },
  { num:'05', tag:'VOICE', title:'Latency is the entire product.', date:'Mar 14, 2026', read:'7 min', excerpt:'Voice agents live or die under 800ms. Here\'s the stack we\'ve standardized on after 6 deployments.' },
  { num:'06', tag:'RAG', title:'RAG is dead. Long live retrieval.', date:'Feb 27, 2026', read:'12 min', excerpt:'Why naive vector search lost. What replaced it. Hybrid retrieval, rerankers, and the role of permissions.' },
];

function InsightsPg({ tweaks }) {
  return (
    <div className="page-enter" data-screen-label="Insights">
      <SharedTopBar active="insights" tweaks={tweaks} />
      <PageHero crumb="insights" eyebrow="[ §01 — FIELD NOTES · UPDATED WEEKLY ]" title="Things we" italWord="learned" sub="Honest write-ups from the work. No newsletters, no gating, no AI-generated filler." />

      <section className="section-pad" style={{paddingTop: 40}}>
        <div className="wrap">
          <article className="feature-post reveal">
            <div className="fp-meta mono"><span>FEATURED</span><span>·</span><span>{POSTS[0].date}</span><span>·</span><span>{POSTS[0].read}</span></div>
            <h2 className="fp-title serif">{POSTS[0].title}</h2>
            <p className="fp-excerpt">{POSTS[0].excerpt}</p>
            <a href="#" className="fp-link mono underline-anim">Read essay →</a>
          </article>

          <div className="posts-list">
            {POSTS.slice(1).map((p, i) => (
              <a key={p.num} href="#" className="post-row reveal">
                <div className="pr-num mono">{p.num}</div>
                <div className="pr-tag mono">{p.tag}</div>
                <div className="pr-title serif">{p.title}</div>
                <div className="pr-meta mono">{p.date} · {p.read}</div>
                <div className="pr-arr">→</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Want this in your inbox?" sub="One essay every two weeks. Hand-written. Zero unsubscribe-bait." ctaLabel="Subscribe" ctaHref="#" />
      <SharedFooter tweaks={tweaks} />
    </div>
  );
}

(function injectInsCSS(){
  if (document.getElementById('ins-css')) return;
  const css = `
  .feature-post { padding: 50px 0; border-top: 1px solid var(--accent); border-bottom: 1px solid var(--line); margin-bottom: 40px; background: linear-gradient(180deg, var(--accent-soft), transparent 60%); padding: 50px 40px; }
  .fp-meta { font-size: 11px; color: var(--accent); letter-spacing: 0.12em; display: flex; gap: 12px; margin-bottom: 18px; }
  .fp-title { font-size: clamp(36px, 4.6vw, 60px); line-height: 1.05; margin: 0 0 18px; letter-spacing: -0.02em; max-width: 800px; }
  .fp-excerpt { color: var(--fg-2); font-size: 17px; line-height: 1.55; max-width: 640px; margin: 0 0 24px; }
  .fp-link { font-size: 13px; color: var(--accent); }
  .posts-list { display: flex; flex-direction: column; }
  .post-row { display: grid; grid-template-columns: 50px 120px 1fr auto 30px; gap: 24px; align-items: baseline; padding: 30px 0; border-bottom: 1px solid var(--line); transition: padding-left .25s, background .25s; }
  .post-row:hover { padding-left: 12px; background: linear-gradient(90deg, var(--accent-soft), transparent 60%); }
  .post-row:hover .pr-num { color: var(--accent); }
  .post-row:hover .pr-arr { color: var(--accent); transform: translateX(6px); }
  .pr-num { font-size: 13px; color: var(--fg-3); letter-spacing: 0.05em; transition: color .25s; }
  .pr-tag { font-size: 10px; color: var(--accent); letter-spacing: 0.15em; }
  .pr-title { font-size: clamp(22px, 2.4vw, 30px); line-height: 1.2; letter-spacing: -0.01em; color: var(--fg); }
  .pr-meta { font-size: 11px; color: var(--fg-3); letter-spacing: 0.04em; }
  .pr-arr { font-family: var(--mono); color: var(--fg-3); transition: all .25s; }
  @media (max-width: 900px) { .post-row { grid-template-columns: 40px 1fr 30px; } .pr-tag, .pr-meta { display: none; } }
  `;
  const s = document.createElement('style'); s.id='ins-css'; s.textContent=css;
  document.head.appendChild(s);
})();

function InsightsApp() { const [t, st] = useTweaks(window.__TWEAKS__); return <><InsightsPg tweaks={t}/><Tweaks tweaks={t} setTweak={st}/></>; }
ReactDOM.createRoot(document.getElementById('root')).render(<InsightsApp/>);
