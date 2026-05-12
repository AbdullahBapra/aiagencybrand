/* App entry — composes all sections */
const { useState, useEffect } = React;

function App() {
  const [tweaks, setTweak] = useTweaks(window.__TWEAKS__);

  // Set CSS vars from tweaks
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accent);
    // soft variant
    const hex = tweaks.accent.replace('#','');
    const r = parseInt(hex.substring(0,2),16);
    const g = parseInt(hex.substring(2,4),16);
    const b = parseInt(hex.substring(4,6),16);
    document.documentElement.style.setProperty('--accent-soft', `rgba(${r},${g},${b},0.12)`);
  }, [tweaks.accent]);

  return (
    <div className="page-enter" data-screen-label="Agency Landing">
      <TopBar tweaks={tweaks} />
      <div className="reveal"><Hero tweaks={tweaks} /></div>
      <div className="reveal"><Marquee /></div>
      <div className="reveal"><Services tweaks={tweaks} /></div>
      <div className="reveal"><Process /></div>
      <div className="reveal"><Results /></div>
      <div className="reveal"><Contact tweaks={tweaks} /></div>
      <div className="reveal"><Footer tweaks={tweaks} /></div>
      <Tweaks tweaks={tweaks} setTweak={setTweak} />
    </div>
  );
}

function TopBar({ tweaks }) {
  return (
    <nav className="topbar">
      <div className="inner">
        <a className="logo" href="Agency.html">
          <span className="logo-mark"></span>
          <span>{tweaks.agencyName}</span>
          <span style={{color:'var(--fg-3)', fontWeight: 400}}>/ studio</span>
        </a>
        <div className="nav-links">
          <a className="underline-anim" href="Solutions.html">Solutions</a>
          <a className="underline-anim" href="Services.html">Services</a>
          <a className="underline-anim" href="Work.html">Results</a>
          <a className="underline-anim" href="Pricing.html">Pricing</a>
          <a className="underline-anim" href="Insights.html">Insights</a>
          <a className="underline-anim" href="About.html">About</a>
        </div>
        <div style={{display:'flex', alignItems:'center', gap: 14}}>
          <span className="status"><span className="dot"></span> taking 2 clients · Q3</span>
          <a className="nav-cta" href="FreeAudit.html">Free audit</a>
        </div>
      </div>
    </nav>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
