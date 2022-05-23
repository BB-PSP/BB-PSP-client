import styled from '@emotion/styled';
import { breakpoints } from '@styles/media';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  ${breakpoints.large} {
    position: absolute;
    width: 66.67vw;
    bottom: 5vh;
  }
  ${breakpoints.medium} {
    position: absolute;
    width: 88vw;
    bottom: 5vh;
  }
  ${breakpoints.small} {
    position: absolute;
    width: 90vw;
    bottom: 3vh;
  }
`;

export const Button = styled.button`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.7vh;
  }
  ${breakpoints.medium} {
    font-size: 2vw;
    line-height: 3vh;
  }
  ${breakpoints.small} {
    font-size: 2vw;
    line-height: 3vh;
  }
`;

export const ArrowImg = styled.img`
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 5.4vw;
    height: 3vh;
  }
  ${breakpoints.medium} {
    margin-top: -1.5vh;
    width: 10vw;
    height: 3.5vh;
  }
  ${breakpoints.small} {
    margin-top: -1vh;
    width: 10vw;
    height: auto;
  }
`;

export const BackArrowImg = styled.img`
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 5.4vw;
    height: 3vh;
  }
  ${breakpoints.medium} {
    margin-top: -1.5vh;
    width: 10vw;
    height: 3.5vh;
  }
  ${breakpoints.small} {
    margin-top: -1vh;
    width: 10vw;
    height: auto;
  }
`;
