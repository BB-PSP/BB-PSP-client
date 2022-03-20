import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/media';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 22.04vh;
  ${breakpoints.large} {
    width: 13.02vw;
    height: 44.81vh;
  }
  ${breakpoints.medium} {
    height: 48.4rem;
  }
`;

const LogoBox = styled.div<ITeamCardProps>`
  background-image: url(${(props) => props?.team?.blackLogo});
  background-repeat: no-repeat;
  background-position: center top;
  ${breakpoints.large} {
    background-size: auto 16.8vh;
    height: 13.52vh;
  }
  ${breakpoints.medium} {
    height: 14.6rem;
  }
`;

const LogoBoxBackground = styled.div`
  background-color: #505050;
  position: relative;
  top: 1.48vh;
  height: 12.04vh;
  z-index: -1;
`;

const ContentsBox = styled.div`
  width: 100%;
  background-color: rgba(39, 39, 39, 0.87);
  position: relative;
  z-index: 99;
  ${breakpoints.large} {
    height: 31.3vh;
    padding-top: 1.8rem;
    padding-left: 2.4rem;
  }
  ${breakpoints.medium} {
    height: 33.8rem;
    padding-top: 1.8rem;
    padding-left: 2.4rem;
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
    font-size: 3.2rem;
    line-height: 4.736rem;
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

interface ITeamCardProps {
  team: {
    name: string;
    colourLogo: string;
    blackLogo: string;
    teamColour: string;
    foundedAt: number;
    champCount: number;
    lastSeason: number;
  };
}

export default function UnhoveredTeamCard({ team }: ITeamCardProps) {
  return (
    <Wrapper>
      <LogoBox team={team}>
        <LogoBoxBackground />
      </LogoBox>
      <ContentsBox>
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
      </ContentsBox>
    </Wrapper>
  );
}
