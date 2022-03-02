import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';

const Wrapper = styled(motion.div)<ITeamCardProps>`
  display: flex;
  flex-direction: column;
  ${(props) => `background: linear-gradient(${props.team.linearGradient});`}
  width: 25rem;
  ${breakpoints.large} {
    height: 72.2rem;
  }
  ${breakpoints.medium} {
    height: 52.2rem;
  }
  ${breakpoints.small} {
    height: 45.2rem;
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
    width: 25rem;
    height: 57.2rem;
    bottom: 0;
  }
  ${breakpoints.medium} {
    width: 25rem;
    height: 37.2rem;
    bottom: 0;
  }
  ${breakpoints.small} {
    width: 25rem;
    height: 30.2rem;
    bottom: 0;
  }
`;

const LogoContainer = styled.div<ITeamCardProps>`
  background-image: url(${(props) => props.team.colourLogo});
  background-repeat: no-repeat;
  background-position: center;
  ${breakpoints.large} {
    height: 29.6rem;
    width: 100%;
  }
  ${breakpoints.medium} {
    height: 21.3rem;
    width: 100%;
  }
  ${breakpoints.small} {
    height: 21.3rem;
    width: 100%;
  }
`;

const ContentsContainer = styled.div`
  ${breakpoints.large} {
    width: 19.5rem;
    height: 28.5rem;
    margin-left: 2.4rem;
  }
  ${breakpoints.medium} {
    width: 19.5rem;
    height: 30.9rem;
    margin-left: 2.4rem;
  }
  ${breakpoints.small} {
    width: 19.5rem;
    height: 28.5rem;
    margin-left: 2.4rem;
  }
`;

const Order = styled.h2`
  font-family: 'NotoSansCJK-Regular'; // font 수정할것
  color: #fff;
  ${breakpoints.large} {
    font-size: 3.2rem;
    line-height: 4.736rem;
  }
  ${breakpoints.medium} {
    font-size: 3.2rem;
    line-height: 4.736rem;
  }
  ${breakpoints.small} {
    font-size: 2.2rem;
    line-height: 2.736rem;
  }
`;

const TeamName = styled.h2`
  font-family: 'RobotoMonoLight';
  color: #fff;
  padding-top: 0.8rem;
  ${breakpoints.large} {
    font-size: 2.4rem;
    line-height: 3.165rem;
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
    padding-top: 2rem;
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
    font-size: 1.4rem;
    line-height: 1.846rem;
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
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #fff;
  padding-top: 0.4rem;
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
      <Background />
    </Wrapper>
  );
}
