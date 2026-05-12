/* About page */
const TEAM = [
  { init:'MR', name:'Mara Reyes', role:'Founder · Agents lead', bio:'Built agent infra at two AI-native startups. Wrote the framework you\'ve probably read.' },
  { init:'JT', name:'Julien Tan',  role:'Founder · GEO/AEO lead', bio:'10 years SEO before LLMs ate it. Now obsessed with citation share.' },
  { init:'AK', name:'Aisha Khan',  role:'Principal builder', bio:'Spent 6 years on payments infra. Ships durable workflows in her sleep.' },
  { init:'DV', name:'Diego Vargas', role:'Principal builder', bio:'Voice-agent native. <800ms or it didn\'t happen.' },
];

const VALUES = [
  { n:'01', t:'Ship beats pitch.', d:'We don\'t do slide-deck deliverables. Every engagement ends with code running in production.' },
  { n:'02', t:'Boring beats clever.', d:'We pick the framework with the best logs, not the best demo.' },
  { n:'03', t:'Owned, not rented.', d:'Your code, your repo, your knowledge. We pair-program the handover.' },
  { n:'04', t:'Honest math.', d:'We give exact prices, exact timelines, exact cost-ceilings. No range estimates.' },
];

function AboutPg({ tweaks }) {
  return (
    <div className="page-enter" data-screen-label="About">
      <SharedTopBar active="about" tweaks={tweaks} />
      <PageHero crumb="about" eyebrow="[ §01 — STUDIO ]" title="A small studio that" italWord="ships" sub="Four senior builders. Forty-something engagements. Zero juniors, zero outsource. We picked depth over headcount." />

      <section className="section-pad" style={{paddingTop: 40}}>
        <div className="wrap">
          <div className="about-grid reveal-stagger">
            <div className="about-stat"><div className="as-num serif">2024</div><div className="as-l mono">YEAR FOUNDED</div></div>
            <div className="about-stat"><div className="as-num serif">04</div><div className="as-l mono">SENIOR BUILDERS</div></div>
            <div className="about-stat"><div className="as-num serif">42+</div><div className="as-l mono">SHIPPED PROJECTS</div></div>
            <div className="about-stat"><div className="as-num serif">71</div><div className="as-l mono">RETAINER NPS</div></div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{paddingTop: 0}}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">[ §02 — TEAM ]</span>
            <h2 className="sec-title">Who you'll <em className="ital">work with</em>.</h2>
          </div>
          <div className="team-grid reveal-stagger">
            {TEAM.map(p => (
              <div key={p.init} className="team-card">
                <div className="team-av mono">{p.init}</div>
                <div className="team-name serif">{p.name}</div>
                <div className="team-role mono">{p.role}</div>
                <p className="team-bio">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">[ §03 — STANCE ]</span>
            <h2 className="sec-title">What we <em className="ital">won't</em> do.</h2>
            <p className="sec-sub">Four non-negotiables we won't bend, even for the right number.</p>
          </div>
          <div className="card-grid reveal-stagger">
            {VALUES.map(v => (
              <article key={v.n} className="card-cell">
                <div className="cc-num">{v.n}</div>
                <h3 className="cc-title">{v.t}</h3>
                <p className="cc-desc" style={{minHeight:0}}>{v.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Think we'd be a fit?" ctaLabel="Book a fit call" />
      <SharedFooter tweaks={tweaks} />
    </div>
  );
}

(function injectAboutCSS(){
  if (document.getElementById('about-css')) return;
  const css = `
  .about-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .about-stat { padding: 40px 28px; border-right: 1px solid var(--line); }
  .about-stat:last-child { border-right: 0; }
  .as-num { font-size: 64px; line-height: 1; color: var(--fg); letter-spacing: -0.025em; margin-bottom: 14px; }
  .as-l { font-size: 10px; color: var(--fg-3); letter-spacing: 0.15em; }
  .team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-top: 1px solid var(--line); }
  .team-card { padding: 32px 24px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); transition: background .3s; }
  .team-card:last-child { border-right: 0; }
  .team-card:hover { background: var(--bg-1); }
  .team-av { width: 56px; height: 56px; border-radius: 50%; background: var(--bg-2); border: 1px solid var(--accent); display: flex; align-items: center; justify-content: center; color: var(--accent); font-size: 14px; margin-bottom: 22px; }
  .team-name { font-size: 22px; line-height: 1.1; margin-bottom: 6px; }
  .team-role { font-size: 11px; color: var(--fg-3); letter-spacing: 0.06em; margin-bottom: 16px; }
  .team-bio { color: var(--fg-2); font-size: 13px; line-height: 1.55; margin: 0; }
  @media (max-width: 1100px) { .about-grid, .team-grid { grid-template-columns: 1fr 1fr; } }
  `;
  const s = document.createElement('style'); s.id='about-css'; s.textContent=css;
  document.head.appendChild(s);
})();

function AboutApp() { const [t, st] = useTweaks(window.__TWEAKS__); return <><AboutPg tweaks={t}/><Tweaks tweaks={t} setTweak={st}/></>; }
ReactDOM.createRoot(document.getElementById('root')).render(<AboutApp/>);
