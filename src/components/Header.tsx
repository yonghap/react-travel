"use client";

import Image from "next/image";
import { Gasoek_One } from "next/font/google";
import { Button } from "@/components/form/button";
import { Input } from "@/components/form/input";

import ImgTrain from "@/assets/images/img_train.svg";

const gasoek = Gasoek_One({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <header
      id="header"
      className="fixed top-0 right-0 w-100 bottom-0 py-20 justify-center bg-[#C6DCFF] flex flex-col z-10 items-center overflow-y-auto"
    >
      <h1
        id="logo"
        className={`leading-[0.9] text-[80px] font-bold text-center text-blue-600 ${gasoek.className}`}
      >
        My Travel Note
      </h1>
      <figure>
        <img src={ImgTrain.src} className="mt-8 mx-auto" alt="Train" />
      </figure>
      <p className="text-[#0053D4] text-center mt-8">
        Wandering paths, fleeting skies,
        <br /> and stories told in photographs.
      </p>
      <ul className="mt-4">
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
