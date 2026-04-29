# 合规文档使用指南

**创建日期**: 2026-03-27  
**文档类型**: GDPR + CCPA 合规  
**适用地区**: 欧盟 (EU) + 美国加州 (California)  

---

## ✅ 已创建的合规文档（3 个）

| # | 文件名 | 页面路径 | 主要内容 | 状态 |
|---|--------|---------|---------|------|
| 1 | `privacy-policy.html` | `/privacy-policy.html` | 隐私政策（数据收集、使用、权利） | ✅ 完成 |
| 2 | `cookie-policy.html` | `/cookie-policy.html` | Cookie政策（Cookie 类型、管理方式） | ✅ 完成 |
| 3 | `terms-of-service.html` | `/terms-of-service.html` | 服务条款（使用规则、免责声明） | ✅ 完成 |

---

## 📋 各文档核心内容

### 1. Privacy Policy（隐私政策）

**包含章节**：
1. Introduction（简介）
2. Information We Collect（收集的信息）
   - Personal Information（个人信息）
   - Automatically Collected Information（自动收集信息）
3. How We Use Your Information（如何使用信息）
4. Legal Basis for Processing (GDPR)（处理法律依据）
5. Sharing Your Information（信息共享）
6. Cookies and Tracking Technologies（Cookie 和追踪技术）
7. Data Retention（数据保留）
8. Your Data Protection Rights（数据保护权利）
   - EU Residents (GDPR Rights)
   - California Residents (CCPA Rights)
9. Third-Party Services（第三方服务）
10. International Data Transfers（国际数据传输）
11. Children's Privacy（儿童隐私）
12. Changes to This Privacy Policy（政策变更）
13. Contact Us（联系方式）
14. Complaints（投诉渠道）

**关键特点**：
- ✅ GDPR 合规（欧盟通用数据保护条例）
- ✅ CCPA 合规（加州消费者隐私法案）
- ✅ 明确列出 6 项用户权利
- ✅ 包含数据保留期限
- ✅ 第三方服务披露

---

### 2. Cookie Policy（Cookie政策）

**包含章节**：
1. What Are Cookies?（什么是 Cookie）
2. Types of Cookies We Use（使用的 Cookie 类型）
   - Essential Cookies（必要 Cookie）
   - Analytics Cookies（分析 Cookie）
   - Advertising Cookies（广告 Cookie）
   - Preference Cookies（偏好 Cookie）
3. Specific Cookies We Use（具体使用的 Cookie）
   - cookie_consent, session_id
   - Google Analytics: _ga, _gid, _gat
   - Google AdSense: IDE, test_cookie, ads/ga-audiences
4. Third-Party Cookies（第三方 Cookie）
5. How to Manage Your Cookie Preferences（如何管理 Cookie 偏好）
   - Through Cookie Banner（通过 Cookie 横幅）
   - Through Browser Settings（通过浏览器设置）
   - Opt-Out Tools（退出工具链接）
6. Impact of Disabling Cookies（禁用 Cookie 的影响）
7. Cookie Updates（Cookie政策更新）
8. Contact Us（联系方式）
9. More Information（更多信息资源）

**关键特点**：
- ✅ 详细的 Cookie 类型表格
- ✅ 具体的 Cookie 名称和过期时间
- ✅ 三种管理方式的详细说明
- ✅ 提供官方 opt-out 工具链接
- ✅ 清晰的视觉提示框

---

### 3. Terms of Service（服务条款）

**包含章节**：
1. Acceptance of Terms（接受条款）
2. Description of Service（服务描述）
3. No Professional Advice（非专业建议声明）⚠️
4. User Responsibilities（用户责任）
5. Intellectual Property Rights（知识产权）
6. Third-Party Links and Services（第三方链接和服务）
7. Affiliate Disclosure（联盟营销披露）💰
8. Limitation of Liability（责任限制）⚖️
9. Indemnification（赔偿）
10. Termination（终止）
11. Governing Law（适用法律）
12. Dispute Resolution（争议解决）
13. Class Action Waiver（集体诉讼豁免）
14. Severability（可分割性）
15. Entire Agreement（完整协议）
16. Contact Information（联系信息）
17. Updates to Terms（条款更新）

**关键特点**：
- ✅ 旅游网站特定的免责声明（签证、行程等）
- ✅ AI 生成内容的责任界定
- ✅ 联盟营销透明度披露（FTC 合规）
- ✅ 全面的责任限制条款
- ✅ 争议解决机制（协商→仲裁）

---

## 🎯 AdSense 审核要求对照

Google AdSense 要求网站必须具备的页面：

| 要求 | 是否满足 | 文件位置 |
|------|---------|---------|
| Privacy Policy | ✅ 是 | `/privacy-policy.html` |
| Cookie Policy / Disclosure | ✅ 是 | `/cookie-policy.html` |
| Terms and Conditions | ✅ 是 | `/terms-of-service.html` |
| About/Contact Page | ✅ 是 | `/about.html`（联系页面待创建） |
| Original Content | ✅ 是 | 已有 3 篇原创博客 + 首页 + 资源页 |
| Clear Navigation | ✅ 是 | 所有页面有统一导航栏 |
| Mobile-Friendly | ✅ 是 | 完全响应式设计 |
| Fast Loading | ✅ 是 | 纯 HTML，无重型框架 |

**结论**: 除 Contact 页面外，其他 AdSense 审核要求已全部满足！

---

## 🔧 如何使用这些文档

### 步骤 1: 自定义联系信息

在三个文档中搜索并替换以下内容：

