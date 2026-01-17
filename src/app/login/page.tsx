import Map from "@/components/Map";
import Image from "next/image";
import { Button } from "@/components/form/button";
import { Input } from "@/components/form/input";
import ImgTrain from "@/assets/images/img_train.svg";

import { Poppins, Inter } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className="relative pr-170">
      {/* header */}
      <header
        id="header"
        className="fixed top-0 right-0 w-170 bottom-0 py-10 px-7 bg-gray-100 flex flex-col z-10 items-center justify-center  overflow-y-auto shadow-lg "
      >
        <h1
          id="logo"
          className={`leading-[0.9] text-[80px] font-bold text-center text-blue-600 ${poppins.className}`}
        >
          Start My <br />
          Journey
        </h1>
        <figure>
          <img src={ImgTrain.src} className="mt-10 mx-auto" alt="Train" />
        </figure>
        <p className="text-[#0053D4] text-center mt-10">
          Wandering paths, fleeting skies,
          <br /> and stories told in photographs.
        </p>
        <ul className="mt-6  w-2/5">
          <li>
            <Input placeholder="ID" />
          </li>
          <li className="mt-2">
            <Input type="password" placeholder="Password" />
          </li>
          <li className="mt-3 text-center">
            <Button variant="primary">Login</Button>
          </li>
        </ul>
      </header>
      <div className="w-full h-screen">
        <Map />
      </div>
    </div>
  );
}
