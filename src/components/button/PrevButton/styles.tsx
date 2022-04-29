import { breakpoints } from '@styles/media';
import styled from 'styled-components';

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

export const Button = styled.button`
  cursor: grab;
  font-family: 'RobotoMonoRegular';
  color: #fff;
  text-align: right;
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
