import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

const arialUnicode = localFont({
  src: "../../public/fonts/arial.woff2",
  variable: "--font-arial-unicode",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${poppins.variable} ${arialUnicode.variable}`} lang="kr">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>Start My Journey</title>
        <meta
          name="description"
          content="App Router 구조에서 메타데이터 설정 예제"
        />
      </head>
      <body className="bg-gray-100">
        <div id="wrap" className="min-h-screen w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
