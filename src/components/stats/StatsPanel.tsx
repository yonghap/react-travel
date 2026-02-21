"use client";

import StatsCard from "./StatsCard";
import CategoryChart from "./CategoryChart";
import CountryChart from "./CountryChart";
import { journeys } from "@/data/mockData";
import Image from "next/image";

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
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Travel Statistics
          </h2>
          <p className="text-sm text-neutral-500 mt-1">
            Your travel patterns & insights
          </p>
        </div>

        {/* INSIGHTS */}
        <div className="group relative h-60 w-full rounded-xl overflow-hidden mb-6 cursor-pointer">
          {/* Background Image */}
          <Image
            src="/images/japan.jpg"
            fill
            priority
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/45 transition-all duration-500 group-hover:bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-500 text-right group-hover:translate-y-[-4px]">
            <p className="text-md tracking-[0.3em] opacity-80">
              제일 많이 방문한 국가
            </p>

            <h2 className="text-4xl font-semibold tracking-wider mt-1">
              JAPAN
            </h2>
            <p className="font-bold text-md opacity-80 mt-2">총 3회</p>
          </div>
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-2 gap-4">
          <StatsCard label="방문 국가수" value={uniqueCountries} />
          <StatsCard label="방문 도시수" value={uniqueCities} />
          <StatsCard label="방문 장소수" value={totalPlaces} />
          <StatsCard label="방문 일수" value={totalDays} />
        </div>

        {/* CHARTS */}
        <CountryChart />
        <CategoryChart />
      </div>
    </div>
  );
}
