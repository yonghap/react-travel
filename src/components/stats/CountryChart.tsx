"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "일본", value: 12 },
  { name: "미국", value: 4 },
  { name: "태국", value: 3 },
  { name: "대만", value: 3 },
  { name: "대한민국", value: 3 },
];

const colors = ["#6366f1", "#f59e0b", "#10b981", "#ef4444", "#ec4899"];

export default function CountryChart() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-neutral-200">
      <h3 className=" mb-4 font-bold">방문 국가</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="value">
            {data.map((_, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
