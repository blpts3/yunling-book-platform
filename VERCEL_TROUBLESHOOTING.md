# Vercel 部署问题全面排查指南

## 常见失败原因及解决方案

### 1. 构建失败 (Build Failed)

#### 症状
- Vercel显示 "Build Failed"
- 错误日志中有具体的错误信息

#### 可能原因及解决

**原因A: TypeScript错误**
```
error TSXXXX: ...
```
**解决**: 已在之前修复，放宽了TypeScript严格检查

**原因B: 依赖安装失败**
```
npm ERR! code ERESOLVE
```
**解决**: 
- 在Vercel项目设置中，确保使用正确的Node版本（18.x或20.x）
- Settings → General → Node.js Version → 选择 18.x

**原因C: 内存不足**
```
FATAL ERROR: Ineffective mark-compacts near heap limit
```
**解决**:
- 在vercel.json中添加：
```json
{
  "buildCommand": "NODE_OPTIONS='--max-old-space-size=4096' npm run build"
}
```

---

### 2. 部署成功但页面空白

#### 症状
- Vercel显示 "Ready"
- 访问网站显示空白页

#### 可能原因及解决

**原因A: 环境变量未配置**

**解决**: 
1. 进入Vercel项目 → Settings → Environment Variables
2. 添加以下变量（确保所有环境都勾选）：

```
VITE_SUPABASE_URL = https://hxoahbxhhvupgrwgdknx.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4b2FoYnhoaHZ1cGdyd2dka254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4ODc0ODUsImV4cCI6MjA5NTQ2MzQ4NX0.F3u5BifQoK1pftso9qu_RK2y5tukT3RWtlpPZJShvM0
VITE_ADMIN_EMAIL = admin@yunling.com
```

3. **重要**: 添加后需要重新部署才能生效
   - 进入 Deployments 标签
   - 点击最新部署的 "..." 菜单
   - 选择 "Redeploy"

**原因B: Supabase URL格式错误**

**解决**: 
- 确认 `VITE_SUPABASE_URL` 是 `https://hxoahbxhhvupgrwgdknx.supabase.co`
- **不要**包含 `/rest/v1/` 后缀

**原因C: 浏览器缓存**

**解决**: 
- 按 `Ctrl + Shift + Delete` 清除缓存
- 或使用无痕模式访问

---

### 3. 访问子路径返回404

#### 症状
- 主页可以访问
- 访问 `/mentors` 或 `/clubs` 等子路径返回404

#### 解决

vercel.json中已有正确的路由配置：
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

如果仍然404：
1. 确认 vercel.json 存在于项目根目录
2. 确认已推送到GitHub
3. 重新部署

---

### 4. 部署卡在 "Building" 状态

#### 症状
- 部署状态一直显示 "Building"
- 超过10分钟没有进展

#### 可能原因及解决

**原因A: 构建时间过长**

**解决**: 
- 等待最多15分钟
- 如果超过15分钟，取消并重新部署

**原因B: GitHub连接问题**

**解决**: 
- 检查GitHub状态 [https://www.githubstatus.com](https://www.githubstatus.com)
- 重新触发部署

---

### 5. 域名无法访问

#### 症状
- 部署成功
- 但访问域名显示 "Not Found" 或超时

#### 可能原因及解决

**原因A: DNS未生效**

**解决**: 
- 新部署通常需要1-5分钟DNS传播
- 等待几分钟后刷新

**原因B: 访问了错误的URL**

**解决**: 
- 确认访问的是正确的Vercel域名
- 格式: `https://项目名.vercel.app`
- 在Vercel控制台查看正确URL

**原因C: 地区网络问题**

**解决**: 
- 尝试使用不同的网络
- 或使用代理访问

---

## Vercel部署完整检查清单

### 部署前检查
- [ ] vercel.json 存在于项目根目录
- [ ] package.json 中的 scripts 正确
- [ ] 本地 `npm run build` 成功
- [ ] 代码已推送到GitHub

### 部署时检查
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Framework Preset: Vite
- [ ] Root Directory: `/`（留空）

### 环境变量检查
- [ ] VITE_SUPABASE_URL 格式正确（无/rest/v1/）
- [ ] VITE_SUPABASE_ANON_KEY 完整
- [ ] VITE_ADMIN_EMAIL 已设置
- [ ] 所有变量都勾选了 Production、Preview、Development

### 部署后检查
- [ ] 部署状态显示 "Ready"（绿色）
- [ ] 访问主页正常显示
- [ ] 访问子路径不返回404
- [ ] 浏览器控制台无错误

---

## 快速修复步骤

如果Vercel部署失败，按以下步骤操作：

1. **查看构建日志**
   - 进入Vercel项目 → Deployments
   - 点击失败的部署记录
   - 查看 "Build Logs" 标签
   - 找到错误信息

2. **根据错误信息修复**
   - TypeScript错误 → 已修复
   - 依赖错误 → 检查package.json
   - 内存错误 → 增加NODE_OPTIONS

3. **重新部署**
   - 点击 "Redeploy"
   - 或推送新的commit触发自动部署

4. **验证结果**
   - 访问 `https://项目名.vercel.app`
   - 测试各个页面

---

## 联系支持

如果以上方法都无法解决问题：

1. 提供Vercel构建日志的最后50行
2. 提供浏览器控制台的错误信息
3. 提供访问的具体URL和错误表现
