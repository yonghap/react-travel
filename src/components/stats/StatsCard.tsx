interface Props {
  label: string;
  value: number;
}

export default function StatsCard({ label, value }: Props) {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm">
      <p className="text-sm text-neutral-500">{label}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
}
