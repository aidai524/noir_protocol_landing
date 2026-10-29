import { VISION, BRAND } from '@/content'

function Crumb({ label }: { label: string }) {
  return <div className="crumb-row mono"><a href="#/home">Home</a><span>/</span><span>{label}</span></div>
}

export function Vision() {
  return (
    <section className="site-section">
      <div className="site-shell">
        <Crumb label="Vision" />
        <div className="head">
          <div><span className="mono head__eyebrow">Vision</span><h2 className="h2">{VISION.heading}</h2></div>
        </div>
        <div className="stack">
          {VISION.paragraphs.map((p, i) => (
            <div className="stack-item" key={i}><p>{p}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Adoption() {
  return (
    <section className="site-section">
      <div className="site-shell">
        <Crumb label="Partners & Adoption" />
        <div className="head">
          <div><span className="mono head__eyebrow">Partners &amp; Adoption</span><h2 className="h2">Real integrations only.</h2></div>
          <p className="head__lead">Confirmed partners, protocol integrations and application cases will appear here as they land.</p>
        </div>
        <div className="stack">
          <div className="stack-item"><h3>{BRAND.wallet}</h3><p>The first reference wallet for the protocol.</p></div>
        </div>
      </div>
    </section>
  )
}

export function Blog() {
  const posts = [
    { title: 'Introducing NoirProtocol', tag: 'Announcement', date: 'Upcoming' },
    { title: 'Anonymous vs Confidential: two modes, one protocol', tag: 'Technical', date: 'Upcoming' },
    { title: 'How the TEE privacy relay works', tag: 'Protocol Development', date: 'Upcoming' },
  ]
  return (
    <section className="site-section">
      <div className="site-shell">
        <Crumb label="Blog" />
        <div className="head">
          <div><span className="mono head__eyebrow">Blog</span><h2 className="h2">Updates &amp; thinking.</h2></div>
        </div>
        <div className="rows">
          {posts.map((p, i) => (
            <div className="row" key={p.title}>
              <span className="i mono">0{i + 1}</span>
              <div><h3>{p.title}</h3><p>{p.tag}</p></div>
              <span className="tag">{p.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const channels = [
    ['Business Partnerships', 'Partnership and collaboration inquiries.'],
    ['Protocol Integrations', 'Integrating a wallet, protocol or app.'],
    ['Developer Support', 'Technical questions for builders.'],
    ['Media & Community', 'Press and community contact.'],
  ]
  return (
    <section className="site-section">
      <div className="site-shell">
        <Crumb label="Contact" />
        <div className="head">
          <div><span className="mono head__eyebrow">Contact</span><h2 className="h2">Talk to the team.</h2></div>
        </div>
        <div className="rows">
          {channels.map(([n, d], i) => (
            <div className="row" key={n}>
              <span className="i mono">0{i + 1}</span>
              <div><h3>{n}</h3><p>{d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
