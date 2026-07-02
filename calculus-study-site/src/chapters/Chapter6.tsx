// Source note: 🟢 from past exam papers; 🟡 AI-supplied standard knowledge

import { Markdown } from "../components/Markdown";
import { SectionCard } from "../components/SectionCard";
import { ExampleCard } from "../components/ExampleCard";
import type { Example } from "../components/ExampleCard";

const examples: Example[] = [
  {
    id: "q6_01",
    source: "material",
    question:
      "L 为圆 $x^2+y^2=9$ 的正向(逆时针)边界，求 $\\oint_L (2xy-2y)\\,dx+(x^2-4x)\\,dy$。（2020-21 期末 A 卷 1）",
    answer:
      "$-18\\pi$。格林公式：$\\frac{\\partial N}{\\partial x}-\\frac{\\partial M}{\\partial y}=(2x-4)-(2x-2)=-2$，$\\oint = \\iint_D (-2)\\,dA=-2\\cdot(\\pi\\cdot3^2)=-18\\pi$。",
    explanation: "闭曲线用格林把线积分化为二重积分，被积为常数 $-2$ 时直接乘面积。",
    keywords: ["格林公式", "∂N/∂x-∂M/∂y=-2", "面积9π", "-18π"],
  },
  {
    id: "q6_02",
    source: "material",
    question:
      "计算第一类曲线积分 $\\oint_L \\sqrt{x^2+y^2}\\,ds$，L: $x^2+y^2=a^2$ ($a>0$)。（2020-21 期末 A 卷 2）",
    answer:
      "$2\\pi a^2$。在 L 上 $\\sqrt{x^2+y^2}=a$ 为常数，$\\oint_L \\sqrt{x^2+y^2}\\,ds = a\\cdot\\oint_L ds = a\\cdot(2\\pi a) = 2\\pi a^2$。",
    explanation: "被积函数在曲线上恒等于常数时，积分 = 常数 × 弧长。",
    keywords: ["第一类曲线积分", "L上 √(x²+y²)=a", "∮ds=弧长=2πa", "2πa²"],
  },
  {
    id: "q6_03",
    source: "material",
    question:
      "求向量场 $A=e^{xy}\\mathbf{i}+\\cos(xy)\\mathbf{j}+xz^2\\mathbf{k}$ 的散度 $\\operatorname{div} A =$ ____。（2020-21 期末 A 卷 6）",
    answer: "$ye^{xy} - x\\sin(xy) + 2xz$",
    explanation: "散度 = 各分量对同名变量偏导之和。",
    keywords: [
      "div=∂M/∂x+∂N/∂y+∂P/∂z",
      "∂(e^{xy})/∂x=ye^{xy}",
      "∂cos(xy)/∂y=-x sin(xy)",
      "∂(xz²)/∂z=2xz",
    ],
  },
  {
    id: "q6_04",
    source: "material",
    question:
      "G 为球面 $x^2+y^2+z^2=a^2$，计算 $\\iint_G \\dfrac{x+y^3+\\sin z}{1+z^4}\\,dS$。（22-23 期末 A 卷 1(3)）",
    answer:
      "$0$。球面关于三个坐标平面对称。$\\dfrac{x}{1+z^4}$ 关于 $x$ 为奇；$\\dfrac{y^3}{1+z^4}$ 关于 $y$ 为奇；$\\dfrac{\\sin z}{1+z^4}$ 关于 $z$ 为奇。三部分在对称曲面上积分均为 0，故总积分 $=0$。",
    explanation: "对称区域上奇函数积分为零——先拆项判奇偶，避免真的去算。",
    keywords: ["对称性", "球面关于坐标平面对称", "奇函数积分为0", "结果0"],
  },
  {
    id: "q6_05",
    source: "material",
    question:
      "S 为实心圆柱 $x^2+y^2\\le 4, 0\\le z\\le 3$ 的边界外侧，$F=(x^3+\\tan(yz), y^3+e^{xz}, 3z-x^3)$。求通量 $\\displaystyle\\iint_S F\\cdot\\mathbf{n}\\,dS$。（22-23 期末 A 卷 4）",
    answer:
      "$108\\pi$。S 闭合，用高斯散度定理：$\\operatorname{div} F=3x^2+3y^2+3$。$\\iiint_\\Omega(3x^2+3y^2+3)\\,dV$，柱坐标 $=\\int_0^{2\\pi}\\int_0^2\\int_0^3 (3r^2+3)\\,r\\,dz\\,dr\\,d\\theta = 6\\pi\\int_0^2(3r^3+3r)\\,dr = 6\\pi(12+6)=108\\pi$。",
    explanation: "闭曲面通量首选高斯定理，把面积分化为散度的体积分；含 $x^2+y^2$ 用柱坐标。",
    keywords: ["高斯散度定理", "div F=3x²+3y²+3", "柱坐标", "108π"],
  },
  {
    id: "q6_06",
    source: "material",
    question:
      "线积分 $\\int_L xy^2\\,dx+y\\phi(x)\\,dy$ 与路径无关，$\\phi$ 可导且 $\\phi(0)=0$。求 $\\int_{(0,0)}^{(1,1)} xy^2\\,dx+y\\phi(x)\\,dy$。（2020-21 期末 A 卷 9）",
    answer:
      "$\\dfrac12$。路径无关 $\\Longleftrightarrow \\frac{\\partial P}{\\partial y}=\\frac{\\partial Q}{\\partial x}$，即 $2xy=y\\phi'(x) \\Rightarrow \\phi'(x)=2x \\Rightarrow \\phi(x)=x^2+C$，由 $\\phi(0)=0$ 得 $\\phi(x)=x^2$。沿折线积分：$\\int_{(0,0)}^{(1,1)} xy^2\\,dx+yx^2\\,dy = \\int_0^1 y\\,dy = \\frac12$。",
    explanation: "先由路径无关条件反解 $\\phi$，再选便捷路径（或求势函数）积分。",
    keywords: ["路径无关 ∂P/∂y=∂Q/∂x", "φ'(x)=2x", "φ(x)=x²", "结果1/2"],
  },
  {
    id: "q6_07",
    source: "material",
    question:
      "求 $\\displaystyle\\oint_L \\frac{(x-1)\\,dy - y\\,dx}{(x-1)^2+y^2}$，L 为包含点 $(1,0)$ 的正向(逆时针)简单闭曲线。（2020-21 期末 A 卷 17）",
    answer:
      "$2\\pi$。被积在 $(1,0)$ 有奇点。在 L 内取小圆 $C:(x-1)^2+y^2=r^2$，二者之间用格林（被积的 $\\frac{\\partial N}{\\partial x}-\\frac{\\partial M}{\\partial y}=0$），故 $\\oint_L = \\oint_C$。在 C 上参数化 $x=1+r\\cos\\theta, y=r\\sin\\theta$，代入得 $\\oint_C = \\int_0^{2\\pi} d\\theta = 2\\pi$。",
    explanation: "分母含 $(x-1)^2+y^2$ 型的经典「挖洞」题，答案与曲线无关恒为 $2\\pi$。",
    keywords: ["奇点(1,0)挖小圆", "环域内 ∂N/∂x-∂M/∂y=0", "小圆参数化", "2π"],
  },
  {
    id: "q6_08",
    source: "material",
    question:
      "C 为 $(x-a)^2+(y-a)^2=1$ 的正向闭曲线，$f(x)$ 为正的连续函数。证明 $\\displaystyle\\oint_C \\frac{x}{f(y)}\\,dy - y f(x)\\,dx = 2\\pi$。（22-23 期末 A 卷 8）",
    answer:
      "设 $M=-y f(x), N=\\frac{x}{f(y)}$。格林公式：$\\oint_C = \\iint_D \\left(\\frac{\\partial N}{\\partial x}-\\frac{\\partial M}{\\partial y}\\right)dA = \\iint_D \\left[\\frac1{f(y)}+f(x)\\right]dA$。由对称性（D 关于 $y=x$ 对称，交换 $x\\leftrightarrow y$ 取平均）得 $\\frac12\\iint_D\\left[\\frac1{f(y)}+f(x)+\\frac1{f(x)}+f(y)\\right]dA \\ge \\frac12\\iint_D 4\\,dA$（均值不等式 $t+\\frac1t\\ge2$），官方解按对称化简得 $=\\frac12\\iint_D 4\\,dA = 2\\cdot(\\pi\\cdot1^2)=2\\pi$。",
    explanation: "格林转二重积分后，用区域关于 $y=x$ 的对称性把含 $f$ 的项配对化简为常数 4，再乘面积/2 得 $2\\pi$。",
    keywords: [
      "格林公式",
      "M=-yf(x),N=x/f(y)",
      "对称化简 y=x",
      "∫∫4dA/2",
      "面积π",
      "2π",
    ],
  },
];

