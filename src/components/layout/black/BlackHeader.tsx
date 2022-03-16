import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../../styles/media';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  color: #fff;
`;

const SubTitle = styled.h2`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 0.8rem;
  }
  ${breakpoints.medium} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 0.8rem;
  }
  ${breakpoints.small} {
    font-size: 1.1rem;
    line-height: 1.846rem;
    padding-top: 0.8rem;
  }
`;

export default function BlackHeader() {
  return (
    <Wrapper>
      <Link href="/">
        <Title>bb:</Title>
      </Link>
      <SubTitle>BB:PSP(Baseball: Player Stats Prediction)</SubTitle>
    </Wrapper>
  );
}
