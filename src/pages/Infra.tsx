import { INFRASTRUCTURE_COMPONENTS, SECURITY_ITEMS } from '@/content'

function Crumb({ label }: { label: string }) {
  return <div className="crumb-row mono"><a href="#/home">Home</a><span>/</span><a href="#/infrastructure">Infrastructure</a><span>/</span><span>{label}</span></div>
}

export function Infrastructure() {
  return (
    <section className="site-section">
      <div className="site-shell">
        <div className="crumb-row mono"><a href="#/home">Home</a><span>/</span><span>Infrastructure</span></div>
        <div className="head">
          <div><span className="mono head__eyebrow">Architecture</span><h2 className="h2">Privacy is engineered in layers.</h2></div>
          <p className="head__lead">Zcash shields the assets. NEAR runs the execution. NoirProtocol binds them with isolated identity and a TEE relay.</p>
        </div>
        <div className="rows">
          {INFRASTRUCTURE_COMPONENTS.map((c, i) => (
            <div className="row" key={c.name}>
              <span className="i mono">0{i + 1}</span>
              <div><h3>{c.name}</h3><p>{c.desc}</p></div>
            </div>
          ))}
        </div>
        <div className="cta" style={{ paddingTop: 48 }}>
          <a className="btn btn--ghost" href="https://github.com/NoirWallet/NoirProtocol" target="_blank" rel="noreferrer">Read the documentation ↗</a>
        </div>
      </div>
    </section>
  )
}

export function Security() {
  return (
    <section className="site-section">
      <div className="site-shell">
        <Crumb label="Security" />
        <div className="head">
          <div><span className="mono head__eyebrow">Security</span><h2 className="h2">Boundaries, assumptions, limits.</h2></div>
          <p className="head__lead">Security is stated precisely. Nothing is described as verified until it actually is.</p>
        </div>
        <div className="rows">
          {SECURITY_ITEMS.map((s, i) => (
            <div className="row" key={s}>
              <span className="i mono">0{i + 1}</span>
              <div><p>{s}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Explorer() {
  return (
    <section className="site-section">
      <div className="site-shell">
        <Crumb label="Explorer" />
        <div className="head">
          <div><span className="mono head__eyebrow">Explorer</span><h2 className="h2">Public, verifiable state.</h2></div>
          <p className="head__lead">An entry point to the protocol's public information. Confidential assets and user data are never shown.</p>
        </div>
        <div className="stack">
          <div className="stack-item"><h3>NoirRoot Checkpoint</h3><p>Public state anchoring.</p></div>
          <div className="stack-item"><h3>Public Authorization Commitments</h3><p>Verifiable authorization records.</p></div>
          <div className="stack-item"><h3>Cross-chain state</h3><p>Supported public disclosures.</p></div>
          <div className="stack-item"><h3>Protocol verification tools</h3><p>Independent verification utilities.</p></div>
        </div>
      </div>
    </section>
  )
}

export function Stats() {
  const metrics = [
    ['Protocol transactions', '—'],
    ['Cross-chain volume', '—'],
    ['Supported assets', '—'],
    ['Integrated applications', '—'],
    ['Network activity', '—'],
  ]
  return (
    <section className="site-section">
      <div className="site-shell">
        <Crumb label="Stats" />
        <div className="head">
          <div><span className="mono head__eyebrow">Network Statistics</span><h2 className="h2">Verifiable numbers only.</h2></div>
          <p className="head__lead">Protocol metrics are separated from wallet metrics. Wallet users are not protocol users.</p>
        </div>
        <div className="stats">
          {metrics.map(([l, v]) => (
            <div className="stat" key={l}><b>{v}</b><span className="mono">{l}</span></div>
          ))}
        </div>
        <p className="head__lead" style={{ marginTop: 24, maxWidth: '60ch' }}>Live figures will be published once reliable data is available. Empty numbers are not shown.</p>
      </div>
    </section>
  )
}
