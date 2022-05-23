import GlobalStyle from '@styles/GlobalStyle';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

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
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="wi₩dth=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>BB-PSP</title>
        </Head>
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
