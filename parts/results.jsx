/* Results — full-bleed light section breaking from dark */
function Results() {
  const stats = [
    { v: '4.2×', k: 'Avg productivity lift', s: 'across 18 deployed agent retainers' },
    { v: '$1.4M', k: 'Annual ops savings', s: 'reported by Series-B portfolio client' },
    { v: '11d', k: 'Median time to first ship', s: 'from kickoff to production prototype' },
    { v: '82%', k: 'Citation share gain', s: 'on tracked LLM queries · 90-day GEO program' },
  ];

  const quotes = [
    {
      q: 'They shipped a working agent in 9 days that replaced a process our internal team had been chipping at for 8 months. Then they made themselves obsolete by training us to maintain it.',
      who: 'Maya Okafor',
      role: 'VP Engineering, Series-B fintech',
    },
    {
      q: 'We went from showing up in zero LLM citations to being the default answer for our category. The dashboard alone justified the retainer.',
      who: 'Daniel Reiss',
      role: 'Head of Growth, B2B SaaS',
    },
  ];

  return (
    <section id="results" className="results" data-screen-label="Results">
      <div className="wrap">
        <div className="res-head">
          <span className="eyebrow eyebrow-light">[ §04 — RESULTS ]</span>
          <h2 className="section-title serif res-title">
            Outcomes, not <em className="ital">outputs</em>.
          </h2>
          <p className="res-sub">
            We track every engagement on a shared dashboard.
            Fee scales with realized impact. Numbers below are 12-month aggregates across all retainers.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-num serif">{s.v}</div>
              <div className="stat-label mono">{s.k}</div>
              <div className="stat-sub">{s.s}</div>
            </div>
          ))}
        </div>

        <div className="res-chart">
          <div className="rc-head">
            <div>
              <div className="rc-label mono">CITATION_SHARE_OVER_TIME · sample client</div>
              <div className="rc-title serif">From invisible to default answer in 14 weeks.</div>
            </div>
            <div className="rc-legend mono">
              <span><span className="dot ours" /> agenticbuilders client</span>
              <span><span className="dot peer" /> category average</span>
            </div>
          </div>
          <ChartSVG />
        </div>

        <div className="quotes">
          {quotes.map((q, i) => (
            <figure key={i} className="quote">
              <blockquote className="serif">"{q.q}"</blockquote>
              <figcaption>
                <span className="q-who">{q.who}</span>
                <span className="q-role mono">— {q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChartSVG() {
  // Two trend lines on a grid
  const W = 1200, H = 320, P = 40;
  const ours = [8,9,11,14,18,22,28,35,42,50,58,66,74,81];
  const peers = [22,23,24,24,26,27,27,28,29,29,30,30,31,32];
  const xs = (i, n) => P + (i * (W - 2*P)) / (n - 1);
  const ys = v => H - P - (v / 100) * (H - 2*P);
  const path = arr => arr.map((v, i) => `${i===0?'M':'L'}${xs(i, arr.length)},${ys(v)}`).join(' ');
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="chart-svg" preserveAspectRatio="none">
      {/* grid */}
      {[0,25,50,75,100].map(y => (
        <g key={y}>
          <line x1={P} x2={W-P} y1={ys(y)} y2={ys(y)} stroke="#d6d2c8" strokeDasharray="2 4" />
          <text x={P-10} y={ys(y)+4} fontSize="11" textAnchor="end" fill="#76726b" fontFamily="JetBrains Mono">{y}%</text>
        </g>
      ))}
      {/* peer line */}
      <path d={path(peers)} stroke="#76726b" fill="none" strokeWidth="1.5" strokeDasharray="4 4" />
      {/* ours line + area */}
      <path d={`${path(ours)} L${xs(ours.length-1, ours.length)},${ys(0)} L${xs(0, ours.length)},${ys(0)} Z`} fill="var(--accent)" opacity="0.12" />
      <path d={path(ours)} stroke="var(--accent)" fill="none" strokeWidth="2.5" />
      {ours.map((v, i) => (
        <circle key={i} cx={xs(i, ours.length)} cy={ys(v)} r="3" fill="var(--accent)" />
      ))}
      {/* x labels */}
      {['w0','w2','w4','w6','w8','w10','w12','w14'].map((l, i) => (
        <text key={l} x={xs(i*2, 14) - 8} y={H-12} fontSize="10" fill="#76726b" fontFamily="JetBrains Mono">{l}</text>
      ))}
    </svg>
  );
}

(function injectResultsCSS(){
  if (document.getElementById('res-css')) return;
  const css = `
  .results {
    background: var(--light-bg);
    color: var(--light-fg);
    padding: 140px 0;
    position: relative;
    border-top: 1px solid #1f1f1f;
    border-bottom: 1px solid #1f1f1f;
  }
  .results::before {
    content: ""; position: absolute; inset: 0;
    background-image:
      linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px);
    background-size: 80px 80px;
    pointer-events: none;
  }
  .res-head { max-width: 720px; margin-bottom: 70px; position: relative; }
  .eyebrow-light { color: #5a564d; }
  .eyebrow-light::before { background: #1a1a1a; }
  .res-title { color: var(--light-fg); }
  .res-title .ital { color: #c45a0a; }
  .res-sub { color: #4a4742; font-size: 17px; max-width: 560px; line-height: 1.55; }

  .stats-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    margin-bottom: 90px;
    border-top: 1px solid #d6d2c8;
    border-bottom: 1px solid #d6d2c8;
    position: relative;
  }
  .stat-card { padding: 36px 28px 36px 0; border-right: 1px solid #d6d2c8; }
  .stat-card:last-child { border-right: 0; padding-right: 0; }
  .stat-num { font-size: 72px; line-height: 1; letter-spacing: -0.03em; color: #1a1a1a; margin-bottom: 14px; }
  .stat-label { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #1a1a1a; margin-bottom: 8px; }
  .stat-sub { font-size: 13px; color: #5a564d; line-height: 1.5; max-width: 220px; }

  .res-chart {
    background: #fff;
    border: 1px solid #d6d2c8;
    padding: 32px;
    margin-bottom: 80px;
    position: relative;
  }
  .rc-head { display: flex; justify-content: space-between; align-items: end; margin-bottom: 24px; }
  .rc-label { font-size: 11px; letter-spacing: 0.12em; color: #76726b; margin-bottom: 8px; text-transform: uppercase; }
  .rc-title { font-size: 30px; line-height: 1.15; max-width: 420px; }
  .rc-legend { display: flex; gap: 20px; font-size: 11px; color: #5a564d; }
  .rc-legend .dot { display: inline-block; width: 12px; height: 2px; vertical-align: middle; margin-right: 6px; }
  .rc-legend .ours { background: var(--accent); }
  .rc-legend .peer { background: #76726b; }
  .chart-svg { width: 100%; height: 320px; display: block; }

  .quotes { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
  .quote {
    margin: 0;
    padding-top: 26px;
    border-top: 1px solid #1a1a1a;
  }
  .quote blockquote {
    font-size: 24px; line-height: 1.35; letter-spacing: -0.01em;
    margin: 0 0 22px; color: #1a1a1a;
  }
  .quote figcaption { display: flex; gap: 10px; align-items: baseline; flex-wrap: wrap; }
  .q-who { font-weight: 500; color: #1a1a1a; font-size: 13px; }
  .q-role { font-size: 11px; color: #5a564d; letter-spacing: 0.05em; }

  @media (max-width: 1100px) {
    .stats-grid { grid-template-columns: 1fr 1fr; }
    .stat-card:nth-child(2) { border-right: 0; }
    .quotes { grid-template-columns: 1fr; }
    .rc-head { flex-direction: column; align-items: start; gap: 16px; }
  }
  `;
  const s = document.createElement('style'); s.id='res-css'; s.textContent=css;
  document.head.appendChild(s);
})();
