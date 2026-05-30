# 🚀 Vercel部署完整教程 - 云凌书驿平台

## 📋 目录
1. [为什么选择Vercel](#为什么选择vercel)
2. [第六步：部署到Vercel（详细步骤）](#第六步部署到vercel详细步骤)
3. [第七步：设置管理员账户](#第七步设置管理员账户)
4. [常见问题解决](#常见问题解决)

---

## 为什么选择Vercel

### ✅ Vercel免费套餐优势
- **无限带宽** - 不限制访问流量
- **无限部署次数** - 可以频繁更新代码
- **更快的构建速度** - 针对React/Vite优化
- **自动HTTPS** - 免费的SSL证书
- **全球CDN** - 访问速度更快
- **预览部署** - 每次PR自动生成预览链接
- **完全免费** - 个人项目无需付费

### 🆚 与Netlify对比
| 特性 | Vercel (免费) | Netlify (免费) |
|------|--------------|----------------|
| 带宽 | 无限制 | 100GB/月 |
| 构建时间 | 无限制 | 300分钟/月 |
| 部署次数 | 无限制 | 受构建时间限制 |
| React支持 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 自定义域名 | ✅ | ✅ |

---

## 第六步：部署到Vercel（详细步骤）

### 6.1 注册/登录Vercel账号

#### 方法一：使用GitHub账号登录（推荐）

**操作步骤：**

1. **打开Vercel官网**
   - 浏览器访问：[https://vercel.com](https://vercel.com)
   - 页面会自动显示中文或英文界面（取决于浏览器语言）

2. **点击登录按钮**
   - 在页面右上角找到 **"Log in"** 或 **"登录"** 按钮
   - 点击进入登录页面

3. **选择GitHub登录**
   - 在登录页面，你会看到多个选项
   - 点击 **"Continue with GitHub"** 或 **"使用GitHub继续"**
   - 如果已登录GitHub，会直接授权
   - 如果未登录，会跳转到GitHub登录页面

4. **授权Vercel访问GitHub**
   - 首次使用时，GitHub会询问是否授权Vercel
   - 点击 **"Authorize Vercel"** 或 **"授权Vercel"**
   - 选择要授权的仓库：
     - 选项1：**"All repositories"**（所有仓库）- 推荐
     - 选项2：**"Only select repositories"** - 然后勾选 `swjtu-mentor-platform`
   - 点击 **"Install"** 或 **"安装"**

5. **完成注册**
   - 授权成功后，自动跳转回Vercel
   - 如果是首次使用，会要求填写一些基本信息：
     - 姓名（可选）
     - 用途（选择 "Personal" 或 "个人使用"）
   - 点击 **"Continue"** 继续

#### 方法二：使用邮箱注册

如果不使用GitHub，也可以用邮箱：

1. 在登录页面点击 **"Sign up with Email"**
2. 输入邮箱地址和密码
3. 去邮箱查收验证邮件
4. 点击验证链接完成注册

---

### 6.2 导入GitHub项目

登录成功后，开始导入你的项目：

#### 步骤1：进入项目导入页面

1. **查看Vercel控制台主页**
   - 登录成功后，你会看到Vercel的主控制台
   - 页面中央有一个大按钮：**"Add New..."** 或 **"添加新项目"**

2. **选择Project**
   - 点击 **"Add New..."** 下拉菜单
   - 选择 **"Project"**（项目）
   - 这会进入项目导入向导

#### 步骤2：连接GitHub仓库

1. **选择Git提供商**
   - 页面会显示 "Import Git Repository"（导入Git仓库）
   - 你应该能看到 **"GitHub"** 已经连接（因为之前授权了）
   - 如果没有连接，点击 **"Connect GitHub"** 并授权

2. **浏览仓库列表**
   - 在 "Import Git Repository" 搜索框中
   - 输入 `swjtu-mentor-platform`
   - 或者在列表中滚动查找这个仓库

3. **选择仓库**
   - 找到 `swjtu-mentor-platform` 后
   - 点击右侧的 **"Import"** 或 **"导入"** 按钮
   - 这会进入项目配置页面

---

### 6.3 配置项目构建设置

进入配置页面后，需要设置以下参数：

#### 配置项说明

**① Project Name（项目名称）**
- 默认是仓库名：`swjtu-mentor-platform`
- 可以修改为更易记的名字，如 `yunling-book-station`
- 这会影响最终的域名：`https://yunling-book-station.vercel.app`

**② Framework Preset（框架预设）**
- Vercel会自动检测为 **Vite**
- 确认显示的是 "Vite" 而不是 "Other"
- 如果不是，手动选择 "Vite"

**③ Root Directory（根目录）**
- 保持默认：`./`（当前目录）
- 不要修改，除非你的项目在子文件夹中

**④ Build Command（构建命令）**
- 应该自动填充为：`npm run build`
- 这是正确的，不需要修改
- Vercel会从package.json读取这个命令

**⑤ Output Directory（输出目录）**
- 应该自动填充为：`dist`
- 这是Vite默认的构建输出目录
- 确认无误

**⑥ Install Command（安装命令）**
- 默认为空（Vercel会自动运行 `npm install`）
- 保持默认即可

#### 关键步骤：添加环境变量 ⚠️

向下滚动找到 **"Environment Variables"** 部分：

**添加第一个变量：**

1. 点击 **"Add"** 或 **"添加变量"** 按钮
2. 会出现两个输入框：
   - **Name**（名称）：输入 `VITE_SUPABASE_URL`
   - **Value**（值）：粘贴你的Supabase项目URL
3. 获取Supabase URL的方法：
   - 打开 [https://app.supabase.com](https://app.supabase.com)
   - 选择你的项目
   - 左侧菜单点击 **"Project Settings"** → **"API"**
   - 复制 **"Project URL"**（格式：`https://xxxxx.supabase.co`）
4. 粘贴到Value框中
5. 确保 **"Production"**、**"Preview"**、**"Development"** 三个环境都勾选
6. 点击 **"Save"** 保存

**添加第二个变量：**

1. 再次点击 **"Add"** 按钮
2. 输入：
   - **Name**：`VITE_SUPABASE_ANON_KEY`
   - **Value**：粘贴Supabase的anon密钥
3. 获取Supabase Anon Key的方法：
   - 同样在Supabase的 **"Project Settings"** → **"API"** 页面
   - 找到 **"Project API keys"** 部分
   - 复制 **"anon public"** 的值（很长的字符串）
4. 粘贴到Value框中
5. 三个环境都勾选
6. 点击 **"Save"** 保存

**添加第三个变量：**

1. 再次点击 **"Add"** 按钮
2. 输入：
   - **Name**：`VITE_ADMIN_EMAIL`
   - **Value**：输入管理员邮箱，如 `admin@yunling.com`
3. 三个环境都勾选
4. 点击 **"Save"** 保存

**确认环境变量：**
- 添加完成后，你应该看到三个变量列在页面上
- 每个变量名后面有眼睛图标👁️，可以点击隐藏/显示值
- 仔细检查拼写是否正确（特别是 `VITE_` 前缀）

---

### 6.4 开始部署

配置完成后，开始部署：

1. **点击部署按钮**
   - 在页面底部找到 **"Deploy"** 或 **"部署"** 按钮
   - 通常是绿色或蓝色的醒目按钮
   - 点击它开始部署

2. **等待构建和部署**
   - 点击后会跳转到部署详情页面
   - 你会看到实时的构建日志输出
   - 整个过程大约需要 **1-3分钟**（比Netlify快）

3. **观察部署状态**
   - **Building**（构建中）- 黄色或蓝色标识
   - **Ready**（就绪）- 绿色标识，表示成功
   - **Error**（错误）- 红色标识，表示失败

4. **部署成功的标志**
   - 页面顶部显示绿色的 **"Success!"** 提示
   - 显示一个预览图片（网站的截图）
   - 给出访问链接：`https://xxx.vercel.app`
   - 有两个按钮：
     - **"Visit"** - 访问网站
     - **"Dashboard"** - 返回控制台

5. **点击"Visit"访问网站**
   - 第一次访问可能需要几秒钟加载
   - 应该能看到"云凌书驿"的首页
   - 测试一下导航栏、社团、资源等页面是否正常

---

### 6.5 自定义域名（可选）

如果你想使用更友好的域名：

#### 方法一：修改Vercel子域名

1. **进入项目设置**
   - 在Vercel控制台中，点击你的项目
   - 点击顶部的 **"Settings"** 标签

2. **修改域名**
   - 在左侧菜单找到 **"Domains"**
   - 点击 **"Edit"** 或直接看到当前域名
   - 点击域名旁边的 **"..."** 菜单
   - 选择 **"Rename"** 或 **"Edit"**
   - 输入新的名称（如 `yunling-book`）
   - 最终域名：`https://yunling-book.vercel.app`

#### 方法二：绑定自定义域名

如果你有购买的域名（如 `yunling.com`）：

1. **在Vercel中添加域名**
   - 在项目 **"Settings"** → **"Domains"**
   - 输入框中输入你的域名（如 `www.yunling.com`）
   - 点击 **"Add"**

2. **配置DNS记录**
   - Vercel会提示你配置DNS
   - 登录你的域名服务商（如阿里云、腾讯云）
   - 添加CNAME记录：
     ```
     主机记录: www
     记录类型: CNAME
     记录值: cname.vercel-dns.com
     ```

3. **等待DNS生效**
   - 通常需要几分钟到几小时
   - Vercel会自动配置HTTPS证书

---

## 第七步：设置管理员账户

部署完成后，需要创建管理员账户。有两种方式：

### 方式一：通过网站注册 + Supabase SQL设置（推荐）

#### 7.1.1 在你的网站上注册用户

**步骤1：访问网站**
- 打开浏览器
- 输入Vercel给你的域名：`https://xxx.vercel.app`
- 按回车访问

**步骤2：进入注册页面**
- 在导航栏右上角找到 **"登录"** 按钮
- 点击进入认证页面
- 选择 **"注册"** 标签页

**步骤3：填写注册信息**
```
姓名：管理员（或你的名字）
邮箱：admin@yunling.com（必须与VITE_ADMIN_EMAIL一致）
密码：设置强密码（至少8位，包含大小写字母和数字）
学校：西南交通大学
简介：平台管理员（可选）
```

**步骤4：提交注册**
- 点击 **"注册"** 按钮
- 等待几秒钟
- 如果成功，会提示"注册成功，请验证邮箱"

**步骤5：验证邮箱**
- 打开你的邮箱（admin@yunling.com）
- 查找来自Supabase的邮件
- 主题可能是："Confirm your email" 或 "验证您的邮箱"
- 点击邮件中的验证链接
- 会自动跳转回网站，显示"邮箱验证成功"

**步骤6：登录测试**
- 返回登录页面
- 输入邮箱和密码
- 点击 **"登录"**
- 成功后，导航栏应该显示你的名字

---

#### 7.1.2 在Supabase中设置管理员权限

⚠️ **重要**：刚注册的用户默认是普通用户（role='user'），需要通过SQL提升为管理员

**详细操作步骤：**

**步骤1：登录Supabase控制台**
- 访问 [https://app.supabase.com](https://app.supabase.com)
- 如果已登录，直接看到项目列表
- 如果未登录，点击 **"Log in"** 登录

**步骤2：选择项目**
- 在项目列表中找到 `swjtu-mentor-platform` 或你的项目名
- 点击进入项目

**步骤3：进入SQL编辑器**
- 在左侧菜单栏，找到 **"Database"**（数据库）部分
- 点击 **"SQL Editor"**（SQL编辑器）
- 这会打开SQL查询界面

**步骤4：新建查询**
- 在SQL Editor页面，点击右上角的 **"New query"** 或 **"新建查询"**
- 会出现一个代码编辑区域

**步骤5：输入SQL语句**
在代码编辑器中输入以下SQL：

```sql
-- 将指定邮箱的用户设置为管理员
UPDATE users
SET role = 'admin'
WHERE email = 'admin@yunling.com';
```

**注意事项：**
- 确保邮箱地址与你注册时使用的**完全一致**
- 区分大小写
- 如果用了其他邮箱，替换成那个邮箱

**步骤6：执行SQL**
- 点击编辑器右上角的 **"Run"** 或 **"运行"** 按钮
- 或使用快捷键 `Ctrl + Enter`（Mac上是 `Cmd + Enter`）
- 等待执行完成

**步骤7：检查执行结果**
- 下方会显示执行结果面板
- ✅ **成功**：显示 "Success. 1 row(s) affected"（成功，影响了1行）
- ❌ **失败**：显示错误信息
  - 如果提示 "relation 'users' does not exist"，说明表还没创建
  - 如果提示 "0 rows affected"，说明邮箱不对应用户

**步骤8：验证角色是否更新**
继续在SQL编辑器中执行查询：

```sql
-- 查看所有用户的角色
SELECT email, name, role, created_at
FROM users
ORDER BY created_at DESC;
```

点击 **"Run"** 运行，在结果表格中：
- 应该能看到你的邮箱
- `role` 列应该显示 `'admin'`
- 如果还是 `'user'`，重新执行上面的UPDATE语句

---

#### 7.1.3 测试管理员权限

**步骤1：刷新网站**
- 回到你的Vercel网站
- 按 `Ctrl + F5`（Windows）或 `Cmd + Shift + R`（Mac）强制刷新
- 这会清除浏览器缓存

**步骤2：尝试访问管理后台**
- 在浏览器地址栏输入：
  ```
  https://你的域名.vercel.app/admin
  ```
  例如：`https://yunling-book.vercel.app/admin`
- 按回车访问

**步骤3：验证结果**

✅ **成功的情况：**
- 能正常访问 `/admin` 页面
- 看到管理后台界面
- 可以看到数据统计、用户管理等选项
- 可以发布社团、审核资源等

❌ **失败的情况：**
- 被重定向到首页
- 显示"无权限访问"或"403 Forbidden"
- 提示"需要管理员权限"

**如果失败，检查以下几点：**

1. **邮箱是否一致**
   - 注册的邮箱必须与 `VITE_ADMIN_EMAIL` 完全一致
   - 检查是否有空格或拼写错误

2. **SQL是否执行成功**
   - 重新在Supabase中执行查询，确认 `role = 'admin'`

3. **是否重新登录**
   - 退出当前账号
   - 重新登录一次
   - 再尝试访问 `/admin`

4. **清除浏览器缓存**
   - 按 `Ctrl + Shift + Delete` 打开清除数据窗口
   - 选择"缓存的图片和文件"
   - 点击"清除数据"

---

### 方式二：直接在Supabase中创建管理员（高级）

如果你不想通过网站注册，可以直接在数据库中创建管理员账号：

**步骤1：在Supabase SQL编辑器中执行**

```sql
-- 1. 创建认证用户
DO $$
DECLARE
  new_user_id UUID;
BEGIN
  -- 创建auth用户
  INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    recovery_sent_at,
    last_sign_in_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    email_change,
    email_change_token_new,
    recovery_token
  ) VALUES (
    '00000000-0000-0000-0000-000000000000',
    gen_random_uuid(),
    'authenticated',
    'authenticated',
    'admin@yunling.com',
    crypt('YourStrongPassword123!', gen_salt('bf')),
    NOW(),
    NOW(),
    NOW(),
    '{"provider":"email","providers":["email"]}',
    '{"name":"管理员","school":"西南交通大学"}',
    NOW(),
    NOW(),
    '',
    '',
    '',
    ''
  ) RETURNING id INTO new_user_id;

  -- 2. 在users表中创建资料并设置为管理员
  INSERT INTO users (
    id,
    email,
    name,
    role,
    school,
    avatar_url,
    created_at,
    updated_at
  ) VALUES (
    new_user_id,
    'admin@yunling.com',
    '管理员',
    'admin',
    '西南交通大学',
    NULL,
    NOW(),
    NOW()
  );

  RAISE NOTICE 'Admin user created with ID: %', new_user_id;
END $$;
```

**步骤2：用这个账号登录**
- 邮箱：`admin@yunling.com`
- 密码：你在SQL中设置的密码（上面示例是 `YourStrongPassword123!`）

⚠️ **注意**：这种方式创建的账号已经默认确认邮箱，无需验证。

---

## ✅ 部署完成检查清单

完成以上步骤后，请逐项确认：

- [ ] ✅ Vercel控制台显示项目状态为 **"Ready"**
- [ ] ✅ 可以通过 `https://xxx.vercel.app` 访问网站
- [ ] ✅ 网站首页加载正常，没有报错
- [ ] ✅ 能够成功注册新用户
- [ ] ✅ 收到邮箱验证邮件
- [ ] ✅ 点击验证链接后显示成功
- [ ] ✅ 能够用注册的账号登录
- [ ] ✅ 在Supabase中该用户的 `role` 字段为 `'admin'`
- [ ] ✅ 可以访问 `/admin` 管理后台
- [ ] ✅ 管理后台可以看到真实数据（社团、资源等）
- [ ] ✅ 可以尝试发布一个社团或资源测试

---

## 🔧 常见问题解决

### 问题1：部署失败，显示"Build failed"

**可能原因及解决：**

**原因1：环境变量未正确配置**
- 检查三个环境变量是否都添加了
- 确认变量名拼写正确（特别是 `VITE_` 前缀）
- 确认值没有多余的空格

**原因2：构建命令错误**
- 确认Build Command是 `npm run build`
- 确认Output Directory是 `dist`

**原因3：依赖问题**
- 在本地运行 `npm install` 确保依赖正常
- 检查package.json中是否有缺失的依赖

**查看错误日志：**
- 在Vercel部署页面，点击 **"View Build Logs"**
- 滚动到最后，查看具体的错误信息
- 根据错误信息调整

---

### 问题2：网站能访问，但显示空白页

**可能原因：**

**原因1：环境变量未生效**
- Vercel需要重新部署才能应用新的环境变量
- 解决方法：
  1. 进入项目控制台
  2. 点击 **"Deployments"** 标签
  3. 找到最新的部署，点击 **"..."** → **"Redeploy"**

**原因2：路由配置问题**
- 检查 `vercel.json` 文件是否存在
- 确认里面有rewrites配置（处理SPA路由）

**原因3：Supabase连接失败**
- 打开浏览器开发者工具（F12）
- 查看Console标签，是否有错误信息
- 检查Network标签，看Supabase请求是否失败

---

### 问题3：无法访问/admin页面

**检查步骤：**

1. **确认用户角色**
   ```sql
   SELECT email, role FROM users WHERE email = '你的邮箱';
   ```
   应该显示 `role = 'admin'`

2. **确认环境变量**
   - 检查 `VITE_ADMIN_EMAIL` 是否与注册邮箱一致

3. **清除缓存并重新登录**
   - 退出账号
   - 清除浏览器缓存
   - 重新登录

4. **检查前端代码**
   - 查看 `src/App.tsx` 中是否有admin路由
   - 查看 `src/pages/AdminDashboard.tsx` 是否存在

---

### 问题4：注册后收不到验证邮件

**解决方法：**

1. **检查垃圾邮件**
   - 查看邮箱的垃圾邮件文件夹
   - Supabase邮件可能被标记为垃圾邮件

2. **检查邮箱地址**
   - 确认注册时输入的邮箱地址正确
   - 没有拼写错误

3. **手动 resend 验证邮件**
   - 在Supabase控制台 → Authentication → Users
   - 找到你的用户
   - 点击 **"..."** → **"Resend confirmation email"**

4. **临时禁用邮箱验证（仅开发测试）**
   - 在Supabase控制台 → Authentication → Settings
   - 关闭 **"Enable email confirmations"**
   - ⚠️ 生产环境不建议这样做

---

### 问题5：每次git push后Vercel没有自动部署

**检查步骤：**

1. **确认Git集成**
   - 在Vercel项目 → Settings → Git
   - 确认仓库连接正常
   - 确认Branch是 `main` 或 `master`

2. **检查部署触发器**
   - 在Vercel项目 → Settings → Git
   - 确认 **"Ignored Build Step"** 没有阻止部署

3. **手动触发部署**
   - 在Vercel项目 → Deployments
   - 点击 **"Redeploy"** 最新的一次部署

4. **查看部署历史**
   - 检查是否有失败的部署
   - 如果有，查看错误日志

---

## 🎊 恭喜！部署完成

现在你的"云凌书驿"平台已经正式上线！

### 你可以做的事情：

1. **分享网址给朋友**
   - 把 `https://xxx.vercel.app` 发给同学
   - 他们可以注册账号并使用平台

2. **管理后台运营**
   - 访问 `/admin` 管理内容
   - 审核社团申请
   - 发布优质资源

3. **持续更新迭代**
   - 修改代码后：
     ```bash
     git add .
     git commit -m "描述修改内容"
     git push
     ```
   - Vercel会自动检测并重新部署（约1-3分钟）

4. **监控网站性能**
   - 在Vercel控制台 → Analytics
   - 查看访问量、加载速度等数据

### 后续优化建议：

- 📱 优化移动端体验
- 🔍 添加搜索功能
- 💬 实现实时聊天
- 📊 增加数据分析看板
- 🎨 自定义主题和样式

---

## 📞 需要帮助？

如果遇到任何问题：
1. 查看Vercel官方文档：[https://vercel.com/docs](https://vercel.com/docs)
2. 查看Supabase文档：[https://supabase.com/docs](https://supabase.com/docs)
3. 检查浏览器控制台的错误信息
4. 随时联系我获取帮助

祝你的平台运营顺利！🚀
