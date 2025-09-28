import '@/styles/globals.css';
import { ReactNode } from 'react';
import QueryProvider from '@/components/QueryProvider'; // 클라이언트 컴포넌트
import Header from '@/components/Header'
import { Suspense } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>WANDER VIEW</title>
        <meta name="description" content="App Router 구조에서 메타데이터 설정 예제" />
      </head>
      <body className="bg-gray-100 font-fo">
        <div className="flex">
          <div className="w-[220px] shrink-0">
            <Header></Header>
          </div>
          <div className="shadow-xl flex-1 min-h-screen">
            <QueryProvider>
              {children}
            </QueryProvider>
          </div>
        </div>
      </body>
    </html>
  );
}