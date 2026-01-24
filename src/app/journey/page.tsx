import Map from "@/components/Map";
import Image from "next/image";
import { Button } from "@/components/form/button";
import { Input } from "@/components/form/input";
import ImgTrain from "@/assets/images/img_train.svg";
import Place from "@/components/Place";

import { Poppins, Inter } from "next/font/google";
import { tickets } from "@/data/mockData";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });

const groupAndSortByYear = (trips: typeof tickets) => {
  const grouped = trips.reduce(
    (acc, trip) => {
      const year = trip.startDate.split(".")[0];
      if (!acc[year]) acc[year] = [];
      acc[year].push(trip);
      return acc;
    },
    {} as Record<string, typeof tickets>,
  );

  // 각 년도별 데이터를 날짜순 정렬
  Object.keys(grouped).forEach((year) => {
    grouped[year].sort((a, b) => a.startDate.localeCompare(b.startDate));
  });

  return grouped;
};

export default function Home() {
  const groupedTickets = groupAndSortByYear(tickets);

  return (
    <div className="relative pr-170">
      {/* header */}
      <div
        id="header"
        className="fixed top-0 right-0 w-170 bottom-0 py-12 px-7 bg-gray-100 z-10 overflow-y-auto shadow-lg "
      >
        <h3 className="mb-8 text-4xl font-bold text-center">Tokyo</h3>
        <ul>
          <li>
            <div className="space-y-2">
              <div className="sticky top-0 z-10 pb-2">
                <div className="flex items-center justify-between pr-2">
                  <span className="text-sm tracking-widest text-neutral-500">
                    DAY 1
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    2025.05.01
                  </span>
                </div>
                <div className="mt-2 border-t border-dashed border-neutral-300"></div>
              </div>

              <div className="space-y-2">
                <Place />
                <Place />
              </div>
            </div>
          </li>
          <li className="mt-6">
            <div className="space-y-2">
              <div className="sticky top-0 z-10 pb-2">
                <div className="flex items-center justify-between pr-2">
                  <span className="text-sm tracking-widest text-neutral-500">
                    DAY 2
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    2025.05.01
                  </span>
                </div>
                <div className="mt-2 border-t border-dashed border-neutral-300"></div>
              </div>

              <div className="space-y-2">
                <Place />
                <Place />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full h-screen">
        <Map />
      </div>
    </div>
  );
}
