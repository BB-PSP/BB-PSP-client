import PageButton from '@button/PageButton';
import AgeRangeSlider from '@custom/RangeSlider/AgeRangeSlider';
import _SalaryRangeSlider from '@custom/RangeSlider/SalaryRangeSlider';
import styled from '@emotion/styled';
import CommonLayout from '@layout/common/CommonLayout';
import { breakpoints } from '@styles/media';
import React, { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsContainer = styled.div`
  ${breakpoints.large} {
    padding-top: 13.52vh;
    width: 64.64vw;
  }
  ${breakpoints.medium} {
    padding-top: 20vh;
    width: 75vw;
  }
`;

const SalaryRangeSlider = styled(_SalaryRangeSlider)`
  margin-bottom: 5.56vh;
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
