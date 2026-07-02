// Source note: 🟢 from past exam papers; 🟡 AI-supplied standard knowledge

import { Markdown } from "../components/Markdown";
import { SectionCard } from "../components/SectionCard";
import { ExampleCard, type Example } from "../components/ExampleCard";

const examples: Example[] = [
  {
    id: "q5_01",
    source: "material",
    question:
      "计算 $\iint_D e^{x/(x+y)}\,dxdy$，其中 $D=\\{(x,y): x+y\\le 1,\\;x\\ge 0,\\;y\\ge 0\\}$。（2024 期中 9）",
    answer:
      "$\\frac12(e-1)$。令 $u=x$, $v=x+y$，则 $x=u$, $y=v-u$，雅可比 $|J|=1$，$D$ 映为 $\\{0\\le u\\le v,\\;0\\le v\\le 1\\}$。$\\int_0^1\\int_0^v e^{u/v}\,du\,dv = \\int_0^1 v(e-1)\,dv = \\frac12(e-1)$。",
    explanation:
      "指数里 $x/(x+y)$ 提示换元 $v=x+y$，使内层积分可算。",
    keywords: ["变量替换 u=x,v=x+y", "雅可比 J=1", "∫₀^v e^{u/v}du=v(e-1)", "(1/2)(e-1)"],
  },
  {
    id: "q5_02",
    source: "material",
    question:
      "用对称性计算 $\\iint_D \\bigl[\\cos^2(x^2+y)+\\sin^2(x+y^2)\\bigr]\\,dA$，其中 $D:(x-1)^2+(y-1)^2\\le 3$。（2024 期中 10）",
    answer:
      "$3\\pi$。$D$ 关于直线 $y=x$ 对称，交换 $x\\leftrightarrow y$：原积分 $=\\iint_D[\\cos^2(y^2+x)+\\sin^2(y+x^2)]\\,dA$。两式相加取平均，被积函数变为 $\\frac12[\\cos^2(\\cdot)+\\sin^2(\\cdot)+\\dots]=1$，故积分 $=$ 面积 $=\\pi(\\sqrt3)^2=3\\pi$。",
    explanation:
      "利用对称性把「难积的三角函数」平均成常数 1，积分退化为区域面积。",
    keywords: ["关于 y=x 对称", "交换x,y取平均", "cos²+sin²=1", "面积=3π"],
  },
  {
    id: "q5_03",
    source: "material",
    question:
      "计算 $\\iiint_\\Omega (x^2+y^2+z^2)\\,dV$，其中 $\\Omega$ 为球体 $x^2+y^2+z^2\\le 1$。（2020-21 期末 A 卷 11）",
    answer:
      "$\\frac{4\\pi}{5}$。球坐标 $dV=\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$：$\\int_0^{2\\pi}d\\theta\\int_0^\\pi\\sin\\varphi\\,d\\varphi\\int_0^1 \\rho^2\\cdot\\rho^2\\,d\\rho=2\\pi\\cdot2\\cdot\\frac15=\\frac{4\\pi}{5}$。",
    explanation:
      "含 $x^2+y^2+z^2$ 且区域为球 → 球坐标，被积函数 $=\\rho^2$，别漏体积元 $\\rho^2\\sin\\varphi$。",
    keywords: ["球坐标", "dV=ρ²sinφ dρdφdθ", "∫ρ⁴dρ=1/5", "2π·2·1/5=4π/5"],
  },
  {
    id: "q5_04",
    source: "material",
    question:
      "计算 $\\iiint_\\Omega z\\,dV$，其中 $\\Omega$ 由 $x^2+y^2\\le 1$, $z=0$, $z=1$ 围成。（2020-21 期末 A 卷 12）",
    answer:
      "$\\frac{\\pi}{2}$。柱坐标：$\\int_0^{2\\pi}d\\theta\\int_0^1 r\\,dr\\int_0^1 z\\,dz=2\\pi\\cdot\\frac12\\cdot\\frac12=\\frac{\\pi}{2}$。（也可切片法 $\\int_0^1 z\\cdot(\\pi\\cdot1^2)\\,dz=\\frac{\\pi}{2}$。）",
    explanation:
      "圆柱区域用柱坐标，或按 $z$ 切片（每片面积 $\\pi$）积分。",
    keywords: ["柱坐标", "dV=r dz dr dθ", "或切片法", "π/2"],
  },
  {
    id: "q5_05",
    source: "material",
    question:
      "计算 $\\int_0^3\\int_0^{\\sqrt{9-x^2}}\\int_0^2 (x^2+y^2)^{1/2}\\,dz\\,dy\\,dx$。（22-23 期末 A 卷 5）",
    answer:
      "$9\\pi$。区域为四分之一圆柱（$x\\ge0$, $y\\ge0$, $r\\le3$, $0\\le z\\le2$）。柱坐标 $(x^2+y^2)^{1/2}=r$：$\\int_0^{\\pi/2}d\\theta\\int_0^3 r\\cdot r\\,dr\\int_0^2 dz=\\frac{\\pi}{2}\\cdot\\frac{27}{3}\\cdot2=9\\pi$。",
    explanation:
      "$x,y\\ge0$ 限定 $\\theta\\in[0,\\pi/2]$；被积函数 $r$ 再乘面积元 $r$ 得 $r^2$。",
    keywords: ["柱坐标", "θ∈[0,π/2]", "被积 r, 乘 Jacobian r → r²", "∫₀³r²dr=9", "9π"],
  },
];

