import { NavLink } from "react-router-dom";
import { BookOpen } from "lucide-react";

export interface ChapterMeta {
  id: number;
  path: string;
  title: string;
  shortTitle: string;
  color: string;
}

interface TabNavProps {
  chapters: ChapterMeta[];
}

export function TabNav({ chapters }: TabNavProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 py-3">
          <div className="flex items-center gap-2 text-brand-700 font-bold text-lg shrink-0">
            <BookOpen className="w-6 h-6" />
            <span className="hidden sm:inline">Calculus II</span>
          </div>
          <nav className="flex-1 overflow-x-auto">
            <ul className="flex gap-1 min-w-max px-1">
              {chapters.map((ch) => (
                <li key={ch.id}>
                  <NavLink
                    to={ch.path}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                        isActive
                          ? "bg-brand-100 text-brand-800"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`
                    }
                  >
                    <span className="font-bold mr-1">{ch.id}.</span>
                    {ch.shortTitle}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
