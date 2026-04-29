---
name: 重构并升级 Culture & Destinations 页面 (about.html) UI 设计
overview: 将当前基础简陋的图文排版全面升级为符合“高端旅游指南”定位的现代 UI 设计。重点引入视觉冲击力更强的全屏沉浸式 Hero 头图、现代 Bento Grid（便当盒布局）展示热门目的地、并利用毛玻璃卡片和悬浮微动效（Hover Animations）优化“最佳旅行时间”和“美食文化”版块，全方位提升视觉与交互体验。
design:
  architecture:
    framework: html
  styleKeywords:
    - Bento Grid
    - Premium Editorial
    - Glassmorphism
    - Micro-interactions
  fontSystem:
    fontFamily: Inter
    heading:
      size: 48px
      weight: 800
    subheading:
      size: 24px
      weight: 600
    body:
      size: 16px
      weight: 400
  colorSystem:
    primary:
      - "#DC2626"
      - "#B91C1C"
    background:
      - "#FFFFFF"
      - "#F9FAFB"
    text:
      - "#111827"
      - "#4B5563"
    functional:
      - "#FEF2F2"
      - "#991B1B"
todos:
  - id: redesign-about-page
    content: 使用 [skill:frontend-design] 设计 about.html 的高级版结构与样式
    status: completed
  - id: apply-redesign
    content: 编写并执行替换脚本将新的高级布局写入 about.html
    status: completed
    dependencies:
      - redesign-about-page
---

## 用户需求

用户反馈 `about.html` (Culture & Destinations) 页面的设计不够高级，排版较为平庸，需要进行深度的 UI/UX 完善。当前页面采用了基础的 `prose` 长文本和相对传统的左图右文堆叠排列，缺乏现代网页设计的精致感、视觉冲击力以及细腻的交互反馈。

## 核心目标

- **提升视觉高级感**：废除大段枯燥的长文本排版，引入现代化的卡片式设计（如 Bento Grid 便当盒布局）、毛玻璃效果（Glassmorphism）和精美的排版层次。
- **增强交互体验**：增加平滑的微交互（Micro-interactions），例如图片的沉浸式悬停放大（`group-hover:scale`）、卡片的平滑阴影过渡等。
- **重构内容模块**：
- **头图区 (Hero)**：增加更有质感的渐变遮罩、视差感和居中留白的高级排版。
- **目的地 (Destinations)**：改造成高级摄影展示风格的自适应网格图片墙，内置底部渐变阴影与文字悬浮。
- **旅行时间与美食 (When to Visit & Food)**：采用模块化卡片排版，将“黄金周避坑指南”等内容做成具有高警示度且美观的毛玻璃提示框。

## 技术实现方案

- **技术栈**：Vanilla HTML5 + Tailwind CSS + 原生 JavaScript 滚动动画（复用现有的 `reveal-up` 逻辑）。
- **内容重构逻辑**：编写 Node.js 替换脚本或直接对文件内容进行更新。保留页面头部的 `<nav>` 导航、`<div id="mobile-menu">` 移动端菜单以及底部的 `<footer>` 以确保全局一致性，仅对中间的 `<header>` 沉浸式头图和 `<main>` 内容容器进行彻底的高级化重写。
- **Tailwind 核心类名运用**：
- **高级布局**：摒弃单纯的 `flex-col`，使用 `grid`, `grid-cols-1 lg:grid-cols-3`, `gap-6` 或 `gap-8` 构建出色的网格与 Bento 布局。
- **质感渲染**：运用 `backdrop-blur-xl`, `bg-white/80`, `shadow-2xl shadow-black/5` 打造毛玻璃卡片与空间立体感。
- **沉浸动效**：结合 `group`, `overflow-hidden`, `transition-transform duration-700`, `group-hover:scale-110` 实现图片悬停时的平滑放大效果。

## 目录结构变更

```text
project-root/
└── about.html      # [MODIFY] 彻底重写 <header> 和 <main> 标签内的 UI 结构以大幅提升视觉体验
```

## 设计风格

采用“Premium Editorial”（高级杂志编辑风）与“Bento Grid”（现代便当盒网格）相结合的设计理念。利用 Tailwind CSS 构建具有大面积留白、精致字体排印以及沉浸式图像全覆盖的卡片。融入现代化的毛玻璃（Glassmorphism）和细腻的悬停微动效（Micro-interactions），极致展现中国五千年文化的大气与厚重，呈现出超越常规模板的高端定制感。

## Agent Extensions

### Skill

- **frontend-design**
- Purpose: 运用顶级前端设计规范重构 about.html，设计高级感拉满的 Bento Grid 和沉浸式卡片，摒弃廉价的通用 AI 审美。
- Expected outcome: 产出具有精美排版、毛玻璃效果、微交互动效的现代化 Tailwind HTML 布局结构。