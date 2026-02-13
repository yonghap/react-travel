import Map from "@/components/Map";
import Place from "@/components/Place";
import Image from "next/image";
import CityHero from "@/components/CityHero";

import { Poppins, Inter } from "next/font/google";
import { journeys } from "@/data/mockData";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const groupByDate = (tickets: typeof groupedTickets) => {
    const grouped = tickets.reduce(
      (acc, ticket) => {
        if (!acc[ticket.date]) {
          acc[ticket.date] = [];
        }
        acc[ticket.date].push(ticket);
        return acc;
      },
      {} as Record<string, typeof groupedTickets>,
    );

    return Object.entries(grouped).map(([date, items], index) => ({
      dayNumber: index + 1,
      date,
      items,
    }));
  };

  // 컴포넌트 내부
  const dayGroups = groupByDate(journeys);

  return (
    <div className="relative pr-150">
      <div
        id="header"
        className="fixed top-0 right-0 w-150 bottom-0 pt-7 pb-12 px-7 bg-gray-100 z-10 overflow-y-auto shadow-lg"
      >
        <div className="relative z-10">
          <CityHero
            city="Shizuoka"
            country="Japan"
            period="May 2025"
            days={dayGroups.length}
            places={journeys.length}
          />
          <ul>
            {dayGroups.map((day) => (
              <li
                key={day.date}
                className={`bg-white p-5 rounded-xl shadow-sm ${day.dayNumber > 1 ? "mt-6" : ""}`}
              >
                <div className="space-y-2">
                  <div className="pb-2">
                    <div className="flex items-center justify-between pr-2">
                      <span className="text-sm tracking-widest text-neutral-500">
                        DAY {day.dayNumber}
                      </span>
                      <span className="text-xs font-medium text-gray-400">
                        {day.date}
                      </span>
                    </div>
                    <div className="mt-2 border-t border-dashed border-neutral-300"></div>
                  </div>

                  <div className="space-y-2">
                    {day.items.map((journey, index) => (
                      <Place
                        key={index}
                        date={journey.date}
                        type={journey.type}
                        name={journey.name}
                        meta={journey.meta}
                        description={journey.description}
                        images={journey.images}
                      />
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full h-screen">
        <Map />
      </div>
    </div>
  );
}
