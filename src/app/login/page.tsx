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
    <div className="relative">
      {/* header */}
      <header
        id="header"
        className="fixed top-1/2 right-1/2 w-100  pt-15 pb-18 px-7 bg-white flex flex-col z-10 items-center justify-center  overflow-y-auto shadow-2xl translate-x-1/2 -translate-y-1/2 rounded-3xl"
      >
        <h1
          id="logo"
          className={`leading-[0.9] text-[45px] font-bold text-center text-blue-600 ${poppins.className}`}
        >
          Start My <br />
          Journey
        </h1>
        <figure>
          <ImgTrain className="mt-8 mx-auto w-20" />
        </figure>
        <p className="text-[#0053D4] text-center mt-8">
          Wandering paths, fleeting skies,
          <br /> and stories told in photographs.
        </p>
        <ul className="mt-6  w-3/5">
          <li>
            <Input inputSize="small" placeholder="ID" />
          </li>
          <li className="mt-2">
            <Input type="password" inputSize="small" placeholder="Password" />
          </li>
          <li className="mt-3 text-center">
            <Button variant="primary" size="small">
              LOGIN
            </Button>
          </li>
        </ul>
      </header>
      <div className="w-full h-screen relative">
        <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-full h-full z-0"></div>
        <video
          src="/videos/intro.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  );
}
