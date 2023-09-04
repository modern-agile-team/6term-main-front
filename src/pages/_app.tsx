import Footer from '@/components/organisms/common/Footer'
import Header from '@/components/organisms/common/Header'
import SideBar from '@/components/organisms/common/SideBar'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <SideBar />
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
  )
}
