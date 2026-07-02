// Source note: 🟢 from past exam papers; 🟡 AI-supplied standard knowledge

import { Markdown } from "../components/Markdown";
import { SectionCard } from "../components/SectionCard";
import { ExampleCard, type Example } from "../components/ExampleCard";

const examples: Example[] = [
  {
    id: "q3_01",
    source: "material",
    question:
      "求两平行平面 $2x-3y+3z=4$ 与 $2x-3y+3z=9$ 之间的距离。（22-23 期末 A 卷 1(2)）",
    answer:
      "$d = \\frac{|4-9|}{\\sqrt{2^2+(-3)^2+3^2}} = \\frac{5}{\\sqrt{22}} = \\frac{5\\sqrt{22}}{22}$。",
    explanation:
      "平行平面 $Ax+By+Cz=d_1$ 与 $Ax+By+Cz=d_2$ 的距离 $d = \\frac{|d_1-d_2|}{\\sqrt{A^2+B^2+C^2}}$。",
    keywords: ["平行平面距离", "|d₁-d₂|/|n|", "√22", "5/√22"],
  },
  {
    id: "q3_02",
    source: "material",
    question:
      "已知 $\mathbf{a}=\\{-1,2,2\\}, \\mathbf{b}=\\{2,-1,2\\}$，求 $(\\mathbf{a}-\\mathbf{b})\\times(\\mathbf{a}+\\mathbf{b})$。（2020-21 期末 A 卷 4）",
    answer:
      "$\\{12,12,-6\\}$。因 $(\\mathbf{a}-\\mathbf{b})\\times(\\mathbf{a}+\\mathbf{b})=2(\\mathbf{a}\\times\\mathbf{b})$，而 $\\mathbf{a}\\times\\mathbf{b}=\\begin{vmatrix}\\mathbf{i}&\\mathbf{j}&\\mathbf{k}\\ -1&2&2\\ 2&-1&2\\end{vmatrix}=(6,6,-3)$，乘 $2$ 得 $(12,12,-6)$。",
    explanation:
      "先化简 $(\\mathbf{a}-\\mathbf{b})\\times(\\mathbf{a}+\\mathbf{b})=2(\\mathbf{a}\\times\\mathbf{b})$，再算一次叉积，省去展开。",
    keywords: ["(a-b)×(a+b)=2(a×b)", "叉积行列式", "a×b=(6,6,-3)", "(12,12,-6)"],
  },
  {
    id: "q3_03",
    source: "material",
    question:
      "求过三点 $P_1(1,-2,3), P_2(4,1,-2), P_3(-2,-3,0)$ 的平面方程。（2020-21 期末 A 卷 5）",
    answer:
      "$7x-12y-3z=22$。法向量 $\mathbf{n}=(P_2-P_1)\\times(P_3-P_1)=(3,3,-5)\\times(-3,-1,-3)=(-14,24,6) \\parallel (7,-12,-3)$。点法式过 $P_1$：$7(x-1)-12(y+2)-3(z-3)=0 \\Rightarrow 7x-12y-3z=22$。",
    explanation:
      "两个方向向量叉积得法向量，再用任一点写点法式。",
    keywords: ["过三点平面", "n=(P₂-P₁)×(P₃-P₁)", "点法式", "7x-12y-3z=22"],
  },
  {
    id: "q3_04",
    source: "material",
    question:
      "平面 $M$ 过原点及 $(1,-3,2)$，且垂直于平面 $2x-4y+z=7$，求 $M$ 的方程。（2024 期中 1）",
    answer:
      "$5x+3y+2z=0$。$M$ 的法向量 $=(1,-3,2)\\times(2,-4,1)=(5,3,2)$，过原点故 $5x+3y+2z=0$。",
    explanation:
      "$M$ 既含方向 $(1,-3,2)$ 又垂直于给定平面（法向 $(2,-4,1)$）$\\Rightarrow M$ 的法向量与这两者都垂直 = 二者叉积。",
    keywords: ["法向量=方向×已知平面法向", "(1,-3,2)×(2,-4,1)=(5,3,2)", "过原点", "5x+3y+2z=0"],
  },
  {
    id: "q3_05",
    source: "material",
    question:
      "求直线 $l_1:\\frac{x-1}{1}=\\frac{y-5}{-2}=z+8$ 与 $l_2$（平面 $x-y=5$ 与 $2y+z=1$ 的交线）之间的锐角。（2024 期中 2）",
    answer:
      "$\\frac{\\pi}{3}$。$l_1$ 方向 $(1,-2,1)$；$l_2$ 方向 $=(1,-1,0)\\times(0,2,1)=(-1,-1,2)$。$\\cos\\theta=\\frac{|(-1)\\cdot1+(-1)\\cdot(-2)+2\\cdot1|}{\\sqrt{6}\\cdot\\sqrt{6}}=\\frac{3}{6}=\\frac{1}{2} \\Rightarrow \\theta=\\frac{\\pi}{3}$。",
    explanation:
      "交线方向由两平面法向量叉积得到；夹角公式取绝对值保证锐角。",
    keywords: ["两直线夹角", "l₂方向=n₁×n₂", "cosθ=|v₁·v₂|/(|v₁||v₂|)", "取绝对值", "π/3"],
  },
  {
    id: "q3_06",
    source: "material",
    question:
      "设 $l: z=ky$（$k>0$）是 $yz$ 平面上的直线，$S$ 为 $l$ 绕 $z$ 轴旋转所得曲面，求 $S$ 的方程。（2024 期中 3）",
    answer:
      "$z = \\pm k\\sqrt{x^2+y^2}$（$k>0$）。绕 $z$ 轴旋转时把 $y$ 用到 $z$ 轴的距离 $\\pm\\sqrt{x^2+y^2}$ 替换。",
    explanation:
      "绕某轴旋转，就把被旋转变量替换为「点到该轴的距离」。",
    keywords: ["旋转曲面", "绕z轴", "y→±√(x²+y²)", "z=±k√(x²+y²)"],
  },
  {
    id: "q3_07",
    source: "material",
    question:
      "求曲线 $\mathbf{r}=2\\cos t\\,\\mathbf{i}+6\\sin t\\,\\mathbf{j}+t\\,\\mathbf{k}$ 在 $t=\\frac{\\pi}{3}$ 处切线的对称式方程。（22-23 期末 A 卷 2(3)）",
    answer:
      "点 $\\mathbf{r}\\left(\\frac{\\pi}{3}\\right)=(1, 3\\sqrt{3}, \\frac{\\pi}{3})$；切向 $\\mathbf{r}'(t)=(-2\\sin t,6\\cos t,1)$，$\\mathbf{r}'\\left(\\frac{\\pi}{3}\\right)=(-\\sqrt{3},3,1)$。对称式：$\\frac{x-1}{-\\sqrt{3}}=\\frac{y-3\\sqrt{3}}{3}=\\frac{z-\\frac{\\pi}{3}}{1}$。",
    explanation:
      "空间曲线切线：方向取 $\mathbf{r}'(t_0)$，点取 $\mathbf{r}(t_0)$，写对称式。",
    keywords: ["切向量 r'(t₀)", "r'(π/3)=(-√3,3,1)", "点 (1,3√3,π/3)", "对称式方程"],
  },
];

