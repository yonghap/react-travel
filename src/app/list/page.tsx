import Map from "@/components/Map";
import Image from "next/image";
import { Button } from "@/components/form/button";
import { Input } from "@/components/form/input";
import ImgTrain from "@/assets/images/img_train.svg";
import Ticket from "@/components/ticket";

import { Poppins, Inter } from "next/font/google";
import { tickets } from "@/data/mockData";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className="relative pr-170">
      {/* header */}
      <div
        id="header"
        className="fixed top-0 right-0 w-170 bottom-0 py-10 px-7 bg-gray-100 z-10 overflow-y-auto shadow-lg "
      >
        <h3 className="mb-5 text-3xl text-left font-bold">Trips</h3>
        <article>
          <h4 className="text-gray-500 mb-2">- 2025</h4>
          <ul>
            {tickets.map((ticket) => (
              <li className="mb-2">
                <Ticket
                  city={ticket.city}
                  code={ticket.code}
                  startDate={ticket.startDate}
                  endDate={ticket.endDate}
                  fewDate={ticket.fewDate}
                  startNation={ticket.startNation}
                  depNation={ticket.depNation}
                  transport={ticket.transport}
                />
              </li>
            ))}
          </ul>
        </article>
      </div>
      <div className="w-full h-screen">
        <Map />
      </div>
    </div>
  );
}
