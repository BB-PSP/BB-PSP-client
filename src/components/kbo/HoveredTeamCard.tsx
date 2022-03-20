import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';

const Wrapper = styled(motion.div)<ITeamCardProps>`
  display: flex;
  flex-direction: column;
  ${(props) => `background: linear-gradient(${props.team.linearGradient});`}
  ${breakpoints.large} {
    width: 13.02vw;
    height: 66.85vh;
  }
  ${breakpoints.medium} {
    width: 25vw;
    height: 50vh;
  }
`;

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
    width: 13.02vw;
    height: 52.96vh;
    bottom: 3.8vh;
  }
  ${breakpoints.medium} {
    width: 25vw;
    height: 40vh;
    bottom: 3.8vh;
  }
`;

const LogoContainer = styled.div<ITeamCardProps>`
  background-image: url(${(props) => props.team.colourLogo});
  background-repeat: no-repeat;
  background-position: center;
  ${breakpoints.large} {
    background-size: auto 16.8vh;
    height: 27.41vh;
    width: 100%;
  }
  ${breakpoints.medium} {
    background-size: auto 12vh;
    height: 18vh;
    width: 100%;
  }
`;

const ContentsContainer = styled.div`
  ${breakpoints.large} {
    width: 10.16vw;
    height: 26.39vh;
    margin-left: 1.25vw;
  }
  ${breakpoints.medium} {
    width: 20vw;
    height: 20vh;
    margin-left: 2.5vw;
  }
`;

const Order = styled.h2`
  font-family: 'NotoSansCJK-Regular'; // font 수정할것
  color: #fff;
  ${breakpoints.large} {
    font-size: 1.67vw;
    line-height: 4.39vh;
  }
  ${breakpoints.medium} {
    font-size: 3vw;
    line-height: 5vh;
  }
`;

const TeamName = styled.h2`
  font-family: 'RobotoMonoLight';
  color: #fff;
  padding-top: 0.74vh;
  ${breakpoints.large} {
    font-size: 1.25vw;
    line-height: 2.93vh;
    padding-bottom: 2.95vh;
  }
  ${breakpoints.medium} {
    font-size: 2.2vw;
    line-height: 3vh;
    padding-bottom: 3vh;
  }
`;

const Box = styled.div`
  ${breakpoints.large} {
    padding-bottom: 3.48vh;
  }
  ${breakpoints.medium} {
    padding-bottom: 4vh;
  }
  ${breakpoints.small} {
    padding-top: 1.4rem;
  }
`;

const Category = styled.p`
  font-family: 'RobotoMonoRegular';
  color: #c5c5c5;
  ${breakpoints.large} {
    font-size: 0.72vw;
    line-height: 1.71vh;
  }
  ${breakpoints.medium} {
    font-size: 1.5vw;
    line-height: 2vh;
  }
`;

const Content = styled.p`
  font-family: 'RobotoMonoRegular';
  color: #fff;
  ${breakpoints.large} {
    font-size: 0.83vw;
    line-height: 0.22vh;
    padding-top: 0.74vh;
  }
  ${breakpoints.medium} {
    font-size: 1.5vw;
    line-height: 1vh;
    padding-top: 1.5vh;
  }
`;

interface ITeamCardProps {
  team: {
    name: string;
    colourLogo: string;
    blackLogo: string;
    teamColour: string;
    linearGradient: string;
    foundedAt: number;
    champCount: number;
    lastSeason: number;
  };
}

export default function HoveredTeamCard({ team }: ITeamCardProps) {
  return (
    <Wrapper team={team}>
      <Background />
      <LogoContainer team={team} />
      <ContentsContainer>
        <Order>1</Order>
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
      </ContentsContainer>
    </Wrapper>
  );
}
