import styled from '@emotion/styled';
import { ForwardedRef, forwardRef, MouseEvent, TouchEvent } from 'react';

const Wrapper = styled.div<{ left: string }>`
  position: absolute;
  left: ${(p) => p.left};
  bottom: 3.6rem;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #b70000;
  font-size: 1.3rem;
  cursor: grab;

  & > img {
    width: 2.4rem;
    margin-top: 1rem;
  }
`;

type RangeSliderThumbProps = {
  value: string | number;
  left: string;
  onMouseDown: (e: MouseEvent) => void;
  onTouchStart: (e: TouchEvent) => void;
};

function RangeSliderThumb(
  { value, left, onMouseDown, onTouchStart }: RangeSliderThumbProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <Wrapper
      ref={ref}
      left={left}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onDragStart={() => null}
    >
      <p>{value}</p>
      <img src="/image/range-slider-thumb.png" />
    </Wrapper>
  );
}

export default forwardRef(RangeSliderThumb);
