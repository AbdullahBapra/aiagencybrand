/* Tweaks panel — accent, name, glow toggle */
function Tweaks({ tweaks, setTweak }) {
  return (
    <TweaksPanel>
      <TweakSection title="Brand">
        <TweakText label="Agency name" value={tweaks.agencyName} onChange={v => setTweak('agencyName', v)} />
        <TweakText label="Tagline" value={tweaks.tagline} onChange={v => setTweak('tagline', v)} />
      </TweakSection>
      <TweakSection title="Color">
        <TweakColor label="Accent" value={tweaks.accent} onChange={v => setTweak('accent', v)} />
        <div style={{display:'flex', gap:6, marginTop:8, flexWrap:'wrap'}}>
          {['#ff7a1a','#9d6cff','#4ade80','#3b82f6','#f43f5e','#facc15','#06b6d4','#f1ede5'].map(c => (
            <button key={c}
              onClick={() => setTweak('accent', c)}
              style={{
                width:22, height:22, borderRadius:3, background:c,
                border: tweaks.accent === c ? '2px solid #fff' : '1px solid #2a2a2a',
                cursor:'pointer', padding:0
              }}
              title={c}
            />
          ))}
        </div>
      </TweakSection>
    </TweaksPanel>
  );
}
