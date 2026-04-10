# 部署说明

本指南将帮助您将个人作品集网站部署到GitHub Pages。

## 步骤1：创建GitHub仓库

1. 登录GitHub账号
2. 点击右上角的"+"按钮，选择"New repository"
3. 输入仓库名称（例如：`portfolio`或`username.github.io`）
4. 选择仓库类型（公开或私有）
5. 点击"Create repository"按钮

## 步骤2：推送代码到GitHub

### 方法1：使用Git命令行

1. 打开终端或命令提示符
2. 导航到项目目录
3. 初始化Git仓库（如果尚未初始化）：
   ```bash
   git init
   ```
4. 添加所有文件：
   ```bash
   git add .
   ```
5. 提交更改：
   ```bash
   git commit -m "Initial commit"
   ```
6. 链接到GitHub仓库：
   ```bash
   git remote add origin https://github.com/your-username/your-repository.git
   ```
7. 推送代码：
   ```bash
   git push -u origin main
   ```

### 方法2：使用GitHub Desktop

1. 下载并安装[GitHub Desktop](https://desktop.github.com/)
2. 打开GitHub Desktop
3. 点击"File" > "New Repository"
4. 选择项目目录
5. 点击"Create Repository"
6. 点击"Publish repository"
7. 选择仓库设置并点击"Publish"

## 步骤3：启用GitHub Pages

1. 进入GitHub仓库页面
2. 点击"Settings"选项卡
3. 向下滚动到"GitHub Pages"部分
4. 在"Source"下拉菜单中选择"main"分支
5. 在"Folder"下拉菜单中选择"/(root)"
6. 点击"Save"
7. 等待几分钟，GitHub Pages将部署您的网站
8. 部署完成后，您将看到网站的URL（例如：`https://your-username.github.io/your-repository/`）

## 步骤4：自定义域名（可选）

如果您有自己的域名，可以将其指向GitHub Pages：

1. 登录您的域名注册商
2. 添加CNAME记录，指向`your-username.github.io`
3. 在GitHub仓库的"Settings" > "GitHub Pages"部分，输入您的自定义域名
4. 点击"Save"

## 优化建议

1. **图片优化**：压缩图片以提高加载速度
2. **代码压缩**：压缩CSS和JavaScript文件
3. **缓存策略**：设置适当的缓存头
4. **SEO优化**：添加合适的元标签和描述
5. **性能监控**：使用Google PageSpeed Insights检查网站性能

## 常见问题

### 部署后网站不显示
- 确保您推送了所有必要的文件
- 检查GitHub Pages设置是否正确
- 等待几分钟，GitHub Pages需要时间部署

### 图片不显示
- 确保图片路径正确
- 检查图片文件是否已推送
- 确保图片URL格式正确

### 样式或脚本不加载
- 检查文件路径是否正确
- 确保文件已推送
- 清除浏览器缓存

## 更新网站

当您对网站进行更改后，只需：

1. 提交更改：
   ```bash
   git add .
   git commit -m "Update website"
   ```
2. 推送更改：
   ```bash
   git push
   ```
3. 等待GitHub Pages重新部署（通常需要1-5分钟）

## 联系信息

如果您在部署过程中遇到问题，请参考[GitHub Pages文档](https://docs.github.com/en/pages)或联系GitHub支持。