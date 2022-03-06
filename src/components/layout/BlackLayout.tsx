import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import CommonHeader from './CommonHeader';

const Container = styled.div`
  position: relative;
  width: 100vw;
  background-color: #3d3d3d;
  z-index: 1;
  ${breakpoints.large} {
    min-height: 100vh;
    height: 108rem;
  }
  ${breakpoints.medium} {
    min-height: 100vh;
    height: 88rem;
  }
  ${breakpoints.small} {
    min-height: 100vh;
    @supports (-webkit-touch-callout: none) and (stroke-color: transparent) {
      min-height: -webkit-fill-available;
      position: fixed;
    }
    height: 100%;
  }
`;

const BackImage = styled.img`
  position: absolute;
  z-index: -99;
  left: 50%;
  bottom: 0;
  transform: translate3d(-50%, 0, 0);
  ${breakpoints.large} {
    width: 104.6rem;
    height: fit-content;
    object-fit: contain;
  }
  ${breakpoints.medium} {
    width: 80rem;
    height: auto;
    object-fit: contain;
  }
  ${breakpoints.small} {
    width: 35rem;
    height: auto;
    object-fit: contain;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default function BlackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <BackImage src="/image/home.png" alt="home" />
      <Wrapper>{children}</Wrapper>
      <CommonHeader />
    </Container>
  );
}
