import React from 'react';
import Layout from '../components/layout/Layout';
import initMockAPI from '../mocks';
import GlobalFont from '../styles/GlobalFont';
import GlobalStyle from '../styles/GlobalStyle';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

if (process.env.NODE_ENV === 'development') {
  initMockAPI();
}

// type AppProps = {
//   Component: React.ElementType;
// };

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <GlobalFont />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
        <ReactQueryDevtools />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
