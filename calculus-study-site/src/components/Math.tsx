import { useMemo } from "react";
import katex from "katex";

interface MathProps {
  latex: string;
  block?: boolean;
  className?: string;
}

export function Math({ latex, block = false, className = "" }: MathProps) {
  const html = useMemo(() => {
    return katex.renderToString(latex, {
      throwOnError: false,
      displayMode: block,
      strict: false,
    });
  }, [latex, block]);

  if (block) {
    return (
      <div
        className={`katex-display overflow-x-auto py-2 ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={`katex-inline ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
