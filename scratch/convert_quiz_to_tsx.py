#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Convert references/quiz_bank.json into src/data/quizExamples.ts
with Markdown+KaTeX math delimiters."""
import json
import re

with open("/home/pluto/2026finalExam/calculus/references/quiz_bank.json", "r", encoding="utf-8") as f:
    quiz = json.load(f)

superscripts = "⁰¹²³⁴⁵⁶⁷⁸⁹ⁿⁱ"
subscripts = "₀₁₂₃₄₅₆₇₈₉ₙₓᵧ"
sup_map = {c: f"^{i if i < 10 else ('n' if c == 'ⁿ' else 'i')}" for i, c in enumerate(superscripts)}
sub_map = {c: f"_{i if i < 10 else c}" for i, c in enumerate(subscripts)}

# Build regex that matches a base + superscript/subscript
# Base can be: parenthesized expr, single letter/digit, or word
sup_re = re.compile(r"(\([^)]+\)|[a-zA-Z]+\([^)]*\)|[a-zA-Z0-9]+)([" + superscripts + r"]+)")
sub_re = re.compile(r"(\([^)]+\)|[a-zA-Z]+\([^)]*\)|[a-zA-Z0-9]+)([" + subscripts + r"]+)")

def replace_sup_sub(s):
    def sup_repl(m):
        base, sups = m.group(1), m.group(2)
        converted = "".join(sup_map.get(c, c) for c in sups)
        # If base already starts with $, merge
        if base.startswith("$") and base.endswith("$"):
            return base[:-1] + converted + "$"
        return f"${base}{converted}$"
    def sub_repl(m):
        base, subs = m.group(1), m.group(2)
        converted = "".join(sub_map.get(c, c) for c in subs)
        if base.startswith("$") and base.endswith("$"):
            return base[:-1] + converted + "$"
        return f"${base}{converted}$"
    # Repeat to handle multiple adjacent
    for _ in range(3):
        s2 = sub_re.sub(sub_repl, s)
        s2 = sup_re.sub(sup_repl, s2)
        if s2 == s:
            break
        s = s2
    return s

# Unicode symbols to LaTeX commands (standalone, wrap in $...$)
latex_symbols = {
    "∞": r"\infty", "π": r"\pi",
    "θ": r"\theta", "φ": r"\phi", "λ": r"\lambda", "ρ": r"\rho",
    "Ω": r"\Omega", "α": r"\alpha", "β": r"\beta", "γ": r"\gamma", "Δ": r"\Delta",
    "∂": r"\partial", "∇": r"\nabla",
    "·": r"\cdot", "×": r"\times", "±": r"\pm", "∓": r"\mp",
    "→": r"\to", "⟹": r"\Rightarrow", "≠": r"\neq", "≤": r"\leq", "≥": r"\geq",
    "⟨": r"\langle", "⟩": r"\rangle",
}

# Multi-char math constructs
math_tokens = [
    (r"Σ_{n≥1}", r"\sum_{n=1}^{\infty}"),
    (r"Σ_{n≥0}", r"\sum_{n=0}^{\infty}"),
    (r"Σ_{n=1}", r"\sum_{n=1}"),
    (r"Σ_{n=0}", r"\sum_{n=0}"),
    (r"Σ", r"\sum"),
    (r"∫∫∫_", r"\iiint_"),
    (r"∫∫∫", r"\iiint"),
    (r"∫∫_", r"\iint_"),
    (r"∫∫", r"\iint"),
    (r"∮_", r"\oint_"),
    (r"∮", r"\oint"),
    (r"∯_", r"\oiint_"),
    (r"∯", r"\oiint"),
    (r"∫_", r"\int_"),
    (r"∫", r"\int"),
]

sqrt_re = re.compile(r"√(?:\(([^()]+)\)|([a-zA-Z0-9]))")

def convert_field(s: str) -> str:
    # 1. sqrt (wrap in $...$)
    def sqrt_repl(m):
        inner = m.group(1) or m.group(2)
        for k, v in latex_symbols.items():
            inner = inner.replace(k, v)
        # sub/sup inside sqrt
        inner = replace_sup_sub(inner)
        return f"$\\sqrt{{{inner}}}"
    s = sqrt_re.sub(sqrt_repl, s)

    # 2. multi-char math tokens
    for pat, latex in math_tokens:
        s = s.replace(pat, f"${latex}")

    # 3. superscripts/subscripts attached to bases
    s = replace_sup_sub(s)

    # 4. remaining single symbols
    for ch, latex in latex_symbols.items():
        s = s.replace(ch, f"${latex}")

    # 5. cleanup adjacent dollars
    s = re.sub(r"\$+\s*\$+", "$$", s)
    s = re.sub(r"\$\$+", "$$", s)
    s = re.sub(r"\$\s+\$", " ", s)
    return s

lines = [
    "export interface QuizExample {",
    '  id: string;',
    '  chapter: number;',
    '  type: "subjective" | "fill_blank" | "choice";',
    '  questionMd: string;',
    '  answerMd: string;',
    '  explanationMd: string;',
    '  keywords: string[];',
    '  source: "material" | "ai_generated" | "teacher" | "unknown";',
    "}",
    "",
    "export const quizExamples: QuizExample[] = [",
]

for q in quiz:
    lines.append("  {")
    lines.append(f'    id: "{q["id"]}",')
    lines.append(f'    chapter: {q["chapter"]},')
    lines.append(f'    type: "{q["type"]}",')
    lines.append(f'    questionMd: `{convert_field(q["question"])}`,')
    lines.append(f'    answerMd: `{convert_field(q["answer"])}`,')
    lines.append(f'    explanationMd: `{convert_field(q["explanation"])}`,')
    kw = ", ".join(f'"{k}"' for k in q["keywords"])
    lines.append(f'    keywords: [{kw}],')
    lines.append(f'    source: "{q["source"]}",')
    lines.append("  },")

lines.append("];")
lines.append("")
lines.append("export function getExamplesByChapter(chapter: number): QuizExample[] {")
lines.append("  return quizExamples.filter((q) => q.chapter === chapter);")
lines.append("}")

out_path = "/home/pluto/2026finalExam/calculus/calculus-study-site/src/data/quizExamples.ts"
with open(out_path, "w", encoding="utf-8") as f:
    f.write("\n".join(lines))
print("wrote", out_path, "with", len(quiz), "examples")
