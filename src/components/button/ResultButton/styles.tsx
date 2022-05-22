import styled from '@emotion/styled';
import { breakpoints } from '@styles/media';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  ${breakpoints.large} {
    position: absolute;
    width: 61vw;
    bottom: 5vh;
  }
  ${breakpoints.medium} {
    height: 20vh;
    padding-top: 4vh;
  }
  ${breakpoints.small} {
    justify-content: space-between;
    height: 20vh;
    padding-top: 4vh;
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
    width: 4vw;
    font-size: 2vw;
    line-height: 3vh;
  }
  ${breakpoints.small} {
    width: 4vw;
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
    margin-top: -0.6rem;
    width: 10vw;
    height: 3.5vh;
  }
  ${breakpoints.small} {
    margin-top: -0.6rem;
    width: 10vw;
    height: auto;
  }
`;

export const ViewAllBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BackArrowImg = styled.img`
  ${breakpoints.large} {
    margin-left: 0.52vw;
    margin-top: 1.85vh;
    width: 5.4vw;
    height: 3vh;
  }
  ${breakpoints.medium} {
    margin-left: 0.52vw;
    margin-top: 1.85vh;
    width: 10vw;
    height: 3.5vh;
  }
  ${breakpoints.small} {
    margin-left: 0.52vw;
    width: 10vw;
    height: auto;
  }
`;
