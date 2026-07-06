# ♾️ Calculus II Cram Coach

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-6-646cff?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Cloudflare_Pages-Deployed-orange?style=for-the-badge&logo=cloudflare" alt="Cloudflare" />
</p>

### 🚀 The Ultimate Interactive Study Companion & AI Cram Tutor for Mastering Calculus II

Are you stressed about your upcoming Calculus II final exam? Say goodbye to endless scrolling through messy PDF textbooks. **Calculus II Cram Coach** is a modern, high-fidelity interactive web application and study vault designed specifically for extreme high-efficiency final exam review. It pairs a comprehensive mathematical knowledge base with an interactive quiz engine and a custom AI tutor.

> [!TIP]
> ⚡ **Zero to Hero in 6 Hours:** Follow our structured 7-stage prep blueprint to master the most challenging Calculus II concepts, including Infinite Series, Multivariable Differentiation, Multiple Integrals, and Vector Fields!

---

## ✨ Key Features

- 📚 **Engineered 7-Stage Prep Blueprint:** A laser-focused timeline guiding you step-by-step from Infinite Series to Stokes' and Gauss's Theorems.
- 📝 **Interactive Quiz Engine:** Live practice with past exam questions, instant interactive feedback, and beautifully typeset step-by-step mathematical solutions.
- 🧠 **Built-in Formula Cheatsheet & Wiki:** Comprehensive, structured reference summaries with complete proof sketches, convergence test decision trees, and geometric diagrams.
- 🌐 **Beautiful KaTeX Rendering:** Fluid, pixel-perfect, and ultra-fast math typesetting powered by React-Katex.
- 🤖 **Universal Exam Cram Coach Skill:** Fully loaded with custom `.claude/skills` allowing local AI assistants to instantly test your knowledge, audit your progress, and explain confusing steps.
- ☁️ **Decoupled Static Website Architecture:** Completely separated study-site frontend (React SPA) ready to build, run, and host statically anywhere!

---

## 📅 The 7-Stage Prep Blueprint

| Stage | Focus Area | Core Concepts covered | Associated Wiki |
| :--- | :--- | :--- | :--- |
| **Stage 1** | 常数项级数 | Convergence test decision tree, p-series, integral/comparison/ratio tests | `ch1_series_convergence.md` |
| **Stage 2** | 幂级数与泰勒级数 | Radius of convergence, Taylor and Maclaurin expansions, error estimation | `ch2_power_taylor_series.md` |
| **Stage 3** | 空间解析几何 | Vectors, dot/cross products, lines & planes in 3D space, quadric surfaces | `ch3_vectors_geometry.md` |
| **Stage 4** | 多元函数微分 | Partial derivatives, chain rule, gradient vectors, directional derivatives, Lagrange multipliers | `ch4_multivariable_diff.md` |
| **Stage 5** | 重积分 | Double & Triple integrals, polar/cylindrical/spherical coordinate conversions | `ch5_multiple_integrals.md` |
| **Stage 6** | 向量代数与场论 | Line/surface integrals, Green's, Gauss's (Divergence), and Stokes' Theorems | `ch6_vector_calculus.md` |
| **Stage 7** | 微分方程 | First-order linear equations, exact equations, second-order linear homogeneous/non-homogeneous | `ch7_differential_equations.md` |

---

## 🛠️ Project Directory Layout

```bash
calculus/
├── calculus-study-site/     # 💻 Decoupled React+Vite web application
│   ├── src/                 #   └─ Study application source code
│   └── dist/                #   └─ Build output (deployed on Cloudflare Pages)
├── references/              # 📚 Study Raw Source Materials
│   ├── wiki/                #   └─ High-fidelity chapter-by-chapter Markdown summaries
│   └── quiz_bank.json       #   └─ Comprehensive exam-style question database
├── resources/               # 📂 PDF Textbooks, Midterm & Final reference papers
├── .claude/skills/          # 🧠 Universal Exam Cram Coach skill definitions
├── study_plan.md            # 📅 Master study syllabus
└── study_progress.md        # ✍️ Personalized review notes & confusion logger
```

---

## ⚡ Quick Start

### 1. Run the Web Application Locally

Get the React app running on your local machine in under a minute:

```bash
# Navigate to the study site folder
cd calculus-study-site

# Install dependencies
npm install

# Start the local development server
npm run dev
```

### 2. Build for Production

Compile the high-performance static build:

```bash
npm run build
```
The production-ready static assets will be outputted to `dist/`, ready to be served by any static host (Cloudflare Pages, Vercel, Netlify, or Nginx).

---

## ☁️ Continuous Deployment with Cloudflare Pages

This repository's frontend directory `calculus-study-site/` is fully automated and connected to **Cloudflare Pages**:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Production URL:** `https://calculus-study-site.pages.dev` (or your custom domain)

> [!NOTE]
> Every commit pushed to the `main` branch automatically triggers a deployment run on Cloudflare Pages, ensuring your live study site is always up-to-date with your latest exam-prep notes.
