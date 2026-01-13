"use client";

import Image from "next/image";
import { Poppins, Inter } from "next/font/google";
import { Button } from "@/components/form/button";
import { Input } from "@/components/form/input";

import ImgTrain from "@/assets/images/img_train.svg";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <header
      id="header"
      className="fixed top-0 right-0 w-180 bottom-0 py-20 px-6 bg-gray-100 flex flex-col z-10 items-center overflow-y-auto shadow-lg"
    >
      <div className="text-left w-full">
        <h2 className={`my-4 text-4xl text-gray-800 ${poppins.className}`}>
          2025
        </h2>
        <div>
          {/* 1 */}
          <div className="relative w-full rounded-2xl bg-white shadow-sm border border-slate-200 p-5">
            <span className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-slate-100"></span>
            <span className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-slate-100"></span>

            <div className="flex items-center justify-between">
              <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-slate-900">
                🇯🇵 Tokyo Trip
              </h3>
              <span className="text-slate-400">✈️</span>
            </div>

            <p className="mt-1 text-sm text-slate-500 font-['Inter']">
              2025.05.01 – 2025.05.07 · 7 days
            </p>

            <div className="my-4 border-t border-dashed border-slate-300"></div>

            <div className="flex justify-between text-xs text-slate-500 font-['Inter']">
              <div>
                <p className="uppercase tracking-wider text-slate-400">From</p>
                <p className="text-slate-700">KR</p>
              </div>
              <div className="text-right">
                <p className="uppercase tracking-wider text-slate-400">To</p>
                <p className="text-slate-700">JP</p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="mt-2 relative w-full rounded-2xl bg-white shadow-sm border border-slate-200 p-5">
            <span className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-slate-100"></span>
            <span className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-slate-100"></span>

            <div className="flex items-center justify-between">
              <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-slate-900">
                🇯🇵 Hiroshima
              </h3>
              <span className="text-slate-400">✈️</span>
            </div>

            <p className="mt-1 text-sm text-slate-500 font-['Inter']">
              2025.05.01 – 2025.05.07 · 7 days
            </p>

            <div className="my-4 border-t border-dashed border-slate-300"></div>

            <div className="flex justify-between text-xs text-slate-500 font-['Inter']">
              <div>
                <p className="uppercase tracking-wider text-slate-400">From</p>
                <p className="text-slate-700">KR</p>
              </div>
              <div className="text-right">
                <p className="uppercase tracking-wider text-slate-400">To</p>
                <p className="text-slate-700">JP</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className={`my-4 mt-8 text-4xl text-gray-800 ${poppins.className}`}>
          2024
        </h2>
        <div>
          {/* 1 */}
          <div className="relative w-full rounded-2xl bg-white shadow-sm border border-slate-200 p-5">
            <span className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-slate-100"></span>
            <span className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-slate-100"></span>

            <div className="flex items-center justify-between">
              <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-slate-900">
                🇯🇵 Tokyo Trip
              </h3>
              <span className="text-slate-400">✈️</span>
            </div>

            <p className="mt-1 text-sm text-slate-500 font-['Inter']">
              2025.05.01 – 2025.05.07 · 7 days
            </p>

            <div className="my-4 border-t border-dashed border-slate-300"></div>

            <div className="flex justify-between text-xs text-slate-500 font-['Inter']">
              <div>
                <p className="uppercase tracking-wider text-slate-400">From</p>
                <p className="text-slate-700">KR</p>
              </div>
              <div className="text-right">
                <p className="uppercase tracking-wider text-slate-400">To</p>
                <p className="text-slate-700">JP</p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="mt-2 relative w-full rounded-2xl bg-white shadow-sm border border-slate-200 p-5">
            <span className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-slate-100"></span>
            <span className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-slate-100"></span>

            <div className="flex items-center justify-between">
              <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-slate-900">
                🇯🇵 Hiroshima
              </h3>
              <span className="text-slate-400">✈️</span>
            </div>

            <p className="mt-1 text-sm text-slate-500 font-['Inter']">
              2025.05.01 – 2025.05.07 · 7 days
            </p>

            <div className="my-4 border-t border-dashed border-slate-300"></div>

            <div className="flex justify-between text-xs text-slate-500 font-['Inter']">
              <div>
                <p className="uppercase tracking-wider text-slate-400">From</p>
                <p className="text-slate-700">KR</p>
              </div>
              <div className="text-right">
                <p className="uppercase tracking-wider text-slate-400">To</p>
                <p className="text-slate-700">JP</p>
              </div>
            </div>
          </div>
        </div>
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
