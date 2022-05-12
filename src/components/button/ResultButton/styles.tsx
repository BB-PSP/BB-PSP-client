import styled from '@emotion/styled';
import { breakpoints } from '@styles/media';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  ${breakpoints.large} {
    width: 61vw;
    height: 6.57vh;
    bottom: 0;
    margin-top: 6.48vh;
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
    line-height: 2.69vh;
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
    height: 3.06vh;
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

export const TestImage = styled.img`
  ${breakpoints.large} {
    margin-left: 0.52vw;
    margin-top: 1.85vh;
    width: 5.39vw;
    height: 3.06vh;
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

export const ReplacementPlayerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: 'RobotoMonoRegular';
  text-align: center;
  color: #272727;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.69vh;
    margin-top: 1.39vh;
    padding: 1.11vh 1.46vw;
    height: 5.19vh;
    margin-left: 3vw;
  }
  ${breakpoints.medium} {
    font-size: 2vw;
    line-height: 3vh;
    margin-top: 1.39vh;
    width: 25vw;
    height: 5.19vh;
  }
  ${breakpoints.small} {
    font-size: 2vw;
    line-height: 3vh;
    margin-top: 1.39vh;
    width: 25vw;
    height: 5.19vh;
    margin-left: 2vw;
  }
`;
