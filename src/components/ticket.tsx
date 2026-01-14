type TicketProps = {
  city: string;
  code: string; // 국가 코드 (JP 등)
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  fewDate: number; // 여행 일수
  startNation: string; // 출발 국가
  depNation: string; // 도착 국가
  transport: "plane" | "train" | "ship" | "car"; // 필요시 확장
};

export default function Ticket({
  city,
  code,
  startDate,
  endDate,
  fewDate,
  startNation,
  depNation,
  transport,
}: TicketProps) {
  return (
    <div className="relative w-full rounded-2xl bg-white shadow-sm border border-slate-200 p-5">
      <span className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-slate-100"></span>
      <span className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-slate-100"></span>

      <div className="flex items-center justify-between">
        <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-slate-900">
          🇯🇵 {city} Trip
        </h3>
        <span className="text-slate-400">✈️</span>
      </div>

      <p className="mt-1 text-sm text-slate-500 font-['Inter']">
        {startDate} – {endDate} · {fewDate} days
      </p>

      <div className="my-4 border-t border-dashed border-slate-300"></div>

      <div className="flex justify-between text-xs text-slate-500 font-['Inter']">
        <div>
          <p className="uppercase tracking-wider text-slate-400">From</p>
          <p className="text-slate-700">{startNation}</p>
        </div>
        <div className="text-right">
          <p className="uppercase tracking-wider text-slate-400">To</p>
          <p className="text-slate-700">{depNation}</p>
        </div>
      </div>
    </div>
  );
}
