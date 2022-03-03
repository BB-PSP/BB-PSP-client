import styled from 'styled-components';

import RangeSliderThumb from './RangeSliderThumb';
import { useRangeSlider } from './useRangeSlider';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  color: #b70000;
  font-size: 1.3rem;
`;

const Rail = styled.div`
  position: relative;
  width: 100%;
  height: 2.4rem;
  background-color: #3d3d3d;
  margin-top: 6.4rem;
`;

const Track = styled.div<{ left: string; width: string }>`
  position: absolute;
  left: ${(p) => p.left};
  width: ${(p) => p.width};
  height: 100%;
  background-color: #b70000;
`;

const GraduationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.4rem;
`;

const LineWrapper = styled.div`
  position: relative;
`;

const Line = styled.div<{ isHighlighted?: boolean }>`
  width: 0.2rem;
  height: ${(p) => (p.isHighlighted ? '1.2rem' : '0.8rem')};
  background-color: ${(p) => (p.isHighlighted ? '#b70000' : '#3d3d3d')};
`;

const Mark = styled.p`
  position: absolute;
  transform: translateX(-50%);
  margin-top: 1rem;
  color: #272727;
  font-size: 1.1rem;
`;

type AgeRangeSliderProps = {
  className?: string;
  label?: string;
  value: number[];
  min: number;
  max: number;
  onChange: (value: number[]) => void;
};

export default function AgeRangeSlider({
  className,
  label,
  min,
  max,
  value,
  onChange,
}: AgeRangeSliderProps) {
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
        const isHighlighted = (min + index) % 5 === 0;
        return (
          <LineWrapper key={number}>
            <Line isHighlighted={isHighlighted} />
            {isHighlighted && <Mark>{number}</Mark>}
          </LineWrapper>
        );
      });
  };

  const value2Percent = (v: number): string => {
    return `${(100 * v) / (max - min)}%`;
  };

  return (
    <Wrapper className={className}>
      <Label>{label}</Label>
      <Rail ref={railRef}>
        <Track
          left={value2Percent(value[0] - min)}
          width={value2Percent(value[1] - value[0])}
        />
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
      <GraduationWrapper>{renderGraduation()}</GraduationWrapper>
    </Wrapper>
  );
}
