import styled from '@emotion/styled';
import { breakpoints } from '@styles/media';

export const Card = styled.div`
  position: relative;
  ${breakpoints.large} {
    width: 15.1vw;
    height: 15vh;
    transform-style: preserve-3d;
    transition: 1s;
    transform: rotateY(0deg);
    &:hover {
      transform: rotateY(180deg);
    }
  }
  ${breakpoints.medium} {
    width: 100%;
    height: 20vh;
  }
`;
