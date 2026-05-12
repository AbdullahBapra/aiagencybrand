/* Marquee — infinite tools/clients ribbon */
function Marquee() {
  const items = [
    'OPENAI', 'ANTHROPIC', 'LANGGRAPH', 'PINECONE',
    'NEXT.JS', 'SUPABASE', 'TEMPORAL', 'BROWSERBASE',
    'POSTHOG', 'VERCEL', 'INNGEST', 'MODAL'
  ];
  const row = [...items, ...items];
  return (
    <div className="marquee" data-screen-label="Marquee">
      <div className="marquee-edge marquee-edge-l" />
      <div className="marquee-edge marquee-edge-r" />
      <div className="marquee-track">
        {row.map((x, i) => (
          <div key={i} className="marquee-item">
            <span className="m-dot" />
            <span>{x}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

(function injectMarqueeCSS(){
  if (document.getElementById('mq-css')) return;
  const css = `
  .marquee {
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    overflow: hidden; position: relative;
    background: var(--bg-1);
  }
  .marquee-track {
    display: flex; gap: 48px;
    padding: 22px 0;
    animation: mq 32s linear infinite;
    width: max-content;
  }
  .marquee-item {
    display: inline-flex; align-items: center; gap: 14px;
    font-family: var(--mono); font-size: 13px;
    color: var(--fg-2);
    letter-spacing: 0.12em;
    white-space: nowrap;
  }
  .m-dot { width: 4px; height: 4px; background: var(--accent); display: inline-block; }
  @keyframes mq { to { transform: translateX(-50%); } }
  .marquee-edge {
    position: absolute; top: 0; bottom: 0; width: 120px;
    pointer-events: none; z-index: 2;
  }
  .marquee-edge-l { left: 0; background: linear-gradient(90deg, var(--bg-1), transparent); }
  .marquee-edge-r { right: 0; background: linear-gradient(-90deg, var(--bg-1), transparent); }
  `;
  const s = document.createElement('style'); s.id='mq-css'; s.textContent=css;
  document.head.appendChild(s);
})();