export default function Chapter5() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-blue-600">Chapter 5</p>
        <h1 className="text-3xl font-bold text-slate-900">重积分（二重·三重）</h1>
        <p className="text-slate-600">
          真题必考：极坐标二重积分、交换积分次序、变量替换（雅可比）、对称性化简、三重积分的柱/球坐标。
        </p>
      </header>

      <SectionCard title="🧠 大白话隐喻" variant="highlight">
        <Markdown>
          {`二重积分就像**把一张薄饼切成无数细条**，每条称一下再相加；三重积分则是**把一块蛋糕切成小丁**，算总体积或质量。

坐标系就是“切法”：直角坐标是网格切，极坐标是圆环切，柱/球坐标是圆柱壳/球壳切。**选对切法，计算量差很多**；切的时候别忘了带上对应的“厚度修正”——极坐标乘 $r$，球坐标乘 $\\rho^2\\sin\\varphi$。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="📐 二重积分">
        <Markdown>
          {`**基本思路**：$\\iint_D f\\,dA$，先画出积分区域 $D$，再选坐标系。

- **直角坐标**：画出 $D$ 后，定内外层上下限（先积一个变量，看它的上下界是另一变量的函数）。
  $$\\iint_D f(x,y)\,dA=\\int_a^b\\left(\\int_{y_1(x)}^{y_2(x)} f(x,y)\,dy\\right)dx$$

- **交换积分次序**：先把给定累次积分还原成区域 $D$ 的不等式，重画 $D$，再按另一顺序写限。真题中如 $\\int_{1/2}^{1}\\int_{x^3}^{x} f(x,y)\,dy\,dx$ 常需分段处理。

- **极坐标**（圆/圆盘/含 $x^2+y^2$ 时首选）：
  $$x=r\\cos\\theta,\\quad y=r\\sin\\theta,\\quad dA=r\\,dr\\,d\\theta$$
  典型边界：$x^2+y^2=2x \\Rightarrow r=2\\cos\\theta$（圆过原点）。

- **一般变量替换**：设 $u=u(x,y),\\;v=v(x,y)$，则
  $$dA=|J|\\,du\\,dv,\\quad J=\\frac{\\partial(x,y)}{\\partial(u,v)}$$
  真题：取 $u=x,\\;v=x+y$ 可把 $e^{x/(x+y)}$ 化成可积形式。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="🪞 对称性化简">
        <Markdown>
          {`- 若 $D$ 关于某轴/直线对称，且被积函数关于对应变量为**奇函数**，则积分 $=0$。
- 若 $D$ 关于直线 $y=x$ 对称，可把 $f(x,y)$ 与 $f(y,x)$ 相加取平均：
  $$\\iint_D f(x,y)\,dA=\\frac12\\iint_D\\bigl[f(x,y)+f(y,x)\\bigr]\\,dA$$
  真题 $\\cos^2(x^2+y)+\\sin^2(x+y^2)$ 交换 $x,y$ 后平均，被积函数变为 $1$，结果直接等于区域面积。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="🔮 三重积分">
        <Markdown>
          {`**基本思路**：$\\iiint_\\Omega f\\,dV$，选坐标系。

- **直角坐标**：$dV=dx\\,dy\\,dz$；常用「先一后二」或「先二后一（切片法）」。

- **柱坐标**（含 $x^2+y^2$、圆柱/圆锥区域）：
  $$x=r\\cos\\theta,\\quad y=r\\sin\\theta,\\quad z=z,\\quad dV=r\\,dz\\,dr\\,d\\theta$$

- **球坐标**（含 $x^2+y^2+z^2$、球区域）：
  $$x=\\rho\\sin\\varphi\\cos\\theta,\\quad y=\\rho\\sin\\varphi\\sin\\theta,\\quad z=\\rho\\cos\\varphi$$
  $$dV=\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$$

**例**：$\\iiint_\\Omega (x^2+y^2+z^2)\,dV$ 于单位球：
$$\\int_0^{2\\pi}\\int_0^\\pi\\int_0^1 \\rho^2\\cdot\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta=\\frac{4\\pi}{5}$$`}
        </Markdown>
      </SectionCard>

      <SectionCard title="📝 标准答题模板">
        <Markdown>
          {`1. **看区域形状 + 被积函数**选坐标系：圆 → 极/柱，球 → 球，一般复杂形式 → 换元。
2. **画区域、定限**：三重积分先定 $z$ 的上下界，再投影到 $xy$ 定二重限。
3. **换元写对面积/体积元**：极坐标乘 $r$、球坐标乘 $\\rho^2\\sin\\varphi$，千万别漏。
4. **先查对称性**：能否直接化简或置零，再动笔算。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="⚠️ 易错点" variant="warning">
        <Markdown>
          {`- 极坐标漏乘 $r$、球坐标漏乘 $\\rho^2\\sin\\varphi$（最常见失分）。
- 交换积分次序前**务必画区域图**，否则限容易写错。
- 变量替换的雅可比要取**绝对值**。
- 用对称性置零前，要**同时**满足「区域对称 + 函数奇性」。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="⏱️ 3 分钟速记" variant="success">
        <p className="text-lg font-medium text-slate-800">
          「圆用极坐标乘 r，球用球坐标乘 ρ²sinφ；换次序先画图；对称奇函数直接归零。」
        </p>
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
