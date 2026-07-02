// Source note: 🟢 from past exam papers; 🟡 AI-supplied standard knowledge

import { Markdown } from "../components/Markdown";
import { SectionCard } from "../components/SectionCard";
import { ExampleCard } from "../components/ExampleCard";

const examples = [
  {
    id: "q2_01",
    source: "material" as const,
    question:
      "求幂级数 $\\sum_{n=1}^{\\infty} \\frac{(3x-1)^n}{n \\cdot 2^n}$ 的收敛域（收敛集）。（22-23 期末 A 卷 2(2)）",
    answer:
      "$\\left[-\\frac{1}{3}, 1\\right)$。比值法 $\\lim\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{|3x-1|}{2} < 1 \\iff |3x-1|<2 \\iff -\\frac{1}{3}<x<1$。端点：$x=-\\frac{1}{3}$ 时得 $\\sum\\frac{(-1)^n}{n}$ 收敛（条件）；$x=1$ 时得 $\\sum\\frac{1}{n}$ 发散。故收敛集为 $\\left[-\\frac{1}{3}, 1\\right)$。",
    explanation:
      "求出开区间后必须逐个测两端点：一个化为交错调和（收敛）、一个化为调和（发散）。",
    keywords: ["比值法", "|3x-1|<2", "端点单独判", "x=-1/3 收敛", "x=1 发散", "[-1/3,1)"],
  },
  {
    id: "q2_02",
    source: "material" as const,
    question:
      "求幂级数 $\\sum_{n=0}^{\\infty} \\frac{x^{2n+2}}{(n+1)(2n+1)}$ 的收敛域与和函数。（2020-21 期末 A 卷 18）",
    answer:
      "收敛域 $[-1,1]$。设 $f(x)=\\sum_{n=0}^{\\infty} \\frac{x^{2n+2}}{(n+1)(2n+1)}$，逐项求导：$f'(x)=\\sum_{n=0}^{\\infty} \\frac{2x^{2n+1}}{2n+1}$，$f''(x)=\\sum_{n=0}^{\\infty} 2x^{2n}=\\frac{2}{1-x^2}$。由 $f(0)=f'(0)=0$：$f'(x)=\\ln(1+x)-\\ln(1-x)$，$f(x)=(1+x)\\ln(1+x)+(1-x)\\ln(1-x)$（$-1<x<1$）；端点 $x=\\pm 1$ 时和为 $2\\ln 2$。",
    explanation:
      "两次求导把 $(n+1)(2n+1)$ 消成几何级数，再两次积分并用初值定常数。",
    keywords: ["逐项求导两次", "f''=2/(1-x²)", "定初值 f(0)=f'(0)=0", "(1+x)ln(1+x)+(1-x)ln(1-x)", "端点 2ln2"],
  },
  {
    id: "q2_03",
    source: "material" as const,
    question:
      "求幂级数 $\\sum_{n=1}^{\\infty} \\frac{(2n-1)x^{2n-2}}{2^n}$ 的收敛集与和函数。（2024 期中 6）",
    answer:
      "收敛集 $(-\\sqrt{2}, \\sqrt{2})$。令 $t=x^2$：由 $\\lim\\frac{(2n-1)/2^n}{(2n+1)/2^{n+1}} = 2$ 得 $|x^2|<2$ 即 $|x|<\\sqrt{2}$；端点 $x=\\pm\\sqrt{2}$ 均发散。和函数 $S(x) = \\frac{2+x^2}{(2-x^2)^2}$（$|x|<\\sqrt{2}$；$x=0$ 时为 $\\frac{1}{2}$，一致）。",
    explanation:
      "缺项（只含偶次）级数用比值法直接对整项；求和用几何级数求导技巧。",
    keywords: ["缺项级数令 t=x²", "R=2 → |x|<√2", "端点发散", "S(x)=(2+x²)/(2-x²)²"],
  },
  {
    id: "q2_04",
    source: "material" as const,
    question:
      "将 $f(x)=\\ln\\frac{1+x}{1-x}$ 展开成 $x$ 的幂级数并给出收敛域。（22-23 期中 5 / 2020-21 期末思路）",
    answer:
      "$f(x)=\\ln(1+x)-\\ln(1-x)$，$f'(x)=\\frac{1}{1+x}+\\frac{1}{1-x}=\\frac{2}{1-x^2}=2\\sum_{n=0}^{\\infty} x^{2n}$。逐项积分并用 $f(0)=0$：$f(x)=2 \\sum_{n=0}^{\\infty} \\frac{x^{2n+1}}{2n+1}$，收敛域 $-1<x<1$。",
    explanation:
      "先求导得到 $\\frac{1}{1-x^2}$ 型，展成几何级数后逐项积分。",
    keywords: ["f'=2/(1-x²)", "几何级数展开", "逐项积分", "2Σ x^{2n+1}/(2n+1)", "(-1,1)"],
  },
  {
    id: "q2_05",
    source: "material" as const,
    question:
      "将 $f(x)=\\arctan\\frac{1+x}{1-x}$ 展开成 $x$ 的幂级数。（2020-21 期末 A 卷 8）",
    answer:
      "$f(0)=\\arctan 1=\\frac{\\pi}{4}$；$f'(x)=\\frac{1}{1+x^2}=\\sum_{n=0}^{\\infty}(-1)^n x^{2n}$。逐项积分：$f(x)=\\frac{\\pi}{4} + \\sum_{n=0}^{\\infty}(-1)^n \\frac{x^{2n+1}}{2n+1}$，$-1<x<1$。",
    explanation:
      "这类「反三角/对数」展开的套路：先求导得到有理式→几何级数→逐项积分→加上 $f(0)$ 常数。",
    keywords: ["f(0)=π/4", "f'=1/(1+x²)", "arctan 级数", "π/4 + Σ(-1)ⁿx^{2n+1}/(2n+1)"],
  },
  {
    id: "q2_06",
    source: "material" as const,
    question:
      "求常数项级数 $\\sum_{n=0}^{\\infty} \\frac{(n+1)^2}{n!}$ 的和。（22-23 期末 A 卷 6）",
    answer:
      "$5e$。展开 $(n+1)^2=n^2+2n+1$，利用 $\\sum\\frac{n^2}{n!} = 2e$、$\\sum\\frac{n}{n!} = e$、$\\sum\\frac{1}{n!} = e$，得 $2e+2e+e = 5e$。（也可由 $\\sum\\frac{(n+1)^2x^n}{n!}$ 在 $x=1$ 处求值）",
    explanation:
      "把系数拆成 $n!$、指数级数 $e$ 的组合是这类「凑 $e$」题的关键。",
    keywords: ["(n+1)²=n²+2n+1", "Σ1/n!=e", "Σn/n!=e", "Σn²/n!=2e", "结果 5e"],
  },
  {
    id: "q2_07",
    source: "material" as const,
    question:
      "设 $f(x)=\\frac{x}{1-x^2}$，求 $f^{(2024)}(0) =$ ____。（2024 期中 7）",
    answer: "$0$",
    explanation:
      "$\\frac{x}{1-x^2}=\\sum_{n=1}^{\\infty} x^{2n-1}$ 只含奇次幂，$2024$ 为偶数，对应系数为 $0$，故 $f^{(2024)}(0)=0$。",
    keywords: ["x/(1-x²)=Σx^{2n-1}", "只含奇次幂", "偶数阶导数为0", "f⁽ⁿ⁾(0)=n!·系数"],
  },
  {
    id: "q2_08",
    source: "material" as const,
    question:
      "求 $f(x)=\\frac{1}{x^2-x-6}$ 在 $x=4$ 处的泰勒级数及收敛区间。（2024 期中 8）",
    answer:
      "部分分式 $\\frac{1}{(x-3)(x+2)}=\\frac{1}{5}\\left(\\frac{1}{x-3}-\\frac{1}{x+2}\\right)$。在 $x=4$ 展开：$\\frac{1}{x-3}=\\sum_{n=0}^{\\infty}(-1)^n(x-4)^n$；$\\frac{1}{x+2}=\\sum_{n=0}^{\\infty}(-1)^n\\frac{(x-4)^n}{6^{n+1}}$。合并 $f(x)=\\frac{1}{5}\\sum_{n=0}^{\\infty}(-1)^n\\left(1-\\frac{1}{6^{n+1}}\\right)(x-4)^n$，收敛区间 $(3,5)$。",
    explanation:
      "非零点展开先做部分分式，每个 $\\frac{1}{x-a}$ 提出常数配成几何级数；收敛区间取各自的交集（受最近奇点 $x=3$ 限制）。",
    keywords: ["部分分式", "1/((x-3)(x+2))", "在 x=4 配几何级数", "收敛区间 (3,5)", "取交集"],
  },
];

