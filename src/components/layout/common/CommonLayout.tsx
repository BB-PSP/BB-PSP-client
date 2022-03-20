import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../../styles/media';
import CommonHeader from './CommonHeader';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('/image/baseball/baseball_gradationmask.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  ${breakpoints.large} {
    min-height: 70rem;
    background-size: 54.5vw auto;
  }
  ${breakpoints.medium} {
    background-size: 60vh auto;
  }
  ${breakpoints.small} {
    height: 100vh;
    background-size: 40vh auto;
  }
`;

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <CommonHeader />
      {children}
    </Container>
  );
}
