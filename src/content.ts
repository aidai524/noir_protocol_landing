/**
 * NoirProtocol 官网内容数据源（三版本共享的文案基线）
 * 来源：《NoirProtocol 官方网站架构与内容规划说明》V1.0
 * 状态规范：Live / Beta / Planned，发布前按实际交付确认
 */

export const BRAND = {
  name: 'NoirProtocol',
  wallet: 'NoirWallet',
  tagline: 'Privacy-First Programmable Finance',
  heroTitle: 'Anonymous by Design. Confidential When Needed.',
  heroSubtitle: 'Bringing Zcash privacy into programmable, cross-chain finance.',
  statement: 'NoirProtocol is the privacy-first programmable finance protocol for the Zcash ecosystem — extending shielded privacy to cross-chain assets, DeFi, payments and more.',
}

export type NavId = 'privacy' | 'solutions' | 'ecosystem' | 'developers' | 'infrastructure' | 'about'

export const NAV: { id: NavId; label: string; items?: { href: string; label: string }[] }[] = [
  {
    id: 'privacy',
    label: 'Privacy',
    items: [
      { href: '#/privacy', label: 'Privacy Overview' },
      { href: '#/privacy/anonymous', label: 'Anonymous Mode' },
      { href: '#/privacy/confidential', label: 'Confidential Mode' },
    ],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    items: [
      { href: '#/payments', label: 'Payments' },
      { href: '#/trading', label: 'Trading' },
      { href: '#/lending', label: 'Lending' },
      { href: '#/earn', label: 'Earn' },
      { href: '#/bridge', label: 'Bridge' },
    ],
  },
  {
    id: 'ecosystem',
    label: 'Ecosystem',
    items: [
      { href: '#/ecosystem', label: 'Explore Ecosystem' },
      { href: '#/programs', label: 'Ecosystem Programs' },
      { href: '#/requests', label: 'Builder Requests' },
    ],
  },
  {
    id: 'developers',
    label: 'Developers',
    items: [
      { href: '#/build', label: 'Build on Noir' },
      { href: '#/resources', label: 'Developer Resources' },
      { href: 'https://github.com/NoirWallet/NoirProtocol', label: 'GitHub ↗' },
    ],
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    items: [
      { href: '#/infrastructure', label: 'Architecture & Infrastructure' },
      { href: '#/security', label: 'Security' },
      { href: '#/explorer', label: 'Explorer' },
      { href: '#/stats', label: 'Network Statistics' },
    ],
  },
  {
    id: 'about',
    label: 'About',
    items: [
      { href: '#/vision', label: 'Vision' },
      { href: '#/adoption', label: 'Partners & Adoption' },
      { href: '#/blog', label: 'Blog' },
      { href: '#/contact', label: 'Contact' },
    ],
  },
]

/* ── 两种模式 ── */
export const MODES = {
  anonymous: {
    name: 'Anonymous Mode',
    heading: 'Shielded Origin. Anonymous Identity. Open DeFi.',
    tagline: 'The foundation of NoirProtocol.',
    summary: 'Access open DeFi without exposing your original Zcash identity.',
    points: [
      'Funds enter through the Zcash Shielded path — your original Transparent Address is never used for bridging.',
      'A dedicated HD-derivation path mints an authorization address that signs only; it never receives or holds ZEC.',
      'Authorization requests are handled by the Noir TEE privacy relay.',
      'Public DeFi apps are reached through the NEAR Global Contract and supported integrations.',
      'Original funding identity and execution identity stay isolated.',
    ],
    value: 'Shielded funding origin, independent authorization identity, and open DeFi composability.',
    note: 'Anonymous protection focuses on isolating the original funding identity. Results on public DeFi do not automatically become confidential data.',
  },
  confidential: {
    name: 'Confidential Mode',
    heading: 'Anonymous by Design. Confidential by Execution.',
    tagline: 'Enhanced privacy on top of anonymous funding.',
    summary: 'Further protect supported asset holdings, trade details and financial activity.',
    points: [
      'Builds on anonymous funding origin and identity isolation.',
      'Uses an independent Confidential Auth Identity.',
      'Combined with NEAR Confidential Intents / Confidential Account.',
      'Protects supported private balances, positions and execution data.',
      'Privacy guarantees follow the Confidential infrastructure actually connected.',
    ],
    value: 'A separate authorization identity whose capabilities and guarantees follow the Confidential infrastructure in use.',
    note: 'Confidential Mode is an enhancement of privacy, not a requirement that every action first pass through Anonymous Mode. It is not a Public-vs-Private binary.',
  },
}

