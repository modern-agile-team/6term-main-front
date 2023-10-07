import Footer from '@/components/organisms/common/Footer';
import SideBar from '@/components/organisms/common/SideBar';
import Header from '@/components/organisms/common/Header';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import FloatingBar from '@/components/organisms/common/FloatingBar';
import { Suspense } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Suspense>
        <Header />
        <SideBar />
        <Component {...pageProps} />
        <FloatingBar />
        <Footer />
      </Suspense>
    </RecoilRoot>
  );
}
