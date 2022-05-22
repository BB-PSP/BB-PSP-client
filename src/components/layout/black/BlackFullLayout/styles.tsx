import styled from '@emotion/styled';
import { breakpoints } from '@styles/media';

export const Container = styled.div`
  position: relative;
  background-color: #3d3d3d;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const BackImage = styled.img`
  position: absolute;
  background-attachment: local;
  padding-top: 13vh;
  z-index: -99;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  ${breakpoints.large} {
    width: 45vw;
    height: auto;
  }
  ${breakpoints.medium} {
    width: 60vw;
    height: auto;
  }
  ${breakpoints.small} {
    width: 80vw;
    height: auto;
  }
`;
