import { MODES, HOME_SECTIONS } from '@/content'

export default function PrivacyOverview() {
  return (
    <section className="site-section">
      <div className="site-shell">
        <div className="crumb-row mono"><a href="#/home">Home</a><span>/</span><span>Privacy</span></div>
        <div className="head">
          <div><span className="mono head__eyebrow">Privacy</span><h2 className="h2">Privacy is the foundation<br />of NoirProtocol.</h2></div>
          <p className="head__lead">Not an add-on. The entire protocol is built around isolating your original funding identity from your on-chain activity.</p>
        </div>

        <div className="head">
          <div><span className="mono head__eyebrow">Why privacy matters</span><h2 className="h2">Public finance exposes you.</h2></div>
          <p className="head__lead">On transparent chains, every trade, loan and transfer reveals identity and holdings. NoirProtocol separates what should stay private from what must be public.</p>
        </div>

        <div className="head">
          <div><span className="mono head__eyebrow">Privacy by design</span><h2 className="h2">Layered, not bolted on.</h2></div>
        </div>
        <div className="levels">
          {HOME_SECTIONS.privacyByDesign.map(p => (
            <div className="level" key={p.name}><h3>{p.name}</h3><p>{p.desc}</p></div>
          ))}
        </div>

        <div className="mode-grid" style={{ marginTop: 64 }}>
          {(['anonymous', 'confidential'] as const).map(m => (
            <div className="mode-card" key={m}>
              <span className="mono">{MODES[m].name}</span>
              <h3>{MODES[m].heading}</h3>
              <p>{MODES[m].summary}</p>
              <a className="btn btn--ghost" href={`#/privacy/${m}`}>Explore {MODES[m].name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
