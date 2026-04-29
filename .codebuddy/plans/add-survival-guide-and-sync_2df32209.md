---
name: add-survival-guide-and-sync
overview: 创建全新的“Survival Guide（生存指南）”页面，填补通讯、必备App、住宿登记、医疗等高价值信息盲区，并更新全站的导航和底部链接，最后同步到所有多语言版本。
design:
  architecture:
    framework: html
  styleKeywords:
    - Editorial
    - Premium
    - Minimalist
    - Glassmorphism
  fontSystem:
    fontFamily: Inter
    heading:
      size: 36px
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
  - id: create-survival-guide
    content: 使用 [skill:frontend-design] 创建 survival-guide.html 包含四大核心内容
    status: completed
  - id: create-injection-script
    content: 编写 Node.js 脚本批量向全站 Navbar 和 Footer 注入导航链接
    status: completed
    dependencies:
      - create-survival-guide
  - id: execute-sync
    content: 执行脚本完成全站注入及多语言目录(zh,es,fr)的文件同步
    status: completed
    dependencies:
      - create-injection-script
  - id: cleanup-scripts
    content: 清理临时的 Node.js 脚本文件
    status: completed
    dependencies:
      - execute-sync
---

## 用户需求

- **核心目标**：针对赴华外国人的核心痛点，补充高价值的“生存级”指南信息（通讯、必备App、住宿登记、医疗求助），彻底提升网站的实用价值与权威性。
- **页面规划**：新建一个综合性的 `survival-guide.html`（中国生存指南）页面，集中呈现上述四大板块。
- **全局同步**：更新全站导航栏（Navbar）和底部链接（Footer），加入“Survival Guide”入口，并将更新同步分发至所有多语言版本目录（zh, es, fr）。

## 产品视图

一个极具价值、设计精美的“中国生存百科”页面，配合流畅的全站导航更新，让外国旅客在落地前就能完全掌握在中国的必备生存技能。

## 核心功能

- **通讯指南**：SIM卡办理、实名制说明及外国友好型运营商推荐。
- **必备应用矩阵**：导航（Apple Maps/高德）、外卖（美团）、翻译（Pleco/Baidu）等高频场景App推荐。
- **合规与住宿**：涉外酒店科普与极其重要的“24小时派出所住宿登记”政策警告。
- **医疗求助**：紧急求救电话说明与国际医院就医流程。
- **全站路由更新**：批量更新全站 HTML 的顶部导航和底部导航。

## 技术栈选用

- **前端架构**：原生 HTML5 + Tailwind CSS (CDN) + 原生 JavaScript
- **全局样式**：复用现有的 `common.css`（衬线字体排版、毛玻璃特效、滚动揭示动画）
- **工程化脚本**：Node.js（用于批量处理静态 HTML 文件的 DOM 结构更新和多语言目录同步）

## 实现策略

1. **页面构建**：遵循既有的 Premium Editorial（高级杂志）设计规范，构建 `survival-guide.html`，确保信息层级清晰，重点提示（如住宿登记警告）使用高亮卡片组件。
2. **批量注入脚本**：为了避免手动修改数十个 HTML 文件的导航和页脚，将编写一个 Node.js 脚本，利用正则替换在全局 Navbar 和 Footer 的 `Essential Guides` 区域无损注入 `survival-guide.html` 的入口链接。
3. **多语言分发**：在上述脚本中集成同步逻辑，将更新后的 HTML 模板及新创建的页面分发至 `zh/`, `es/`, `fr/` 目录。

## 目录结构变更

```text
d:/chuhai/chinahub/
├── survival-guide.html     # [新增] 包含四大核心生存指南的页面
├── update-site.js          # [新增/临时] 用于批量注入导航和分发多语言的 Node.js 脚本
├── index.html              # [修改] 导航和页脚注入新链接
├── *.html                  # [修改] 根目录和子目录下的所有 HTML 都会被脚本批量更新
└── (zh|es|fr)/survival-guide.html # [新增] 同步至多语言目录
```

## 设计风格

延续先前确定的 **Premium Editorial（高级旅游杂志）** 风格。
通过大量的留白（Whitespace）、极具辨识度的衬线字体（Playfair Display）和深红色调（#B91C1C），传达权威与信任感。
使用毛玻璃卡片（Glassmorphism）来包裹关键信息（如 App 推荐和紧急电话），配合平滑的向下滚动揭示动画（Scroll Reveal），提供沉浸式的阅读体验。

## Agent Extensions

### Skill

- **frontend-design**
- Purpose: 确保新建的 `survival-guide.html` 页面完美继承高级杂志风格，排版优雅，包含毛玻璃组件和滚动动画。
- Expected outcome: 产出结构清晰、视觉极具高级感且符合既有 CSS 规范的 HTML 代码。