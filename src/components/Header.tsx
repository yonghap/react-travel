"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header id="header" className="fixed top-5 left-10 z-10 bg-white rounded">
      <Link href="/login" className="inline-block py-1 px-5">
        Login
      </Link>
      <Link href="/list" className="inline-block py-1 px-5">
        List
      </Link>
      <Link href="/journey" className="inline-block py-1 px-5">
        Journey
      </Link>
    </header>
  );
}
