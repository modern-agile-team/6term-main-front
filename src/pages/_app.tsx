import Footer from '@/components/organisms/common/Footer';
import Header from '@/components/organisms/common/Header';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import React from 'react';
import FloatingBar from '@/components/organisms/common/floatingbar/FloatingBar';
import dynamic from 'next/dynamic';

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ComponentsWithNoSSR />

        <Component {...pageProps} />
        <FloatingBarWithNoSSR />
        {/* <FloatingBar /> */}
        <Footer />
      </React.Suspense>
    </RecoilRoot>
  );
}
