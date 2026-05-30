# Cloudflare Pages 部署验证指南

## 当前状态

- ✅ 代码已推送到GitHub (commit: 34f9fcd)
- ✅ 已删除 wrangler.jsonc
- ✅ 已清理 Cloudflare 相关依赖
- ✅ _redirects 文件正确配置
- ⏳ 等待 Cloudflare Pages 自动重新部署

## 验证步骤

### 1. 检查 Cloudflare 控制台

1. 访问 [https://dash.cloudflare.com](https://dash.cloudflare.com)
2. 进入 **Workers & Pages**
3. 选择您的项目
4. 查看 **Deployments** 标签

### 2. 确认部署状态

在 Deployments 页面，您应该看到：

- **最新部署**: 应该显示最新的 commit (34f9fcd)
- **状态**: 应该是 "Ready" (绿色)
- **构建日志**: 点击查看详情，应该没有错误

### 3. 访问网站

部署成功后，访问以下URL测试：

```
主页面: https://你的项目名.pages.dev
导师页面: https://你的项目名.pages.dev/mentors
社团页面: https://你的项目名.pages.dev/clubs
动态页面: https://你的项目名.pages.dev/feed
```

### 4. 如果仍然无法访问

#### 情况A: 部署状态为 "Failed"

1. 点击失败的部署记录
2. 查看 **Build logs**
3. 找到错误信息
4. 常见错误及解决：

| 错误 | 解决方案 |
|------|----------|
| Build command failed | 检查构建命令是否为 `npm run build` |
| Environment variables not found | 在 Pages 设置中添加环境变量 |
| Publish directory not found | 确认输出目录为 `dist` |

#### 情况B: 部署成功但页面空白

1. 打开浏览器开发者工具 (F12)
2. 查看 Console 标签的错误
3. 检查 Network 标签的请求状态
4. 可能原因：
   - 环境变量未配置
   - Supabase 连接失败
   - CORS 问题

#### 情况C: 访问子路径返回404

1. 确认 `public/_redirects` 文件存在
2. 确认内容为: `/*  /index.html  200`
3. 重新触发部署

## 环境变量配置

确保在 Cloudflare Pages 中配置了以下环境变量：

1. 进入项目 → **Settings** → **Environment variables**
2. 添加以下变量：

```
Variable name: VITE_SUPABASE_URL
Value: https://你的项目ID.supabase.co

Variable name: VITE_SUPABASE_ANON_KEY
Value: (从Supabase API页面复制anon public密钥)

Variable name: VITE_ADMIN_EMAIL
Value: admin@yunling.com
```

3. 保存后，**重新部署**以应用新的环境变量

## 重新触发部署

如果需要手动触发部署：

1. 进入项目 → **Deployments**
2. 点击 **Retry deployment** 或 **Latest production deployment**
3. 或者在 GitHub 上做一个空提交：
   ```bash
   git commit --allow-empty -m "trigger redeploy" && git push
   ```

## 预期结果

修复后，您应该能够：

1. ✅ 访问主页并看到"云凌书驿"界面
2. ✅ 点击导航栏切换到不同页面
3. ✅ 访问 `/mentors`、`/clubs` 等子路径不返回404
4. ✅ 注册/登录功能正常工作（如果Supabase配置正确）

## 如果问题依然存在

请提供以下信息以便进一步排查：

1. Cloudflare 控制台的部署状态截图
2. 构建日志的最后50行
3. 浏览器控制台的错误信息
4. 访问网站时的具体表现（空白页/404/其他）
