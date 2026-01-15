"use client";

import Image from "next/image";
import { Poppins, Inter } from "next/font/google";
import { Button } from "@/components/form/button";
import { Input } from "@/components/form/input";
import Ticket from "@/components/ticket";

import ImgTrain from "@/assets/images/img_train.svg";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <header
      id="header"
      className="fixed top-0 right-0 w-180 bottom-0 py-20 px-6 bg-gray-100 flex flex-col z-10 items-center overflow-y-auto shadow-lg"
    >
      <div className="w-full">
        <h3 className="mb-4 text-3xl">Trips</h3>
        <Ticket
          city="Tokyo"
          code="JP"
          startDate="2025.05.01"
          endDate="2025.05.07"
          fewDate={7}
          startNation="KR"
          depNation="JP"
          transport="plane"
        />
      </div>
      <h1
        id="logo"
        className={`leading-[0.9] text-[80px] font-bold text-center text-blue-600 ${poppins.className}`}
      >
        Start My Journey
      </h1>
      <figure>
        <img src={ImgTrain.src} className="mt-8 mx-auto" alt="Train" />
      </figure>
      <p className="text-[#0053D4] text-center mt-8">
        Wandering paths, fleeting skies,
        <br /> and stories told in photographs.
      </p>
      <ul className="mt-6">
        <li>
          <Input inputSize="small" placeholder="ID" />
        </li>
        <li className="mt-2">
          <Input inputSize="small" type="password" placeholder="Password" />
        </li>
        <li className="mt-2">
          <Button variant="primary" size="full">
            Login
          </Button>
        </li>
      </ul>
    </header>
  );
}
