import type { ChapterMeta } from "../components/TabNav";

export const chapters: ChapterMeta[] = [
  {
    id: 1,
    path: "/chapter/1",
    title: "数列与常数项级数（收敛判别）",
    shortTitle: "级数收敛",
    color: "#8b5cf6",
  },
  {
    id: 2,
    path: "/chapter/2",
    title: "幂级数与泰勒级数",
    shortTitle: "幂级数",
    color: "#ec4899",
  },
  {
    id: 3,
    path: "/chapter/3",
    title: "向量与空间解析几何",
    shortTitle: "向量几何",
    color: "#3b82f6",
  },
  {
    id: 4,
    path: "/chapter/4",
    title: "多元函数微分学",
    shortTitle: "多元微分",
    color: "#10b981",
  },
  {
    id: 5,
    path: "/chapter/5",
    title: "重积分（二重·三重）",
    shortTitle: "重积分",
    color: "#f59e0b",
  },
  {
    id: 6,
    path: "/chapter/6",
    title: "向量场与曲线曲面积分",
    shortTitle: "向量场积分",
    color: "#ef4444",
  },
  {
    id: 7,
    path: "/chapter/7",
    title: "微分方程",
    shortTitle: "微分方程",
    color: "#06b6d4",
  },
];

export function getChapterById(id: number) {
  return chapters.find((c) => c.id === id);
}
