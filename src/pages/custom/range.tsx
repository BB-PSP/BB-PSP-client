import React, { useState } from 'react';
import styled from 'styled-components';

import { breakpoints } from '../../styles/media';

import AgeRangeSlider from '../../components/custom/RangeSlider/AgeRangeSlider';
import _SalaryRangeSlider from '../../components/custom/RangeSlider/SalaryRangeSlider';
import CommonLayout from '../../components/layout/CommonLayout';
import Link from 'next/link';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  ${breakpoints.large} {
    width: 128rem;
    padding-top: 33.2rem;
  }
  ${breakpoints.medium} {
    width: 68rem;
    margin-top: 24.6rem;
  }
  ${breakpoints.small} {
    width: 35rem;
    margin-top: 12.8rem;
  }
`;

const ContentsContainer = styled.div`
  width: 100%;
  padding: 5rem 2rem 0 2rem;
  display: flex;
  flex-direction: column;
`;

const SalaryRangeSlider = styled(_SalaryRangeSlider)`
  margin-bottom: 6rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  ${breakpoints.large} {
    bottom: 7.1rem;
  }
  ${breakpoints.medium} {
    bottom: 3.1rem;
  }
  ${breakpoints.small} {
    bottom: 1rem;
  }
`;

const NextButtonText = styled.h3`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  font-size: 2.2rem;
  color: #b70000;
  ${breakpoints.large} {
    font-size: 2.2rem;
    line-height: 2.9rem;
    margin-left: 106.5rem;
  }
  ${breakpoints.medium} {
    font-size: 2.2rem;
    line-height: 2.9rem;
    margin-left: 46.5rem;
  }
  ${breakpoints.small} {
    font-size: 1.6rem;
    line-height: 2.9rem;
    margin-left: 20.5rem;
  }
`;

const ArrowImg = styled.img`
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 10.35rem;
    height: auto;
  }
  ${breakpoints.medium} {
    margin-top: -0.6rem;
    width: 10.35rem;
    height: auto;
  }
  ${breakpoints.small} {
    margin-top: -0.6rem;
    width: 6rem;
    height: auto;
  }
`;

const PrevButtonText = styled.h3`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  text-align: right;
  ${breakpoints.large} {
    font-size: 2.2rem;
    line-height: 2.9rem;
  }
  ${breakpoints.medium} {
    font-size: 2.2rem;
    line-height: 2.9rem;
  }
  ${breakpoints.small} {
    font-size: 1.6rem;
    line-height: 2.9rem;
  }
`;

const ReversedArrowImg = styled.img`
  transform: scaleX(-1);
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 10.35rem;
    height: auto;
  }
  ${breakpoints.medium} {
    margin-top: -0.6rem;
    width: 10.35rem;
    height: auto;
  }
  ${breakpoints.small} {
    margin-top: -0.6rem;
    width: 6rem;
    height: auto;
  }
`;

function Range() {
  const [salaryRange, setSalaryRange] = useState<number[]>([30, 70]);
  const [ageRange, setAgeRange] = useState<number[]>([25, 35]);
  return (
    <Wrapper>
      <ContentsContainer>
        <SalaryRangeSlider
          label="salary"
          value={salaryRange}
          onChange={setSalaryRange}
          min={0}
          max={100}
        />
        <AgeRangeSlider
          label="age"
          value={ageRange}
          onChange={setAgeRange}
          min={20}
          max={50}
        />
      </ContentsContainer>
      <ButtonContainer>
        <Link href="/custom/position">
          <PrevButtonText>
            prev
            <ReversedArrowImg src="/image/Arrow.png" alt="화살표" />
          </PrevButtonText>
        </Link>
        <Link href="/custom/result/player">
          <NextButtonText>
            next
            <ArrowImg src="/image/Arrow.png" alt="화살표" />
          </NextButtonText>
        </Link>
      </ButtonContainer>
    </Wrapper>
  );
}

Range.PageLayout = CommonLayout;

export default Range;
