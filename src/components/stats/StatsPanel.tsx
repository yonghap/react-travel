"use client";

import StatsCard from "./StatsCard";
import CategoryChart from "./CategoryChart";
import CountryChart from "./CountryChart";
import { journeys } from "@/data/mockData";

export default function StatsPanel() {
  const totalPlaces = journeys.length;
  const totalDays = new Set(journeys.map((j) => j.date)).size;
  const uniqueCities = new Set(journeys.map((j) => j.city)).size;
  const uniqueCountries = new Set(journeys.map((j) => j.country)).size;

  return (
    <div
      className="fixed top-0 right-0 w-150 bottom-0
                 bg-neutral-50
                 border-l border-neutral-200
                 shadow-2xl
                 overflow-y-auto"
    >
      <div className="px-8 py-10 space-y-8">
        {/* HEADER */}
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            Travel Statistics
          </h2>
          <p className="text-sm text-neutral-500 mt-1">
            Your travel patterns & insights
          </p>
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-2 gap-4">
          <StatsCard label="Countries" value={uniqueCountries} />
          <StatsCard label="Cities" value={uniqueCities} />
          <StatsCard label="Places" value={totalPlaces} />
          <StatsCard label="Days" value={totalDays} />
        </div>

        {/* INSIGHTS */}
        <div className="bg-white rounded-2xl p-5 border border-neutral-200">
          <h3 className="font-medium mb-3">Insights</h3>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li>🌍 Most visited country: Japan</li>
            <li>☕ Favorite category: Cafe</li>
            <li>📍 Avg places per day: 4.2</li>
          </ul>
        </div>

        {/* CHARTS */}
        <CountryChart />
        <CategoryChart />
      </div>
    </div>
  );
}
