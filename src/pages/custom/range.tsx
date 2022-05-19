import PageButton from '@button/PageButton';
import AgeRangeSlider from '@custom/RangeSlider/AgeRangeSlider';
// import _SalaryRangeSlider from '@custom/RangeSlider/SalaryRangeSlider';
import styled from '@emotion/styled';
import CommonLayout from '@layout/common/CommonLayout';
import { ageRangeState, selectedPositionState } from '@store/Data/atom';
import { breakpoints } from '@styles/media';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsContainer = styled.div`
  ${breakpoints.large} {
    /* padding-top: 13.52vh; */
    padding-top: 25vh;
    width: 64.64vw;
  }
  ${breakpoints.medium} {
    padding-top: 20vh;
    width: 75vw;
  }
`;

// const SalaryRangeSlider = styled(_SalaryRangeSlider)`
//   margin-bottom: 5.56vh;
// `;

function Range() {
  const position = useRecoilValue(selectedPositionState);
  // const [salaryRange, setSalaryRange] = useState<number[]>([30, 70]);
  const [ageRange, setAgeRange] = useRecoilState<number[]>(ageRangeState);
  return (
    <Wrapper>
      <ContentsContainer>
        {/* <SalaryRangeSlider
          label="salary"
          value={salaryRange}
          onChange={setSalaryRange}
          min={0}
          max={100}
        /> */}
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
}

Range.PageLayout = CommonLayout;

export default Range;
