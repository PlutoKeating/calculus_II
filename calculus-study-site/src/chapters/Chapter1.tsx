// Source note: 🟢 from past exam papers; 🟡 AI-supplied standard knowledge

import { Markdown } from "../components/Markdown";
import { SectionCard } from "../components/SectionCard";
import { ExampleCard } from "../components/ExampleCard";
import type { Example } from "../components/ExampleCard";

const examples: Example[] = [
  {
    id: "q1_01",
    source: "material",
    question:
      "判断级数 $\\sum_{n=1}^{\\infty} (-1)^n \\cdot \\frac{\\sin n}{n\\sqrt{n}}$ 是绝对收敛、条件收敛还是发散。（22-23 期末 A 卷 1(1)）",
    answer:
      "绝对收敛。因为 $\\left|(-1)^n \\frac{\\sin n}{n\\sqrt{n}}\\right| = \\frac{|\\sin n|}{n^{3/2}} \\leq \\frac{1}{n^{3/2}}$，而 $\\sum \\frac{1}{n^{3/2}}$ 是 $p=\\frac{3}{2}>1$ 的 $p$-级数收敛，由比较判别法 $\\sum|a_n|$ 收敛，故原级数绝对收敛。",
    explanation:
      "关键是放缩 $|\\sin n| \\leq 1$，把项压到 $\\frac{1}{n^{3/2}}$ 这个收敛的 $p$-级数上；绝对收敛无需再讨论交错性。",
    keywords: ["绝对收敛", "比较判别法", "p-级数", "p=3/2>1", "|sin n|≤1"],
  },
  {
    id: "q1_02",
    source: "material",
    question:
      "证明 $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{\\sqrt{n}}$ 是条件收敛的。（2020-21 期末 A 卷 7）",
    answer:
      "① 用交错级数（莱布尼茨）判别法：$b_n = \\frac{1}{\\sqrt{n}}$ 单调递减且 $\\to 0$，故原级数收敛。② 取绝对值 $\\sum \\frac{1}{\\sqrt{n}}$ 是 $p=\\frac{1}{2} \\leq 1$ 的 $p$-级数，发散。既收敛又非绝对收敛 $\\Rightarrow$ 条件收敛。",
    explanation:
      "条件收敛 = 原级数收敛但绝对值级数发散；答题必须两段都写全。",
    keywords: ["交错级数", "莱布尼茨", "1/√n 递减趋0", "Σ1/√n 发散", "p=1/2", "条件收敛"],
  },
  {
    id: "q1_03",
    source: "ai_generated",
    question:
      "判断 $\\sum_{n=1}^{\\infty} \\left(1 - \\cos\\frac{1}{n}\\right)$ 的敛散性。（练习题）",
    answer:
      "收敛。用等价无穷小：$1 - \\cos\\frac{1}{n} \\sim \\frac{1}{2}\\left(\\frac{1}{n}\\right)^2 = \\frac{1}{2n^2}$。故 $\\lim\\limits_{n \\to \\infty} \\frac{1 - \\cos\\frac{1}{n}}{\\frac{1}{n^2}} = \\frac{1}{2}$（有限非零），与 $\\sum \\frac{1}{n^2}$（$p=2>1$）同敛散 $\\Rightarrow$ 收敛。",
    explanation:
      "⚠️ AI生成练习题（非老师/教材原题），用于熟练「等价无穷小 + 极限比较法」；结论可自行核对。",
    keywords: ["等价无穷小", "1-cos x ~ x²/2", "极限比较法", "Σ1/n² 收敛", "p=2"],
  },
];

