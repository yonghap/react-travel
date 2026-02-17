import Map from "@/components/Map";
import StatsPanel from "@/components/stats/StatsPanel";

export default function StatsPage() {
  return (
    <div className="relative pr-150">
      {/* RIGHT PANEL */}
      <StatsPanel />

      {/* MAP */}
      <div className="w-full h-screen">
        <Map />
      </div>
    </div>
  );
}
