import { BRAND, MODES, SOLUTIONS, HOME_SECTIONS, ECOSYSTEM_CATEGORIES } from '@/content'
import BorderGlow from '@/components/BorderGlow'

const Arrow = () => <span aria-hidden="true">↗</span>
const Plus = () => <span className="c-plus" aria-hidden="true">+</span>

/** 几何线图标（参考 CORE PRINCIPLES 的 PrincipleIcon 风格） */
function PrincipleIcon({ index }: { index: number }) {
  if (index === 0) return <svg viewBox="0 0 52 52" aria-hidden="true"><path d="M26 5 44 13v15c0 11-7.5 17.5-18 22-10.5-4.5-18-11-18-22V13Z" /><path d="M26 13v14M18 21h16" /></svg>
  if (index === 1) return <svg viewBox="0 0 52 52" aria-hidden="true"><circle cx="19" cy="19" r="8" /><path d="M8 38c0-7 5-10 11-10s11 3 11 10" /><circle cx="36" cy="36" r="6" /><path d="M30 44c0-5 3-7 6-7" /></svg>
  if (index === 2) return <svg viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="6" /><circle cx="26" cy="10" r="4" /><circle cx="26" cy="42" r="4" /><circle cx="10" cy="26" r="4" /><circle cx="42" cy="26" r="4" /><path d="M26 14v6M26 32v6M14 26h6M32 26h6" /></svg>
  return <svg viewBox="0 0 52 52" aria-hidden="true"><rect x="12" y="22" width="28" height="20" /><path d="M18 22v-6a8 8 0 0 1 16 0v6" /><circle cx="26" cy="31" r="3" /><path d="M26 34v4" /></svg>
}

/** 用 BorderGlow 包裹的 brutalist 卡片（克制：暗金 + 低强度 + 无持续动画） */
function GlowCell({ children }: { children: React.ReactNode }) {
  return (
    <BorderGlow
      glowColor="42 65 50"
      backgroundColor="#140a0d"
      borderRadius={0}
      glowIntensity={0.5}
      glowRadius={52}
      fillOpacity={0.35}
      className="glow-cell"
    >
      <div className="c-card">{children}</div>
    </BorderGlow>
  )
}

/** 隐私层线图：屏蔽池 → 授权身份 → TEE 中继 → NEAR 执行 */
function PrivacyVisual() {
  const grid = Array.from({ length: 11 }, (_, i) => 10 + i * 24)
  return (
    <div className="c-visual" aria-label="Wireframe of the Noir privacy layer" role="img">
      <svg viewBox="0 0 640 640" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <g stroke="rgba(157,143,149,.14)" strokeWidth="1">
          {grid.map(x => <line key={`v${x}`} x1={x} x2={x} y1="0" y2="640" />)}
          {grid.map(y => <line key={`h${y}`} x1="0" x2="640" y1={y} y2={y} />)}
        </g>
        {/* 屏蔽池（外圈） */}
        <g fill="none" stroke="rgba(243,183,36,.55)" strokeWidth="1.2">
          <circle cx="320" cy="320" r="208" />
          <circle cx="320" cy="320" r="172" strokeDasharray="3 6" />
        </g>
        {/* TEE 中继（内圈） */}
        <g fill="none" stroke="rgba(243,183,36,.35)" strokeWidth="1.2">
          <circle cx="320" cy="320" r="96" strokeDasharray="2 5" />
        </g>
        {/* 执行层（射线） */}
        <g stroke="rgba(243,183,36,.3)" strokeWidth="1">
          <path d="M320 320 70 120M320 320 570 120M320 320 70 520M320 320 570 520M320 320 320 40M320 320 320 600M320 320 40 320M320 320 600 320" />
        </g>
        {/* 授权身份（中心点） */}
        <g fill="none" stroke="#f3b724" strokeWidth="2.5">
          <circle cx="320" cy="320" r="14" />
        </g>
        <g fill="#f3b724">
          <circle cx="320" cy="320" r="4" />
        </g>
        {/* 数据点 */}
        <g fill="#f3b724">
          <circle cx="320" cy="112" r="3" />
          <circle cx="508" cy="368" r="3" />
          <circle cx="132" cy="272" r="3" />
          <circle cx="400" cy="490" r="3" />
        </g>
        {/* 标注 */}
        <g fontFamily="monospace" fontSize="11" fill="rgba(157,143,149,.8)">
          <text x="348" y="112">SHIELDED_ASSETS</text>
          <text x="348" y="340">AUTH_IDENTITY</text>
          <text x="348" y="330">TEE_RELAY</text>
          <text x="560" y="126">NEAR_EXEC</text>
        </g>
      </svg>
      <span className="c-visual__num mono">/01</span>
      <div className="c-scan" aria-hidden="true" />
      <div className="c-coord mono">X_36.1749<br />Y_-86.7676<br />Z_46.6827</div>
      <span className="c-visual__cap mono">//PRIVACY_LAYER</span>
      <span className="c-corner c-corner--tl" /><span className="c-corner c-corner--tr" />
      <span className="c-corner c-corner--bl" /><span className="c-corner c-corner--br" />
    </div>
  )
}

