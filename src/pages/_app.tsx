import React from 'react';
import { RecoilRoot } from 'recoil';
import Layout from '../components/layout/Layout';
import initMockAPI from '../mocks';
import GlobalFont from '../styles/GlobalFont';
import GlobalStyle from '../styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

if (process.env.NODE_ENV === 'development') {
  initMockAPI();
}

type AppProps = {
  Component: React.ElementType;
};

function App({ Component }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <GlobalFont />
      <Layout>
        <Component />
      </Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
