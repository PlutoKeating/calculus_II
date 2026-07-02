import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TabNav } from "./components/TabNav";
import { chapters } from "./data/chapters";
import Chapter1 from "./chapters/Chapter1";
import Chapter2 from "./chapters/Chapter2";
import Chapter3 from "./chapters/Chapter3";
import Chapter4 from "./chapters/Chapter4";
import Chapter5 from "./chapters/Chapter5";
import Chapter6 from "./chapters/Chapter6";
import Chapter7 from "./chapters/Chapter7";

const chapterComponents: Record<number, React.ComponentType> = {
  1: Chapter1,
  2: Chapter2,
  3: Chapter3,
  4: Chapter4,
  5: Chapter5,
  6: Chapter6,
  7: Chapter7,
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <TabNav chapters={chapters} />
        <main className="max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/chapter/1" replace />} />
            {chapters.map((ch) => {
              const Component = chapterComponents[ch.id];
              return (
                <Route
                  key={ch.id}
                  path={ch.path}
                  element={<Component />}
                />
              );
            })}
            <Route path="*" element={<Navigate to="/chapter/1" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
