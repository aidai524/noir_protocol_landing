import { ECOSYSTEM_CATEGORIES, PROGRAMS, REQUESTS } from '@/content'

function Crumb({ label }: { label: string }) {
  return <div className="crumb-row mono"><a href="#/home">Home</a><span>/</span><a href="#/ecosystem">Ecosystem</a><span>/</span><span>{label}</span></div>
}

export function Ecosystem() {
  return (
    <section className="site-section">
      <div className="site-shell">
        <div className="crumb-row mono"><a href="#/home">Home</a><span>/</span><span>Ecosystem</span></div>
        <div className="head">
          <div><span className="mono head__eyebrow">Ecosystem</span><h2 className="h2">Built with the ecosystem,<br />not against it.</h2></div>
          <p className="head__lead">NoirProtocol welcomes wallets, DeFi protocols and developers. Integration is technical, not funded.</p>
        </div>
        {ECOSYSTEM_CATEGORIES.map(cat => (
          <div key={cat.name} style={{ marginBottom: 40 }}>
            <div className="head" style={{ marginBottom: 16 }}>
              <div><h2 className="h2" style={{ fontSize: 'clamp(20px,2vw,28px)' }}>{cat.name}</h2></div>
              <p className="head__lead">{cat.desc}</p>
            </div>
            {cat.items.map(it => (
              <div className="stack-item" key={it.name}>
                <h3>{it.name}</h3><p>{it.desc}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export function Programs() {
  return (
    <section className="site-section">
      <div className="site-shell">
        <Crumb label="Programs" />
        <div className="head">
          <div><span className="mono head__eyebrow">Ecosystem Programs</span><h2 className="h2">Cooperation, not capital.</h2></div>
          <p className="head__lead">NoirProtocol does not run an ecosystem fund, grants or investment. We collaborate technically.</p>
        </div>
        <div className="rows">
          {PROGRAMS.map((p, i) => (
            <div className="row" key={p.name}>
              <span className="i mono">0{i + 1}</span>
              <div><h3>{p.name}</h3><p>{p.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Requests() {
  return (
    <section className="site-section">
      <div className="site-shell">
        <Crumb label="Requests" />
        <div className="head">
          <div><span className="mono head__eyebrow">Builder Requests</span><h2 className="h2">What the ecosystem needs.</h2></div>
          <p className="head__lead">Open requests for builders. These are invitations to build, not funding offers.</p>
        </div>
        <div className="rows">
          {REQUESTS.map((r, i) => (
            <div className="row" key={r.name}>
              <span className="i mono">0{i + 1}</span>
              <div><h3>{r.name}</h3><p>{r.scenario}</p></div>
              <span className="tag">{r.priority}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
