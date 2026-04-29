---
name: add-official-visa-links
overview: 在签证指南页面（visa-guide.html）中补充中国国家移民管理局（NIA）和中国签证申请服务中心（CVASC）的官方权威链接，提升内容的权威性和政策的实效性。
todos:
  - id: update-visa-guide
    content: 使用 [skill:frontend-design] 在主站 visa-guide.html 中插入官方链接组件
    status: completed
  - id: sync-visa-links
    content: 编写并执行 Node.js 脚本，将更新同步至各多语言目录
    status: completed
    dependencies:
      - update-visa-guide
  - id: cleanup-script
    content: 清理临时注入脚本
    status: completed
    dependencies:
      - sync-visa-links
---

## 用户需求

- **核心目标**：应用户要求，在签证指南页面（`visa-guide.html`）中补充官方政府与机构网站链接，以提供权威的政策背书，并方便外国游客实时查阅最新政策。
- **页面规划**：修改主站及所有多语言版本的 `visa-guide.html`，植入“Official Resources（官方资源）”模块。

## 产品视图

在现有签证指南页面的核心位置（如“144小时过境免签”与“普通旅游签证”内容之间或末尾），加入设计优雅、且具官方权威感的卡片区块，清晰指引用户前往官方渠道获取信息和申请签证。

## 核心功能

- **官方过境免签政策链接**：链接至中国国家移民管理局（NIA - National Immigration Administration）。
- **官方签证申请链接**：链接至中国签证申请服务中心（CVASC - Chinese Visa Application Service Center），这是全球外国人申请中国签证的唯一官方门户。
- **多语言同步分发**：利用脚本将这块内容无损地注入到 `zh/`、`es/`、`fr/` 目录的 `visa-guide.html` 中。

## Tech Stack

- Frontend: HTML5, Tailwind CSS, 现有 `common.css`
- Automation: Node.js 脚本用于批量 DOM 操作/字符串注入。

## Implementation Approach

- **UI 设计**：利用我们现有的 Premium 风格，构建一个深色或带有国徽/官方特征暗示的高级感卡片。使用 Grid 布局分为两栏，分别指向 NIA 和 CVASC。
- **自动化注入**：不手动修改每个语言的页面。创建一个名为 `inject-official-links.js` 的脚本，定位到 `<!-- AdSense Horizontal Slot -->` 或相关锚点，自动插入这块代码。

## Directory Structure

```text
d:/chuhai/chinahub/
├── visa-guide.html           # [MODIFY] 注入官方资源卡片
├── zh/visa-guide.html        # [MODIFY] 注入官方资源卡片
├── es/visa-guide.html        # [MODIFY] 注入官方资源卡片
├── fr/visa-guide.html        # [MODIFY] 注入官方资源卡片
└── inject-links.js           # [NEW] 用于批量修改的临时 Node.js 脚本
```

### Skill

- **frontend-design**
- Purpose: 确保新增的“官方资源”卡片UI组件在保持权威感的同时，完全融入现有的高级旅游杂志（Premium Editorial）设计风格。
- Expected outcome: 生成的 HTML 模块排版优雅，包含 hover 动画并自适应移动端。