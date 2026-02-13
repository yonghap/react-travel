import Image from "next/image";

interface CityHeroProps {
  city: string;
  country: string;
  period: string;
  days: number;
  places: number;
}

export default function CityHero({
  city,
  country,
  period,
  days,
  places,
}: CityHeroProps) {
  return (
    <div className="group relative h-40 w-full rounded-xl overflow-hidden mb-6 cursor-pointer">
      {/* Background Image */}
      <Image
        src="/images/bg_journey2.jpg"
        alt={city}
        fill
        priority
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 transition-all duration-500 group-hover:bg-black/25" />

      {/* Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-500 group-hover:translate-y-[-4px]">
        <p className="text-[11px] tracking-[0.3em] opacity-80">
          {country.toUpperCase()}
        </p>

        <h2 className="text-3xl font-semibold tracking-wider mt-1">
          {city.toUpperCase()}
        </h2>

        <p className="text-xs opacity-80 mt-2">
          {period} · {days} Days · {places} Places
        </p>
      </div>

      {/* Soft Border Highlight */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/30 transition duration-500" />
    </div>
  );
}
