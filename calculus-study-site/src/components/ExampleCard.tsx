import { useState } from "react";
import { ChevronDown, ChevronUp, Lightbulb, AlertTriangle } from "lucide-react";
import { Markdown } from "./Markdown";

export interface Example {
  id: string;
  question: string;
  answer: string;
  explanation: string;
  keywords: string[];
  source: "material" | "ai_generated" | "teacher" | "unknown";
}

interface ExampleCardProps {
  example: Example;
  index: number;
}

const sourceLabels: Record<
  string,
  { text: string; className: string; icon: React.ReactNode }
> = {
  material: {
    text: "来自资料（真题/参考答案）",
    className: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: <span>🟢</span>,
  },
  ai_generated: {
    text: "AI 生成练习题",
    className: "bg-amber-100 text-amber-800 border-amber-200",
    icon: <AlertTriangle className="w-3.5 h-3.5" />,
  },
  teacher: {
    text: "来自老师/教材",
    className: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: <span>🟢</span>,
  },
  unknown: {
    text: "来源未知",
    className: "bg-slate-100 text-slate-700 border-slate-200",
    icon: <span>⚪</span>,
  },
};

export function ExampleCard({ example, index }: ExampleCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  const source = sourceLabels[example.source] || sourceLabels.unknown;

  return (
    <article className="rounded-xl border border-slate-200 bg-white shadow-sm mb-5 overflow-hidden">
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-100 text-brand-700 text-sm font-bold">
            {index + 1}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${source.className}`}
          >
            {source.icon}
            {source.text}
          </span>
        </div>

        <h3 className="text-base font-semibold text-slate-800 mb-3">题目</h3>
        <div className="text-slate-700 mb-4">
          <Markdown>{example.question}</Markdown>
        </div>

        <button
          onClick={() => setShowAnswer((s) => !s)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition-colors"
        >
          {showAnswer ? (
            <>
              <ChevronUp className="w-4 h-4" /> 收起解析
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" /> 查看解析
            </>
          )}
        </button>

        {showAnswer && (
          <div className="mt-4 space-y-4 border-t border-slate-100 pt-4">
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-1">答案</h4>
              <div className="text-slate-700">
                <Markdown>{example.answer}</Markdown>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                解析
              </h4>
              <div className="text-slate-700">
                <Markdown>{example.explanation}</Markdown>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {example.keywords.map((k) => (
                <span
                  key={k}
                  className="px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