export default function Chapter1() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-blue-600">Chapter 1</p>
        <h1 className="text-3xl font-bold text-slate-900">数列与常数项级数（收敛判别）</h1>
        <p className="text-slate-600">
          历年真题中必考 1~2 道「判别敛散 / 绝对·条件收敛」题型，掌握工具箱与标准模板即可稳拿分。
        </p>
      </header>

      <SectionCard title="🧠 大白话隐喻" variant="highlight">
        <Markdown>
          {`把「级数收敛」想成**往一个杯子里一次次倒水**：每次倒的量是 $a_n$。如果倒到最后水位稳定在某个高度 $\Rightarrow$ **收敛**；如果水一直往上涨、溢出 $\Rightarrow$ **发散**。判别法就是「不用真的倒完，就预测水位会不会稳住」的各种快捷判断。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="📦 判敛工具箱">
        <div className="space-y-4 text-slate-700">
          <Markdown>
            {`**第 0 步（必做）项趋于 0 检验**
- 若 $\\lim\\limits_{n \\to \\infty} a_n \\neq 0$（或不存在）$\\Rightarrow$ **级数发散**（一票否决）。
- 注意：$a_n \\to 0$ **不能**推出收敛（如调和级数 $\\sum\\frac{1}{n}$，项趋 0 却发散）。

**① p-级数（记忆基准）**：$\\sum\\frac{1}{n^p} \\iff p>1$ 收敛，$p\\leq 1$ 发散。（$p=1$ 即调和级数，发散）

**② 几何级数**：$\\sum ar^n \\iff |r|<1$ 收敛，和 $=\\frac{\\text{首项}}{1-r}$。

**③ 积分判别法**：$a_n = f(n)$，$f$ 连续、正、递减 $\\Rightarrow$ $\\sum a_n$ 与 $\\int_1^\\infty f(x)\\,dx$ 同敛散。

**④ 比较判别法**：$0 \\leq a_n \\leq b_n$，则 $\\sum b_n$ 收敛 $\\Rightarrow$ $\\sum a_n$ 收敛；$\\sum a_n$ 发散 $\\Rightarrow$ $\\sum b_n$ 发散。

**⑤ 极限比较法**（最常用）：$a_n, b_n > 0$，$\\lim\\limits_{n \\to \\infty} \\frac{a_n}{b_n} = L$。
- $0 < L < \\infty$ $\\Rightarrow$ 同敛散（挑一个已知的 $b_n$ 做「标尺」，通常用 p-级数）。
- 典型：用等价无穷小把复杂项换成 $\\frac{1}{n^p}$，如 $1 - \\cos\\frac{1}{n^k} \\sim \\frac{1}{2}\\left(\\frac{1}{n^k}\\right)^2 = \\frac{1}{2n^{2k}}$。

**⑥ 比值法（ratio）**：$\\lim\\limits_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\rho$。$\\rho < 1$ 收敛，$\\rho > 1$ 发散，$\\rho = 1$ 失效。（含 $n! / r^n$ 时首选）

**⑦ 根值法（root）**：$\\lim\\limits_{n \\to \\infty} \\sqrt[n]{|a_n|} = \\rho$。判据同比值法。（含 $(\\cdots)^n$ 时首选）`}
          </Markdown>
        </div>
      </SectionCard>

      <SectionCard title="🔄 交错级数与绝对/条件收敛">
        <Markdown>
          {`**莱布尼茨（交错级数）判别法**：$\\sum (-1)^n b_n$，若 $b_n > 0$ 且 **单调递减** 且 $b_n \\to 0$ $\\Rightarrow$ 收敛。

**绝对收敛 vs 条件收敛（答题三段式）**：
1. 先看 $\\sum |a_n|$：收敛 $\\Rightarrow$ 原级数 **绝对收敛**（结束）。
2. 若 $\\sum |a_n|$ 发散，再看原级数（用交错级数判别法）：收敛 $\\Rightarrow$ **条件收敛**；发散 $\\Rightarrow$ **发散**。**`}
        </Markdown>
      </SectionCard>

      <SectionCard title="📝 标准答题模板">
        <Markdown>
          {`- **判绝对/条件**：① 写出 $\\sum |a_n|$；② 对 $|a_n|$ 放缩或比较（常配 p-级数）$\\Rightarrow$ 判 $\\sum |a_n|$ 敛散；③ 若绝对收敛写结论；若不绝对收敛，再用莱布尼茨判原级数 $\\Rightarrow$ 写「条件收敛」。
- **一般判敛**：先查 $a_n \\to 0$；再挑工具（含 $n!/r^n$ $\\to$ 比值；含 $(\\cdot)^n$ $\\to$ 根值；有理式/等价无穷小 $\\to$ 极限比较）。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="⚠️ 易错点" variant="warning">
        <Markdown>
          {`- $a_n \\to 0$ 只是**必要**条件，绝不能当收敛的证据。
- 莱布尼茨要**同时**满足「递减 + 趋 0」；只说趋 0 不够。
- 比较法要求**正项**；交错/变号级数先取绝对值再比较。
- 极限比较选标尺时，先用等价无穷小估计 $a_n$ 的「阶」（约等于 $\\frac{1}{n}$ 的几次方）。`}
        </Markdown>
      </SectionCard>

      <SectionCard title="⏱️ 3 分钟速记" variant="success">
        <p className="text-lg font-medium text-slate-800">
          「先验零、再挑法；p 记 1、比几何；n! 用比值，幂次用根值；变号先绝对，绝对不成看交错。」
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
