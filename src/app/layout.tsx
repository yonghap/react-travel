import { ReactNode } from 'react';
import QueryProvider from '@/components/QueryProvider'; // 클라이언트 컴포넌트
import { Suspense } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>ggYu</title>
        <meta name="description" content="App Router 구조에서 메타데이터 설정 예제" />
      </head>
      <body className="bg-gray-100 p-5 sm:p-10">
        <div className="overflow-hidden max-w-[600px] m-auto bg-white font-pretendard rounded-2xl shadow-lg">
          <QueryProvider>
            {children}
          </QueryProvider>
        </div>
      </body>
    </html>
  );
}