"use client";

import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Japan", value: 12 },
  { name: "USA", value: 4 },
  { name: "Taiwan", value: 3 },
];

export default function CountryChart() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-neutral-200">
      <h3 className="font-medium mb-4">Visited Countries</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
