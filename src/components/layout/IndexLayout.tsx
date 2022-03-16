import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import IndexHeader from './IndexHeader';

const Container = styled.div`
  position: relative;
  background-color: #ccc;
  z-index: 1;
  height: 100vh;
  /* position: relative;
  width: 100vw;
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
    height: 100vh;
  } */
`;

const BackImage = styled.img`
  position: absolute;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  z-index: -99;
  bottom: 0;
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

export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Wrapper>
        <IndexHeader />
        <BackImage
          src="/image/baseball/baseball_gradationmask.png"
          alt="home"
        />
        {children}
      </Wrapper>
    </Container>
  );
}
