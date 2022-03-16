import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import BlackHeader from './BlackHeader';

const Container = styled.body`
  position: relative;
  background-color: #3d3d3d;
  z-index: 1;
  height: 100vh;
`;

const BackImage = styled.img`
  position: absolute;
  background-attachment: local;
  padding-top: 27.2rem;
  z-index: -99;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  ${breakpoints.large} {
    width: 104.6rem;
    height: auto;
  }
  ${breakpoints.medium} {
    width: 58rem;
    height: auto;
  }
  ${breakpoints.small} {
    width: 20rem;
    height: auto;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default function BlackFullLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Wrapper>
        <BlackHeader />
        <BackImage src="/image/baseball/whole_baseball.png" alt="home" />
        {children}
      </Wrapper>
    </Container>
  );
}
