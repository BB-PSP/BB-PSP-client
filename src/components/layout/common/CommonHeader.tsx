import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../../styles/media';

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
