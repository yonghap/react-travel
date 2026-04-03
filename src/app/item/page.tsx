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
    <div className="relative fixed top-0 right-0 w-full h-full bg-white z-[9999]">
      <div
        id="header"
        className="w-full h-full overflow-y-auto p-10 bg-white"
      >
        <div className="grid grid-cols-3 gap-10">
          <div className="relative z-10">            
            <CityHero
              city="Shizuoka"
              country="Japan"
              period="May 2025"
              days={dayGroups.length}
              places={journeys.length}
            />         
          </div>
          <div className="relative z-10">            
            <CityHero
              city="Shizuoka"
              country="Japan"
              period="May 2025"
              days={dayGroups.length}
              places={journeys.length}
            />         
          </div>
          <div className="relative z-10">            
            <CityHero
              city="Shizuoka"
              country="Japan"
              period="May 2024"
              days={dayGroups.length}
              places={journeys.length}
            />         
          </div>
          <div className="relative z-10">            
            <CityHero
              city="Shizuoka"
              country="Japan"
              period="May 2025"
              days={dayGroups.length}
              places={journeys.length}
            />         
          </div>
        </div>
      </div>
      <div className="w-full h-screen">
        <Map />
      </div>
    </div>
  );
}
