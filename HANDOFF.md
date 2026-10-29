# HANDOFF — NoirProtocol 官网

> 这份文档给下一个接手的 AI 进程 / 开发者。读完它你应该能理解：这个项目是什么、现在到哪了、下一步做什么、哪些不能动。

## 1. 项目一句话

**NoirProtocol** 是面向 Zcash 生态的隐私优先可编程金融协议。这个仓库（`noir-site`）是它的**官网前端**——协议介绍站，**不是 dApp**。

定位公式：
```
Zcash（隐私资产 + 结算） + NEAR（可编程执行）
  + 身份隔离 + TEE 隐私中继 + Confidential Execution
  → 不同级别的隐私金融体验
```

## 2. 产品核心概念（写文案前必须先理解）

### 两种模式（官网最核心的产品概念）

| 模式 | 一句话 | 关键机制 |
|---|---|---|
| **Anonymous Mode**（基础） | Shielded Origin. Anonymous Identity. Open DeFi. | Shielded 资金路径接入（不用原始 Transparent Address 桥接）；HD 派生独立授权地址（仅签名、不持有 ZEC）；Noir TEE 中继处理授权；NEAR Global Contract 访问公开 DeFi；原始资金身份与执行身份隔离 |
| **Confidential Mode**（增强） | Anonymous by Design. Confidential by Execution. | 在匿名基础上 + 独立 Confidential Auth Identity + NEAR Confidential Intents / Confidential Account，保护受支持的持仓/交易/执行数据 |

**关键认知**：两种模式不是 Public 与 Private 的对立，是不同级别的隐私能力。Anonymous 保护的是「原始资金身份」，不保证公开 DeFi 的执行结果自动变机密。

### 品牌命名（统一，不得混用）

| 内容 | 正式名称 |
|---|---|
| 项目 | **NoirProtocol** |
| 钱包 | **NoirWallet**（首个 reference wallet） |
| 核心定位 | Privacy-First Programmable Finance |
| Hero 主标题 | Anonymous by Design. Confidential When Needed. |
| Hero 副标题 | Bringing Zcash privacy into programmable, cross-chain finance. |

## 3. 现在到哪了（进度）

### 已完成

- **视觉方向已定**：探索过三种风格（A dark-tech 光幕 / B editorial 极简 / C brutalist 技术图纸），**最终选定 C**。A/B 的代码已删除。
- **独立仓库已建**：`noir-site/`，干净的技术栈（见 §4）。
- **页面骨架完整**：六大导航 + 20 个路由 + 首页 8 个 section，全部可渲染。
- **内容数据源已建**：`src/content.ts` 集中管理所有文案。
- **brutalist 视觉语言完整**：SVG 隐私层线图、从上往下扫描线、`/01` 编号、`+` 分隔符、live-dot、四角金框、标题入场动画、plum/暖白/金色配色。

### 未完成（下一步的重点）

1. **内容仍是「规划文案」，不是「定稿文案」**。`content.ts` 里的文案来自规划文档，很多是"应该有什么"而不是"实际怎么说"。需要产品/市场定稿。
2. **Live/Beta/Planned 状态未确认**。规划文档明确说"发布前按实际交付情况确认"。当前 `content.ts` 里的 status 是我按规划措辞推测的（lending=Beta，其余多为 Planned），**需要团队确认真实状态**。
3. **数据是空的**：`/stats` 的指标全是「—」，`/explorer` 是占位，`/blog` 是「Upcoming」占位，`/adoption` 只有 NoirWallet 一项。
4. **子页面视觉较朴素**：子页面（Privacy/Solutions/Ecosystem…）用的是通用组件类，**没有**首页那种 `+` 分隔符、`/01` 编号、SVG 线图。如果要对齐 brutalist 风格，需要逐页加。
5. **无 i18n**：目前只有英文。规划提到未来可加中文。
6. **无真实外部链接**：GitHub 指向 `https://github.com/NoirWallet/NoirProtocol`（规划文档给的参考仓库），NoirWallet 的跳转目前都指向 `#/privacy` 占位。

## 4. 技术栈与结构

```
React 19 + TypeScript + Vite 6 + 纯自定义 CSS + hash 路由
（无 Tailwind / 无 shadcn / 无 react-bits / 无 NUI3 / 无任何 UI 库）
```

