import React from 'react';
import initMockAPI from '../mocks';
import GlobalStyle from '../styles/GlobalStyle';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';

if (process.env.NODE_ENV === 'development') {
  initMockAPI();
}

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType;
  };
};

function App({ Component, pageProps }: ComponentWithPageLayout) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </Hydrate>
        <ReactQueryDevtools />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
