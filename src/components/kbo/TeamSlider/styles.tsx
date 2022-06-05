import styled from '@emotion/styled';
import { breakpoints } from '@styles/media';

export const TeamSliderContainer = styled.div`
  position: relative;
  align-items: center;
  overflow-y: hidden;
  overflow-x: scroll;
  ${breakpoints.large} {
    height: 71.39vh;
    min-height: 55rem;
    width: 100%;
    white-space: nowrap;
    &::-webkit-scrollbar {
      background: transparent;
      height: 0.5rem;
    }
    &::-webkit-scrollbar-track {
      background: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background: #3d3d3d;
      background-clip: padding-box;
      &:hover {
        background: #606060;
      }
    }
  }
  ${breakpoints.medium} {
    height: 100%;
    width: 100%;
  }
  ${breakpoints.small} {
    margin-top: 5vh;
    height: 60vh;
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 200%;
  height: 100%;
  ${breakpoints.medium} {
    width: 500%;
    height: 100%;
  }
  ${breakpoints.small} {
    width: 1000%;
  }
`;
