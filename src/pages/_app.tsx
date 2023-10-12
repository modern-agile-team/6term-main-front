import Footer from '@/components/organisms/common/Footer';
import Header from '@/components/organisms/common/Header';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import FloatingBar from '@/components/organisms/common/floatingbar/FloatingBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
      <FloatingBar />
      <Footer />
    </RecoilRoot>
  );
}
