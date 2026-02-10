import Map from "@/components/Map";
import Image from "next/image";
import { Button } from "@/components/form/button";
import { Input } from "@/components/form/input";
import ImgTrain from "@/assets/images/img_train.svg";
import Place from "@/components/Place";

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
      {/* header */}
      <div
        id="header"
        className="fixed top-0 right-0 w-150 bottom-0 py-12 px-7 bg-gray-100 z-10 overflow-y-auto shadow-lg"
      >
        <div className="relative z-10">
          <h3 className="mb-8 text-4xl font-bold text-center">SHIZUOKA</h3>
          <ul>
            {dayGroups.map((day) => (
              <li key={day.date} className={day.dayNumber > 1 ? "mt-6" : ""}>
                <div className="space-y-2">
                  <div className="pb-2">
                    <div className="flex items-center justify-between pr-2">
                      <span className="text-sm tracking-widest text-neutral-500">
                        DAY {day.dayNumber}
                      </span>
                      <span className="text-sm font-medium text-gray-700">
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