/* ── 解决方案 ── */
export interface Solution {
  id: string
  name: string
  position: string
  heading: string
  summary: string
  benefits: string[]
  howItWorks: string[]
  status: 'Live' | 'Beta' | 'Planned'
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'payments',
    name: 'Payments',
    position: 'Private Payments & Transfers',
    heading: 'Private payments and transfers.',
    summary: 'Move value privately, across chains, without exposing your original Zcash identity.',
    benefits: ['Zcash private payments and asset transfers', 'Cross-chain payments', 'Confidential transfers', 'Merchant settlement and batch payments as future scenarios'],
    howItWorks: ['Funds enter via the Shielded path', 'An isolated authorization identity signs the transfer', 'The TEE relay routes the request privately', 'Settlement completes on the destination chain'],
    status: 'Planned',
  },
  {
    id: 'trading',
    name: 'Trading',
    position: 'Privacy-First Trading',
    heading: 'Trade with a privacy-first identity.',
    summary: 'Access DEXs and swaps under an anonymous identity, with confidential execution where supported.',
    benefits: ['Anonymous identity access to DEXs', 'Cross-chain swaps', 'Confidential trading', 'Token trading', 'Perps support as a future capability'],
    howItWorks: ['Connect with an anonymous identity', 'Route orders through the privacy relay', 'Settle via supported DEX integrations', 'Perps and confidential order types follow later'],
    status: 'Planned',
  },
  {
    id: 'lending',
    name: 'Lending',
    position: 'Lend and Borrow with Privacy',
    heading: 'Lend and borrow without exposing yourself.',
    summary: 'Access lending protocols under an anonymous identity — ZEC-backed borrowing and cross-chain collateral.',
    benefits: ['Anonymous identity access to lending protocols', 'ZEC-backed borrowing', 'Cross-chain collateral lending', 'Confidential lending as a target capability', 'Underlying lending protocols already integrated'],
    howItWorks: ['Supply or borrow from an anonymous identity', 'Collateral stays shielded where supported', 'Rates and positions route through the relay', 'Manage positions in NoirWallet'],
    status: 'Beta',
  },
  {
    id: 'earn',
    name: 'Earn',
    position: 'Grow Your Assets with Privacy',
    heading: 'Grow your assets, privately.',
    summary: 'Lending supply yield and yield strategies, managed without exposing your original identity.',
    benefits: ['Lending supply yield', 'Yield strategies and aggregation', 'Asset growth scenarios', 'Private yield management as a target capability'],
    howItWorks: ['Deposit from a shielded origin', 'Yield accrues through integrated lending markets', 'Positions are tracked under an isolated identity', 'Claim and withdraw in NoirWallet'],
    status: 'Planned',
  },
  {
    id: 'bridge',
    name: 'Bridge',
    position: 'Shielded Cross-Chain Access',
    heading: 'Shielded access across chains.',
    summary: 'Bring Zcash shielded assets into Noir, and move them across chains without exposing your funding identity.',
    benefits: ['Zcash shielded assets onboarded into Noir', 'NEAR Confidential API preferred routing', 'Cross-chain asset transfer', 'Asset exit and settlement', 'Anonymous funding origin and isolated authorization identity'],
    howItWorks: ['Shielded assets enter Noir', 'An isolated identity authorizes the route', 'The TEE relay coordinates the transfer', 'Assets settle or exit on the destination chain'],
    status: 'Planned',
  },
]

/* ── 生态 ── */
export const ECOSYSTEM_CATEGORIES = [
  { name: 'Wallets', desc: 'Wallets that integrate NoirProtocol for private access.', items: [{ name: 'NoirWallet', desc: 'The first reference wallet for NoirProtocol.', href: '#' }] },
  { name: 'Trading & DeFi', desc: 'Protocols and venues reachable under anonymous identity.', items: [{ name: 'Supported DeFi', desc: 'Integrated lending and DEX protocols.', href: '#' }] },
  { name: 'Payments', desc: 'Payment flows built on private transfers.', items: [{ name: 'Payments', desc: 'Merchant and cross-chain payment scenarios.', href: '#' }] },
  { name: 'Infrastructure', desc: 'Relay, execution and settlement infrastructure.', items: [{ name: 'Noir TEE Relay', desc: 'Privacy relay for authorization and routing.', href: '#' }] },
  { name: 'Developer Tools', desc: 'SDKs, APIs and references for builders.', items: [{ name: 'Protocol SDK', desc: 'The integration toolkit for third parties.', href: '#' }] },
]

