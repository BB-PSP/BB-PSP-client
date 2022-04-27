import { breakpoints } from '@styles/media';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 10vh;
`;

export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  ${breakpoints.large} {
    padding-top: 5vh;
    column-gap: 1vw;
    row-gap: 6vh;
    .column2 {
      margin-left: 10vw;
      grid-column: span 3;
    }
    .column3 {
      margin-left: 3vw;
      grid-column: span 2;
    }
  }
  ${breakpoints.medium} {
    padding-top: 8vh;
    column-gap: 5vw;
    row-gap: 3vh;
    .column2 {
      margin-left: 7vw;
      grid-column: span 3;
    }
    .column3 {
      grid-column: span 2;
    }
  }
  ${breakpoints.small} {
    height: 50vh;
    row-gap: 5vh;
    grid-template-columns: repeat(1, 1fr);
    overflow-y: scroll;
  }
`;
