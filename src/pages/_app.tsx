import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import GlobalFont from '../styles/GlobalFont';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <GlobalFont />
      {/* <ThemeProvider theme={breakpoints}> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}
export default MyApp;
