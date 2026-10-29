# NoirProtocol — Website Frontend

Official website for **NoirProtocol**, the privacy-first programmable finance protocol for the Zcash ecosystem. Brutalist / technical-blueprint visual style, aligned with the product planning document V1.0.

## Tech Stack

- React 19 + TypeScript + Vite
- Pure custom CSS (no Tailwind / no shadcn / no UI library)
- Hash routing (`#/privacy`, etc.)
- Self-hosted fonts: DM Serif Display · Inter · IBM Plex Mono

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Project Structure

```
src/
├── main.tsx           Entry point
├── App.tsx            Six-section navigation + routing + footer
├── index.css          Brutalist theme (plum bg + warm white + gold accent)
├── content.ts         Content source (brand / nav / modes / solutions / ecosystem / infra / about)
├── components/
│   ├── BorderGlow.*   React Bits component (glowing border)
│   └── PixelCard.*    React Bits component (pixel ripple on hover)
└── pages/
    ├── Home.tsx       Homepage (hero + privacy-layer wireframe + 8 sections)
    ├── Solution.tsx   Five solutions (shared template)
    ├── PrivacyOverview.tsx / PrivacyDetail.tsx
    ├── Ecosystem.tsx  Ecosystem / Programs / Builder Requests
    ├── Developers.tsx Build / Resources
    ├── Infra.tsx      Infrastructure / Security / Explorer / Stats
    ├── About.tsx      Vision / Adoption / Blog / Contact
    └── Demo.tsx       Component trial page (temporary)
```

## Routes

```
#/                        Home
#/privacy                 Privacy Overview
#/privacy/anonymous       Anonymous Mode
#/privacy/confidential    Confidential Mode
#/payments /trading /lending /earn /bridge   Solutions ×5
#/ecosystem /programs /requests              Ecosystem
#/build /resources                           Developers
#/infrastructure /security /explorer /stats  Infrastructure
#/vision /adoption /blog /contact            About
#/demo                                        Component trial (temporary)
```

## Visual Language

- Palette: plum `#140a0d` background + warm white `#f3f1ef` + gold `#f3b724` (single accent)
- Fonts: DM Serif Display (headlines) · Inter (body) · IBM Plex Mono (labels/data)
- Elements: `/01` numbering, `+` separators, `[ ]` brackets, live-dot blink, corner frames, coordinate labels, SVG wireframe + scan line, title entrance animation

## Conventions

- All page content lives in `src/content.ts` — change it once, every page updates.
- Status must be honest: `Live` / `Beta` / `Planned`, confirmed before publishing.
- The website is a protocol introduction, not a dApp — no wallet connection, trading or signing.

## Deployment

Built as a static site (`dist/`). Deployable to Cloudflare Pages, Vercel, Netlify or any static host.

```bash
npm run build
# upload dist/ to your host
```