export const PROGRAMS = [
  { name: 'Technical Integration Support', desc: 'Help integrating protocols, wallets and apps with NoirProtocol.' },
  { name: 'SDK & API Onboarding', desc: 'Guided access to the protocol SDK and API references.' },
  { name: 'Joint Product Testing', desc: 'Collaborative testing of new integrations before launch.' },
  { name: 'Developer Community Collaboration', desc: 'Working together in the open.' },
  { name: 'Co-marketing & Events', desc: 'Joint announcements and activities when resources allow.' },
]

export const REQUESTS = [
  { name: 'Merchant Payment Gateway', scenario: 'Let merchants accept private payments through Noir.', priority: 'High' },
  { name: 'Private OTC', scenario: 'Over-the-counter settlement without exposing counterparty identity.', priority: 'High' },
  { name: 'Privacy-Focused Analytics', scenario: 'Protocol metrics that never leak user data.', priority: 'Medium' },
  { name: 'Third-Party Wallet Integration', scenario: 'More wallets beyond the reference NoirWallet.', priority: 'High' },
  { name: 'DeFi Integration', scenario: 'Additional lending, trading and yield protocols.', priority: 'Medium' },
  { name: 'Developer Tools', scenario: 'Better SDKs, examples and local tooling.', priority: 'Medium' },
]

/* ── 开发者 ── */
export const DEVELOPER_RESOURCES = [
  { name: 'Protocol SDK', desc: 'The integration toolkit for third parties.' },
  { name: 'API References', desc: 'Endpoints for authorization, routing and execution.' },
  { name: 'Example Projects', desc: 'Working references to copy and adapt.' },
  { name: 'GitHub Repositories', desc: 'Source, issues and RFCs.' },
  { name: 'Contract Addresses', desc: 'Deployed contracts on NEAR and checkpoints.' },
  { name: 'Integration Guides', desc: 'Step-by-step onboarding for wallets and dApps.' },
  { name: 'Developer FAQ', desc: 'Common questions and edge cases.' },
]

/* ── 基础设施 ── */
export const INFRASTRUCTURE_COMPONENTS = [
  { name: 'Zcash Shielded Assets & Settlement', desc: 'Shielded funding origin and settlement base.' },
  { name: 'HD Authorization Identity', desc: 'Dedicated derivation path for signing-only identities.' },
  { name: 'Noir TEE Privacy Relay', desc: 'Trusted execution for authorization and private routing.' },
  { name: 'NEAR Global Contract', desc: 'Programmable execution and access to supported DeFi.' },
  { name: 'NEAR Intents / Confidential', desc: 'Confidential execution where supported.' },
  { name: 'NoirRoot & Zcash Checkpoint', desc: 'Public state anchoring and verification.' },
  { name: 'Cross-Chain Asset Routing', desc: 'Movement of assets across chains under isolated identity.' },
]

export const SECURITY_ITEMS = [
  'Isolation between user funds and authorization identities',
  'Signature and replay protection',
  'TEE trust model, remote attestation and metadata protection',
  'Bridge security boundary and asset recovery',
  'Audit scope and reports',
  'Contract permissions, system dependencies and risks',
]

/* ── About ── */
export const VISION = {
  heading: 'From Zcash value storage to a programmable, private, multi-asset economy.',
  paragraphs: [
    'NoirProtocol starts with Zcash as private value storage, and extends it step by step into private assets, programmable finance, cross-chain applications, and a future multi-asset economy.',
    'The protocol keeps Zcash shielded assets at its core, uses NEAR for programmable execution, and layers identity isolation, a TEE privacy relay and confidential execution to offer different levels of privacy.',
  ],
}

export const HOME_SECTIONS = {
  privacyByDesign: [
    { name: 'Zcash Shielded Assets', desc: 'Funding origins stay inside the shielded pool.' },
    { name: 'Independent Authorization Identities', desc: 'Signing-only identities, never holding funds.' },
    { name: 'TEE Privacy Relay', desc: 'Authorization and routing inside trusted execution.' },
    { name: 'Confidential Execution', desc: 'Enhanced privacy where confidential infrastructure is connected.' },
  ],
}
