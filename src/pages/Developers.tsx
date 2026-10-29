import { DEVELOPER_RESOURCES, BRAND } from '@/content'

export function Build() {
  return (
    <section className="site-section">
      <div className="site-shell">
        <div className="crumb-row mono"><a href="#/home">Home</a><span>/</span><span>Developers</span></div>
        <div className="head">
          <div><span className="mono head__eyebrow">Build on Noir</span><h2 className="h2">Build for privacy-native finance.</h2></div>
          <p className="head__lead">NoirProtocol is an open protocol, not a walled wallet. Any wallet or dApp can integrate.</p>
        </div>
        <div className="levels">
          <div className="level"><h3>Anonymous &amp; Confidential</h3><p>Expose anonymous and confidential capabilities to your users through the protocol.</p></div>
          <div className="level"><h3>Wallet &amp; dApp integration</h3><p>Third-party wallets and apps integrate via the SDK and API.</p></div>
          <div className="level"><h3>Quickstart</h3><p>Get from zero to a working integration with the reference examples.</p></div>
        </div>
        <div className="cta" style={{ paddingTop: 48 }}>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="btn btn--fill" href="#/resources">Start building</a>
            <a className="btn btn--ghost" href="https://github.com/NoirWallet/NoirProtocol" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Resources() {
  return (
    <section className="site-section">
      <div className="site-shell">
        <div className="crumb-row mono"><a href="#/home">Home</a><span>/</span><a href="#/build">Build</a><span>/</span><span>Resources</span></div>
        <div className="head">
          <div><span className="mono head__eyebrow">Developer Resources</span><h2 className="h2">Everything to integrate.</h2></div>
          <p className="head__lead">{BRAND.wallet} is the first reference wallet, but the protocol is built for many wallets and apps.</p>
        </div>
        <div className="rows">
          {DEVELOPER_RESOURCES.map((r, i) => (
            <div className="row" key={r.name}>
              <span className="i mono">0{i + 1}</span>
              <div><h3>{r.name}</h3><p>{r.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
