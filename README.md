<div align="center">

<img src="favicon.png" alt="Starknet 开发资源合集" width="80" height="80">

# Starknet 开发资源合集

**从第一行 Cairo 到链上应用，为下一次构建找到合适的工具。**

个人收集的 Starknet 开发资源导航，涵盖 SDK、开发框架、编辑器插件、示例与学习资料。

[访问网站](https://starknet.imzl.com) · [提交资源](https://github.com/zhoulianglen/Starknet-Development-Resources/issues) · [联系作者](https://twitter.com/zhoulianglen)

</div>

## 项目亮点

- **分类浏览**：按开发场景组织资源，快速找到所需工具。
- **即时搜索**：同时匹配资源名称、分类与链接地址，可与分类筛选组合使用。
- **键盘友好**：按 `/` 聚焦搜索框，支持键盘导航与可见焦点提示。
- **清晰反馈**：动态显示资源数量，搜索无结果时可一键清除筛选。
- **响应式界面**：桌面端采用侧栏与双列卡片，手机端切换为横向分类和单列资源。
- **保留浏览位置**：资源卡片及外部链接在新标签页打开。
- **轻量静态站点**：原生 HTML、CSS、JavaScript，无框架、无构建步骤。

## 资源分类

| 分类 | 内容 |
| --- | --- |
| SDK 和库 | JavaScript、Python、Rust、Go 与 JVM 相关 SDK |
| 开发框架 | 合约开发、测试与项目管理框架 |
| 编辑器插件 | Cairo 编辑体验与语言支持 |
| 模板和示例 | 前端集成示例与项目起点 |
| 构建工具 | 包管理、本地开发网络与钱包连接工具 |
| React 集成 | React 及相关应用开发资源 |
| 测试和部署 | 测试网络与部署相关资源 |
| 相关资源 | 官方网站、学习资料与生态入口 |

完整条目以 [`resources.js`](resources.js) 为准。本站是个人收藏目录；部分历史工具或测试网可能已停止维护，使用前请查看对应项目的最新文档与维护状态。

## 本地运行

需要 Git 与 Python 3。无需安装前端依赖。

```sh
git clone https://github.com/zhoulianglen/Starknet-Development-Resources.git
cd Starknet-Development-Resources
python3 -m http.server 8765 --bind 127.0.0.1
```

浏览器打开 [http://localhost:8765](http://localhost:8765)。修改文件后刷新页面即可查看结果，按 `Ctrl+C` 停止服务。

## 项目结构

```text
.
├── index.html           # 页面结构、元信息与统计脚本
├── styles.css           # 视觉样式、响应式布局与交互状态
├── resources.js         # 分类及资源数据
├── app.js               # 资源渲染、搜索、筛选与键盘快捷键
├── favicon.png          # 网站图标
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
└── README.md
```

## 添加或更新资源

编辑 `resources.js`，在对应分类的 `items` 中添加条目：

```js
{
  "title": "分类名称",
  "items": [
    {
      "name": "资源名称",
      "url": "https://example.com/"
    }
  ]
}
```

保持文件最外层的 `const resources = [...]` 声明。分类导航、资源数量与搜索内容会随数据自动更新，无需同步修改页面。

添加资源时请：

1. 优先使用项目官网、官方文档或源码仓库的直接链接。
2. 使用简洁准确的名称，放入最合适的分类。
3. 检查是否已有相同条目，并确认链接能正常访问。
4. 对废弃工具、迁移地址或失效链接，在 Issue 或 PR 中说明原因。

## 验证修改

提交前可执行基础检查：

```sh
node --check app.js
node --check resources.js
git diff --check
```

以上检查需要 Node.js 与 Git；Node.js 仅用于语法检查，运行网站不需要它。

在浏览器中确认：分类筛选正常；搜索名称和域名可获得预期结果；无结果时能清除筛选；资源在新标签页打开；手机宽度下页面没有横向溢出。

## 部署

将仓库静态文件发布到支持静态站点的托管服务即可，无需构建命令。发布目录为仓库根目录，入口文件为 `index.html`。请一并上传 JavaScript、CSS 和图标文件。

页面包含 Google Analytics 和 Plausible 统计脚本。如果将本站作为模板用于自己的站点，请在 `index.html` 中替换为自己的配置，或删除相关脚本。

## 参与完善

欢迎通过 [Issue](https://github.com/zhoulianglen/Starknet-Development-Resources/issues) 推荐资源、反馈失效链接或提出界面建议，也欢迎直接提交 Pull Request。

推荐资源时附上 **名称、链接、建议分类和简要说明**，方便核对与收录。

## 作者

- Twitter：[ @zhoulianglen](https://twitter.com/zhoulianglen)
- Blog：[imzl.com](https://imzl.com)
- Email：[wwwlenchou@gmail.com](mailto:wwwlenchou@gmail.com)

## 许可说明

本仓库暂未声明开源许可证。如需复制、修改或分发仓库代码，请先联系作者确认授权。收录的第三方项目、名称和商标归各自权利人所有，其使用受对应项目的许可条款约束。
