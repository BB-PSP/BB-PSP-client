import { MouseEvent, useCallback, useRef } from 'react';

export const useRangeSlider = (props: {
  value: number[];
  min: number;
  max: number;
  onChange: (value: number[]) => void;
}) => {
  const { value, min, max, onChange } = props;

  const railRef = useRef<HTMLDivElement>(null);
  const minThumbRef = useRef<HTMLDivElement>(null);
  const maxThumbRef = useRef<HTMLDivElement>(null);

  const pixel2Value = useCallback(
    (pixel: number): number => {
      if (!railRef.current) return 0;
      return (pixel * (max - min)) / railRef.current.offsetWidth + min;
    },
    [railRef, min, max],
  );

  const value2Pixel = useCallback(
    (v: number): number => {
      if (!railRef.current) return 0;
      return ((v - min) * railRef.current.offsetWidth) / (max - min);
    },
    [railRef, min, max],
  );

  const onThumbMouseDown = useCallback(
    (type: 'min' | 'max') => (e: MouseEvent) => {
      e.preventDefault();

      const rail = railRef.current;
      const minThumb = minThumbRef.current;
      const maxThumb = maxThumbRef.current;

      if (!rail || !minThumb || !maxThumb) return;

      const shiftX: number =
        type === 'min'
          ? e.clientX - minThumb.getBoundingClientRect().left
          : e.clientX - maxThumb.getBoundingClientRect().left;

      const onThumbMouseMove = (e: globalThis.MouseEvent) => {
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

      const onThumbMouseUp = () => {
        document.removeEventListener('mousemove', onThumbMouseMove);
        document.removeEventListener('mouseup', onThumbMouseUp);
      };

      document.addEventListener('mousemove', onThumbMouseMove);
      document.addEventListener('mouseup', onThumbMouseUp);
    },
    [railRef, minThumbRef, maxThumbRef, value, min, max, onChange],
  );

  return {
    onThumbMouseDown,
    railRef,
    minThumbRef,
    maxThumbRef,
  };
};