```
src/
├── main.tsx           入口（StrictMode，无主题切换）
├── App.tsx            六大导航（下拉）+ 20 页路由 + 页脚
├── index.css          brutalist 主题 + 全部组件类（11.45KB）
├── content.ts         ★ 内容数据源 —— 改文案只改这里
└── pages/
    ├── Home.tsx       首页（hero + 隐私层线图 + 8 section）
    ├── Solution.tsx   五解决方案通用模板（数据驱动）
    ├── PrivacyOverview.tsx / PrivacyDetail.tsx
    ├── Ecosystem.tsx   Ecosystem / Programs / Requests
    ├── Developers.tsx  Build / Resources
    ├── Infra.tsx       Infrastructure / Security / Explorer / Stats
    └── About.tsx       Vision / Adoption / Blog / Contact
```

开发命令：
```bash
npm install
npm run dev      # 默认 5173
npm run build    # 产出 dist/
```

## 5. 页面路由全表

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
```

## 6. 绝对不能违背的约束（来自产品规划，硬性）

1. **官网不是 dApp**：不实现 Connect Wallet、余额查询、交易签名、Swap 报价、Lending 操作、Bridge 划转。所有实际使用类 CTA 跳转到 NoirWallet 或合作应用。
2. **不设 `/fund` 页面**，不做生态投资 / Grant / 资金奖励。生态合作是技术性、非资金性的。
3. **状态必须诚实**：Live / Beta / Planned 三态，不能把规划的 Confidential 功能、SDK、桥接能力描述成已上线。数据为空就不展示空页面（`/stats` 现在显示「—」+ 说明，符合此原则）。
4. **隐私措辞规范**：对外产品名用 Anonymous Mode / Confidential Mode；技术文档可用 Public Execution / Confidential Execution。不得把公开流程写成 "private" / "anonymous" / "fully private"。
5. **匿名性表述准确**：区分「原始资金身份保护」和「公开链上的执行信息」；Confidential 要明确支持范围与信任假设。
6. **统计口径分离**：NoirProtocol 指标 ≠ NoirWallet 指标，不能把钱包用户数当协议活跃用户数。

## 7. 视觉语言（brutalist，改动要保持一致）

- 配色：plum `#140a0d` 底 + 暖白 `#f3f1ef` + 金色 `#f3b724`（**唯一**强调色，占比克制）
- 字体：标题衬线（Iowan Old Style）+ 正文/标签等宽 mono（`ui-monospace`）
- 方角、细线分隔、零投影、零圆角（按钮圆角 2px 是唯一例外）
- 元素：`/01` 编号、`+` 分隔符、`[ ]` brackets、live-dot 闪烁、四角金框、坐标标注（`X_36.17…`）、SVG 线图 + 扫描线、标题入场动画
- 这些元素只在**首页**完整存在；子页面要补 brutalist 元素时，用已有的 `.c-*` 类，别新造样式

## 8. 关键决策记录（为什么是这样）

| 决策 | 原因 |
|---|---|
| 选 C（brutalist）而非 A/B | 用户明确选定；技术图纸风贴合"隐私 + 可审计"的协议气质 |
| 脱离 NUI3 | 用户要求"C 跟 NUI3 没有任何关系"，视觉复用但零依赖、零品牌痕迹 |
| 内容集中到 `content.ts` | 一份数据源，多页面复用，改文案一处生效 |
| hash 路由而非 react-router | 单页官网无需完整路由库，保持零依赖 |
| 纯 CSS 而非 Tailwind | 独立仓库最小化依赖，视觉语言固定不需要工具类 |

## 9. 内容来源

- **《NoirProtocol 官方网站架构与内容规划说明》V1.0**（2026-10-29，用户提供）—— 官网信息架构与内容基线，所有文案的母本。
- 技术规划参考：https://github.com/NoirWallet/NoirProtocol

## 10. 建议的下一步（按优先级）

1. **确认 Live/Beta/Planned 真实状态** → 改 `content.ts` 里 `SOLUTIONS` 的 `status` 字段。
2. **文案定稿** → 逐条替换 `content.ts` 里的规划措辞。
3. **补真实数据** → `/stats` 指标、`/adoption` 合作方、`/blog` 文章、`/explorer` 公开信息。
4. **子页面 brutalist 打磨** → 给 Privacy/Solutions 等子页面加 `+` 分隔符、`/01` 编号、SVG 线图（如需要）。
5. **i18n** → en 优先，zh 后续（`content.ts` 目前是纯英文，要加 zh 需要改成双语结构）。
6. **部署** → `npm run build` 产出 `dist/`，可上任意静态托管。

---

### 给 AI 接手的一句提醒

改内容优先改 `src/content.ts`，不要散落改各页面组件。改视觉优先复用 `index.css` 里已有的类，不要新造颜色/字号/圆角。违背 §6 的六条约束之前，先停下来和团队确认。
