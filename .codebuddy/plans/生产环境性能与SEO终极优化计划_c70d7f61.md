---
name: 生产环境性能与SEO终极优化计划
overview: 通过引入 Tailwind CLI 提升加载性能、生成 robots.txt 和 sitemap.xml 完善 SEO，以及补充多语言目录内容，将项目提升至完美的生产环境就绪状态。
todos:
  - id: setup-tailwind
    content: 创建 tailwind.config.js，重命名 common.css 为 input.css 并添加指令
    status: completed
  - id: update-package
    content: 更新 package.json 添加 tailwindcss 依赖及 build:css 编译脚本
    status: completed
    dependencies:
      - setup-tailwind
  - id: remove-cdn
    content: 编写并执行 scripts/remove-cdn.js，清理全站 HTML 页面
    status: completed
    dependencies:
      - setup-tailwind
  - id: compile-css
    content: 安装 npm 依赖并运行编译脚本，生成生产级的 common.css
    status: completed
    dependencies:
      - update-package
      - remove-cdn
  - id: generate-seo
    content: 编写并执行脚本生成包含全站结构 sitemap.xml 和 robots.txt
    status: completed
    dependencies:
      - compile-css
  - id: mock-translate
    content: 编写并运行 scripts/mock-translate.js 实现多语言占位页面闭环
    status: completed
    dependencies:
      - compile-css
---

## Product Overview

执行 ChinaHub 项目的 100 分终极完善计划，解决性能、SEO 和多语言内容闭环问题。

## Core Features

- **性能优化**：移除全站 HTML 中的 Tailwind CDN 引入和内联 JS 配置，改用 Tailwind CLI 本地编译。消除由于 CDN 导致的页面加载样式闪烁 (FOUC) ，大幅减小页面网络请求开销。
- **SEO 补齐**：自动生成 `sitemap.xml` 网站地图和 `robots.txt` 爬虫协议，提升搜索引擎抓取效率。
- **多语言兜底闭环**：在不消耗大模型 API 额度的情况下，通过自动化脚本生成带有明确语言标识的占位页面，全量覆盖 `es/`、`fr/`、`zh/` 目录，确保多语言切换体验的完整性。

## Tech Stack

- 工具与语言：Node.js, Tailwind CSS (CLI)
- DOM 解析：Cheerio

## Implementation Approach

1. **样式编译策略**：将现有的 `common.css` 备份并重命名为 `input.css`，在其顶部加入 `@tailwind base; @tailwind components; @tailwind utilities;`。使用 Tailwind CLI 将其作为入口，编译输出并覆盖掉原有的 `common.css`。这样可以保证所有 HTML 中的 `<link rel="stylesheet" href="common.css">` 路径无需任何改动。
2. **批量清理 CDN**：编写 Node.js 脚本 `remove-cdn.js`，遍历根目录及子目录的所有 `.html` 文件，使用正则表达式自动移除 `<script src="https://cdn.tailwindcss.com"></script>` 和与其对应的 `tailwind.config` 内联代码块。
3. **SEO 自动化**：新增脚本 `generate-seo.js`，读取所有生成的 HTML 路径结构，拼装成标准的 XML 格式输出到 `sitemap.xml`，同时在根目录创建标准的 `robots.txt` 允许爬虫抓取。
4. **模拟多语言闭环**：新增 `mock-translate.js`。脚本将利用 Cheerio 读取根目录下所有英文页面，自动复制到对应的多语言目录（西班牙语、法语、中文），将 `<html lang="en">` 替换为目标语言代码，并在 `<title>` 以及正文关键标签（h1-h6）中加入显式的占位前缀（如 `[Español]`, `[中文]`），实现完整的体验闭环，待后续准备好 API Key 时再执行真实翻译。

## Directory Structure

```text
project-root/
├── tailwind.config.js       # [NEW] Tailwind 配置文件，包含项目主色调自定义
├── input.css                # [NEW] 将原 common.css 内容引入，并在顶部追加 Tailwind 基础指令
├── package.json             # [MODIFY] 增加 tailwindcss 开发依赖和 build:css npm 脚本
├── scripts/
│   ├── remove-cdn.js        # [NEW] 批量清理 HTML 内联配置和 CDN 链接的脚本
│   ├── generate-seo.js      # [NEW] 自动生成 sitemap.xml 和 robots.txt 的脚本
│   └── mock-translate.js    # [NEW] 基于 Cheerio 的模拟多语言页面生成工具
├── sitemap.xml              # [NEW] 生成的站点地图
├── robots.txt               # [NEW] 爬虫协议规则文件
├── common.css               # [MODIFY] 变为由 Tailwind CLI 自动编译、极致压缩后的生产环境 CSS
└── *.html (包括各子目录)    # [MODIFY] 被彻底清除冗余 CDN script 标签的纯净静态文件
```