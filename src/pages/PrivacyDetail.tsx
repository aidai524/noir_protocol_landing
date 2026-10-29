import { MODES } from '@/content'

export default function PrivacyDetail({ mode }: { mode: 'anonymous' | 'confidential' }) {
  const m = MODES[mode]
  return (
    <section className="site-section">
      <div className="site-shell">
        <div className="crumb-row mono"><a href="#/home">Home</a><span>/</span><a href="#/privacy">Privacy</a><span>/</span><span>{m.name}</span></div>
        <div className="head">
          <div>
            <span className="mono head__eyebrow">{m.tagline}</span>
            <h2 className="h2">{m.heading}</h2>
          </div>
          <p className="head__lead">{m.summary}</p>
        </div>

        <div className="rows">
          {m.points.map((p, i) => (
            <div className="row" key={p}>
              <span className="i mono">0{i + 1}</span>
              <div><p>{p}</p></div>
            </div>
          ))}
        </div>

        <div className="head" style={{ marginTop: 64 }}>
          <div><span className="mono head__eyebrow">Core value</span><h2 className="h2">What this gives you.</h2></div>
        </div>
        <p className="head__lead" style={{ maxWidth: '60ch' }}>{m.value}</p>

        <div className="cta" style={{ paddingTop: 48 }}>
          <p className="head__lead" style={{ maxWidth: '60ch', margin: '0 auto 24px' }}>{m.note}</p>
          <a className="btn btn--fill" href="#/privacy">Back to privacy overview</a>
        </div>
      </div>
    </section>
  )
}
