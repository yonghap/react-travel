"use client";

import { useState } from "react";

type journeyProps = {
  date: string;
  type: "food" | "sightseeing" | "accommodation" | "transportation" | "other";
  name: string;
  meta: string;
  description: string;
  images: string[];
};

export default function Place({
  date,
  type,
  name,
  meta,
  description,
  images,
}: journeyProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
      <div className="relative flex justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-100">
            {type}
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold text-neutral-900">
              {name}
            </span>
            <span className="text-xs text-neutral-500">{meta}</span>
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            ▽
          </button>
        </div>
      </div>
      <div className={`mt-3 ${isOpen ? "" : "hidden"}`}>
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <figure key={index} className="pt-[100%] relative">
              <button
                type="button"
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
