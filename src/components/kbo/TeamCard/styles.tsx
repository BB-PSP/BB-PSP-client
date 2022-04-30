import { breakpoints } from '@styles/media';
import styled from 'styled-components';

export interface TeamCardProps {
  company: string;
  name: string;
  colourLogo: string;
  blackLogo: string;
  teamColour: string;
  linearGradient: string;
  foundedAt: number;
  champCount: number;
  lastSeason: number;
}

export interface ITeamCardProps {
  team: {
    name: string;
    colourLogo: string;
    blackLogo: string;
    teamColour: string;
    foundedAt: number;
    champCount: number;
    lastSeason: number;
    linearGradient: string;
  };
}

export const Background = styled.div`
  z-index: -99;
  position: absolute;
  height: 52.96vh;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(39, 39, 39, 0) 0%,
    rgba(39, 39, 39, 0.59) 52.08%,
    rgba(39, 39, 39, 0.87) 100%
  );
  ${breakpoints.large} {
    display: none;
    width: 12.8vw;
    height: 52.96vh;
    bottom: 3.8vh;
  }
  ${breakpoints.medium} {
    width: 48.7%;
    height: 40vh;
    bottom: 3.8vh;
  }
  ${breakpoints.small} {
    width: 69vw;
    height: 100%;
  }
`;

export const ContentsBox = styled.div`
  width: 100%;
  position: relative;
  z-index: 99;
  height: 31.3vh;
  ${breakpoints.large} {
    width: 100%;
    height: 31.3vh;
    padding-top: 4.5vh;
    padding-left: 1.3vw;
    background-color: rgba(39, 39, 39, 0.87);
  }
  ${breakpoints.medium} {
    height: 100%;
    padding: 1vh 0 10vh 4vw;
  }
  ${breakpoints.small} {
    height: 50vh;
    padding-top: 1.8rem;
    padding-left: 2.4rem;
  }
`;

export const LogoBox = styled.div<ITeamCardProps>`
  background-image: url(${(props) => props?.team?.blackLogo});
  background-repeat: no-repeat;
  background-position: center top;
  ${breakpoints.large} {
    background-size: auto 14.8vh;
    height: 13.52vh;
  }
  ${breakpoints.medium} {
    background-image: url(${(props) => props?.team?.colourLogo});
    background-size: auto 16vh;
    background-position: center;
    height: 20vh;
  }
  ${breakpoints.small} {
    background-image: url(${(props) => props?.team?.colourLogo});
    background-size: auto 18vh;
    background-position: center;
    height: 30vh;
  }
`;

export const LogoBoxBackground = styled.div`
  background-color: #505050;
  position: relative;
  top: 1.5vh;
  height: 12.1vh;
  z-index: -1;
  ${breakpoints.medium} {
    display: none;
  }
  ${breakpoints.small} {
    display: none;
  }
`;

export const Wrapper = styled.div<ITeamCardProps>`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 22vh;
  margin-right: 1.1vw;
  width: 13vw;
  ${breakpoints.large} {
    &:hover {
      height: 66.85vh;
      margin-top: 0;
      ${Background} {
        display: block;
      }
      ${ContentsBox} {
        background-color: transparent;
      }
      ${LogoBox} {
        background-image: url(${(props) => props.team.colourLogo});
        background-position: center;
        height: 27.41vh;
      }
      ${LogoBoxBackground} {
        display: none;
      }
      ${(props) => `background: linear-gradient(${props.team.linearGradient});`}
    }
  }
  ${breakpoints.medium} {
    ${(props) => `background: linear-gradient(${props.team.linearGradient});`}
    width: 100%;
    height: 100%;
  }
  ${breakpoints.small} {
    ${(props) => `background: linear-gradient(${props.team.linearGradient});`}
    width: 100%;
    height: 100%;
    margin-right: 1.04vw;
    margin-top: 5vh;
  }
`;

export const TeamName = styled.h2`
  font-family: 'RobotoMonoLight';
  color: #fff;
  padding-top: 0.8rem;
  ${breakpoints.large} {
    font-size: 1.25vw;
    line-height: 2.93vh;
  }
  ${breakpoints.medium} {
    font-size: 3vw;
    line-height: 3vh;
  }
  ${breakpoints.small} {
    font-size: 5vw;
    line-height: 3vh;
  }
`;

export const Box = styled.div`
  ${breakpoints.large} {
    padding-top: 1.04vh;
  }
  ${breakpoints.medium} {
    padding-top: 1vh;
  }
  ${breakpoints.small} {
    padding-top: 1vh;
  }
`;

export const Category = styled.p`
  font-family: 'RobotoMonoRegular';
  color: #c5c5c5;
  ${breakpoints.large} {
    font-size: 0.73vw;
    line-height: 1.71vh;
  }
  ${breakpoints.medium} {
    font-size: 2vw;
    line-height: 3vh;
  }
  ${breakpoints.small} {
    font-size: 3vw;
    line-height: 3.5vh;
  }
`;

export const Content = styled.p`
  font-family: 'RobotoMonoRegular';
  font-size: 0.83vw;
  line-height: 2.2vh;
  color: #fff;
  padding-top: 0.37vh;
  ${breakpoints.medium} {
    font-size: 2vw;
    line-height: 3vh;
  }
  ${breakpoints.small} {
    font-size: 3vw;
    line-height: 3.5vh;
  }
`;
