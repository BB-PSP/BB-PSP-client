import styled from '@emotion/styled';
import { breakpoints } from '@styles/media';

export const Container = styled.div`
  background-color: rgb(61, 61, 61);
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  ${breakpoints.large} {
    min-height: 50rem;
  }
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export const ImageContainer = styled.div`
  width: 78rem;
  height: 100%;
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-image: url('/image/baseball/baseball_gradationmask.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  ${breakpoints.medium} {
    width: 100%;
    background-size: auto 40vw;
  }
  ${breakpoints.small} {
    width: 100%;
    background-size: auto 40vw;
  }
`;
