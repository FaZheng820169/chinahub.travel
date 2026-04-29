---
name: 修复 Bento Grid 布局显示坍塌问题
overview: 运行 Tailwind CSS 编译命令，将新写入 HTML 的高级排版样式打包至 common.css，解决景点网格高度塌陷变窄的显示异常。
todos:
  - id: rebuild-tailwind-css
    content: 执行 npm run build:css 重新编译全局样式表
    status: completed
---

## 用户需求与问题分析

用户反馈 `about.html` 页面底部的 "Top Destinations" 景点板块显示异常，从截图可以看出整个网格发生了严重的高度塌陷，内容被挤压成了一条极窄的横线。

## 根本原因

由于新注入的高级便当盒（Bento Grid）布局使用了大量 Tailwind CSS 的 JIT（即时编译）特性类名（例如自定义高度 `auto-rows-[250px]`、大圆角 `rounded-[2rem]` 以及特定的动效类名等）。
在此前的步骤中，我们仅通过脚本更新了多语言目录下的 HTML 文件，却**遗漏了重新编译项目样式表**这一关键步骤。浏览器由于找不到这些新生成的 CSS 类，且卡片内部元素采用了绝对定位（`absolute inset-0`），导致父容器失去高度支撑，瞬间发生了高度坍塌。

## 解决方案

只需执行项目 `package.json` 中配置的样式构建命令，让 Tailwind CSS 扫描最新的 HTML 内容并重新生成 `common.css` 文件，即可完美恢复 6 宫格的高度与精美排版。

## 技术实现

- **构建工具**：Tailwind CSS
- **核心操作**：通过执行项目内置的 npm script `npm run build:css`，触发 Tailwind CLI 根据 `tailwind.config.js` 的配置（扫描所有的 `.html` 文件），将新引入的自定义类名编译并压缩到 `common.css` 中。
- **生效机制**：编译完成后，浏览器刷新即可正确解析 `auto-rows-[250px]` 等关键高度属性，彻底解决高度坍塌问题。