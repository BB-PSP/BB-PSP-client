import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  ${breakpoints.large} {
    padding-top: 9.4rem;
  }
  ${breakpoints.medium} {
    padding-top: 9.4rem;
  }
  ${breakpoints.small} {
    padding-top: 4rem;
  }
`;

const Title = styled.h1`
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

export default function Header() {
  return (
    <Wrapper>
      <Title>bb:</Title>
    </Wrapper>
  );
}