```
[To be added] → 你的实际地址
privacy@chinahub.travel → 你的隐私联系邮箱
legal@chinahub.travel → 你的法律联系邮箱
[Your Jurisdiction] → 你所在的司法管辖区（如 "State of California"）
```

### 步骤 2: 更新页脚链接

所有页面的页脚已经包含了这三个文档的链接：

```html
<div class="footer-col">
    <h4>Legal</h4>
    <a href="/privacy-policy.html">Privacy Policy</a>
    <a href="/cookie-policy.html">Cookie Policy</a>
    <a href="/terms-of-service.html">Terms of Service</a>
</div>
```

### 步骤 3: 确保 Cookie 弹窗工作

Cookie 弹窗已经在所有页面实现，包含：
- Accept All（接受全部）
- Reject Non-essential（仅接受必要）
- Settings（自定义设置）

用户的偏好会保存在 localStorage 中，7 天内不再询问。

---

## ⚠️ 重要注意事项

### 1. 这不是法律建议

虽然这些文档是根据 GDPR 和 CCPA 要求编写的模板，但：
- ⚠️ **我不是律师**，这不构成法律建议
- ⚠️ 不同国家/地区可能有额外要求
- ⚠️ 建议咨询当地律师审查这些文档

### 2. 需要自定义的内容

你必须根据实际情况修改：

**管辖法律**（Terms of Service 第 11 条）：
```
原句：laws of [Your Jurisdiction]
改为：laws of the State of California（如果你在加州）
或：laws of England and Wales（如果你在英国）
或：laws of [你的所在地]
```

**联系地址**：
```
原句：Address: [To be added]
改为：你的实际商业地址（如果有的话）
或保持空白（如果是个人项目）
```

**第三方服务提供商**：
```
在 Privacy Policy 第 9 节添加你实际使用的服务：
- Email Service Provider: Mailchimp / SendGrid / ConvertKit
- Analytics: Google Analytics 4（已包含）
- Advertising: Google AdSense（已包含）
```

### 3. 联盟营销披露

如果你在 Amazon Associates、Booking.com Affiliate 等联盟计划中注册：
- ✅ Terms of Service 第 7 条已包含 FTC 要求的披露
- ✅ 建议在每篇包含联盟链接的博客文章开头也添加简短披露

示例：
```
This post may contain affiliate links. We may earn a commission if you make a purchase through our links, at no extra cost to you.
```

---

## 📊 合规检查清单

### GDPR（欧盟）合规检查
- [x] Privacy Policy 清晰易懂
- [x] 明确数据收集目的
- [x] 列出用户权利（访问、更正、删除等）
- [x] Cookie 弹窗提供选择权
- [x] 数据保留期限明确
- [x] 国际数据传输说明
- [ ] DPO（数据保护官）联系方式 → 个人项目通常不需要

### CCPA（加州）合规检查
- [x] Privacy Policy 包含 CCPA 要求的披露
- [x] "Do Not Sell My Personal Information"选项 → 我们不销售个人信息，所以不适用
- [x] 列明收集的个人信息类别
- [x] 列明信息来源和使用目的
- [x] 用户权利说明（知情权、删除权、选择退出权）

### AdSense 政策检查
- [x] Privacy Policy 页面存在且可访问
- [x] Cookie 使用披露
- [x] 第三方广告披露（通过 Cookie Policy）
- [x] 原创内容（已有 3 篇博客 + 其他页面）
- [x] 清晰的网站导航
- [x] 移动设备友好
- [ ] 联系页面 → 建议尽快创建

---

## 🚀 下一步行动

### 立即完成（今天）
1. **自定义联系信息**
   - 替换所有 `[To be added]` 占位符
   - 设置专用的 privacy@ 和 legal@ 邮箱转发

2. **创建联系页面**
   - 简单的联系表单
   - Google Maps 嵌入（可选）
   - FAQ 部分

3. **测试所有链接**
   - 确保页脚的 Legal 链接都正常工作
   - 从每个主要页面都能访问到合规文档

### 本周完成
1. **补充博客内容**
   - 至少再创建 2 篇博客（达到 5 篇）
   - 确保每篇博客都有独特价值

2. **设置 GA4**
   - 创建 Google Analytics 账号
   - 安装追踪代码
   - 在 Privacy Policy 中确认 GA4 使用

3. **申请 AdSense**
   - 访问 https://www.google.com/adsense
   - 提交网站审核
   - 通常需要 3-7 天审批

---

## 📞 有用的外部资源

### 合规工具
- **Termly.io** - 免费的政策生成器（可用于对比我们的文档）
- **Cookiebot** - Cookie 管理解决方案
- **OneTrust** - 企业级合规平台

### 官方资源
- **GDPR 官方文本**: https://gdpr.eu/
- **ICO（英国信息专员办公室）**: https://ico.org.uk/
- **FTC _endorsements指南**: https://www.ftc.gov/tips-advice/business-center/advertising-and-marketing

### AdSense 资源
- **AdSense 政策中心**: https://support.google.com/adsense/topic/9836646
- **AdSense 帮助中心**: https://support.google.com/adsense

---

## 📝 文档维护

### 定期审查
- **每 6 个月**: 审查一次所有合规文档
- **服务变更时**: 及时更新 Privacy Policy
- **法律变更时**: 跟进新法规要求

### 版本控制
当前版本：**V1.0**  
最后更新：**2026-03-27**  
下次审查：**2026-09-27**

---

*本文档由 Chinahub 产品团队维护*  
*注意：这不构成法律建议，建议咨询专业律师*
