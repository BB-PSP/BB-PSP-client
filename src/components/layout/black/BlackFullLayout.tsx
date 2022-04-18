import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '@styles/media';
import BlackHeader from '@layout/black/BlackHeader';

const Container = styled.div`
  position: relative;
  background-color: #3d3d3d;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const BackImage = styled.img`
  position: absolute;
  background-attachment: local;
  padding-top: 25.19vh;
  z-index: -99;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  ${breakpoints.large} {
    width: 54.48vw;
    height: auto;
  }
  ${breakpoints.medium} {
    width: 60vw;
    height: auto;
  }
  ${breakpoints.small} {
    width: 80vw;
    height: auto;
  }
`;

export default function BlackFullLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <BlackHeader />
      <BackImage src="/image/baseball/whole_baseball.png" alt="home" />
      {children}
    </Container>
  );
}
