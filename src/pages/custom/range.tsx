import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { breakpoints } from '../../styles/media';

import AgeRangeSlider from '../../components/custom/RangeSlider/AgeRangeSlider';
import _SalaryRangeSlider from '../../components/custom/RangeSlider/SalaryRangeSlider';
import CommonLayout from '../../components/layout/CommonLayout';

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
  }
  ${breakpoints.small} {
    width: 35rem;
  }
`;

const ContentsContainer = styled.div`
  width: 100%;
  padding: 11.5rem 8.8rem 13.6rem 8.8rem;
  display: flex;
  flex-direction: column;
`;

const SalaryRangeSlider = styled(_SalaryRangeSlider)`
  margin-bottom: 6rem;
`;

function Range() {
  const [salaryRange, setSalaryRange] = useState<number[]>([30, 70]);
  const [ageRange, setAgeRange] = useState<number[]>([25, 35]);
  useEffect(() => console.log('렌더링'));

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
    </Wrapper>
  );
}

Range.PageLayout = CommonLayout;

export default Range;
