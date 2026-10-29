import { Fragment, useEffect, useState } from 'react'
import Home from '@/pages/Home'
import Solution from '@/pages/Solution'
import PrivacyOverview from '@/pages/PrivacyOverview'
import PrivacyDetail from '@/pages/PrivacyDetail'
import { Ecosystem, Programs, Requests } from '@/pages/Ecosystem'
import { Build, Resources } from '@/pages/Developers'
import { Infrastructure, Security, Explorer, Stats } from '@/pages/Infra'
import { Vision, Adoption, Blog, Contact } from '@/pages/About'
import Demo from '@/pages/Demo'
import { BRAND, NAV, SOLUTIONS } from '@/content'

const getRoute = () => (location.hash.replace(/^#\/?/, '').split('?')[0] || 'home')
const segments = (route: string) => route.split('/').filter(Boolean)

const Mark = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 2v8M16 22v8M2 16h8M22 16h8M6 6l6 6M20 20l6 6M26 6l-6 6M12 20l-6 6" />
    <rect x="12" y="12" width="8" height="8" />
  </svg>
)

export default function App() {
  const [route, setRoute] = useState(getRoute)
  const [solid, setSolid] = useState(false)
  const [lang, setLang] = useState<'en' | 'zh'>('en')

  useEffect(() => {
    const onHash = () => { setRoute(getRoute()); window.scrollTo({ top: 0 }) }
    const onScroll = () => setSolid(window.scrollY > 40)
    addEventListener('hashchange', onHash)
    addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { removeEventListener('hashchange', onHash); removeEventListener('scroll', onScroll) }
  }, [])

  useEffect(() => { document.title = `${BRAND.name} — ${BRAND.tagline}` }, [route])

  const seg = segments(route)

  return (
    <div className="site">
      <header className={`site-nav ${solid ? 'site-nav--solid' : ''}`}>
        <a className="site-brand" href="#/home"><Mark />NOIR_</a>
        <nav aria-label="Primary">
          {NAV.map((n, i) => (
            <Fragment key={n.id}>
              <div className="nav-group">
                <a href={n.items?.[0]?.href ?? `#/${n.id}`} aria-current={active(n.id, seg) ? 'page' : undefined}>{n.label}</a>
                {n.items && (
                  <div className="nav-drop">
                    {n.items.map(it => (
                      <a key={it.href} href={it.href} target={it.href.startsWith('http') ? '_blank' : undefined} rel={it.href.startsWith('http') ? 'noreferrer' : undefined}>{it.label}</a>
                    ))}
                  </div>
                )}
              </div>
              {i < NAV.length - 1 && <span className="nav-plus">+</span>}
            </Fragment>
          ))}
        </nav>
        <div className="site-nav__actions">
          <button className="nav-lang" type="button" onClick={() => setLang(l => l === 'en' ? 'zh' : 'en')} aria-label="Switch language">
            {lang === 'en' ? 'EN' : '中文'}
          </button>
          <a className="btn nav-cta" href="#/build">Start building ↗</a>
        </div>
      </header>

      <main>{renderPage(route, seg)}</main>

      <footer className="site-footer">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="site-brand" href="#/home" style={{ fontSize: 16 }}><Mark />NOIR_</a>
            <p>{BRAND.name} is the privacy-first programmable finance protocol for the Zcash ecosystem.</p>
            <span className="micro">© 2026 NOIR</span>
          </div>
          <div>
            <h3>Navigation</h3>
            {NAV.map(n => <a key={n.id} href={n.items?.[0]?.href ?? `#/${n.id}`}>{n.label}</a>)}
          </div>
          <div>
            <h3>Resources</h3>
            <a href="#/resources">Documentation</a>
            <a href="https://github.com/NoirWallet/NoirProtocol" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="#/security">Security</a>
            <a href="#/stats">Network Status</a>
          </div>
          <div>
            <h3>Socials</h3>
            <a href="https://github.com/NoirWallet/NoirProtocol" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="#/contact">Contact</a>
            <a href="#/blog">Blog</a>
          </div>
        </div>
        <div className="legal">
          <span>Not affiliated with the Zcash Foundation or Electric Coin Company.</span>
          <span>Open ecosystem · Sample data only</span>
        </div>
      </footer>
    </div>
  )
}

function active(id: string, seg: string[]): boolean {
  return seg[0] === id
}

function renderPage(route: string, seg: string[]) {
  const head = seg[0] ?? 'home'
  const sub = seg[1]

  if (route === 'home' || head === 'home') return <Home />

  if (head === 'privacy') {
    if (sub === 'anonymous') return <PrivacyDetail mode="anonymous" />
    if (sub === 'confidential') return <PrivacyDetail mode="confidential" />
    return <PrivacyOverview />
  }

  const solution = SOLUTIONS.find(s => s.id === head)
  if (solution) return <Solution solution={solution} />

  if (head === 'ecosystem') return <Ecosystem />
  if (head === 'programs') return <Programs />
  if (head === 'requests') return <Requests />
  if (head === 'build') return <Build />
  if (head === 'resources') return <Resources />
  if (head === 'infrastructure') return <Infrastructure />
  if (head === 'security') return <Security />
  if (head === 'explorer') return <Explorer />
  if (head === 'stats') return <Stats />
  if (head === 'vision') return <Vision />
  if (head === 'adoption') return <Adoption />
  if (head === 'blog') return <Blog />
  if (head === 'contact') return <Contact />
  if (head === 'demo') return <Demo />

  return <Home />
}
