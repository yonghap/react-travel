import Link from "next/link";
import { Gasoek_One } from "next/font/google";
const gasoek = Gasoek_One({ subsets: ["latin"], weight: "400" });
export default function Header() {
  return (
    <header
      id="header"
      className="flex items-center fixed top-0 left-0 w-100 bottom-0  justify-center bg-[#C6DCFF]"
    >
      <h1
        id="logo"
        className={`py-14 text-3xl font-bold text-center text-[#0053D4] ${gasoek.className}`}
      >
        The Travel Note
      </h1>
    </header>
  );
}
