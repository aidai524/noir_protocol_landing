import BorderGlow from '@/components/BorderGlow'
import PixelCard from '@/components/PixelCard'

/** 组件效果试验页：BorderGlow + PixelCard（临时，定稿后删除） */
export default function Demo() {
  return (
    <section className="site-section">
      <div className="site-shell">
        <div className="crumb-row mono"><a href="#/home">Home</a><span>/</span><span>Demo</span></div>
        <div className="head">
          <div><span className="mono head__eyebrow">Component trial</span><h2 className="h2">BorderGlow &amp; PixelCard.</h2></div>
          <p className="head__lead">React Bits CSS 版，零依赖。金色调贴合 brutalist 配色。</p>
        </div>

        {/* ── BorderGlow ── */}
        <div className="head">
          <div><span className="mono head__eyebrow">BorderGlow</span><h2 className="h2">发光网格边框，跟随光标。</h2></div>
        </div>
        <div className="mode-grid">
          <BorderGlow
            glowColor="40 40 42"
            backgroundColor="#140a0d"
            borderRadius={2}
            glowIntensity={0.25}
            glowRadius={28}
            fillOpacity={0.12}
            className="demo-glow"
          >
            <div style={{ padding: 40, minHeight: 220 }}>
              <span className="mono" style={{ color: 'var(--gold)' }}>Anonymous Mode</span>
              <h3 style={{ fontFamily: 'var(--head-font)', fontWeight: 400, fontSize: 28, margin: '14px 0 10px' }}>Shielded Origin. Anonymous Identity. Open DeFi.</h3>
              <p style={{ color: 'var(--fg-2)', fontSize: 14 }}>Access open DeFi without exposing your original Zcash identity.</p>
            </div>
          </BorderGlow>

          <BorderGlow
            glowColor="40 40 42"
            backgroundColor="#140a0d"
            borderRadius={2}
            glowIntensity={0.2}
            glowRadius={24}
            fillOpacity={0.1}
            edgeSensitivity={20}
            className="demo-glow"
          >
            <div style={{ padding: 40, minHeight: 220 }}>
              <span className="mono" style={{ color: 'var(--gold)' }}>Confidential Mode</span>
              <h3 style={{ fontFamily: 'var(--head-font)', fontWeight: 400, fontSize: 28, margin: '14px 0 10px' }}>Anonymous by Design. Confidential by Execution.</h3>
              <p style={{ color: 'var(--fg-2)', fontSize: 14 }}>Further protect supported holdings and execution data.</p>
            </div>
          </BorderGlow>
        </div>

        {/* ── PixelCard ── */}
        <div className="head" style={{ marginTop: 64 }}>
          <div><span className="mono head__eyebrow">PixelCard</span><h2 className="h2">hover 时像素从中心涟漪扩散。</h2></div>
        </div>
        <div className="c-grid">
          {[
            ['Payments', 'Private payments and transfers.'],
            ['Trading', 'Trade with a privacy-first identity.'],
            ['Lending', 'Lend and borrow without exposing yourself.'],
          ].map(([name, desc]) => (
            <PixelCard
              key={name}
              colors={['#5c4416', '#7a5a1a', '#9a7626']}
              trigger="hover"
              shape="square"
              gap={4}
              speed={0.5}
              glow={0.25}
              spotlight={0.2}
              opacity={0.5}
              radius={0}
              theme="dark"
            >
              <div style={{ padding: 28, minHeight: 170, display: 'flex', flexDirection: 'column' }}>
                <div className="c-card__top"><span className="mono" style={{ color: 'var(--gold)' }}>{name}</span><span className="c-plus">+</span></div>
                <p style={{ margin: 0, color: 'var(--fg-2)', fontFamily: 'var(--mono)', fontSize: 11.5, lineHeight: 1.75 }}>{desc}</p>
              </div>
            </PixelCard>
          ))}
        </div>

        <p className="head__lead" style={{ marginTop: 40, maxWidth: '60ch' }}>注意：这两个是 React Bits 的「发光/像素」审美，brutalist 原本是「细线/编号」的克制风格。这里先看原始效果，再决定要不要、以及用在哪。</p>
      </div>
    </section>
  )
}