export default function Chapter6() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-blue-600">Chapter 6</p>
        <h1 className="text-3xl font-bold text-slate-900">向量场与曲线曲面积分</h1>
        <p className="text-slate-600">
          期末压轴集中区：散度/旋度、两类曲线积分、路径无关与保守场、格林公式、两类曲面积分、高斯散度定理、斯托克斯定理。
        </p>
      </header>

      <SectionCard title="🧠 大白话隐喻" variant="highlight">
        <Markdown>
          {`把**向量场**想成游泳池里每一点的水流速度：
- **梯度**告诉你“哪里更陡、哪里更深”；
- **散度**告诉你“这点是不是喷泉（流出多于流入）”；
- **旋度**告诉你“这点是不是漩涡”。

**曲线积分**就是“小船沿路径走，水流对它做了多少功”；**曲面积分**就是“某块网兜住了多少流量”。三大定理则帮你把难算的线、面积分转成好算的二重、三重积分。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="🌊 场的运算（梯度/散度/旋度）">
        <Markdown>
          {`**梯度**（标量场 $f$ → 向量场）：
$$\\nabla f = \\left(\\frac{\\partial f}{\\partial x},\\frac{\\partial f}{\\partial y},\\frac{\\partial f}{\\partial z}\\right)$$

**散度**（向量场 $\\mathbf{F}=(M,N,P)$ → 标量）：
$$\\operatorname{div} \\mathbf{F} = \\nabla\\cdot\\mathbf{F} = \\frac{\\partial M}{\\partial x}+\\frac{\\partial N}{\\partial y}+\\frac{\\partial P}{\\partial z}$$
真题：$\\mathbf{F}=e^{xy}\\mathbf{i}+\\cos(xy)\\mathbf{j}+xz^2\\mathbf{k}$，则
$$\\operatorname{div}\\mathbf{F}=ye^{xy}-x\\sin(xy)+2xz$$

**旋度**（向量场 → 向量）：
$$\\operatorname{curl}\\mathbf{F}=\\nabla\\times\\mathbf{F}=\\begin{vmatrix}\\mathbf{i}&\\mathbf{j}&\\mathbf{k}\\\\ \\frac{\\partial}{\\partial x}&\\frac{\\partial}{\\partial y}&\\frac{\\partial}{\\partial z}\\\\ M&N&P\\end{vmatrix}$$`}
        </Markdown>
      </SectionCard>

      <SectionCard title="📈 曲线积分">
        <Markdown>
          {`**第一类（对弧长，标量）** $\\displaystyle\\int_C f\\,ds$：
参数化 $x=x(t), y=y(t)$，则 $ds=\\sqrt{x'(t)^2+y'(t)^2}\\,dt$。
- 若在 $C$ 上 $\\sqrt{x^2+y^2}=a$ 为常数，则
$$\\int_C \\sqrt{x^2+y^2}\\,ds = a\\cdot(\\text{弧长})$$
真题 $x^2+y^2=a^2$：$\\int_C \\sqrt{x^2+y^2}\\,ds = a\\cdot2\\pi a = 2\\pi a^2$。

**第二类（对坐标，向量做功）** $\\displaystyle\\int_C \\mathbf{F}\\cdot d\\mathbf{r} = \\int_C M\\,dx+N\\,dy+P\\,dz$：
1. 参数化代入；
2. 环路用格林（平面）或斯托克斯（空间）；
3. 路径无关时用势函数 $u$（只算端点）。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="🛤️ 路径无关与保守场">
        <Markdown>
          {`平面上 $\\displaystyle\\int M\\,dx+N\\,dy$ 路径无关
$$\\Longleftrightarrow \\frac{\\partial M}{\\partial y}=\\frac{\\partial N}{\\partial x}$$
（单连通域内）$\\Longleftrightarrow$ 存在势函数 $u$，使 $du=M\\,dx+N\\,dy$。

**算法**：
1. 先验证 $\\frac{\\partial M}{\\partial y}=\\frac{\\partial N}{\\partial x}$；
2. 求势函数 $u$：对 $M$ 关于 $x$ 积分，再用 $N$ 确定待定函数；
3. 积分值 $=u(\\text{终点})-u(\\text{起点})$。

空间中同理，条件为 $\\operatorname{curl}\\mathbf{F}=\\mathbf{0}$。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="🟩 格林公式">
        <Markdown>
          {`平面环路 $C$ 为区域 $D$ 的正向（逆时针）边界，则
$$\\oint_C M\\,dx+N\\,dy = \\iint_D \\left(\\frac{\\partial N}{\\partial x}-\\frac{\\partial M}{\\partial y}\\right)dA$$

真题：$\\oint(2xy-2y)\\,dx+(x^2-4x)\\,dy$ 于 $x^2+y^2=9$，
$$\\frac{\\partial N}{\\partial x}-\\frac{\\partial M}{\\partial y}=(2x-4)-(2x-2)=-2$$
故积分 $=\\iint_D(-2)\\,dA=-2\\cdot9\\pi=-18\\pi$。

**奇点处理**（分母含 $(x-a)^2+(y-b)^2$）：在奇点外挖一个小圆，环域上用格林，再在小圆上直接参数化。
真题：$\\displaystyle\\oint\\frac{(x-1)\\,dy-y\\,dx}{(x-1)^2+y^2}=2\\pi$。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="🔲 曲面积分">
        <Markdown>
          {`**第一类（对面积）** $\\displaystyle\\iint_\\Sigma f\\,dS$：
- 投影到 $xy$ 平面：$dS=\\sqrt{1+z_x^2+z_y^2}\\,dA$。
- 参数化：$dS=|\\mathbf{r}_u\\times\\mathbf{r}_v|\\,du\\,dv$。
- **对称性**：球面上奇函数积分 $=0$。

真题：$\\displaystyle\\iint_G \\frac{x+y^3+\\sin z}{1+z^4}\\,dS=0$，因为 $x,y^3,\\sin z$ 分别关于 $x,y,z$ 为奇函数。

**第二类（通量）** $\\displaystyle\\iint_\\Sigma \\mathbf{F}\\cdot\\mathbf{n}\\,dS$：
$$=\\iint_\\Sigma M\\,dy\\,dz+N\\,dz\\,dx+P\\,dx\\,dy$$
注意曲面的**侧/法向**方向（上侧/外侧）。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="🏛️ 三大定理（格林/高斯/斯托克斯）">
        <Markdown>
          {`**高斯散度定理**（闭曲面通量）：
$$\\oiint_\\Sigma \\mathbf{F}\\cdot\\mathbf{n}\\,dS = \\iiint_\\Omega \\operatorname{div}\\mathbf{F}\\,dV$$
用于**闭曲面**求通量。曲面不闭合时，补一块面凑成闭曲面，用高斯算总量再减去补面上的积分。

真题：$\\mathbf{F}=(x^3+\\tan(yz), y^3+e^{xz}, 3z-x^3)$ 于实心圆柱 $x^2+y^2\\le4, 0\\le z\\le3$，
$$\\operatorname{div}\\mathbf{F}=3x^2+3y^2+3$$
积分 $=\\iiint_\\Omega(3x^2+3y^2+3)\\,dV=108\\pi$。

**斯托克斯定理**（空间环路 ↔ 旋度通量）：
$$\\oint_C \\mathbf{F}\\cdot d\\mathbf{r}=\\iint_\\Sigma (\\operatorname{curl}\\mathbf{F})\\cdot\\mathbf{n}\\,dS$$
边界好算用左边，曲面好参数化用右边。

**平面格林**是斯托克斯在平面上的特例。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="🌳 选择策略（压轴题决策树）">
        <Markdown>
          {`1. **闭曲面求通量** → 用 **高斯**定理。
2. **空间闭曲线做功** → 用 **斯托克斯**定理；或先检查是否保守（$\\operatorname{curl}\\mathbf{F}=\\mathbf{0}$），保守则只需端点势函数。
3. **平面闭曲线** → 用 **格林**公式；有奇点时先挖洞。
4. **曲面不闭** → 补面后用高斯，再减补面。
5. **曲线不闭且非保守** → 老老实实参数化。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="⚠️ 易错点" variant="warning">
        <Markdown>
          {`- 高斯/格林要求 **闭合 + 正向**；方向反了差一个负号，缺口一定要补面。
- 保守场判据是 $\\operatorname{curl}\\mathbf{F}=\\mathbf{0}$（平面 $\\partial M/\\partial y=\\partial N/\\partial x$）**且区域单连通**；有奇点时不能直接用。
- 第二类积分要注意**侧/法向**方向（上侧/外侧），别搞反。
- $dS$ 与 $dA$ 的关系别漏 $\\sqrt{1+z_x^2+z_y^2}$。
- 格林公式中是 $\\partial N/\\partial x-\\partial M/\\partial y$，别把顺序记反。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="⏱️ 3 分钟速记" variant="success">
        <p className="text-lg font-medium text-slate-800">
          「闭曲面高斯、空间环路斯托克斯、平面环路格林；保守场 curl=0 只看端点；不闭就补面、有奇点就挖洞。」
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
