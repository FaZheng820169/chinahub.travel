---
name: Premium-Redesign-and-Monetization-Plan
overview: 将网站重构为面向全球用户的顶级英文旅游指南，采用现代高端UI设计，重组SEO友好的内容架构，并规划高转化率的广告与联盟营销位。
design:
  architecture:
    framework: html
  styleKeywords:
    - Premium Magazine
    - Minimalism
    - Immersive
    - Clean Layout
  fontSystem:
    fontFamily: Inter, sans-serif
    heading:
      size: 48px
      weight: 800
    subheading:
      size: 24px
      weight: 600
    body:
      size: 18px
      weight: 400
  colorSystem:
    primary:
      - "#D83A27"
      - "#B02F1F"
      - "#E45342"
    background:
      - "#FAFAFA"
      - "#FFFFFF"
    text:
      - "#1A1A1A"
      - "#4A4A4A"
    functional:
      - "#2563EB"
      - "#10B981"
      - "#F59E0B"
todos:
  - id: setup-english-foundation
    content: 使用 [skill:frontend-design] 重构首页为英文版并更新全局 CSS 设计规范
    status: completed
  - id: split-seo-pillar-pages
    content: 拆分并翻译 `about-china.html` 为三个独立英文 SEO 专题页
    status: completed
    dependencies:
      - setup-english-foundation
  - id: develop-monetization-ui
    content: 设计并植入高转化的 Affiliate 推广卡片及无缝的 AdSense 广告位
    status: completed
    dependencies:
      - setup-english-foundation
  - id: build-interactive-checker
    content: 开发 JS 驱动的 "China Visa Exemption Checker" 互动工具提升停留时长
    status: completed
    dependencies:
      - split-seo-pillar-pages
  - id: finalize-compliance-contact
    content: 完成全英文合规页面收尾并搭建有效的 Contact Us 联系表单页面
    status: completed
    dependencies:
      - develop-monetization-ui
---

## 需求分析

核心目标是将现有的粗糙中文静态页，改造为面向全球搜索引擎（Google）高度优化的、具备极强变现能力的英文旅游指南站点。

### Core Features

- **全面英文化**：全站基础语言切换为英文（`en`），直接匹配海外用户搜索意图。
- **SEO 结构拆分**：将臃肿的长页面打散为高垂直度的主题支柱页（Pillar Pages），例如 `visa-guide.html`、`payment-apps.html`、`vpn-internet.html`。
- **高转化变现设计**：深度植入联盟营销（Affiliate）组件（如 eSIM 购买、VPN 订阅、交通预订卡片）与不影响阅读体验的 AdSense 广告占位符。
- **互动留存工具**：开发基于 JS 的轻量级互动组件，如“中国免签查询器（Visa Checker）”，极大提升页面停留时间。
- **国际化视觉信任**：以高端“旅游杂志”风格重构 UI，建立海外游客对网站的权威感和信任度。

## 技术栈与实施策略

### 技术栈选择

- **前端核心**：纯 HTML5 + CSS3 + Vanilla JS（无构建工具，保障最极致的首屏加载速度，迎合 Google SEO 的 Core Web Vitals 偏好）。
- **SEO 优化**：使用语义化 HTML 标签，补充 Open Graph (OG) 协议标签，实现精确的 Meta Description 匹配。

### 系统架构调整

- **目录扁平化**：URL 设计更具可读性（如 `/china-visa-guide.html`）。
- **模块化样式**：将 `common.css` 重构为包含基础变量、网格系统、广告占位系统、联盟营销卡片（Affiliate Cards）的轻量级设计框架。

### 变现与性能兼容

- **防布局偏移（CLS）**：为 AdSense 广告块设定 CSS 最小高度和占位背景，确保广告加载时页面不跳动。
- **图片优化策略**：对高质量的头图（Hero Images）使用预加载（Preload），非首屏图片实施懒加载（Lazy Load）。

采用“高端旅游杂志（Premium Travel Magazine）”的现代极简风格。抛弃原先稍显死板的排版，转而使用大面积留白、沉浸式的高清全屏配图，以及层次分明、极具可读性的现代化无衬线字体，直接对标一线国际旅游媒体，迅速建立海外用户的信任感。

## Agent Extensions

- **frontend-design**
- Purpose: 重构具有“高端旅游杂志”感观的现代英文 UI 与 Affiliate 变现组件
- Expected outcome: 产出更吸睛、符合海外审美并能引导用户点击转化的高质量 HTML/CSS 代码