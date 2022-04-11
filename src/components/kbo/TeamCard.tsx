import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';
import Link from 'next/link';

const Background = styled.div`
  z-index: -99;
  position: absolute;
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
    width: 37.5vw;
    height: 40vh;
    bottom: 3.8vh;
  }
  ${breakpoints.small} {
    width: 69vw;
    height: 100%;
  }
`;

const ContentsBox = styled.div`
  width: 100%;
  position: relative;
  z-index: 99;
  ${breakpoints.large} {
    height: 31.3vh;
    padding-top: 4.5vh;
    padding-left: 1.3vw;
    background-color: rgba(39, 39, 39, 0.87);
  }
  ${breakpoints.medium} {
    height: 40vh;
    padding-top: 2vh;
    padding-left: 4vw;
  }
  ${breakpoints.small} {
    height: 50vh;
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

const Wrapper = styled.div<ITeamCardProps>`
  display: flex;
  flex-direction: column;
  ${breakpoints.large} {
    width: 13.02vw;
    height: 44.81vh;
    margin-top: 22.04vh;
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
    ${(props) => `background: linear-gradient(${props.team.linearGradient});`}
    width: 37.5vw;
    height: 100%;
    margin-right: 1.04vw;
  }
  ${breakpoints.small} {
    ${(props) => `background: linear-gradient(${props.team.linearGradient});`}
    width: 100%;
    height: 100%;
    margin-right: 1.04vw;
    margin-top: 5vh;
  }
`;

const LogoBoxBackground = styled.div`
  background-color: #505050;
  position: relative;
  top: 1.48vh;
  height: 12.04vh;
  z-index: -1;
  ${breakpoints.medium} {
    display: none;
  }
  ${breakpoints.small} {
    display: none;
  }
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
    font-size: 3vw;
    line-height: 3vh;
  }
  ${breakpoints.small} {
    font-size: 5vw;
    line-height: 3vh;
  }
`;

const Box = styled.div`
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

const Category = styled.p`
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

const Content = styled.p`
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

interface TeamCardProps {
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
    <Link
      href={{
        pathname: `/kbo/${encodeURIComponent(team.name)}`,
        query: { name: JSON.stringify(team.name) },
      }}
      as={`/kbo/${encodeURIComponent(team.name)}`}
    >
      <Wrapper team={team}>
        <Background />
        <LogoBox team={team}>
          <LogoBoxBackground />
        </LogoBox>
        <ContentsBox>
          <TeamName>
            {team?.company} {team?.name}
          </TeamName>
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
    </Link>
  );
};

export default TeamCard;
