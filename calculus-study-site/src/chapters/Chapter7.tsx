// Source note: 🟢 from past exam papers; 🟡 AI-supplied standard knowledge

import { Markdown } from "../components/Markdown";
import { SectionCard } from "../components/SectionCard";
import { ExampleCard } from "../components/ExampleCard";
import type { Example } from "../components/ExampleCard";

const examples: Example[] = [
  {
    id: "q7_01",
    source: "material",
    question:
      "解微分方程 $y'' - 3y' + 2y = e^x + 1$。（22-23 期末 A 卷 7）",
    answer:
      "通解 $y = C_1 e^x + C_2 e^{2x} - x e^x + \\frac{1}{2}$。特征方程 $\\lambda^2 - 3\\lambda + 2 = 0$ 得 $\\lambda = 1, 2$，故 $y_h = C_1 e^x + C_2 e^{2x}$。对 $e^x$（1 为特征根）设 $y_{p1} = A x e^x$，代入得 $A = -1$；对常数 $1$ 设 $y_{p2} = B$，代入 $2B = 1$ 得 $B = \\frac{1}{2}$。",
    explanation:
      "右端 $e^x$ 与特征根 $1$ 共振，特解要乘 $x$；常数项单独设常数，叠加得总特解。",
    keywords: [
      "特征方程 λ=1,2",
      "y_h = C1 e^x + C2 e^{2x}",
      "e^x 共振设 Axe^x → A=-1",
      "常数项 B=1/2",
      "y = C1 e^x + C2 e^{2x} - x e^x + 1/2",
    ],
  },
  {
    id: "q7_02",
    source: "ai_generated",
    question: "解一阶线性微分方程 $y' + 2xy = x$（练习题）。",
    answer:
      "$y = \\frac{1}{2} + C e^{-x^2}$。积分因子 $\\mu = e^{\\int 2x \\, dx} = e^{x^2}$，于是 $(e^{x^2} y)' = x e^{x^2}$，积分得 $e^{x^2} y = \\frac{1}{2} e^{x^2} + C$，故 $y = \\frac{1}{2} + C e^{-x^2}$。",
    explanation:
      "⚠️ AI生成练习题（非老师/教材原题），用于练「积分因子法」；步骤与结论可自行核对。",
    keywords: [
      "一阶线性",
      "积分因子 e^{∫P dx} = e^{x^2}",
      "(μy)' = μQ",
      "y = 1/2 + Ce^{-x^2}",
    ],
  },
];

export default function Chapter7() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-blue-600">Chapter 7</p>
        <h1 className="text-3xl font-bold text-slate-900">微分方程</h1>
        <p className="text-slate-600">
          期末常见一道二阶常系数线性方程，掌握「特征方程 + 待定系数 + 共振修正」三板斧即可稳拿分。
        </p>
      </header>

      <SectionCard title="🧠 大白话隐喻" variant="highlight">
        <Markdown>
          {`把微分方程想成**“侦探根据线索还原嫌疑人行踪”**：题目告诉你函数 $y$ 和它的导数 $y', y''$ 之间的“关系式”，你的任务是从这些线索倒推出 $y$ 本身。

- **一阶方程**像只用一个“速度线索”找位置；
- **二阶方程**像同时用速度和加速度线索，还要匹配初始条件才能唯一确定。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="📘 一阶微分方程">
        <Markdown>
          {`**可分离变量**
若 $\\frac{dy}{dx} = g(x)h(y)$，则分离变量后两边积分：

$$\\int\\frac{dy}{h(y)} = \\int g(x)\\,dx$$

**一阶线性方程** $y' + P(x)y = Q(x)$
积分因子 $\\mu = e^{\\int P(x)\\,dx}$，通解为：

$$y = \\frac{1}{\\mu}\\left(\\int \\mu Q(x)\\,dx + C\\right)$$

**伯努利方程** $y' + P(x)y = Q(x)y^n\\ (n \\neq 0, 1)$
令 $z = y^{1-n}$，即可化为一阶线性方程。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="📗 二阶常系数线性方程（重点）">
        <Markdown>
          {`标准形式：$y'' + p y' + q y = f(x)$。

**第 1 步：求齐次通解 $y_h$**
写特征方程：

$$\\lambda^2 + p\\lambda + q = 0$$

- **两不等实根** $\\lambda_1, \\lambda_2$：$y_h = C_1 e^{\\lambda_1 x} + C_2 e^{\\lambda_2 x}$；
- **重根** $\\lambda$：$y_h = (C_1 + C_2 x)e^{\\lambda x}$；
- **共轭复根** $\\alpha \\pm \\beta i$：$y_h = e^{\\alpha x}(C_1 \\cos \\beta x + C_2 \\sin \\beta x)$。

**第 2 步：用待定系数法求特解 $y_p$**
按右端 $f(x)$ 的形式设：

- $f$ 为多项式 $\\rightarrow$ 设同次多项式；
- $f = A e^{kx}$ $\\rightarrow$ 设 $a e^{kx}$；若 $k$ 是特征根，要**乘 $x$**（重根乘 $x^2$）进行**共振修正**；
- $f$ 含 $\\sin / \\cos$ $\\rightarrow$ 设 $a \\cos + b \\sin$（同理共振修正）；
- 右端是几项之和 $\\rightarrow$ **分别求特解再相加**（叠加原理）。

**第 3 步：写通解并代入初值**
$$y = y_h + y_p$$
有初值条件时再代入定 $C_1, C_2$。

**真题范例** $y'' - 3y' + 2y = e^x + 1$：
特征方程 $\\lambda^2 - 3\\lambda + 2 = 0$ 得 $\\lambda = 1, 2$，故 $y_h = C_1 e^x + C_2 e^{2x}$。
- 对 $e^x$：因 $1$ 是特征根，设 $y_{p1} = A x e^x$，代入得 $A = -1$，即 $-x e^x$；
- 对常数 $1$：设 $y_{p2} = B$，代入 $2B = 1$ 得 $B = \\frac{1}{2}$；
- **通解**：$y = C_1 e^x + C_2 e^{2x} - x e^x + \\frac{1}{2}$。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="⚠️ 易错点" variant="warning">
        <Markdown>
          {`- 设特解时，若指数底数或 $\\sin/\\cos$ 频率与特征根**共振**，一定要乘 $x$；重根则乘 $x^2$，否则解不出。
- 右端是多项项之和时，要**分项设特解**，再用叠加原理相加。
- 通解别忘齐次部分 $y_h$ 里的任意常数 $C_1, C_2$；只有给出初值条件时才代入求解。
- 一阶线性方程用积分因子时，注意 $\\mu$ 要乘在整个方程两边，即 $(\\mu y)' = \\mu Q$。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="⏱️ 3 分钟速记" variant="success">
        <Markdown>
          {`「先特征方程定 $y_h$（辨实根 / 重根 / 复根）；再按右端设 $y_p$、共振乘 $x$；$y = y_h + y_p$。一阶记积分因子 $e^{\\int P}$。」`}
        </Markdown>
      </SectionCard>

      <SectionCard title="📝 真题例题">
        <div className="space-y-6">
          {examples.map((example, i) => (
            <ExampleCard key={example.id} example={example} index={i} />
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