function SectionHead({ index, children, aside }: { index: string; children: React.ReactNode; aside?: string }) {
  return (
    <div className="c-sechead">
      <div className="c-sechead__title"><span className="c-index">/{index}</span><h2>{children}</h2></div>
      {aside && <span className="c-sechead__aside">{aside}</span>}
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* 1 · Hero */}
      <section className="c-hero c-hero--rail">
        <div className="c-rail" aria-hidden="true">
          <span>NOIR PROTOCOL</span>
          <i />
          <span>2026</span>
        </div>
        <div className="c-hero__copy">
          <div className="c-kicker mono"><span className="c-live-dot" />NOIRPROTOCOL / PRIVACY-FIRST PROGRAMMABLE FINANCE</div>
          <h1 className="c-title">ANONYMOUS<br />BY DESIGN<span>.</span></h1>
          <p className="c-tagline">THE FUTURE ISN'T CLOSED.<br />IT'S PROGRAMMABLE.</p>
          <p className="c-intro">{BRAND.statement}</p>
          <div className="c-actions">
            <a className="btn btn--fill" href="#/privacy">Explore Privacy<Arrow /></a>
            <a className="btn btn--ghost" href="#/privacy">Open {BRAND.wallet}<span className="c-brackets" aria-hidden="true">[ ]</span></a>
          </div>
          <div className="c-meta mono"><span>EST. 2026</span><span>NOIR / NEAR / ZCASH</span><span>v.1.0</span></div>
        </div>
        <PrivacyVisual />
      </section>

      {/* 2 · Privacy by Design */}
      <section className="site-section">
        <div className="site-shell">
          <SectionHead index="02" aside="LAYERED, NOT BOLTED ON">PRIVACY BY DESIGN</SectionHead>
          <div className="c-principles">
            {HOME_SECTIONS.privacyByDesign.map((p, i) => (
              <div className="c-principle" key={p.name}>
                <div className="c-principle__top"><PrincipleIcon index={i} /><Plus /></div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <span className="c-principle__idx">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · Two modes */}
      <section className="site-section">
        <div className="site-shell">
          <SectionHead index="03" aside="TWO LEVELS, NOT A BINARY">ANONYMOUS &amp; CONFIDENTIAL</SectionHead>
          <div className="c-grid c-grid--glow">
            {(['anonymous', 'confidential'] as const).map((m, i) => (
              <GlowCell key={m}>
                <div className="c-card__top"><span className="mono" style={{ color: 'var(--gold)' }}>{MODES[m].name}</span><Plus /></div>
                <h3>{MODES[m].heading}</h3>
                <p>{MODES[m].summary}</p>
                <div className="c-card__idx" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>0{i + 1}</span>
                  <a className="mono" style={{ color: 'var(--gold)' }} href={`#/privacy/${m}`}>Enter ↗</a>
                </div>
              </GlowCell>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Five solutions */}
      <section className="site-section">
        <div className="site-shell">
          <SectionHead index="04" aside="INTRODUCTIONS, NOT APPLICATIONS">FINANCIAL SOLUTIONS</SectionHead>
          <div className="c-rows">
            {SOLUTIONS.map((s, i) => (
              <a className="c-row" href={`#/${s.id}`} key={s.id} style={{ display: 'grid' }}>
                <span className="c-row__idx mono">0{i + 1}</span>
                <div><h3>{s.name} — {s.position}</h3><p>{s.summary}</p></div>
                <span className="mono" style={{ color: 'var(--gold)' }}>+</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · How it works */}
      <section className="site-section">
        <div className="site-shell">
          <SectionHead index="05" aside="ONE PRIVACY PATH">HOW NOIR WORKS</SectionHead>
          <div className="c-grid c-grid--glow">
            <GlowCell><div className="c-card__top"><span className="mono" style={{ color: 'var(--gold)' }}>01</span><Plus /></div><h3>Zcash Shielded Assets</h3><p>Funding origin stays inside the shielded pool.</p></GlowCell>
            <GlowCell><div className="c-card__top"><span className="mono" style={{ color: 'var(--gold)' }}>02</span><Plus /></div><h3>Noir Privacy &amp; Authorization Layer</h3><p>Isolated identity, TEE relay, execution coordination.</p></GlowCell>
            <GlowCell><div className="c-card__top"><span className="mono" style={{ color: 'var(--gold)' }}>03</span><Plus /></div><h3>NEAR Programmable Execution</h3><p>Access to supported DeFi under your privacy mode.</p></GlowCell>
          </div>
        </div>
      </section>

      {/* 6 · Ecosystem */}
      <section className="site-section">
        <div className="site-shell">
          <SectionHead index="06" aside="TECHNICAL, NOT FUNDED">ECOSYSTEM</SectionHead>
          <div className="c-rows">
            {ECOSYSTEM_CATEGORIES.slice(0, 3).map((c, i) => (
              <div className="c-row" key={c.name}>
                <span className="c-row__idx mono">0{i + 1}</span>
                <div><h3>{c.name}</h3><p>{c.desc}</p></div>
                <span className="mono" style={{ color: 'var(--gold)' }}>+</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <a className="btn btn--ghost" href="#/ecosystem">Explore Ecosystem<Arrow /></a>
          </div>
        </div>
      </section>

      {/* 7 · Infrastructure & Security */}
      <section className="site-section">
        <div className="site-shell">
          <SectionHead index="07" aside="STATED PRECISELY, NEVER OVERSTATED">INFRASTRUCTURE &amp; SECURITY</SectionHead>
          <div className="c-rows">
            <a className="c-row" href="#/infrastructure" style={{ display: 'grid' }}>
              <span className="c-row__idx mono">01</span><div><h3>Architecture &amp; Infrastructure</h3><p>Zcash settlement, HD identity, TEE relay, NEAR execution.</p></div><span className="mono" style={{ color: 'var(--gold)' }}>+</span>
            </a>
            <a className="c-row" href="#/security" style={{ display: 'grid' }}>
              <span className="c-row__idx mono">02</span><div><h3>Security</h3><p>Trust model, attestation, bridge boundaries, audit scope.</p></div><span className="mono" style={{ color: 'var(--gold)' }}>+</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8 · Build on Noir */}
      <section className="site-section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="site-shell" style={{ textAlign: 'center' }}>
          <SectionHead index="08" aside="OPEN PROTOCOL">BUILD ON NOIR</SectionHead>
          <h2 className="c-title" style={{ fontSize: 'clamp(36px, 5vw, 72px)', margin: '24px 0 12px' }}>FOR WALLETS, PROTOCOLS<br />&amp; DEVELOPERS<span>.</span></h2>
          <p className="c-intro" style={{ margin: '0 auto 28px' }}>{BRAND.wallet} is the first reference wallet — but the protocol is open to everyone.</p>
          <a className="btn btn--fill" href="#/build">Start building<Arrow /></a>
        </div>
      </section>
    </>
  )
}