export default function Chapter2() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-blue-600">Chapter 2</p>
        <h1 className="text-3xl font-bold text-slate-900">幂级数与泰勒级数</h1>
        <p className="text-slate-600">
          真题极高频考点——「求收敛域 + 和函数」几乎每套卷必有；「把函数展成幂级数」与「高阶导数」也是常考套路。
        </p>
      </header>

      <SectionCard title="🧠 大白话隐喻" variant="highlight">
        <Markdown>
          {`幂级数就是**「无穷次多项式」**：$c_0+c_1x+c_2x^2+\\cdots$。它只在某段 $x$ 上「说得通」（收敛），这段区间就是**收敛域**；在收敛域内它等于某个熟悉的函数，那个函数就是**和函数**。

一句话：幂级数是「无限多项式」，收敛域是它的「定义域」，和函数是它的「简化身份」。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="📦 收敛半径与收敛域">
        <Markdown>
          {`对 $\\sum_{n=0}^{\\infty} a_n(x-x_0)^n$：

1. **求半径 $R$**：计算
   $$\\rho = \\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right| \\quad \\text{或} \\quad \\rho = \\lim_{n\\to\\infty}\\sqrt[n]{|a_n|}$$
   则 $R = \\frac{1}{\\rho}$。得开区间 $|x-x_0|<R$，**内部绝对收敛**。

2. **单独测两端点** $x=x_0\\pm R$：代入得数项级数，用第一章判别法逐个判（这是最容易丢分的一步）。

3. 合并写出收敛域（可能是 $(a,b)$、$[a,b)$、$(a,b]$、$[a,b]$）。

- 对**缺项**级数（如只有 $x^{2n}$ 项），用 **比值法直接对整项**
  $$\\lim_{n\\to\\infty}\\left|\\frac{u_{n+1}}{u_n}\\right|<1$$
  解出 $x$ 更稳。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="🔧 求和函数四板斧">
        <Markdown>
          {`在收敛域内，幂级数可**逐项求导 / 逐项积分**。

1. **逐项求导 / 逐项积分**，把系数里的 $(n+1)$、$\\frac{1}{2n+1}$ 等「消化」成已知几何级数。

2. **已知基石**：
   $$\\frac{1}{1-x}=\\sum_{n=0}^{\\infty}x^n,\\quad |x|<1$$

3. **由导数 / 积分回推**：求导后凑成 $\\frac{1}{1-x}$ 型，求出 $S'(x)$，再积分，用已知点 $S(x_0)$ 定常数。

4. **常见结果**（务必熟记）：
   - $\\displaystyle \\sum_{n=1}^{\\infty}\\frac{x^n}{n}=-\\ln(1-x)$
   - $\\displaystyle \\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n+1}}{2n+1}=\\arctan x$
   - $\\displaystyle \\sum_{n=0}^{\\infty}\\frac{x^{2n+1}}{2n+1}=\\frac{1}{2}\\ln\\frac{1+x}{1-x}$`}
        </Markdown>
      </SectionCard>

      <SectionCard title="📖 泰勒 / 麦克劳林级数">
        <Markdown>
          {`**定义**：
$$f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$$
麦克劳林级数即 $x_0=0$ 的情形。

**五个必背展开**：

- $e^x = \\displaystyle \\sum_{n=0}^{\\infty}\\frac{x^n}{n!}$，收敛域 $\\mathbb{R}$
- $\\sin x = \\displaystyle \\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n+1}}{(2n+1)!}$，收敛域 $\\mathbb{R}$
- $\\cos x = \\displaystyle \\sum_{n=0}^{\\infty}\\frac{(-1)^n x^{2n}}{(2n)!}$，收敛域 $\\mathbb{R}$
- $\\displaystyle \\frac{1}{1-x}=\\sum_{n=0}^{\\infty}x^n$，$|x|<1$
- $\\ln(1+x) = \\displaystyle \\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}x^n}{n}$，$-1<x\\leq 1$

（还有 $(1+x)^\\alpha$ 的二项级数。）

**套路展开**：把目标函数先求导得到「已知展开」的形式，展开后**再逐项积分**回去（$\\arctan$、$\\ln$ 类专用）。

**求高阶导数 $f^{(n)}(0)$**：先展成幂级数，则
$$f^{(n)}(0)=n!\\cdot (x^n\\text{ 的系数})$$
奇偶性缺项时对应导数为 $0$（如 $\\frac{x}{1-x^2}$ 只含奇次幂，故 $f^{(2024)}(0)=0$）。

**在 $x_0\\neq 0$ 处展开**（如 $\\frac{1}{x^2-x-6}$ 在 $x=4$）：先**部分分式**，再把每个 $\\frac{1}{x-a}$ 写成 $\\frac{1}{(x_0-a)+(x-x_0)}$，提出常数配成几何级数。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="⚠️ 易错点" variant="warning">
        <Markdown>
          {`- 求出 $R$ 后**必须**单独判两端点，别直接写开区间。
- 逐项微/积只在**开区间内**成立；端点的和另需取极限（如 $x\\to 1^-$）验证。
- 求和后要**回代 $x=0$ 或已知点**核对常数项，避免积分常数错误。
- 部分分式后，几何级数各自的收敛范围不同，最终收敛域取**交集**。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="⏱️ 3 分钟速记" variant="success">
        <p className="text-lg font-medium text-slate-800">
          「比值求 R，端点单独判；求和先微积、凑 1/(1−x)，积回定常数；泰勒背五式、缺项导数零。」
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
