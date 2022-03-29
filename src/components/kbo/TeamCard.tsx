import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';

const Background = styled.div`
  display: none;
  z-index: -99;
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(39, 39, 39, 0) 0%,
    rgba(39, 39, 39, 0.59) 52.08%,
    rgba(39, 39, 39, 0.87) 100%
  );
  ${breakpoints.large} {
    width: 12.8vw;
    height: 52.96vh;
    bottom: 3.8vh;
  }
  ${breakpoints.medium} {
    width: 25vw;
    height: 40vh;
    bottom: 3.8vh;
  }
`;

const ContentsBox = styled.div`
  width: 100%;
  background-color: rgba(39, 39, 39, 0.87);
  position: relative;
  z-index: 99;
  ${breakpoints.large} {
    height: 31.3vh;
    padding-top: 4.5vh;
    padding-left: 1.3vw;
  }
  ${breakpoints.medium} {
    height: 33.8rem;
    padding-top: 1.8rem;
    padding-left: 2.4rem;
  }
`;

const LogoBox = styled.div<ITeamCardProps>`
  background-image: url(${(props) => props?.team?.blackLogo});
  background-repeat: no-repeat;
  background-position: center top;
  ${breakpoints.large} {
    background-size: auto 14.8vh;
    height: 13.52vh;
  }
  ${breakpoints.medium} {
    height: 14.6rem;
  }
`;

const Wrapper = styled.div<ITeamCardProps>`
  display: flex;
  flex-direction: column;
  margin-top: 22.04vh;
  ${breakpoints.large} {
    width: 13.02vw;
    height: 44.81vh;
    margin-right: 1.04vw;
    &:hover {
      height: 66.85vh;
      margin-top: 0;
      ${(props) => `background: linear-gradient(${props.team.linearGradient});`}
      ${ContentsBox} {
        background-color: transparent;
      }
      ${Background} {
        display: block;
      }
      ${LogoBox} {
        background-image: url(${(props) => props.team.colourLogo});
        background-position: center;
        height: 27.41vh;
      }
    }
  }
  ${breakpoints.medium} {
    height: 48.4rem;
    margin-right: 1.04vw;
  }
`;

const LogoBoxBackground = styled.div`
  background-color: #505050;
  position: relative;
  top: 1.48vh;
  height: 12.04vh;
  z-index: -1;
`;

const TeamName = styled.h2`
  font-family: 'RobotoMonoLight';
  color: #fff;
  padding-top: 0.8rem;
  ${breakpoints.large} {
    font-size: 1.25vw;
    line-height: 2.93vh;
  }
  ${breakpoints.medium} {
    font-size: 2.4rem;
    line-height: 3.165rem;
  }
  ${breakpoints.small} {
    font-size: 2rem;
    line-height: 2rem;
  }
`;

const Box = styled.div`
  ${breakpoints.large} {
    padding-top: 1.04vh;
  }
  ${breakpoints.medium} {
    padding-top: 2rem;
  }
  ${breakpoints.small} {
    padding-top: 1.4rem;
  }
`;

const Category = styled.p`
  font-family: 'RobotoMonoRegular';
  color: #c5c5c5;
  ${breakpoints.large} {
    font-size: 0.73vw;
    line-height: 1.71vh;
  }
  ${breakpoints.medium} {
    font-size: 1.4rem;
    line-height: 1.846rem;
  }
  ${breakpoints.small} {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

const Content = styled.p`
  font-family: 'RobotoMonoRegular';
  font-size: 0.83vw;
  line-height: 2.2vh;
  color: #fff;
  padding-top: 0.37vh;
`;

interface TeamCardProps {
  name: string;
  colourLogo: string;
  blackLogo: string;
  teamColour: string;
  linearGradient: string;
  foundedAt: number;
  champCount: number;
  lastSeason: number;
}

interface ITeamCardProps {
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

const TeamCard = (team: TeamCardProps) => {
  return (
    <Wrapper team={team}>
      <Background />
      <LogoBox team={team}>
        <LogoBoxBackground />
      </LogoBox>
      <ContentsBox>
        <TeamName>{team?.name}</TeamName>
        <Box>
          <Category>Last season</Category>
          <Content>{team?.lastSeason}</Content>
        </Box>
        <Box>
          <Category>Wins</Category>
          <Content>{team?.champCount}</Content>
        </Box>
        <Box>
          <Category>Foundation year</Category>
          <Content>{team?.foundedAt}</Content>
        </Box>
      </ContentsBox>
    </Wrapper>
  );
};

export default TeamCard;
