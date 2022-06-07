import PageButton from '@button/PageButton';
import AgeRangeSlider from '@custom/RangeSlider/AgeRangeSlider';
import _SalaryRangeSlider from '@custom/RangeSlider/SalaryRangeSlider';
import styled from '@emotion/styled';
import CommonLayout from '@layout/common/CommonLayout';
import {
  ageRangeState,
  salaryRangeState,
  selectedPositionState,
} from '@store/Data/atom';
import { breakpoints } from '@styles/media';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsContainer = styled.div`
  ${breakpoints.large} {
    padding-top: 10vh;
    width: 64.64vw;
  }
  ${breakpoints.medium} {
    padding-top: 15vh;
    width: 80vw;
  }
  ${breakpoints.small} {
    padding-top: 12vh;
    width: 90vw;
  }
`;

const SalaryRangeSlider = styled(_SalaryRangeSlider)`
  margin-bottom: 8vh;
`;

const Range = () => {
  const position = useRecoilValue(selectedPositionState);
  const [salaryRange, setSalaryRange] =
    useRecoilState<number[]>(salaryRangeState);
  const [ageRange, setAgeRange] = useRecoilState<number[]>(ageRangeState);
  useEffect(() => {
    setSalaryRange([0, 1]);
    setAgeRange([20, 21]);
  }, []);
  return (
    <Wrapper>
      <ContentsContainer>
        <SalaryRangeSlider
          label="salary"
          value={salaryRange}
          onChange={setSalaryRange}
          min={0}
          max={30}
        />
        <AgeRangeSlider
          label="age"
          value={ageRange}
          onChange={setAgeRange}
          min={20}
          max={50}
        />
      </ContentsContainer>
      {position[0] === 'P' ? (
        <PageButton prev="/custom/position" next="/custom/pitcher" />
      ) : (
        <PageButton prev="/custom/position" next="/custom/batter" />
      )}
    </Wrapper>
  );
};

Range.PageLayout = CommonLayout;

export default Range;
