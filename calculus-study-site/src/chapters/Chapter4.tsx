// Source note: 🟢 from past exam papers; 🟡 AI-supplied standard knowledge

import { Markdown } from "../components/Markdown";
import { SectionCard } from "../components/SectionCard";
import { ExampleCard, type Example } from "../components/ExampleCard";

const examples: Example[] = [
  {
    id: "q4_01",
    source: "material",
    question:
      "证明极限 $\\lim_{(x,y,z)\\to(0,0,0)} \\frac{xyz}{x^3+y^3+z^3}$ 不存在。（22-23 期末 A 卷 3）",
    answer:
      "沿路径 $x=y=z=t$（$t\\to 0$）：$\\frac{xyz}{x^3+y^3+z^3}=\\frac{t^3}{3t^3}=\\frac13$；沿路径 $x=0,\\,y=0,\\,z=t$：$\\frac{0}{t^3}=0$。两路径极限不同 $\\left(\\frac13\\neq0\\right)$，故极限不存在。",
    explanation: "证不存在只需找到两条趋近路径给出不同极限值。",
    keywords: ["两条路径", "x=y=z=t 得 1/3", "x=y=0 得 0", "极限值不同", "不存在"],
  },
  {
    id: "q4_02",
    source: "material",
    question:
      "设 $f(x,y)=\\frac{xy}{x^2+y^2}$（$(x,y)\\neq(0,0)$），$f(0,0)=0$。证明：(1) $f$ 在 $(0,0)$ 的偏导数存在；(2) $f$ 在 $(0,0)$ 不可微。（2024 期中 15 / 22-23 期中 7）",
    answer:
      "(1) $f_x(0,0)=\\lim_{\\Delta x\\to0}\\frac{f(\\Delta x,0)-0}{\\Delta x}=\\lim\\frac{0}{\\Delta x}=0$，同理 $f_y(0,0)=0$，偏导存在。\n\n(2) 考察 $\\dfrac{\\Delta z-f_x\\Delta x-f_y\\Delta y}{\\sqrt{\\Delta x^2+\\Delta y^2}}=\\dfrac{\\Delta x\\Delta y}{(\\Delta x^2+\\Delta y^2)^{3/2}}$，取 $\\Delta y=k\\Delta x$ 得 $\\dfrac{k}{(1+k^2)^{3/2}}$，依赖 $k$（$\\neq0$），极限不存在 $\\Rightarrow$ 不可微。",
    explanation:
      "偏导存在 $\\neq$ 可微；可微要求增量差比 $o(\\rho)$ 的极限为 0，此处沿不同斜率极限不同故不可微。",
    keywords: ["偏导用定义算=0", "沿 Δy=kΔx", "结果依赖 k", "增量比极限不存在", "不可微"],
  },
  {
    id: "q4_03",
    source: "material",
    question:
      "方程 $3x^2z+y^3+xyz^3=0$ 确定隐函数 $z=f(x,y)$，求 $\\frac{\\partial z}{\\partial x}$。（22-23 期末 A 卷 1(5)）",
    answer:
      "$$\\frac{\\partial z}{\\partial x}=-\\frac{6xz+yz^3}{3x^2+3xyz^2}.$$\n两边对 $x$ 求偏导：$6xz+3x^2z_x+yz^3+3xyz^2z_x=0$，解出 $z_x$。",
    explanation:
      "可两边直接对 $x$ 求偏导（视 $z$ 为 $x,y$ 的函数），或用公式 $z_x=-F_x/F_z$。",
    keywords: ["隐函数求导", "两边对x求偏导", "-(6xz+yz³)/(3x²+3xyz²)", "或 -F_x/F_z"],
  },
  {
    id: "q4_04",
    source: "material",
    question:
      "设 $z=f(u,x,y)$，$u=xe^y$，$f$ 有二阶连续偏导，求 $\\frac{\\partial^2 z}{\\partial x\\partial y}$。（22-23 期中 9 / 2024 期中类似）",
    answer:
      "$$z_x=e^yf_1+f_2$$\n$$\\frac{\\partial^2 z}{\\partial x\\partial y}=e^yf_1+xe^{2y}f_{11}+e^yf_{13}+xe^yf_{21}+f_{23}.$$",
    explanation:
      "一阶求出 $z_x$ 后，注意 $f_1$、$f_2$ 仍是 $(u,x,y)$ 的函数，对 $y$ 再套链式（$u_y=xe^y$）。",
    keywords: ["z_x=eʸf₁+f₂", "对y再链式", "u_y=xeʸ", "eʸf₁+xe²ʸf₁₁+eʸf₁₃+xeʸf₂₁+f₂₃"],
  },
  {
    id: "q4_05",
    source: "material",
    question:
      "设 $z=xf\\left(xy,\\frac{y}{x}\\right)$，$f$ 有二阶连续偏导，求 $\\frac{\\partial z}{\\partial y}$ 与 $\\frac{\\partial^2 z}{\\partial y\\partial x}$。（22-23 期中 8 / 2024 期中 16）",
    answer:
      "令 $u=xy$，$v=\\frac{y}{x}$，则\n$$\\frac{\\partial z}{\\partial y}=x\\left(xf_1+\\frac1xf_2\\right)=x^2f_1+f_2.$$\n再对 $x$ 求导：\n$$\\frac{\\partial^2 z}{\\partial y\\partial x}=2xf_1+x^2yf_{11}-\\frac{y}{x^2}f_{22}.$$",
    explanation:
      "先算 $z_y=x^2f_1+f_2$，再对 $x$ 求导时对 $f_1$、$f_2$ 继续链式（$u_x=y$，$v_x=-y/x^2$），用 $f_{12}=f_{21}$ 合并。",
    keywords: ["u=xy,v=y/x", "∂z/∂y=x²f₁+f₂", "对x再链式(u_x=y,v_x=-y/x²)", "2xf₁+x²yf₁₁-(y/x²)f₂₂"],
  },
  {
    id: "q4_06",
    source: "material",
    question:
      "设 $G(u,v)$ 可微，方程 $G\\left(\\frac{x}{z},\\frac{y}{z}\\right)=0$ 确定 $z=z(x,y)$，求 $x\\frac{\\partial z}{\\partial x}+y\\frac{\\partial z}{\\partial y}$。（2024 期中 17 / 22-23 期中 11）",
    answer:
      "$$x\\frac{\\partial z}{\\partial x}+y\\frac{\\partial z}{\\partial y}=z.$$\n令 $F=G\\left(\\frac{x}{z},\\frac{y}{z}\\right)$，则\n$$F_x=\\frac1zG_1,\\quad F_y=\\frac1zG_2,\\quad F_z=-\\frac{xG_1+yG_2}{z^2}.$$\n于是\n$$z_x=-\\frac{F_x}{F_z}=\\frac{zG_1}{xG_1+yG_2},\\quad z_y=\\frac{zG_2}{xG_1+yG_2},$$\n故 $xz_x+yz_y=z$。",
    explanation:
      "这是齐次结构的经典结论 $xz_x+yz_y=z$，用隐函数偏导公式代入化简即可。",
    keywords: ["隐函数", "F_z=-(xG₁+yG₂)/z²", "z_x=zG₁/(xG₁+yG₂)", "结果=z", "齐次"],
  },
  {
    id: "q4_07",
    source: "material",
    question:
      "求曲面 $z=x+2y+\\ln(1+x^2+y^2)$ 在点 $(0,0,0)$ 处的切平面。（22-23 期中 2）",
    answer:
      "$$x+2y-z=0.$$\n令 $F=x+2y+\\ln(1+x^2+y^2)-z$，则\n$$\\nabla F=\\left(1+\\frac{2x}{1+x^2+y^2},\\;2+\\frac{2y}{1+x^2+y^2},\\;-1\\right).$$\n在原点 $\\nabla F=(1,2,-1)$，切平面为 $1\\cdot x+2\\cdot y-1\\cdot z=0$。",
    explanation: "曲面 $F=0$ 的切平面法向量 $=\\nabla F(P_0)$。",
    keywords: ["切平面法向=∇F", "∇F(0,0,0)=(1,2,-1)", "x+2y-z=0"],
  },
  {
    id: "q4_08",
    source: "material",
    question:
      "求 $f=x^2+2y^2$ 在点 $(0,1)$ 处的最大方向导数 = ____。（22-23 期中 3）",
    answer: "$4$。",
    explanation:
      "最大方向导数等于梯度的模：$\\nabla f=(2x,4y)\\big|_{(0,1)}=(0,4)$，$|\\nabla f|=4$。",
    keywords: ["最大方向导数=|∇f|", "∇f=(2x,4y)", "在(0,1)为(0,4)", "模=4"],
  },
  {
    id: "q4_09",
    source: "material",
    question:
      "求 $f(x,y)=2x^3-9x^2-6y^4+12x+24y$ 的极值。（2024 期中 12）",
    answer:
      "驻点：$f_x=6x^2-18x+12=0\\Rightarrow x=1,2$；$f_y=-24y^3+24=0\\Rightarrow y=1$，得 $(1,1),(2,1)$。\n\n判别式 $D=f_{xx}f_{yy}-f_{xy}^2$，其中 $f_{xx}=12x-18$，$f_{yy}=-72y^2$，$f_{xy}=0$。\n\n- 在 $(1,1)$：$f_{xx}=-6<0$，$D=(-6)(-72)=432>0$ $\\Rightarrow$ 极大值 $f(1,1)=23$。\n- 在 $(2,1)$：$f_{xx}=6$，$D=(6)(-72)<0$ $\\Rightarrow$ 鞍点，无极值。",
    explanation:
      "二阶判别：$D>0$ 且 $f_{xx}<0$ 为极大；$D<0$ 为鞍点（非极值）。",
    keywords: ["驻点(1,1)(2,1)", "D=f_xx f_yy - f_xy²", "(1,1)极大 f=23", "(2,1)鞍点"],
  },
  {
    id: "q4_10",
    source: "material",
    question:
      "求 $u=x-2y+2z$ 在约束 $x^2+y^2+z^2=1$ 上的最大最小值。（2024 期中 14 / 22-23 期中 6）",
    answer:
      "$$\\max=3,\\quad \\min=-3.$$\n拉格朗日 $L=x-2y+2z+\\lambda(x^2+y^2+z^2-1)$，解得\\ $(x,y,z)=\\pm\\frac{(1,-2,2)}{3}$；代入 $u=\\pm3$（也即 $u$ 的极值 $=\\pm|(1,-2,2)|=\\pm3$）。",
    explanation:
      "线性目标在单位球上的极值等于系数向量的模 $\\pm|(1,-2,2)|=\\pm3$。",
    keywords: ["拉格朗日乘数法", "临界点 ±(1,-2,2)/3", "max=3", "min=-3"],
  },
  {
    id: "q4_11",
    source: "material",
    question:
      "求 $f=-x+2y+2z$ 在椭圆 $\\begin{cases}x^2+y^2=2,\\ y+2z=1\\end{cases}$ 上的最大最小值。（22-23 期末 A 卷 2(4)）",
    answer:
      "$$\\max=3\\;(\\text{在 }(-1,1,0)),\\quad \\min=-1\\;(\\text{在 }(1,-1,1)).$$\n拉格朗日\\ $$L=-x+2y+2z+\\lambda_1(x^2+y^2-2)+\\lambda_2(y+2z-1).$$\n由 $\\frac{\\partial L}{\\partial z}=2+2\\lambda_2=0$ 及约束求得两临界点，代入比较。",
    explanation:
      "两个约束需两个乘子 $\\lambda_1,\\lambda_2$；解出候选点后代回目标函数比较大小。",
    keywords: ["双约束拉格朗日", "两个λ", "临界点(-1,1,0)(1,-1,1)", "max=3", "min=-1"],
  },
];

