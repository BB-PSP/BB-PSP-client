import { breakpoints } from '@styles/media';
import styled from 'styled-components';

export const ButtonContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  ${breakpoints.large} {
    width: 68vw;
    bottom: 6.5vh;
  }
  ${breakpoints.medium} {
    width: 80vw;
    bottom: 2.9vh;
  }
  ${breakpoints.small} {
    width: 90vw;
    bottom: 1.8vh;
  }
`;

export const ArrowImg = styled.img`
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 5.4vw;
    height: auto;
  }
  ${breakpoints.medium} {
    margin-top: -0.6rem;
    width: 9vw;
    height: auto;
  }
  ${breakpoints.small} {
    margin-top: -0.8vh;
    width: 13vw;
    height: auto;
  }
`;

export const ReversedArrowImg = styled.img`
  transform: scaleX(-1);
  ${breakpoints.large} {
    margin-top: -0.6rem;
    width: 5.4vw;
    height: auto;
  }
  ${breakpoints.medium} {
    margin-top: -0.6rem;
    width: 9vw;
    height: auto;
  }
  ${breakpoints.small} {
    margin-top: -0.8vh;
    width: 13vw;
    height: auto;
  }
`;

export const Button = styled.button`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.69vh;
  }
  ${breakpoints.medium} {
    font-size: 2vw;
    line-height: 3vh;
  }
  ${breakpoints.small} {
    font-size: 3.3vw;
    line-height: 3vh;
  }
`;
