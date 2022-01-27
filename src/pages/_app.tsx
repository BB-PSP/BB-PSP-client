import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global-styles';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      {/* <ThemeProvider theme={breakpoints}> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}
export default MyApp;