export default function Chapter4() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-blue-600">Chapter 4</p>
        <h1 className="text-3xl font-bold text-slate-900">多元函数微分学</h1>
        <p className="text-slate-600">
          期中/期末的「主力得分区」：极限不存在证明、可微性证明、链式法则、隐函数求导、方向导数/梯度、极值与拉格朗日乘数法。
        </p>
      </header>

      <SectionCard title="🧠 大白话隐喻" variant="highlight">
        <Markdown>
          {`把**多元函数**想成一座山坡：你站在某一点，朝 $x$ 方向走是小径的坡度（$f_x$），朝 $y$ 方向走是另一条小径的坡度（$f_y$）。**可微**就是山坡在该点“光滑没有棱角”——无论从哪个方向走近，高度变化都能用线性部分近似。**梯度**则像指南针，指向这座山坡在该点“最陡的上坡方向”，而梯度的长度就是最大的坡度值。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="📌 多元极限不存在证明">
        <Markdown>
          {`思路：**找两条路径，极限值不同 $\\Rightarrow$ 不存在。**

- 常用路径：沿坐标轴（如 $x=0,\\,y=0,\\,z=t$）、沿直线 $y=kx$、沿 $x=y=z=t$ 等。
- 例（22-23 期末）：$\\lim\\frac{xyz}{x^3+y^3+z^3}$ 沿 $x=y=z=t$ 得 $\\frac13$，沿 $x=y=0,\\,z=t$ 得 $0$ $\\Rightarrow$ 不存在。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="📐 偏导数、可微、连续关系">
        <Markdown>
          {`- **偏导存在** $\\nRightarrow$ **可微**；**可微** $\\Rightarrow$ 偏导存在且函数连续。
- **可微定义**：
  $$\\Delta z - \\bigl[f_x\\Delta x + f_y\\Delta y\\bigr] = o(\\rho),\\quad \\rho=\\sqrt{\\Delta x^2+\\Delta y^2}.$$
- **证不可微套路**（真题原题 $f=\\frac{xy}{x^2+y^2}$，$(0,0)$ 处补 $0$）：
  1. 用定义算 $f_x(0,0)$、$f_y(0,0)$（多为 $0$）；
  2. 考察极限 $\\dfrac{\\Delta z - f_x\\Delta x - f_y\\Delta y}{\\rho}$ 沿 $\\Delta y=k\\Delta x$。若结果**依赖 $k$**（$\\neq0$）$\\Rightarrow$ 极限不存在 $\\Rightarrow$ 不可微。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="⛓️ 链式法则">
        <Markdown>
          {`- 记号：$f_1=\\frac{\\partial f}{\\partial u}$（第 1 个中间变量），$f_{11}$、$f_{12}$ 为二阶偏导。
- **标准步骤**：
  1. 写清中间变量 $u,v$ 对 $x,y$ 的偏导；
  2. 一阶：$z_x = f_1u_x + f_2v_x$；
  3. 求二阶时，**$f_1$、$f_2$ 本身仍是 $(u,v)$ 的函数**，要再套一次链式法则；
  4. 用 $f_{12}=f_{21}$（二阶连续）合并。
- 例（真题）：$z=f(u,x,y),\\ u=xe^y$，则 $z_x=e^yf_1+f_2$，于是
  $$\\frac{\\partial^2 z}{\\partial x\\partial y}=e^yf_1+xe^{2y}f_{11}+e^yf_{13}+xe^yf_{21}+f_{23}.$$`}
        </Markdown>
      </SectionCard>

      <SectionCard title="🔒 隐函数求导">
        <Markdown>
          {`- 单方程 $F(x,y,z)=0$ 定 $z=f(x,y)$：
  $$z_x=-\\frac{F_x}{F_z},\\quad z_y=-\\frac{F_y}{F_z}.$$
- 也可**两边同时对 $x$ 求偏导**（把 $z$ 看成 $x,y$ 的函数）再解出 $z_x$（考场更直观）。
- 抽象方程 $G\\left(\\frac{x}{z},\\frac{y}{z}\\right)=0$：链式 + 隐函数，常出「求 $xz_x+yz_y$」的对称结论（真题答案 $=z$）。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="🧭 方向导数与梯度">
        <Markdown>
          {`- 梯度：$\\nabla f=(f_x,\\,f_y,\\,f_z)$。
- 方向导数：$D_{\\mathbf u}f = \\nabla f\\cdot \\mathbf u$（$\\mathbf u$ 为**单位**方向向量）。
- **最大方向导数 $=|\\nabla f|$**，方向沿 $\\nabla f$；最小 $=-|\\nabla f|$。\n  例：$f=x^2+2y^2$ 在 $(0,1)$ 处 $\\nabla f=(0,4)$，最大方向导数 $=4$。
- 切平面：曲面 $F(x,y,z)=0$ 在 $P_0$ 的切平面法向量 $=\\nabla F(P_0)$。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="📊 极值与最值">
        <Markdown>
          {`**无约束极值（二阶判别）**：解 $f_x=f_y=0$ 得驻点；令 $A=f_{xx},\\ B=f_{xy},\\ C=f_{yy}$，$D=AC-B^2$。

| 条件 | 结论 |
|------|------|
| $D>0$ 且 $A>0$ | 极小值 |
| $D>0$ 且 $A<0$ | 极大值 |
| $D<0$ | 非极值（鞍点） |
| $D=0$ | 失效，需另寻方法 |

**条件极值（拉格朗日乘数法）**：
$$L = f + \\lambda_1 g_1 + \\lambda_2 g_2$$
每个约束一个 $\\lambda$；令所有偏导 $=0$ 加上约束方程，解出候选点，代回 $f$ 比大小。

- 例（真题）：$u=x-2y+2z$ 在球 $x^2+y^2+z^2=1$ 上：$\\max=3,\\ \\min=-3$（$=\\pm|(1,-2,2)|$）。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="⚠️ 易错点" variant="warning">
        <Markdown>
          {`- 证极限不存在只需**两条路径不同**；但要证「存在 $=L$」需夹逼/极坐标，别混。
- 求二阶偏导时，$f_1$ 还是复合函数，**别忘了继续对它链式求导**。
- 方向导数的 $\\mathbf u$ 必须**单位化**。
- 拉格朗日别漏「约束方程本身」；最后要**代回目标函数比较**才知谁是 $\\max/\\min$。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="⏱️ 3 分钟速记" variant="success">
        <p className="text-lg font-medium text-slate-800">
          「两路不同证不存在；链式记 $f_1$ 仍是函数；隐函数 $-F_x/F_z$；梯度模是最大方向导；$D=AC-B^2$ 判极值，有约束就上拉格朗日。」
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
