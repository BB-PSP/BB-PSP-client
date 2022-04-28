import { breakpoints } from '@styles/media';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const SubTitle = styled.h2`
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  ${breakpoints.large} {
    font-size: 0.73vw;
    line-height: 1.73vh;
    padding-top: 0.74vh;
  }
  ${breakpoints.medium} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 0.8rem;
  }
  ${breakpoints.small} {
    font-size: 3vw;
    line-height: 3vh;
    padding-top: 1vh;
  }
`;

export default function CommonHeader() {
  return (
    <Wrapper>
      <Link href="/">
        <Title>bb:</Title>
      </Link>
      <SubTitle>BB:PSP(Baseball: Player Stats Prediction)</SubTitle>
    </Wrapper>
  );
}
