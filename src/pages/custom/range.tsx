import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  ${breakpoints.large} {
    width: 128rem;
  }
  ${breakpoints.medium} {
    width: 68rem;
  }
  ${breakpoints.small} {
    width: 35rem;
  }
`;

const SubTitle = styled.h2`
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  ${breakpoints.large} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 16.7rem;
    padding-bottom: 9.7rem;
  }
  ${breakpoints.medium} {
    font-size: 1.4rem;
    line-height: 1.846rem;
    padding-top: 16.7rem;
    padding-bottom: 9.7rem;
  }
  ${breakpoints.small} {
    font-size: 1.1rem;
    line-height: 1.846rem;
    padding-top: 8.7rem;
    padding-bottom: 2.2rem;
  }
`;

const ContentsContainer = styled.div`
  width: 100%;
  padding: 11.5rem 8.8rem 13.6rem 8.8rem;
  display: flex;
  flex-direction: column;
`;

const SalaryContainer = styled.div``;

const SalaryTitle = styled.h3`
  font-family: 'RobotoMonoRegular';
  font-size: 2.2rem;
  line-height: 2.9rem;
  color: #b70000;
`;

const SalaryBar = styled.div``;

export default function Range() {
  return (
    <Wrapper>
      <SubTitle>BB:PSP(Baseball: Player Stats Prediction)</SubTitle>
      <ContentsContainer>
        <SalaryContainer>
          <SalaryTitle>salary</SalaryTitle>
        </SalaryContainer>
      </ContentsContainer>
    </Wrapper>
  );
}
