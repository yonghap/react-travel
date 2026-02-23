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
import Image from "next/image";

const data = [
  { name: "일본", value: 12 },
  { name: "미국", value: 4 },
  { name: "태국", value: 3 },
  { name: "대만", value: 3 },
  { name: "대한민국", value: 3 },
];

const colors = ["#6366f1", "#f59e0b", "#10b981", "#ef4444", "#ec4899"];

export default function CountryCard({ country, trips, cities, image }) {
  return (
    <div className="group relative h-36 rounded-2xl overflow-hidden cursor-pointer">
      <Image
        src={image}
        alt={country}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="absolute bottom-0 p-4 text-white">
        <p className="text-xs opacity-80">{cities}</p>
        <h3 className="text-xl font-semibold tracking-wide">{country}</h3>
        <p className="text-sm opacity-90">{trips} trips</p>
      </div>
    </div>
  );
}
