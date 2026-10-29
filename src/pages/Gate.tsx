import { useState } from 'react'

/** 预设邀请码（内测阶段，输入任意一个即可进入） */
const CODES = [
  'NOIR-7F3K9Q', 'NOIR-X2M8P4', 'NOIR-B5N7TR', 'NOIR-K9W2LD', 'NOIR-M4Q8ZG',
  'NOIR-H6J3XV', 'NOIR-R8C5YM', 'NOIR-T2F7NB', 'NOIR-P9S4WK', 'NOIR-D3V8LH',
  'NOIR-G7Y2CQ', 'NOIR-J5R9ZF', 'NOIR-W4M6KT', 'NOIR-N8B3XV', 'NOIR-Q2H7LP',
  'NOIR-V6D9SR', 'NOIR-F4T8WG', 'NOIR-Z3K7MN', 'NOIR-E9P2JC', 'NOIR-A5Y8RD',
]

const Mark = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 2v8M16 22v8M2 16h8M22 16h8M6 6l6 6M20 20l6 6M26 6l-6 6M12 20l-6 6" />
    <rect x="12" y="12" width="8" height="8" />
  </svg>
)

export default function Gate({ onUnlock }: { onUnlock: () => void }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  const [unlocking, setUnlocking] = useState(false)

  const submit = () => {
    const v = code.trim().toUpperCase()
    if (CODES.includes(v)) {
      setError(false)
      setUnlocking(true)
      setTimeout(onUnlock, 900)
    } else {
      setError(true)
    }
  }

  return (
    <div className={`gate ${unlocking ? 'gate--unlocking' : ''}`}>
      {/* 顶部 */}
      <header className="gate__head">
        <a className="site-brand" href="#/home"><Mark />NOIR_</a>
        <span className="mono" style={{ color: 'var(--fg-3)' }}>PRIVATE ACCESS · INVITE ONLY</span>
      </header>

      {/* 门 */}
      <div className="gate__stage">
        <div className="gate__door">
          <div className="gate__panel gate__panel--left">
            <span className="gate__num mono">/01</span>
            <div className="gate__knob" />
            <span className="gate__label mono">NOIR PROTOCOL</span>
          </div>
          <div className="gate__panel gate__panel--right">
            <span className="gate__num mono">/02</span>
            <div className="gate__knob" />
            <span className="gate__label mono">CONFIDENTIAL ACCESS</span>
          </div>

          {/* 门缝：输入口子 */}
          <div className="gate__slot">
            <div className="gate__slot-inner">
              <span className="mono" style={{ color: 'var(--gold)' }}>ENTER CODE</span>
              <div className="gate__field">
                <input
                  value={code}
                  onChange={e => { setCode(e.target.value); setError(false) }}
                  onKeyDown={e => { if (e.key === 'Enter') submit() }}
                  placeholder="NOIR-XXXXXX"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                  aria-label="Access code"
                />
                <button type="button" onClick={submit}>ENTER ↗</button>
              </div>
              <span className={`gate__hint mono ${error ? 'gate__hint--err' : ''}`}>
                {error ? '// ACCESS DENIED — INVALID CODE' : '// 20 INVITE CODES IN CIRCULATION'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 底部元信息 */}
      <footer className="gate__foot mono">
        <span>NOIR / NEAR / ZCASH</span>
        <span>EST. 2026</span>
        <span>v.1.0</span>
      </footer>
    </div>
  )
}
