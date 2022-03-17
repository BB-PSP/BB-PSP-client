import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import AgeRangeSlider from '../../components/custom/RangeSlider/AgeRangeSlider';
import _SalaryRangeSlider from '../../components/custom/RangeSlider/SalaryRangeSlider';
import CommonLayout from '../../components/layout/common/CommonLayout';
import PageButton from '../../components/button/PageButton';

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
      <PageButton prev="/custom/position" next="/custom/result/player" />
    </Wrapper>
  );
}

Range.PageLayout = CommonLayout;

export default Range;
