import RangeSliderThumb from '@custom/RangeSlider/RangeSliderThumb';
import { useRangeSlider } from '@custom/RangeSlider/useRangeSlider';
import styled from '@emotion/styled';
import { breakpoints } from '@styles/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Label = styled.label`
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  ${breakpoints.large} {
    font-size: 2.2rem;
    line-height: 2.9rem;
    padding-right: 4.7rem;
    padding-top: 5.8rem;
  }
  ${breakpoints.medium} {
    font-size: 2vw;
    line-height: 1vh;
    padding-right: 2vw;
    padding-top: 6vh;
    width: 10vw;
  }
  ${breakpoints.small} {
    font-size: 2.2vw;
    line-height: 1.2vh;
    padding-right: 2vw;
    padding-top: 7vh;
    width: 15vw;
  }
  > label {
    font-size: 1vw;
    ${breakpoints.medium} {
      font-size: 1vw;
    }
    ${breakpoints.small} {
      font-size: 1.5vw;
    }
  }
`;

const Rail = styled.div`
  position: relative;
  width: 100%;
  height: 3vh;
  margin-top: 6vh;
`;

const GraduationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.4rem;
`;

const LineWrapper = styled.div`
  position: relative;
`;

const Line = styled.div<{ isBold: boolean; isHighlighted: boolean }>`
  width: ${(p) => (p.isBold ? '0.4rem' : '0.2rem')};
  height: ${(p) => (p.isBold ? '3.2rem' : '2.4rem')};
  background-color: ${(p) => (p.isHighlighted ? '#b70000' : '#3d3d3d')};
`;

const Mark = styled.p`
  position: absolute;
  transform: translateX(-50%);
  margin-top: 1vh;
  color: #272727;
  font-size: 1vw;
  ${breakpoints.medium} {
    font-size: 1.5vw;
  }
  ${breakpoints.small} {
    font-size: 2vw;
  }
`;

type SalaryRangeSliderProps = {
  className?: string;
  label?: string;
  value: number[];
  min: number;
  max: number;
  onChange: (value: number[]) => void;
};

export default function SalaryRangeSlider({
  className,
  label,
  min,
  max,
  value,
  onChange,
}: SalaryRangeSliderProps) {
  const {
    railRef,
    minThumbRef,
    maxThumbRef,
    onThumbMouseDown,
    onThumbTouchStart,
  } = useRangeSlider({ value, min, max, onChange });

  const renderGraduation = () => {
    return Array(max - min + 1)
      .fill(0)
      .map((_, index) => {
        const number = min + index;
        const isBold = (min + index) % 5 === 0;
        return (
          <LineWrapper key={number}>
            <Line
              isBold={isBold}
              isHighlighted={value[0] <= number && number <= value[1]}
            />
            {isBold && <Mark>{number}</Mark>}
          </LineWrapper>
        );
      });
  };

  const value2Percent = (v: number): string => {
    return `${(100 * v) / (max - min)}%`;
  };

  return (
    <Wrapper className={className}>
      <Label>
        {label}
        <label>
          <br />
          (억)
        </label>
      </Label>
      <Rail ref={railRef}>
        <GraduationWrapper>{renderGraduation()}</GraduationWrapper>
        <RangeSliderThumb
          ref={minThumbRef}
          left={value2Percent(value[0] - min)}
          value={value[0]}
          onMouseDown={onThumbMouseDown('min')}
          onTouchStart={onThumbTouchStart('min')}
        />
        <RangeSliderThumb
          ref={maxThumbRef}
          left={value2Percent(value[1] - min)}
          value={value[1]}
          onMouseDown={onThumbMouseDown('max')}
          onTouchStart={onThumbTouchStart('max')}
        />
      </Rail>
    </Wrapper>
  );
}
