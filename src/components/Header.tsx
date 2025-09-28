import Link from "next/link";

export default function Header() {
  return (
    <header id="header" className="pl-14 ">
      <h1 id="logo" className="py-14 text-3xl font-bold">
        WANDER<br/>
        VIEW
      </h1>
      <ul className="text-gray-600">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          KOREA
        </li>
        <li>
          <Link href="/japan">JAPAN</Link>
        </li>
        <li>
          DAILY
        </li>
        <li>
          ETC
        </li>
      </ul>
    </header>
  )
}