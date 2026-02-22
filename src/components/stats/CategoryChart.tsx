"use client";

import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Cafe", value: 10 },
  { name: "Viewpoint", value: 6 },
  { name: "Temple", value: 4 },
];
const colors = ["#6366f1", "#f59e0b", "#10b981", "#ef4444", "#ec4899"];

export default function CategoryChart() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-neutral-200">
      <h3 className=" mb-4 font-bold">방문 장소</h3>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name">
            {data.map((_, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
