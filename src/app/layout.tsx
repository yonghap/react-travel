import Header from "@/components/Header";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>마드리드</title>
        <meta
          name="description"
          content="App Router 구조에서 메타데이터 설정 예제"
        />
      </head>
      <body className="bg-gray-100 font">
        <div id="wrap" className="min-h-screen w-full">
          <div id="container" className="pr-100">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
