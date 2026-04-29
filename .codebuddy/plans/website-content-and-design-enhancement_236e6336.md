---
name: website-content-and-design-enhancement
overview: 深度检查并完善网站内容（创建缺失的高铁指南页面、修复空链接），同时利用前端设计技能全面提升网站的视觉质感和用户体验。
design:
  architecture:
    framework: html
  styleKeywords:
    - Editorial
    - Premium
    - Glassmorphism
    - Smooth Motion
  fontSystem:
    fontFamily: Inter, Playfair Display
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
      - "#B91C1C"
      - "#991B1B"
      - "#7F1D1D"
    background:
      - "#FAFAFA"
      - "#FFFFFF"
    text:
      - "#111827"
      - "#4B5563"
    functional:
      - "#F59E0B"
      - "#10B981"
todos:
  - id: create-transport-guide
    content: 编写 transport-guide.html 补齐中国高铁交通指南
    status: completed
  - id: fix-affiliate-links
    content: 批量扫描并替换全站 href="#" 占位链接
    status: completed
    dependencies:
      - create-transport-guide
  - id: upgrade-ui-ux
    content: 使用 [skill:frontend-design] 重构 common.css 升级视觉系统
    status: completed
  - id: inject-scroll-motion
    content: 使用脚本向全站注入滚动揭示的微交互与动画逻辑
    status: completed
    dependencies:
      - upgrade-ui-ux
  - id: sync-multilingual-updates
    content: 构建多语言脚本将更新同步至各语言目录
    status: completed
    dependencies:
      - create-transport-guide
      - fix-affiliate-links
      - inject-scroll-motion
---

## 产品概述

ChinaHub 旅游指南网站内容与视觉体验全面升级计划。旨在通过补齐缺失的关键内容、修复无效链接，并运用高级前端设计理念重塑全站 UI/UX，将网站从“基础信息站”打造成“具有高转化价值的高端旅游指南平台”。

## 核心功能

- **内容补齐**：创建缺失的 `transport-guide.html`（中国高铁及交通指南页面），填补 Footer 中的死链漏洞。
- **链接修复**：修复各页面中所有的 `href="#"` 占位符，替换为模拟的真实高转化联盟链接（Affiliate Links）。
- **视觉与交互升级**：引入高级排版（Typography）、现代编辑风格配色、元素平滑滚动揭示动画（Scroll-reveal）及高级微交互，彻底消除通用模板的廉价感。
- **多语言同步**：将新增内容及视觉升级自动同步至中文 (`zh/`)、西语 (`es/`) 和法语 (`fr/`) 版本。

## 技术栈选用

- 前端框架：纯 HTML5 + Tailwind CSS (通过 CDN)
- 样式定制：原生 CSS3 (`common.css`) 与高级 CSS 变量
- 交互逻辑：Vanilla JavaScript (Intersection Observer API 实现滚动动效)

## 架构设计

### 系统架构

- 采用无构建工具的轻量级静态站点架构。
- **样式模块化**：Tailwind 处理原子化布局，`common.css` 处理复杂的自定义字体、动画关键帧（Keyframes）与毛玻璃（Glassmorphism）特效。
- **脚本注入化**：使用 Node.js 脚本批量向多个 HTML 页面注入动效逻辑和多语言映射。

## 实施细节

### 目录结构

```text
d:/chuhai/chinahub/
├── transport-guide.html  # [NEW] 中国高铁与交通核心指南
├── common.css            # [MODIFY] 注入高端设计字体与滚动动效样式
├── fix-links.js          # [NEW] 临时脚本：用于全站批量替换 href="#" 为真实结构的链接
├── inject-motion.js      # [NEW] 临时脚本：用于全站植入滚动监视器 (Intersection Observer)
└── sync-langs.js         # [NEW] 临时脚本：同步交通指南与样式变更至 zh, es, fr 目录
```

采用**现代极简编辑风格（Modern Editorial & Premium Minimalist）**。
摒弃基础的通用设计，通过大面积留白、精致的衬线与非衬线字体搭配、微妙的毛玻璃效果（Glassmorphism）和错落有致的滚动揭示动效（Scroll-reveal），营造类似于顶级数字杂志和奢华旅游品牌的质感。确保用户在浏览时感受到极高的可信度与专业价值。

## Agent Extensions

### Skill

- **frontend-design**
- Purpose: 指导并应用生产级别的高端 UI/UX 设计，提供字体排印、色彩科学、微交互及视觉层级优化的最佳实践。
- Expected outcome: 产出极具审美和辨识度的高级 `common.css` 及平滑的页面滚动动画代码。