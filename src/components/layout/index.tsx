import { ReactNode } from 'react';
import GlobalFont from '../../styles/GlobalFont';
import GlobalStyle from '../../styles/GlobalStyle';

interface IProps {
  children: ReactNode;
  // any other props that come into the component
}

export default function Layout({ children, ...props }: IProps) {
  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
}