export default function Chapter3() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-blue-600">Chapter 3</p>
        <h1 className="text-3xl font-bold text-slate-900">向量与空间解析几何</h1>
        <p className="text-slate-600">
          真题常以填空/小题出现——叉积、过三点/过点且垂直的平面方程、两直线夹角、旋转曲面、空间曲线的切线。
        </p>
      </header>

      <SectionCard title="🧠 大白话隐喻" variant="highlight">
        <Markdown>
          {`把**向量**想成「带方向的箭头」：点积回答「它们有多同向」；叉积回答「它们张成的平行四边形有多大、方向朝哪」。

把**平面**想成「一张无限大的纸」，法向量就是垂直戳穿这张纸的筷子；只要知道一根筷子和纸上一个点，就能唯一确定这张纸。

把**空间曲线**想成「飞行的轨迹」：切向量就是那一刻的速度方向；旋转曲面就是把一条线甩起来，形成一个喇叭或碗。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="📦 向量基本运算">
        <div className="space-y-4 text-slate-700">
          <Markdown>
            {`- **点积** $\mathbf{a}\\cdot\\mathbf{b}=|\\mathbf{a}||\\mathbf{b}|\\cos\\theta=a_1b_1+a_2b_2+a_3b_3$ → 求**夹角/投影/判垂直**（$\\mathbf{a}\\cdot\\mathbf{b}=0 \\iff$ 垂直）。
- **叉积** $\\mathbf{a}\\times\\mathbf{b}$：结果是**向量**，垂直于 $\\mathbf{a},\\mathbf{b}$；$|\\mathbf{a}\\times\\mathbf{b}|=|\\mathbf{a}||\\mathbf{b}|\\sin\\theta=$ 平行四边形面积。行列式记法：
$$\\mathbf{a}\\times\\mathbf{b}=\\begin{vmatrix}\\mathbf{i}&\\mathbf{j}&\\mathbf{k}\\\\ a_1&a_2&a_3\\\\ b_1&b_2&b_3\\end{vmatrix}$$
- 小技巧：$(\\mathbf{a}-\\mathbf{b})\\times(\\mathbf{a}+\\mathbf{b}) = \\mathbf{a}\\times\\mathbf{a} - \\mathbf{b}\\times\\mathbf{a} + \\mathbf{a}\\times\\mathbf{b} - \\mathbf{b}\\times\\mathbf{b} = 2(\\mathbf{a}\\times\\mathbf{b})$。`}
          </Markdown>
        </div>
      </SectionCard>

      <SectionCard title="📐 平面与直线">
        <Markdown>
          {`- **平面**：点 $P_0$ + 法向量 $\\mathbf{n}=(A,B,C)$ → $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$。
  - 过三点：$\\mathbf{n}=(P_2-P_1)\\times(P_3-P_1)$。
  - 过点且垂直于某平面/含某方向：$\\mathbf{n}$ 由「叉积」把已知的两个方向叉出来。
- **直线**：点 + 方向向量 $\\mathbf{v}$ → 对称式 $\\frac{x-x_0}{v_1}=\\frac{y-y_0}{v_2}=\\frac{z-z_0}{v_3}$。
  - 两平面交线的方向 $\\mathbf{v}=\\mathbf{n}_1\\times\\mathbf{n}_2$。
  - **两直线夹角**：$\\cos\\theta=\\frac{|\\mathbf{v}_1\\cdot\\mathbf{v}_2|}{|\\mathbf{v}_1||\\mathbf{v}_2|}$（取绝对值保证是锐角）。
- **平行平面间距离**：$Ax+By+Cz=d_1$ 与 $Ax+By+Cz=d_2$ → $d=\\frac{|d_1-d_2|}{\\sqrt{A^2+B^2+C^2}}$。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="🌐 空间曲线与曲面">
        <Markdown>
          {`- **空间曲线** $\\mathbf{r}(t)=x(t)\\,\\mathbf{i}+y(t)\\,\\mathbf{j}+z(t)\\,\\mathbf{k}$：
  - 切向量 $=\\mathbf{r}'(t)$；某点切线对称式用 $\\mathbf{r}(t_0)$ 作点、$\\mathbf{r}'(t_0)$ 作方向。
- **旋转曲面**：$yz$ 平面曲线 $z=ky$ 绕 $z$ 轴旋转 → 把 $y$ 换成 $\\pm\\sqrt{x^2+y^2}$：$z=\\pm k\\sqrt{x^2+y^2}$。（绕哪个轴，就把「另外两个变量」用到该轴的距离替换）
- 常见二次曲面：椭球、椭圆抛物面、双曲面、锥面（了解形状即可）。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="📝 标准答题模板">
        <Markdown>
          {`- **平面方程**：定 $\\mathbf{n}$（叉积或垂直条件）→ 点法式 → 化一般式。
- **切线对称式**：算 $\\mathbf{r}'(t_0)$（方向）→ 算 $\\mathbf{r}(t_0)$（点）→ 写 $\\frac{x-x_0}{\\cdots}=\\frac{y-y_0}{\\cdots}=\\frac{z-z_0}{\\cdots}$。
- **夹角**：取方向向量点积 / 模长积，**加绝对值**。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="⚠️ 易错点" variant="warning">
        <Markdown>
          {`- 叉积**不可交换**：$\\mathbf{a}\\times\\mathbf{b}=-(\\mathbf{b}\\times\\mathbf{a})$；分量行列式别抄错顺序。
- 夹角忘了取绝对值 → 可能算出钝角。
- 旋转曲面替换时分清绕哪个轴、保留哪个变量。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="⏱️ 3 分钟速记" variant="success">
        <p className="text-lg font-medium text-slate-800">
          「点积求角、叉积求法向；平面点法式、直线点向式；旋转换根号、夹角带绝对。」
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
