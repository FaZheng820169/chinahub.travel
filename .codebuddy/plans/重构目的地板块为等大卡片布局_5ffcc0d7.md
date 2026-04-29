---
name: 重构目的地板块为等大卡片布局
overview: 摒弃目前大小不一的便当盒网格，将 6 个景点的卡片统一修改为规格完全一致（3列2行）的高级标准卡片排版，并保留精致的悬浮动效。
design:
  architecture:
    framework: html
  styleKeywords:
    - Uniform Grid
    - Consistency
    - Dark Premium
    - Micro-interactions
  fontSystem:
    fontFamily: sans-serif
    heading:
      size: 36px
      weight: 700
    subheading:
      size: 18px
      weight: 500
    body:
      size: 14px
      weight: 400
  colorSystem:
    primary:
      - "#DC2626"
    background:
      - "#1C1917"
    text:
      - "#FFFFFF"
    functional:
      - "#D1D5DB"
todos:
  - id: write-uniform-script
    content: 使用 [skill:frontend-design] 编写 uniform-destinations.js 替换脚本
    status: completed
  - id: execute-uniform-script
    content: 执行脚本批量将等大卡片排版应用到全站的 about.html
    status: completed
    dependencies:
      - write-uniform-script
  - id: rebuild-css
    content: 运行 npm run build:css 重新编译 Tailwind 全局样式
    status: completed
    dependencies:
      - execute-uniform-script
---

## 用户需求与问题分析

用户希望将关于页面（`about.html`）底部的“热门目的地（Top Destinations）”板块从当前大小不一的便当盒错层排版（Bento Grid）改为**尺寸完全一致的统一卡片样式**。

## 核心功能

- 保持现有的 6 个精选目的地不变（北京、西安、成都、桂林、杭州、上海）。
- 完整保留原有的高级视觉与微交互元素：深色遮罩渐变、图片平滑放大动效、毛玻璃分类标签（Tags）、悬浮时浮现的文字描述以及“探索”按钮。
- 重构外层网格布局，在 PC 端采用 3 列 2 行的等分布局（如 `grid-cols-3`），中等屏幕采用 2 列，移动端采用 1 列，并为每张卡片设定固定的高度（如 `h-[420px]`），确保所有目的地拥有完全相同的高宽比例和视觉展现权重。

## 技术方案

- **自动替换脚本**：编写全新的 Node.js 脚本 `scripts/uniform-destinations.js` 进行全站多语言目录内容的批量替换。
- **HTML 结构重构**：
- 将外层容器修改为标准的等分网格 `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`。
- 移除原有的 `col-span` 和 `row-span` 类名。
- 为每个卡片主容器添加统一的高度类名 `h-[400px]` 或 `h-[420px]`。
- 统一卡片内部的排版，确保标题、标签和浮现文字在同样尺寸的卡片中完美对齐。
- **样式重编译**：由于更改了网格参数和固定高度类名，修改完成后必须再次执行 `npm run build:css` 来更新 `common.css`。

### 目录结构变动

```text
project-root/
├── scripts/
│   └── uniform-destinations.js  # [NEW] 批量替换目的地板块为等大卡片的 Node.js 脚本
```

采用整齐划一的等分网格布局，通过统一的卡片高度和排版比例，传递严谨且一致的高级图册质感。继承深色模式下的大圆角、多重阴影和悬浮显影动效。

## Agent Extensions

### Skill

- **frontend-design**
- Purpose: 编写前端代码与自动化替换脚本，设计统一高质感的等大卡片网格布局，处理响应式和高级悬浮动效。
- Expected outcome: 生成包含精确 Tailwind 类名和统一 DOM 结构的 `uniform-destinations.js` 脚本文件。