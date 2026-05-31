# Vercel 快速部署指南（完全免费）

## 为什么选择 Vercel

- ✅ 完全免费，无限带宽
- ✅ 对 React/Vite 项目支持最好
- ✅ 自动检测配置，无需手动设置
- ✅ 中国访问速度较快
- ✅ 不需要信用卡

## 部署步骤

### 1. 注册/登录 Vercel

访问 [https://vercel.com](https://vercel.com)
- 点击 **Sign up**
- 使用 GitHub 账号登录（推荐）

### 2. 导入项目

1. 登录后点击 **Add New Project**
2. 找到 `blpts3/yunling-book-platform` 仓库
3. 点击 **Import**

### 3. 配置项目（自动检测）

Vercel 会自动检测您的项目配置：
```
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

确认无误后，继续。

### 4. 配置环境变量

展开 **Environment Variables** 部分，添加：

```
VITE_SUPABASE_URL = https://hxoahbxhhvupgrwgdknx.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4b2FoYnhoaHZ1cGdyd2dka254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4ODc0ODUsImV4cCI6MjA5NTQ2MzQ4NX0.F3u5BifQoK1pftso9qu_RK2y5tukT3RWtlpPZJShvM0
VITE_ADMIN_EMAIL = admin@yunling.com
```

### 5. 部署

点击 **Deploy**，等待1-2分钟。

### 6. 访问网站

部署成功后，访问：
```
https://yunling-book-platform.vercel.app
```

## 优势对比

| 平台 | 费用 | 难度 | 速度 | 推荐度 |
|------|------|------|------|--------|
| Cloudflare Pages | 免费 | 中等（需正确选择Pages） | 最快 | ⭐⭐⭐⭐ |
| Vercel | 免费 | 最简单 | 快 | ⭐⭐⭐⭐⭐ |
| Netlify | $19/月 | 简单 | 一般 | ⭐⭐⭐ |

## 建议

**强烈推荐使用 Vercel**，因为：
1. 完全免费
2. 配置最简单（自动检测）
3. 对 React 项目支持最好
4. 不会出现 Workers vs Pages 的混淆
