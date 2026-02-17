"use client";

import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Cafe", value: 10 },
  { name: "Viewpoint", value: 6 },
  { name: "Temple", value: 4 },
];

export default function CategoryChart() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-neutral-200">
      <h3 className="font-medium mb-4">Place Categories</h3>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
