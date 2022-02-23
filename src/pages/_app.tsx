import React from 'react';
import { RecoilRoot } from 'recoil';
import Layout from '../components/layout/Layout';
import GlobalFont from '../styles/GlobalFont';
import GlobalStyle from '../styles/GlobalStyle';

type AppProps = {
  Component: React.ElementType;
};

function App({ Component }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <GlobalFont />
      <RecoilRoot>
        <Layout>
          <Component />
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default App;
