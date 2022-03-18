import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../../styles/media';

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 23.8rem;
  padding-top: 9.4rem;
  ${breakpoints.small} {
  }
`;

const Title = styled.h1`
  cursor: grab;
  font-family: 'PlayfairDisplayBold';
  color: #b70000;
  font-size: 4.8rem;
  ${breakpoints.small} {
    font-size: 4rem;
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
