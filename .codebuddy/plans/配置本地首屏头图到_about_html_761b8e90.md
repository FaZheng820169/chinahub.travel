---
name: 配置本地首屏头图到 about.html
overview: 将 about.html 及其多语言版本中的首屏头图外部占位链接，替换为用户上传的本地图片 image/about-hero.jpg，并自动处理多语言目录下的相对路径。
todos:
  - id: create-hero-script
    content: 编写 apply-hero-image.js 脚本计算相对路径并替换头图
    status: completed
  - id: execute-hero-script
    content: 执行脚本批量更新所有关于页面的本地首屏头图
    status: completed
    dependencies:
      - create-hero-script
---

## 用户需求

用户已经在本地 `image` 目录下配置好了首屏头图文件 `image/about-hero.jpg`，现在需要将这张本地图片应用到全站各语言版本的 `about.html` 页面的首屏区域。

## 核心目标

- 替换根目录和各个多语言子目录（如 `zh/`, `fr/`, `es/`）中 `about.html` 首屏 `<header>` 内 `<img>` 标签的 `src`。
- 确保引用路径的正确相对性（根目录使用 `image/about-hero.jpg`，子目录使用 `../image/about-hero.jpg`），从而保证本地 `file://` 协议下双击 HTML 也能顺利加载图片。

## 技术方案

### 自动化替换脚本

由于项目涉及多个语言目录的 HTML 文件，手动修改容易遗漏且路径容易出错。将采用 Node.js 脚本自动化完成：

1. **递归遍历**：扫描并找出所有的 `about.html` 文件。
2. **动态相对路径**：根据当前 HTML 文件的位置，动态计算相对于项目根目录下 `image/about-hero.jpg` 的路径（如同级目录计算为 `image/about-hero.jpg`，子目录计算为 `../image/about-hero.jpg`）。
3. **正则替换**：匹配原本写入的 `https://images.unsplash.com/photo-1543097692...` 图片链接，替换为本地计算好的相对路径，并保持现有的类名（如动画效果）与 `onerror` 兜底机制不变。

### 执行细节

- 新建替换脚本：`scripts/apply-hero-image.js`
- 替换目标：精确修改首屏 Hero 背景图片的 `src` 属性。