import type { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  variant?: "default" | "highlight" | "warning" | "success";
}

const variantStyles = {
  default: "bg-white border-slate-200",
  highlight: "bg-brand-50 border-brand-200",
  warning: "bg-amber-50 border-amber-200",
  success: "bg-emerald-50 border-emerald-200",
};

export function SectionCard({ title, icon, children, variant = "default" }: SectionCardProps) {
  return (
    <section className={`rounded-2xl border p-6 shadow-sm mb-6 ${variantStyles[variant]}`}>
      <div className="flex items-center gap-3 mb-4">
        {icon && <span className="text-2xl">{icon}</span>}
        <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
      </div>
      <div className="text-slate-700 leading-relaxed">{children}</div>
    </section>
  );
}
