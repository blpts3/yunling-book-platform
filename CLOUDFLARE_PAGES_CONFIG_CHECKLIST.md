# Cloudflare Pages 配置检查清单

## ⚠️ 重要：必须在Cloudflare控制台手动配置

由于之前的wrangler配置导致部署失败，您需要在Cloudflare Pages控制台**手动检查和修改构建设置**。

## 📋 Cloudflare Pages 控制台配置步骤

### 1. 进入项目设置

1. 访问 [https://dash.cloudflare.com](https://dash.cloudflare.com)
2. 点击 **Workers & Pages**
3. 选择您的项目（swjtu-mentor-platform）
4. 点击顶部的 **Settings** 标签

### 2. 检查构建配置

在 Settings 页面，找到 **Build & deployments** 部分：

#### ✅ 正确的配置应该是：

| 配置项 | 正确值 |
|--------|--------|
| **Production branch** | `main` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (留空) |

#### ❌ 错误的配置（如果看到请修改）：

- Build command: `npm run deploy` ← 错误！
- Build command: `wrangler deploy` ← 错误！
- Build command: `wrangler pages deploy` ← 错误！

### 3. 修改构建命令（如果需要）

1. 在 **Build & deployments** 部分
2. 找到 **Build configuration**
3. 点击 **Edit** 或 **Configure**
4. 确保：
   - Build command: `npm run build`
   - Build output directory: `dist`
5. 点击 **Save** 保存

### 4. 配置环境变量

在同一页面，向下滚动到 **Environment variables**：

添加以下三个变量（如果还没有）：

```
Variable name: VITE_SUPABASE_URL
Value: https://你的项目ID.supabase.co

Variable name: VITE_SUPABASE_ANON_KEY  
Value: (从Supabase复制的anon public密钥)

Variable name: VITE_ADMIN_EMAIL
Value: admin@yunling.com
```

**重要**：确保每个变量的 "Environment" 都勾选了 "Production"

### 5. 重新触发部署

配置完成后：

1. 点击顶部的 **Deployments** 标签
2. 点击 **Retry deployment** 按钮
3. 或者点击 **Create a new deployment** → **Deploy from Git**

## 🔍 验证部署成功

### 检查部署日志

在 Deployments 页面，点击最新的部署记录：

1. 查看 **Build logs** 标签
2. 应该看到类似这样的输出：

```
> swjtu-mentor-platform@0.1.0 build
> tsc -b && vite build

vite v6.4.2 building for production...
✓ 1655 modules transformed.
✓ built in X.XXs
```

3. **不应该**看到任何 wrangler 相关的命令

### 访问网站

部署状态变为 "Ready" 后，访问：
- `https://你的项目名.pages.dev`

## ❓ 如果仍然失败

### 情况1: 看到 "wrangler" 相关错误

**原因**: Cloudflare Pages仍在使用旧的构建配置

**解决**:
1. 在Cloudflare控制台删除当前项目
2. 重新创建项目：
   - 点击 **Create a project**
   - 选择 **Connect to Git**
   - 选择您的仓库
   - **手动配置**构建命令为 `npm run build`
   - 输出目录为 `dist`

### 情况2: 构建成功但访问空白页

**原因**: 环境变量未配置

**解决**:
1. 在 Settings → Environment variables 中添加三个VITE_开头的变量
2. 重新部署

### 情况3: 访问子路径404

**原因**: _redirects文件未生效

**解决**:
1. 确认 `public/_redirects` 文件存在
2. 确认内容为: `/*  /index.html  200`
3. 重新部署

## 📝 总结

**最关键的一步**：确保Cloudflare Pages控制台的 **Build command** 设置为 `npm run build`，而不是任何wrangler相关的命令。

这是之前部署失败的根本原因！
