---
name: 修复 about.html 头图失效与排版异常问题
overview: 排查由于 Unsplash 图片直链防盗链/失效导致的图片加载失败（退化为占位符），并优化首屏遮罩、文字颜色与导航栏的层级关系，恢复页面的高端沉浸式观感。
todos:
  - id: write-fix-script
    content: 编写 fix-about-images.js 修复图片兜底机制
    status: completed
  - id: run-fix-script
    content: 执行脚本更新 about.html
    status: completed
    dependencies:
      - write-fix-script
---

## 用户需求

用户反馈 `about.html` 首屏因为头图加载失败，显示了巨大的带有尺寸文字（1920x1080）的浅灰色占位图。这直接导致了原本的高级设计遭到严重破坏，且白色主标题与浅灰背景融合，文字辨识度极差，影响了整体的高级观感。

## 问题分析

当前由于用户的网络原因或图片提供商（Unsplash）的防盗链/连接超时，导致头图未能成功加载，进而触发了代码中预设的 `onerror="this.src='https://placehold.co/1920x1080'"` 回退机制。这种回退机制在小图标上适用，但在全屏 Hero 头图上显得非常突兀且廉价。

## 解决方案与效果

1. **重构失败回退（Fallback）机制**：彻底摒弃使用 `placehold.co` 这类带有巨大文字的廉价灰色占位图。当图片加载失败时，直接静默隐藏破损的 `<img>` 标签（`this.style.display='none'`）。
2. **深色质感渐变兜底**：在图片的父级容器上，预先铺设一层深色的高级质感渐变（例如暗红过渡到深黑 `bg-gradient-to-br from-red-950 via-stone-900 to-black`）。这样在图片完美加载时，它安静地待在底层；而在图片加载失败被隐藏时，这层充满高级感和神秘感的暗色渐变就会透出来，充当完美的页面背景，同时彻底保证上方白色艺术字体的超高对比度与可读性。
3. **目的地卡片全局保护**：对 Destinations（目的地）网格区域中的所有图片均应用相同的“深色底板 + 无图优雅降级”逻辑，确保在任何离线或拦截情况下，网站都能维持“高端画册”的视觉底线。