# ♾️ 微积分 II 极速通关备考助手 (Calculus II Cram Coach)

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-6-646cff?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Cloudflare_Pages-Deployed-orange?style=for-the-badge&logo=cloudflare" alt="Cloudflare" />
</p>

### 🚀 专为微积分 II（期末考试）量身定制的交互式备考网站与 AI 复习知识库

正在为即将到来的微积分 II 期末考试感到焦虑？告别枯燥杂乱的课本和零散的 PDF。**微积分 II 极速通关备考助手**是一个现代化、高保真的交互式网页应用与学习宝库。它将系统化的数学知识库、真题练习引擎和自定义 AI 导师完美结合，旨在帮你在极短时间内完成最高效的期末复习。

> [!TIP]
> ⚡ **6 小时极速通关：** 遵循我们精心提炼的 7 阶段极速复习大纲，攻克微积分 II 中最棘手的核心概念，包括：数项级数收敛判定、泰勒级数展开、空间几何、多元函数微分、重积分、曲线曲面积分（格林/高斯/斯托克斯定理）以及微分方程！

---

## ✨ 核心特色

- 📚 **7 阶段系统化通关路线图：** 紧扣大纲的复习时间线，带你稳扎稳打从无穷级数一路扫雷到高斯公式和斯托克斯公式。
- 📝 **交互式真题自测引擎：** 收录经典真题与考点，支持即时自测和交互反馈，每道题均配备详尽的数学解题步骤。
- 🧠 **内置极速公式小抄与 Wiki：** 整理高频公式，配有完整的证明思路、级数收敛判定决策树和几何空间图像。
- 🌐 **KaTeX 高清数学公式渲染：** 采用 React-Katex 高效引擎，实现秒级高精度数学公式排版呈现，阅读体验极佳。
- 🤖 **通用 AI Cram Coach 复习技能：** 仓库内置 `.claude/skills` 定义文件，支持本地 AI 助手随时测试你的掌握情况、进行备考审计与深度答疑。
- ☁️ **彻底解耦的静态网站架构：** 前端（React SPA）与原始复习资料、PDF 讲义完全解耦，支持零配置在任意静态托管平台一键上线。

---

## 📅 7 阶段备考路线大纲

| 复习阶段 | 核心任务 | 关联考点及难点 | 对应 Wiki 文档 |
| :--- | :--- | :--- | :--- |
| **阶段 1** | 常数项级数 | 级数收敛判定决策树、p-级数、积分判别法/比较判别法/比值判别法 | `ch1_series_convergence.md` |
| **阶段 2** | 幂级数与泰勒级数 | 收敛半径与收敛域、泰勒及麦克劳林级数展开、余项与误差估计 | `ch2_power_taylor_series.md` |
| **阶段 3** | 空间解析几何 | 向量代数、数量积/向量积、空间直线与平面方程、二次曲面 | `ch3_vectors_geometry.md` |
| **阶段 4** | 多元函数微分 | 偏导数、全微分、多元复合函数求导（链式法则）、方向导数与梯度、拉格朗日乘数法 | `ch4_multivariable_diff.md` |
| **阶段 5** | 重积分 | 二重积分与三重积分（直角坐标/极坐标/柱面坐标/球面坐标转换） | `ch5_multiple_integrals.md` |
| **阶段 6** | 曲线与曲面积分 | 对弧长/对坐标的线面积分、格林公式、高斯散度定理、斯托克斯公式 | `ch6_vector_calculus.md` |
| **阶段 7** | 微分方程 | 一阶线性微分方程、全微分方程、二阶常系数线性齐次/非齐次微分方程 | `ch7_differential_equations.md` |

---

## 🛠️ 项目目录结构

```bash
calculus/
├── study-site/              # 💻 前端 React+Vite 交互复习网站（完全解耦）
│   ├── src/                 #   └─ 学习与测验前端源码
│   └── dist/                #   └─ 构建编译输出（发布部署于 Cloudflare Pages）
├── references/              # 📚 极速复习原始核心材料
│   ├── wiki/                #   └─ 精炼的高质量章节知识点汇总（Markdown 格式）
│   └── quiz_bank.json       #   └─ 结构化的期末混合考试自测题库
├── resources/               # 📂 教学原版 PDF 课本、期中/期末历年真题及答案
├── .claude/skills/          # 🧠 通用 AI 备考助手技能定义（支持 Claude 导入调用）
├── study_plan.md            # 📅 系统化通关备战计划书
└── study_progress.md        # ✍️ 个性化错题本、知识盲区记录与进度表
```

---

## ⚡ 快速开始

### 1. 本地启动交互复习网站

仅需一分钟，即可在本地运行高性能 React 复习终端：

```bash
# 进入网站项目文件夹
cd study-site

# 安装依赖
npm install

# 启动本地开发热更新服务器
npm run dev
```

### 2. 编译生产静态包

导出极致压缩的生产环境静态资源：

```bash
npm run build
```
编译生成的静态文件将输出至 `dist/` 文件夹下，可直接上传部署至 Cloudflare Pages、Vercel、Netlify 或本地 Nginx 服务器。

---

## ☁️ Cloudflare Pages 部署说明

本项目的 `study-site/` 目录完美适配 **Cloudflare Pages** 自动化流水线，实现代码推送即部署（CI/CD）：

### Step-by-Step 部署配置步骤

1. **登录 Cloudflare 控制台：** 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)，导航至 **Workers & Pages** -> **Pages** -> **Connect to Git（连接到 Git）**。
2. **选择 GitHub 仓库：** 绑定您的 GitHub 账号，并选择本仓库 `calculus_II`。
3. **填写构建配置字段（核心要点）：** 请严格按照以下表格配置构建设置：

| 配置字段 (Configuration Field) | 目标设置值 (Value) | 字段详解与重要作用 |
| :--- | :--- | :--- |
| **Project Name (项目名称)** | `calculus-study-site` | 用于生成您的二级域名 (如 `calculus-study-site.pages.dev`) |
| **Production Branch (生产分支)** | `main` | 触发正式版部署的默认主分支 |
| **Framework Preset (框架预设)** | **Vite** | 自动加载 Vite 项目的标准依赖和环境预设 |
| **Root Directory (根目录)** | `study-site` | **[最关键]** 必须指定为解耦的网页子目录，否则构建会失败 |
| **Build Command (构建命令)** | `npm run build` | 运行 `tsc -b && vite build` 编译 React + TS + Tailwind v4 生产包 |
| **Build Output Directory (构建输出目录)** | `dist` | 编译后生成的静态资源分发包路径 |

4. **保存并部署：** 点击 "Save and Deploy"，Cloudflare 将拉取您的代码、自动安装 Node 依赖，并秒级部署上线。

> [!IMPORTANT]
> **关于根目录设置的声明：** 由于我们指定了 **Root Directory** 为 `study-site`，Cloudflare 会自动定位在该子目录中执行依赖安装和打包。请勿在构建命令中填写 `cd study-site && npm run build`。

> [!NOTE]
> 往后每一次向本仓库的 `main` 分支提交或合并代码，Cloudflare Pages 都会自动捕捉并静默更新部署，确保您的备考网站内容始终与本地错题笔记保持同步！
