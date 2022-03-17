import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../../styles/media';

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  ${breakpoints.large} {
    top: 9.4rem;
  }
  ${breakpoints.medium} {
    top: 9.4rem;
  }
  ${breakpoints.small} {
    top: 4rem;
  }
`;

const Title = styled.h1`
  cursor: grab;
  font-family: 'PlayfairDisplayBold';
  ${breakpoints.large} {
    font-size: 4.8rem;
  }
  ${breakpoints.medium} {
    font-size: 4.8rem;
  }
  ${breakpoints.small} {
    font-size: 4rem;
  }
  color: #b70000;
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
