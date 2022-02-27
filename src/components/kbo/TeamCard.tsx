import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { ITeam } from '../../store/Types';
import { breakpoints } from '../../styles/media';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 25rem;
  ${breakpoints.large} {
    height: 48.4rem;
  }
  ${breakpoints.medium} {
    height: 48.4rem;
  }
  ${breakpoints.small} {
    height: 40rem;
  }
`;

const LogoBox = styled.div<ITeam>`
  background-image: url(${(props) => props.colourLogo});
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  ${breakpoints.large} {
    height: 14.6rem;
  }
  ${breakpoints.medium} {
    height: 14.6rem;
  }
  ${breakpoints.small} {
    height: 14.6rem;
  }
`;

const LogoBoxBackground = styled.div`
  background-color: #505050;
  position: relative;
  top: 1.6rem;
  height: 13rem;
  z-index: -1;
`;

const ContentsBox = styled.div`
  width: 100%;
  background-color: rgba(39, 39, 39, 0.87);
  position: relative;
  z-index: 99;
  ${breakpoints.large} {
    height: 33.8rem;
    padding-top: 1.8rem;
    padding-left: 2.4rem;
  }
  ${breakpoints.medium} {
    height: 33.8rem;
    padding-top: 1.8rem;
    padding-left: 2.4rem;
  }
  ${breakpoints.small} {
    height: 25rem;
    padding-top: 1rem;
    padding-left: 2.4rem;
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

export default function TeamCard(team: ITeam) {
  return (
    <Wrapper>
      <LogoBox {...team}>
        <LogoBoxBackground />
      </LogoBox>
      <ContentsBox>
        <Order>1</Order>
        <TeamName>{team.name}</TeamName>
        <Box>
          <Category>Last season</Category>
          <Content>{team.lastSeason}</Content>
        </Box>
        <Box>
          <Category>Wins</Category>
          <Content>{team.champCount}</Content>
        </Box>
        <Box>
          <Category>Foundation year</Category>
          <Content>{team.foundedAt}</Content>
        </Box>
      </ContentsBox>
    </Wrapper>
  );
}
