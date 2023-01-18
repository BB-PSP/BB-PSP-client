import { Roboto_Mono } from '@next/font/google';
import type { AppProps } from 'next/app';

import '@/assets/styles/index.scss';

const robotoMono = Roboto_Mono({ subsets: ['latin'], display: 'swap' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={robotoMono.className}>
      <Component {...pageProps} />
    </main>
  );
}
