import { breakpoints } from '@styles/media';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  ${breakpoints.large} {
    padding-top: 8.7vh;
  }
  ${breakpoints.medium} {
    padding-top: 8.7vh;
  }
  ${breakpoints.small} {
    padding-top: 7vh;
  }
`;

const Title = styled.h1`
  cursor: grab;
  font-family: 'PlayfairDisplayBold';
  color: #b70000;
  ${breakpoints.large} {
    font-size: 2.5vw;
  }
  ${breakpoints.medium} {
    font-size: 5vw;
  }
  ${breakpoints.small} {
    font-size: 10vw;
  }
`;

export default function IndexHeader() {
  return (
    <Wrapper>
      <Link href="/">
        <Title>bb:</Title>
      </Link>
    </Wrapper>
  );
}
