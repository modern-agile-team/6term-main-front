import Footer from '@/components/organisms/common/Footer';
import Header from '@/components/organisms/common/Header';
import type { AppProps } from 'next/app';
import { RecoilRoot, useRecoilValue } from 'recoil';
import React from 'react';
import FloatingBar from '@/components/organisms/common/floatingbar/FloatingBar';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import { GetServerSideProps } from 'next';
import ChatIcon from '@/components/organisms/chat-icon/ChatIcon';

const ComponentsWithNoSSR = dynamic<{}>( // typescript에서 props를 전달할때 interface를 정의해줍니다.
  () => import('@/components/organisms/common/Header'),
  // Component로 사용할 항목을 import합니다.
  { ssr: false }, // ssr옵션을 false로 설정해줍니다.
);

const FloatingBarWithNoSSR = dynamic<{}>( // typescript에서 props를 전달할때 interface를 정의해줍니다.
  () => import('@/components/organisms/common/floatingbar/FloatingBar'),
  // Component로 사용할 항목을 import합니다.
  { ssr: false }, // ssr옵션을 false로 설정해줍니다.
);

const ChatIconWithNoSSR = dynamic<{}>(
  () => import('@/components/organisms/chat-icon/ChatIcon'),
  { ssr: false },
);

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   localStorage.setItem('accessToken', '');
  // }, []);
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ComponentsWithNoSSR />
        <div
          style={{
            minHeight: '100vh', //뷰 포트 : 브라우저의 최소 높이를 100%로 해서, 빈 값을 할당
            display: 'flex', // flex:1을 할당해 나머지 요소 사이의 빈 부분을 전부 할당
            flexDirection: 'column',
          }}>
          <Component {...pageProps} style={{ flex: 1 }} />
        </div>
        <FloatingBarWithNoSSR />
        <ChatIconWithNoSSR />
        {/* <ChatIcon /> */}
        <Footer />
      </React.Suspense>
    </RecoilRoot>
  );
}
