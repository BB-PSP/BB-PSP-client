import styled from '@emotion/styled';
import { breakpoints } from '@styles/media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${breakpoints.large} {
    padding-top: 8.7vh;
  }
  ${breakpoints.medium} {
    padding-top: 8.7vh;
  }
  ${breakpoints.small} {
    padding-top: 5rem;
  }
`;

export const Title = styled.h1`
  cursor: grab;
  font-family: 'PlayfairDisplayBold';
  color: #b70000;
  ${breakpoints.large} {
    font-size: 3.6rem;
  }
  ${breakpoints.medium} {
    font-size: 5vw;
  }
  ${breakpoints.small} {
    font-size: 10vw;
  }
`;

export const SubTitle = styled.h2`
  font-family: 'RobotoMonoRegular';
  color: #b70000;
  ${breakpoints.large} {
    font-size: 1.2rem;
    padding-top: 1vh;
  }
  ${breakpoints.medium} {
    font-size: 2vw;
    padding-top: 1vh;
  }
  ${breakpoints.small} {
    font-size: 3vw;
    padding-top: 2rem;
  }
`;
