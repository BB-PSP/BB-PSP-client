import { ForwardedRef, forwardRef, MouseEvent } from 'react';
import styled from 'styled-components';

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
};

function RangeSliderThumb(
  { value, left, onMouseDown }: RangeSliderThumbProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <Wrapper
      ref={ref}
      left={left}
      onMouseDown={onMouseDown}
      onDragStart={() => null}
    >
      <p>{value}</p>
      <img src="/image/range-slider-thumb.png" />
    </Wrapper>
  );
}

export default forwardRef(RangeSliderThumb);
