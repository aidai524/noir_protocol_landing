# NoirProtocol — 官网前端

NoirProtocol 官方网站，brutalist / 技术图纸风格。基于 C 版本（原 `site/` 里的 C 主题）抽出的独立仓库，脱离 NUI3，内容来自《NoirProtocol 官方网站架构与内容规划说明》V1.0。

## 技术栈

- React 19 + TypeScript + Vite
- 纯自定义 CSS（无 Tailwind / 无 shadcn / 无 react-bits / 无 NUI3 依赖）
- hash 路由（`#/privacy` 等）

## 开发

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 产出 dist/
```

## 目录结构

```
src/
├── main.tsx           入口
├── App.tsx            六大导航 + 路由 + 页脚
├── index.css          brutalist 主题（plum 底 + 暖白 + 金色）
├── content.ts         内容数据源（品牌 / 导航 / 两模式 / 五方案 / 生态 / 基础设施 / About）
└── pages/
    ├── Home.tsx       首页（hero + 隐私层线图 + 8 个 section）
    ├── Solution.tsx   五解决方案通用模板
    ├── PrivacyOverview.tsx
    ├── PrivacyDetail.tsx
    ├── Ecosystem.tsx  生态 / 合作计划 / 建设者需求
    ├── Developers.tsx 构建 / 资源
    ├── Infra.tsx      架构 / 安全 / 浏览器 / 统计
    └── About.tsx      愿景 / 合作 / 博客 / 联系
```

## 页面路由

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

## 视觉语言

- 配色：plum `#140a0d` 底 + 暖白 `#f3f1ef` + 金色 `#f3b724`（唯一强调）
- 字体：标题衬线（Iowan Old Style）+ 正文/标签等宽 mono
- 元素：`/01` 编号、`+` 分隔符、`[ ]` brackets、live-dot 闪烁、四角金框、坐标标注、SVG 线图 + 从上往下扫描线、标题入场动画

## 约定

- 所有页面内容改 `src/content.ts`，一处改三页同步
- 状态规范 Live / Beta / Planned，发布前按实际交付确认
- 官网是协议介绍，不做钱包连接 / 交易 / 签名等资金操作
