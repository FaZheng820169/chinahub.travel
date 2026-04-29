---
name: 重新设计并扩充 Destinations 景点板块
overview: 扩充热门目的地数量（新增成都、桂林、杭州），并将当前的 3 卡片简易网格升级为更高级、更具探索感的 6 卡片精美 Bento Grid 布局，全面提升交互和视觉表现力。
design:
  architecture:
    framework: html
  styleKeywords:
    - Bento Grid
    - Cinematic
    - Micro-interactions
    - High Contrast
    - Modern Luxury
  fontSystem:
    fontFamily: system-ui
    heading:
      size: text-4xl to text-6xl
      weight: .nan
    subheading:
      size: text-sm
      weight: .nan
    body:
      size: text-lg
      weight: .nan
  colorSystem:
    primary:
      - "#DC2626"
      - "#D97706"
      - "#2563EB"
      - "#16A34A"
      - "#9333EA"
      - "#0891B2"
    background:
      - "#1C1917"
      - "#000000"
    text:
      - "#FFFFFF"
      - "#D1D5DB"
    functional:
      - "#FFFFFF"
todos:
  - id: write-redesign-script
    content: 使用 [skill:frontend-design] 编写 redesign-destinations.js 以重构 6 个景点的网格布局
    status: completed
  - id: execute-redesign-script
    content: 执行脚本批量将全新的景点版块应用到全站的 about.html 中
    status: completed
    dependencies:
      - write-redesign-script
---

## 用户需求分析

**当前问题**：
用户认为 `about.html` 页面中关于具体景点（Destinations）的设计依然不够出色，且展示的景点数量过少（目前仅有北京、西安、上海 3 个城市），无法充分体现中国丰富的旅游资源。

**核心目标**：

1. **扩充景点内容**：将展示的景点数量翻倍，从 3 个扩展至 6 个，新增成都（大熊猫与美食）、桂林（喀斯特山水自然风光）、杭州（江南水乡与茶文化），覆盖历史、现代、自然与人文。
2. **重塑 UI 布局与交互**：

- 彻底打破现有对称或简单的网格，采用极具视觉张力的**高级不对称便当盒（Bento Grid）**布局。
- 增强卡片的悬浮交互（Hover Effects），例如加入更细腻的光影过渡、隐藏的 "Explore" 探索按钮以及平滑的文字浮现动效。

3. **保留安全机制**：新加入的所有景点图片必须继承已有的 `onerror="this.style.display='none'"` 容错机制及 `bg-stone-900` 深色背景兜底，以防网络问题导致排版崩溃。

## 技术方案

### 布局架构升级

- **网格系统**：使用 Tailwind 的 CSS Grid 系统（`grid-cols-1 md:grid-cols-12`），配合跨行（`row-span`）和跨列（`col-span`）类名，构建一个 3 行以上的不规则、错落有致的高级画册排版。
- *北京/上海*：大跨度横屏展示（`col-span-8` 或 `col-span-12`）。
- *西安/成都*：高瘦型或方正型中等卡片（`col-span-4 row-span-2` 或 `col-span-6`）。
- *桂林/杭州*：形成视觉对比的小型精致卡片或全宽卡片。
- **微交互与动画**：
- 容器级别：`group overflow-hidden rounded-3xl relative cursor-pointer shadow-2xl`
- 图像级别：`transition-transform duration-700 group-hover:scale-110`
- 遮罩级别：`bg-gradient-to-t from-black/95 via-black/40 to-transparent`，配合 hover 态的色调加深。
- 内容级别：标签（Tag）、标题、描述文字通过 `translate-y` 和 `opacity` 实现顺序淡入。

### 自动化覆盖策略

采用 Node.js 脚本全站替换方案，确保所有语言目录下的页面同步更新：

1. 编写脚本 `scripts/redesign-destinations.js`，定义一段全新的 HTML 字符串作为 `#destinations` 的内容。
2. 脚本将扫描根目录和 `zh/`、`fr/`、`es/` 下的所有 `about.html`。
3. 通过正则表达式精确匹配 `<section id="destinations"> ... </section>` 整个区块，并将其替换为升级版的 6 宫格 HTML。

采用“现代高端画册”与“高级不对称排版 (Bento Grid)”风格。强调极高对比度的暗色背景底图与白色粗衬线字体的冲击力。通过阴影、渐变遮罩和放大微动效，打造电影级别的沉浸式视觉体验。

## Agent Extensions

- **Skill**: **frontend-design**
- **Purpose**: 提供专业的前端视觉设计指导，编写具有极高审美水准和复杂动画逻辑的 6 宫格不对称便当盒（Bento Grid）HTML/CSS 结构。
- **Expected outcome**: 产出包含精美排版、平滑 hover 动效、完美遮罩和容错属性的高级 UI 代码段，集成到 Node.js 替换脚本中。