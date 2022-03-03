import { useRef, MouseEvent } from 'react';
import styled from 'styled-components';

import RangeSliderThumb from './RangeSliderThumb';

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
  height: 3.2rem;
  margin-top: 6.4rem;
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
  margin-top: 1rem;
  color: #272727;
  font-size: 1.1rem;
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
  const railRef = useRef<HTMLDivElement>(null);
  const minThumbRef = useRef<HTMLDivElement>(null);
  const maxThumbRef = useRef<HTMLDivElement>(null);

  const handleThumbMouseDown = (type: 'min' | 'max') => (e: MouseEvent) => {
    e.preventDefault();

    const rail = railRef.current;
    const minThumb = minThumbRef.current;
    const maxThumb = maxThumbRef.current;

    if (!rail || !minThumb || !maxThumb) return;

    const pixel2Value = (pixel: number): number => {
      return (pixel * (max - min)) / rail.offsetWidth + min;
    };

    const value2Pixel = (v: number): number => {
      return ((v - min) * rail.offsetWidth) / (max - min);
    };

    const shiftX: number =
      type === 'min'
        ? e.clientX - minThumb.getBoundingClientRect().left
        : e.clientX - maxThumb.getBoundingClientRect().left;

    const handleThumbMouseMove = (e: globalThis.MouseEvent) => {
      let newLeft = e.clientX - shiftX - rail.getBoundingClientRect().left;

      const [leftEdge, rightEdge] =
        type === 'min'
          ? [0, value2Pixel(value[1] - 1)]
          : [value2Pixel(value[0] + 1), rail.offsetWidth];
      if (newLeft < leftEdge) {
        newLeft = leftEdge;
      }

      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      onChange(
        type === 'min'
          ? [Math.floor(pixel2Value(newLeft)), value[1]]
          : [value[0], Math.floor(pixel2Value(newLeft))],
      );
    };

    const handleThumbMouseUp = () => {
      document.removeEventListener('mouseup', handleThumbMouseUp);
      document.removeEventListener('mousemove', handleThumbMouseMove);
    };

    document.addEventListener('mousemove', handleThumbMouseMove);
    document.addEventListener('mouseup', handleThumbMouseUp);
  };

  const renderGraduation = () => {
    return Array(max - min + 1)
      .fill(0)
      .map((_, index) => {
        const number = min + index;
        const isBold = (min + index) % 10 === 0;
        return (
          <LineWrapper key={number}>
            <Line
              isBold={isBold}
              isHighlighted={value[0] <= number && number <= value[1]}
            />
            {isBold && <Mark>${number}</Mark>}
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
        <GraduationWrapper>{renderGraduation()}</GraduationWrapper>
        <RangeSliderThumb
          ref={minThumbRef}
          left={value2Percent(value[0] - min)}
          value={'$' + value[0]}
          onMouseDown={handleThumbMouseDown('min')}
        />
        <RangeSliderThumb
          ref={maxThumbRef}
          left={value2Percent(value[1] - min)}
          value={'$' + value[1]}
          onMouseDown={handleThumbMouseDown('max')}
        />
      </Rail>
    </Wrapper>
  );
}
