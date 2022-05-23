import styled from '@emotion/styled';
import { breakpoints } from '@styles/media';

export const Wrapper = styled.div`
  padding-right: 3.33vw;
  padding-left: 3.33vw;
`;

export const Season = styled.h3`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.69vh;
    padding-top: 4.81vh;
  }
  ${breakpoints.medium} {
    font-size: 2vw;
    line-height: 3vh;
    padding-top: 4vh;
  }
  ${breakpoints.small} {
    font-size: 2.2vw;
    line-height: 3vh;
    padding-top: 4vh;
  }
`;

export const Table = styled.table`
  ${breakpoints.large} {
    width: 60vw;
    margin-top: 3.52vh;
    margin-bottom: 5.1vh;
  }
  ${breakpoints.medium} {
    width: 81vw;
    margin-top: 3.52vh;
    margin-bottom: 5.1vh;
  }
  ${breakpoints.small} {
    width: 83vw;
    margin-top: 2vh;
  }
`;

export const StatTr = styled.tr`
  border-collapse: collapse;
  &:first-child {
    border-bottom: 1px solid #fff;
  }
`;

export const StatTh = styled.th`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.69vh;
    width: 3.39vw;
    padding-bottom: 0.7rem;
  }
  ${breakpoints.medium} {
    font-size: 2vw;
    line-height: 3vh;
    width: 7vw;
    padding-bottom: 0.5vh;
  }
  ${breakpoints.small} {
    font-size: 2vw;
    line-height: 3vh;
    width: 10vw;
    padding-bottom: 0.5vh;
  }
`;

export const StatTd = styled.td`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  text-align: center;
  ${breakpoints.large} {
    font-size: 1.15vw;
    line-height: 2.69vh;
    width: 3.39vw;
    padding-top: 2.13vh;
  }
  ${breakpoints.medium} {
    font-size: 2vw;
    line-height: 3vh;
    width: 7vw;
    padding-top: 1vh;
  }
  ${breakpoints.small} {
    font-size: 2vw;
    line-height: 3vh;
    width: 10vw;
    padding-top: 1vh;
  }
`;
