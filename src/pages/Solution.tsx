import { BRAND, type Solution } from '@/content'

export default function Solution({ solution }: { solution: Solution }) {
  return (
    <section className="site-section">
      <div className="site-shell">
        <div className="crumb-row mono">
          <a href="#/home">Home</a><span>/</span><a href="#/privacy">Privacy</a><span>/</span><span>{solution.name}</span>
        </div>
        <div className="head">
          <div>
            <span className="mono head__eyebrow">{solution.position}</span>
            <h2 className="h2">{solution.heading}</h2>
          </div>
          <p className="head__lead">{solution.summary}</p>
        </div>

        <div className="mode-grid" style={{ marginBottom: 64 }}>
          <div className="mode-card">
            <span className="mono">Anonymous Mode</span>
            <h3>Anonymous funding &amp; identity.</h3>
            <p>Use {solution.name.toLowerCase()} without exposing your original Zcash funding identity.</p>
          </div>
          <div className="mode-card">
            <span className="mono">Confidential Mode</span>
            <h3>Enhanced privacy.</h3>
            <p>Further protect supported holdings and execution, where confidential infrastructure is connected.</p>
          </div>
        </div>

        <div className="head">
          <div><span className="mono head__eyebrow">What it covers</span><h2 className="h2">Overview</h2></div>
        </div>
        <div className="stack">
          {solution.benefits.map(b => (
            <div className="stack-item" key={b}><p>{b}</p></div>
          ))}
        </div>

        <div className="head">
          <div><span className="mono head__eyebrow">Conceptual flow</span><h2 className="h2">How it works</h2></div>
        </div>
        <div className="stack">
          {solution.howItWorks.map((s, i) => (
            <div className="stack-item" key={s}>
              <span className="mono">0{i + 1}</span>
              <h3>{s}</h3>
            </div>
          ))}
        </div>

        <div className="head">
          <div><span className="mono head__eyebrow">Status</span><h2 className="h2">{solution.status}</h2></div>
          <p className="head__lead">{solution.status === 'Live' ? 'Available now in NoirWallet.' : solution.status === 'Beta' ? 'Open for testing with confirmed integrations.' : 'Planned — not yet available. The button below will route to supported apps once live.'}</p>
        </div>

        <div className="cta" style={{ paddingTop: 48 }}>
          <h2 className="h2">Explore {solution.name} in {BRAND.wallet}.</h2>
          <div style={{ marginTop: 28 }}>
            <a className="btn btn--fill" href="#/privacy">{solution.status === 'Planned' ? 'View roadmap' : `Explore ${solution.name} ↗`}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
